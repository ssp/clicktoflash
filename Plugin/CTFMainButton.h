//
//  CTFMainButton.h
//  ClickToFlash
//
//  Created by  Sven on 10.10.09.
//  Copyright 2009 earthlingsoft. All rights reserved.
//

#import <Cocoa/Cocoa.h>

@class CTFClickToFlashPlugin;

@interface CTFMainButton : NSButton {
	CTFClickToFlashPlugin * plugin;
}

- (CTFClickToFlashPlugin *) plugin;
- (void) setPlugin: (CTFClickToFlashPlugin *) newPlugin;

@end



#pragma mark -

@interface CTFMainButtonCell : NSButtonCell {
}

- (void) drawGradientInRect: (NSRect) rect;
- (void) drawPreviewInRect: (NSRect) rect;
- (void) drawBadgeForBounds: (NSRect) bounds;
- (void) drawGlossForBounds: (NSRect) bounds;
- (void) drawGlossForBounds2: (NSRect) bounds;

- (NSString*) badgeLabelText;

- (CTFClickToFlashPlugin *) plugin;


@end
