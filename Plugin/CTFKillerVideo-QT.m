//
//  CTFKillerVideo-QT.m
//  ClickToFlash
//
//  Created by  Sven on 13.12.09.
//  Copyright 2009 earthlingsoft. All rights reserved.
//

#import "CTFKillerVideo-QT.h"
#import "CTFUserDefaultsController.h"
#import "Plugin.h"
#import <QTKit/QTKit.h>
#import "CTFButtonsView.h"
#import "CTFButton.h"


NSString * sVideoVolumeLevelDefaultsKey = @"Video Volume Level";



@implementation CTFKillerVideo (QuickTime)

/* This is 10.5 and higher only. It is only used for QTMovie-style playback which requires 10.5 as well. */
+ (NSSet *) keyPathsForValuesAffectingValueForKey: (NSString *) key {
	NSSet * result = [super keyPathsForValuesAffectingValueForKey:key];
	
	if ([key isEqualToString:@"HDButtonTooltip"]) {
		result = [result setByAddingObject: @"usingHD"];
	}
	
	return result;
}



+ (BOOL) shouldUseQTKit {
	BOOL result = (floor(NSAppKitVersionNumber) >= NSAppKitVersionNumber10_5);
	result = result && [[CTFUserDefaultsController standardUserDefaults] boolForKey: sUseQTKitDefaultsKey];
	return result;
}





#pragma mark -
#pragma mark Insert Video using QTKit - 10.5 and higher only

- (void) setupQuickTimeUsingHD: (NSNumber*) useHDNumber {
	NSThread * thread = [[[NSThread alloc] initWithTarget:self selector:@selector(reallySetupQuickTimeUsingHD:) object:useHDNumber] autorelease];
	[thread setName: @"CTFKillerVideo movieSetup"];
	[self setMovieSetupThread: thread];
	[thread start];
}



- (void) reallySetupQuickTimeUsingHD: (NSNumber *) useHDNumber {
	NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];
	NSView * mainContainer = [[self plugin] containerView];
	NSRect bounds;
	if (mainContainer != nil) {
		bounds = [mainContainer bounds];
	}
	else {
		bounds = NSZeroRect;
	}
	
	QTMovieView * myMovieView = [self movieView];
	BOOL needToInsertMovieView = NO;
	
	if ( myMovieView == nil ) {
		myMovieView = [[[QTMovieView alloc] initWithFrame:bounds] autorelease];
		[myMovieView setAutoresizingMask: NSViewWidthSizable | NSViewHeightSizable];		
		[myMovieView setPreservesAspectRatio:YES];
		[myMovieView setWantsLayer: YES]; // video seems invisible without the layer
		//		[myMovieView setCustomButtonVisible:YES];
		if ( [[self plugin] isFullScreen] ) {
			[myMovieView setFillColor: [NSColor blackColor]];			
		}
		else {
			[myMovieView setFillColor: [NSColor clearColor]];
		}
		
		if ( myMovieView == nil ) { // ERROR
			NSLog(@"CTFKillerVideo: Could not create movie view in -reallySetupQuickTimeUsingHD:");
			return; 
		}
		
		[self setMovieView: myMovieView];
		needToInsertMovieView = YES;
	}
	
	// Add progress indicator. It will be removed when the film has loaded sufficiently or when loading fails.
	[self addProgressIndicator];
	
	QTMovie * myMovie = [self movieForHD: useHDNumber];
	if ( myMovie != nil && ![[self movieSetupThread] isCancelled] ) {
		[self setMovie: myMovie];
		[myMovieView setMovie: myMovie];
		
		// It seems like QTMovieView has two subviews: one displaying the film, one for the controller. The controller view seems to end up _not_ wanting the layer. This can cause the controller to disappear after switching tags. So we sneakily set all subviews of the QTMovieView to want a layer here.
		NSEnumerator * viewEnumerator = [[myMovieView subviews] objectEnumerator];
		NSView * view;
		while ( ( view = [viewEnumerator nextObject] ) ) {
			[view setWantsLayer:YES];
		}
		
		if (needToInsertMovieView) {
			[mainContainer addSubview: myMovieView positioned: NSWindowBelow relativeTo: nil];
			[[self plugin] setNextKeyView: myMovieView];
			[myMovieView setNextKeyView: (NSView*)[[self plugin] mainButton]];
		}
		[[[self plugin] mainButton] setHidden:YES];
		[[[self plugin] window] makeFirstResponder: myMovieView];
	}
	
	[self setMovieSetupThread: nil];
	
	// not doing this on the main thread seems to hang the application
	// [self performSelectorOnMainThread:@selector(resizeToFitMovie) withObject:nil waitUntilDone:NO];
	
	[pool release];	
}



