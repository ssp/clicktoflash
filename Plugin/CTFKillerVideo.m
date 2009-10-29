/*
 CTFKillerVideo.m
 ClickToFlash
 
 The MIT License
 
 Copyright (c) 2009 ClickToFlash Developers
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

#import "CTFKillerVideo.h"
#import <WebKit/WebKit.h>
#import <QTKit/QTKit.h>
#import "CTFUserDefaultsController.h"
#import "CTFUtilities.h"
#import "Plugin.h"
#import "CTFButtonsView.h"

static NSString * divCSS = @"margin:auto;padding:0px;border:0px none;text-align:center;display:block;float:none;";
static NSString * sDisableVideoElement = @"disableVideoElement";
static NSString * sUseYouTubeH264DefaultsKey = @"useYouTubeH264";
static NSString * sUseYouTubeHDH264DefaultsKey = @"useYouTubeHDH264";
static NSString * sYouTubeAutoPlay = @"enableYouTubeAutoPlay";
static NSString * sUseQTKitDefaultsKey = @"use QTKit";
static NSString * sVideoVolumeLevelDefaultsKey = @"Video Volume Level";

@implementation CTFKillerVideo

#pragma mark Come and Go

- (id) init {
	self = [super init];
	if (self != nil) {
		autoPlay = NO;
		hasVideo = NO;
		hasVideoHD = NO;
		
		activeLookups = 0;
		lookupStatus = nothing;
		requiresConversion = NO;
		
		[self setMovieView: nil];
		[self setMovie: nil];
		[self setMovieSetupThread: nil];
		
		videoSize = NSZeroSize;
	}
	
	return self;
}



- (void) dealloc {
	[self setMovieView: nil];
	[[self movie] stop];
	[self setMovie:nil];
	[[self movieSetupThread] cancel];
	[self setMovieSetupThread: nil];
	[[NSNotificationCenter defaultCenter] removeObserver: self];
	[super dealloc];
}



#pragma mark -
#pragma mark Default implementations to be overridden by subclasses

// Name of the video service that can be used for automatic link text generation 
- (NSString*) siteName { return nil; }

// URL to the video file used for loading it in the player.
- (NSString*) videoURLString { return nil;} 
- (NSString*) videoHDURLString { return nil; }

// Text used for video file download link. Return nil to use standard text.
- (NSString *) videoDownloadLinkText { return nil; }

// URL of the web page displaying the video. Return nil if there is none.
- (NSString *) videoPageURLString { return nil; }

// Text used for link to video page. Return nil to use standard text.
- (NSString *) videoPageLinkText { return nil; }

// Edit or replace the markup that is added for the links beneath the video. The descriptionElement passed to the method already conatins Go to Webpage and Download Video File links.
- (DOMElement *) enhanceVideoDescriptionElement: (DOMElement*) descriptionElement {
	return descriptionElement;
}



// If we are on the video's home page return YES, otherwise NO. This is used to determine whether we need links pointing to the video's home page.
- (BOOL) isOnVideoPage {
	BOOL result = NO;
	NSString * videoPage = [self cleanURLString:[self videoPageURLString]];
	
	if (videoPage != nil) {
		NSString * URLString = [self cleanURLString:[[self pageURL] absoluteString]];
		result = [URLString hasPrefix: videoPage];
	}
	return result;
}





// Remove http:// and www. from beginning of URL.
- (NSString *) cleanURLString: (NSString*) URLString {
	NSString * result = URLString;

	NSRange range = [URLString rangeOfString:@"http://www." options:NSAnchoredSearch];
	if (range.location == NSNotFound) {
		range = [URLString rangeOfString:@"http://" options:NSAnchoredSearch];
	}
	if (range.location != NSNotFound) {
		result = [URLString substringFromIndex: range.length];
	}
	
	return result;
}
					

// Helper method used by subclasses to determine whether we want to handle video without Flash.
+ (BOOL) isActive {
	BOOL result = [[CTFUserDefaultsController standardUserDefaults] boolForKey: sUseYouTubeH264DefaultsKey];
	return result;
}


					
					
					
#pragma mark -
#pragma mark Subclass override of CTFKiller

// Create gemeric labels based on the Service's name, so our subclasses don't need to.
- (NSString*) badgeLabelText {
	NSString * label = nil;
	if( [ self useVideoHD ] ) {
		label = CtFLocalizedString( @"HD H.264", @"HD H.264 badge text" );
	} 
	else if( [ self useVideo ] ) {
		NSString * H264Name = CtFLocalizedString( @"H.264", @"H.264 badge text" );
		if ( [self lookupStatus] == finished ) {
			label = H264Name;
		} else {
			NSString * ellipsisFormat = CtFLocalizedString(@"%@...", @"");
			label = [NSString stringWithFormat: ellipsisFormat, H264Name];
		}
    } 
	else  {
		NSString * serviceName = [NSString stringWithFormat: CtFLocalizedString( @"%@ (VideoServiceName)", @"Format for badge text for video service. This should probably just be %@" ), [self siteName]];
		if ( [self lookupStatus] >= finished ) {
			label = serviceName;
		} else {
			NSString * ellipsisFormat = CtFLocalizedString(@"%@...", @"");
			label = [NSString stringWithFormat:ellipsisFormat, serviceName];
		}
	}
	
	return label;
}



// Create a default principal menu item, so our subclasses don't need to. The menu item loads the MP4 video according the current settings. If the video is available in another size as well, holding the option key will reveal a command to load that version instead.
- (void) addPrincipalMenuItemToContextualMenu;
{
	NSMenuItem * menuItem;
	
	if ([self hasVideo]) {
		[[self plugin] addContextualMenuItemWithTitle: CtFLocalizedString( @"Load H.264", @"Load H.264 contextual menu item" ) 
											   action: @selector( loadVideo: )
											   target: self ];
		if ( [self hasVideoHD] ) {
			if ( [self useVideoHD] ) {
				menuItem = [[self plugin] addContextualMenuItemWithTitle: CtFLocalizedString( @"Load H.264 SD Version", @"Load Smaller Version contextual menu item (alternate for the standard Load H.264 item when the default uses the 'HD' version)" )
																  action: @selector( loadVideoSD: )
																  target: self ];
			}
			else {
				menuItem = [[self plugin] addContextualMenuItemWithTitle: CtFLocalizedString( @"Load H.264 HD Version", @"Load Larger Version  contextual menu item (alternate for the standard item when the default uses the non-'HD' version)" )
																  action: @selector( loadVideoHD: )
																  target: self ];
			}
			[menuItem setAlternate:YES];
			[menuItem setKeyEquivalentModifierMask:NSAlternateKeyMask];
		}
	}
}



/* 
 Create a default set of additional menu items, so our subclasses don't need to. These consist of:
 1. A command to go to the web page belonging to the video (if there is one)
 2. A command for fullscreen playback in QuickTime Player. If the video is available in another size as well, holding the option key will reveal a command to load that version in QuickTime Player instead.
 3. A command to download the video file. If the video is available in another size as well, holding the option key will reveal a command to download that version instead.
*/
- (void) addAdditionalMenuItemsForContextualMenu;
{
	NSMenuItem * menuItem;
	NSString * formatString;
	NSString * labelString;
	
	if (![self isOnVideoPage] && [self videoPageURLString] != nil) {
		// Command to Open web page for embedded videos
		formatString = CtFLocalizedString( @"Load %@ page for this video", @"Load SITENAME page for this video contextual menu item" );
		labelString = [NSString stringWithFormat: formatString, [self siteName]];
		[[self plugin] addContextualMenuItemWithTitle: labelString
											   action: @selector( gotoVideoPage: )
											   target: self ];
	}
	
	if ( [self hasVideo] ) {
		// menu item and alternate for full screen viewing in QuickTime Player
		labelString = CtFLocalizedString( @"Play Fullscreen in QuickTime Player", @"Open Fullscreen in QT Player contextual menu item" );
		[[self plugin] addContextualMenuItemWithTitle: labelString
											   action: @selector( openFullscreenInQTPlayer: )
											   target: self ];
		if ( [self hasVideoHD]) {
			if ( [self useVideoHD] ) {
				labelString = CtFLocalizedString( @"Play Smaller Version Fullscreen in QuickTime Player", @"Open Smaller Version Fullscreen in QT Player contextual menu item (alternate for the standard item when the default uses the 'HD' version)" );
				menuItem = [[self plugin] addContextualMenuItemWithTitle: labelString
																  action: @selector( openFullscreenInQTPlayerSD: )
																  target: self ];
			}
			else {
				labelString = CtFLocalizedString( @"Play Larger Version Fullscreen in QuickTime Player", @"Open Larger Version Fullscreen in QT Player contextual menu item (alternate for the standard item when the default uses the non-'HD' version)" );
				menuItem = [[self plugin] addContextualMenuItemWithTitle: labelString
																  action: @selector( openFullscreenInQTPlayerHD: ) 
																  target: self ];
			}
			[menuItem setAlternate:YES];
			[menuItem setKeyEquivalentModifierMask:NSAlternateKeyMask];
		}
		
		// menu item and alternate for downloading movie file
		labelString = CtFLocalizedString( @"Download H.264", @"Download H.264 menu item" );
		[[self plugin] addContextualMenuItemWithTitle: labelString
											   action: @selector( downloadVideo: )
											   target: self ];
		
		if ( [self hasVideoHD]) {
			if ( [self useVideoHD] ) {
				labelString = CtFLocalizedString( @"Download SD H.264", @"Download small size H.264 menu item (alternate for the standard item when the default uses the 'HD' version)" );
				menuItem = [[self plugin] addContextualMenuItemWithTitle: labelString
																  action: @selector( downloadVideoSD: ) 
																  target: self ];
			}
			else {
				labelString = CtFLocalizedString( @"Download HD H.264", @"Download large size H.264 menu item (alternate for the standard item when the default uses the non-'HD' version)" );
				menuItem = [[self plugin] addContextualMenuItemWithTitle: labelString
																  action: @selector( downloadVideoHD: ) 
																  target: self ];
			}
			[menuItem setAlternate:YES];
			[menuItem setKeyEquivalentModifierMask:NSAlternateKeyMask];
		}
	}	
}



