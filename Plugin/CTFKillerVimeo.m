/*
 CTFKillerVimeo.m
 ClickToFlash
 
 The MIT License
 
 Copyright (c) 2009-2010 ClickToFlash Developers
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/ 


#import "CTFKillerVimeo.h"
#import "Plugin.h"
#import "CTFUtilities.h"
#import "CTFUserDefaultsController.h"
#import "CTFLoader.h"

@implementation CTFKillerVimeo

#pragma mark CTFKiller subclass overrides

+ (BOOL) canHandleFlashAtURL: (NSURL*) theURL src: (NSString*) theSrc attributes: (NSDictionary*) theAttributes forPlugin:(CTFClickToFlashPlugin*) thePlugin {
	BOOL result = NO;
	
	if (theSrc != nil && [CTFKillerVideo isActive]) {
		result = ([theSrc rangeOfString:@"/moogaloop" options:NSAnchoredSearch].location != NSNotFound);
		
		NSURL * srcURL = [NSURL URLWithString: theSrc];
		if ( srcURL != nil && [srcURL host] != nil) {
			result = result || ([[srcURL host] rangeOfString:@"vimeo.com" options:NSAnchoredSearch|NSBackwardsSearch].location != NSNotFound);
		}		
	}
	
	return result;
}



- (void) setup {
	[self setClipID: nil];
	[self setClipSignature: nil];
	[self setClipExpires: nil];
	[self setEmbedCode: nil];
	[self setRedirectedURLString: nil];
	[self setRedirectedHDURLString: nil];
	[self setXMLLoader: nil];
	
	NSString * myID = [ self flashVarWithName:@"clip_id" ]; 

	if (myID == nil) {
		// we are embedded?
		NSArray * ar = [srcURLString componentsSeparatedByString:@"?"];
		if ( [ar count] > 0 ) {
			NSString * varString = [ar objectAtIndex:1];
			[self setFlashVars: [CTFClickToFlashPlugin flashVarDictionary:varString]];
			myID = [self flashVarWithName:@"clip_id"];
		}
	}
	
	if (myID != nil) {
		[self setClipID: myID];		
		[self getXML];
	}
	
	if ([CTFKillerVimeo isVimeoSiteURL: pageURL]) {
		[self setAutoPlay: YES];
	}
}



- (void) dealloc {
	[self setClipID: nil];
	[self setClipSignature: nil];
	[self setClipExpires: nil];
	[self setEmbedCode: nil];
	[self setRedirectedURLString: nil];
	[self setRedirectedHDURLString: nil];
	[self setXMLLoader: nil];
	[super dealloc];
}





#pragma mark -
#pragma mark CTFVideoKiller subclassing overrides

/*
 Name of the video service that is be used for automatic link text generation as well as the badge.
 collegehumor.com also uses vimeo, use their name when the web page is on that site.
*/
- (NSString*) siteName {
	NSString * name = nil;
	if ( [[[self plugin] baseURL] rangeOfString:@"collegehumor.com" options:NSCaseInsensitiveSearch].location != NSNotFound ) {
		// we're on collegehumor.com
		name = CtFLocalizedString(@"CollegeHumor", "Name of CollegeHumor");
	}
	else {
		name =  CtFLocalizedString(@"Vimeo", @"Name of Vimeo");
	}
	
	return name;
}



// URL to the video file used for loading it in the player.
- (NSString *) videoURLString {
	NSString * URLString = [self redirectedURLString];
	return URLString;
}


- (NSString *) videoHDURLString {
	NSString * URLString = [self redirectedHDURLString];
	return URLString;
}



// HTML needed to embed the video
- (NSString *) embedString {
	NSString * code = [self embedCode];
	if ( code != nil ) {
		code = [code stringByAppendingString: @"\n"];
	}
	
	return code;
}



