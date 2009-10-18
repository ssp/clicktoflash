//
//  CTFActionButton.h
//  ClickToFlash
//
//  Created by  Sven on 09.10.09.
//  Copyright 2009 earthlingsoft. All rights reserved.
//

#import <Cocoa/Cocoa.h>

@class CTFClickToFlashPlugin;


@interface CTFActionButton : NSButton {
	CTFClickToFlashPlugin * plugin;
}

+ (id) actionButton;

- (CTFClickToFlashPlugin *) plugin;
- (void) setPlugin: (CTFClickToFlashPlugin *) newPlugin;

@end



@interface CTFActionButtonCell : NSButtonCell {
	
}

- (BOOL) gearVisible;

@end