// Implement default container conversion: If there is a film, use it.
- (BOOL) convertToContainer {
	BOOL result = NO;
	
	if ([self lookupStatus] == finished && [self hasVideo] && [CTFKillerVideo isActive]) {
		[self convertToMP4ContainerUsingHD:nil];
		result = YES;
	}
	else if ([self lookupStatus] == inProgress) {
		[self setRequiresConversion: YES];
		result = YES;
	}
	
	return result;
}



// Called when full screen mode starts and ends.
// In fullscreen mode: To get good letterboxing, fill the extra space around the movie view in black.
- (void) startFullScreen { 
	if ( [self movieView] != nil ) {
		[[self movieView] setFillColor: [NSColor blackColor]];
	}
}


// In the web page: To minimise distraction, if there is extra background space, fill it transparently.
- (void) stopFullScreen { 
	if ( [self movieView] != nil ) {
		[[self movieView] setFillColor: [NSColor clearColor]];
	}
}







#pragma mark -
#pragma mark Actions

// Load the video in the WebView
- (IBAction) loadVideo:(id)sender {
    [self convertToMP4ContainerUsingHD: nil];
}

- (IBAction) loadVideoSD:(id)sender {
	[self convertToMP4ContainerUsingHD: [NSNumber numberWithBool:NO]];
}