- (QTMovie *) movieForHD: (NSNumber *) useHDNumber {
	BOOL useHD = [self useVideoHD];
	if ( useHDNumber != nil ) {
		useHD = [useHDNumber boolValue];
	}
	
	NSString * movieURLString = [self videoURLStringForHD: useHD];
	NSURL * movieURL = [NSURL URLWithString: movieURLString];
	NSError * error = nil;
	QTMovie * myMovie = nil;
	//	movie = [QTMovie movieWithURL: movieURL error: &error];
	float volumeLevel = 1.;
	NSNumber * volumeNumber = [[CTFUserDefaultsController standardUserDefaults] objectForKey: sVideoVolumeLevelDefaultsKey];
	if ( volumeNumber != nil ) {
		volumeLevel = MAX(.0 , MIN( [volumeNumber floatValue], 1.));
	}
	volumeNumber = [NSNumber numberWithFloat: volumeLevel];
	
	NSDictionary * movieAttributes = [NSDictionary dictionaryWithObjectsAndKeys:
									  movieURL, QTMovieURLAttribute, 
									  [NSNumber numberWithBool:YES], QTMovieOpenAsyncOKAttribute,
									  volumeNumber, QTMovieVolumeAttribute,
									  //									  [NSNumber numberWithBool:YES], QTMovieOpenForPlaybackAttribute,
									  nil];
	
	myMovie = [QTMovie movieWithAttributes:movieAttributes error:&error];
	//	NSLog(@"CTFKillerVideo -movieForHD: movie attributes %@", [[myMovie movieAttributes] description]);
	if ( myMovie == nil ) {
		// If we get nil, just try again. This seems to cover a bunch of the random loading problems. It would probably be better to load the 'hash' or other extra info again before retrying to also cover timeout problems
		myMovie = [QTMovie movieWithAttributes:movieAttributes error:&error];
	}
	if (myMovie == nil){
		// It seems like we occasionally get an error "The file is not a movie file" here. No idea why as the same URL appears to work again a bit later. Some clever retrying or reasonable handling of that might be nice.
		NSLog(@"ClickToFlash CTFKillerVideo -movieForHD: Error: %@ (%@)", [error localizedDescription], movieURLString);
	}	
	else {
		if ([self autoPlay]) {
			[myMovie autoplay];
		}		
	}
	
	return myMovie;	
}






#pragma mark -
#pragma mark Notifications


/*
 Called by QTMovieVolumeDidChangeNotification.
 Stores the new volume level in defaults, so future movies can use it.
*/
- (void) movieVolumeChanged: (NSNotification *) notification {
	NSNumber * volumeNumber = [NSNumber numberWithFloat:[[self movie] volume]];
	[[CTFUserDefaultsController standardUserDefaults] setObject:volumeNumber forKey: sVideoVolumeLevelDefaultsKey];
}



