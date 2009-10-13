//
//  FullScreenWindow.m
//  Symmetries
//
//

#import "Plugin.h"
#import "CTFFullScreenWindow.h"



@implementation CTFFullScreenWindow

- (void) dealloc {
	[self setPlugin: nil];
	[super dealloc];
}



#pragma mark -
#pragma mark NSWindow subclassing

- (BOOL) canBecomeKeyWindow {
	return YES;
}


- (BOOL) validateMenuItem: (NSMenuItem *) menuItem {
	return YES;
}



- (void) keyDown: (NSEvent *) theEvent {
	if ([theEvent keyCode] == 53) { // code for escape key 
		[[self plugin] toggleFullScreen: self];
	}
}





#pragma mark -
#pragma mark Accessor

- (CTFClickToFlashPlugin *) plugin {
	return plugin;
}

- (void) setPlugin: (CTFClickToFlashPlugin *) newPlugin {
	[newPlugin retain];
	[plugin release];
	plugin = newPlugin;
}


@end
