This is ssp’s branch of the ClickToFlash Source code.

##Current work

… is done on the cutting-edge branch which contains:

* changes that are supposed to go into the 1.6 version
	* Refactoring to use the CTFKiller subclasses for different kinds of Flash
	* Using NSViews to and proper buttons to draw ourselves and react to mouse clicks. This also paves the way to Accessibility.
	* CTFLoader class to handle getting the relevant data from the net
	* gazillions of other changes
* future additions
	* Using QuickTime to display videos. This includes a full screen mode and the ability to save movie files from QuickTime. It requires X.5 or higher.


On X.5 and higher there are three ways of watching video:

* Using QuickTime in our view (code from CTFKillerVideo-QT)
* Using the QuickTime plug-in in Safari (code from CTFKillerVideo-HTML)
* Using the HTML5 video element in Safari (code from CTFKillerVideo-HTML)

The first gives us more control and abilities and runs on X.5 and above only. The third seems to be hip and modern, but means a lack of control and appears to have poor performance, the second is a bit old fashioned but appears to work better.


## Test Versions

I put out a few test versions over time. Those are close to – but not quite identical to code on the cutting-edge branch:

* current [ssp/cutting-edge](http://github.com/ssp/clicktoflash/tree/cutting-edge)
	* forward scroll wheel from QTMovieView to WebView: ad4dc3f5b3

* [1.6b12-ssp](http://earthlingsoft.net/beta/ClickToFlash-1.6b12-ssp.zip)
	* fixes assertion issues on X.4 as suggested by Chris Johnsen
	* copy updater.app to plugin
	* add updater preferences to plugin
	* Make Prefs window NSWindow so it appears in the window list
	* 3169e790404296bfe8a376486d277deb4d6f5007
	* code going into the 1.6 branch
* 1.6b11-ssp fixes 1.6b10 issues
* 1.6b10-ssp (screwed up, infinite recursion when converting to HTML)
* 1.6b9-ssp
* 1.6b8-ssp


## Links
* [main ClickToFlash repository](http://github.com/rentzsch/clicktoflash/)
* [ClickToFlash Homepage](http://clicktoflash.com)
* [my ClickToFlash Wiki](http://wiki.github.com/ssp/clicktoflash/) with questions