/*
 Called by QTMovieLoadStateDidChangeNotification.
 When movie has loaded: adjust button positions to fit into the movie's frame.
 When movie is playable: start auto-playing if required, hide progress indicator.
 When an error occurs: try refreshing the video's URL and loading again.
 
 TODO: sometimes Vimeo videos don't get us a changed load state…
       … before the film is completely loaded. Hence we cannot hide the progress indicator or autoplay.
 TODO: figure out how to handle persistent failures of video loading
*/
- (void) movieLoadStateChanged: (NSNotification *) notification {
    long loadState = [[[self movie] attributeForKey:QTMovieLoadStateAttribute] longValue];
#if LOGGING_ENABLED
	NSLog(@"CTFKillerVideo -movieLoadStateChanged: %i", loadState);
#endif
	
    if (loadState >= QTMovieLoadStatePlayable) {
        // The movie has loaded enough media data to begin playing. Remove the progress indicator first and then start playing, if appropriate.
		[self removeProgressIndicator];
		
		// Sometimes loading is slow and the load state keeps toggling between Playable and PlaythroughOK. This can cause the film to toggle stopping and starting many times in a row. To prevent that from happening, make sure we only autoPlay once.
		if ([self autoPlay] && ![self hasAutoPlayed]) {
			[[self movie] play];
			[self setHasAutoPlayed:YES];
		}
    }
	if (loadState >= QTMovieLoadStateLoaded) {
        // The movie atom has loaded. It's safe to query movie properties like the size now.
		[self adjustButtonPositions:YES];
		
		// Set refresh status back to NO in case a HD toggle is coming and could use a refresh again.
		hasRefreshedURLs = NO;
    }
    else if (loadState == -1) {
		// Loading the movie failed.
		
		// Try refreshing the URL once. It may just be that the hash/token used in our URL has expired because it has been a while since we set things up.
		if ( ![self hasRefreshedURLs] ) {
			[self refreshVideoURLs];
			[self setupQuickTimeUsingHD: nil];
			[self setHasRefreshedURLs: YES];
		}
		else {
			// Refreshing the URL did not do the trick. Remove progress indicator.
			[self removeProgressIndicator];
			// It'd be nice to do something helpful here (fall back to Flash? display error message?)
			NSLog(@"CTFKillerVideo -movieLoadStateChanged: An error occurred when trying to load the movie\n%@", [[[self movie] movieAttributes] description]);
		}
    }
}



/*
 Called by QTMovieDidEndNotification.
 Shows end of movie buttons.
*/
- (void) movieDidEnd: (NSNotification *) notification {
#ifdef LOGGING_ENABLED
	NSLog(@"CTFKillerVideo QuickTime: movie did end");
#endif
	
	[self showEndOfMovieButtons];
}



/*
 Called by QTMovieTimeDidChangeNotification.
 Determines whether we are at the end of the movie and shows/hides the end of movie buttons accordingsly.
*/
- (void) movieTimeDidChange: (NSNotification *) notification {
#ifdef LOGGING_ENABLED
	NSLog(@"CTFKillerVideo QuickTime: movie time changed");
#endif

	if ( [[self movie] currentTime].timeValue == [[self movie] duration].timeValue ) {
		[self showEndOfMovieButtons];
	}
	else{
		[self hideEndOfMovieButtons];
	}
}



