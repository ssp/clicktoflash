//
//  CTFMovieView.m
//  ClickToFlash
//
//  Created by  Sven on 31.03.10.
//  Copyright 2010 earthlingsoft. All rights reserved.
//

#import "CTFMovieView.h"


@implementation CTFMovieView


// if we cannot scrub, pass the scroll event on to the superview
- (void) scrollWheel: (NSEvent *) theEvent {
	if ( [self canScrubWithEvent: theEvent] ) {
		[super scrollWheel: theEvent];
	}
	else {
		[[self superview] scrollWheel: theEvent];
	}
}



- (BOOL) canScrubWithEvent: (NSEvent *) theEvent {
	BOOL canScrub = YES;
	QTMovie * myMovie = [self movie];
	
	if ( myMovie != nil ) {
		if ( QTTimeCompare([myMovie currentTime], [myMovie duration]) == NSOrderedSame ) {
			// at the end of the film: don't scrub 'downwards'
			if ( [theEvent type] == NSScrollWheel && [theEvent deltaY] < 0 ) {
				canScrub = NO;
			}
		}
		else if ( QTTimeCompare([myMovie currentTime], QTZeroTime) == NSOrderedSame ) {
			// at the beginning of the film: don't scrub 'upwards'
			if ( [theEvent type] == NSScrollWheel && [theEvent deltaY] > 0 ) {
				canScrub = NO;
			}			
		}
	}
	else {
		canScrub = NO;
	}
	
	return canScrub;
}



@end
