function checkFutureSplashSupport () {
	for (var pluginID in navigator.plugins) {
		var plugin = navigator.plugins[pluginID];
		for (var MIMETypeID in plugin) {
			if (plugin[MIMETypeID].type == "application/futuresplash") {
				return true;
			}
		}
	}
	return false;
};

checkFutureSplashSupport();