- (IBAction) loadVideoHD:(id)sender {
	[self convertToMP4ContainerUsingHD: [NSNumber numberWithBool:YES]];
}


// Download the video's movie file
- (void) downloadVideoUsingHD: (BOOL) useHD {
	NSString * URLString = [self videoURLStringForHD: useHD];
	[[self plugin] downloadURLString: URLString];
}

- (IBAction) downloadVideo: (id) sender {
	BOOL wantHD = [[CTFUserDefaultsController standardUserDefaults] boolForKey:sUseYouTubeHDH264DefaultsKey];
	[self downloadVideoUsingHD: wantHD];
}

- (IBAction) downloadVideoSD: (id) sender {
	[self downloadVideoUsingHD: NO];
}

- (IBAction) downloadVideoHD: (id) sender {
	[self downloadVideoUsingHD: YES];
}


// Go to video's page in the browser
- (IBAction) gotoVideoPage:(id)sender {
	[[self plugin] browseToURLString:[self videoPageURLString]];
}



// Play the film fullscreen in QuickTime Player
- (void)openFullscreenInQTPlayerUsingHD:(BOOL) useHD {
	NSString * URLString = [self videoURLStringForHD: useHD];
	
	NSString *scriptSource = nil;
	if (floor(NSAppKitVersionNumber) > NSAppKitVersionNumber10_5) {
		// Snowy Leopard
		scriptSource = [NSString stringWithFormat:
						@"tell application \"QuickTime Player\"\nactivate\nopen URL \"%@\"\nrepeat while (front document is not presenting)\ndelay 1\npresent front document\nend repeat\nrepeat while (playing of front document is false)\ndelay 1\nplay front document\nend repeat\nend tell", URLString];
	} else {
		scriptSource = [NSString stringWithFormat:
						@"tell application \"QuickTime Player\"\nactivate\ngetURL \"%@\"\nrepeat while (display state of front document is not presentation)\ndelay 1\npresent front document scale screen\nend repeat\nrepeat while (playing of front document is false)\ndelay 1\nplay front document\nend repeat\nend tell",URLString];
	}
	
	NSAppleScript *openInQTPlayerScript = [[NSAppleScript alloc] initWithSource:scriptSource];
	[openInQTPlayerScript executeAndReturnError:nil];
	[openInQTPlayerScript release];	
}


