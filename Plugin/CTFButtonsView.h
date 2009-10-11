//
//  CTFButtonsView.h
//  ClickToFlash
//
//  Created by  Sven on 11.10.09.
//  Copyright 2009 earthlingsoft. All rights reserved.
//

#import <Cocoa/Cocoa.h>


@interface CTFButtonsView : NSView {
	NSMutableArray * buttons;
}

+ (NSButton *) button;

- (void) insertButton: (NSControl*) button atIndex: (NSInteger) index;
- (void) addButton: (NSControl*) button;
- (void) removeButton: (NSControl*) button;
- (void) arrangeButtons;


@end