/*
 Fade in buttons.
 Create them when needed.
 TODO: sort out key loop?
 ... not sure we're actually having much of a key loop in the WebView
 TODO: Accessibility
 TODO: Draw translucent background behind buttons?
*/
- (void) showEndOfMovieButtons {
	NSView * myView = [self endOfMovieButtonsView];
	if ( myView == nil ) {
		// Create view with buttons if it doesn't exist yet.
		
		// Download button
		CTFButton * downloadButton = [CTFButton button];
		[downloadButton setTarget: self];
		[downloadButton setAction: @selector(saveMovie:)];
		NSString * buttonTitle = CtFLocalizedString(@"Save Movie", @"CTFKillerVideo QuickTime: Title of Save Movie button at end of Movie");
		NSMutableParagraphStyle * paragraphStyle = [[[NSParagraphStyle defaultParagraphStyle] mutableCopy] autorelease];
		[paragraphStyle setAlignment: NSCenterTextAlignment];
		NSDictionary * fontStyle = [NSDictionary dictionaryWithObjectsAndKeys: [NSFont systemFontOfSize: 16.0], NSFontAttributeName, paragraphStyle, NSParagraphStyleAttributeName, nil];
		NSAttributedString * attributedTitle = [[[NSAttributedString alloc] initWithString: buttonTitle attributes: fontStyle] autorelease];
		[downloadButton setAttributedTitle: attributedTitle];
		[downloadButton sizeToFit];
		[downloadButton setWantsLayer: YES];
		
		NSSize buttonSize = [downloadButton frame].size;
		CGFloat buttonWidth = buttonSize.width;
		NSRect containerRect;
		containerRect.origin = NSZeroPoint;
		containerRect.size = buttonSize;

		// Go to Video Page button
		CTFButton * gotoVideoPageButton = nil;
		
		if ( ![self isOnVideoPage] ) {
			// not on the video page -> show button to visit the video's page as well
			gotoVideoPageButton = [CTFButton button];
			[gotoVideoPageButton setTarget: self];
			[gotoVideoPageButton setAction: @selector(gotoVideoPage:)];
			buttonTitle = [NSString stringWithFormat: CtFLocalizedString(@"Go to %@ page", @"CTFKillerVideo QuickTime: Title of Go to video page button at end of Movie. %@ is the video site's name"), [self siteName]];
			attributedTitle = [[[NSAttributedString alloc] initWithString: buttonTitle attributes: fontStyle] autorelease];
			[gotoVideoPageButton setAttributedTitle: attributedTitle];
			[gotoVideoPageButton sizeToFit];
			[gotoVideoPageButton setWantsLayer: YES];
		
			// Both buttons have the same height. Make them the same width as well
			buttonWidth = MAX(buttonSize.width, [gotoVideoPageButton frame].size.width);
			buttonSize.width = buttonWidth;
			[downloadButton setFrameSize: buttonSize];
			[gotoVideoPageButton setFrameSize: buttonSize];

			// Adjust size of containing view
			containerRect.size.width = buttonWidth;
			containerRect.size.height = 2 * containerRect.size.height + 8.0;
		}
		
		
		// Create tightly fitting view containing the button(s)
		NSView * endOfMovieButtonsContainer = [[[NSView alloc] initWithFrame: containerRect] autorelease];
		[endOfMovieButtonsContainer setWantsLayer: YES];
		
		[endOfMovieButtonsContainer addSubview: downloadButton];
	
		if ( ![self isOnVideoPage] ) {
			NSPoint buttonOrigin = NSMakePoint( .0, containerRect.size.height - [gotoVideoPageButton frame].size.height );
			[gotoVideoPageButton setFrameOrigin: buttonOrigin];
			[endOfMovieButtonsContainer addSubview: gotoVideoPageButton];
		}
		
		// Add the buttons view to the containerView of the plugin
		NSRect pluginFrame = [[[self plugin] containerView] frame];
		CGFloat x = (pluginFrame.size.width - containerRect.size.width) / 2.;
		CGFloat y = (pluginFrame.size.height - containerRect.size.height) / 2.;
		NSPoint buttonContainerOrigin = NSMakePoint( floor(x), floor(y) );
		[endOfMovieButtonsContainer setFrameOrigin: buttonContainerOrigin];
		[endOfMovieButtonsContainer setAutoresizingMask: NSViewMinXMargin | NSViewMaxXMargin | NSViewMinYMargin | NSViewMaxYMargin];
		[[[self plugin] containerView] addSubview: endOfMovieButtonsContainer];
		
		[self setEndOfMovieButtonsView: endOfMovieButtonsContainer];
	}
	
	// Fade in
	[[myView animator] setAlphaValue: 1.];
}



