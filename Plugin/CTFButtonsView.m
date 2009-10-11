//
//  CTFButtonsView.m
//  ClickToFlash
//
//  Created by  Sven on 11.10.09.
//  Copyright 2009 earthlingsoft. All rights reserved.
//

#import "CTFButtonsView.h"

static CGFloat interButtonGap = 4.;
static CGFloat topMargin = 4.;
static CGFloat rightMargin = 6.;
static CGFloat bottomMargin = 4.;
static CGFloat leftMargin = 32.;
static CGFloat height = 32.;


@implementation CTFButtonsView

- (id) initWithFrame: (NSRect) frame {
	self = [super initWithFrame: frame];
	
	if (self != nil) {
		buttons = [[NSMutableArray alloc] initWithCapacity:5];
	}
	
	return self;
}


- (void) dealloc {
	[buttons release];
	[super dealloc];
}






#pragma mark -
#pragma mark Convenience


+ (NSButton *) button {
	NSRect frame = NSMakeRect(.0, .0, 32., 32.); // correct frame is set later on -resizeWithOldSuperviewSize:
	NSButton * button = [[[NSButton alloc] initWithFrame:frame] autorelease];
	[button setButtonType: NSMomentaryLight];
	[button setBezelStyle: NSTexturedRoundedBezelStyle];
	return button;
}





#pragma mark -
#pragma mark NSView subclassing

- (void) resizeWithOldSuperviewSize: (NSSize) oldBoundsSize {
	NSRect superRect = [[self superview] bounds];
	CGFloat width = superRect.size.width - rightMargin - leftMargin;
	CGFloat bottom = superRect.size.height - topMargin - height;
	
	if ( bottom > 8. && width > 16.) {
		NSRect newFrame = NSMakeRect(leftMargin, bottom, width, height);
		[self setFrame: newFrame];
		[self arrangeButtons];
		[self setHidden: NO];
	}
	else {
		[self setHidden: YES];
	}
	
}






#pragma mark -
#pragma mark Manage Buttons

- (void) insertButton: (NSControl*) button atIndex: (NSInteger) index {
	[buttons insertObject:button atIndex:index];
	[self addSubview: button];
	[self arrangeButtons];
}


- (void) addButton: (NSControl*) button {
	[self insertButton:button atIndex:[buttons count]];
}


- (void) removeButton: (NSControl*) button {
	[buttons removeObject:button];
	[self arrangeButtons];
}

	 

// Buttons are arranged at the top right of the view from the right;
- (void) arrangeButtons {
	NSSize mySize = [self bounds].size;
	CGFloat currentPosition = mySize.width;
	
	NSEnumerator * buttonEnum = [buttons objectEnumerator];
	NSControl * button;
	while ( (button = [buttonEnum nextObject]) ) {
		NSRect buttonFrame = [button frame];
		CGFloat buttonLeft = currentPosition - buttonFrame.size.width;
		CGFloat buttonBottom = mySize.height - buttonFrame.size.height;
		[button setFrameOrigin:NSMakePoint(buttonLeft, buttonBottom)];
		
		// completely hide buttons that would be cut off
		[button setHidden: (buttonLeft < 0)];
		
		currentPosition = buttonLeft - interButtonGap;
	}
}


@end
