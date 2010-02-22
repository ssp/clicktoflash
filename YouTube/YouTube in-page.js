			var yt = yt || {};
			yt.timing = {};
			yt.timing.cookieName = 'VISITOR_INFO1_LIVE';
			yt.timing.defaultAction = 'watch5ad';
			yt.timing.timers = {
				'watch5ad': {}
			};
				yt.timing.wff = true;
			yt.timing.tick = function(label, opt_action) {
				var action = opt_action || 'watch5ad';
				yt.timing.timers[action][label] = new Date().getTime();
			};
		
			yt.timing.tick('start');
		
			try {
				yt.timing.pt = window.gtbExternal && window.gtbExternal.pageT() ||
							window.external && window.external.pageT;
			} catch(e) {}
			if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
				yt.timing.pt = window.chrome && window.chrome.csi && Math.floor(window.chrome.csi().pageT);
			}







		yt.setConfig({
			'XSRF_TOKEN': 'Vgn36B2ZJY_9VLA_ehcqywQn7_h8MTI2NjkyMDM2OQ==',
			'XSRF_FIELD_NAME': 'session_token'
		});
		yt.pubsub.subscribe('init', yt.www.xsrf.populateSessionToken);


		yt.setConfig('XSRF_QL_PAIR', 'session_token=0mGqVrECvPtMXugEAn1WCl8r18B8MA==');



		yt.setConfig('LOGGED_IN', false);








				yt.www.thumbnailDelayLoad.fudgeFactor = 0;
	
	if (document.documentElement["getBoundingClientRect"]) {
		yt.events.listen(window, 'scroll', yt.www.thumbnailDelayLoad.loadImages);
		yt.events.listen(window, 'resize', yt.www.thumbnailDelayLoad.loadImages);
	}
	yt.www.thumbnailDelayLoad.loadImages();

		yt.www.thumbnailDelayLoad.loadAllAtOnce = true;

		
		
			yt.setTimeout(function() {
				window.yt.www.suggest.install(document.searchForm,
						document.searchForm.search_query,
						'de','Schließen',
						'Vorschläge',
						'Websuche',
						-1,
						yt.www.watch.watch5.search);
					}, 100);










		function() {
			var swfConfig = {"url": "http://s.ytimg.com/yt/swf/watch-vfl146219.swf", "min_version": "8.0.0", "args": {"rv.2.thumbnailUrl": "http://i2.ytimg.com/vi/UCtuEIj_4Gk/default.jpg", "rv.7.length_seconds": 159, "rv.0.url": "http://www.youtube.com/watch?v=pAWjo4pgYMI", "rv.0.view_count": 109644, "enablecsi": "1", "rv.2.title": "Kaya Yanar ist Vegetarier!", "rv.4.rating": "4.89473684211", "rv.3.view_count": 1281, "rv.0.length_seconds": 33, "rv.4.thumbnailUrl": "http://i2.ytimg.com/vi/yDEVKJf__dk/default.jpg", "fmt_url_map": "34|http://v21.lscache2.c.youtube.com/videoplayback?ip=0.0.0.0&sparams=id%2Cexpire%2Cip%2Cipbits%2Citag%2Calgorithm%2Cburst%2Cfactor&algorithm=throttle-factor&itag=34&ipbits=0&burst=40&sver=3&expire=1266858000&key=yt1&signature=C25666932719A697D82DD91DB751BEA001E71499.34D610A5CB87DE0BD445B725BAE0B70E98A3A574&factor=1.25&id=87fc04e216a6dcd8,5|http://v22.lscache1.c.youtube.com/videoplayback?ip=0.0.0.0&sparams=id%2Cexpire%2Cip%2Cipbits%2Citag%2Calgorithm%2Cburst%2Cfactor&algorithm=throttle-factor&itag=5&ipbits=0&burst=40&sver=3&expire=1266858000&key=yt1&signature=A4AF658C5D7A3C6FE12DFF3D8CFB64443EDB51D5.A2FBF40ACA163FBFAC11EB6DC3C29F85F6212D67&factor=1.25&id=87fc04e216a6dcd8", "csi_page_type": "watch", "keywords": "vegetarier,veganer,fleisch,milch,eier,umwelt,ern\u00c3\u00a4hrung,menschen,tiere,klima,tofu,vegetarisch,vegan,hunger,sex,porno", "cr": "DE", "rv.1.url": "http://www.youtube.com/watch?v=GUa1sJ0XdRE", "rv.6.thumbnailUrl": "http://i2.ytimg.com/vi/AunIJ-q0ZVg/default.jpg", "rv.3.rating": "4.42857142857", "fmt_list": "34/0/9/0/115,5/0/7/0/0", "rv.7.id": "SkX6f0EyLAk", "iv_storage_server": "http://www.google.com/reviews/y/", "rv.7.thumbnailUrl": "http://i4.ytimg.com/vi/SkX6f0EyLAk/default.jpg", "rv.0.rating": "4.65754189944", "rv.6.author": "marisaausberlin", "rv.5.id": "jbiZqaytmIQ", "rv.0.featured": 1, "rv.0.id": "pAWjo4pgYMI", "rv.5.url": "http://www.youtube.com/watch?v=jbiZqaytmIQ", "rv.3.title": "Vegetarier", "rv.0.author": "manniacmind", "rv.3.thumbnailUrl": "http://i3.ytimg.com/vi/2nxSL4uj2ZU/default.jpg", "rv.2.author": "VirtualKaya", "rv.6.url": "http://www.youtube.com/watch?v=AunIJ-q0ZVg", "fmt_map": "34/0/9/0/115,5/0/7/0/0", "hl": "de_DE", "rv.5.length_seconds": 17, "rv.0.thumbnailUrl": "http://i1.ytimg.com/vi/pAWjo4pgYMI/default.jpg", "rv.7.author": "Seelenfeuer666", "rv.5.view_count": 14072, "rv.1.length_seconds": 603, "rv.3.id": "2nxSL4uj2ZU", "rv.2.id": "UCtuEIj_4Gk", "rv.2.length_seconds": 63, "t": "vjVQa1PpcFPJ3oLLjUAJNd3CSLnmaZ799Eg4vyyx4dU=", "rv.6.id": "AunIJ-q0ZVg", "rv.6.view_count": 1151, "rv.3.author": "STIMMTTV", "rv.4.id": "yDEVKJf__dk", "video_id": "h_wE4ham3Ng", "rv.4.author": "vegetarierbund", "creator": "rsrweb", "allow_embed": 1, "fmt_stream_map": "34|http://v21.lscache2.c.youtube.com/videoplayback?ip=0.0.0.0&sparams=id%2Cexpire%2Cip%2Cipbits%2Citag%2Calgorithm%2Cburst%2Cfactor&algorithm=throttle-factor&itag=34&ipbits=0&burst=40&sver=3&expire=1266858000&key=yt1&signature=C25666932719A697D82DD91DB751BEA001E71499.34D610A5CB87DE0BD445B725BAE0B70E98A3A574&factor=1.25&id=87fc04e216a6dcd8,5|http://v22.lscache1.c.youtube.com/videoplayback?ip=0.0.0.0&sparams=id%2Cexpire%2Cip%2Cipbits%2Citag%2Calgorithm%2Cburst%2Cfactor&algorithm=throttle-factor&itag=5&ipbits=0&burst=40&sver=3&expire=1266858000&key=yt1&signature=A4AF658C5D7A3C6FE12DFF3D8CFB64443EDB51D5.A2FBF40ACA163FBFAC11EB6DC3C29F85F6212D67&factor=1.25&id=87fc04e216a6dcd8", "rv.2.rating": "4.84615384615", "rv.7.title": "Kafkas - Vegetarier k\u00c3\u00b6nnen nicht tanzen", "rv.1.id": "GUa1sJ0XdRE", "sk": "wqLTgoxYKJCqdO0MzXDZOyke4b7lWR2SC", "rv.6.title": "vegetarisch vegan smilefood Vegetarier vegetarische Ern\u00c3\u00a4hrung Tofu", "rv.4.length_seconds": 603, "rv.1.thumbnailUrl": "http://i4.ytimg.com/vi/GUa1sJ0XdRE/default.jpg", "rv.6.length_seconds": 291, "length_seconds": 541, "enablejsapi": 1, "plid": "AASALcS_Bu4InYUI", "iv_module": "http://s.ytimg.com/yt/swf/iv_module-vfl140952.swf", "rv.5.rating": "4.9", "rv.4.url": "http://www.youtube.com/watch?v=yDEVKJf__dk", "rv.1.author": "rsrweb", "rv.1.rating": "5.0", "rv.4.title": "Xenius - Sind Vegetarier die besseren Menschen 2/3", "rv.5.thumbnailUrl": "http://i3.ytimg.com/vi/jbiZqaytmIQ/default.jpg", "watermark": "http://s.ytimg.com/yt/swf/logo-vfl106645.swf,http://s.ytimg.com/yt/swf/hdlogo-vfl100714.swf", "rv.0.title": "Bist Du Vegetarier?", "rv.7.rating": "4.50877192982", "rv.3.url": "http://www.youtube.com/watch?v=2nxSL4uj2ZU", "rv.2.url": "http://www.youtube.com/watch?v=UCtuEIj_4Gk", "rv.7.url": "http://www.youtube.com/watch?v=SkX6f0EyLAk", "rv.2.view_count": 9942, "rv.4.view_count": 768, "rv.1.view_count": 2358, "rv.5.title": "Popoclub Vegetarier", "rv.6.rating": "4.84615384615", "vq": "medium", "rv.1.title": "Xenius - Sind Vegetarier die besseren Menschen? Teil 2", "rv.7.view_count": 13155, "rv.3.length_seconds": 183, "rv.5.author": "DEDE4EVER"}, "params": {"allowscriptaccess": "always", "allowfullscreen": "true", "quality": "best", "bgcolor": "#000000"}, "attrs": {"width": "100%", "id": "movie_player", "height": "100%"}, "url_v8": "http://s.ytimg.com/yt/swf/watch_v8-vfl146219.swf"};
			yt.setConfig('SWF_CONFIG', swfConfig);
			yt.setMsg('FLASH_UPGRADE', 'Old Flash? <a href="http://get.adobe.com/flashplayer/">Go upgrade!</a>');
			yt.flash.update(swfConfig);
		})();







		document.title = 'YouTube - Xenius - Sind Vegetarier die besseren Menschen? Teil 1';

		yt.setConfig({
			'VIDEO_ID': 'h_wE4ham3Ng',
			'VIDEO_USERNAME': 'rsrweb',
			'VIDEO_LANGUAGE': 'EN',
			'BLOCK_USER_XSRF': '',
			'SUBSCRIBE_AXC': '',

			'IS_WIDESCREEN': true,
			'IS_HD_AVAILABLE': false,
			'WIDE_PLAYER_STYLES': ["watch-wide-mode"],
			'EMBED_URL': 'http://www.youtube.com/v/h_wE4ham3Ng&hl=de_DE&fs=1',
			'AJAX_MODE': false,

			'HAS_ACTIVE_QUICKLIST': false,

			'LIST_PLAY_NEXT_URL': "",
			'LIST_AUTO_PLAY_ON': false,

			'COMMENTS_THRESHHOLD': -5,
			'COMMENTS_FILTER': 0,
			'COMMENTS_PAGE_SIZE': 10,
			'COMMENTS_COUNT': 23,
			
			'GUIDED_HELP_FLOW': 172459,
			'GUIDED_HELP_LOCALE': 'de_DE'

		});

		yt.setMsg({
			'LOADING': 'Wird geladen...',
			'COMMENT_OK': 'OK',
			'COMMENT_CAPTCHAFAIL': 'Die Buchstaben im Bild wurden falsch eingegeben. Versuche es erneut.',
			'COMMENT_ERROR': 'Fehler, versuche es erneut',
				'ADD_TO_WATCH_QUEUE': 'Zu Warteschlange hinzufügen'
		});

		yt.pubsub.subscribe('init', function() {
			yt.events.listen(document.body, 'mousemove', yt.www.comments.watch5.hideActions);
		});
		yt.pubsub.subscribe('init', function() {
			yt.history.disable();
			yt.www.watch.player.handleHashArgumentsOnWatchLoad();
			yt.history.enable(true);
		});

