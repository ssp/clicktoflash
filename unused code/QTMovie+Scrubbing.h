//
//  QTMovie+Scrubbing.h
//  ClickToFlash
//
//  Created by  Sven on 28.11.09.
//  Copyright 2009 earthlingsoft. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import <QTKit/QTMovie.h>

@interface QTMovie (Scrubbing)
- (void) beginScrubbing;
- (void) endScrubbing;
- (float) currentFloatTime;
- (void) setCurrentFloatTime: (float) time;
- (double) doubleDuration;

@end