// URL of the web page displaying the video. Return nil if there is none.
- (NSString *) videoPageURLString {
	NSString * URLString = nil;
	if ( [self clipID] != nil ) {
		URLString = [NSString stringWithFormat:@"http://vimeo.com/%@", [self clipID]];
	}
	return URLString;
}






#pragma mark -
#pragma mark Helper methods

+ (BOOL) isVimeoSiteURL: (NSURL*) theURL {
	NSString * host = [theURL host];
	BOOL result = [host rangeOfString:@"vimeo.com" options: NSBackwardsSearch || NSAnchoredSearch].location != NSNotFound;
	
	return result;
}





#pragma mark -
#pragma mark Determine Video type

/*
 1. download the XML file which provides the keys required to construct the URL to access the video file
 2. get headers for the video file to figure out the redirected URL and the file format (some films on Vimeo come in FLV, others come in MP4). 
*/

- (void) getXML {
	NSString * XMLURLString = [NSString stringWithFormat:@"http://vimeo.com/moogaloop/load/clip:%@", [self clipID]];
	CTFLoader * loader = [CTFLoader loaderWithURL: [NSURL URLWithString:XMLURLString]
										 delegate: self
										 selector: @selector(XMLDownloadFinished:)];
	[self setXMLLoader: loader];
	
	if (loader != nil) {
		[loader start];
		[self increaseActiveLookups];
	}
	else {
		[self setLookupStatus: failed];
	}
}



- (void) XMLDownloadFinished: (CTFLoader *) loader {
	NSError * error = nil;
	NSXMLDocument * XML = [[[NSXMLDocument alloc] initWithData:[loader data] options:NSXMLDocumentTidyXML error:&error] autorelease];
		
	NSXMLNode * node;
	if (XML != nil) {
		NSArray * nodes = [XML nodesForXPath:@"//request_signature" error:&error];
		if ([nodes count] > 0) {
			node = [nodes objectAtIndex:0];
			[self setClipSignature:[node stringValue]];
		}
		nodes = [XML nodesForXPath:@"//request_signature_expires" error:&error];
		if ([nodes count] > 0) {
			node = [nodes objectAtIndex:0];
			[self setClipExpires: [node stringValue]];
		}
/*		CGFloat width = .0;
		nodes = [XML nodesForXPath:@"//width" error:&error];
		if ([nodes count] > 0) {
			node = [nodes objectAtIndex:0];
			width = [[node stringValue] floatValue];
		}
		CGFloat height = .0;
		nodes = [XML nodesForXPath:@"//height" error:&error];
		if ([nodes count] > 0) {
			node = [nodes objectAtIndex:0];
			height = [[node stringValue] floatValue];
		}
		NSSize videoSize = NSMakeSize(width, height);
*/
		nodes = [XML nodesForXPath:@"//thumbnail" error:&error];
		if ([nodes count] > 0) {
			node = [nodes objectAtIndex:0];
			[[self plugin] setPreviewURL: [NSURL URLWithString:[node stringValue]]];
		}
		nodes = [XML nodesForXPath:@"//isHD" error:&error];
		if ([nodes count] > 0) {
			node = [nodes objectAtIndex:0];
			clipIsHD = ([[node stringValue] intValue] != 0);
		}
		nodes = [XML nodesForXPath:@"//caption" error:&error];
		if ([nodes count] > 0) {
			node = [nodes objectAtIndex:0];
			[self setTitle: [node stringValue]];
		}
		nodes = [XML nodesForXPath:@"//embed_code" error:&error];
		if ([nodes count] > 0) {
			node = [nodes objectAtIndex:0];
			[self setEmbedCode: [node stringValue]];
		}
		

		// Now we collected the data but vimeo seem to have two video formats in the background flv/mp4. The only way I see so far to tell those apart is from the MIME Type of the video file's URL. Any better way to do this would be great.		
		NSString * HEADURLString = [NSString stringWithFormat:@"http://vimeo.com/moogaloop/play/clip:%@/%@/%@/", [self clipID], [self clipSignature], [self clipExpires]];
		CTFLoader * newLoader = [CTFLoader loaderWithURL: [NSURL URLWithString:HEADURLString]
												delegate: self
												selector: @selector(HEADDownloadFinished:)];
		if (newLoader != nil) {
			[newLoader setHEADOnly:YES];
			[newLoader start];
			[self increaseActiveLookups];
		}
		
		if ( clipIsHD ) {
			NSString * HEADURLHDString = [NSString stringWithFormat:@"http://vimeo.com/moogaloop/play/clip:%@/%@/%@/?q=hd", [self clipID], [self clipSignature], [self clipExpires]];
			newLoader = [CTFLoader loaderWithURL: [NSURL URLWithString:HEADURLHDString]
										delegate: self
										selector: @selector(HEADHDDownloadFinished:)];
			if (newLoader != nil) {
				[newLoader setHEADOnly:YES];
				[newLoader start];
				[self increaseActiveLookups];
			}		
		}
	}
	[self decreaseActiveLookups];
	[self setXMLLoader: nil];
	
	if (activeLookups == 0) {
		[self setLookupStatus: failed];
	}
}



