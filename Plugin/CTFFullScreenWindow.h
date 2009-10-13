//
//  FullScreenWindow.h
//  Symmetries
//
//  Created by Sven on 10.06.09.


#import <Cocoa/Cocoa.h>


@class CTFClickToFlashPlugin;

@interface CTFFullScreenWindow : NSWindow {
	CTFClickToFlashPlugin * plugin;
}


- (CTFClickToFlashPlugin *) plugin;
- (void)setPlugin:(CTFClickToFlashPlugin *) newPlugin;


@end
