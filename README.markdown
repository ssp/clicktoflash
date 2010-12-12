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


## Test Versions & Change notes

I put out a few test versions over time. Those are close – but not quite identical – to code on the cutting-edge branch:

* current [ssp/cutting-edge Code](http://github.com/ssp/clicktoflash/tree/cutting-edge)
* download [ssp’s latest build](http://earthlingsoft.net/beta/ClickToFlash-ssp-latest.zip)
* [1.6b19-ssp](http://earthlingsoft.net/beta/ClickToFlash-1.6b19-ssp.zip)
	* Explicitly state that Flash isn’t installed, if necessary. An attempt to clarify the situation for users on new MacBook Airs.
* [1.6b18-ssp](http://earthlingsoft.net/beta/ClickToFlash-1.6b18-ssp.zip)
	* Find YouTube videos again (use URLs from Flashvars now, don’t explicitly check) (#758): 51266163, ebca180d41
	* Update to current Flash version number in Info.plist: b09baabc
* [1.6b17-ssp](http://earthlingsoft.net/beta/ClickToFlash-1.6b17-ssp.zip)
	* Improve class detection in CTFUserDefaultsController (fixes #729): c4eb12c62
	* Find YouTube H.264 again, by adding &asv=3 to the URLs (should fix #714, #721, #724, #726): 1fcdaf5dee
	* Avoid a warning in string formatting: 8c613cf44a
* [1.6b16-ssp](http://earthlingsoft.net/beta/ClickToFlash-1.6b16-ssp.zip)
	* Fix occasional Vimeo crashes due to the loader not being retained: 027ad3c2
	* update Flash version information to the latest release: 6b521a48
* [1.6b15-ssp](http://earthlingsoft.net/beta/ClickToFlash-1.6b15-ssp.zip)
	* Fix crash in Safari 5 with YouTube embedding (one of the loaders wasn't cancelled): 54cbafe2a4
* [1.6b14-ssp](http://earthlingsoft.net/beta/ClickToFlash-1.6b14-ssp.zip)
	* Use menu in Fluidium (from nevali): 84835050f3
	* Sparkle preference synchronisation (from simX): c83c950c63
	* Improve About Box (#628 and more): b00b6e2727
	* Variable width preferences window: 92d8e7c30
	* e7cdb45249 (de localisation: + whitelist flash file string)
	* 3f70088f84 (Remove unneeded Framework search paths.)
	* 035886bd20 (fix logic of autoplaying)
	* dd79ef5954 (Do QTMovie stuff on the main thread.) + 5fc8f6aaff (QuickTime main thread commit: missing line) to not crash or give exceptions on X.5.
	* 397b949022 (Use proper constant for QTMovieLoadStateError)
	* 3b0f10ae35 (increase logging threshold in CTFLoader)
* [1.6b13-ssp](http://earthlingsoft.net/beta/ClickToFlash-1.6b13-ssp.zip)
	* forward scroll wheel from QTMovieView to WebView: ad4dc3f5b3
	* handle YouTube film titles which use + instead of spaces: 180b518cc
	* asynchronously load info from YouTube: 8b020ce (#615)
	* tweak Whitelist handling to include the src URL: 20ff2d46c (#622)
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