/*
 Fade out the button(s).
 Do this a bit more quickly than the default to not get in people's way in case they want to re-watch part of the movie.
 Does horrible stuff to avoid linking to CoreAnimation libraries.
*/
- (void) hideEndOfMovieButtons {
	NSView * view = [self endOfMovieButtonsView];
	if ( view != nil && [view alphaValue] != .0) {
		// Create class object from string so we don't have to link to Core Quartz Core
		Class CAT = NSClassFromString(@"CATransaction");
		[CAT begin];
		// BAD: makes kCATransactionAnimationDuration explicit because we don't have the symbolic constant
		[CAT setValue: [NSNumber numberWithFloat:.05] forKey:@"animationDuration"];
		[[view animator] setAlphaValue: .0];
		[CAT commit];
	}
}





/*
 Save our loaded movie.
 Try to figure out the downloads folder and use that as the location.
 If we know the video's name, use that as the file name.
 Otherwise use the video site's name in the file name.
 Make sure file names are unique.
 TODO: Hold Option key to get Save dialogue.
 TODO: Write xattr with video's web page URL?
 TODO: investigate problems with saving
 ... eg on http://vimeo.com/8186279, resulting in a -2015 "The movie contains an incorrect time value" error. Allegedly saving as MP4 resolves this in other applications, but how does one save in QT (and why can't we just grab the downloaded file?
*/
- (IBAction) saveMovie: (id) sender {
	NSAssert( [self movie] != nil, @"CTFKillerVideo-QT -saveMovie called even though movie == nil");
    long loadState = [[[self movie] attributeForKey:QTMovieLoadStateAttribute] longValue];
	NSAssert( loadState == QTMovieLoadStateComplete, @"CTFKillerVideo-QT -saveMovie called even though the movie is not loaded completely");
	
	NSString * destinationPath;
	NSArray * searchPaths = NSSearchPathForDirectoriesInDomains( NSDownloadsDirectory, NSUserDomainMask, YES);
	if ( [searchPaths count] > 0 ) {
		NSString * basePath = [searchPaths objectAtIndex: 0];
		NSString * fileName = [self title];
		if ( fileName == nil ) {
			fileName = [NSString stringWithFormat: CtFLocalizedString(@"%@ Video", @"CTFKillerVideo QuickTime: default file name for saved movie. %@ will be the name of the video site"), [self siteName]];
		}
		
		// NSString * fileNameExtension = @"";
		NSString * fullName = fileName; //[videoTitle stringByAppendingPathExtension: fileNameExtension];
		destinationPath = [basePath stringByAppendingPathComponent: fullName];
		
		unsigned i = 2;
		const unsigned maximumNumber = 10000;
		// make sure we have a unique name
		while ([[NSFileManager defaultManager] fileExistsAtPath: destinationPath] && i < maximumNumber) {
			fullName = [fileName stringByAppendingFormat:@"-%u", i++]; // if one used file name extensions, the format would need to be adapted
			destinationPath = [basePath stringByAppendingPathComponent: fullName];
		}
		if ( i == maximumNumber) { // yeah right, we totally need this!
			NSLog(@"CTFKillerVideo-QT: could not save file because all the file names I want are already used");
			return;
		}
	}
	
	NSError * error = nil;
	NSDictionary * saveAttributes = [NSDictionary dictionaryWithObjectsAndKeys: [NSNumber numberWithBool: YES], QTMovieFlatten, nil];
	BOOL saveSuccessful = [[self movie] writeToFile: destinationPath withAttributes: saveAttributes error: &error];
	if (!saveSuccessful) {
		if (error != nil) {
			NSLog(@"ClickToFlash failed to Save the movie with error: %@", [error description]);
		}
	}
}






#pragma mark -
#pragma mark Helpers

