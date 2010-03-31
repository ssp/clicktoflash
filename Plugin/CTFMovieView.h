//
//  CTFMovieView.h
//  ClickToFlash
//
//  Created by  Sven on 31.03.10.
//  Copyright 2010 earthlingsoft. All rights reserved.
//

#import <Cocoa/Cocoa.h>
#import <QTKit/QTKit.h>


@interface CTFMovieView : QTMovieView {

}



- (BOOL) canScrubWithEvent: (NSEvent *) theEvent;


@end