- (IBAction)openFullscreenInQTPlayer:(id)sender {
	BOOL useHD = [[CTFUserDefaultsController standardUserDefaults] boolForKey:sUseYouTubeHDH264DefaultsKey];
	
	[self openFullscreenInQTPlayerUsingHD: useHD];
}

- (IBAction)openFullscreenInQTPlayerSD:(id)sender{
	[self openFullscreenInQTPlayerUsingHD: NO];	
}

- (IBAction)openFullscreenInQTPlayerHD:(id)sender{
	[self openFullscreenInQTPlayerUsingHD: YES];	
}






#pragma mark -
#pragma mark Insert Video using QTKit

- (void) setupQuickTimeUsingHD: (NSNumber*) useHDNumber {
	if ( [self movieSetupThread] != nil ) {
		[[self movieSetupThread] cancel];
	}
	NSThread * thread = [[[NSThread alloc] initWithTarget:self selector:@selector(reallySetupQuickTimeUsingHD:) object:useHDNumber] autorelease];
	[thread start];
	[self setMovieSetupThread: thread];
}



- (void) reallySetupQuickTimeUsingHD: (NSNumber *) useHDNumber {
	NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];
	NSView * mainContainer = [[self plugin] containerView];
	NSRect bounds = [mainContainer bounds];
	
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
			NSLog(@"Could not create view in CTFKillerVideo -setupQuickTime");
			return; 
		}
		
		[self setMovieView: myMovieView];
		needToInsertMovieView = YES;
	}
	
	CGFloat pIDiameter = 32.;
	NSRect pIRect = NSMakeRect(NSMidX(bounds) - pIDiameter*.5, NSMidY(bounds) - pIDiameter*.5, pIDiameter, pIDiameter);
	NSProgressIndicator * progressIndicator = [[NSProgressIndicator alloc] initWithFrame:pIRect];
	[progressIndicator setAutoresizingMask: NSViewMinXMargin | NSViewMaxXMargin | NSViewMinYMargin | NSViewMaxYMargin];
	[progressIndicator setStyle: NSProgressIndicatorSpinningStyle];
	[progressIndicator startAnimation: self];
	[progressIndicator setWantsLayer: YES];
	[mainContainer addSubview:progressIndicator];
	
	QTMovie * myMovie = [self movieForHD: useHDNumber];
	if ( myMovie != nil && ![[self movieSetupThread] isCancelled] ) {
		[self setMovie: myMovie];
		[myMovieView setMovie: myMovie];
		if (needToInsertMovieView) {
			[mainContainer addSubview: myMovieView positioned: NSWindowBelow relativeTo: nil];
			[[self plugin] setNextKeyView: myMovieView];
			[myMovieView setNextKeyView: (NSView*)[[self plugin] mainButton]];
		}
		[[[self plugin] mainButton] setHidden:YES];
		[[[self plugin] window] makeFirstResponder: myMovieView];
	}
	
	[progressIndicator stopAnimation: self];
	[progressIndicator removeFromSuperview];
	[progressIndicator release];
	[self setMovieSetupThread: nil];

/*	
 Resizing the view size to perfectly match the movie's doesn't work, strangely. (It ruins the display and stalls the app.
 CGFloat movieAspectRatio = [myMovieView movieBounds].size.width / [myMovieView movieBounds].size.height;
	CGFloat newWidth = [[self plugin] frame].size.width;
	CGFloat newHeight = newWidth / movieAspectRatio + [myMovieView controllerBarHeight];
	[[self plugin] setFrameSize: NSMakeSize(newWidth,newHeight)];
	[[self plugin] setNeedsDisplay:YES];
	DOMCSSStyleDeclaration * style = [[[self plugin] container] style];
	[style setProperty:@"height" value:@"100%" priority:nil];	
	[style setProperty:@"width" value:@"100%" priority:nil];
*/
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
									  [NSNumber numberWithBool:NO], QTMovieOpenAsyncOKAttribute,
									  volumeNumber, QTMovieVolumeAttribute,
									  nil];
	
	myMovie = [QTMovie movieWithAttributes:movieAttributes error:&error];
