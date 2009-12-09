//
//  CTFDownloadButton.m
//  ClickToFlash
//
//  Created by  Sven on 18.10.09.
//  Copyright 2009 earthlingsoft. All rights reserved.
//

#import "CTFDownloadButton.h"
#import "Plugin.h"
#import "CTFUtilities.h"

@implementation CTFDownloadButton

#pragma mark Convenience

+ (CTFDownloadButton *) downloadButton {
	CTFDownloadButton * button = [[[CTFDownloadButton alloc] initWithFrame:NSZeroRect] autorelease];
	[button setButtonType: NSMomentaryLight];
	[button setBezelStyle: NSTexturedRoundedBezelStyle];
	
	NSImage * downloadImage = [[[NSImage alloc] initWithContentsOfFile:[[NSBundle bundleForClass:[CTFClickToFlashPlugin class]] pathForResource:@"download" ofType:@"png"]] autorelease];
	[button setImage: downloadImage];
	[button setToolTip: CtFLocalizedString( @"Download video file", @"CTFKillerVideo: Tooltip for Video Download button" )];
	[button sizeToFit];
	[button setTag: CTFDownloadButtonTag];
	
	return button;
}





#pragma mark Come and go

- (id) initWithFrame:(NSRect)frameRect {
	self = [super initWithFrame:frameRect];
	if (self != nil) {
		[self setURLProvider:nil];
	}
	
	return self;
}



- (void) dealloc {
	[self setURLProvider: nil];
	[super dealloc];
}






#pragma mark NSView overrides

- (void) mouseDragged: (NSEvent *) theEvent {
	NSLog(@"mouseDragged:");

	if (NSPointInRect([[self window] mouseLocationOutsideOfEventStream], [self frame])) {
		[super mouseDragged: theEvent];	
	}
	else {
		NSURL * URL = [self URL];
			
		NSPasteboard * pasteboard = [NSPasteboard pasteboardWithName:NSDragPboard];
		[pasteboard declareTypes:[NSArray arrayWithObjects:NSURLPboardType, NSStringPboardType, nil] owner:self];
		[pasteboard setString:[URL absoluteString] forType:NSStringPboardType];
		[URL writeToPasteboard:pasteboard];

		NSImage * icon = [[NSWorkspace sharedWorkspace] iconForFileType:@"webloc"];

		[self dragImage:icon at:NSZeroPoint offset:NSZeroSize event:theEvent pasteboard:pasteboard source:self slideBack:YES];
	}
}




#pragma mark Accessors

- (id) URLProvider {
	return URLProvider;
}

- (void) setURLProvider: (id) newURLProvider {
	URLProvider = newURLProvider;
}



- (NSURL *) URL {
	NSURL * result = nil;
	
	if ( [URLProvider respondsToSelector:@selector(downloadURL)] ) {
		result = [URLProvider performSelector:@selector(downloadURL)];
	}
	
	return result;
}


@end