// Adds the progress indicator shown used while loading the video
- (void) addProgressIndicator {
	// We only want a single progress indicator, so make sure we don't create a new one in case it already exists.
	if ([self progressIndicator] == nil) {
		const CGFloat pISize = 32.;
		
		NSRect pIRect = NSMakeRect(NSMidX([[self plugin] bounds]) - pISize*.5,
								   NSMidY([[self plugin] bounds]) - pISize*.5,
								   pISize,
								   pISize);
		
		NSProgressIndicator * theProgressIndicator = [[NSProgressIndicator alloc] initWithFrame:pIRect];
		[self setProgressIndicator: theProgressIndicator];
		
		[theProgressIndicator setAutoresizingMask: NSViewMinXMargin | NSViewMaxXMargin | NSViewMinYMargin | NSViewMaxYMargin];
		[theProgressIndicator setStyle: NSProgressIndicatorSpinningStyle];
		[theProgressIndicator setWantsLayer: YES];
		
		[theProgressIndicator startAnimation: self];
		[[[self plugin] containerView] addSubview:theProgressIndicator];
	}
}



// Removes the progress indicator shown while loading the video
- (void) removeProgressIndicator {
	if ([self progressIndicator]) {
		[[self progressIndicator] stopAnimation: self];
		[progressIndicator removeFromSuperview];
		[self setProgressIndicator: nil];
	}
}



/* 
 Move the buttons container around if necessary.  
 We want:
 * standard display behaviour before the film is loaded
 * The buttons container to be full width at the top of the screen in fullscreen mode 
 * The buttons container fitting into the bounds of the displayed movie when the movie view is present
 */
- (void) adjustButtonPositions:(BOOL) smoothly {
	NSRect movieRect;
	
	if ([self movieView]) {
		if ([[self plugin] isFullScreen]) {
			movieRect = [[[[self plugin] window] screen] frame];
		}
		else {
			movieRect = [[self movieView] movieBounds];
			movieRect.size.height += [[self movieView] controllerBarHeight];
			movieRect.origin.y -= [[self movieView] controllerBarHeight];		
		}
		
		if (smoothly && (floor(NSAppKitVersionNumber) >= NSAppKitVersionNumber10_5)) {
			[[[[self plugin] buttonsContainer] animator] setFrame: movieRect];
		}
		else {
			[[[self plugin] buttonsContainer] setFrame: movieRect];
		}
	}
}



/* Adds button to toggle between the SD and HD version of a film. Only appears when two versions are available and serves as an indicator for the currently playing version */
- (NSButton *) addHDButton {
	NSButton * button = nil;
	
	if ([self hasVideo] && [self hasVideoHD]) {
		button = [[[self plugin] buttonsView] viewWithTag: CTFHDButtonTag];
		if (button == nil) {
			NSCellStateValue state = NSOnState;
			if ( ![self useVideoHD] ) { state = NSOffState; }
			[self setUsingHD: state];
			
			button = [CTFButton button];
			[button setTitle: CtFLocalizedString( @"HD", @"CTFKillerVideo: Label for HD button")];
			[button sizeToFit];
			[button setButtonType: NSPushOnPushOffButton];
			[button setTag: CTFHDButtonTag];
			[button setTarget: self];
			[button setAction: @selector(toggleHD:)];
			[[[self plugin] buttonsView] addButton: button];
			[button bind:@"toolTip" toObject:self withKeyPath:@"HDButtonTooltip" options:nil];
			[button bind:@"value" toObject:self withKeyPath:@"usingHD" options:nil];
		}
	}	
	return button;
}



/* Used for tooltip in HD button via bindings */
- (NSString *) HDButtonTooltip {
	NSString * tooltip = @"";
	
	if ([self usingHD] == NSOnState) {
		tooltip = CtFLocalizedString( @"Use smaller version of the movie", @"CTFKillerVideo: Tooltip for HD button when it is turned ON" );
	}
	else {
		tooltip = CtFLocalizedString( @"Use larger version of the movie", @"CTFKillerVideo: Tooltip for HD button when it is turned OFF" );	
	}
	
	return tooltip;
}



// called from the -setVideo: and -setVideoHD: setters
- (void) addButtons {
	[[self plugin] addFullScreenButton];
	[self addHDButton];
}



- (IBAction) toggleHD: (id) sender {
	[self setupQuickTimeUsingHD: [NSNumber numberWithBool: [self usingHD]]];
}