//	NSLog(@"%@", [[myMovie movieAttributes] description]);
	if ( myMovie == nil ) {
		NSLog(@"ClickToFlash CTFKillerVideo -reallySetupQuickTime Error: %@ (%@)", [error localizedDescription], movieURLString);
	}	
	else {
		[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(movieVolumeChanged:) name:QTMovieVolumeDidChangeNotification object:myMovie];
		if ([self autoPlay]) {
			[myMovie autoplay];
		}		
	}
	
	return myMovie;	
}



- (void) movieVolumeChanged: (NSNotification *) notification {
	NSNumber * volumeNumber = [NSNumber numberWithFloat:[[self movie] volume]];
	[[CTFUserDefaultsController standardUserDefaults] setObject:volumeNumber forKey: sVideoVolumeLevelDefaultsKey];
}



- (NSButton *) addHDButton {
	NSButton * button = nil;
	
	if ([self hasVideo] && [self hasVideoHD]) {
		if ([[[self plugin] buttonsView] viewWithTag: CTFHDButtonTag] == nil) {
			button = [CTFButtonsView button];
			[button setTitle: CtFLocalizedString( @"HD", @"HD")];
			[button setToolTip: CtFLocalizedString( @"Toggle High Definition", @"Tooltip for HD button" )];
			[button sizeToFit];
			[button setButtonType: NSPushOnPushOffButton];
			[button setTag: CTFHDButtonTag];
			if ( [self useVideoHD] ) {
				[button setState: NSOnState];
			}
			[button setTarget: self];
			[button setAction: @selector(toggleHD:)];
			[[[self plugin] buttonsView] addButton: button];
		}
	}	
	return button;
}



- (IBAction) toggleHD: (id) sender {
	BOOL useHD = ([sender state] == NSOnState);
	[self setupQuickTimeUsingHD: [NSNumber numberWithBool:useHD]];
}







#pragma mark -
#pragma mark Insert Video using the DOM

- (void) _convertElementForMP4: (DOMElement*) element atURL: (NSString*) URLString
{
	// some tags (OBJECT) want a data attribute, and some want a src attribute
	// for some reason, though, some cloned elements are not reporting themselves
	// as OBJECT tags, even though they are; more investigation on this is needed,
	// but for now, setting both the data and the src attribute corrects the problem
	// (see bug #294)
	
	[ element setAttribute: @"data" value: URLString ];
	[ element setAttribute: @"src" value: URLString ];
	[ element setAttribute: @"type" value: @"video/mp4" ];
    [ element setAttribute: @"scale" value: @"aspect" ];
    if ([self autoPlay]) {
		[ element setAttribute: @"autoplay" value: @"true" ];
	} else {
		[ element setAttribute: @"autoplay" value: @"false" ];
	}
    [ element setAttribute: @"cache" value: @"false" ];
	[ element setAttribute: @"bgcolor" value: @"transparent" ];
    [ element setAttribute: @"flashvars" value: nil ];
}



- (void) _convertElementForVideoElement: (DOMElement*) element atURL: (NSString*) URLString
{
    [ element setAttribute: @"src" value: URLString ];
	if ([self autoPlay]) {
		[ element setAttribute: @"autoplay" value:@"autoplay" ];
	} else {
		if ( [element hasAttribute:@"autoplay"] )
			[ element removeAttribute:@"autoplay" ];
	}
	if ([[self plugin] previewURL] != nil) {
		[element setAttribute: @"poster"  value: [[[self plugin] previewURL] absoluteString]];
	}
	[ element setAttribute: @"controls" value:@"controls"];
	[ element setAttribute:@"width" value:@"100%"];
}



/*
 The useHD parameter indicates whether we want to override the default behaviour to use or not use HD.
 Passing nil invokes the default behaviour based on user preferences and HD availability.
*/
- (void) convertToMP4ContainerUsingHD: (NSNumber*) useHD
{
	[plugin revertToOriginalOpacityAttributes];
	
	// Delay this until the end of the event loop, because it may cause self to be deallocated
	[plugin prepareForConversion];
	[self performSelector:@selector(_convertToMP4ContainerAfterDelayUsingHD:) withObject:useHD afterDelay:0.0];
}




