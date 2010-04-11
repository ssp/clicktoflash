/*
 CTFLoader.h
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

#import <Cocoa/Cocoa.h>




@interface CTFLoader : NSObject {
	NSMutableData * data;
	NSURL * URL;
	NSURLResponse * response;
	NSURLRequest * lastRequest;
	NSURLConnection * connection;
	
	id identifier;
	
	BOOL HEADOnly;
	id  delegate;
	SEL callbackSelector;
}

+ (CTFLoader *) loaderWithURL: (NSURL *) theURL delegate: (id) theDelegate selector: (SEL) theSelector;
- (id) initWithURL: (NSURL *) theURL delegate: (id) theDelegate selector: (SEL) theSelector;
- (void) start;
- (void) finish;
- (void) cancel;


- (NSData*)data;
- (NSURL *)URL;
- (void)setURL:(NSURL *)newURL;
- (NSURLResponse *)response;
- (void)setResponse:(NSURLResponse *)newResponse;
- (NSURLRequest *)lastRequest;
- (void)setLastRequest:(NSURLRequest *)newLastRequest;
- (NSURLConnection *)connection;
- (void)setConnection:(NSURLConnection *)newConnection;
- (id)identifier;
- (void)setIdentifier:(id)newIdentifier;
- (BOOL)HEADOnly;
- (void)setHEADOnly:(BOOL)newHEADOnly;
- (id)delegate;
- (void)setDelegate:(id)newDelegate;
- (SEL)callbackSelector;
- (void)setCallbackSelector:(SEL)newCallbackSelector;

@end
