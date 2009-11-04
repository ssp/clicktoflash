//
//  CTFButton.m
//  ClickToFlash
//
//  Created by  Sven on 04.11.09.
//  Copyright 2009 earthlingsoft. All rights reserved.
//

#import "CTFButton.h"


@implementation CTFButton


// Ignore clicks while in the background
- (BOOL) acceptsFirstMouse:(NSEvent*) theEvent {
	return NO;
}




@end