- (void) _convertToMP4ContainerAfterDelayUsingHD: (NSNumber*) useHDNumber {
	BOOL useHD = [ self useVideoHD ];
	if (useHDNumber != nil) {
		useHD = [useHDNumber boolValue];
	}
		
	[self _convertToMP4ContainerUsingHD: useHD];
}



- (void) _convertToMP4ContainerUsingHD: (BOOL) useHD {
	if ( [[CTFUserDefaultsController standardUserDefaults] boolForKey: sUseQTKitDefaultsKey ] ) {
		[self setupQuickTimeUsingHD:nil];
	}
	else {
	DOMElement * container = [[self plugin] container];
	DOMDocument* document = [container ownerDocument];
	NSString * URLString = [self videoURLStringForHD: useHD];

	DOMElement* videoElement;
	if ([ self isVideoElementAvailable ]) {
		videoElement = [document createElement:@"video"];
		[ self _convertElementForVideoElement: videoElement atURL: URLString ];
    } else {
		videoElement = (DOMElement*) [container cloneNode: NO ];
		[ self _convertElementForMP4: videoElement atURL: URLString ];
	}
	
	
	DOMNode * widthNode = [[container attributes ] getNamedItem:@"width"];
	NSString * width = @"100%"; // default to 100% width
	if (widthNode != nil) {
		// width is already set explicitly, preserve that
		width = [widthNode nodeValue];
		if ( [[NSCharacterSet decimalDigitCharacterSet] characterIsMember:[width characterAtIndex:[width length] - 1]] ) {
			// add 'px' if existing width is just a number (ends with a digit)
			width = [width stringByAppendingString:@"px"];
		}
	}
	NSString * widthCSS = [NSString stringWithFormat:@"%@width:%@;", divCSS, width];
	
	DOMElement* CtFContainerElement = [document createElement: @"div"]; 
	[CtFContainerElement setAttribute: @"style" value: widthCSS];
	[CtFContainerElement setAttribute: @"class" value: @"clicktoflash-container"];
	[CtFContainerElement appendChild: videoElement];
	
	DOMElement* linkContainerElement = [self linkContainerElementUsingHD: useHD];
	if ( linkContainerElement != nil ) {
		[CtFContainerElement appendChild: linkContainerElement];		
	}
	
    // Just to be safe, since we are about to replace our containing element
    [[self retain] autorelease];
    
    // Replace self with element.
	[[container parentNode] replaceChild: CtFContainerElement oldChild: container];
	
    [[self plugin] setContainer:nil];
	}
}