// TODO: figure out how to resize ourselves well
// If someone can figure out how we can resize our view to fully fill the width of the containing DOM element and setting the height of said element while remaining flexibe (i.e. just like using width:100%; in CSS), please speak up. 
/*
// Resize the plugin view to keep its width and have the aspect ratio of the movie
- (void) resizeToFitMovie {
	if ( [self movie] != nil && [self movieView] != nil ) {
		CGFloat movieAspectRatio = [[self movieView] movieBounds].size.width / [[self movieView] movieBounds].size.height;
		CGFloat newWidth = [[self plugin] frame].size.width;
		CGFloat newHeight = newWidth / movieAspectRatio + [[self movieView] controllerBarHeight];
		[[[self plugin] animator] setFrameSize: NSMakeSize(newWidth,newHeight)];
		[[self plugin] setNeedsDisplay:YES];
		// DOMCSSStyleDeclaration * style = [[[self plugin] container] style];
		//[style setProperty:@"height" value:@"auto" priority:nil];	
		// [style setProperty:@"width" value:@"100%" priority:nil];
	}
}
*/







#pragma mark -
#pragma mark Accessors

- (BOOL)hasAutoPlayed {
	return hasAutoPlayed;
}

- (void)setHasAutoPlayed:(BOOL)newHasAutoPlayed {
	hasAutoPlayed = newHasAutoPlayed;
}


- (NSCellStateValue) usingHD {
	return usingHD;
}

- (void) setUsingHD:(NSCellStateValue)newUsingHD {
	usingHD = newUsingHD;
}


- (NSProgressIndicator *) progressIndicator {
	return progressIndicator;
}

- (void) setProgressIndicator: (NSProgressIndicator *) newProgressIndicator {
	[newProgressIndicator retain];
	[progressIndicator release];
	progressIndicator = newProgressIndicator;
}


- (QTMovieView *) movieView {
	return movieView;
}

- (void) setMovieView: (QTMovieView *) newMovieView {
	[newMovieView retain];
	[movieView release];
	movieView = newMovieView;
}


- (QTMovie *) movie {
	return movie;
}

- (void) setMovie: (QTMovie *) newMovie {
	if (newMovie != nil) {
		[newMovie retain];

		// track volume changes, so we can store them in defaults
		[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(movieVolumeChanged:) name:QTMovieVolumeDidChangeNotification object:newMovie];
		// track load state, so we can resize the UI and remove the progress indicator ASAP
		[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(movieLoadStateChanged:) name:QTMovieLoadStateDidChangeNotification object:newMovie];
		// track playback end and manual position changes, so we can show/hide the end of movie buttons
		[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(movieDidEnd:) name:QTMovieDidEndNotification object:newMovie];
		[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(movieTimeDidChange:) name:QTMovieTimeDidChangeNotification object:newMovie];
	}
	
	if (movie != nil) {
		[[NSNotificationCenter defaultCenter] removeObserver:self name:nil object:movie];
		[movie stop];
		[movie release];
	}
	
	movie = newMovie;
}


- (NSThread *) movieSetupThread {
	return movieSetupThread;
}

- (void) setMovieSetupThread: (NSThread *) newMovieSetupThread {
	[newMovieSetupThread retain];
	// Cancelling threads requires 10.5. We only use QTKit video playback on 10.5 and higher, so we should be fine.
	if ( [movieSetupThread respondsToSelector: @selector(cancel)] ) {
		[movieSetupThread performSelector:@selector(cancel)];
	}
	[movieSetupThread release];
	movieSetupThread = newMovieSetupThread;
}


- (NSView *) endOfMovieButtonsView {
	return endOfMovieButtonsView;
}

- (void) setEndOfMovieButtonsView: (NSView *) newEndOfMovieButtonsView {
	[newEndOfMovieButtonsView retain];
	[endOfMovieButtonsView release];
	endOfMovieButtonsView = newEndOfMovieButtonsView;
}


@end