- (void) HEADDownloadFinished: (CTFLoader *) loader {
#if LOGGING_ENABLED
	NSLog(@"CTFKillerVimeo -HEADDownloadFinished:");
#endif
	
	if ( [self canPlayResponseResult: [loader response]] ) {
		[self setRedirectedURLString: [[[loader lastRequest] URL] absoluteString] ];
		[self setHasVideo: YES];
	}
	
	[self decreaseActiveLookups];
	[self setVideoLookup: nil];
}



- (void) HEADHDDownloadFinished: (CTFLoader *) loader {
#if LOGGING_ENABLED
	NSLog(@"CTFKillerVimeo -HEADHDDownloadFinished:");
#endif
	
	if ( [self canPlayResponseResult: [loader response]] ) {
		[self setRedirectedHDURLString: [[[loader lastRequest] URL] absoluteString] ];
		[self setHasVideoHD: YES];
	}
	
	[self decreaseActiveLookups];
	[self setVideoHDLookup: nil];
}






#pragma mark -
#pragma mark Accessors


- (NSString *) clipID {
	return clipID;
}

- (void) setClipID: (NSString *) newClipID {
	[newClipID retain];
	[clipID release];
	clipID = newClipID;
}


- (NSString *) clipSignature {
	return clipSignature;
}

- (void) setClipSignature: (NSString *) newClipSignature {
	[newClipSignature retain];
	[clipSignature release];
	clipSignature = newClipSignature;
}


- (NSString *) clipExpires {
	return clipExpires;
}

- (void) setClipExpires: (NSString *) newClipExpires {
	[newClipExpires retain];
	[clipExpires release];
	clipExpires = newClipExpires;
}


- (NSString *) embedCode {
	return embedCode;
}


- (void) setEmbedCode: (NSString *) newEmbedCode {
	[newEmbedCode retain];
	[embedCode release];
	embedCode = newEmbedCode;
}


- (NSString *) redirectedURLString {
	return redirectedURLString;
}

- (void) setRedirectedURLString: (NSString *) newRedirectedURLString {
	[newRedirectedURLString retain];
	[redirectedURLString release];
	redirectedURLString = newRedirectedURLString;
}


- (NSString *) redirectedHDURLString {
	return redirectedHDURLString;
}

- (void) setRedirectedHDURLString: (NSString *) newRedirectedHDURLString {
	[newRedirectedHDURLString retain];
	[redirectedHDURLString release];
	redirectedHDURLString = newRedirectedHDURLString;
}


- (CTFLoader *) XMLLoader {
	return XMLLoader;
}

- (void) setXMLLoader: (CTFLoader *) newXMLLoader {
	[newXMLLoader retain];
	[XMLLoader cancel];
	[XMLLoader release];
	XMLLoader = newXMLLoader;
}



@end