- (DOMElement*) linkContainerElementUsingHD: (BOOL) useHD {
	// Link container
	DOMDocument* document = [[[self plugin] container] ownerDocument];
	DOMElement* linkContainerElement = [document createElement: @"div"];
	NSString * linkCSS = @"margin:0px 0.5em;padding:0px;border:0px none;";
	[linkContainerElement setAttribute: @"style" value: divCSS];
	[linkContainerElement setAttribute: @"class" value: @"clicktoflash-linkcontainer"];
	
	// Link to the video's web page if we're not there already
	NSString * videoPageURLString = [self videoPageURLString];
	if ( videoPageURLString != nil && ![self isOnVideoPage] )  {
		DOMElement* videoPageLinkElement = [document createElement: @"a"];
		[videoPageLinkElement setAttribute: @"href" value: videoPageURLString];
		[videoPageLinkElement setAttribute: @"style" value: linkCSS];
		[videoPageLinkElement setAttribute: @"class" value: @"clicktoflash-link"];
		NSString * videoPageLinkText = [self videoPageLinkText];
		if (videoPageLinkText == nil) {
			NSString * formatString = CtFLocalizedString(@"Go to %@ Page", @"Text of link to the video page on SITENAME appearing beneath the video");
			videoPageLinkText = [NSString stringWithFormat:formatString, [self siteName]];
		}
		[videoPageLinkElement setTextContent: videoPageLinkText];

		[linkContainerElement appendChild: videoPageLinkElement];
	}
	
	// Link to Movie file download(s)
	DOMElement* downloadLinkElement;
	
	if ( !([self hasVideoHD] && !useHD) ) {
		// standard case with a single link
		downloadLinkElement = [document createElement: @"a"];
		[downloadLinkElement setAttribute: @"href" value: [self videoURLStringForHD: useHD]];
		[downloadLinkElement setAttribute: @"style" value: linkCSS];
		[downloadLinkElement setAttribute: @"class" value: @"clicktoflash-link videodownload"];
		NSString * videoDownloadLinkText = [self videoDownloadLinkText];
		if (videoDownloadLinkText == nil) {
			videoDownloadLinkText = CtFLocalizedString(@"Download video file", @"Text of link to Video Download appearing beneath the video");
		}
		[downloadLinkElement setTextContent: videoDownloadLinkText];
		
		[linkContainerElement appendChild:downloadLinkElement];
	}
	else {
		// special case with a HD video available but HD turned off: offer links for downloading the standard and the larger size
		linkCSS = @"margin:0px 0.3em;padding:0px;border:0px none;";

		DOMElement * initialTextElement = [document createElement: @"span"];
		[initialTextElement setTextContent: CtFLocalizedString(@"Download: ", @"Label for download links appearing beneath the video")];
		[linkContainerElement appendChild: initialTextElement];

		downloadLinkElement = [document createElement: @"a"];
		[downloadLinkElement setAttribute: @"href" value: [self videoURLString]];
		[downloadLinkElement setAttribute: @"style" value: linkCSS];
		[downloadLinkElement setAttribute: @"class" value: @"clicktoflash-link videodownload"];
		[downloadLinkElement setTextContent: CtFLocalizedString(@"Current Size", @"Text of link for downloading a version of the video in the current size; appearing beneath the video")];
		[linkContainerElement appendChild: downloadLinkElement];

		DOMElement * extraDownloadLinkElement = [document createElement: @"a"];
		[extraDownloadLinkElement setAttribute: @"href" value: [self videoHDURLString]];
		[extraDownloadLinkElement setAttribute: @"style" value: linkCSS];
		[extraDownloadLinkElement setAttribute: @"class" value: @"clicktoflash-link videodownload"];
		[extraDownloadLinkElement setTextContent: CtFLocalizedString(@"Larger Size", @"Text of link to additional Large Size Video Download appearing beneath the video after the standard link")];
		[linkContainerElement appendChild: extraDownloadLinkElement];
	}
	
	// Let subclasses add their own link (or delete ours)
	linkContainerElement = [self enhanceVideoDescriptionElement: linkContainerElement];

	return linkContainerElement;
}






#pragma mark -
#pragma mark Helpers

// Determine whether we want to use the video. Returns YES if a video is available and the relevant preference is set.
- (BOOL) useVideo {
    return [ self hasVideo ] 
	&& [ [ CTFUserDefaultsController standardUserDefaults ] boolForKey: sUseYouTubeH264DefaultsKey ]; 
}


// Determine whether we want to use the video's HD version. Returns YES if the HD version is available and the relevant preferences are set.
- (BOOL) useVideoHD {
	return [ self hasVideoHD ] && [self hasVideo]
	&& [ [ CTFUserDefaultsController standardUserDefaults ] boolForKey: sUseYouTubeH264DefaultsKey ] 
	&& [ [ CTFUserDefaultsController standardUserDefaults ] boolForKey: sUseYouTubeHDH264DefaultsKey ];
}


// Return the URL to the video. When told to provide a HD version the SD version may be provided if no HD version exists.
- (NSString *) videoURLStringForHD: (BOOL) useHD {
	NSString * URLString;
	
	if (useHD && [self hasVideoHD]) {
		URLString = [ self videoHDURLString ];
	} else {
		URLString = [ self videoURLString ];
	}
	
	return URLString;
}



