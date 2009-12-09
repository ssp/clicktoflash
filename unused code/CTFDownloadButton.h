//
//  CTFDownloadButton.h
//  ClickToFlash
//
//  Created by  Sven on 18.10.09.
//  Copyright 2009 earthlingsoft. All rights reserved.
//

#import <Cocoa/Cocoa.h>



@interface CTFDownloadButton : NSButton {
	id URLProvider;
}

+ (CTFDownloadButton *) downloadButton;

- (NSURL *) URL;

- (id) URLProvider;
- (void) setURLProvider: (id) newURLProvider;


@end
