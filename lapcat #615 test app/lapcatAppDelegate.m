//
//  lapcatAppDelegate.m
//  lapcat
//
//  Created by  Sven on 01.04.10.
//  Copyright 2010 earthlingsoft. All rights reserved.
//

#import "lapcatAppDelegate.h"

@implementation lapcatAppDelegate

@synthesize window;

- (void)loadYouTubeVideo:(NSString *)videoId
{
    NSAutoreleasePool *pool = [[NSAutoreleasePool alloc] init];
    
    NSURL *url = [NSURL URLWithString:[@"http://youtube.com/watch?v=" stringByAppendingString:videoId]];
    NSError *error;
    NSString *video = [NSString stringWithContentsOfURL:url usedEncoding:NULL error:&error];
    if ( video == nil )
    {
        NSLog(@"video error: %@", error);
    }
    
    [pool release];
}

- (void)applicationDidFinishLaunching:(NSNotification *)aNotification
{
    NSURL *url = [NSURL URLWithString:@"http://www.pingree.house.gov/legis/appropriations/"];
    NSError *error;
    NSString *appropriations = [NSString stringWithContentsOfURL:url usedEncoding:NULL error:&error];
    if ( appropriations == nil )
    {
        NSLog(@"appropriations error: %@", error);
        return;
    }
    
    NSScanner *scanner = [NSScanner scannerWithString:appropriations];
    while ( ![scanner isAtEnd] )
    {
        if ( [scanner scanUpToString:@"http://www.youtube.com/v/" intoString:NULL] && [scanner scanString:@"http://www.youtube.com/v/" intoString:NULL] )
        {
            NSString *videoId;
            if ( [scanner scanUpToString:@"&" intoString:&videoId] )
            {
                [NSThread detachNewThreadSelector:@selector( loadYouTubeVideo: ) toTarget:self withObject:videoId];
            }
        }
    }
}
@end