- (BOOL) isVideoElementAvailable
{
	if ( [[CTFUserDefaultsController standardUserDefaults] boolForKey:sDisableVideoElement] )
		return NO;
	
	/* <video> element compatibility was added to WebKit in or shortly before version 525. */
	
    NSBundle* webKitBundle;
    webKitBundle = [ NSBundle bundleForClass: [ WebView class ] ];
    if (webKitBundle) {
		/* ref. http://lists.apple.com/archives/webkitsdk-dev/2008/Nov/msg00003.html:
		 * CFBundleVersion is 5xxx.y on WebKits built to run on Leopard, 4xxx.y on Tiger.
		 * Unspecific builds (such as the ones in OmniWeb) get xxx.y numbers without a prefix.
		 */
		int normalizedVersion;
		float wkVersion = [ (NSString*) [ [ webKitBundle infoDictionary ] 
										 valueForKey: @"CFBundleVersion" ] 
						   floatValue ];
		if (wkVersion > 4000)
			normalizedVersion = (int)wkVersion % 1000;
		else
			normalizedVersion = wkVersion;
		
		// unfortunately, versions of WebKit above 531.5 also introduce a nasty
		// scrolling bug with video elements that cause them to be unviewable;
		// this bug was fixed shortly after being reported by @simX, so we can
		// now re-enable it for correct WebKit versions
		//
		// this bug actually only affected certain machines that had graphics
		// cards with a certain max texture size, and it was partially fixed, but
		// still didn't work for MacBooks with embedded graphics, and we could
		// detect that if we really wanted, but that would require importing
		// the OpenGL framework, which we probably shouldn't do, so we'll just
		// wholesale disable for certain WebKit versions
		//
		// https://bugs.webkit.org/show_bug.cgi?id=28705
		
		if (floor(NSAppKitVersionNumber) > NSAppKitVersionNumber10_5) {
			// Snowy Leopard; this bug doesn't seem to be exhibited here
			return (normalizedVersion >= 525);
		} else {
			// this bug was introduced in version 531.5, but has been fixed in
			// 532 and above
			
			return ((normalizedVersion >= 532) ||
					((normalizedVersion >= 525) && (normalizedVersion < 531.5))
					);
		}
	}
	return NO;
}




// Called when asynchronous lookups are finished. This will convert the element if it has been marked for conversion previously but the kind of conversion wasn't clear yet because of the pending lookups.
- (void) finishedLookups {
	if ([self requiresConversion]) {
		[self convertToContainer];
	}
}



// We don't handle anything but HTTP requests.
- (BOOL) canPlayResponseResult: (NSURLResponse *) response {
	BOOL result = NO;
	
	if (  [((NSHTTPURLResponse*)response) statusCode] == 200 ) {
		if ( [[response MIMEType] isEqualToString:@"video/mp4"] ) {
			result = YES;
		}
		else if ( [[response MIMEType] isEqualToString:@"video/x-flv"] ) {
			if ( [[QTMovie movieFileTypes: QTIncludeCommonTypes] containsObject: @"flv"] ) {
				// QuickTime can play flv (Perian?)
				result = YES;
			}
		}
	}
	
	return result;
}







#pragma mark -
#pragma mark Accessors

- (BOOL)autoPlay {
	BOOL result = autoPlay;
	result = result && [[CTFUserDefaultsController standardUserDefaults] objectForKey:sYouTubeAutoPlay];
	return result;
}

- (void)setAutoPlay:(BOOL)newAutoPlay {
	autoPlay = newAutoPlay;
}


- (BOOL)hasVideo {
	return hasVideo;
}

- (void)setHasVideo:(BOOL)newHasVideo {
	hasVideo = newHasVideo;
	[[self plugin] addFullScreenButton];
	[self addHDButton];
	[[[self plugin] mainButton] setNeedsDisplay:YES];
}


- (BOOL)hasVideoHD {
	return hasVideoHD;
}

- (void)setHasVideoHD:(BOOL)newHasVideoHD {
	hasVideoHD = newHasVideoHD;
	[[self plugin] addFullScreenButton];
	[self addHDButton];
	[[[self plugin] mainButton] setNeedsDisplay: YES];
}


- (enum CTFKVLookupStatus) lookupStatus {
	return lookupStatus;
}

- (void) setLookupStatus: (enum CTFKVLookupStatus) newLookupStatus {
	lookupStatus = newLookupStatus;
	if (lookupStatus == finished || lookupStatus == failed) {
		[self finishedLookups];
	}
	[[[self plugin] mainButton] setNeedsDisplay: YES];
}


- (void) increaseActiveLookups {
	activeLookups++;
	[self setLookupStatus: inProgress];
}

- (void) decreaseActiveLookups {
	activeLookups--;
	if ( activeLookups == 0 && [self lookupStatus] != failed ) {
		[self setLookupStatus: finished];
	}
}


- (BOOL) requiresConversion {
	return requiresConversion;
}

- (void) setRequiresConversion: (BOOL) newRequiresConversion {
	requiresConversion = newRequiresConversion;
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
	[newMovie retain];
	[movie release];
	movie = newMovie;
}


- (NSThread *) movieSetupThread {
	return movieSetupThread;
}

- (void) setMovieSetupThread: (NSThread *) newMovieSetupThread {
	[newMovieSetupThread retain];
	[movieSetupThread release];
	movieSetupThread = newMovieSetupThread;
}

@end

