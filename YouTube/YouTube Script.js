(function () {
	var f = true,
		g = null,
		i = false,
		aa = unescape,
		ba = encodeURIComponent,
		k = window,
		ca = Object,
		da = alert,
		ea = navigator,
		fa = undefined,
		ga = parseInt,
		ha = parseFloat,
		ia = String,
		ja = confirm,
		l = document,
		ka = decodeURIComponent,
		na = isNaN,
		oa = Array,
		m = Math;

	function pa(a, b) {
		return a.width = b
	}

	function qa(a, b) {
		return a.text = b
	}

	function n(a, b) {
		return a.innerHTML = b
	}

	function o(a, b) {
		return a.value = b
	}

	function ra(a, b) {
		return a.left = b
	}

	function sa(a, b) {
		return a.clear = b
	}

	function ta(a, b) {
		return a.visibility = b
	}

	function ua(a, b) {
		return a.toString = b
	}

	function va(a, b) {
		return a.prototype = b
	}

	function wa(a, b) {
		return a.className = b
	}

	function xa(a, b) {
		return a.checked = b
	}

	function p(a, b) {
		return a.disabled = b
	}

	function ya(a, b) {
		return a.href = b
	}

	function za(a, b) {
		return a.display = b
	}

	function Aa(a, b) {
		return a.height = b
	}
	var q = "appendChild",
		Ba = "forms",
		s = "push",
		Ca = "hash",
		Da = "getBoundingClientRect",
		Ea = "open",
		Fa = "test",
		Ga = "shift",
		Ha = "GetVariable",
		Ia = "exec",
		Ja = "width",
		Ka = "round",
		La = "slice",
		t = "replace",
		Ma = "nodeType",
		Na = "data",
		Oa = "floor",
		Pa = "responseText",
		Qa = "getElementById",
		u = "innerHTML",
		Ra = "offsetWidth",
		Sa = "dataset",
		Ta = "blur",
		Ua = "createTextNode",
		Va = "getData",
		v = "value",
		Wa = "insertBefore",
		x = "indexOf",
		Xa = "nodeName",
		Ya = "left",
		Za = "write",
		$a = "match",
		ab = "getBoxObjectFor",
		bb = "opera",
		cb = "focus",
		y = "createElement",
		eb = "scrollHeight",
		fb = "keyCode",
		gb = "firstChild",
		hb = "select",
		ib = "clientLeft",
		jb = "addEventListener",
		z = "setAttribute",
		kb = "clientTop",
		lb = "cloneNode",
		mb = "type",
		nb = "childNodes",
		ob = "attachEvent",
		pb = "defaultView",
		qb = "name",
		rb = "nextSibling",
		sb = "contentWindow",
		tb = "getTime",
		ub = "getElementsByTagName",
		vb = "documentElement",
		wb = "substr",
		xb = "visibility",
		yb = "setData",
		zb = "scrollTop",
		Ab = "toString",
		A = "length",
		Cb = "propertyIsEnumerable",
		Db = "title",
		B = "prototype",
		Eb = "className",
		Fb = "clientWidth",
		Gb = "checked",
		Hb = "document",
		Ib = "removeEventListener",
		C = "split",
		Jb = "offsetParent",
		Kb = "duration",
		Lb = "stopPropagation",
		Mb = "userAgent",
		D = "location",
		Nb = "save",
		F = "style",
		Ob = "close",
		G = "body",
		Pb = "removeChild",
		Qb = "target",
		Rb = "call",
		Sb = "pathname",
		Tb = "options",
		Ub = "random",
		Vb = "getAttribute",
		Wb = "responseXML",
		Xb = "detachEvent",
		Yb = "clientHeight",
		Zb = "scrollLeft",
		$b = "compatMode",
		ac = "bottom",
		bc = "href",
		cc = "substring",
		dc = "rows",
		ec = "action",
		fc = "apply",
		gc = "tagName",
		hc = "element",
		H = "parentNode",
		ic = "offsetTop",
		jc = "height",
		kc = "splice",
		lc = "offsetHeight",
		mc = "join",
		nc = "toLowerCase",
		oc = "right",
		pc = "event",
		I;
	var qc = this,
		J = function (a, b, c) {
		a = a[C](".");
		c = c || qc; ! (a[0] in c) && c.execScript && c.execScript("var " + a[0]);
		for (var d; a[A] && (d = a[Ga]());) if (!a[A] && b !== fa) c[d] = b;
		else c = c[d] ? c[d] : (c[d] = {})
	},
		rc = function (a, b) {
		a = a[C](".");
		b = b || qc;
		for (var c; c = a[Ga]();) if (b[c]) b = b[c];
		else return g;
		return b
	},
		sc = function (a) {
		a.c = function () {
			return a.Ad || (a.Ad = new a)
		}
	},
		tc = function (a) {
		var b = typeof a;
		if (b == "object") if (a) {
			if (a instanceof oa || !(a instanceof ca) && ca[B][Ab][Rb](a) == "[object Array]" || typeof a[A] == "number" && typeof a[kc] != "undefined" && typeof a[Cb] != "undefined" && !a[Cb]("splice")) return "array";
			if (! (a instanceof ca) && (ca[B][Ab][Rb](a) == "[object Function]" || typeof a[Rb] != "undefined" && typeof a[Cb] != "undefined" && !a[Cb]("call"))) return "function"
		} else return "null";
		else if (b == "function" && typeof a[Rb] == "undefined") return "object";
		return b
	},
		uc = function (a) {
		var b = tc(a);
		return b == "array" || b == "object" && typeof a[A] == "number"
	},
		vc = function (a) {
		return typeof a == "string"
	},
		yc = function (a) {
		if (a.hasOwnProperty && a.hasOwnProperty(wc)) return a[wc];
		a[wc] || (a[wc] = ++xc);
		return a[wc]
	},
		wc = "closure_hashCode_" + m[Oa](m[Ub]() * 2147483648)[Ab](36),
		xc = 0,
		zc = function (a, b) {
		var c = b || qc;
		if (arguments[A] > 2) {
			var d = oa[B][La][Rb](arguments, 2);
			return function () {
				var e = oa[B][La][Rb](arguments);
				oa[B].unshift[fc](e, d);
				return a[fc](c, e)
			}
		} else return function () {
			return a[fc](c, arguments)
		}
	},
		Ac = Date.now ||
	function () {
		return +new Date
	},
		Bc = function (a, b) {
		function c() {}
		va(c, b[B]);
		a.le = b[B];
		va(a, new c)
	};
	var Cc = k.yt && k.yt.config_ || {};
	J("yt.config_", Cc, void 0);
	var Dc = k.yt && k.yt.globals_ || {};
	J("yt.globals_", Dc, void 0);
	var Ec = k.yt && k.yt.msgs_ || {};
	J("yt.msgs_", Ec, void 0);
	var Fc = k.yt && k.yt.timeouts_ || [];
	J("yt.timeouts_", Fc, void 0);
	var Gc = k.yt && k.yt.intervals_ || [];
	J("yt.intervals_", Gc, void 0);
	var Ic = function () {
		Hc(Cc, arguments)
	},
		K = function (a, b) {
		return a in Cc ? Cc[a] : b
	},
		Jc = function () {
		for (var a = 0, b = arguments[A]; a < b; ++a) Dc[arguments[a]] = 1
	},
		M = function (a, b) {
		a = k.setTimeout(a, b);
		Fc[s](a);
		return a
	},
		Kc = function (a, b) {
		a = k.setInterval(a, b);
		Gc[s](a);
		return a
	},
		Lc = function (a) {
		k.clearTimeout(a)
	},
		Mc = function (a) {
		k.clearInterval(a)
	},
		N = function (a, b, c) {
		b = b || {};
		if (a = a in Ec ? Ec[a] : c) for (var d in b) a = a[t](new RegExp("\\$" + d, "gi"), b[d]);
		return a
	},
		Hc = function (a, b) {
		if (b[A] > 1) {
			var c = b[0];
			a[c] = b[1]
		} else {
			b = b[0];
			for (c in b) a[c] = b[c]
		}
	},
		Nc = !!eval("/*@cc_on!@*/false");
	var Oc, Pc, Uc = function (a, b, c, d, e, h, j, r, w, E) {
		if (l[Qa]) {
			this.Nb = E ? E : "detectflash";
			this.Ud = Qc(this.Nb);
			this.F = {};
			this.Jb = {};
			this.attributes = [];
			a && this[z]("swf", a);
			b && this[z]("id", b);
			c && this[z]("width", c);
			d && this[z]("height", d);
			e && this[z]("version", new Rc(e[Ab]()[C](".")));
			this.Y = Sc();
			if (!k[bb] && l.all && this.Y.f > 7) if (!Oc) {
				Pc = function () {
					__flash_unloadHandler = function () {};
					__flash_savedUnloadHandler = function () {};
					k[ob]("onunload", Tc)
				};
				k[ob]("onbeforeunload", Pc);
				Oc = f
			}
			h && this.z("bgcolor", h);
			this.z("quality", j ? j : "high");
			this[z]("useExpressInstall", i);
			this[z]("doExpressInstall", i);
			this[z]("xiRedirectUrl", r ? r : k[D]);
			this[z]("redirectUrl", "");
			w && this[z]("redirectUrl", w)
		}
	};
	va(Uc, {
		Ib: function (a) {
			this.Mb = !a ? "expressinstall.swf" : a;
			this[z]("useExpressInstall", f)
		},
		setAttribute: function (a, b) {
			this.attributes[a] = b
		},
		getAttribute: function (a) {
			return this.attributes[a] || ""
		},
		z: function (a, b) {
			this.F[a] = b
		},
		i: function (a, b) {
			this.Jb[a] = b
		},
		ib: function () {
			var a = [],
				b, c = this.Jb;
			for (b in c) a[a[A]] = b + "=" + c[b];
			return a
		},
		sd: function () {
			var a = "";
			if (ea.plugins && ea.mimeTypes && ea.mimeTypes[A]) {
				if (this[Vb]("doExpressInstall")) {
					this.i("MMplayerType", "PlugIn");
					this[z]("swf", this.Mb)
				}
				a = '<embed type="application/x-shockwave-flash" src="' + this[Vb]("swf") + '" width="' + this[Vb]("width") + '" height="' + this[Vb]("height") + '" style="' + (this[Vb]("style") || "") + '"';
				a += ' id="' + this[Vb]("id") + '" name="' + this[Vb]("id") + '" ';
				var b = this.F;
				for (var c in b) a += [c] + '="' + b[c] + '" ';
				b = this.ib()[mc]("&");
				if (b[A] > 0) a += 'flashvars="' + b + '"';
				a += "/>"
			} else {
				if (this[Vb]("doExpressInstall")) {
					this.i("MMplayerType", "ActiveX");
					this[z]("swf", this.Mb)
				}
				a = '<object id="' + this[Vb]("id") + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + this[Vb]("width") + '" height="' + this[Vb]("height") + '" style="' + (this[Vb]("style") || "") + '">';
				a += '<param name="movie" value="' + this[Vb]("swf") + '" />';
				b = this.F;
				for (c in b) a += '<param name="' + c + '" value="' + b[c] + '" />';
				b = this.ib()[mc]("&");
				if (b[A] > 0) a += '<param name="flashvars" value="' + b + '" />';
				a += "</object>"
			}
			return a
		},
		write: function (a) {
			if (this[Vb]("useExpressInstall")) if (this.Y.R(new Rc([6, 0, 65])) && !this.Y.R(this[Vb]("version"))) {
				this[z]("doExpressInstall", f);
				this.i("MMredirectURL", escape(this[Vb]("xiRedirectUrl")));
				l.title = l[Db][La](0, 47) + " - Flash Player Installation";
				this.i("MMdoctitle", l[Db])
			}
			if (this.Ud || this[Vb]("doExpressInstall") || this.Y.R(this[Vb]("version"))) {
				n(typeof a == "string" ? l[Qa](a) : a, this.sd());
				return f
			} else this[Vb]("redirectUrl") != "" && l[D][t](this[Vb]("redirectUrl"));
			return i
		}
	});
	var Sc = function () {
		var a = new Rc([0, 0, 0]),
			b;
		if (ea.plugins && ea.mimeTypes[A]) {
			if ((b = ea.plugins["Shockwave Flash"]) && b.description) a = new Rc(b.description[t](/([a-zA-Z]|\s)+/, "")[t](/(\s+r|\s+b[0-9]+)/, ".")[C]("."))
		} else if (ea[Mb] && ea[Mb][x]("Windows CE") >= 0) {
			b = 1;
			for (var c = 3; b;) try {
				c++;
				b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + c);
				a = new Rc([c, 0, 0])
			} catch(d) {
				b = g
			}
		} else {
			try {
				b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")
			} catch(e) {
				try {
					b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
					a = new Rc([6, 0, 21]);
					b.ge = "always"
				} catch(h) {
					if (a.f == 6) return a
				}
				try {
					b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
				} catch(j) {}
			}
			if (b) a = new Rc(b[Ha]("$version")[C](" ")[1][C](","))
		}
		return a
	},
		Rc = function (a) {
		this.f = a[0] != g ? ga(a[0], 10) : 0;
		this.p = a[1] != g ? ga(a[1], 10) : 0;
		this.rev = a[2] != g ? ga(a[2], 10) : 0
	};
	Rc[B].R = function (a) {
		if (this.f < a.f) return i;
		if (this.f > a.f) return f;
		if (this.p < a.p) return i;
		if (this.p > a.p) return f;
		if (this.rev < a.rev) return i;
		return f
	};
	var Qc = function (a) {
		var b = l[D].search || l[D][Ca];
		if (a == g) return Vc(b);
		if (b) {
			b = b[cc](1)[C]("&");
			for (var c = 0; c < b[A]; c++) if (b[c][cc](0, b[c][x]("=")) == a) return Vc(b[c][cc](b[c][x]("=") + 1))
		}
		return ""
	},
		Vc = function (a) {
		return /[\\\"<>;]/ [Ia](a) != g && typeof ba != "undefined" ? ba(a) : a
	},
		Tc = function () {
		for (var a = l[ub]("OBJECT"), b = a[A] - 1; b >= 0; b--) {
			za(a[b][F], "none");
			for (var c in a[b]) if (typeof a[b][c] == "function") a[b][c] = function () {}
		}
	};
	if (!l[Qa] && l.all) l.getElementById = function (a) {
		return l.all[a]
	};
	var Wc = oa[B],
		Xc = Wc[x] ?
	function (a, b, c) {
		return Wc[x][Rb](a, b, c)
	} : function (a, b, c) {
		c = c == g ? 0 : c < 0 ? m.max(0, a[A] + c) : c;
		if (vc(a)) {
			if (!vc(b) || b[A] != 1) return -1;
			return a[x](b, c)
		}
		for (c = c; c < a[A]; c++) if (c in a && a[c] === b) return c;
		return -1
	},
	Yc = Wc.forEach ?
	function (a, b, c) {
		Wc.forEach[Rb](a, b, c)
	} : function (a, b, c) {
		for (var d = a[A], e = vc(a) ? a[C]("") : a, h = 0; h < d; h++) h in e && b[Rb](c, e[h], h, a)
	},
	Zc = Wc.filter ?
	function (a, b, c) {
		return Wc.filter[Rb](a, b, c)
	} : function (a, b, c) {
		for (var d = a[A], e = [], h = 0, j = vc(a) ? a[C]("") : a, r = 0; r < d; r++) if (r in j) {
			var w = j[r];
			if (b[Rb](c, w, r, a)) e[h++] = w
		}
		return e
	},
	$c = function (a, b, c) {
		a: {
			for (var d = a[A], e = vc(a) ? a[C]("") : a, h = 0; h < d; h++) if (h in e && b[Rb](c, e[h], h, a)) {
				b = h;
				break a
			}
			b = -1
		}
		return b < 0 ? g : vc(a) ? a.charAt(b) : a[b]
	},
	ad = function (a, b) {
		b = Xc(a, b);
		var c;
		if (c = b >= 0) Wc[kc][Rb](a, b, 1)[A] == 1;
		return c
	},
	bd = function (a) {
		for (var b = 1; b < arguments[A]; b++) {
			var c = arguments[b],
				d;
			if (tc(c) == "array" || (d = uc(c)) && c.hasOwnProperty("callee")) a[s][fc](a, c);
			else if (d) for (var e = a[A], h = c[A], j = 0; j < h; j++) a[e + j] = c[j];
			else a[s](c)
		}
	},
	dd = function (a) {
		return Wc[kc][fc](a, cd(arguments, 1))
	},
	cd = function (a, b, c) {
		return arguments[A] <= 2 ? Wc[La][Rb](a, b) : Wc[La][Rb](a, b, c)
	};
	var ed;
	var fd = function (a) {
		return (a = a[Eb]) && typeof a[C] == "function" ? a[C](/\s+/) : []
	},
		O = function (a) {
		var b = fd(a),
			c;
		c = cd(arguments, 1);
		for (var d = 0, e = 0; e < c[A]; e++) if (! (Xc(b, c[e]) >= 0)) {
			b[s](c[e]);
			d++
		}
		c = d == c[A];
		wa(a, b[mc](" "));
		return c
	},
		Q = function (a) {
		var b = fd(a),
			c;
		c = cd(arguments, 1);
		for (var d = 0, e = 0; e < b[A]; e++) if (Xc(c, b[e]) >= 0) {
			dd(b, e--, 1);
			d++
		}
		c = d == c[A];
		wa(a, b[mc](" "));
		return c
	},
		R = function (a, b) {
		return Xc(fd(a), b) >= 0
	},
		gd = function (a, b, c) {
		c ? O(a, b) : Q(a, b)
	},
		hd = function (a, b) {
		var c = !R(a, b);
		gd(a, b, c);
		return c
	};
	var id = function (a, b) {
		this.x = a !== fa ? a : 0;
		this.y = b !== fa ? b : 0
	};
	id[B].V = function () {
		return new id(this.x, this.y)
	};
	ua(id[B], function () {
		return "(" + this.x + ", " + this.y + ")"
	});
	var jd = function (a, b) {
		return new id(a.x - b.x, a.y - b.y)
	};
	var kd = function (a, b) {
		pa(this, a);
		Aa(this, b)
	};
	kd[B].V = function () {
		return new kd(this[Ja], this[jc])
	};
	ua(kd[B], function () {
		return "(" + this[Ja] + " x " + this[jc] + ")"
	});
	kd[B].floor = function () {
		pa(this, m[Oa](this[Ja]));
		Aa(this, m[Oa](this[jc]));
		return this
	};
	kd[B].round = function () {
		pa(this, m[Ka](this[Ja]));
		Aa(this, m[Ka](this[jc]));
		return this
	};
	var ld = function (a, b, c) {
		for (var d in a) if (b[Rb](c, a[d], d, a)) return d
	},
		md = function (a) {
		var b = {};
		for (var c in a) b[c] = a[c];
		return b
	};
	var nd = /^[a-zA-Z0-9\-_.!~*'()]*$/,
		od = function (a) {
		a = ia(a);
		if (!nd[Fa](a)) return ba(a);
		return a
	},
		ud = function (a, b) {
		if (b) return a[t](pd, "&amp;")[t](qd, "&lt;")[t](rd, "&gt;")[t](sd, "&quot;");
		else {
			if (!td[Fa](a)) return a;
			if (a[x]("&") != -1) a = a[t](pd, "&amp;");
			if (a[x]("<") != -1) a = a[t](qd, "&lt;");
			if (a[x](">") != -1) a = a[t](rd, "&gt;");
			if (a[x]('"') != -1) a = a[t](sd, "&quot;");
			return a
		}
	},
		pd = /&/g,
		qd = /</g,
		rd = />/g,
		sd = /\"/g,
		td = /[&<>\"]/,
		vd = function (a) {
		var b = qc[Hb][y]("a");
		n(b, a);
		b.normalize && b.normalize();
		a = b[gb].nodeValue;
		n(b, "");
		return a
	},
		wd = function (a) {
		return a[t](/&([^;]+);/g, function (b, c) {
			switch (c) {
			case "amp":
				return "&";
			case "lt":
				return "<";
			case "gt":
				return ">";
			case "quot":
				return '"';
			default:
				if (c.charAt(0) == "#") {
					c = Number("0" + c[wb](1));
					if (!na(c)) return ia.fromCharCode(c)
				}
				return b
			}
		})
	},
		yd = function (a, b) {
		var c = 0;
		a = ia(a)[t](/^[\s\xa0]+|[\s\xa0]+$/g, "")[C](".");
		b = ia(b)[t](/^[\s\xa0]+|[\s\xa0]+$/g, "")[C](".");
		for (var d = m.max(a[A], b[A]), e = 0; c == 0 && e < d; e++) {
			var h = a[e] || "",
				j = b[e] || "",
				r = new RegExp("(\\d*)(\\D*)", "g"),
				w = new RegExp("(\\d*)(\\D*)", "g");
			do {
				var E = r[Ia](h) || ["", "", ""],
					L = w[Ia](j) || ["", "", ""];
				if (E[0][A] == 0 && L[0][A] == 0) break;
				c = xd(E[1][A] == 0 ? 0 : ga(E[1], 10), L[1][A] == 0 ? 0 : ga(L[1], 10)) || xd(E[2][A] == 0, L[2][A] == 0) || xd(E[2], L[2])
			} while (c == 0)
		}
		return c
	},
		xd = function (a, b) {
		if (a < b) return -1;
		else if (a > b) return 1;
		return 0
	};
	Ac();
	var zd, Ad, Bd, Cd, Dd, Ed, Fd = function () {
		return qc.navigator ? qc.navigator[Mb] : g
	},
		Gd = function () {
		return qc.navigator
	};
	Dd = Cd = Bd = Ad = zd = i;
	var Hd;
	if (Hd = Fd()) {
		var Id = Gd();
		zd = Hd[x]("Opera") == 0;
		Ad = !zd && Hd[x]("MSIE") != -1;
		Cd = (Bd = !zd && Hd[x]("WebKit") != -1) && Hd[x]("Mobile") != -1;
		Dd = !zd && !Bd && Id.product == "Gecko"
	}
	var Jd = zd,
		Kd = Ad,
		Ld = Dd,
		Md = Bd,
		Nd = Cd,
		Od = Gd();
	Ed = (Od && Od.platform || "")[x]("Mac") != -1;
	var Pd = !!Gd() && (Gd().appVersion || "")[x]("X11") != -1,
		Qd = "",
		Rd;
	if (Jd && qc[bb]) {
		var Sd = qc[bb].version;
		Qd = typeof Sd == "function" ? Sd() : Sd
	} else {
		if (Ld) Rd = /rv\:([^\);]+)(\)|;)/;
		else if (Kd) Rd = /MSIE\s+([^\);]+)(\)|;)/;
		else if (Md) Rd = /WebKit\/(\S+)/;
		if (Rd) {
			var Td = Rd[Ia](Fd());
			Qd = Td ? Td[1] : ""
		}
	}
	var Ud = Qd,
		Vd = {},
		Wd = function (a) {
		return Vd[a] || (Vd[a] = yd(Ud, a) >= 0)
	};
	var Zd = function (a) {
		return a ? new Xd(Yd(a)) : ed || (ed = new Xd)
	},
		S = function (a) {
		return vc(a) ? l[Qa](a) : a
	},
		T = function (a, b, c) {
		c = c || l;
		a = a && a != "*" ? a.toUpperCase() : "";
		if (c.querySelectorAll && (a || b) && (!Md || $d(l) || Wd("528"))) b = c.querySelectorAll(a + (b ? "." + b : ""));
		else if (b && c.getElementsByClassName) {
			c = c.getElementsByClassName(b);
			if (a) {
				for (var d = {}, e = 0, h = 0, j; j = c[h]; h++) if (a == j[Xa]) d[e++] = j;
				d.length = e;
				b = d
			} else b = c
		} else {
			c = c[ub](a || "*");
			if (b) {
				d = {};
				for (h = e = 0; j = c[h]; h++) {
					a = j[Eb];
					if (typeof a[C] == "function" && Xc(a[C](/\s+/), b) >= 0) d[e++] = j
				}
				d.length = e;
				b = d
			} else b = c
		}
		return b
	},
		ae = function (a) {
		var b = a[Hb];
		if (Md && !Wd("500") && !Nd) {
			if (typeof a.innerHeight == "undefined") a = k;
			b = a.innerHeight;
			var c = a[Hb][vb][eb];
			if (a == a.top) if (c < b) b -= 15;
			return new kd(a.innerWidth, b)
		}
		a = $d(b) && (!Jd || Jd && Wd("9.50")) ? b[vb] : b[G];
		return new kd(a[Fb], a[Yb])
	},
		be = function (a) {
		var b = a[Hb],
			c = 0;
		if (b) {
			a = ae(a)[jc];
			c = b[G];
			var d = b[vb];
			if ($d(b) && d[eb]) c = d[eb] != a ? d[eb] : d[lc];
			else {
				b = d[eb];
				var e = d[lc];
				if (d[Yb] != e) {
					b = c[eb];
					e = c[lc]
				}
				c = b > a ? b > e ? b : e : b < e ? b : e
			}
		}
		return c
	},
		$d = function (a) {
		return a[$b] == "CSS1Compat"
	},
		ce = function (a, b) {
		for (; a && a[Ma] != 1;) a = b ? a[rb] : a.previousSibling;
		return a
	},
		Yd = function (a) {
		return a[Ma] == 9 ? a : a.ownerDocument || a[Hb]
	},
		ee = function (a, b, c) {
		var d = b ? b.toUpperCase() : g;
		return de(a, function (e) {
			return (!d || e[Xa] == d) && (!c || R(e, c))
		}, f)
	},
		de = function (a, b, c, d) {
		if (!c) a = a[H];
		c = d == g;
		for (var e = 0; a && (c || e <= d);) {
			if (b(a)) return a;
			a = a[H];
			e++
		}
		return g
	},
		Xd = function (a) {
		this.e = a || qc[Hb] || l
	};
	I = Xd[B];
	I.ud = function (a) {
		return ae(a || this.jb() || k)
	};
	I.createElement = function (a) {
		return this.e[y](a)
	};
	I.createTextNode = function (a) {
		return this.e[Ua](a)
	};
	I.ob = function () {
		return $d(this.e)
	};
	I.jb = function () {
		return this.e.parentWindow || this.e[pb]
	};
	I.nd = function () {
		return !Md && $d(this.e) ? this.e[vb] : this.e[G]
	};
	I.oa = function () {
		var a = !Md && $d(this.e) ? this.e[vb] : this.e[G];
		return new id(a[Zb], a[zb])
	};
	I.appendChild = function (a, b) {
		a[q](b)
	};
	var ie = function (a) {
		this.Ua = {};
		this.ia = {};
		this.F = {};
		a = a || {};
		this.url = a.url || this.url;
		this.fa = a.url_v8 || this.fa;
		this.za = a.min_version || this.za;
		this.Ua = a.args || md(fe);
		this.ia = a.attrs || md(ge);
		this.F = a.params || md(he)
	},
		fe = {
		enablejsapi: 1
	},
		ge = {
		width: "100%",
		height: "100%"
	},
		he = {
		allowscriptaccess: "always",
		allowfullscreen: "true",
		quality: "best",
		bgcolor: "#000000"
	};
	ie[B].url = "";
	ie[B].fa = "";
	ie[B].za = "8.0.0";
	var je = function () {
		this.Kb = this.td();
		var a = this.Gd(this.Kb);
		this.f = a[0];
		this.p = a[1];
		this.rev = a[2]
	};
	sc(je);
	I = je[B];
	I.f = 0;
	I.p = 0;
	I.rev = 0;
	I.Kb = "";
	I.Vd = function (a, b, c) {
		a = typeof a == "string" ? a[C](".") : [a, b, c];
		a[0] = ga(a[0], 10) || 0;
		a[1] = ga(a[1], 10) || 0;
		a[2] = ga(a[2], 10) || 0;
		return a
	};
	I.isSupported = function (a, b, c) {
		a = this.Vd(a, b, c);
		return this.f > a[0] || this.f == a[0] && this.p > a[1] || this.f == a[0] && this.p == a[1] && this.rev >= a[2]
	};
	I.Xd = function () {
		return Nc && this.isSupported(6, 0, 65)
	};
	I.td = function () {
		var a, b;
		if (Nc) {
			if (a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) try {
				b = a[Ha]("$version")
			} catch(c) {}
		} else {
			var d = l[ub]("body")[0],
				e = l[y]("object");
			e[z]("type", "application/x-shockwave-flash");
			if ((a = d[q](e)) && a[Ha]) b = a[Ha]("$version");
			d[Pb](e)
		}
		return b || ""
	};
	I.Gd = function (a) {
		if (a) {
			a = a[C](" ")[1][C](",");
			return [ga(a[0], 10), ga(a[1], 10), ga(a[2], 10)]
		} else return [0, 0, 0]
	};
	var ke = function (a, b) {
		for (var c in b) {
			var d = c,
				e = b[c];
			if (tc(e) == "array") {
				e = e;
				for (var h = 0; h < e[A]; h++) a[s]("&", d, "=", od(e[h]))
			} else e != g && a[s]("&", d, "=", od(e))
		}
		return a
	};
	var le = function (a) {
		a = a[C]("&");
		for (var b = {}, c = 0, d = a[A]; c < d; c++) {
			var e = a[c][C]("=");
			if (e[A] == 2) {
				var h = e[0];
				e = ka(e[1][t](/\+/g, " "));
				if (h in b) if (tc(b[h]) == "array") bd(b[h], e);
				else b[h] = [b[h], e];
				else b[h] = e
			}
		}
		return b
	},
		me = function (a) {
		a = ke([], a);
		a[0] = "";
		return a[mc]("")
	},
		ne = function (a, b) {
		a = ke([a], b);
		if (a[1]) {
			b = a[0];
			var c = b[x]("#");
			if (c >= 0) {
				a[s](b[wb](c));
				a[0] = b = b[wb](0, c)
			}
			c = b[x]("?");
			if (c < 0) a[1] = "?";
			else if (c == b[A] - 1) a[1] = fa
		}
		return a[mc]("")
	},
		oe = function (a) {
		a = a[C]("/", 3);
		if (a[A] >= 3 && a[0] == "http:" && a[1] == "") {
			var b = a[2][C](".").reverse();
			if (b[A] < 2) return i;
			var c = b[0];
			b = b[1];
			if (b == "youtube" && c == "com") return f;
			if (b == "google") return f;
			if (a[2] == "google" && (b == "co" && c == "uk" || b == "com" && c == "au")) return f
		}
		return i
	};
	var pe = function (a, b, c) {
		var d = Sc();
		if (d.f == 9) if (ea[Mb][x]("Sony/COM2") > -1) d.R(new Rc([9, 1, 58])) || (d = new Rc([8, 0, 0]));
		return d.R(new Rc([a, b, c]))
	},
		qe = function (a, b, c) {
		if ((a = S(a)) && b && c) {
			c instanceof ie || (c = new ie(c));
			var d = md(c.ia);
			d.type = "application/x-shockwave-flash";
			d.data = b;
			var e = md(c.F);
			e.flashvars = me(c.Ua);
			if (Nc) e.movie = b;
			b = ["<object "];
			for (var h in d) b[s](h, '="', d[h], '"');
			b[s](">");
			for (h in e) b[s]('<param name="', h, '" value="', e[h], '">');
			b[s]("</object>");
			n(a, b[mc](""))
		}
	},
		re = function (a) {
		if (a) {
			a instanceof
			ie || (a = new ie(a));
			var b = S(a.ia.id),
				c = b ? b[H] : g;
			if (!b || !c) M(function () {
				re(a)
			}, 50);
			else {
				var d = je.c();
				if (d.isSupported(a.za)) if (d.f > 8) {
					if (b[Na] != a.url || b[Na][x]("watch_as3") == -1) qe(c, a.url, a)
				} else {
					if (b[Na] != a.fa || b[Na][x]("watch_as3") == -1) qe(c, a.fa, a)
				} else if (d.Xd()) {
					b = new ie({
						url: "http://s.ytimg.com/yt/swf/expressInstall-vfl70493.swf",
						args: {
							MMredirectURL: k[D],
							MMplayerType: "ActiveX",
							MMdoctitle: l[Db]
						}
					});
					qe(c, b.url, b)
				} else n(c, '<div id="flash-upgrade">' + N("FLASH_UPGRADE") + "</div>")
			}
		}
	};
	var se = /\s*;\s*/,
		te = function (a, b, c, d, e) {
		if (/[;=]/ [Fa](a)) throw Error('Invalid cookie name "' + a + '"');
		if (/;/ [Fa](b)) throw Error('Invalid cookie value "' + b + '"');
		c !== fa || (c = -1);
		l.cookie = a + "=" + b + (e ? ";domain=" + e : "") + (d ? ";path=" + d : "") + (c < 0 ? "" : c == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date((new Date)[tb]() + c * 1E3)).toUTCString())
	},
		ue = function (a, b) {
		a = a + "=";
		for (var c = ia(l.cookie)[C](se), d = 0, e; e = c[d]; d++) if (e[x](a) == 0) return e[wb](a[A]);
		return b
	};
	var ve = function (a, b, c) {
		a = "" + a;
		te(a, b, c, "/", "youtube.com")
	},
		we = function (a, b) {
		a = "" + a;
		return ue(a, b)
	},
		xe = function (a) {
		a = "" + a;
		var b = ue(a) !== fa;
		te(a, "", 0, "/", "youtube.com");
		return b
	};
	var ye = function () {
		var a = l[y]("script");
		a.type = "text/javascript";
		a.src = "http://www.google.com/support/js/guide_inproduct.js?v=" + Ac();
		l[G][q](a)
	},
		ze = function (a) {
		if (a = a || K("GUIDED_HELP_FLOW")) {
			var b = rc("help.guide.loadFlow");
			b && b(a)
		} else(a = rc("help.guide.optionallyResume")) && a()
	};
	var Ae = {},
		Be = 0,
		Ce = function (a, b, c) {
		return ld(Ae, function (d) {
			return d[0] == a && d[1] == b && d[2] == c
		})
	},
		De = function () {
		return k[jb] ?
		function (a, b, c) {
			var d = ++Be + "";
			Ae[d] = [a, b, c];
			a[jb](b, c, i);
			return d
		} : k[ob] ?
		function (a, b, c) {
			var d = ++Be + "";
			Ae[d] = [a, b, c];
			var e = function () {
				return c[Rb](a, k[pc])
			};
			if (!a.g) a.g = {};
			a.g[b] || (a.g[b] = {});
			a.g[b][c] = e;
			a[ob]("on" + b, e);
			return d
		} : function () {
			return ""
		}
	}(),
		Ee = function () {
		return k[Ib] ?
		function (a, b, c) {
			a[Ib](b, c, i);
			(a = Ce(a, b, c)) && delete Ae[a]
		} : k[Xb] ?
		function (a, b, c) {
			a.g && a.g[b] && a.g[b][c] && a[Xb]("on" + b, a.g[b][c]);
			(a = Ce(a, b, c)) && delete Ae[a]
		} : function () {}
	}(),
		Fe = function () {
		return k[Ib] ?
		function (a) {
			if (a in Ae) {
				var b = Ae[a];
				b[0][Ib](b[1], b[2], i);
				delete Ae[a]
			}
		} : k[Xb] ?
		function (a) {
			if (a in Ae) {
				var b = Ae[a],
					c = b[0],
					d = b[1];
				b = b[2];
				c.g && c.g[d] && c.g[d][b] && c[Xb]("on" + d, c.g[d][b]);
				delete Ae[a]
			}
		} : function () {}
	}(),
		Ge = function () {
		for (var a in Ae) Fe(a)
	},
		He = function (a) {
		a = a || k[pc];
		a = a[Qb] || a.srcElement;
		if (a[Ma] == 3) a = a[H];
		return a
	};
	var Ie, Ke = function (a, b, c) {
		this.N = a;
		if (Je) this.ta = b;
		this.Lb = c || k;
		this.$ = this.Lb[D];
		this.Vc = this.$[bc][C]("#")[0];
		this.Va = zc(this.be, this)
	},
		Le = Kd && l.documentMode >= 8 || Ld && Wd("1.9.2") || Md && Wd("532.1"),
		Je = Kd && !Le;
	I = Ke[B];
	I.Md = function (a, b) {
		if (this.xa) {
			Fe(this.xa);
			delete this.xa
		}
		if (this.va) {
			Mc(this.va);
			delete this.va
		}
		if (a) {
			this.m = this.qa();
			if (Je) {
				a = this.ta[sb][Hb][G];
				if (!a || !a[u]) this.Ha(this.m)
			}
			b || this.N(this.m);
			if (Le) this.xa = De(this.Lb, "hashchange", this.Va);
			else this.va = Kc(this.Va, 200)
		}
	};
	I.wd = function () {
		if (Je) {
			var a = this.od();
			if (a != this.m) {
				this.m = a;
				this.Cb(a);
				this.N(a)
			} else {
				a = this.qa();
				if (a != this.m) {
					this.m = a;
					this.Ha(a);
					this.N(a)
				}
			}
		} else {
			a = this.qa();
			if (a != this.m) {
				this.m = a;
				this.N(a)
			}
		}
	};
	I.be = function () {
		this.wd()
	};
	I.qa = function () {
		var a = this.$[bc],
			b = a[x]("#");
		return b < 0 ? "" : a[cc](b + 1)
	};
	I.Cb = function (a) {
		a = this.Vc + "#" + a;
		var b = this.$[bc];
		if (! (b == a || b + "#" == a)) ya(this.$, a)
	};
	I.od = function () {
		var a = this.ta[sb][Hb][G];
		return a ? ka(a[u][cc](1)[t](/\+/g, " ")) : ""
	};
	I.Ha = function (a, b) {
		var c = this.ta[sb][Hb],
			d = c[G] ? c[G][u] : "";
		a = "#" + od(a);
		if (d != a) {
			b = ["<title>", ud(b || k[Hb][Db] || ""), "</title><body>", a, "</body>"];
			c[Ea]("text/html");
			c[Za](b[mc](""));
			c[Ob]()
		}
	};
	I.add = function (a, b, c) {
		this.m = ia(a);
		Je && this.Ha(a, b);
		this.Cb(a);
		c || this.N(this.m)
	};
	var Me = function () {
		this.l = [];
		this.r = {}
	};
	Bc(Me, function () {});
	I = Me[B];
	I.pb = 1;
	I.ca = 0;
	I.Eb = function (a, b, c) {
		var d = this.r[a];
		d || (d = this.r[a] = []);
		var e = this.pb;
		this.l[e] = a;
		this.l[e + 1] = b;
		this.l[e + 2] = c;
		this.pb = e + 3;
		d[s](e);
		return e
	};
	I.ee = function (a, b, c) {
		if (a = this.r[a]) {
			var d = this.l;
			if (a = $c(a, function (e) {
				return d[e + 1] == b && d[e + 2] == c
			})) return this.Na(a)
		}
		return i
	};
	I.Na = function (a) {
		if (this.ca != 0) {
			if (!this.ba) this.ba = [];
			this.ba[s](a);
			return i
		}
		var b = this.l[a];
		if (b) {
			var c = this.r[b];
			c && ad(c, a);
			delete this.l[a];
			delete this.l[a + 1];
			delete this.l[a + 2]
		}
		return !!b
	};
	I.vb = function (a) {
		var b = this.r[a];
		if (b) {
			this.ca++;
			for (var c = cd(arguments, 1), d = 0, e = b[A]; d < e; d++) {
				var h = b[d];
				this.l[h + 1][fc](this.l[h + 2], c)
			}
			this.ca--;
			if (this.ba && this.ca == 0) for (; b = this.ba.pop();) this.Na(b);
			return d != 0
		}
		return i
	};
	sa(I, function (a) {
		if (a) {
			var b = this.r[a];
			if (b) {
				Yc(b, this.Na, this);
				delete this.r[a]
			}
		} else {
			this.l.length = 0;
			this.r = {}
		}
	});
	var Ne = rc("yt.pubsub.instance_") || new Me;
	Me[B].subscribe = Me[B].Eb;
	Me[B].unsubscribe = Me[B].ee;
	Me[B].publish = Me[B].vb;
	sa(Me[B], Me[B].clear);
	J("yt.pubsub.instance_", Ne, void 0);
	var Oe = function () {
		var a = rc("yt.pubsub.instance_");
		a && a.subscribe[fc](a, arguments)
	},
		Pe = function () {
		var a = rc("yt.pubsub.instance_");
		a && a.publish[fc](a, arguments)
	},
		Qe = function () {
		var a = rc("yt.pubsub.instance_");
		a && a.clear[fc](a, arguments)
	};
	var Se = function (a) {
		var b = Re();
		b.setEnabled[Rb](b, f, a)
	},
		Te = function () {
		var a = Re();
		a.setEnabled[Rb](a, i)
	},
		Re = function () {
		var a = rc("yt.history.instance_");
		if (!a) {
			a = S("legacy-history-iframe");
			Ie = a = new Ke(Ue, a);
			Ke[B].setEnabled = Ke[B].Md;
			Ke[B].add = Ke[B].add;
			J("yt.history.instance_", Ie, void 0)
		}
		return a
	},
		Ue = function (a) {
		Pe("navigate", a)
	};
	var Xe = function (a) {
		for (var b = [], c = Ve, d = a.elements, e, h = 0; e = d[h]; h++) if (! (e.disabled || e[gc][nc]() == "fieldset")) {
			var j = e[qb];
			switch (e[mb][nc]()) {
			case "file":
			case "submit":
			case "reset":
			case "button":
				break;
			case "select-multiple":
				e = We(e);
				if (e != g) for (var r, w = 0; r = e[w]; w++) c(b, j, r);
				break;
			default:
				r = We(e);
				r != g && c(b, j, r)
			}
		}
		d = a[ub]("input");
		for (h = 0; e = d[h]; h++) if (e.form == a && e[mb][nc]() == "image") {
			j = e[qb];
			c(b, j, e[v]);
			c(b, j + ".x", "0");
			c(b, j + ".y", "0")
		}
		return b[mc]("&")
	},
		Ve = function (a, b, c) {
		a[s](ba(b) + "=" + ba(c))
	},
		We = function (a) {
		var b = a[mb];
		if (b === fa) return g;
		switch (b[nc]()) {
		case "checkbox":
		case "radio":
			return a[Gb] ? a[v] : g;
		case "select-one":
			b = a.selectedIndex;
			return b >= 0 ? a[Tb][b][v] : g;
		case "select-multiple":
			b = [];
			for (var c, d = 0; c = a[Tb][d]; d++) c.selected && b[s](c[v]);
			return b[A] ? b : g;
		default:
			return a[v] !== fa ? a[v] : g
		}
	};
	var Ye = /<[^>]*>|&[^;]+;/g,
		Ze = new RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]"),
		$e = function (a, b) {
		return Ze[Fa](b ? a[t](Ye, " ") : a)
	};
	/*
 Portions of this code are from the MooTools project, received by
 YouTube under the MIT License. All other code is Copyright 2009 YouTube LLC.
 All Rights Reserved.
 
 Prototype JavaScript framework, version 1.4
 (c) 2005 Sam Stephenson <sam@conio.net>
 Prototype is freely distributable under the terms of an MIT-style license.
 For details, see the Prototype web site: http://prototype.conio.net/
 
 (c) 2006 Valerio Proietti (http://mad4milk.net). MIT-style license.
 
 Author: Robert Penner, <http://www.robertpenner.com/easing/>, modified to be used with mootools.
 License: Easing Equations v1.5, (c) 2003 Robert Penner, all rights reserved. Open Source BSD License.
 
*/
	var af = function () {
		return function () {
			this.nb[fc](this, arguments)
		}
	},
		bf = function (a, b) {
		for (var c in b) a[c] = b[c];
		return a
	},
		cf = function (a, b) {
		return function () {
			return a[fc](b, arguments)
		}
	},
		df = function () {};
	va(df, {
		Ab: function (a) {
			this.options = bf({
				onStart: function () {},
				onComplete: function () {},
				transition: function (b, c, d, e) {
					return d * (b /= e) * b + c
				},
				transitionOut: function (b, c, d, e) {
					return -d * (b /= e) * (b - 2) + c
				},
				duration: 333,
				unit: "px",
				wait: f,
				dontUseVisibility: i,
				fps: 50
			}, a || {})
		},
		Wd: function () {
			var a = (new Date)[tb]();
			if (a < this.Fb + this[Tb][Kb]) {
				this.Wa = a - this.Fb;
				this.Nd()
			} else {
				M(cf(this[Tb].onComplete, this, this[hc]), 10);
				this.la();
				this.now = this.Gb
			}
			this.ua()
		},
		Nd: function () {
			this.now = this.bd(this.kd, this.Gb)
		},
		bd: function (a, b) {
			b = b - a;
			return b < 0 ? this[Tb].transition(this.Wa, a, b, this[Tb][Kb]) : this[Tb].transitionOut(this.Wa, a, b, this[Tb][Kb])
		},
		la: function () {
			Mc(this.Ma);
			this.Ma = g;
			return this
		},
		Rc: function (a, b) {
			this[Tb].wait || this.la();
			if (!this.Ma) {
				M(cf(this[Tb].onStart, this, this[hc]), 10);
				this.kd = a;
				this.Gb = b;
				this.Fb = (new Date)[tb]();
				this.Ma = Kc(cf(this.Wd, this), m[Ka](1E3 / this[Tb].fps));
				return this
			}
		},
		W: function (a, b) {
			return this.Rc(a, b)
		},
		k: function (a) {
			this.now = a;
			this.ua();
			return this
		},
		show: function () {
			return this.k(1)
		},
		ra: function () {
			return this.k(0)
		},
		Bb: function (a, b, c) {
			if (b == "opacity") {
				if (!this[Tb].dontUseVisibility) if (c == 0) ta(a[F], "hidden");
				else if (a[F][xb] != "visible") ta(a[F], "visible");
				if (k.ActiveXObject) a[F].filter = "alpha(opacity=" + c * 100 + ")";
				a[F].opacity = c
			} else a[F][b] = c + this[Tb].unit
		}
	});
	var ef = af();
	va(ef, bf(new df, {
		nb: function (a, b, c) {
			this.element = S(a);
			this.Ab(c);
			this.dd = b
		},
		ua: function () {
			this.Bb(this[hc], this.dd, this.now)
		}
	}));
	var ff = af();
	va(ff, bf(new df, {
		nb: function (a, b) {
			this.element = S(a);
			this.Ab(b);
			this.now = 1
		},
		ce: function () {
			return this.now > 0 ? this.W(1, 0) : this.W(0, 1)
		},
		ra: function () {
			return this.k(0)
		},
		ua: function () {
			this.Bb(this[hc], "opacity", this.now)
		}
	}));
	var gf = {},
		hf = function (a, b, c, d) {
		if (a = gf[a]) a._trackEvent(b, c || fa, d || fa)
	};
	var jf = function (a, b) {
		a = S(a);
		b = S(b);
		return !!de(a, function (c) {
			return c === b
		}, f)
	},
		kf = function (a, b, c) {
		a = T(a, b, c);
		return a[A] ? a[0] : g
	};
	var mf = function () {
		return lf && lf()
	},
		lf = g;
	(function () {
		if (typeof XMLHttpRequest != "undefined") lf = function () {
			return new XMLHttpRequest
		};
		else if (typeof ActiveXObject != "undefined") lf = function () {
			return new ActiveXObject("Microsoft.XMLHTTP")
		}
	})();
	var nf = function (a, b, c, d, e) {
		var h = new mf;
		if ("open" in h) {
			h.onreadystatechange = function () {
				(h && "readyState" in h ? h.readyState : 0) == 4 && b && b(h)
			};
			c = c || "GET";
			d = d || "";
			h[Ea](c, a, f);
			c == "POST" && h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			if (e) for (var j in e) h.setRequestHeader(j, e[j]);
			h.send(d)
		}
	},
		of = function (a, b, c) {
		var d = a[ec] || l[D][bc],
			e = a.method.toUpperCase() || "GET";
		a = Xe(a);
		nf(d, b, e, a, c)
	},
		pf = function (a) {
		k.console && k.console.warn && k.console.warn(a)
	},
		U = function (a, b) {
		var c = b.onComplete || g,
			d = b.onException || g,
			e = b.onError || g,
			h = b.update || g,
			j = b.json || i;
		nf(a, function (r) {
			var w;
			a: switch (r && "status" in r ? r.status : -1) {
			case 0:
			case 200:
			case 204:
			case 304:
				w = f;
				break a;
			default:
				w = i;
				break a
			}
			if (w) {
				var E = r[Wb];
				w = E ? qf(E) : g;
				E = !!(E && w);
				var L, P;
				if (E) {
					L = rf(w, "return_code");
					P = rf(w, "html_content");
					if (L == 0) {
						if (h && P) n(S(h), P);
						var la = rf(w, "css_content"),
							Bb = rf(w, "js_content");
						if (la) {
							var db = l[y]("style");
							db[z]("type", "text/css");
							if (db.styleSheet) db.styleSheet.cssText = la;
							else db[q](l[Ua](la));
							l[ub]("head")[0][q](db)
						}
						if (Bb) {
							la = l[y]("script");
							qa(la, Bb);
							l[ub]("head")[0][q](la)
						}
					}
				}
				if (c) if (E) {
					E = rf(w, "redirect_on_success");
					if (L && E) k.location = E;
					else {
						(w = rf(w, L == 0 ? "success_message" : "error_message")) && da(w);
						r = j ? eval("(" + P + ")") : r;
						if (L == 0) c(r);
						else if (d) d(r);
						else w || pf("Non-zero (" + L + ") return code from AJAX request: " + a)
					}
				} else r[Pa] ? c(r) : pf("No xmlResponse or xhr.responseText from AJAX request: " + a)
			} else e && e(r)
		}, b.method || "POST", b.postBody || g, b.headers || g)
	},
		qf = function (a) {
		if (!a) return g;
		return (a = ("responseXML" in a ? a[Wb] : a)[ub]("root")) && a[A] > 0 ? a[0] : g
	},
		rf = function (a, b) {
		if (!a) return g;
		return (a = a[ub](b)) && a[A] > 0 && a[0][gb] ? a[0][gb].nodeValue : g
	},
		sf = {};
	J("yt.net.ajax.setToken", function (a, b) {
		sf[a] = b
	}, void 0);
	var tf = {},
		uf = {},
		vf = function (a) {
		var b = i;
		if (a in tf && !uf[a]) {
			Yc(tf[a], function (c) {
				var d = c[0];
				c = c[1];
				if (d && d[gc] == "IMG") {
					d.onload = "";
					d.src = c;
					b = f
				} else b = i
			});
			uf[a] = f
		}
		return b
	};
	var wf = function () {
		var a = we(this.Za);
		a && this.Hd(a)
	};
	sc(wf);
	var xf = rc("yt.prefs.UserPrefs.prefs_") || {};
	J("yt.prefs.UserPrefs.prefs_", xf, void 0);
	I = wf[B];
	I.Za = "PREF";
	I.Zd = function (a) {
		if (a == g) throw "ExpectedNotNull";
	};
	I.$d = function (a, b) {
		if (b[Fa](a)) throw "ExpectedRegexMatch: " + a;
	};
	I.ae = function (a, b) {
		if (!b[Fa](a)) throw "ExpectedRegexMismatch: " + a;
	};
	I.Ka = function (a) {
		this.ae(a, /^\w+$/);
		this.$d(a, /^f([1-9][0-9]*)$/)
	};
	I.Ja = function (a, b) {
		xf[a] = b[Ab]()
	};
	I.gb = function (a) {
		a = this.hb(a);
		return a != g && /^[A-Fa-f0-9]+$/ [Fa](a) ? ga(a, 16) : g
	};
	I.hb = function (a) {
		return xf[a] !== fa ? xf[a][Ab]() : g
	};
	I.Ga = function (a, b, c) {
		var d = this.gb(a);
		d = d != g ? d : 0;
		b = c ? d | b : d & ~b;
		b == 0 ? this.ab(a) : this.Ja(a, b[Ab](16))
	};
	I.cb = function (a, b) {
		a = this.gb(a);
		a = a != g ? a : 0;
		return (a & b) > 0
	};
	I.ab = function (a) {
		delete xf[a]
	};
	I.Hd = function (a) {
		a = aa(a)[C]("&");
		for (var b = 0; b < a[A]; b++) {
			var c = a[b][C]("="),
				d = c[0];
			(c = c[1]) && this.Ja(d, c)
		}
	};
	I.M = function (a, b) {
		this.Ka(a);
		a = this.hb(a);
		return a != g ? a : b ? b : ""
	};
	I.k = function (a, b) {
		this.Ka(a);
		this.Zd(b);
		this.Ja(a, b)
	};
	I.C = function (a) {
		return this.cb("f1", a)
	};
	I.O = function (a, b) {
		this.Ga("f1", a, b)
	};
	I.D = function (a) {
		return this.cb("f2", a)
	};
	I.H = function (a, b) {
		this.Ga("f2", a, b)
	};
	I.yb = function (a, b) {
		this.Ga("f3", a, b)
	};
	I.remove = function (a) {
		this.Ka(a);
		this.ab(a)
	};
	I.save = function (a) {
		a = (a || 7) * 24 * 60 * 60;
		ve(this.Za, this.bb(), a)
	};
	sa(I, function () {
		xf = {}
	});
	I.bb = function () {
		var a = [];
		for (var b in xf) a[s](b + "=" + escape(xf[b]));
		return a[mc]("&")
	};
	var yf = wf.c();
	yf.set = yf.k;
	yf.get = yf.M;
	yf.setFlag = yf.O;
	yf.getFlag = yf.C;
	yf.setFlag2 = yf.H;
	yf.getFlag2 = yf.D;
	yf.remove = yf.remove;
	yf.save = yf[Nb];
	sa(yf, yf.clear);
	yf.dump = yf.bb;
	var V = {};
	V.Dc = 1;
	V.FLAG_SAFE_SEARCH = V.Dc;
	V.rc = 2;
	V.FLAG_GRID_VIEW_SEARCH_RESULTS = V.rc;
	V.U = 4;
	V.FLAG_EMBED_NO_RELATED_VIDEOS = V.U;
	V.I = 8;
	V.FLAG_EMBED_SHOW_BORDER = V.I;
	V.sc = 16;
	V.FLAG_GRID_VIEW_VIDEOS_AND_CHANNELS = V.sc;
	V.Oc = 32;
	V.FLAG_WATCH_EXPAND_ABOUT_PANEL = V.Oc;
	V.Qc = 64;
	V.FLAG_WATCH_EXPAND_MOREFROM_PANEL = V.Qc;
	V.Nc = 128;
	V.FLAG_WATCH_COLLAPSE_RELATED_PANEL = V.Nc;
	V.Lc = 256;
	V.FLAG_WATCH_COLLAPSE_PLAYLIST_PANEL = V.Lc;
	V.Mc = 512;
	V.FLAG_WATCH_COLLAPSE_QUICKLIST_PANEL = V.Mc;
	V.Pc = 1024;
	V.FLAG_WATCH_EXPAND_ALSOWATCHING_PANEL = V.Pc;
	V.Sa = 2048;
	V.FLAG_WATCH_COLLAPSE_COMMENTS_PANEL = V.Sa;
	V.Ic = 4096;
	V.FLAG_STATMODULES_INBOX_COLLAPSED = V.Ic;
	V.Hc = 8192;
	V.FLAG_STATMODULES_ABOUTYOU_COLLAPSED = V.Hc;
	V.Gc = 16384;
	V.FLAG_STATMODULES_ABOUTVIDEOS_COLLAPSED = V.Gc;
	V.Ra = 32768;
	V.FLAG_HIDE_WATCH_AUTOSHARE_PROMOTION = V.Ra;
	V.yc = 65536;
	V.FLAG_PERSONALIZED_HOMEPAGE_FEED_FEATURED_COLLAPSED = V.yc;
	V.Bc = 131072;
	V.FLAG_PERSONALIZED_HOMEPAGE_FEED_RECOMMENDED_COLLAPSED = V.Bc;
	V.Cc = 262144;
	V.FLAG_PERSONALIZED_HOMEPAGE_FEED_SUBSCRIPTIONS_COLLAPSED = V.Cc;
	V.Ac = 524288;
	V.FLAG_PERSONALIZED_HOMEPAGE_FEED_POPULAR_COLLAPSED = V.Ac;
	V.zc = 1048576;
	V.FLAG_PERSONALIZED_HOMEPAGE_FEED_FRIENDTIVITY_COLLAPSED = V.zc;
	V.Jc = 2097152;
	V.FLAG_SUGGEST_ENABLED = V.Jc;
	V.vc = 4194304;
	V.FLAG_HAS_SUGGEST_ENABLED = V.vc;
	V.Kc = 8388608;
	V.FLAG_WATCH_BETA_PLAYER = V.Kc;
	V.uc = 16777216;
	V.FLAG_HAS_REDIRECTED_TO_LOCAL_SITE = V.uc;
	V.qc = 33554432;
	V.FLAG_ACCOUNT_SHOW_PLAYLIST_INFO = V.qc;
	V.wc = 67108864;
	V.FLAG_HAS_TAKEN_CHANNEL_SURVEY = V.wc;
	V.xc = 134217728;
	V.FLAG_HIDE_TOOLBAR = V.xc;
	V.Fc = 268435456;
	V.FLAG_SHOWN_LANG_OPT_OUT = V.Fc;
	V.tc = 536870912;
	V.FLAG_HAS_REDIRECTED_TO_LOCAL_LANG = V.tc;
	V.Ec = 1073741824;
	V.FLAG_SHOWN_COUNTRY_OPT_OUT = V.Ec;
	V.hc = 1;
	V.FLAG2_UPLOAD_BETA_OPTSET = V.hc;
	V.gc = 2;
	V.FLAG2_UPLOAD_BETA_OPTIN = V.gc;
	V.Oa = 4;
	V.FLAG2_HIDE_MASTHEAD = V.Oa;
	V.ec = 8;
	V.FLAG2_TV_PARITY = V.ec;
	V.bc = 16;
	V.FLAG2_TV_AUTO_FULLSCREEN_OFF = V.bc;
	V.cc = 32;
	V.FLAG2_TV_AUTO_PLAY_NEXT_OFF = V.cc;
	V.dc = 64;
	V.FLAG2_TV_ENABLE_MULTIPLE_CONTROLLERS = V.dc;
	V.fc = 128;
	V.FLAG2_TV_RESERVED = V.fc;
	V.Ub = 256;
	V.FLAG2_LIGHT_HOMEPAGE = V.Ub;
	V.Yb = 512;
	V.FLAG2_REDLINE_HIDE_TOAST = V.Yb;
	V.Ob = 1024;
	V.FLAG2_ANNOTATIONS_EDITOR_WATCH_PAGE_DEFAULT_OFF = V.Ob;
	V.Xb = 2048;
	V.FLAG2_REDLINE_HIDE_START_MESSAGE = V.Xb;
	V.Pb = 4096;
	V.FLAG2_ANNOTATIONS_LOAD_POLICY_BY_DEMAND = V.Pb;
	V.T = 8192;
	V.FLAG2_EMBED_DELAYED_COOKIES = V.T;
	V.Rb = 16384;
	V.FLAG2_HD_TIP_DEMOTE = V.Rb;
	V.Wb = 32768;
	V.FLAG2_NEWS_TIP_DEMOTE = V.Wb;
	V.ic = 65536;
	V.FLAG2_UPLOAD_RESTRICT_TIP_DEMOTE = V.ic;
	V.jc = 131072;
	V.FLAG2_YPP_HIDE_INVITE_SPAM_BOX = V.jc;
	V.kc = 262144;
	V.FLAG2_YPP_HIDE_NEEDS_ADSENSE_BOX = V.kc;
	V.lc = 524288;
	V.FLAG2_YPP_HIDE_NEEDS_TRAINING_BOX = V.lc;
	V.ac = 1048576;
	V.FLAG2_SKIP_CONTRINTER = V.ac;
	V.S = 2097152;
	V.FLAG2_EMBED_DEFAULT_HD = V.S;
	V.Qb = 4194304;
	V.FLAG2_ENABLE_FILTER_WORDS = V.Qb;
	V.Qa = 8388608;
	V.FLAG2_OPTED_IN_FOR_COMMENTS = V.Qa;
	V.Pa = 16777216;
	V.FLAG2_HQ_SETTING_SAVED = V.Pa;
	V.ga = 33554432;
	V.FLAG2_HAS_TAKEN_WATCH_PAGE_SURVEY = V.ga;
	V.$b = 67108864;
	V.FLAG2_SERVE_MOBILE_HQ_VIDEO = V.$b;
	V.Zb = 134217728;
	V.FLAG2_SAFETY_CONTENT_MODE = V.Zb;
	V.Sb = 268435456;
	V.FLAG2_HIDE_PROMO_ACTIVITY_SUBSCRIPTIONS = V.Sb;
	V.Vb = 536870912;
	V.FLAG2_MOBILE_APP_OPTOUT = V.Vb;
	V.Tb = 1073741824;
	V.FLAG2_HTML5_BETA = V.Tb;
	V.oc = 1;
	V.FLAG3_LITE_WATCH = V.oc;
	V.ha = 2;
	V.FLAG3_ANNOTATIONS_EDITOR_WATCH_PAGE_DEFAULT_ON = V.ha;
	V.pc = 4;
	V.FLAG3_WATCH5_OPTIN = V.pc;
	V.nc = 8;
	V.FLAG3_CAPTIONS_DEFAULT_OFF = V.nc;
	V.mc = 16;
	V.FLAG3_AUTO_CAPTIONS_DEFAULT_ON = V.mc;
	var zf = function (a, b, c, d) {
		this.top = a;
		this.right = b;
		this.bottom = c;
		ra(this, d)
	};
	zf[B].V = function () {
		return new zf(this.top, this[oc], this[ac], this[Ya])
	};
	ua(zf[B], function () {
		return "(" + this.top + "t, " + this[oc] + "r, " + this[ac] + "b, " + this[Ya] + "l)"
	});
	zf[B].expand = function (a, b, c, d) {
		var e = tc(a);
		if (e == "object" || e == "array" || e == "function") {
			this.top -= a.top;
			this.right += a[oc];
			this.bottom += a[ac];
			this.left -= a[Ya]
		} else {
			this.top -= a;
			this.right += b;
			this.bottom += c;
			this.left -= d
		}
		return this
	};
	var Af = function (a, b, c, d) {
		ra(this, a);
		this.top = b;
		pa(this, c);
		Aa(this, d)
	};
	Af[B].V = function () {
		return new Af(this[Ya], this.top, this[Ja], this[jc])
	};
	ua(Af[B], function () {
		return "(" + this[Ya] + ", " + this.top + " - " + this[Ja] + "w x " + this[jc] + "h)"
	});
	Af[B].Bd = function (a) {
		var b = m.max(this[Ya], a[Ya]),
			c = m.min(this[Ya] + this[Ja], a[Ya] + a[Ja]);
		if (b <= c) {
			var d = m.max(this.top, a.top);
			a = m.min(this.top + this[jc], a.top + a[jc]);
			if (d <= a) {
				ra(this, b);
				this.top = d;
				pa(this, c - b);
				Aa(this, a - d);
				return f
			}
		}
		return i
	};
	var Bf = function (a, b) {
		var c = Yd(a);
		if (c[pb] && c[pb].getComputedStyle) if (a = c[pb].getComputedStyle(a, "")) return a[b];
		return g
	},
		Cf = function (a, b) {
		return Bf(a, b) || (a.currentStyle ? a.currentStyle[b] : g) || a[F][b]
	},
		Df = function (a) {
		var b = a[Da]();
		if (Kd) {
			a = a.ownerDocument;
			b.left -= a[vb][ib] + a[G][ib];
			b.top -= a[vb][kb] + a[G][kb]
		}
		return b
	},
		Ef = function (a) {
		if (Kd) return a[Jb];
		var b = Yd(a),
			c = Cf(a, "position"),
			d = c == "fixed" || c == "absolute";
		for (a = a[H]; a && a != b; a = a[H]) {
			c = Cf(a, "position");
			d = d && c == "static" && a != b[vb] && a != b[G];
			if (!d && (a.scrollWidth > a[Fb] || a[eb] > a[Yb] || c == "fixed" || c == "absolute")) return a
		}
		return g
	},
		Ff = function (a) {
		var b, c = Yd(a),
			d = Cf(a, "position"),
			e = Ld && c[ab] && !a[Da] && d == "absolute" && (b = c[ab](a)) && (b.screenX < 0 || b.screenY < 0),
			h = new id(0, 0),
			j;
		b = c ? c[Ma] == 9 ? c : Yd(c) : l;
		j = Kd && !Zd(b).ob() ? b[G] : b[vb];
		if (a == j) return h;
		if (a[Da]) {
			b = Df(a);
			a = Zd(c).oa();
			h.x = b[Ya] + a.x;
			h.y = b.top + a.y
		} else if (c[ab] && !e) {
			b = c[ab](a);
			a = c[ab](j);
			h.x = b.screenX - a.screenX;
			h.y = b.screenY - a.screenY
		} else {
			b = a;
			do {
				h.x += b.offsetLeft;
				h.y += b[ic];
				if (b != a) {
					h.x += b[ib] || 0;
					h.y += b[kb] || 0
				}
				if (Md && Cf(b, "position") == "fixed") {
					h.x += c[G][Zb];
					h.y += c[G][zb];
					break
				}
				b = b[Jb]
			} while (b && b != a);
			if (Jd || Md && d == "absolute") h.y -= c[G][ic];
			for (b = a;
			(b = Ef(b)) && b != c[G] && b != j;) {
				h.x -= b[Zb];
				if (!Jd || b[gc] != "TR") h.y -= b[zb]
			}
		}
		return h
	},
		Gf = function (a) {
		var b = new id;
		if (a[Ma] == 1) if (a[Da]) {
			var c = Df(a);
			b.x = c[Ya];
			b.y = c.top
		} else {
			c = Zd(a).oa();
			a = Ff(a);
			b.x = a.x - c.x;
			b.y = a.y - c.y
		} else {
			b.x = a.clientX;
			b.y = a.clientY
		}
		return b
	},
		If = function (a, b, c) {
		if (b instanceof kd) {
			c = b[jc];
			b = b[Ja]
		} else {
			if (c == fa) throw Error("missing height argument");
			c = c
		}
		pa(a[F], typeof b == "number" ? m[Ka](b) + "px" : b);
		Aa(a[F], typeof c == "number" ? m[Ka](c) + "px" : c)
	},
		Jf = function (a) {
		var b = Jd && !Wd("10");
		if (Cf(a, "display") != "none") return b ? new kd(a[Ra] || a[Fb], a[lc] || a[Yb]) : new kd(a[Ra], a[lc]);
		var c = a[F],
			d = c.display,
			e = c[xb],
			h = c.position;
		ta(c, "hidden");
		c.position = "absolute";
		za(c, "inline");
		if (b) {
			b = a[Ra] || a[Fb];
			a = a[lc] || a[Yb]
		} else {
			b = a[Ra];
			a = a[lc]
		}
		za(c, d);
		c.position = h;
		ta(c, e);
		return new kd(b, a)
	};
	var Kf = function (a, b) {
		if ((a = S(a)) && a[F]) {
			za(a[F], b ? "" : "none");
			gd(a, "hid", !b)
		}
	},
		Lf = function (a) {
		a = S(a);
		if (!a) return i;
		return ! (a[F].display == "none" || R(a, "hid"))
	},
		Mf = function (a) {
		if (a = S(a)) if (Lf(a)) {
			za(a[F], "none");
			O(a, "hid")
		} else {
			za(a[F], "");
			Q(a, "hid")
		}
	},
		Nf = function (a, b) {
		if (a = S(a)) ta(a[F], b ? "visible" : "hidden")
	},
		Of = function (a) {
		a = S(a);
		if (!a) return g;
		var b = 0,
			c = 0;
		if (a[Jb]) {
			do {
				b += a.offsetLeft;
				c += a[ic]
			} while (a = a[Jb])
		}
		return new id(b, c)
	},
		W = function () {
		Yc(arguments, function (a) {
			Kf(a, f)
		})
	},
		X = function () {
		Yc(arguments, function (a) {
			Kf(a, i)
		})
	},
		Pf = function () {
		Yc(arguments, Mf)
	};
	var Qf = {},
		Rf = 0,
		Sf = function (a) {
		var b = new Image,
			c = "" + Rf++;
		Qf[c] = b;
		b.onload = b.onerror = function () {
			delete Qf[c]
		};
		b.src = a;
		b = eval("null")
	};
	var Tf = function (a, b) {
		var c = "a=" + a + (b ? "&" + b : "")[t](/\//g, "&");
		Sf("/gen_204?" + c);
		hf(a, b || "null")
	};
	if (k.yt.timing) {
		var Y = k.yt.timing;
		Y.La = k.yt.timing.tick;
		Y.Dd = 0;
		Y.qb = 0;
		Y.xb = function (a, b) {
			a = a || "load";
			var c = Y.timers[a],
				d = c.start,
				e = "",
				h = [],
				j = "",
				r = "",
				w = "";
			delete c.start;
			if (Y.pt) e = "&srt=" + Y.pt;
			for (var E in c) h[s](E + "." + m[Ka](c[E] - d));
			c.aft && c.gv && h[s]("vl." + m[Ka](c.aft - c.gv));
			if (Y.experiment) r = "&e=" + Y.experiment;
			if (k.yt.timing.addomain) {
				w = k.yt.timing.addomain;
				w = w[C](".");
				if (w[A] > 1) w = "&ad=" + w[0]
			}
			Y.timers[a] = {};
			if (Y.fmt) j += "&fmt=" + Y.fmt;
			if (Y.asv) j += "&asv=" + Y.asv;
			if (Y.plid) j += "&plid=" + Y.plid;
			if (Y.sprot) j += "&sprot=" + Y.sprot;
			if (Y.cookieName) j += "&vid=" + we(Y.cookieName);
			if (b) for (var L in b) j += "&" + L + "=" + b[L];
			Sf(["http://csi.gstatic.com/csi?v=2&s=youtube&action=", a, e, j, "&rt=", h[mc](","), r, w][mc](""))
		};
		Y.ya = function () {
			var a = Y.defaultAction,
				b = Y.timers[a];
			if (b.ol && (!Y.wff || b.aft)) Y.xb(a)
		};
		Y.lb = function () {
			Y.La("ol");
			Y.ya()
		};
		Y.vd = function (a) {
			var b = ++Y.Dd;
			typeof a != "undefined" && a < 4 && Y.qb++;
			Y.qb == 4 && Y.La("tn_c4");
			b != 1 && b != 5 && b != 10 && b != 20 && b != 30 || Y.La("tn" + b)
		}
	};
	var Uf = {},
		Vf = function (a) {
		a = a.c();
		var b = a.b();
		if (! (b in Uf)) {
			a.G();
			Uf[b] = a
		}
	};
	var Wf = function (a, b, c) {
		if (a[Sa]) a[Sa][b] = c;
		else a[z]("data-" + b, c)
	},
		Z = function (a, b) {
		return a[Sa] ? a[Sa][b] : a[Vb]("data-" + b)
	};
	var Xf = {},
		Yf = function (a) {
		var b = He(a);
		if (b[gc] != "HTML") {
			a = (a || k[pc])[mb];
			if (a in Xf) for (var c in Xf[a]) {
				var d = ee(b, g, c);
				d && Xf[a][c].vb("dummy_topic", d, a)
			}
		}
	};
	De(l, "click", Yf);
	De(l, "mouseover", Yf);
	De(l, "mouseout", Yf);
	var Zf = function () {
		this.s = {}
	};
	I = Zf[B];
	I.Cd = !!eval("/*@cc_on!@*/false");
	I.h = function (a, b, c) {
		c = this.b(c);
		var d = zc(b, this);
		a in Xf || (Xf[a] = {});
		c in Xf[a] || (Xf[a][c] = new Me);
		Xf[a][c].Eb("dummy_topic", d);
		this.s[b] = d
	};
	I.getData = function (a, b) {
		return Z(a, b)
	};
	I.setData = function (a, b, c) {
		Wf(a, b, c)
	};
	I.n = function (a) {
		return ee(a, g, this.b())
	};
	I.b = function (a) {
		return this.ld() + (a ? "-" + a : "")
	};
	I.ld = function () {
		return "yt-uix" + (this.w ? "-" + this.w : "")
	};
	var $f = function () {
		this.s = {}
	};
	Bc($f, Zf);
	sc($f);
	I = $f[B];
	I.w = "expander";
	I.G = function () {
		this.h("click", this.J, "head")
	};
	I.J = function (a) {
		if (a = this.n(a)) {
			hd(a, this.b("collapsed"));
			var b = this[Va](a, "expander-action");
			if (b)(b = rc(b)) && b[Rb](g, a)
		}
	};
	I.collapse = function (a) {
		if (a = this.n(a)) {
			O(a, this.b("collapsed"));
			var b = this[Va](a, "expander-action");
			if (b)(b = rc(b)) && b[Rb](g, a)
		}
	};
	I.expand = function (a) {
		if (a = this.n(a)) {
			Q(a, this.b("collapsed"));
			var b = this[Va](a, "expander-action");
			if (b)(b = rc(b)) && b[Rb](g, a)
		}
	};
	var ag = function (a, b, c) {
		c = c || "";
		k.location = ne(a, b || {}) + c
	},
		bg = function (a, b) {
		b = b || {};
		b.target = b[Qb] || a[Qb] || "YouTube";
		pa(b, b[Ja] || 600);
		Aa(b, b[jc] || 600);
		var c = b;
		c || (c = {});
		var d = k;
		b = typeof a[bc] != "undefined" ? a[bc] : ia(a);
		a = c[Qb] || a[Qb];
		var e = [];
		for (var h in c) switch (h) {
		case "width":
		case "height":
		case "top":
		case "left":
			e[s](h + "=" + c[h]);
			break;
		case "target":
		case "noreferrer":
			break;
		default:
			e[s](h + "=" + (c[h] ? 1 : 0))
		}
		h = e[mc](",");
		if (c.noreferrer) {
			if (h = d[Ea]("", a, h)) {
				h[Hb][Za]('<META HTTP-EQUIV="refresh" content="0; url=' + ud(b) + '">');
				h[Hb][Ob]()
			}
		} else h = d[Ea](b, a, h);
		b = h;
		if (!b) return f;
		if (!b.opener) b.opener = k;
		b[cb]();
		return i
	};
	var cg = i,
		dg = function () {
		Pe("init")
	},
		eg = function () {
		Pe("dispose")
	},
		fg = function (a) {
		n(S(a), '<img src="http://s.ytimg.com/yt/img/icn_loading_animated-vfl24663.gif">')
	};
	var gg = function () {};
	I = gg[B];
	I.a = {
		j: "",
		Q: "",
		d: "",
		K: "",
		L: "",
		A: "",
		u: "",
		Da: "",
		o: "",
		duration: "",
		Z: i,
		wa: i,
		sb: 40
	};
	I.Qd = function (a, b, c, d, e, h, j) {
		this.a.j = a || "";
		this.a.Q = b || "";
		this.a.d = c || "";
		this.a.K = d || "";
		this.a.L = e || "";
		this.a.A = h || "";
		this.a.u = j || ""
	};
	I.Ia = function (a, b, c, d) {
		this.a.Da = a || "";
		this.a.o = b || "";
		this.a.duration = c || "";
		this.a.Z = d || i
	};
	I.Pd = function (a) {
		this.a.wa = a
	};
	I.Ca = function (a) {
		var b = i,
			c = a.media_template_data;
		if (c) for (var d = 0; d < c[A]; d++) if (c[d].imageUrl) b = c[d];
		if (!b) return i;
		b.channelUrl = "/user/" + b.channelName + "?feature=dka";
		this.Qd(a.url, b.imageUrl, a.line1, a.line2, a.line3, b.channelUrl, b.channelName);
		return f
	};
	I.pa = function () {
		if (!gg[B].Ta) gg[B].Ta = '<span class="rental-badge-and-price"><img align="bottom" class="badge badge-is-rental" src="http://s.ytimg.com/yt/img/pixel-vfl73.gif" alt=""><span style="display: inline;" class="rental-price">' + N("RENTAL") + "</span>";
		return gg[B].Ta
	};
	I.Ea = function (a) {
		var b = "";
		switch (a) {
		case 2:
		case 6:
			a = this.a.d;
			a = a[x]("&") != -1 ? "document" in qc && a[x]("<") == -1 ? vd(a) : wd(a) : a;
			if (a[A] > this.a.sb) a = a[cc](0, this.a.sb - 3) + "...";
			b += '<div class="pyv-single"><a class="big-thumb" title="' + this.a.d + '" href="' + this.a.j + '"><img src="' + this.eb() + '" alt="' + this.a.d + '" width="298" height="223"/></a><div class="video-time"><a title="' + this.a.d + '" href="' + this.a.j + '"><span>';
			if (this.a[Kb]) b += "<b>" + this.a[Kb] + "</b>";
			b += ud(a) + '</span></a></div><div class="metadata"><div>' + this.a.K + "<br>" + this.a.L + '</div><a href="' + this.a.A + '">' + this.a.u + "</a>&nbsp;&nbsp;";
			if (this.a.Z) b += this.pa();
			else if (this.a.o && this.a.o != "0") b += "<span>" + this.a.o + " " + N("VIEWS") + "</span>";
			b += "</div></div>";
			break;
		case 3:
			b += this.a.wa ? '<div class="video-entry" style="padding:5px 1px; margin-bottom: 5px;">' : '<div class="video-entry" style="background-color:#ffb; padding:5px 1px; margin-bottom: 5px;">';
			b += '<a rel="nofollow" class="video-thumb-90" href="' + this.a.j + '"><img class="vimg90" alt="' + this.a.d + '" src="' + this.a.Q + '" title="' + this.a.d + '"/>';
			if (this.a[Kb]) b += '<span class="video-time" style="margin-top:-22px;" ><span>' + this.a[Kb] + "</span></span>";
			b += '</a><div class="video-main-content"><div class="video-mini-title"><a rel="nofollow" title="' + this.a.d + '" href="' + this.a.j + '">' + this.a.d + "</a></div>";
			if (this.a.Z) b += '<div class="video-rental-badge">' + this.pa() + "</div>";
			else if (this.a.o && this.a.o != "0") b += '<div class="video-view-count">' + this.a.o + " " + N("VIEWS") + "</div>";
			b += '<div class="video-username"><a href="' + this.a.A + '">' + this.a.u + "</a></div></div>";
			this.a.wa || (b += '<div class="watch-pyv-label"><a href="http://www.google.com/support/youtube/bin/answer.py?answer=143422&amp;topic=13660">Promoted Video</a></div>');
			b += '<div class="video-clear-list-left"></div></div>';
			break;
		case 4:
			b += '<div style="background-color: #FFF9DD;padding: 3px;margin:5px 5px 0 5px;"><a rel="nofollow" class="video-thumb-120" style="float:left;" href="' + this.a.j + '"><img class="vimg120" alt="' + this.a.d + '" src="' + this.a.Q + '" title="' + this.a.d + '"/>';
			if (this.a[Kb]) b += '<span class="video-time" style="margin-top:-22px;"><span>' + this.a[Kb] + "</span></span>";
			b += '</a><div style="margin-left: 134px;"><div style="font-size: 14px; margin-bottom: 5px;"><a href="' + this.a.j + '" class="hLink">' + this.a.d + "</a></div><div>" + this.a.K + " " + this.a.L + '</div><div class="video-facets">';
			if (this.a.Da) b += '<span class="video-rating-list"><div><button class="master-sprite ratingVS ratingVS-' + this.a.Da + '"></button></div></span>';
			if (this.a.Z) b += this.pa();
			else if (this.a.o) b += '<span class="video-view-count">' + this.a.o + " " + N("VIEWS") + "</span>";
			b += '<span><a href="' + this.a.A + '">' + this.a.u + '</a></span></div><div style="font-size:8pt; color:gray; text-align: right;">Promoted Video</div></div><div class="clearL"></div></div>';
			break;
		case 5:
			b += '<table width="300" cellspacing="0" cellpadding="0" border="0"><tr><td><a title="' + this.a.d + '" href="' + this.a.j + '" target="_parent" style="display:block;overflow:hidden;height:185px"><img src="' + this.eb() + '" alt="' + this.a.d + '" width="300" style="margin-top:-20px"><div class="video-time" style="position:relative;text-align:center;top:-116px;margin:0"><a title="' + this.a.d + '" href="' + this.a.j + '" target="_parent">Watch this video</a></div></a></td></tr><tr><td><div style="padding:0 5px;border:1px solid #CCC;border-top:none;height:64px;overflow:hidden"><a style="font-weight: bold;display:block;padding-top:4px" href="' + this.a.j + '" target="_parent">' + this.a.d + "</a><div>" + this.a.K + "&nbsp;" + this.a.L + "</div>";
			if (this.a.u) b += '<a href="' + this.a.A + '" target="_top" style="font-size:11px;">' + this.a.u + "</a>";
			b += "</div></td></tr></table>";
			break;
		case 1:
		default:
			b += '<div><table width="100%" cellspacing="0" cellpadding="0"><tr style="vertical-align: top;"><td class="spons-vid-thumb"><a class="video-thumb-120" title="' + this.a.d + '" href="' + this.a.j + '"><img src="' + this.a.Q + '" alt="' + this.a.d + '" class="vimg120"/><span class="addtoQL90"><img src="http://s.ytimg.com/yt/img/play_all-vfl69806.png"/></span></a></td><td style="width: 4px;"></td><td valign="top" style="padding-top: 2px;"><a style="font-weight: bold;" href="' + this.a.j + '">' + this.a.d + "</a><br/><div>" + this.a.K + "&nbsp;" + this.a.L + '</div><a href="' + this.a.A + '" style="font-size: 11px;">' + this.a.u + "</a></td></tr></tbody></table></div>";
			break
		}
		return b
	};
	I.eb = function () {
		var a = this.a.Q;
		if (a[x]("/vi/") != -1) {
			a = a[t](/\/default.jpg/, "/hqdefault.jpg");
			a = a[t](/\/(\d{1}).jpg/, "/hq$1.jpg")
		}
		return a
	};
	var hg = function (a, b, c, d, e) {
		k.google_ad_client = a;
		k.google_ad_channel = b;
		k.google_max_num_ads = c;
		k.google_ad_output = "js";
		k.google_ad_type = "text";
		k.google_only_pyv_ads = f;
		if (d) {
			k.google_kw = d;
			k.google_kw_type = "broad"
		}
		if (k.dclk_language) k.google_language = k.dclk_language;
		k.google_ad_request_done = e;
		l[Za]('<script language="JavaScript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"><\/script>')
	},
		jg = function (a, b) {
		var c = a.media_template_data[0].videoId;
		c ? U("/pyv_metadata?v=" + c, {
			method: "GET",
			onComplete: function (d) {
				var e = ig(d, "duration"),
					h = ig(d, "view_count");
				d = ig(d, "is_rental") == "True";
				b(a, e, h, d)
			},
			onException: function () {
				b(a)
			}
		}) : b(a)
	},
		lg = function (a, b, c, d) {
		if (a) {
			var e = new gg;
			k.google_adtest && k.google_adtest == "on" && e.Pd(f);
			if (e.Ca(a)) {
				c && b && d != fa && e.Ia("", c, b, d);
				a = e.Ea(3);
				if (b = S(k.pyv_related_box_id || "watch-related-discoverbox")) {
					c = b[u];
					if (c[x](a) != 0) {
						n(b, a + c);
						if (K("PYV_TRACK_RELATED_CTR")) {
							kg("watch-related-discoverbox", f);
							kg("watch-channel-videos-panel", f)
						}
					}
				}
			}
		}
	},
		kg = function (a, b) {
		if (a = S(a)) {
			a = T("DIV", "video-entry", a);
			for (var c = 0, d = a[A]; c < d; c++) for (var e = a[c][ub]("A"), h = 0, j = e[A]; h < j; h++) {
				var r = e[h][Vb]("href");
				if (r && r[x]("/watch?v=") != -1) e[h].href += b ? "&pvpos=" + c : "&pvnpos=" + c
			}
		}
	},
		og = function () {
		X("ad_creative_2");
		if (K("PYV_IS_ALLOWED")) {
			var a = "";
			if (K("PYV_AD_CHANNEL")) a += K("PYV_AD_CHANNEL");
			var b = "";
			if (K("PYV_KW")) b += K("PYV_KW");
			hg("ca-youtube-homepage", a, 1, b, mg)
		} else ng()
	},
		mg = function (a) {
		var b = S("pyv-placeholder");
		a[A] == 0 || !b ? ng() : jg(a[0], pg)
	},
		pg = function (a, b, c, d) {
		if (a) {
			var e = new gg;
			if (e.Ca(a)) {
				qg();
				c && b && d != fa && e.Ia("", c, b, d);
				a = e.Ea(2);
				if (b = S("pyv-placeholder")) n(b, a + rg(i))
			}
		}
	},
		ng = function () {
		if (!k.ppv_fallback_rendered) {
			qg();
			X("pyv-placeholder");
			W(k.ppv_fallback_placeholder_id || "ppv-placeholder");
			k.ppv_fallback_rendered = f
		}
	},
		qg = function () {
		X(k.pyv_google_ad_collapse_id || "ad_creative_2")
	},
		rg = function (a) {
		return '<div class="pyv-label-home"><a href="http://www.google.com/support/youtube/bin/answer.py?answer=143422&amp;topic=13660">' + (K("PYV_GOOGLE_AD_SV_LABEL") || (a ? "Promoted Videos" : "Promoted Video")) + "</a></div>"
	},
		ig = function (a, b) {
		a = a[Wb][ub]("root")[0][ub](b);
		return a != g && a[A] > 0 && a[0][gb] ? a[0][gb].nodeValue : g
	},
		ug = function () {
		if (K("PYV_IS_ALLOWED")) {
			var a = "pyvOnBrowse";
			if (K("PYV_CATEGORY")) a += " pyvBrowse_" + K("PYV_CATEGORY");
			hg("ca-youtube-browse", a, 1, "", sg)
		} else tg()
	},
		sg = function (a) {
		var b = S("pyv-placeholder");
		a[A] == 0 || !b ? tg() : jg(a[0], vg)
	},
		vg = function (a, b, c, d) {
		if (a) {
			var e = new gg;
			if (e.Ca(a)) {
				X("ad_creative_1");
				c && b && d != fa && e.Ia("", c, b, d);
				a = e.Ea(6);
				if (b = S("pyv-placeholder")) n(b, a + rg(i))
			}
		}
	},
		tg = function () {
		if (k.dclk_language) k.google_language = k.dclk_language;
		k.google_ad_client = "pub-6219811747049371";
		k.google_ad_channel = "1802068507";
		k.google_ad_format = "300x250_as";
		k.google_ad_type = "text_image";
		k.google_ad_width = 300;
		k.google_ad_height = 250;
		k.google_alternate_color = "FFFFFF";
		k.google_color_border = "FFFFFF";
		k.google_color_bg = "FFFFFF";
		k.google_color_link = "0033CC";
		k.google_color_text = "444444";
		k.google_color_url = "0033CC";
		l[Za]('<script language="JavaScript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"><\/script>')
	};
	var wg = function (a, b) {
		var c = S("comment_header_" + a);
		if (c) wa(c, b ? "watch-comment-head" : "watch-comment-head-hidden opacity80");
		Kf("comment_body_" + a, b);
		if (c = S("comment_vote_" + a)) wa(c, b ? "watch-comment-voting" : "watch-comment-voting-off");
		Kf("hide_link_" + a, b);
		Nf("hide_link_" + a, b);
		Kf("show_link_" + a, !b);
		Nf("show_link_" + a, !b)
	},
		xg = function (a) {
		wg(a, f)
	},
		yg = function (a) {
		wg(a, i)
	},
		zg = function (a) {
		Pf("watch-comments-options");
		S("watch-comments-options-ajax") || U(a, {
			method: "GET",
			update: "watch-comments-options-inner"
		});
		return i
	},
		Bg = function (a, b, c) {
		a = S(a);
		if (c && a[u][x]("<") == -1) {
			fg(a);
			l[G][cb]();
			U(b, {
				method: "GET",
				update: a
			})
		}
		Ag()
	},
		Ag = function () {
		var a = S("watch-comment-panel");
		a = R(a, "yt-uix-expander-collapsed");
		var b = wf.c();
		b.O(V.Sa, a);
		b.H(V.Qa, !a);
		b[Nb]()
	},
		Cg = function (a, b, c, d, e, h) {
		return "/watch_ajax?v=" + a + "&action_get_comments=1&p=" + b + "&commentthreshold=" + c + "&commentfilter=" + d + (h ? "&commenttype=" + h : "") + "&page_size=10&last_comment_id="
	},
		Dg = function (a, b, c, d) {
		var e = "more-comments-page-" + c;
		b = m.min(c * b, d);
		var h = function () {
			n(S("watch-comments-loading-span"), "");
			for (var j = S(e), r = 0, w = 0; w < j[nb][A]; w++) j[nb][w][gc] == "DIV" && r++;
			Kf("watch-comments-show-more-button", r > 0)
		};
		c = {
			method: "GET",
			update: e,
			onComplete: function () {
				M(h, 0)
			}
		};
		S("more-comments").innerHTML += '<div id="' + e + '"></div>';
		fg("watch-comments-loading-span");
		X("watch-comments-show-more-button");
		n(S("watch-comment-count"), b);
		U(a, c)
	},
		Eg = 1;
	var Fg = function (a, b, c, d) {
		var e = S("comment_vote_" + a);
		if (!R(e, "watch-comment-voting-off")) {
			U("/comment_voting?a=" + d + "&id=" + a + "&video_id=" + b + "&old_vote=" + c, {
				method: "GET",
				update: e
			});
			if (d < 0) {
				X("comment_body_" + a);
				yg(a)
			}
			fg(e)
		}
	};
	var Gg = function (a, b) {
		var c;
		try {
			c = typeof a.selectionStart == "number"
		} catch(d) {
			c = i
		}
		if (c) {
			a.selectionStart = b;
			a.selectionEnd = b
		} else if (Kd) {
			b = b;
			if (a[mb] == "textarea") b = a[v][cc](0, b)[t](/(\r\n|\r|\n)/g, "\n")[A];
			b = b;
			a = a.createTextRange();
			a.collapse(f);
			a.move("character", b);
			a[hb]()
		}
	};
	var Hg = function (a, b, c, d) {
		d = N("TMPL_COMMENT_REPLY_FORM", {
			"{form_id}": a,
			"{reply_parent_id}": b,
			"{discard_visible}": c && 'style="display: none;"' || "",
			"{username_tag}": d && "@" + d + " " || ""
		});
		c || b && !Lf("comment_body_" + b) && xg(b);
		n(S("div_" + a), d);
		W("div_" + a);
		c || M(function () {
			var e = S("comment_textarea_" + a);
			e[cb]();
			Gg(e, e[u][A])
		}, 0)
	},
		Ig = function (a) {
		a = a[Pa][C](" ");
		var b = a[0],
			c = a[2],
			d = l[Ba][a[1]],
			e = d.add_comment_button,
			h = d.discard_comment_button;
		a = d.comment;
		var j = function () {
			var r = S("captcha_div");
			if (r != g) {
				var w = r[H],
					E = w.add_comment_button,
					L = w.comment;
				w[Pb](r);
				p(E, i);
				p(L, i);
				W(L);
				o(E, N("COMMENT_DEFAULT"))
			}
		};
		b != "INLINE_CAPTCHAFAIL" && j();
		if (b == "OK") {
			o(e, N("COMMENT_OK"));
			p(e, f);
			p(h, f);
			X(h);
			k.pmsForwarder && c && k.pmsForwarder.commentedVideo(c);
			k.comments_complete_callback && k.comments_complete_callback();
			p(a, f)
		} else if (b == "PENDING") {
			o(e, N("COMMENT_PENDING"));
			p(e, f);
			p(h, f);
			X(h)
		} else if (b == "LOGIN") p(e, i);
		else if (b == "EMAIL") {
			ja(N("COMMENT_EMAIL")) && ag("/email_confirm");
			p(e, i)
		} else if (b == "INLINE_CAPTCHAFAIL") {
			d = S("fail_warning");
			n(S("fail_warning_text"), N("COMMENT_CAPTCHAFAIL"));
			W(d);
			p(e, i);
			p(a, i);
			o(e, N("COMMENT_DEFAULT"))
		} else if (b == "INLINE_CAPTCHA") {
			j();
			b = S("playlist_nav_comment_box");
			b != g && X(b);
			p(e, i);
			o(e, N("COMMENT_DEFAULT"));
			Kf(a, i);
			e = l[y]("div");
			e.id = "captcha_div";
			d[Wa](e, a);
			p(a, i);
			U("/comment_servlet?gimme_captcha=1", {
				update: e
			})
		} else {
			if (b == "BLOCKED") p(e, f);
			else if (b == "TOOSOON") {
				da(N("COMMENT_TOOSOON"));
				p(e, i)
			} else if (b == "TOOLONG") {
				da(N("COMMENT_TOOLONG"));
				p(e, i);
				p(a, i)
			} else if (b == "TOOSHORT") {
				da(N("COMMENT_TOOSHORT"));
				p(e, i);
				p(a, i);
				a[cb]()
			} else if (b == "FAILED") p(e, f);
			else if (b == "KOREAFAIL") {
				da(N("COMMENT_KOREAFAIL"));
				p(e, f)
			} else if (b == "FAILADDED") p(e, f);
			else {
				b == "CAPTCHAFAIL" && da(N("COMMENT_CAPTCHFAIL"));
				p(e, i)
			}
			o(e, N("COMMENT_DEFAULT"))
		}
	};
	var Jg = {};
	Jg.blank = "b1b1b1 cfcfcf";
	Jg.storm = "3a3a3a 999999";
	Jg.iceberg = "2b405b 6b8ab6";
	Jg.acid = "006699 54abd6";
	Jg.green = "234900 4e9e00";
	Jg.orange = "e1600f febd01";
	Jg.pink = "cc2550 e87a9f";
	Jg.purple = "402061 9461ca";
	Jg.rubyred = "5d1719 cd311b";
	var Kg = {};
	Kg.small = "320 265";
	Kg["default"] = "425 344";
	Kg.medium = "480 385";
	Kg.large = "640 505";
	var Lg = {};
	Lg.small = "480 295";
	Lg["default"] = "560 340";
	Lg.medium = "640 385";
	Lg.large = "853 505";
	var Mg = i,
		Ng = [],
		Og = function () {
		if (!Mg) {
			Mg = f;
			var a = l[y]("script");
			a.src = k.homepageJavascriptSource;
			l[ub]("head")[0][q](a);
			var b = function () {
				if (typeof k.YT_php_support != "undefined") {
					k.homepageCallback();
					for (var c = 0; c < Ng[A]; ++c) Ng[c]();
					Ng = []
				} else k.setTimeout(b, 100)
			};
			k.setTimeout(b, 100)
		}
	};
	var Pg = function (a, b, c, d, e, h, j) {
		this.oe = a;
		this.me = b;
		this.Yd = this.Yd;
		this.gd = d;
		this.zd = e;
		this.he = h;
		this.Tc = j;
		this.Ed = "ad_creative_" + a;
		this.hd = "ad_creative_expand_btn_" + a;
		this.jd = "ad_creative_expand_btn_img_" + a;
		this.$c = "ad_creative_collapse_btn_" + a;
		this.je = "ad_creative_iframe_" + a;
		this.ne = "ad_creative_" + c;
		this.ke = "masthead_child_div";
		this.ie = V.Oa;
		this.Xa = "HIDDEN_MASTHEAD_ID"
	};
	va(Pg, {
		collapse: function () {
			X(this.Ed);
			this.zd || X(this.$c);
			this.Tc || O(S(this.jd), "homepage-masthead-show-btn");
			W(this.hd);
			var a = wf.c();
			a.k(this.Xa, this.gd);
			a[Nb]();
			Tf("homepage_collapse_masthead_ad")
		},
		expand: function () {
			var a = wf.c();
			a.k(this.Xa, i);
			a[Nb]();
			Tf("homepage_expand_masthead_ad");
			ya(l[D], l[D][bc])
		}
	});
	var Qg = i,
		Rg = i;
	var Sg = i,
		Tg = function (a) {
		if (!Sg && (a[fb] == 40 || a[fb] == 32 || a[fb] == 34)) S("masthead-search-term")[Ta]();
		Sg = f
	};
	var Ug = function () {
		this.s = {};
		this.Id = new RegExp("\\s?" + this.b() + "-\\d(.\\d)?", "g")
	};
	Bc(Ug, Zf);
	sc(Ug);
	I = Ug[B];
	I.w = "rating";
	I.G = function () {
		this.h("click", this.J, "star");
		this.h("mouseover", this.Ba, "star");
		this.h("mouseout", this.Aa, "star")
	};
	I.J = function (a) {
		var b = this.n(a);
		if (!R(b, this.b("disabled"))) {
			this[yb](b, "rating-value", a[v]);
			var c = this.X(b);
			c && this[yb](b, "rating-message", c[u]);
			if (c = this[Va](b, "rating-action"))(c = rc(c)) && c[Rb](g, b, a[v]);
			O(b, this.b("disabled"))
		}
	};
	I.Ba = function (a) {
		var b = this.n(a);
		if (!R(b, this.b("disabled"))) {
			this.Hb(b, a[v]);
			var c = this.X(b);
			if (c) {
				this[yb](b, "rating-message", c[u]);
				n(c, a[Db])
			}
		}
	};
	I.Aa = function (a) {
		a = this.n(a);
		if (!R(a, this.b("disabled"))) {
			this.Hb(a, this[Va](a, "rating-value"));
			var b = this.X(a);
			if (b) {
				n(b, this[Va](a, "rating-message"));
				this[yb](a, "rating-message", "")
			}
		}
	};
	I.X = function (a) {
		return kf(g, this.b("message"), a)
	};
	I.cd = function (a) {
		a = ha(a);
		return na(a) ? 0 : m[Ka](a * 2) / 2
	};
	I.Hb = function (a, b) {
		b = this.cd(b);
		b = b % 1 > 0 ? b : b + ".0";
		b = this.b(b);
		wa(a, a[Eb][t](this.Id, "") + " " + b)
	};
	var Vg = function (a, b, c) {
		var d = Ug.c().X(a),
			e = l[Ba].ratingForm;
		o(e.rating, b);
		of(e, function (h) {
			n(d, h[Pa]);
			c && c(a, b, h[Pa])
		})
	},
		Zg = function (a, b, c, d, e, h, j, r, w, E) {
		this.wb = a;
		this.rb = b;
		this.ub = c;
		this.na = d;
		this.da = e;
		this.B = h;
		this.tb = r;
		this.ka = E;
		this.P = g;
		this.q = 0;
		if (w) {
			this.q = w;
			var L = this;
			Oe("init", function () {
				L.ma(L.q, f)
			})
		}
		if (j == "S") {
			Wg = "icn_star_full_11x11";
			Xg = "icn_star_half_11x11";
			Yg = "icn_star_empty_11x11"
		}
	};
	I = Zg[B];
	I.wb = g;
	I.rb = g;
	I.ub = g;
	I.na = g;
	I.da = g;
	I.B = g;
	I.tb = g;
	I.ka = g;
	I.P = g;
	I.q = g;
	I.ea = g;
	I.Db = function (a, b) {
		this.Ya();
		this.kb();
		this.ad(a);
		b || this.zb(a)
	};
	I.zb = function (a) {
		a = m[Oa](a + 0.25);
		if (a > 0) {
			if (!this.ea) this.ea = S(this.da)[u];
			n(S(this.da), this.tb[a - 1])
		} else if (this.ea) n(S(this.da), this.ea)
	};
	I.ad = function (a) {
		var b = m[Oa](a + 0.25);
		a = a - b > 0.25;
		for (var c = 0; c < b; c++) {
			var d = S("star_" + this.B + "_" + (c + 1));
			if (d) {
				Q(d, Xg);
				Q(d, Yg);
				O(d, Wg)
			}
		}
		if (a) if (d = S("star_" + this.B + "_" + (c + 1))) {
			Q(d, Wg);
			Q(d, Yg);
			O(d, Xg)
		}
	};
	I.kb = function () {
		for (var a = 0; a < this.rb; a++) {
			Q(S("star_" + this.B + "_" + (a + 1)), Wg);
			Q(S("star_" + this.B + "_" + (a + 1)), Xg);
			O(S("star_" + this.B + "_" + (a + 1)), Yg)
		}
	};
	I.Od = function (a) {
		this.q = a;
		this.ma(a);
		o(l[Ba][this.na].rating, this.q);
		var b = this.wb,
			c = this;
		of(l[Ba][this.na], function (d) {
			n(S(b), d[Pa]);
			d = (d = S("rating_notify_token")) && d[v];
			c.ka && c.ka();
			typeof k.pmsForwarder != "undefined" && d && k.pmsForwarder.ratedVideo(d)
		})
	};
	I.ma = function (a, b) {
		this.q = a;
		this.Db(a, b)
	};
	I.Wc = function () {
		this.P = M(this.ub + ".resetStars()", 300)
	};
	I.Jd = function () {
		this.Ya();
		this.q ? this.ma(this.q) : this.kb();
		this.zb(0)
	};
	I.Ya = function () {
		if (this.P) {
			Lc(this.P);
			this.P = g
		}
	};
	var Wg = "icn_star_full_large",
		Xg = "icn_star_half_large",
		Yg = "icn_star_empty_large";
	var ah = function (a) {
		if (a[Pa] == "block") ya(k.top[D], "/")
	};
	if (k != k.top) {
		var bh = l.referrer;
		oe(bh) || U("/roger_rabbit", {
			postBody: "location=" + ba(bh) + "&self=" + ba(k[D][bc]),
			onComplete: ah
		})
	};
	var ch = i,
		dh = function () {
		Q(S("search-related-terms"), "wonderwheel-related");
		X("wonderwheel-container");
		k.wonderwheelLoaded = i
	},
		eh = function () {
		W("wonderwheel-container");
		U("/results_ajax?action_wonderwheel_display=1&" + k.wonderwheel_video_arg, {
			method: "GET",
			onComplete: function () {
				X("wonderwheel-loading");
				O(S("search-related-terms"), "wonderwheel-related");
				ch = f
			},
			update: "wonderwheel-placeholder"
		});
		return i
	};
	var fh, gh, hh, ih, jh, $, kh, lh, mh, nh, oh, ph, qh = f,
		rh = "",
		sh = g,
		th = g,
		uh = g,
		vh = -1,
		wh = g,
		xh = g,
		yh = 0,
		zh = 0,
		Ah = g,
		Bh = i,
		Ch = i,
		Dh = {
		ja: "co.jp",
		cs: "com"
	},
		Eh = g,
		Fh = g,
		Gh = new RegExp("^[\\s\\u1100-\\u11FF\\u3040-\\u30FF\\u3130-\\u318F\\u31F0-\\u31FF\\u3400-\\u4DBF\\u4E00-\\u9FFF\\uAC00-\\uD7A3\\uF900-\\uFAFF\\uFF65-\\uFFDC]+$"),
		Hh = i,
		Ih = -1,
		Jh = "",
		Kh = "",
		Lh = 10,
		Mh = g,
		Nh = ea[Mb][nc](),
		Oh = Nh[x]("opera") != -1,
		Ph = Nh[x]("msie") != -1 && !Oh,
		Qh = Nh[x]("webkit") != -1,
		Rh = Nh[x]("firefox") != -1,
		Sh = Nh[x]("firefox/3") != -1,
		Th = Nh[x]("windows") != -1 && (Rh || Qh) || Nh[x]("macintosh") != -1 && Rh && !Sh || Oh,
		Uh = function (a) {
		if (a.persisted) o(mh, "f");
		o(nh, $[v])
	},
		Vh = function () {
		var a = l[ub]("head")[0],
			b = l[y]("style"),
			c = g,
			d = g,
			e = i;
		if (l.styleSheets) {
			a[q](b);
			e = f;
			c = b.sheet ? b.sheet : b.styleSheet
		}
		if (!c) {
			d = l[Ua]("");
			b[q](d)
		}
		var h = function (j, r) {
			var w = j + " { " + r + " }";
			if (c) if (c.insertRule) c.insertRule(w, c.cssRules[A]);
			else c.addRule && c.addRule(j, r);
			else d.data += w + "\n"
		};
		h(".google-ac-m", "font-size:13px;font-family:arial,sans-serif;cursor:default;line-height:17px;border:1px solid #999;z-index:2000000;position:absolute;background-color:white;margin:0;");
		h(".google-ac-a", "background-color:white;");
		h(".google-ac-b .google-ac-d", "background-color:#36c;color:white;");
		h(".google-ac-b .google-ac-c", "background-color:#36c;color:white;");
		h(".google-ac-c", "white-space:nowrap;overflow:hidden;text-align:left;padding-left:3px;" + (Ph || Oh ? "padding-bottom:1px;" : ""));
		h(".google-ac-d", "white-space:nowrap;overflow:hidden;font-size:10px;text-align:right;color:#666;padding-left:3px;padding-right:3px;");
		h(".google-ac-e td", "padding:0 3px 2px;text-align:right;font-size:10px;line-height:15px;");
		h(".google-ac-e span", "color:#03c;text-decoration:underline;cursor:pointer;");
		h(".google-ac-f", "width: 16px;background-color:#EAEAEA;white-space:nowrap;overflow:hidden;padding-left:2px;padding-right:2px;" + (Ph || Oh ? "padding-bottom:1px;" : ""));
		h(".rtl .google-ac-c", "text-align:right;");
		h(".rtl .google-ac-d", "text-align:left;");
		e || a[q](b)
	},
		Xh = function () {
		if (kh) {
			var a = Hh ? 20 : 0;
			ra(lh, Wh($, "offsetLeft") - a + "px");
			lh.top = Wh($, "offsetTop") + $[lc] - 1 + "px";
			pa(lh, $[Ra] + a + "px");
			ra(xh, lh[Ya]);
			xh.top = lh.top;
			pa(xh, kh[Ra] + "px");
			Aa(xh, kh[lc] + "px")
		}
	},
		Yh = function (a, b, c) {
		var d = l[y]("input");
		d.type = "hidden";
		d.name = a;
		o(d, b);
		p(d, c);
		return jh[q](d)
	},
		$h = function () {
		Bh || Zh();
		Bh = i
	},
		ei = function (a) {
		var b = a[fb];
		k[D][Sb] == "/" && Tg(a);
		if (b == 13 && lh[xb] == "visible" && rh == gh && uh && uh.suggestType) {
			uh.onclick();
			return i
		}
		if (b == 27 && lh[xb] == "visible") {
			Zh();
			ai(gh);
			a.cancelBubble = f;
			return a.returnValue = i
		}
		if (! (bi(b) || ci(b))) return f;
		zh++;
		zh % 3 == 1 && di(b);
		return i
	},
		fi = function (a) {
		var b = a[fb]; ! (ph && (bi(b) || ci(b))) && zh == 0 && di(b);
		zh = 0;
		if (gh[A] > 0 && $.onkeyup_original) {
			$.onkeyup_original(a);
			gd(kh, "rtl", $.dir == "rtl")
		}
		return ! (bi(b) || ci(b))
	},
		di = function (a) {
		ph && (bi(a) || ci(a)) && gi();
		if ($[v] != fh || a == 39) {
			gh = $[v];
			ih = hi($);
			if (a != 39) o(nh, gh)
		}
		if (ci(a)) ii(vh + 1);
		else bi(a) && ii(vh - 1);
		Xh();
		if (rh != gh && !Ah) Ah = M(Zh, 500);
		fh = $[v];
		fh == "" && !sh && ji()
	},
		bi = function (a) {
		return a == 38 || a == 63232
	},
		ci = function (a) {
		return a == 40 || a == 63233
	},
		li = function () {
		$[Ta]();
		o(mh, this.completeId);
		ai(this.completeString);
		if (ki()) Mh ? Mh() : jh.submit()
	},
		mi = function (a, b) {
		return b ?
		function () {
			$[Ta]();
			k[Ea](a);
			uh = g
		} : function () {
			ya(k[D], a)
		}
	},
		ni = function () {
		if (!Ch) {
			if (uh) wa(uh, "google-ac-a");
			wa(this, "google-ac-b");
			uh = this;
			if (th) for (var a = 0; a < th[A]; a++) if (th[a] == uh) {
				vh = a;
				break
			}
		}
	},
		oi = function () {
		if (Ch) {
			Ch = i;
			ni[Rb](this)
		}
	},
		ii = function (a) {
		if (rh == "" && gh != "") {
			hh = "";
			ji()
		} else if (! (gh != rh || !sh)) if (! (!th || th[A] <= 0)) if (lh[xb] == "visible") {
			var b = th[A];
			if (Eh) b -= 1;
			if (uh) wa(uh, "google-ac-a");
			if (a == b || a == -1) {
				vh = -1;
				ai(gh);
				pi();
				o(mh, "f")
			} else {
				if (a > b) a = 0;
				else if (a < -1) a = b - 1;
				vh = a;
				uh = th.item(a);
				wa(uh, "google-ac-b");
				ai(uh.completeString);
				o(mh, uh.completeId)
			}
		} else qi()
	},
		Zh = function () {
		if (Ah) {
			Lc(Ah);
			Ah = g
		}
		Nf(kh, i);
		Nf(wh, i)
	},
		qi = function () {
		if (qh) {
			Nf(kh, f);
			Nf(wh, f);
			Xh();
			Ch = f
		}
	},
		ti = function (a, b, c, d, e, h) {
		var j = kh[dc][A];
		j != 0 && kh[dc][j - 1][Eb] == "google-ac-e" && --j;
		var r = kh.insertRow(j);
		r.onclick = h;
		r.onmousedown = ri;
		r.onmouseover = ni;
		r.onmousemove = oi;
		r.completeString = a;
		r.completeId = c;
		r.suggestType = d;
		wa(r, "google-ac-a");
		if (Hh) {
			h = l[y]("td");
			wa(h, "google-ac-f");
			r[q](h);
			if (c == "g") {
				c = l[y]("img");
				c.src = "http://www.google.com/favicon.ico";
				h[q](c)
			}
		}
		c = l[y]("td");
		if (b) n(c, b);
		else si(c, a);
		wa(c, "google-ac-c");
		if (Ph && Gh[Fa](a)) c[F].paddingTop = "2px";
		a = l[y]("td");
		e && si(a, e);
		if (j > 0 && kh[dc][j - 1].suggestType != d) r[F].borderTop = "1px solid #CCC";
		wa(a, "google-ac-d");
		if (R(kh, "rtl")) {
			r[q](a);
			r[q](c)
		} else {
			r[q](c);
			r[q](a)
		}
	},
		ki = function () {
		Zh();
		p(nh, f);
		if (nh[v] != $[v] && th && th[A] && vh >= 0) {
			o(mh, th.item(vh).completeId);
			p(nh, i)
		} else if (yh >= 10) o(mh, "o");
		return f
	},
		ji = function () {
		if (!qh) return i;
		if (hh != gh && gh) {
			var a = ba(gh);
			yh++;
			var b = l[y]("script");
			b[z]("type", "text/javascript");
			b[z]("charset", "utf-8");
			b[z]("id", "jsonpACScriptTagY");
			b[z]("src", "http://" + oh + "&q=" + a + "&cp=" + ih);
			a = l[Qa]("jsonpACScriptTagY");
			var c = l[ub]("head")[0];
			a && c[Pb](a);
			c[q](b);
			pi()
		}
		hh = gh;
		b = 100;
		for (a = 1; a <= (yh - 2) / 2; ++a) b *= 2;
		b += 50;
		sh = M(ji, b);
		return f
	},
		ai = function (a) {
		o($, a);
		fh = a
	},
		pi = function () {
		$[cb]()
	},
		Wh = function (a, b) {
		for (var c = 0; a;) {
			c += a[b];
			a = a[Jb]
		}
		return c
	},
		si = function (a, b) {
		a[q](l[Ua](b))
	};

	function ui(a) {
		for (; kh[dc][A] > 0;) kh.deleteRow(-1);
		var b = 0;
		for (var c in a) {
			if (b >= Lh) break;
			var d = a[c];
			if (d) {
				b++;
				var e = d[2];
				if (d[A] == 3) {
					var h = "";
					if (b == 1) h = Fh;
					ti(d[0], g, e, "y", h, li)
				} else if (d[A] == 4) {
					var j = d[3],
						r = j[0],
						w = ka(j[1]);
					h = j[2];
					j = mi("/" + j[3], i);
					if (r == "mv" && h) {
						w = w + " <font color='#666'>(" + h + ")</font>";
						h = ""
					}
					ti(d[0], w, e, r, h, j)
				}
			}
		}
		if (Eh && b > 0) {
			a = kh.insertRow(-1);
			a.onmousedown = ri;
			b = l[y]("td");
			b.colSpan = Hh ? 3 : 2;
			wa(a, "google-ac-e");
			c = l[y]("span");
			a[q](b);
			b[q](c);
			si(c, Eh);
			c.onclick = function () {
				Zh();
				rh = "";
				Lc(sh);
				sh = g;
				o(mh, "x")
			}
		}
	}
	var ri = function (a) {
		if (a && a[Lb]) {
			a[Lb]();
			qi();
			$[cb]()
		} else Bh = f;
		return i
	},
		vi = function () {
		var a = $[v];
		a != fh && di(0);
		fh = a
	},
		gi = function () {
		Bh = f;
		$[Ta]();
		M(pi, 10)
	},
		hi = function (a) {
		var b = 0,
			c = 0,
			d;
		try {
			d = typeof a.selectionStart == "number"
		} catch(e) {
			d = i
		}
		if (d) {
			b = a.selectionStart;
			c = a.selectionEnd
		}
		if (Ph) {
			a = a.createTextRange();
			var h;
			try {
				h = l.selection.createRange()
			} catch(j) {
				h = g
			}
			if (h && a.inRange(h)) {
				a.setEndPoint("EndToStart", h);
				b = a.text[A];
				a.setEndPoint("EndToEnd", h);
				c = a.text[A]
			}
		}
		if (b && c && b == c) return b;
		return 0
	},
		wi = function () {
		qh = f;
		if ($) {
			$[z]("autocomplete", "off");
			ji()
		}
	},
		xi = function () {
		qh = i;
		if ($) {
			hh = gh;
			$[z]("autocomplete", "on");
			Zh()
		}
	};
	var yi = l[ub]("html")[0],
		zi = function () {
		var a = !l[$b] || l[$b] == "CSS1Compat" ? yi : l[G];
		return k.pageYOffset || a[zb]
	},
		Ai = function () {
		if (k[bb] || !k.ActiveXObject && !ea.taintEnabled) return k.innerHeight;
		return (!l[$b] || l[$b] == "CSS1Compat" ? yi : l[G])[Yb]
	},
		Bi = function (a, b) {
		b = b || zi() + Ai();
		var c;
		if (l[vb][Da]) {
			if (l[vb][Da]) {
				c = a[Da]();
				var d = l[vb];
				c = c.top + d[zb] - d[kb]
			} else c = 0;
			d = a;
			for (var e = 0; d && !/^(?:body|html)$/i [Fa](d[gc]);) {
				e += d[zb];
				d = d[H]
			}
			c = c - e
		} else c = 0;
		if (c <= b + 175) {
			a.src = a[Vb]("thumb");
			a.removeAttribute("thumb")
		}
	},
		Ci = function () {
		for (var a = l[ub]("IMG"), b = zi() + Ai(), c = 0; c < a[A]; ++c) a[c][Vb]("thumb") && Bi(a[c], b)
	};
	var Hi = function () {
		if (S("watch-customize-embed-theme")) {
			var a = wf.c();
			xa(S("show_border_checkbox"), a.C(V.I));
			xa(S("show_related_checkbox"), !a.C(V.U));
			xa(S("delayed_cookies_checkbox"), a.D(V.T));
			var b = S("hd_checkbox");
			if (b) xa(b, a.D(V.S));
			b = a.M("emt");
			b != "blank" && b != "" && Di(b);
			(a = a.M("ems")) ? Ei(a) : Ei("default");
			Fi()
		}
		S("watch-customize-embed-div") && Gi()
	},
		Ii = "blank",
		Di = function (a) {
		var b = S("theme_color_" + Ii + "_img"),
			c = S("theme_color_" + a + "_img"),
			d = wf.c();
		d.k("emt", a);
		d[Nb]();
		Q(b, "radio_selected");
		O(c, "radio_selected");
		Ii = a;
		Ji();
		return i
	},
		Ki = "default",
		Ei = function (a) {
		var b = S("watch-embed-size-radio-" + Ki + (K("IS_WIDESCREEN") ? "-wide" : "")),
			c = S("watch-embed-size-radio-" + a + (K("IS_WIDESCREEN") ? "-wide" : "")),
			d = wf.c();
		d.k("ems", a);
		d[Nb]();
		Q(b, "radio_selected");
		O(c, "radio_selected");
		c[Ta]();
		Ki = a;
		S("watch-customize-embed-size").innerHTML += " ";
		return i
	},
		Ji = function () {
		var a = S("watch-customize-embed-theme-preview"),
			b = !S("show_border_checkbox")[Gb] ? "_nb" : "";
		a.src = "img/customize_player/preview_embed_" + Ii + "_sm" + b + ".gif"
	},
		Fi = function () {
		var a = K("IS_WIDESCREEN") ? Lg : Kg;
		for (var b in a) {
			var c = S("watch-embed-size-text-" + b),
				d = Li(b);
			n(c, d[0] + "x" + d[1])
		}
	};
	var Mi = -1,
		Ni = function (a, b, c, d, e, h, j, r, w, E) {
		Lc(Mi);
		r = r ? r : {};
		r.session_token = aa(c);
		c = {
			postBody: me(r),
			onComplete: function (L) {
				var P = S(E ? E : "subscribeMessage");
				L = qf(L);
				if (P) {
					n(P, '<div id="subscribeMessage">' + rf(L, "html_content") + "</div>");
					W(P)
				}
				if (S(d)) {
					X(d);
					W(e)
				}
				if (P && !w) Mi = M(function () {
					X(P)
				}, 5E3);
				j && j()
			}
		};
		h = h == 0 ? "/ajax_subscriptions?subscribe_to_" : h == 1 ? "/ajax_subscriptions?unsubscribe_from_" : "/ajax_subscriptions?get_edit_subscription_form_for_";
		if (b == "username") U(h + "user=" + a, c);
		else b == "playlist" && U(h + "playlist=" + a, c)
	},
		Gi = function () {
		var a = wf.c(),
			b = [];
		a.C(V.U) && b[s]("rel=0");
		var c = a.M("emt");
		if (c && c != "blank") {
			c = Jg[c][C](" ");
			b[s]("color1=0x" + c[0]);
			b[s]("color2=0x" + c[1])
		}
		a.D(V.S) && b[s]("hd=1");
		c = a.D(V.T);
		Ic("EMBED_URL", c ? K("EMBED_URL")[t]("youtube.com", "youtube-nocookie.com") : K("EMBED_URL")[t]("youtube-nocookie.com", "youtube.com"));
		a.C(V.I) && b[s]("border=1");
		a = Li();
		b = K("EMBED_URL") + "&" + b[mc]("&");
		b = '<object width="' + a[0] + '" height="' + a[1] + '"><param name="movie" value="' + b + '"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="' + b + '" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="' + a[0] + '" height="' + a[1] + '"></embed></object>';
		o(S("embed_code"), b)
	},
		Li = function (a) {
		var b = wf.c();
		a = a || b.M("ems") || "default";
		var c = (K("IS_WIDESCREEN") ? Lg : Kg)[a][C](" ");
		a = ga(c[0], 10);
		c = ga(c[1], 10);
		if (b.C(V.I)) {
			a += 20;
			c += 20
		}
		return [a, c]
	};
	var Oi = function (a) {
		a = S(a);
		for (var b = S(a.id + "-body"), c = ce(a[H][gb], f); c;) {
			Q(c, "watch-tab-sel");
			c = ce(c[rb], f)
		}
		O(a, "watch-tab-sel");
		for (c = ce(b[H][gb], f); c;) {
			Q(c, "watch-tab-sel");
			c = ce(c[rb], f)
		}
		O(b, "watch-tab-sel");
		a[ub]("A")[0][Ta]();
		X("recent-fav-video");
		X("autoshare-widget-favorite-wizard");
		X("rec-playlist-video")
	},
		Pi = function () {
		for (var a = T("img", "watch-check-grn-circle", S("watch-main-area") ? S("watch-main-area") : S("watch-actions-area")), b = 0, c = a[A]; b < c; b++) a[b][F].backgroundImage = 'url("http://s.ytimg.com/yt/img/check-grn-circle-vfl91176.png")'
	};
	var Ri = function (a) {
		a = a[t](";dc_seed=", ";kmyd=watch-channel-brand-div;dc_seed=");
		X("instream_google_companion_ad_div");
		X("google_companion_ad_div");
		W("ad300x250");
		W("watch-channel-brand-div");
		var b = S("ad300x250"),
			c = m[Ka](m[Ub]() * 1E4);
		n(b, ['<iframe src="', a, '" name="ifr_300x250ad', c, '" id="ifr_300x250ad', c, '" width="300" height="250" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'][mc](""));
		Qi()
	},
		Si = function (a) {
		a = a[t](";dc_seed=", ";kmyd=watch-longform-ad;dc_seed=");
		X("instream_google_companion_ad_div");
		W("watch-longform-ad");
		W("watch-longform-text");
		W("watch-longform-ad-placeholder");
		var b = S("watch-longform-ad-placeholder"),
			c = m[Ka](m[Ub]() * 1E4);
		n(b, ['<iframe src="', a, '" name="ifr_300x60ad', c, '" id="ifr_300x60ad', c, '" width="300" height="60" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'][mc](""));
		Qi()
	},
		Ti = function (a) {
		var b = S("watch-longform-ad-placeholder");
		if (a) {
			X("instream_google_companion_ad_div");
			W("watch-longform-ad");
			W("watch-longform-text");
			W("watch-longform-ad-placeholder");
			n(b, a)
		} else X("watch-longform-ad");
		Qi()
	},
		Ui = function (a, b) {
		var c = "watch-channel-brand-div",
			d = "ad300x250",
			e = 300,
			h = 250;
		if (a == "video") {
			c = "watch-longform-ad";
			d = "watch-longform-ad-placeholder";
			e = 300;
			h = 60;
			X("instream_google_companion_ad_div")
		}
		a = ka(b);
		n(S(d), ['<iframe name="fw_ad" id="fw_ad" ', 'width="' + e + '" height="' + h + '" ', 'marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no"></iframe>'][mc](""));
		var j = S("fw_ad");
		j = j[sb] ? j[sb] : j.contentDocument[Hb] ? j.contentDocument[Hb] : j.contentDocument;
		e = ea[Mb][nc]();
		d = e[x]("msie") != -1;
		e = e[x]("opera") != -1;
		j[Hb][Ea]();
		j[Hb][Za](a);
		d || e ? M(function () {
			j[Hb][Ob]()
		}, 7500) : j[Hb][Ob]();
		W(c);
		Qi()
	},
		Vi = function () {
		W("watch-channel-brand-div");
		X("ad300x250");
		Aa(S("google_companion_ad_div")[F], "250px");
		Qi()
	},
		Wi = function () {
		X("watch-longform-ad");
		Qi()
	},
		Xi = function () {
		X("watch-channel-brand-div");
		Qi()
	},
		Qi = function () {
		var a = rc("yt.www.watch.ads.handleAdLoaded");
		a && a[Rb]()
	},
		Yi = function () {},
		Zi = function (a) {
		Ic("POPOUT_AD_SLOTS", a)
	},
		$i = function () {
		var a = S("watch-longform-popup");
		p(a, f);
		O(a, "yt-button-disabled")
	},
		aj = function (a) {
		var b = S("watch-longform-popup");
		p(b, i);
		Zi(a);
		Q(b, "yt-button-disabled")
	},
		bj = function (a) {
		k.google_ad_output = "html";
		if (a) {
			k.google_ad_height = "60";
			k.google_ad_format = "300x60_as";
			k.google_container_id = "instream_google_companion_ad_div"
		} else {
			k.google_ad_height = "250";
			k.google_ad_format = "300x250_as";
			k.google_container_id = "google_companion_ad_div"
		}
	},
		cj = function (a) {
		if (a) {
			X("watch-longform-ad-placeholder");
			X("watch-channel-brand-div");
			W("watch-longform-text");
			W("watch-longform-ad");
			Aa(S("instream_google_companion_ad_div")[F], "60px");
			W("instream_google_companion_ad_div")
		} else {
			X("ad300x250");
			X("watch-longform-ad");
			W("google_companion_ad_div");
			W("watch-channel-brand-div");
			Aa(S("google_companion_ad_div")[F], "250px")
		}
		Qi()
	},
		dj = function () {
		X("instream_google_companion_ad_div");
		X("watch-longform-text");
		X("watch-longform-ad-placeholder");
		Qi()
	};
	/\uffff/ [Fa]("\uffff");
	var ej, fj, gj = function (a, b, c) {
		ej = b;
		X("autoshare-widget-" + a);
		var d = i,
			e = i;
		if (b) {
			for (var h in b) {
				var j = T("*", "autoshare-widget-service-" + h),
					r = T("*", "autoshare-widget-service-auto-" + h),
					w = S("autoshare-widget-service-checkbox-" + h);
				if (b[h].is_connected) {
					Yc(j, W);
					d = f;
					if (b[h].is_autosharing) {
						Yc(r, W);
						xa(w, f);
						e = f
					} else {
						Yc(r, X);
						xa(w, i)
					}
				} else {
					Yc(j, X);
					Yc(r, X);
					xa(w, i)
				}
			}
			if (e) {
				W("autoshare-widget-" + a + "-auto");
				fj = M(function () {
					X("autoshare-widget-" + a + "-auto");
					W("autoshare-widget-" + a + "-auto-sharing")
				}, 7E3)
			} else if (d) {
				for (h in b) if (b[h].is_connected) {
					w = S("autoshare-widget-service-checkbox-" + h);
					xa(w, f)
				}
				W("autoshare-widget-" + a + "-oneoff")
			} else if (K("SHOW_AUTOSHARE")) {
				W("autoshare-widget-" + a + "-wizard");
				Ic("SHOW_AUTOSHARE", i)
			}
		}
		if (c) {
			o(S("autoshare-widget-" + a + "-message"), c);
			n(S("autoshare-widget-" + a + "-message-counter"), 130 - c[A])
		}
		W("autoshare-widget-" + a)
	};
	var hj = function (a) {
		if (!S("watch-channel-video-list-loading-div")) {
			var b = {
				method: "GET",
				update: "watch-channel-vids-body",
				onComplete: Ci
			};
			U("/watch_ajax?user=" + a + "&video_id=" + K("VIDEO_ID") + "&action_channel_videos", b)
		}
	};
	var ij = function (a) {
		Oi("watch-tab-favorite");
		Pi();
		if (K("LOGGED_IN")) {
			W("watch-add-faves-loading");
			X("watch-add-faves-result", "watch-remove-faves", "watch-add-faves");
			a = l[Ba][a];
			var b = {
				postBody: Xe(a),
				onComplete: function (c) {
					W("watch-add-faves-result", "watch-remove-faves");
					X("watch-add-faves", "watch-add-faves-div", "watch-add-faves-loading");
					S("recent-fav-video")[u] && W("recent-fav-video");
					var d = (c = qf(c)) ? rf(c, "notify_token") : g;
					k.pmsForwarder && d && k.pmsForwarder.favoritedVideo(d);
					if (d = c ? rf(c, "wizard") : g) n(S("watch-tab-favorite-autoshare-wizard"), d);
					d = c ? rf(c, "widget") : g;
					var e = c ? eval("(" + rf(c, "service_settings") + ")") : g;
					c = c ? rf(c, "default_message") : g;
					if (d) {
						n(S("autoshare-widget-favorite"), d);
						W("autoshare-widget-favorite");
						gj("F", e, c)
					}
				},
				onException: function () {
					X("watch-add-faves", "watch-add-faves-div", "watch-add-faves-loading");
					Oi("watch-tab-share")
				},
				method: "POST",
				update: "recent-fav-video"
			};
			U(a[ec], b);
			S("watch-action-favorite-link")[Ta]()
		} else W("addToFavesLogin")
	};
	var jj = ["reportConcernResult1", "reportConcernResult2", "reportConcernResult3", "reportConcernResult4", "reportConcernResult5", "reportConcernResult6"],
		kj = function (a) {
		U("/watch_ajax?video_id=" + a + "&action_get_flag_video_component=1", {
			method: "GET",
			onComplete: function () {
				n(S("inappropriateMsgsDiv"), S("inappropriateMsgs")[u]);
				n(S("inappropriateMsgs"), "");
				W("inappropriateMsgsDiv");
				Pi()
			},
			update: "inappropriateVidDiv"
		})
	};
	var lj = function (a, b, c) {
		a = a;
		if (b != g) a += "_" + b;
		if (c != g) a += "_" + c;
		return a
	},
		oj = function (a, b) {
		for (var c = mj(b), d = 0; d < c; d++) {
			var e = S(lj("playlistRow", b, d));
			if (a == nj(e, "v")) return e
		}
	},
		yj = function (a, b) {
		var c = oj(b, "QL") != fa;
		if (!c) {
			var d = S("playlistRow_placeholder_QL")[lb](f),
				e = mj("QL");
			pj(d, e, "", "http://s.ytimg.com/yt/img/pixel-vfl73.gif", N("LOADING"), "", "");
			W(d);
			qj(d, "v", b);
			O(d, "loading");
			var h = S("playlistRows_QL"),
				j = S(lj("playlistRow", "QL", e - 1));
			j ? h[Wa](d, j[rb]) : h[Wa](d, h[gb]);
			rj("QL", e);
			if (sj("QL", 1) > 4) {
				d = S(lj("playlistContainer", "QL"));
				Q(d, "watch-playlist-auto-height");
				O(d, "watch-playlist-fixed-height175")
			}
		}
		tj[tj[A]] = {
			id: b,
			img: a
		};
		uj(a);
		if (!c) {
			vj[s](b);
			wj();
			xj(1)
		}
		W("quicklistDiv")
	},
		zj = i,
		wj = function () {
		if (vj[A] > 0 && !zj) {
			zj = f;
			var a = vj[Ga](),
				b = "";
			b = "ui=1";
			var c = function (d) {
				zj = i;
				d == fa && Aj(a);
				d && Bj(d);
				wj()
			};
			U("/watch_queue_ajax?action_add_to_queue=1&video_id=" + a, {
				postBody: Cj(b),
				onComplete: c,
				onException: c,
				json: f
			})
		}
	},
		Bj = function (a) {
		for (var b = 0; b < a[A]; b++) if (a[b]) {
			var c = S("playlistRow_placeholder_QL")[lb](f);
			W(c);
			a[b].unshift(c);
			pj[fc](g, a[b]);
			c.id = lj("playlistRow", "QL", a[b][1]);
			var d = S(c.id);
			R(d, "loading") && d[H].replaceChild(c, d)
		}
	},
		Aj = function (a) {
		xj(-1);
		(a = oj(a, "QL")) && Dj("QL", a)
	},
		Ej = g,
		rj = function (a, b) {
		b = S(lj("playlistRow", a, b));
		S(lj("playlistContainer", a)).scrollTop = b[ic];
		Ej = S(lj("playlistContainer", a))[zb]
	},
		Fj = i,
		Hj = function () {
		if (Gj) Fj = f;
		else {
			S("playlistContainer_QL").onscroll = "";
			U("/watch_queue_ajax?action_get_all_queue_videos_component=1&v=" + K("VIDEO_ID") + "&al=1", {
				postBody: Cj("watch3=1"),
				onComplete: Bj,
				onException: Bj,
				json: f
			})
		}
	},
		Ij = function (a) {
		for (var b = mj(a), c = 0; c < b; c++) {
			var d = S(lj("playlistRow", a, c));
			if (R(d, "watch-playlist-row-playing")) return f
		}
	},
		Lj = function (a, b, c) {
		c = typeof c == "undefined" ? i : c;
		a = Jj(a, 1, c);
		if (S("PL_randomize") && S("PL_randomize")[Gb]) {
			if (K("PLAYLIST_RANDOM_NEXT_URL")) ya(k[D], K("PLAYLIST_RANDOM_NEXT_URL"))
		} else if (a) {
			if (b == g) b = "";
			ya(k[D], Kj(a) + "&playnext=" + (ga(K("PLAY_NEXT_COUNT"), 10) + 1) + "&playnext_from=" + K("PLAY_NEXT_FROM") + b)
		}
	},
		Kj = function (a) {
		return a[ub]("a")[0][bc]
	},
		Jj = function (a, b, c) {
		if (!K("PLAY_NEXT_FROM") || !(K("SWF_IS_PLAYING_ALL") || c)) return g;
		b = typeof b != "undefined" ? b : 1;
		c = K("PLAY_NEXT_FROM");
		for (var d = S(lj("playlistRow", c, 0)), e = mj(c), h = 0; h < e; h++) {
			var j = S(lj("playlistRow", c, h));
			if (j && R(j, "watch-playlist-row-playing")) {
				d = (h + b) % e;
				if (d < 0) d = e + d;
				d = a || d == h + b ? S(lj("playlistRow", c, d)) : g;
				break
			}
		}
		return d
	},
		Mj = function (a) {
		if (a > 21) return "";
		var b = K("PLAYLIST_RANDOM_VIDEO_LIST");
		if (b && S("PL_randomize") && S("PL_randomize")[Gb]) {
			if (b[a - 1]) {
				if (a >= b[A]) {
					var c = function (d) {
						d && Ic("PLAYLIST_RANDOM_VIDEO_LIST", b.concat(eval(d)))
					};
					U("/watch_ajax", {
						postBody: "action_get_next_playlist_vids=1&shuffle=" + K("PLAYLIST_SHUFFLE_SEED") + "&index=" + K("PLAYLIST_SHUFFLE_INDEX") + "&p=" + K("PLAYLIST_SHUFFLE") + "&offset=" + a,
						onComplete: c,
						onException: c,
						json: f
					})
				}
				Ic("PLAYLIST_RANDOM_ID", b[a - 1]);
				return K("PLAYLIST_RANDOM_ID")
			}
			return ""
		}
		if (a = Jj(i, a)) if (a = nj(a, "v")) return a;
		return ""
	},
		Nj = [],
		tj = [],
		Pj = function (a) {
		Q(a, "QLIconImgOver");
		Q(a, "QLIconImgDone");
		O(a, "QLIconImg");
		W(a);
		X(Oj(a))
	},
		Dj = function (a, b) {
		a: {
			for (var c = b; c != l;) {
				if (R(c, "watch-playlist-row")) {
					b = c;
					break a
				}
				c = c[H]
			}
			b = g
		}
		R(b, "watch-playlist-row-playing");
		var d = -1;
		c = nj(b, "v");
		b[H][Pb](b);
		var e = 0,
			h = mj(a);
		for (b = 0; b < h; b++) {
			var j = S(lj("playlistRow", a, b)),
				r = S(lj("playlistRowIndex", a, b));
			if (j) {
				j.id = lj("playlistRow", a, e);
				r.id = lj("playlistRowIndex", a, e);
				n(r, e + 1);
				if (R(j, "watch-playlist-row-playing")) d = e;
				if (e == d + 1 || e == 0) nj(j, "v");
				e++
			}
		}
		d = sj(a, -1);
		Nj[s](c);
		Qj();
		for (b = 0; b < tj[A]; b++) if (tj[b].id == c) {
			Pj(tj[b].yd);
			tj[kc](b, 1);
			break
		}
		c = S(lj("playlistContainer", "QL"));
		if (d == 0) if (a == "QL") X("quicklistDiv");
		else {
			W(lj("playlistClosed", a));
			X(lj("playlistOpen", a))
		} else if (d < 4) {
			O(c, "watch-playlist-auto-height");
			Q(c, "watch-playlist-fixed-height175")
		}
		c.onscroll && c.onscroll();
		xj(-1)
	},
		Gj = i,
		Qj = function () {
		var a = function () {
			Qj()
		};
		if (Nj[A] > 0) {
			Gj = f;
			U("/watch_queue_ajax?action_remove_from_queue=1&video_id=" + Nj[Nj[A] - 1], {
				postBody: Cj(""),
				onComplete: a
			});
			Nj.pop()
		}
		Gj = i;
		Fj && Hj()
	},
		Rj = function (a, b) {
		this.attrName = a;
		o(this, b)
	};
	Rj[B].attrName = "";
	o(Rj[B], "");
	var Sj = function (a) {
		for (var b = 0; b < a[A]; b++) this.Sc(a[b][0], a[b][1], a[b][2])
	};
	Sj[B].aa = {};
	Sj[B].Sc = function (a, b, c) {
		this.aa[a] || (this.aa[a] = []);
		this.aa[a][s](new Rj(b, c))
	};
	Sj[B].Uc = function (a) {
		for (var b = fd(a), c = 0; c < b[A]; c++) {
			var d = this.aa[b[c]];
			if (d) for (var e = 0; e < d[A]; e++) a[d[e].attrName] = typeof d[e][v] == "function" ? d[e][v]() : d[e][v]
		}
	};
	Sj[B].fill = function (a) {
		for (var b = 0; b < a[nb][A]; b++) this.fill(a[nb][b]);
		this.Uc(a)
	};
	var pj = function (a, b, c, d, e, h, j, r) {
		(new Sj([
			["watch-playlist-row", "id", lj("playlistRow", "QL", b)],
			["watch-playlist-row", "class", function () {
				qj(a, "v", r)
			}],
			["phIndex", "id", lj("playlistRowIndex", "QL", b)],
			["phIndex", "innerHTML", b + 1],
			["phHref", "href", c],
			["vimg50", "src", d],
			["vimg50", "title", e],
			["phHref", "innerHTML", e],
			["vtitle", "title", e],
			["phUsername", "innerHTML", h],
			["watch-playlist-item-duration", "innerHTML", j]
		])).fill(a)
	},
		nj = function (a, b) {
		a = fd(a);
		b = b + "*";
		for (var c = 0; c < a[A]; c++) {
			var d = a[c][t](/^\s+|\s+$/g, "");
			if (d[wb](0, b[A]) == b) return d[wb](b[A], d[A] - b[A])
		}
		return ""
	},
		qj = function (a, b, c) {
		for (var d = fd(a), e = b + "*", h = i, j = 0; j < d[A]; j++) if (d[j][wb](0, e[A]) == e) {
			d[j] = b + "*" + c;
			h = f
		}
		h || d[s](b + "*" + c);
		wa(a, d[mc](" "))
	},
		mj = function (a) {
		return ga(S("playlistVideoCount_" + a)[u], 10)
	},
		sj = function (a, b) {
		a = S("playlistVideoCount_" + a);
		n(a, ga(a[u], 10) + b);
		return ga(a[u], 10)
	};
	var Tj = function () {
		this.s = {}
	};
	Bc(Tj, Zf);
	sc(Tj);
	I = Tj[B];
	I.w = "button";
	I.G = function () {
		this.h("click", this.J)
	};
	I.J = function (a) {
		var b = this[Va](a, "button-action");
		if (b)(b = rc(b)) && b[Rb](g, a);
		R(a, this.b("menubutton")) && this.de(a)
	};
	I.de = function (a) {
		if (a) {
			var b = this.b("menu") + yc(a);
			S(b) ? this.sa(a) : this.Sd(a)
		}
	};
	I.Sd = function (a) {
		if (a) {
			var b = this.b("menu") + yc(a),
				c = S(b);
			if (!c) {
				var d = this.fb(a);
				if (d) {
					var e = this.db(a),
						h = Of(a);
					if (e) {
						c = Of(e);
						h.x = c.x
					}
					h.y += a[lc] - 2;
					var j = e ? e[Ra] - 2 : a[Ra] - 2;
					c = d[lb](i);
					n(c, d[u]);
					c.id = b;
					ra(c[F], h.x + "px");
					c[F].top = h.y + "px";
					c[F].minWidth = j + "px";
					l[G][q](c);
					W(c);
					O(a, this.b("active"));
					e && O(e, this.b("group-active"));
					b = zc(this.Fd, this, a);
					b = De(l, "click", b);
					this[yb](a, "button-listener", b)
				}
			}
		}
	};
	I.sa = function (a) {
		if (a) {
			var b = this.b("menu") + yc(a);
			(b = S(b)) && l[G][Pb](b);
			b = this.db(a);
			Q(a, this.b("active"));
			b && Q(b, this.b("group-active"));
			if (b = this[Va](a, "button-listener")) {
				Fe(b);
				this[yb](a, "button-listener", "")
			}
		}
	};
	I.fe = function (a, b) {
		var c = this.fb(a);
		if (c) n(c, b);
		a = this.b("menu") + yc(a);
		if (a = S(a)) n(a, b)
	};
	I.Fd = function (a, b) {
		b = He(b);
		if (!this.pd(b) || b[Xa] == "SPAN" || R(b, this.b("menu-close"))) this.sa(a)
	};
	I.fb = function (a) {
		return kf(g, this.b("menu"), a)
	};
	I.pd = function (a) {
		return ee(a, g, this.b("menu"))
	};
	I.db = function (a) {
		return ee(a, g, this.b("group"))
	};
	var Uj = i,
		Wj = function (a, b) {
		b || Vj();
		a = !!a;
		var c = S("content");
		b = S("watch-sidebar");
		var d = S("watch-video"),
			e = S("baseDiv"),
			h = K("WIDE_PLAYER_STYLES"),
			j = 0;
		if ("webkitTransition" in b[F]) {
			b = l[pb].getComputedStyle(b, g);
			j = ha(b["-webkit-transition-duration"]) * 1E3
		}
		if (a) {
			b = j;
			O(c, "watch-wide");
			M(function () {
				O(d, "wide");
				for (var r = 0; r < h[A]; ++r) O(e, h[r])
			}, b)
		} else {
			b = j / 2;
			Q(d, "wide");
			for (j = 0; j < h[A]; ++j) Q(e, h[j]);
			M(function () {
				Q(c, "watch-wide")
			}, b)
		}
		Kf("masthead-utility-menulink-short", a);
		Kf("masthead-utility-menulink-long", !a)
	},
		Xj = function () {
		var a = S("watch-video");
		return R(a, "wide")
	},
		$j = function () {
		if (!K("LOGGED_IN")) {
			n(S("watch-actions-area"), S("watch-actions-close")[u] + S("watch-actions-logged-out")[u]);
			Zj();
			return i
		}
		return f
	},
		ak = function () {
		n(S("watch-actions-area"), N("LOADING"));
		Zj()
	},
		Zj = function () {
		var a = S("watch-actions-area-container"),
			b = S("watch-actions-area");
		Q(a, "collapsed");
		M(function () {
			Aa(a[F], S("inappropriateMainDiv") ? "300px" : b[lc] + 1 + "px")
		}, 0)
	},
		bk = function (a, b) {
		var c = Z(a, b + "-ajax");
		c && nf(c, function (d) {
			var e = S(b + "-body");
			n(e, d[Pa]);
			if (!d[Pa] || d[Pa][x]("video-list-item") == -1) {
				d = kf(g, "see-all", e);
				X(d);
				d = kf(g, "quicklist-help", e);
				W(d)
			}
			Wf(a, "loaded", "true");
			if (d = kf(g, "next-list-current", e)) e[H].scrollTop = d[ic];
			Ci()
		})
	},
		ck = function () {
		return K("HAS_ACTIVE_QUICKLIST") ? S("watch-next-list") : S("watch-passive-QL")
	},
		dk = function (a, b) {
		k.scroll(0, 0);
		o(S("masthead-search-term"), a);
		R(S("content"), "search-mode") || (Uj = Xj());
		Wj(i, f);
		W("watch-search-list");
		X("ad_creative_1");
		n(S("watch-search-count"), "");
		a = l[Ba].searchForm;
		O(S("watch-search-list"), "yt-uix-expander-collapsed");
		O(S("content"), "search-mode");
		try {
			ki()
		} catch(c) {}
		var d = Xe(a);
		d += "&ajax=1";
		if (b) d += "&page=" + b;
		b = ck();
		Q(b, "hid");
		R(b, "yt-uix-expander-collapsed") && $f.c().expand(b);
		U(a[ec], {
			method: "POST",
			postBody: d,
			onComplete: function () {
				Q(S("watch-search-list"), "yt-uix-expander-collapsed");
				n(S("watch-search-count"), S("watch-search-count-hidden")[u]);
				Ci()
			},
			update: "watch-search-list-body"
		});
		xi();
		M(wi, 100)
	},
		Vj = function () {
		Q(S("content"), "search-mode");
		Uj && Wj(f, f);
		Uj = i;
		var a = ck();
		R(a, "yt-uix-expander-collapsed") || $f.c().collapse(a)
	};
	var ek = i,
		fk = "",
		gk = {},
		hk = function () {
		return K("RESUME_COOKIE_NAME")
	},
		ik = function (a, b) {
		var c = hk();
		if (!c) return g;
		var d = we(c, "")[C](",");
		d = Zc(d, function (e) {
			return 0 != e[x](a) && e[A]
		});
		d[A] >= 4 && d[Ga]();
		d[s](a + ":" + b);
		ve(c, d[mc](","), 1814400)
	},
		jk = function (a) {
		var b = hk();
		if (!b) return g;
		var c = Zc(we(b, "")[C](","), function (d) {
			return 0 != d[x](a)
		});
		0 == c[A] ? xe(b) : ve(b, c[mc](","), 1814400)
	},
		kk = function (a) {
		var b = hk();
		if (!b) return g;
		b = we(b, "")[C](",");
		b = Zc(b, function (c) {
			return 0 == c[x](a)
		});
		if (0 == b[A]) return g;
		b = b[0][C](":");
		if (2 != b[A]) return g;
		return ga(b[1], 10)
	},
		lk = function () {
		var a = S("movie_player"),
			b = a.getDuration();
		a = m[Oa](a.getCurrentTime());
		var c = K("VIDEO_ID");
		a <= 120 || a + 120 >= b ? jk(c) : ik(c, m[Oa](a))
	},
		mk = function () {
		if (K("LIST_AUTO_PLAY_ON")) {
			var a = K("LIST_PLAY_NEXT_URL");
			if (a) {
				ag(a);
				return i
			}
		}
	},
		nk = function () {},
		ok = function (a, b) {
		for (var c = S("baseDiv"), d = K("WIDE_PLAYER_STYLES"), e = 0; e < d[A]; ++e) gd(c, d[e], a);
		Kf("masthead-utility-menulink-short", a);
		Kf("masthead-utility-menulink-long", !a);
		(c = S("watch-longform-player")) && c[Ta]();
		if (b) {
			b = wf.c();
			c = 1;
			if (a) c = 2;
			b.k("vq", c);
			b.H(V.Pa, f);
			b[Nb]();
			Ci()
		}
	},
		pk = function (a, b) {
		b = b != g ? b : f;
		var c = S("movie_player");
		c.seekTo(a, f);
		if (b) if (S("watch-video-container")) k.scroll(0, 0);
		else ya(k[D], "#movie_player");
		c.playVideo()
	},
		qk = function () {
		var a = {
			target: "FullScreenVideo",
			width: screen.availWidth,
			height: screen.availHeight,
			resizable: f,
			fullscreen: f
		};
		bg("/watch_popup?v=" + K("VIDEO_ID"), a)
	},
		rk = function (a) {
		var b = K("PLAY_NEXT_FROM"),
			c = K("SWF_IS_PLAYING_ALL"),
			d = K("PLAYLIST_RANDOM_ID"),
			e = K("VIDEO_ID");
		if (b && c) if (d) {
			if (e != d) {
				a = k[D][bc][t](/v=[^&#]*/, "v=" + a);
				a = a[t](/&index=[0-9]*/, "");
				ag(a)
			}
		} else {
			a = oj(a, b);
			a = Kj(a);
			ag(a)
		} else e != a && ag("/watch", {
			v: a
		})
	},
		tk = function () {
		var a = le(k[D][Ca][wb](1)),
			b = a.t || a.at;
		if (b) {
			gk.t = a.t;
			gk.at = a.at;
			return sk(b)
		} else return g
	},
		sk = function (a) {
		var b = 0;
		if (a[x]("h") != -1) {
			a = a[C]("h");
			b = a[0] * 60 * 60;
			a = a[1]
		}
		if (a[x]("m") != -1) {
			a = a[C]("m");
			b = a[0] * 60 + b;
			a = a[1]
		}
		if (a[x]("s") != -1) {
			a = a[C]("s");
			b = a[0] * 1 + b
		} else b = a * 1 + b;
		return b
	},
		uk = function (a, b, c) {
		K("ANALYTICS_ANNOTATIONS_TRACKER")._trackEvent(a, b, c)
	},
		vk = function () {
		ya(k[D], "#watch-main-area")
	},
		wk = function (a, b, c, d, e) {
		if (k.yt.timing) {
			if (b) Y.fmt = b;
			if (c) Y.asv = c;
			if (d) Y.plid = d;
			if (e) Y.sprot = e;
			b = Y.defaultAction;
			c = 0;
			for (d = a[A] / 2; c < d; c++) Y.timers[b][a[2 * c]] = a[2 * c + 1];
			Y.ya()
		}
	};
	var xk = "";
	var vj = [],
		Cj = function (a) {
		a = a || "";
		return a + "&" + K("XSRF_QL_PAIR")
	},
		uj = function (a) {
		Q(a, "QLIconImg");
		Q(a, "QLIconImgOver");
		O(a, "QLIconImgDone");
		a[Ta]();
		X(a);
		W(Oj(a))
	},
		Oj = function (a) {
		return kf("span", "quicklist-inlist", a[H])
	},
		xj = function (a) {
		var b = S("watch-passive-QL-count");
		if (b) n(b, a == 0 ? "0" : ga(b[u], 10) + a);
		b = S("quicklist-nav");
		var c = S("quicklist-nav-count");
		if (b && c) {
			n(c, a == 0 ? "0" : ga(c[u], 10) + a);
			W(b);
			if (yk) {
				Lc(yk);
				yk = g
			}
			zk(b, 1)
		}
	},
		yk = g,
		zk = function (a, b) {
		a[F].backgroundColor = b % 2 ? "#ff0" : "#fff";
		++b;
		if (b <= 10) yk = M(function () {
			zk(a, b)
		}, 500)
	},
		Ak = [],
		Ck = function (a, b) {
		for (var c = 0; c < Ak[A]; ++c) if (Ak[c] == b) return;
		xj(1);
		Ak[s](b);
		vj[s](b);
		Bk();
		a && uj(a)
	},
		Bk = function () {
		if (vj[A] > 0) {
			U("/watch_queue_ajax?action_add_to_queue=1&video_id=" + vj[vj[A] - 1], {
				postBody: Cj(),
				onComplete: Dk
			});
			vj.pop()
		} else if (K("HAS_ACTIVE_QUICKLIST")) {
			var a = S("watch-next-list");
			a && !R(a, "yt-uix-expander-collapsed") && bk(a, "watch-next-list")
		} else if (a = S("watch-passive-QL")) {
			Q(a, "hid");
			R(a, "yt-uix-expander-collapsed") || bk(a, "watch-passive-QL")
		}
	},
		Dk = function (a) {
		a = a[Wb];
		a != g && rf(a, "msg") != "exists" && Bk()
	};
	var Ek = ["watch-share-video-div", "watch-share-blog-quick", "shareMessageQuickDiv", "shareVideoEmailDiv"],
		Gk = function () {
		Yc(Ek, X);
		W("aggregationServicesDiv");
		Fk("fewer-options", "more-options");
		Fk("watch-share-services-expanded", "watch-share-services-collapsed")
	},
		Hk = function (a, b, c, d) {
		var e = K("LOCALE") || "en_US",
			h = S(b);
		a = "video_id=" + a;
		if (c == "all" && e) {
			Yc(Ek, X);
			W(h);
			Fk("more-options", "fewer-options");
			Fk("watch-share-services-collapsed", "watch-share-services-expanded");
			a = a + "&locale=" + e + "&action_get_share_video_component=1"
		} else if (c == "email" || c == "blog" && d) {
			if (Lf("watch-share-video-div")) {
				Fk("more-options", "fewer-options");
				Fk("watch-share-services-collapsed", "watch-share-services-expanded")
			}
			Yc(Ek, X);
			W(h);
			if (c == "email") a += "&action_get_share_message_component=1";
			else a = a + "&blog_info_id=" + d + "&action_get_share_blog_component=1"
		}
		W("aggregationServicesDiv");
		if (Lf(h)) if (h.loaded) {
			if (d) if (h.$a != d) {
				c = {
					method: "GET",
					update: h
				};
				U("/watch_ajax?" + a, c);
				h.$a = d
			}
		} else {
			c = {
				method: "GET",
				onComplete: function () {
					h.loaded = f;
					if (d) h.$a = d
				},
				onException: function () {
					X(h)
				},
				update: h
			};
			U("/watch_ajax?" + a, c)
		}
	},
		Jk = function (a, b, c, d) {
		Hk(a, b, c);
		W("aggregationServicesDiv");
		Fk("more-options", "fewer-options");
		Fk("watch-share-services-collapsed", "watch-share-services-expanded");
		Ik("MORE_SHARING_OPTIONS", a, "", d);
		return i
	},
		Kk = function () {
		var a = K("VIDEO_ID");
		Oi("watch-tab-share");
		R(S("watch-tab-share"), "watch-tab-sel") && !Lf("watch-share-video-div") ? Jk(a, "watch-share-video-div", "all") : Gk();
		vk()
	},
		Ik = function (a, b, c, d) {
		nf("/sharing_services?" + ["name=" + ba(a), "v=" + b, c ? "locale=" + c : "", d ? d : ""][mc]("&"))
	},
		Fk = function (a, b) {
		X(a);
		W(b)
	};
	var Lk = function (a, b) {
		var c = fa;
		c = b == g ? K("XSRF_TOKEN") : b;
		b = l[y]("input");
		b[z]("name", K("XSRF_FIELD_NAME"));
		b[z]("type", "hidden");
		b[z]("value", c);
		a[q](b)
	},
		Mk = [];
	var Ok = function (a) {
		if (a) {
			a = "http://www.youtube.com/watch?v=" + K("VIDEO_ID") + "&layer_token=" + a;
			var b = S("iv_invite_link");
			if (b) {
				o(b, a);
				p(b, i)
			}
			if (b = S("iv_invite_reset")) p(b, i);
			if (b = S("iv_mailto_link")) ya(b, Nk(a))
		}
	},
		Nk = function (a) {
		var b = [],
			c = 0;
		b[c++] = "mailto:";
		b[c++] = "someone@example.com";
		b[c++] = "?";
		b[c++] = "&subject=";
		b[c++] = ba(N("ANNOTATIONS_SUBJECT"));
		var d = K("VIDEO_TITLE");
		b[c++] = ba(d);
		b[c++] = "&body=";
		b[c++] = ba(N("ANNOTATIONS_BODY_1"));
		b[c++] = "%0A";
		b[c++] = ba(N("ANNOTATIONS_BODY_2"));
		b[c++] = "%0A";
		b[c++] = ba(a);
		return b[mc]("")
	};
	var Pk = function (a, b, c) {
		var d = S(a + "reason");
		if (d) o(d, b);
		if (a = S(a + "sub_reason")) o(a, c)
	},
		Sk = function (a, b) {
		var c = S("flag_" + a + "checkbox");
		if (c) if (!c[Gb]) {
			if (b = S(b)) {
				n(b, "- " + N("FLAG_DEFAULT") + " -");
				Qk(b)
			}
			Rk("flag_" + a)
		}
	},
		Qk = function (a) {
		if (a) {
			var b = a.fd;
			a = a.ed;
			b && Tk(S(b));
			a && Tk(S(a))
		}
	},
		Vk = function (a, b, c, d, e) {
		if (a = S(a)) {
			Qk(a);
			var h = g,
				j = g;
			if (d) {
				h = S(d);
				Uk(h)
			}
			if (e) {
				j = S(e);
				Uk(j)
			}
			var r = g;
			if (j) r = j;
			else if (d) r = h;
			if (a) {
				if (r) n(a, r[u]);
				a.fd = d;
				a.ed = e
			}
			Nf(c, i);
			Nf(b, i)
		}
	},
		Rk = function (a) {
		for (var b = ["MoreInfo1", "MoreInfo2", "MoreInfo3", "MoreInfo4", "MoreInfo5", "MoreInfo6", "Error"], c = 0; c < b[A]; c++) {
			var d = S(a + b[c]);
			d && X(d)
		}
	},
		Wk = function (a) {
		if (a) {
			o(a.flag_reason, "");
			o(a.flag_sub_reason, "");
			o(a.flag_t_secs, "");
			o(a.flag_t_mins, "");
			o(a.flag_desc, "");
			o(a.flag_protected_group, "")
		}
	},
		Xk = function (a) {
		if (a) {
			o(a.flag_anno_reason, "");
			o(a.flag_anno_sub_reason, "");
			o(a.flag_anno_t_secs, "");
			o(a.flag_anno_t_mins, "");
			o(a.flag_anno_desc, "");
			o(a.flag_anno_protected_group, "")
		}
	},
		Yk = function (a, b) {
		if (a == K("COMPLAINT_REASON_RACIALLY_OR_ETHNICALLY_OFFENSIVE_CONTENT") && b == K("COMPLAINT_SUBREASON_BULLYING")) return f;
		return i
	},
		Zk = function (a, b) {
		if (a == K("COMPLAINT_REASON_RACIALLY_OR_ETHNICALLY_OFFENSIVE_CONTENT") && b == K("COMPLAINT_SUBREASON_PROMOTES_HATRED")) return f;
		return i
	},
		$k = function (a, b) {
		if (a == K("COMPLAINT_REASON_GRAPHIC_VIOLENCE") && b == K("COMPLAINT_SUBREASON_ADULTS_FIGHTING")) return f;
		return i
	},
		al = function (a, b) {
		if (a == K("COMPLAINT_REASON_PORNOGRAPHY_OR_OBSCENITY") && b == K("COMPLAINT_SUBREASON_SEXUALLY_SUGGESTIVE")) return f;
		return i
	},
		bl = function (a, b, c, d) {
		var e = "";
		e = a != "" ? Zk(a, b) ? "reportConcernResult3" : Yk(a, b) ? "reportConcernResult6" : $k(a, b) || al(a, b) ? "reportConcernResult2" : "reportConcernResult1" : Zk(c, d) ? "reportConcernResult3" : $k(c, d) || al(c, d) ? "reportConcernResult2" : "reportConcernResult1";
		Pf(e)
	},
		cl = function (a, b, c) {
		var d = S("flag" + a + "_t_mins"),
			e = S("t_mins" + a);
		if (d && e) o(d, e[v]);
		e = S("flag" + a + "_t_secs");
		d = S("t_secs" + a);
		if (e && d) o(e, d[v]);
		e = S("flag" + a + "_desc");
		var h = S("desc" + a);
		if (e && d) o(e, h[v]);
		if (d = S("flag" + a + "_protected_group")) o(d, "");
		if (Zk(b, c)) if (b = S("protected_group" + a)) {
			if (b[Tb][b.selectedIndex][v] == "") {
				Pf("flag" + a + "_Error");
				return i
			}
			if (d) o(d, b[Tb][b.selectedIndex][v])
		}
		return f
	},
		Tk = function (a) {
		if (a) {
			a[F].backgroundColor = "";
			a[F].color = ""
		}
	},
		Uk = function (a) {
		if (a) {
			a[F].backgroundColor = "#6681ba";
			a[F].color = "#fff"
		}
	};
	var dl = function (a) {
		var b = l[G],
			c = l[vb];
		b = m.max(m.max(b[Yb], c[Yb]), m.max(b[lc], c[lc]), m.max(b[eb], c[eb]));
		a ? O(l[G], "watch-lights-off") : Q(l[G], "watch-lights-off");
		c = S("watch-longform-shade");
		Aa(c[F], b + "px");
		Kf(c, a)
	};
	var el = function () {
		var a = wf.c();
		a.H(V.ga, f);
		a[Nb]();
		X("watch_page_survey")
	};
	var fl = function () {
		this.s = {}
	};
	Bc(fl, Zf);
	sc(fl);
	I = fl[B];
	I.w = "overlay";
	I.G = function () {
		this.h("click", this.Rd, "target");
		this.h("click", this.mb, "close")
	};
	I.Rd = function (a) {
		var b = this.n(a);
		if (b) {
			var c = this.b("fg");
			a = S(c);
			if (!a) {
				var d = this.md(b);
				if (d) {
					a = l[y]("div");
					a.id = c;
					wa(a, c);
					var e = l[y]("div");
					wa(e, this.b("fg-content"));
					var h = this.b("bg");
					c = l[y]("div");
					c.id = h;
					wa(c, h);
					Aa(c[F], be(k) + "px");
					b = l[y]("iframe");
					b.id = h + "mask";
					b.frameBorder = "0";
					b.src = 'javascript:""';
					wa(b, h);
					n(e, d[u]);
					d = T("iframe", g, e);
					Yc(d, function (j) {
						j.src = this[Va](j, "src") || j.src
					}, this);
					a[q](e);
					l[G][q](b);
					l[G][q](c);
					l[G][q](a);
					a[F].marginLeft = a[Ra] / -2 + "px";
					a[F].marginTop = a[lc] / -2 + "px";
					if (this.Cd) {
						d = l[y]("div");
						d.id = a.id + "ie";
						wa(d, a[Eb]);
						O(d, this.b("fg-ie"));
						pa(d[F], a[Ra] + "px");
						Aa(d[F], a[lc] + "px");
						l[G][Wa](d, a);
						if (e = d.filters["DXImageTransform.Microsoft.Blur"]) {
							e.Enabled = f;
							d[F].marginLeft = a[Ra] / -2 - e.PixelRadius + "px";
							d[F].marginTop = a[lc] / -2 - e.PixelRadius + "px"
						}
					}
					a = zc(this.mb, this);
					De(c, "click", a);
					(c = b[sb] && b[sb][Hb]) && De(c, "click", a)
				}
			}
		}
	};
	I.mb = function () {
		var a = this.b("fg"),
			b = this.b("bg"),
			c = S(a);
		if (c) {
			X(c);
			l[G][Pb](c)
		}(a = S(a + "ie")) && l[G][Pb](a);
		(a = S(b)) && l[G][Pb](a);
		(b = S(b + "mask")) && l[G][Pb](b)
	};
	I.md = function (a) {
		return kf(g, this.b("content"), a)
	};
	k.yt = k.yt || {};
	J("_gel", S, void 0);
	J("_hasclass", R, void 0);
	J("_addclass", O, void 0);
	J("_removeclass", Q, void 0);
	J("_showdiv", W, void 0);
	J("_hidediv", X, void 0);
	J("_ajax", nf, void 0);
	J("goog.dom.getElementsByTagNameAndClass", T, void 0);
	J("goog.array.forEach", Yc, void 0);
	J("goog.array.indexOf", Xc, void 0);
	J("yt.dom.hasAncestor", jf, void 0);
	J("yt.setConfig", Ic, void 0);
	J("yt.getConfig", K, void 0);
	J("yt.registerGlobal", Jc, void 0);
	J("yt.setTimeout", M, void 0);
	J("yt.setInterval", Kc, void 0);
	J("yt.clearTimeout", Lc, void 0);
	J("yt.clearInterval", Mc, void 0);
	J("yt.setMsg", function () {
		Hc(Ec, arguments)
	}, void 0);
	J("yt.getMsg", N, void 0);
	J("yt.events.listen", De, void 0);
	J("yt.events.unlisten", Ee, void 0);
	J("yt.events.stopPropagation", function (a) {
		a = a || k[pc];
		a.cancelBubble = f;
		a[Lb] && a[Lb]()
	}, void 0);
	J("yt.events.preventDefault", function (a) {
		a = a || k[pc];
		a.preventDefault && a.preventDefault();
		return i
	}, void 0);
	J("yt.events.getTarget", He, void 0);
	J("yt.events.clear", Ge, void 0);
	J("yt.pubsub.subscribe", Oe, void 0);
	J("yt.pubsub.unsubscribe", function () {
		var a = rc("yt.pubsub.instance_");
		a && a.unsubscribe[fc](a, arguments)
	}, void 0);
	J("yt.pubsub.publish", Pe, void 0);
	J("yt.www.init", dg, void 0);
	J("yt.www.dispose", eg, void 0);
	De(k, "load", dg);
	De(k, "unload", eg);
	k.onerror = function (a, b, c) {
		var d = S("www-core-js") || S("www-core-new-js");
		if (! (cg || d.src[x]("/debug/") == -1)) {
			a: {
				try {
					eval("(0)()")
				} catch(e) {
					c = e.stack ? e.stack[t](/(.*):/g, "")[t](/\n/g, ",") : c;
					break a
				}
				c = void 0
			}
			Tf("jserror", "error=" + ba(a) + "&script=" + ba(b) + "&linenumber=" + ba(c) + "&url=" + ba(k[D][bc]));
			cg = f
		}
	};
	var gl = function (a, b) {
		a = b[v];
		var c = "";
		if ($e(a)) c = "rtl";
		else $e(a) || (c = "ltr");
		b.dir = c
	};
	J("goog.i18n.bidi.isRtlText", $e, void 0);
	J("goog.i18n.bidi.setDirAttribute", gl, void 0);
	J("yt.style.toggle", Pf, void 0);
	J("yt.style.setDisplayed", Kf, void 0);
	J("yt.style.isDisplayed", Lf, void 0);
	J("yt.style.setVisible", Nf, void 0);
	J("yt.net.ajax.sendRequest", U, void 0);
	J("yt.net.ajax.getRootNode", qf, void 0);
	J("yt.net.ajax.getNodeValue", rf, void 0);
	J("yt.net.delayed.register", function (a, b, c) {
		a = S(a);
		c = c || yc(a);
		c in tf || (tf[c] = []);
		tf[c][s]([a, b]);
		uf[c] = i;
		return c
	}, void 0);
	J("yt.net.delayed.load", vf, void 0);
	J("yt.net.delayed.markAsLoaded", function (a) {
		if (a in tf) uf[a] = f
	}, void 0);
	J("goog.dom.forms.getFormDataString", Xe, void 0);
	J("yt.uri.buildQueryData", me, void 0);
	J("yt.uri.appendQueryData", ne, void 0);
	J("yt.flash.isFlashVersionSupported", pe, void 0);
	J("yt.flash.canPlayV8Swf", function () {
		return pe(8, 0, 0)
	}, void 0);
	J("yt.flash.canPlayV9Swf", function () {
		return pe(9, 0, 0)
	}, void 0);
	J("yt.flash.canPlayH264Videos", function () {
		return pe(9, 0, 115)
	}, void 0);
	J("yt.flash.supportsPixelBender", function () {
		return pe(10, 0, 0)
	}, void 0);
	J("yt.net.cookies.set", ve, void 0);
	J("yt.net.cookies.get", we, void 0);
	var hl = wf.c();
	J("yt.UserPrefs", hl, void 0);
	J("yt.UserPrefs.Flags", V, void 0);
	J("yt.window.redirect", ag, void 0);
	J("yt.window.popup", bg, void 0);
	J("yt.www.displayLoading", fg, void 0);
	J("SWFObject", Uc, void 0);
	Uc[B].addParam = Uc[B].z;
	Uc[B].addVariable = Uc[B].i;
	Uc[B].setAttribute = Uc[B][z];
	Uc[B].write = Uc[B][Za];
	Uc[B].useExpressInstall = Uc[B].Ib;
	Vf($f);
	J("yt.www.watch.player.write", function (a, b, c, d, e, h, j) {
		e = e || 480;
		var r = h || 385,
			w = j || "#000000",
			E = 7,
			L = i,
			P = K("SWF_URL");
		j = K("SWF_ARGS");
		var la = K("SWF_EXPRESS_URL");
		h = K("SWF_GAM_URL");
		var Bb = K("SWF_IS_PLAYING_ALL"),
			db = K("SWF_SET_WMODE"),
			ma = K("SWF_AD_EURL"),
			Hf = tk();
		if (g == Hf && hk()) {
			var $g = kk(K("VIDEO_ID"));
			if ($g && $g > 20) {
				Hf = $g - 20;
				j.resume = "1"
			}
		}
		if (b) E = 0;
		else if (c) {
			E = c;
			L = f
		}
		b = new Uc(P, "movie_player", e, r, E, w);
		L && la && b.Ib(la);
		b.z("allowFullscreen", "true");
		if (k != k.top) {
			c = l.referrer[cc](0, 128);
			oe(c) || (j.framer = ba(c))
		}
		for (var Yj in j) b.i(Yj, j[Yj]);
		h && b.i("gam", h);
		Bb || b.i("playnext", 0);
		db && b.z("wmode", "opaque");
		ma && b.i("ad_eurl", ma);
		Hf && b.i("start", Hf);
		b.i("enablejsapi", 1);
		d && b.i("jsapicallback", d);
		b.z("AllowScriptAccess", "always");
		Ic("PLAYER_WRITTEN", b[Za](a));
		return b
	}, void 0);
	J("onYouTubePlayerReady", function () {
		ek = f;
		var a = S("movie_player");
		a[jb]("onStateChange", "handleWatchPagePlayerStateChange");
		a[jb]("onPlaybackQualityChange", "onPlayerFormatChanged");
		a[jb]("NEXT_CLICKED", "yt.www.watch.player.onPlayerNextClicked");
		a[jb]("SIZE_CLICKED", "yt.www.watch.player.onPlayerSizeClicked");
		a[jb]("NEXT_SELECTED", "yt.www.watch.player.onPlayerNextSelected");
		hk() && De(k, "beforeunload", lk)
	}, void 0);
	J("handleWatchPagePlayerStateChange", function (a) {
		if (a == 0) {
			if (K("LIST_AUTO_PLAY_ON")) if (a = K("LIST_PLAY_NEXT_URL")) {
				ag(a);
				return i
			}
			K("SWF_IS_PLAYING_ALL") && Lj()
		}
	}, void 0);
	J("onPlayerFormatChanged", function () {}, void 0);
	J("movie_player_DoFSCommand", function () {}, void 0);
	J("yt.www.watch.player.enableWideScreen", ok, void 0);
	J("yt.www.watch.player.enableVideoQualityDisplay", function () {}, void 0);
	J("yt.www.watch.player.onPlayerNextClicked", mk, void 0);
	J("yt.www.watch.player.onPlayerSizeClicked", function (a) {
		ok(a, f)
	}, void 0);
	J("yt.www.watch.player.onPlayerNextSelected", nk, void 0);
	J("yt.www.watch.player.seekTo", pk, void 0);
	J("yt.www.watch.player.openPopup", function (a, b, c) {
		var d = g;
		if (ek) {
			var e = S("movie_player");
			d = m[Ka](e.getCurrentTime());
			e.stopVideo()
		}
		a = "/watch_popup?v=" + a;
		if (K("POPOUT_AD_SLOTS")) a += "&pop_ads=" + K("POPOUT_AD_SLOTS");
		if (d && d > 10) a += "#t=" + d;
		bg(a, {
			width: b,
			height: c,
			resizable: f
		})
	}, void 0);
	J("yt.www.watch.player.openFullScreenPopup", qk, void 0);
	J("yt.www.watch.player.checkCurrentVideo", rk, void 0);
	J("yt.www.watch.player.trackAnnotationsEvent", uk, void 0);
	J("yt.www.watch.player.handleShare", vk, void 0);
	J("yt.www.watch.player.reportTiming", wk, void 0);
	J("yt.www.watch.player.processLocationHashSeekTime", tk, void 0);
	J("yt.www.watch.player.handleHashArgumentsOnWatchLoad", function () {
		var a = le(k[D][Ca][wb](1)),
			b = i;
		if (a.fav) {
			ij("addToFavesForm");
			delete a.fav;
			b = f
		}
		if (a.at) {
			delete a.at;
			b = f
		}
		if (a.query) {
			dk(a.query, a.page);
			b = f
		}
		if (b) k[D].hash = me(a)
	}, void 0);
	Jc("onYouTubePlayerReady", "handleWatchPagePlayerStateChange", "onPlayerFormatChanged", "movie_player_DoFSCommand");
	Kc(function () {
		if (ek) {
			var a = k[D][Ca][wb](1);
			if (a != fk) {
				fk = a;
				a = le(a);
				if (a.t && a.t != gk.t) {
					var b = sk(a.t);
					pk(b, i)
				} else if (a.at && a.at != gk.at) {
					b = sk(a.at);
					pk(b, i)
				}
				gk = a
			}
		}
	}, 1E3);
	J("yt.www.watch.actions.selectTab", Oi, void 0);
	J("yt.www.watch.sharing.reset", Gk, void 0);
	J("yt.www.watch.sharing.shareVideo", Hk, void 0);
	J("yt.www.watch.sharing.processShareVideo", Jk, void 0);
	J("yt.www.watch.sharing.handleShareVideo", Kk, void 0);
	J("yt.www.watch.sharing.closeShareVideo", function () {
		Lf("watch-share-video-div") ? Pf("watch-share-video-div") : Pf("shareMessageQuickDiv");
		Fk("fewer-options", "more-options");
		Fk("watch-share-services-expanded", "watch-share-services-collapsed");
		Pf("shareVideoResult");
		M(function () {
			X("shareVideoResult")
		}, 3E3)
	}, void 0);
	J("yt.www.watch.sharing.logService", Ik, void 0);
	J("yt.www.watch.sharing.hideAndShow", Fk, void 0);
	J("yt.www.watch.favorites.add", ij, void 0);
	J("yt.www.watch.favorites.remove", function (a) {
		W("watch-add-faves");
		X("watch-remove-faves");
		a = l[Ba][a];
		var b = function () {
			X("watch-remove-faves-div")
		};
		b = {
			postBody: Xe(a),
			onComplete: b,
			onException: b
		};
		U(a[ec], b);
		S("watch-action-favorite-link")[Ta]()
	}, void 0);
	J("yt.www.watch.playlists.add", function (a) {
		Oi("watch-tab-playlists");
		Pi();
		if (K("LOGGED_IN")) {
			if (xk) n(S("addToPlaylistDiv"), xk);
			else xk = S("addToPlaylistDiv")[u];
			X("addToPlaylistResult");
			W("addToPlaylistDiv");
			U("/watch_ajax?video_id=" + a + "&action_get_playlists_component=1", {
				method: "GET",
				update: "addToPlaylistDiv"
			})
		} else W("addToPlaylistLogin")
	}, void 0);
	J("yt.www.watch.flagging.report", function (a) {
		Yc(jj, X);
		Oi("watch-tab-flag");
		if (K("LOGGED_IN")) {
			W("inappropriateVidDiv");
			S("inappropriateVidDiv")[u][nc]()[x]("<div") == -1 && kj(a)
		} else W("inappropriateMsgsLogin")
	}, void 0);
	J("yt.www.watch.downloads.show", function () {
		Oi("watch-tab-download");
		W("watch-tab-download-body")
	}, void 0);
	J("yt.www.watch.stats.show", function () {
		var a = "/watch_ajax?v=" + K("VIDEO_ID") + "&action_get_statistics_and_data=1&l=" + K("VIDEO_LANGUAGE");
		S("watch-tab-stats-body")[u][nc]()[x]("<div") == -1 && U(a, {
			method: "GET",
			update: "watch-tab-stats-body"
		})
	}, void 0);
	J("yt.www.watch.about.editSubscription", function (a, b, c) {
		Ni(a, "username", b, "", "", 2, fa, fa, f, c)
	}, void 0);
	J("yt.www.watch.about.generateEmbed", Gi, void 0);
	J("yt.www.watch.about.getEmbedSize", Li, void 0);
	J("yt.www.watch.about.subscribe", function (a, b, c, d, e, h) {
		if (K("LOGGED_IN")) {
			var j = {};
			if (d) j.show_recommendations = 1;
			if (e) j.show_sub_channels = 1;
			Ni(a, b, c, "subscribeDiv", "unsubscribeDiv", 0, h, j, f)
		} else {
			a = S("subscribeLoginInvite");
			W(a)
		}
	}, void 0);
	J("yt.www.watch.about.subscribeWatch5", function (a, b, c) {
		if (K("LOGGED_IN")) Ni(a, b, c, "subscribeDiv", "editSubscriptionDiv", 0, fa, {
			watch5: f
		});
		else {
			a = S("alerts");
			n(a, '<div id="subscribeMessage">' + S("watch-actions-logged-out")[u] + "</div>");
			W(a)
		}
	}, void 0);
	J("yt.www.watch.about.toggleCustomizeEmbed", function (a, b) {
		var c = i,
			d = S("watch-customize-embed-div");
		if (b) {
			W(d);
			c = f
		} else {
			Pf(d);
			c = Lf(d)
		}
		if (c) if (d[u][nc]()[x]("<div") == -1) {
			b = {
				method: "GET",
				onComplete: function () {
					Hi()
				},
				update: "watch-customize-embed-div"
			};
			U("/watch_ajax?action_customize_embed=1" + (a ? "&wide=1" : "") + (K("IS_HD_AVAILABLE") ? "&hd=1" : ""), b)
		}
	}, void 0);
	J("yt.www.watch.about.unsubscribe", function (a, b, c, d) {
		Ni(a, b, c, "unsubscribeDiv", "subscribeDiv", 1, d)
	}, void 0);
	J("yt.www.watch.autoshare.triggerAutosharePromo", function (a) {
		if (K("SHOW_AUTOSHARE")) {
			W("autoshare-promo-" + a);
			Ic("SHOW_AUTOSHARE", i)
		}
	}, void 0);
	J("yt.www.watch.autoshare.dismissAutosharePromo", function (a) {
		var b = wf.c();
		b.O(V.Ra, f);
		b[Nb]();
		Ic("SHOW_AUTOSHARE", i);
		X("autoshare-promo-" + a);
		X("autoshare-widget-" + a + "-wizard")
	}, void 0);
	J("yt.www.watch.autoshare.initAutoshareWidget", gj, void 0);
	J("yt.www.watch.autoshare.toggleShareToService", function (a) {
		a = S("autoshare-widget-service-checkbox-" + a);
		xa(a, !a[Gb])
	}, void 0);
	J("yt.www.watch.autoshare.updateMessageCount", function (a, b) {
		if (b[v][A] > 130) o(b, b[v][La](0, 130));
		var c = S(b.id + "-counter");
		if (c) n(c, 130 - b[v][A]);
		gl(a, b)
	}, void 0);
	J("yt.www.watch.autoshare.customizePost", function (a) {
		Lc(fj);
		X("autoshare-widget-" + a + "-auto");
		W("autoshare-widget-" + a + "-oneoff");
		if (a = S("autoshare-widget-" + a + "-message")) {
			a[cb]();
			a[hb]()
		}
	}, void 0);
	J("yt.www.watch.autoshare.cancelPost", function (a) {
		Lc(fj);
		X("autoshare-widget-" + a + "-auto");
		X("autoshare-widget-" + a + "-oneoff");
		W("autoshare-widget-" + a + "-cancelling");
		o(S("autoshare-widget-" + a + "-cancelled-input"), "true");
		var b = {
			method: "POST",
			postBody: Xe(l[Ba]["autoshareWidgetForm-" + a]),
			onComplete: function () {
				X("autoshare-widget-" + a + "-cancelling");
				W("autoshare-widget-" + a + "-cancelled")
			}
		};
		U("/autoshare?action_ajax_share=1&cancelled=1", b)
	}, void 0);
	J("yt.www.watch.autoshare.share", function (a) {
		var b = i;
		for (var c in ej) {
			var d = S("autoshare-widget-service-checkbox-" + c),
				e = T("*", "autoshare-widget-service-auto-" + c);
			if (d[Gb]) {
				Yc(e, W);
				b = f
			} else Yc(e, X)
		}
		if (b) {
			X("autoshare-widget-" + a + "-auto");
			X("autoshare-widget-" + a + "-oneoff");
			W("autoshare-widget-" + a + "-sharing");
			b = {
				method: "POST",
				postBody: Xe(l[Ba]["autoshareWidgetForm-" + a]),
				onComplete: function () {
					X("autoshare-widget-" + a + "-sharing");
					W("autoshare-widget-" + a + "-shared")
				}
			};
			U("/autoshare?action_ajax_share=1", b)
		} else da("No services selected.")
	}, void 0);
	J("yt.www.watch.discovery.handleExpand", function (a) {
		if (Z(a, "discoverbox-type") == "channel") {
			var b = Z(a, "discoverbox-username");
			b && hj(b)
		}(a = Z(a, "discoverbox-preview")) && Pf(a)
	}, void 0);
	J("yt.www.watch.discovery.loadChannelVideos", hj, void 0);
	J("yt.www.watch.ads.handleSetCompanion", Ri, void 0);
	J("yt.www.watch.ads.handleSetCompanionForInstream", Si, void 0);
	J("yt.www.watch.ads.handleSetCompanionForLongform", Ti, void 0);
	J("yt.www.watch.ads.handleSetCompanionForFreewheel", Ui, void 0);
	J("yt.www.watch.ads.handleHideCompanion", Vi, void 0);
	J("yt.www.watch.ads.handleHideCompanionForInstream", Wi, void 0);
	J("yt.www.watch.ads.disablePopoutButton", $i, void 0);
	J("yt.www.watch.ads.enablePopoutButton", aj, void 0);
	J("yt.www.watch.ads.handleCloseMpuCompanion", Xi, void 0);
	J("yt.www.watch.ads.handleAdLoaded", Yi, void 0);
	J("yt.www.watch.ads.updatePopoutAds", Zi, void 0);
	J("yt.www.watch.ads.handleSetAfvCompanionVars", bj, void 0);
	J("yt.www.watch.ads.handleShowAfvCompanionAdDiv", cj, void 0);
	J("yt.www.watch.ads.handleHideAfvInstreamCompanionAdDiv", dj, void 0);
	J("yt.www.watch.quicklist.videolist", vj, void 0);
	J("yt.www.watch.quicklist.appendTokenForQueue", Cj, void 0);
	J("yt.www.watch.quicklist.mouseOverQuickAdd", function (a) {
		if (!a[Eb][$a]("Done")) {
			Q(a, "QLIconImg");
			Q(a, "QLIconImgDone");
			O(a, "QLIconImgOver")
		}
	}, void 0);
	J("yt.www.watch.quicklist.mouseOutQuickAdd", function (a) {
		if (!a[Eb][$a]("Done")) {
			Q(a, "QLIconImgOver");
			Q(a, "QLIconImgDone");
			O(a, "QLIconImg")
		}
	}, void 0);
	J("yt.www.watch.quicklist.quicklistAddedUpdateImage", uj, void 0);
	J("yt.www.watch.quicklist.getQuicklistInlist", Oj, void 0);
	J("yt.www.watch.quicklist.onQuickAddClick", function (a, b, c, d) {
		yj(a, b, c, d);
		return i
	}, void 0);
	J("yt.www.watch.quicklist.clickedAddIcon", Ck, void 0);
	J("openFull", qk, void 0);
	J("checkCurrentVideo", rk, void 0);
	J("trackAnnotationsEvent", uk, void 0);
	J("reportFlashTiming", wk, void 0);
	J("shareVideoFromFlash", Kk, void 0);
	J("setCompanion", Ri, void 0);
	J("setInstreamCompanion", Si, void 0);
	J("setLongformCompanion", Ti, void 0);
	J("setFreewheelCompanion", Ui, void 0);
	J("closeInPageAdIframe", Vi, void 0);
	J("hideInstreamCompanion", Wi, void 0);
	J("disablePopout", $i, void 0);
	J("enablePopout", aj, void 0);
	J("closeMpuCompanion", Xi, void 0);
	J("handleAdLoaded", Yi, void 0);
	J("updatePopAds", Zi, void 0);
	J("setAfvCompanionVars", bj, void 0);
	J("showAfvCompanionAdDiv", cj, void 0);
	J("hideAfvInstreamCompanionAdDiv", dj, void 0);
	J("show_ppv_in_yva_spot", ng, void 0);
	J("requestPyvAds", og, void 0);
	J("pyvHomeRequestAds", og, void 0);
	J("pyvBrowseRequestAds", ug, void 0);
	Jc("openFull", "checkCurrentVideo", "trackAnnotationsEvent", "reportFlashTiming", "shareVideoFromFlash", "setCompanion", "setInstreamCompanion", "setLongformCompanion", "setFreewheelCompanion", "closeInPageAdIframe", "hideInstreamCompanion", "disablePopout", "enablePopout", "closeMpuCompanion", "handleAdLoaded", "updatePopAds", "setAfvCompanionVars", "showAfvCompanionAdDiv", "hideAfvInstreamCompanionAdDiv", "show_ppv_in_yva_spot", "requestPyvAds", "pyvHomeRequestAds", "pyvBrowseRequestAds");
	J("yt.www.embeds.CustomSizes", Kg, void 0);
	J("yt.www.embeds.CustomSizesWide", Lg, void 0);
	J("yt.www.ratings.UTRating", Zg, void 0);
	Zg[B].showStars = Zg[B].Db;
	Zg[B].setStars = Zg[B].Od;
	Zg[B].clearStars = Zg[B].Wc;
	Zg[B].resetStars = Zg[B].Jd;
	J("yt.www.recos.removeRecommendation", function (a) {
		X("reco-" + a);
		a = ne("/remove_recommendation_ajax", {
			video_id: a
		});
		U(a, {
			method: "GET"
		});
		return i
	}, void 0);
	J("yt.www.search.toggleAdvSearch", function (a, b, c, d, e, h, j, r, w, E, L, P, la, Bb, db) {
		Pf("search-advanced-form");
		if (a == "1") {
			var ma = S("additional-search-option-expander");
			Lf(S("search-advanced-form")) ? O(ma, "collapsed") : Q(ma, "collapsed")
		}
		if (S("search-advanced-form")[u][nc]()[x]("<form") != -1) return i;
		ma = {};
		ma.action_advanced = "1";
		ma.simple_mode = a;
		ma.search_query = b;
		ma.search_type = c;
		ma.geo_name = d;
		ma.geo_latlong = e;
		ma.search_duration = h;
		ma.search_hl = j;
		ma.search_sort = w;
		ma.search_uploaded = E;
		if (db) ma.safe_search_on = 1;
		if (L) ma.high_definition = 1;
		if (P) ma.annotations = 1;
		if (la) ma.closed_captions = 1;
		if (Bb) ma.partner = 1;
		a = ne("/results_ajax", ma);
		r = r[C](",");
		for (b = 0; b < r[A]; b++) a += "&search_category=" + r[b];
		U(a, {
			method: "GET",
			update: "search-advanced-form"
		});
		return i
	}, void 0);
	J("yt.www.search.toggleWonderwheel", function () {
		if (!ch) {
			eh();
			return i
		}
		if (k.wonderwheelLoaded) dh();
		else {
			O(S("search-related-terms"), "wonderwheel-related");
			W("wonderwheel-container");
			k.loadInitialWonderWheel()
		}
		return i
	}, void 0);
	J("yt.www.search.hideWonderwheel", dh, void 0);
	J("yt.www.comments.viewing.toggleComments", function (a) {
		R(a, "yt-uix-expander-collapsed") ? Ag() : Bg("recent_comments", K("COMMENTS_URL"), K("COMMENTS_COUNT"))
	}, void 0);
	J("yt.www.comments.viewing.expand", xg, void 0);
	J("yt.www.comments.viewing.collapse", yg, void 0);
	J("yt.www.comments.viewing.toggleOptions", zg, void 0);
	J("yt.www.comments.viewing.rotateVideoResponses", function (a, b, c, d) {
		vf("video_bar");
		var e = S("video-bar-container-box-" + b);
		b = S("video-bar-long-box-" + b);
		b = ga(b[F].marginLeft, 10);
		c = (c - 1) * e[Fb] * -1;
		if (a && b > c || !a && b < 0) d.W(b, b + (a ? -1 : 1) * e[Fb])
	}, void 0);
	J("yt.www.comments.viewing.handlePanelExpanded", Bg, void 0);
	J("yt.www.comments.viewing.savePanelState", Ag, void 0);
	J("yt.www.comments.viewing.getCommentsPageUrl", Cg, void 0);
	J("yt.www.comments.viewing.onShowMoreComments", Dg, void 0);
	J("yt.www.comments.viewing.pageNum", Eg, void 0);
	J("yt.www.comments.viewing.onWatchCommentsShowMore", function () {
		Eg += 1;
		var a = K("VIDEO_ID"),
			b = K("COMMENTS_THRESHHOLD"),
			c = K("COMMENTS_FILTER"),
			d = K("COMMENTS_PAGE_SIZE"),
			e = K("COMMENTS_COUNT"),
			h = K("COMMENTS_MAX_PAGE");
		Dg(Cg(a, Eg, b, c, d), d, Eg, e, h)
	}, void 0);
	J("yt.www.comments.writing.showReplyForm", function (a, b, c, d) {
		if (!K("LOGGED_IN")) {
			ag("/login", {
				next: k[D][bc]
			});
			return i
		}
		Hg(a, b, c, d)
	}, void 0);
	J("yt.www.comments.writing.hideReplyForm", function (a) {
		W("reply_" + a);
		X("div_" + a)
	}, void 0);
	J("yt.www.comments.writing.fillReplyForm", Hg, void 0);
	J("yt.www.comments.writing.postThreadedComment", function (a) {
		if (!K("LOGGED_IN")) return i;
		var b = l[Ba][a];
		a = b.comment;
		var c = b.add_comment_button;
		if (a[v][A] == 0 || a[v] == g) {
			da(N("COMMENT_EMPTY_POPUP"));
			p(a, i);
			a[cb]();
			return i
		}
		if (a[v][A] > 500) {
			da(N("COMMENT_TOOLONG_POPUP"));
			p(a, i);
			a[cb]();
			return i
		}
		var d = b[ec];
		b = {
			postBody: Xe(b),
			onComplete: Ig
		};
		U(d, b);
		o(c, N("COMMENT_ADDING"));
		p(c, f);
		p(a, f);
		return f
	}, void 0);
	J("yt.www.comments.writing.updateCharCount", function (a, b, c) {
		a = S(a);
		b = S(b);
		c = S(c);
		var d = c[Vb]("maxchars");
		if (c[v][A] > d) {
			if (b[u] != N("COMMENT_EXCEEDED")) n(b, N("COMMENT_EXCEEDED"));
			o(a, c[v][A] - d)
		} else {
			if (b[u] != N("COMMENT_REMAINING")) n(b, N("COMMENT_REMAINING"));
			o(a, d - c[v][A])
		}
	}, void 0);
	J("yt.www.comments.moderating.approve", function (a, b, c, d) {
		K("LOGGED_IN") && U("/comment_servlet?field_approve_comment=1", {
			postBody: "comment_id=" + a + "&comment_type=" + b + "&entity_id=" + c + "&" + d,
			onComplete: function () {
				da(N("COMMENT_APPROVED"))
			}
		});
		return i
	}, void 0);
	J("yt.www.comments.moderating.remove", function (a, b, c, d, e, h) {
		K("LOGGED_IN") && U("/comment_servlet?remove_comment=1&comment_type=" + d + "&entity_id=" + e, {
			postBody: "deleter_user_id=" + b + "&comment_id=" + c + "&" + h,
			onComplete: function () {
				X(a)
			}
		});
		return i
	}, void 0);
	J("yt.www.comments.moderating.unretract", function (a, b, c, d, e, h) {
		K("LOGGED_IN") && U("/comment_servlet?unretract_comment=1", {
			postBody: "comment_id=" + c + "&comment_type=" + d + "&entity_id=" + e + "&v=" + e + "&" + h,
			onComplete: function () {
				X(a);
				W(b)
			}
		});
		return i
	}, void 0);
	J("yt.www.comments.spam.mark", function (a, b) {
		U("/comment_servlet?mark_comment_as_spam=" + a + "&entity_id=" + b, {});
		yg(a);
		X("reply_comment_form_id_" + a, "comment_body_" + a);
		W("comment_spam_bug_" + a)
	}, void 0);
	J("yt.www.comments.voting.displayLoginMsg", function (a, b) {
		n(S("comment_msg_" + a), b ? N("COMMENT_LOGIN") : "")
	}, void 0);
	J("yt.www.comments.voting.vote", Fg, void 0);
	J("yt.www.comments.voting.voteCollapsed", function (a, b, c, d) {
		var e = S("comment_vote_" + a);
		R(e, "watch-comment-voting-off") || (Lf("comment_body_" + a) ? Fg(a, b, c, d) : xg(a))
	}, void 0);
	J("yt.www.suggest.install", function (a, b, c, d, e, h, j, r) {
		jh = a;
		$ = b;
		Kh = c;
		Eh = d;
		Fh = e;
		Jh = aa(h);
		Ih = j;
		Mh = r;
		if (Th && k[D][bc][x]("/watch?") != -1) {
			Lh = 4;
			Eh = ""
		}
		ph = /^(zh-(CN|TW)|ja|ko)$/ [Fa](c);
		a = "yt";
		if (k[D][Sb] == "/shows" || k[D][Sb] == "/show") a = "yt_sh";
		else if (k[D][Sb] == "/movies") a = "yt_mv";
		oh = "suggestqueries.google.com/complete/search?hl=" + c + "&ds=" + a + "&client=youtube&hjson=t&jsonp=window.yt.www.suggest.handleResponse";
		De(jh, "submit", ki);
		$[z]("autocomplete", "off");
		De($, "blur", $h);
		$.onkeyup_original = $.onkeyup;
		if ($[jb]) {
			if (Qh || Oh) $.onkeydown = ei;
			else $.onkeypress = ei;
			$.onkeyup = fi
		} else {
			De($, Ph ? "keydown" : "keypress", ei);
			De($, "keyup", fi)
		}
		hh = fh = gh = $[v];
		ih = hi($);
		if (j != 2 && k[D][Sb] == "/") hh = fh = "";
		kh = S("completeTable");
		c = i;
		if (kh) c = f;
		else kh = l[y]("table");
		kh.id = "completeTable";
		kh.cellSpacing = kh.cellPadding = "0";
		lh = kh[F];
		wa(kh, "google-ac-m");
		Zh();
		c || l[G][q](kh);
		wh = S("completeIFrame");
		c || (wh = l[y]("iframe"));
		xh = wh[F];
		wh.id = "completeIFrame";
		xh.zIndex = "1999999";
		xh.position = "absolute";
		za(xh, "block");
		xh.borderWidth = 0;
		c || l[G][q](wh);
		Xh();
		Vh();
		De(k, "resize", Xh);
		De(k, "pageshow", Uh);
		ph && Kc(vi, 10);
		mh = Yh("aq", "f", i);
		nh = Yh("oq", gh, f);
		if (Kh in Dh) {
			Hh = f;
			Eh = ""
		}
		ji()
	}, void 0);
	J("yt.www.suggest.handleResponse", function (a) {
		yh > 0 && yh--;
		if (a[0] == gh) {
			if (Ah) {
				Lc(Ah);
				Ah = g
			}
			rh = a[0];
			ui(a[1]);
			if (Hh) ti(gh, g, "g", "g", Jh, mi("http://www.google." + (Dh[Kh] || "com") + "/search?source=youtube-suggest" + (Ih >= 0 ? "-" + Ih : "") + "&hl=" + Kh + "&q=" + ba(rh), f));
			vh = -1;
			(th = kh[dc]) && th[A] > 0 ? qi() : Zh()
		}
	}, void 0);
	J("yt.www.suggest.setFieldValue", ai, void 0);
	J("yt.www.suggest.enable", wi, void 0);
	J("yt.www.suggest.disable", xi, void 0);
	J("yt.www.thumbnailDelayLoad.fudgeFactor", 175, void 0);
	J("yt.www.thumbnailDelayLoad.loadAllAtOnce", i, void 0);
	J("yt.www.thumbnailDelayLoad.testImage", Bi, void 0);
	J("yt.www.thumbnailDelayLoad.loadImages", Ci, void 0);
	J("yt.www.ads.pyvWatchAfcCallback", function (a) {
		if (a[A] == 0) {
			if (K("PYV_TRACK_RELATED_CTR")) {
				kg("watch-related-discoverbox", i);
				kg("watch-channel-videos-panel", i)
			}
		} else {
			var b = S("watch-channel-videos-panel");
			b && !K("IS_BRANDED_WATCH") && O(b, "yt-uix-expander-collapsed");
			jg(a[0], lg)
		}
	}, void 0);
	J("yt.www.ads.pyvHomeAfcCallback", mg, void 0);
	J("yt.www.ads.showPpvAdInYvaSpot", ng, void 0);
	J("yt.www.ads.pyvHomeRequestAds", og, void 0);
	J("yt.www.ads.pyvBrowseRequestAds", ug, void 0);
	J("MooFx", {}, void 0);
	J("MooFx.Base", df, void 0);
	df[B].clearTimer = df[B].la;
	df[B].custom = df[B].W;
	df[B].set = df[B].k;
	df[B].show = df[B].show;
	df[B].hide = df[B].ra;
	J("MooFx.BasicEffect", ef, void 0);
	J("MooFx.Opacity", ff, void 0);
	ff[B].toggle = ff[B].ce;
	ff[B].hide = ff[B].ra;
	J("yt.www.xsrf.dynamicAppendSessionToken", Lk, void 0);
	J("yt.www.xsrf.sessionExcludedForms", Mk, void 0);
	J("yt.www.xsrf.populateSessionToken", function () {
		for (var a = 0; a < l[Ba][A]; a++) {
			for (var b = i, c = 0; c < Mk[A]; c++) if (l[Ba][a][qb] == Mk[c]) b = f;
			c = l[Ba][a];
			if (c.method[nc]() == "post" && b == i) {
				b = i;
				for (var d = 0; d < c.elements[A]; d++) if (c.elements[d][qb] == K("XSRF_FIELD_NAME")) b = f;
				b || Lk(c)
			}
		}
	}, void 0);
	J("yt.www.masthead.loadPicker", function (a, b) {
		var c = S(a);
		if (c) b ? W(c) : Pf(c);
		else {
			b = "/masthead_ajax?action_get_" + a[t]("-", "_") + "=1";
			U(b, {
				method: "GET",
				update: a + "-container",
				onComplete: function () {
					W(a);
					k.scrollTo(0, 1E4)
				}
			});
			W(a + "-loading")
		}
	}, void 0);
	J("yt.www.masthead.searchBarFocusTest", Tg, void 0);
	J("yt.www.home.bootstrap", Og, void 0);
	J("yt.www.home.queueHomepageFunction", function (a) {
		if (k.php_support) a();
		else {
			Ng[s](a);
			Og()
		}
	}, void 0);
	J("yt.www.home.ads.mastheadAd", Pg, void 0);
	Pg[B].collapse_ad = Pg[B].collapse;
	Pg[B].expand_ad = Pg[B].expand;
	J("yt.www.home.ads.workaroundLoad", function () {
		Qg = f
	}, void 0);
	J("yt.www.home.ads.workaroundIE", function (a) {
		if (! (Rg || !Qg)) {
			Rg = f;
			M(function () {
				a[cb]()
			}, 0)
		}
	}, void 0);
	J("yt.www.home.ads.workaroundReset", function () {
		Rg = i
	}, void 0);
	J("yt.tracking.track", Tf, void 0);
	J("yt.tracking.reachability", function () {
		var a = new Date,
			b = m[Ub]();
		a = "/gen_204?atyp=edge&id=" + a[tb]()[Ab](32) + b[Ab](16);
		if (b >= 0.5) {
			Sf("http://coretest.ytimg.com" + a);
			Sf("http://alltest.ytimg.com" + a)
		} else {
			Sf("http://alltest.ytimg.com" + a);
			Sf("http://coretest.ytimg.com" + a)
		}
	}, void 0);
	J("yt.analytics.eventsPageTracker", i, void 0);
	J("yt.analytics.urchinTracker", function () {}, void 0);
	J("yt.analytics.trackEvent", hf, void 0);
	if (k.yt.timing && !K("AJAX_MODE")) {
		J("yt.timing.report", Y.xb, void 0);
		J("yt.timing.maybeReport", Y.ya, void 0);
		J("yt.timing.handlePageLoad", Y.lb, void 0);
		J("yt.timing.handleThumbnailLoad", Y.vd, void 0);
		Oe("init", Y.lb)
	}
	J("yt.www.core.toggleSimpleTooltip", function (a, b) {
		a = S(a);
		for (a[H][F].zIndex = b ? "100" : "0"; a;) {
			if (R(a, "tooltip-wrapper-box") || R(a, "reverse-tooltip-wrapper-box")) {
				Kf(a, b);
				for (a = a[gb]; a;) {
					if (R(a, "tooltip-box") || R(a, "tooltip-box-bot")) a[F].backgroundImage = 'url("http://s.ytimg.com/yt/img/tooltip-vfl56131.gif")';
					if (R(a, "reverse-tooltip-box") || R(a, "reverse-tooltip-box-bot")) a[F].backgroundImage = 'url("http://s.ytimg.com/yt/img/tooltip-reverse-vfl88394.gif")';
					a = a[rb]
				}
				break
			}
			a = a[rb]
		}
	}, void 0);
	J("yt.www.subscriptions.edit.onUpdateSubscription", function (a, b, c, d) {
		c = c || "";
		var e = i;
		if ((b = S("subscription_level_unsubscribe")) && b[Gb]) e = f;
		b = Xe(S("subscription_level_uploads" + c).form);
		U("/ajax_subscriptions?" + b, {
			postBody: "session_token=" + a,
			onComplete: function (h) {
				var j = S("subscribeMessage" + c)[gb];
				h = rf(h[Wb], "html_content");
				if ("textContent" in j) j.textContent = h;
				else j.data = h;
				X("edit_subscription_wrapper" + c);
				X("edit_subscription_arrow" + c);
				W("subscribeMessage" + c);
				if (c) {
					ta(S("edit_subscription_opener" + c)[F], "");
					M(function () {
						X("subscribeMessage" + c)
					}, 5E3)
				}
				if (e) {
					h = !!S("position-edit-subscription-in-channel");
					j = !!S("position-edit-subscription-in-old-channel");
					if (h) {
						var r = S("channel-body");
						h = T("div", "subscribe-div", r);
						r = T("div", "unsubscribe-div", r);
						Yc(h, function (w) {
							Pf(w)
						});
						Yc(r, function (w) {
							Pf(w)
						})
					}
					if (j) {
						X("unsubscribeDiv");
						W("subscribeDiv")
					}
					d()
				}
			}
		})
	}, void 0);
	J("yt.www.subscriptions.edit.onCancelUpdateSubscription", function (a) {
		a = a || "";
		X("edit_subscription_wrapper" + a);
		X("edit_subscription_arrow" + a);
		if (a) ta(S("edit_subscription_opener" + a)[F], "");
		X("alerts")
	}, void 0);
	J("yt.www.subscriptions.onSubscribeFromChannelSuccess", function (a) {
		var b = S("channel-body"),
			c = T("div", "subscribe-div", b);
		b = T("div", "unsubscribe-div", b);
		Yc(c, function (d) {
			Pf(d)
		});
		Yc(b, function (d) {
			Pf(d)
		});
		(c = S("position-edit-subscription-in-channel")) || (c = S("position-edit-subscription-in-old-channel"));
		b = S("edit_subscription_container");
		n(c, b[u]);
		if (a) {
			a = T("div", "subscription_save_as_default", c)[0];
			c = T("div", "subscription_level_unsubscribe", c)[0];
			Pf(a);
			Pf(c)
		}
	}, void 0);
	Jc("yt", "goog", "SWFObject", "MooFx", "_gel", "_hasclass", "_addclass", "_removeclass", "_showdiv", "_hidediv", "_ajax");
	Vf(fl);
	J("yt.www.masthead.extended.redirectWithNewParam", function (a, b) {
		var c, d;
		c = k[D][bc];
		c = c[C]("#");
		d = c[A] == 2 ? "#" + c[1] : "";
		c = c[0];
		var e = c[$a](/[\?&]\w+=[^&#]*/g),
			h = {};
		if (e) for (var j = 0; j < e[A]; ++j) {
			e[j] = e[j][C]("=");
			h[e[j][0][cc](1)] = ka(e[j][1][t](/\+/g, "%20"))
		}
		h[b] = a;
		h["persist_" + b] = "1";
		c = c[C]("?");
		c = c[0];
		ag(c, h, d)
	}, void 0);
	J("yt.www.masthead.extended.onSafetyModeChange", function () {
		var a = S("safety-mode-lock-button"),
			b = S("safety-mode-on");
		if (a && b) b[Gb] ? _removeclass(a, "yt-button-disabled") : _addclass(a, "yt-button-disabled")
	}, void 0);
	J("yt.www.comments.extended.saveCommentOptions", function () {
		if (S("commentfilter")[Gb] != K("COMMENTS_OPTIONS_FILTER_STATE") || S("commentthreshold")[v] != K("COMMENTS_OPTIONS_THRESHHOLD_STATE")) {
			fg("recent_comments");
			Ic("COMMENTS_OPTIONS_FILTER_STATE", S("commentfilter")[Gb]);
			Ic("COMMENTS_OPTIONS_THRESHHOLD_STATE", S("commentthreshold")[v]);
			U("/watch_ajax?v=" + K("COMMENTS_OPTIONS_VIDEO_ID") + "&amp;saveprefs=yes&amp;action_get_comments=1&amp;p=1&amp;page_size=" + K("COMMENTS_OPTIONS_PAGE_SIZE") + "&amp;commentthreshold=" + S("commentthreshold")[v] + "&amp;commentfilter=" + Number(S("commentfilter")[Gb]), {
				method: "GET",
				update: "recent_comments"
			});
			Eg = 1;
			if (S("watch-comment-count")) n(S("watch-comment-count"), m.min(K("COMMENTS_OPTIONS_PAGE_SIZE"), K("COMMENTS_OPTIONS_COMMENT_COUNT")));
			K("COMMENTS_OPTIONS_PAGE_SIZE") < K("COMMENTS_OPTIONS_COMMENT_COUNT") && W("watch-comments-show-more-button", "watch-comments-view-all-span");
			n(S("more-comments"), "")
		}
		zg("")
	}, void 0);
	J("yt.www.watch.annotations.setLayerToken", Ok, void 0);
	J("yt.www.watch.annotations.toggleAnnotationsEditor", function () {
		if (! (typeof K("IV_EDITMODULE") == "undefined" || typeof K("IV_NON_EDITMODULE") == "undefined")) {
			var a = S("movie_player"),
				b = S("annotations-editor-button");
			if (R(b, "annotations-editor-on")) {
				a.enableModule("iv_module", K("IV_NON_EDITMODULE"));
				Q(b, "annotations-editor-on");
				O(b, "annotations-editor-off")
			} else {
				a.enableModule("iv_module", K("IV_EDITMODULE"));
				Q(b, "annotations-editor-off");
				O(b, "annotations-editor-on")
			}
			a = wf.c();
			R(b, "annotations-editor-on") ? a.yb(V.ha, f) : a.yb(V.ha, i);
			a[Nb]()
		}
	}, void 0);
	J("yt.www.watch.annotations.showCollabAnnotationsLinks", function () {
		X("collab_annotations_button");
		W("collab-annotations-links")
	}, void 0);
	J("yt.www.watch.about.extended.applyUserPrefs", Hi, void 0);
	J("yt.www.watch.about.extended.onChangeColor", Di, void 0);
	J("yt.www.watch.about.extended.onChangeSize", Ei, void 0);
	J("yt.www.watch.about.extended.onChangeBorder", function (a) {
		var b = wf.c();
		b.O(V.I, !!a);
		b[Nb]();
		Ji();
		Fi()
	}, void 0);
	J("yt.www.watch.about.extended.onChangeRelated", function (a) {
		var b = wf.c();
		b.O(V.U, !a);
		b[Nb]()
	}, void 0);
	J("yt.www.watch.about.extended.onChangeDelayedCookies", function (a) {
		var b = wf.c();
		b.H(V.T, a);
		b[Nb]()
	}, void 0);
	J("yt.www.watch.about.extended.onChangeDefaultHd", function (a) {
		var b = wf.c();
		b.H(V.S, a);
		b[Nb]();
		a && Ei("large")
	}, void 0);
	J("yt.www.watch.flagging.extended.onFlagVideoCheckboxClicked", function () {
		Sk("", "selectedFlagReason")
	}, void 0);
	J("yt.www.watch.flagging.extended.onFlagAnnoCheckboxClicked", function () {
		Sk("anno_", "selectedAnnoFlagReason")
	}, void 0);
	J("yt.www.watch.flagging.extended.flagReasonSelection", function (a, b, c, d, e, h) {
		var j = S("flag_checkbox");
		if (j) xa(j, f);
		Vk("selectedFlagReason", a, b, c, d);
		Rk("flag_");
		Pk("flag_", e, h)
	}, void 0);
	J("yt.www.watch.flagging.extended.flagAnnoReasonSelection", function (a, b, c, d, e, h) {
		var j = S("flag_anno_checkbox");
		if (j) xa(j, f);
		Vk("selectedAnnoFlagReason", a, b, c, d);
		Rk("flag_anno_");
		Pk("flag_anno_", e, h)
	}, void 0);
	J("yt.www.watch.flagging.extended.processFlagForm", function (a, b) {
		if (a) {
			var c = S("flag_checkbox"),
				d = S("flag_anno_checkbox");
			c[Gb] || Wk(a);
			d[Gb] || Xk(a);
			c = a.flag_reason[v];
			d = a.flag_sub_reason[v];
			var e = a.flag_anno_reason[v],
				h = a.flag_anno_sub_reason[v];
			if (c == "" && e == "") Pf("flag_Error");
			else {
				if (c != "") if (!cl("", c, d)) return;
				if (e != "") if (!cl("_anno", e, h)) return;
				bl(c, d, e, h);
				S("inappropriateVidDiv") ? Pf("inappropriateVidDiv") : Pf("inappropriateMainDiv");
				c = function () {
					if (b) playnav.selectPanel("flag", {
						success: f
					});
					else S("inappropriateVidDiv") ? X("inappropriateVidDiv") : X("inappropriateMainDiv")
				};
				U(a[ec], {
					postBody: Xe(a),
					onComplete: c,
					onException: c
				});
				n(S("selectedFlagReason"), "- " + N("FLAG_DEFAULT") + " -");
				Qk(S("selectedFlagReason"));
				Rk("flag_");
				n(S("selectedAnnoFlagReason"), "- " + N("FLAG_DEFAULT") + " -");
				Qk(S("selectedAnnoFlagReason"));
				Rk("flag_anno_");
				if (S("watch-tab-flag")) O(S("watch-tab-flag"), "disabled");
				else {
					O(S("watch-flag"), "yt-button-disabled");
					S("watch-flag")[z]("onclick", "return false")
				}
			}
		}
	}, void 0);
	J("yt.www.watch.flagging.extended.flagError", function (a, b) {
		if (a) {
			n(S(a), b);
			Pf(a)
		}
	}, void 0);
	J("yt.www.watch.flagging.extended.stripNonNumber", function (a) {
		return a[t](/[^\d]/g, "")
	}, void 0);
	J("yt.www.watch.longform.initLightsOut", function () {
		var a = l[y]("div");
		a.id = "watch-longform-shade";
		wa(a, "hid");
		l[G][q](a);
		De(l[G], "click", function (b) {
			jf(He(b), "watch-longform-buttons") || jf(He(b), "watch-player-div") || dl(i)
		})
	}, void 0);
	J("yt.www.watch.longform.toggleLights", dl, void 0);
	J("yt.www.watch.more_from_tab.selectMoreFrom", function (a) {
		for (var b = a[H][gb]; b;) {
			Q(b, "more-from-selected");
			b = b[rb]
		}
		O(a, "more-from-selected");
		for (b = S(a.id + "-body")[H][gb]; b;) {
			X(b);
			b = b[rb]
		}
		W(a.id + "-body")
	}, void 0);
	J("yt.www.watch.playlists.extended.submitToPlaylist", function (a) {
		var b = a.form;
		if (b.playlist_id[v]) {
			var c = {
				postBody: Xe(b),
				onComplete: function () {
					X("addToPlaylistDiv");
					Pf("addToPlaylistResult");
					W("rec-playlist-video")
				},
				onException: function () {
					X("addToPlaylistDiv")
				},
				method: "POST",
				update: "rec-playlist-video"
			};
			p(a, f);
			U(b[ec], c)
		}
	}, void 0);
	J("yt.www.watch.preview.onmouseoverThumbnailPreview", function (a, b) {
		for (var c = 0; c < 5; c++) {
			var d = S("watch-preview-thumb-" + a + "_" + c),
				e = S("watch-preview-title-" + a + "_" + c);
			if (c == b) {
				O(d, "preview-thumb-selected");
				Q(e, "hid")
			} else {
				Q(d, "preview-thumb-selected");
				O(e, "hid")
			}
		}
	}, void 0);
	J("yt.www.watch.quicklist.extended.findPlaylistRowByVideoId", oj, void 0);
	J("yt.www.watch.quicklist.extended.onQuickAddClickCallback", yj, void 0);
	J("yt.www.watch.quicklist.extended.scrollPlaylistToVideo", rj, void 0);
	J("yt.www.watch.quicklist.extended.registerPlaylistAutoload", function (a) {
		var b = K("QL_AUTOSCROLL_DEST");
		a == "QL" && b > 0 && rj(a, b);
		S(lj("playlistContainer", a)).onscroll = Hj;
		Ej && Ej != S(lj("playlistContainer", "QL"))[zb] && Hj()
	}, void 0);
	J("yt.www.watch.quicklist.extended.autoNext", function (a) {
		Ic("PLAY_NEXT_FROM", a);
		Ic("SWF_IS_PLAYING_ALL", f);
		Ic("PLAY_NEXT_COUNT", 1);
		for (var b = ["PL", "QL", "TL", "RL", "SPL", "CL", "SL"], c = 0; c < b[A]; c++) if (b[c] == a) {
			W(lj("playingall", b[c]));
			X(lj("playall", b[c]))
		} else {
			X(lj("playingall", b[c]));
			W(lj("playall", b[c]))
		}
		b = S("movie_player");
		b.getPlayerState() == 0 || !Ij(a) ? Lj() : b.SetVariable("playnext", "1");
		return i
	}, void 0);
	J("yt.www.watch.quicklist.extended.autoNextOff", function (a) {
		Ic("PLAY_NEXT_FROM", "");
		Ic("SWF_IS_PLAYING_ALL", i);
		S("movie_player").SetVariable("playnext", "0");
		W(lj("playall", a));
		X(lj("playingall", a));
		return i
	}, void 0);
	J("yt.www.watch.quicklist.extended.gotoNext", Lj, void 0);
	J("yt.www.watch.quicklist.extended.randomizeOnOff", function () {
		var a = i;
		if (a = S("PL_randomize") && S("PL_randomize")[Gb] ? K("PLAYLIST_RANDOM_NEXT_URL") ? f : i : !K("PLAYLIST_IS_LAST_VIDEO")) {
			W("PL_next_video");
			X("PL_no_next_video")
		} else {
			X("PL_next_video");
			W("PL_no_next_video")
		}
	}, void 0);
	J("yt.www.watch.quicklist.extended.getUrlFromPlaylistRow", Kj, void 0);
	J("yt.www.watch.quicklist.extended.getNextVideoId", Mj, void 0);
	J("yt.www.watch.quicklist.extended.clearWatchQueue", function () {
		U("/watch_queue_ajax?action_clear_queue=1", {
			postBody: Cj()
		});
		var a = mj("QL");
		sj("QL", -1 * a);
		for (a = a - 1; a >= 0; a--) {
			var b = S(lj("playlistRow", "QL", a));
			b[H][Pb](b)
		}
		a = S(lj("playlistContainer", "QL"));
		O(a, "watch-playlist-auto-height");
		Q(a, "watch-playlist-fixed-height175");
		vj = [];
		Nj = [];
		for (a = 0; a < tj[A]; a++) Pj(tj[a].yd);
		tj = [];
		X("quicklistDiv");
		xj(0)
	}, void 0);
	J("yt.www.watch.quicklist.extended.watchRemoveVideo", Dj, void 0);
	J("yt.www.watch.sharing.extended.submitToBlog", function (a) {
		p(S("submitToBlogBtn"), f);
		var b = function () {
			Pf("addToBlogResult");
			M(function () {
				X("addToBlogResult")
			}, 3E3);
			p(S("submitToBlogBtn"), i)
		},
			c, d;
		if (S("watch-share-video-div")[F].display != "none") {
			Fk("fewer-options", "more-options");
			c = function () {
				X("watch-share-video-div");
				b()
			};
			d = function () {
				X("watch-share-video-div")
			}
		} else {
			c = function () {
				X("watch-share-blog-quick");
				b()
			};
			d = function () {
				X("watch-share-blog-quick")
			}
		}
		U(a[ec], {
			postBody: Xe(a),
			onComplete: c,
			onException: d
		})
	}, void 0);
	J("yt.www.watch.stats.extended.setInsightOptOut", function (a) {
		if (a) {
			O(S("insight-private"), "selected");
			Q(S("insight-public"), "selected");
			O(S("insightBox"), "watch-stats-private-border")
		} else {
			O(S("insight-public"), "selected");
			Q(S("insight-private"), "selected");
			Q(S("insightBox"), "watch-stats-private-border")
		}
		U("/watch_ajax?action_set_insight_opt_out=1&opt_out=" + a + "&video_id=" + K("VIDEO_ID"), {
			postBody: K("AXC"),
			onComplete: function () {}
		});
		return i
	}, void 0);
	J("yt.www.watch.stats.extended.toggleReferrer", function (a) {
		Pf(a);
		return i
	}, void 0);
	J("yt.www.watch.survey.takeWatchPageSurvey", function () {
		el();
		k[Ea]("/watch_page_survey?r2=" + K("SURVEY_REFERER") + "&r1=" + K("SURVEY_SERVLET_NAME") + "&name=" + K("SURVEY_TYPE"), "YouTube_User_Happiness_Survey", "toolbar=no,width=800,height=768,status=no,resizable=yes,fullscreen=no,scrollbars=yes")[cb]()
	}, void 0);
	J("yt.www.watch.survey.watchPageSurveyGoAway", el, void 0);
	J("yt.www.watch.survey.checkSurveyCompletedAndShow", function () {
		wf.c().D(V.ga) || W("watch_page_survey")
	}, void 0);
	J("yt.www.watch.user.unblockUserLink", function (a, b) {
		if (!ja(N("UNBLOCK_USER"))) return i;
		U("/link_servlet", {
			postBody: "unblock_user=1&" + K("BLOCK_USER_XSRF") + "&friend_id=" + a,
			onComplete: function () {
				ag(b)
			}
		});
		return f
	}, void 0);
	J("yt.www.watch.user.blockUserLink", function (a, b) {
		if (!ja(N("BLOCK_USER"))) return f;
		U("/link_servlet", {
			postBody: "block_user=1&" + K("BLOCK_USER_XSRF") + "&friend_id=" + a,
			onComplete: function () {
				ag(b)
			}
		});
		return f
	}, void 0);
	J("yt.www.watch.user.unblockUserLinkByUsername", function (a) {
		if (!ja(N("UNBLOCK_USER"))) return i;
		U("/link_servlet", {
			postBody: "unblock_user=0&" + K("BLOCK_USER_XSRF") + "&friend_username=" + a
		});
		return i
	}, void 0);
	J("yt.www.watch.user.blockUserLinkByUsername", function (a) {
		if (!ja(N("BLOCK_USER"))) return i;
		U("/link_servlet", {
			postBody: "block_user=1&" + K("BLOCK_USER_XSRF") + "&friend_username=" + a
		});
		return i
	}, void 0);
	J("__html5_enableWideScreen", ok, void 0);
	J("setLayerToken", Ok, void 0);
	J("gotoNext", Lj, void 0);
	J("getNextVideoId", Mj, void 0);
	Jc("setLayerToken", "gotoNext", "getNextVideoId");
	var il = g,
		jl = function () {
		if (S("watch-comments-sigin")) {
			ya(k[D], S("watch-comments-sigin")[bc]);
			return i
		}
		return f
	},
		kl = function (a) {
		var b = a[H];
		if (!R(b, "input-expanded")) {
			o(a, "");
			Q(b, "input-collapsed");
			O(b, "input-expanded");
			W("watch-comments-attach-video")
		}
	},
		nl = function (a) {
		a = a[H][H];
		ll();
		if (a.id == "watch-comments-form") {
			o(T(g, "watch-comment", a)[0], "");
			Q(a, "input-expanded");
			O(a, "input-collapsed");
			X("watch-comments-attach-video")
		} else {
			a = a[H];
			n(a, "");
			X(a)
		}
		ml(g, f)
	};
	Eg = 1;
	var ol = function () {
		W("watch-comments-loading");
		X("watch-comments-all");
		var a = S("watch-comments-core"),
			b = {
			method: "GET",
			onComplete: function (r) {
				if (r = rf(r[Wb], "html_content")) a.innerHTML += r;
				Z(a, "type") == "video" ? X("watch-comments-show") : W("watch-comments-show");
				X("watch-comments-no-more");
				if (!r || r[$a](/<li/g)[A] < 10) {
					X("watch-comments-show");
					W("watch-comments-no-more")
				}
				X("watch-comments-loading");
				W("watch-comments-all");
				Ci()
			}
		};
		Eg += 1;
		var c = K("VIDEO_ID"),
			d = K("COMMENTS_THRESHHOLD"),
			e = K("COMMENTS_FILTER"),
			h = K("COMMENTS_PAGE_SIZE"),
			j = Z(a, "type") || "";
		U(Cg(c, Eg, d, e, h, j), b)
	},
		pl = function (a) {
		var b = S("watch-comments-core");
		if (Z(b, "type") != a) {
			for (var c = S("watch-discussion-tabs")[gb]; c;) {
				if (c[Xa] == "A") {
					var d = Z(c, "type");
					if (d) d == a ? O(c, "selected") : Q(c, "selected")
				}
				c = c[rb]
			}
			X("watch-comments-show");
			n(S("watch-comments-core"), "");
			Wf(b, "type", a);
			Eg = 0;
			ol()
		}
	},
		ql = function (a) {
		ml(g, f);
		il = a;
		var b = T(g, "content", il)[0];
		b = b ? R(b, "hide-comment") : f;
		if (! (Z(a, "pending") == "1" || b && (Z(a, "removed") == "True" || Z(a, "flagged") == "True"))) {
			Z(a, "author-viewing") == "True" || Z(S("watch-comments-core"), "owner-viewing") == "True" ? W(S("watch-comment-remove-link")) : X(S("watch-comment-remove-link"));
			b = S("watch-comments-actions");
			Q(b, "voted-up");
			Q(b, "voted-down");
			if (Z(a, "voted") == "1") O(b, "voted-up");
			else Z(a, "voted") == "-1" && O(b, "voted-down");
			Q(b, "replying");
			var c = T(g, "watch-comment-reply", a);
			c[A] && c[0][u] && O(b, "replying");
			var d;
			if (c = b[Jb]) {
				var e = c[gc] == "HTML" || c[gc] == "BODY";
				if (!e || Cf(c, "position") != "static") {
					d = Ff(c);
					e || (d = jd(d, new id(c[Zb], c[zb])))
				}
			}
			c = Ff(a);
			e = Jf(a);
			c = new Af(c.x, c.y, e[Ja], e[jc]);
			var h;
			e = new zf(0, Infinity, Infinity, 0);
			for (var j = Zd(a), r = j.e[G], w = j.nd(), E = a; E = Ef(E);) if ((!Kd || E[Fb] != 0) && (!Md || E[Yb] != 0 || E != r) && (E.scrollWidth != E[Fb] || E[eb] != E[Yb]) && Cf(E, "overflow") != "visible") {
				var L = Ff(E),
					P;
				P = E;
				if (Ld && !Wd("1.9")) {
					var la = ha(Bf(P, "borderLeftWidth"));
					if ("rtl" == Cf(P, "direction")) {
						var Bb = P[Ra] - P[Fb] - la - ha(Bf(P, "borderRightWidth"));
						la += Bb
					}
					P = new id(la, ha(Bf(P, "borderTopWidth")))
				} else P = new id(P[ib], P[kb]);
				L.x += P.x;
				L.y += P.y;
				e.top = m.max(e.top, L.y);
				e.right = m.min(e[oc], L.x + E[Fb]);
				e.bottom = m.min(e[ac], L.y + E[Yb]);
				ra(e, m.max(e[Ya], L.x));
				h = h || E != w
			}
			r = w[Zb];
			w = w[zb];
			if (Md) {
				e.left += r;
				e.top += w
			} else {
				ra(e, m.max(e[Ya], r));
				e.top = m.max(e.top, w)
			}
			if (!h || Md) {
				e.right += r;
				e.bottom += w
			}
			h = j.ud();
			e.right = m.min(e[oc], r + h[Ja]);
			e.bottom = m.min(e[ac], w + h[jc]);
			(h = e.top >= 0 && e[Ya] >= 0 && e[ac] > e.top && e[oc] > e[Ya] ? e : g) && c.Bd(new Af(h[Ya], h.top, h[oc] - h[Ya], h[ac] - h.top));
			h = Zd(a);
			j = Zd(b);
			if (h.e != j.e) {
				e = h.e[G];
				j = j.jb();
				w = new id(0, 0);
				r = Yd(e) ? Yd(e).parentWindow || Yd(e)[pb] : k;
				E = e;
				do {
					L = r == j ? Ff(E) : Gf(E);
					w.x += L.x;
					w.y += L.y
				} while (r && r != j && (E = r.frameElement) && (r = r.parent));
				j = w;
				j = jd(j, Ff(e));
				if (Kd && !h.ob()) j = jd(j, h.oa());
				c.left += j.x;
				c.top += j.y
			}
			c = new id(c[Ya] + c[Ja], c.top);
			if (d) c = jd(c, d);
			c = c;
			c = c.V();
			d = Jf(b);
			c.x -= d[Ja] + 0;
			e = c;
			h = Ld && (Ed || Pd) && Wd("1.9");
			if (e instanceof id) {
				c = e.x;
				e = e.y
			} else {
				c = e;
				e = void 0
			}
			ra(b[F], typeof c == "number" ? (h ? m[Ka](c) : c) + "px" : c);
			b[F].top = typeof e == "number" ? (h ? m[Ka](e) : e) + "px" : e;
			(d == d ? f : !d || !d ? i : d[Ja] == d[Ja] && d[jc] == d[jc]) || If(b, d);
			O(a, "current")
		}
	},
		ml = function (a, b) {
		if (! (!b && (jf(He(a), "watch-comments-core") || jf(He(a), "watch-comments-actions")))) {
			a = S("watch-comments-actions");
			a[F].top = "-1000px";
			ra(a[F], "-1000px");
			il && Q(il, "current")
		}
	},
		rl = function (a) {
		var b = a[H];
		a = T(g, "watch-comments-post-count-textbox", b)[0];
		b = T(g, "watch-comment", b)[0];
		o(a, 500 - b[v][A])
	},
		ll = function () {
		var a = S("captcha_div");
		if (a) {
			var b = a[H];
			b[Pb](a);
			W(b.comment)
		}
	};
	var sl = ["prepage", "pagetop", "contenttop", "videoextra", "contentbottom", "pagebottom", "postpage"],
		tl = i,
		ul = g,
		wl = function () {
		var a = le(k[D][Ca][wb](1));
		if (a.query) dk(a.query, a.page);
		else {
			Vj();
			if (a.v != ul) {
				vl();
				var b = l[ub]("head")[0];
				a = l[y]("script");
				a.src = l[Qa]("www-core-new-js").src;
				b[q](a);
				var c = function () {
					var d = l[y]("script");
					qa(d, "yt.www.watch.ajax.init();");
					b[q](d)
				};
				if (Md) a.onload = function () {
					c()
				};
				else c()
			}
		}
	},
		vl = function () {
		tl = i;
		try {
			eg()
		} catch(a) {}
		Te();
		Qe();
		Ge();
		for (var b = Fc[A] - 1; b >= 0; b--) Lc(Fc[b]);
		Fc = [];
		for (b = Gc[A] - 1; b >= 0; b--) Mc(Gc[b]);
		Gc = [];
		b = 0;
		for (var c = sl[A]; b < c; ++b) {
			var d = S("watch-" + sl[b] + "-section");
			O(d, "watch-section-loading")
		}
		k.scroll(0, 0);
		for (var e in k) if ((e in Dc || e[x]("google") == 0) && e != "yt") k[e] = fa;
		Dc = {};
		k.yt = fa
	},
		xl = function (a, b) {
		b = a[x](b) + b[A];
		return a[cc](b, a[x]('"', b))
	},
		yl = function () {
		var a = le(k[D][Ca][wb](1));
		if (a.v) {
			ul = a.v;
			var b = i,
				c = function () {
				var h = S("movie_player");
				if (h && h.loadVideoById) {
					b = f;
					if (h[Na][x]("watch_as3") != -1) try {
						h.loadVideoById(a.v);
						h.pauseVideo()
					} catch(j) {}
				} else M(c, 50)
			};
			a.v && M(c, 0);
			X("ad_creative_1");
			var d = md(a);
			d.nocache = (new Date)[tb]() + ga(m[Ub]() * 1234567, 10);
			d.ajax = 1;
			var e = ne("/watch", d);
			U(e, {
				method: "GET",
				onException: function () {
					ya(k[D], e)
				},
				onError: function () {
					ya(k[D], e)
				},
				onComplete: function (h) {
					if (le(k[D][Ca][wb](1)).v != a.v) yl();
					else {
						var j = h[Pa];
						if (j[x]('id="watch-video-container"') == -1 && j[x]('id="watch-this-vid-info"') == -1) ya(k[D], e);
						else {
							h = xl(j, '<link id="www-core-new-css" rel="stylesheet" href="');
							var r = xl(j, '<script id="www-core-new-js" src="'),
								w = /^http:\/\/.*www-core-new-vfl\d*\.js$/;
							if (!/^http:\/\/.*www-core-new-vfl\d*\.css$/ [Fa](h) || !w[Fa](r)) ya(k[D], "/videos");
							else if (k[D].search[x]("debugjs") == -1 && (h != S("www-core-new-css")[bc] || r != S("www-core-new-js").src)) k[D].reload(f);
							else {
								Yc(sl, function (P) {
									var la = S("watch-" + P + "-section");
									n(la, j[cc](j[x]("<!-- begin " + P + " section --\>"), j[x]("<!-- end " + P + " section --\>")));
									Q(la, "watch-section-loading")
								});
								j[x]('<html lang="') != -1 && l[vb][z]("lang", xl(j, '<html lang="'));
								wa(l[G], xl(j, '<body class="'));
								wa(S("page"), xl(j, '<div id="page" class="'));
								j[t](/\x3cscript([\s\S]*?)\x3e([\s\S]*?)\x3c\/script/ig, function (P, la, Bb) {
									P = l[y]("script");
									var db = la[$a](/src="([\S]*?)"/);
									if (db) {
										if (la[x]('id="www-core-new-js"') != -1) return;
										P.src = db[1]
									} else qa(P, Bb);
									l[ub]("head")[0][q](P)
								});
								h = l[y]("script");
								qa(h, "yt.www.watch.ajax.initReady();");
								l[ub]("head")[0][q](h);
								var E = R(S("page"), "watch-needs-rental"),
									L = function () {
									Vj();
									var P = S("movie_player");
									if (tl && (E || P && P.playVideo && b)) {
										try {
											dg()
										} catch(la) {}
										a.v && !E && P.playVideo()
									} else M(L, 50)
								};
								M(L, 0)
							}
						}
					}
				}
			})
		} else ya(k[D], "/videos")
	};
	var zl = function () {
		this.s = {}
	};
	Bc(zl, Zf);
	sc(zl);
	I = zl[B];
	I.w = "pager";
	I.G = function () {
		this.h("click", this.Yc, "num");
		this.h("click", this.Zc, "prev");
		this.h("click", this.Xc, "next")
	};
	I.Yc = function (a) {
		if (a) {
			var b = this.n(a);
			a = ga(this[Va](a, "pager-num"), 10);
			if (na(a) || a < 0) a = 0;
			this.Fa(b, a)
		}
	};
	I.Xc = function (a) {
		a && this.Kd(this.n(a))
	};
	I.Zc = function (a) {
		a && this.Ld(this.n(a))
	};
	I.Ld = function (a) {
		if (a) {
			var b = ga(this[Va](a, "pager-current"), 10);
			if (na(b) || b < 0) b = 0;
			this.Fa(a, b - 1 < 0 ? 0 : b - 1)
		}
	};
	I.Kd = function (a) {
		if (a) {
			var b = ga(this[Va](a, "pager-current"), 10);
			if (na(b) || b < 0) b = 0;
			var c = ga(this[Va](a, "pager-pages"), 10);
			if (na(c) || c < 0) c = 0;
			c = c - 1;
			this.Fa(a, b + 1 > c ? c : b + 1)
		}
	};
	I.Fa = function (a, b) {
		if (a) {
			var c = this.qd(a),
				d = this.b("num-current"),
				e;
			Yc(c, function (j) {
				e = this[Va](j, "pager-num") == b;
				gd(j, d, e);
				gd(j, "yt-uix-button-active", e)
			}, this);
			if (c = this.rd(a)) {
				var h = kf(g, this.b("page"), c);
				if (h) ra(c[F], b * h[Ra] * -1 + "px")
			}
			this[yb](a, "pager-current", b + "")
		}
	};
	I.qd = function (a) {
		return T(g, this.b("num"), a)
	};
	I.rd = function (a) {
		return kf(g, this.b("pages"), a)
	};
	var Al = function () {
		this.s = {}
	};
	Bc(Al, Zf);
	sc(Al);
	I = Al[B];
	I.w = "tooltip";
	I.G = function () {
		this.h("mouseover", this.Ba);
		this.h("mouseout", this.Aa)
	};
	I.Ba = function (a) {
		var b = ga(this[Va](a, "tooltip-timer"), 10);
		b && Lc(b);
		this.Td(a);
		if (a[Db]) {
			this[yb](a, "tooltip-title", a[Db]);
			a.title = ""
		}
	};
	I.Aa = function (a) {
		var b = zc(this.xd, this, a);
		b = M(b, 50);
		this[yb](a, "tooltip-timer", b[Ab]());
		if (b = this[Va](a, "tooltip-title")) a.title = b
	};
	I.Td = function (a) {
		if (a) {
			var b = this[Va](a, "tooltip");
			if (b) {
				var c = this.b("tip"),
					d = c + yc(a),
					e = S(d);
				if (!e) {
					var h = Of(a);
					h.x += a[Ra] / 2;
					h.y -= 3;
					e = l[y]("div");
					e.id = d;
					wa(e, c);
					ra(e[F], h.x + "px");
					e[F].top = h.y + "px";
					a = l[y]("div");
					wa(a, this.b("tip-body"));
					c = l[y]("div");
					wa(c, this.b("tip-arrow"));
					d = l[y]("div");
					wa(d, this.b("tip-content"));
					n(d, b);
					a[q](d);
					e[q](a);
					e[q](c);
					l[G][q](e);
					var j = this.b("tip-visible");
					M(function () {
						O(e, j)
					}, 10)
				}
			}
		}
	};
	I.xd = function (a) {
		if (a) {
			a = this.b("tip") + yc(a);
			(a = S(a)) && l[G][Pb](a)
		}
	};
	J("yt.www.watch.ajax.init", function () {
		Oe("navigate", function () {
			wl()
		});
		Se(f);
		yl()
	}, void 0);
	J("yt.www.watch.ajax.initReady", function () {
		tl = f
	}, void 0);
	J("yt.www.watch.watch5.search", function (a, b) {
		if (a) o(S("masthead-search-term"), a);
		a = S("masthead-search-term")[v];
		if (K("AJAX_MODE")) {
			var c = le(k[D][Ca][wb](1));
			c.query = a;
			if (b) c.page = b;
			k[D].hash = "#" + me(c)
		} else dk(a, b)
	}, void 0);
	J("yt.www.watch.watch5.closeSearch", Vj, void 0);
	J("yt.www.watch.watch5.hideBrowserUpgrade", function () {
		W("movie_player");
		X("browser-upgrade-outer-box");
		Q(S("watch-video"), "deprecated-browser")
	}, void 0);
	J("yt.history.enable", Se, void 0);
	J("yt.history.disable", Te, void 0);
	J("yt.flash.embed", qe, void 0);
	J("yt.flash.update", re, void 0);
	J("yt.help.guide.start", function (a) {
		if (k.guidedhelp && k.guidedhelp.loaded ? f : i) ze(a);
		else {
			k.guidedhelp = k.guidedhelp || {};
			k.guidedhelp.onLoad = function () {
				var b = rc("help.guide.init");
				if (b) {
					b("http://www.google.com/support/youtube", K("GUIDED_HELP_LOCALE") || "en_US");
					ze(a)
				}
			};
			ye()
		}
		return i
	}, void 0);
	Vf(Tj);
	Vf(zl);
	Vf(Al);
	J("yt.www.watch.watch5.enableWide", Wj, void 0);
	J("yt.www.watch.watch5.toggleWide", function () {
		Wj(!Xj())
	}, void 0);
	J("yt.www.watch.player.enableWideScreen", Wj, void 0);
	J("yt.www.watch.player.onPlayerNextClicked", mk, void 0);
	J("yt.www.watch.player.onPlayerSizeClicked", function (a) {
		Wj(a)
	}, void 0);
	J("yt.www.watch.player.onPlayerNextSelected", nk, void 0);
	J("yt.www.watch.watch5.handleToggleMoreFromUser", function (a) {
		a = R(a, "yt-uix-expander-collapsed");
		var b = S("watch-more-from-user");
		if (Z(b, "loaded") != "true") {
			var c = {
				method: "GET",
				update: "watch-more-from-user",
				onComplete: function () {
					Wf(b, "loaded", "true");
					Ci()
				}
			};
			U("/watch_ajax?user=" + K("VIDEO_USERNAME") + "&video_id=" + K("VIDEO_ID") + "&action_channel_videos_w5", c)
		}
		gd(b, "collapsed", a)
	}, void 0);
	J("yt.www.watch.watch5.handleToggleStats", function (a) {
		var b = R(a, "yt-uix-expander-collapsed"),
			c = S("watch-info"),
			d = S("watch-description"),
			e = S("watch-stats");
		a = e[H];
		gd(c, "expanded", !b);
		gd(d, "yt-uix-expander-collapsed", f);
		if (Z(e, "loaded") != "true") {
			b = {
				method: "GET",
				update: "watch-stats",
				onComplete: function () {
					Aa(e[H][F], e[lc] + "px")
				}
			};
			U("/watch_ajax?v=" + K("VIDEO_ID") + "&l=" + K("VIDEO_LANGUAGE") + "&action_get_statistics_and_data=1", b);
			W(a);
			Q(a, "collapsed");
			Wf(e, "loaded", "true")
		} else gd(a, "collapsed", b)
	}, void 0);
	J("yt.www.watch.watch5.handleToggleDescription", function (a) {
		a = R(a, "yt-uix-expander-collapsed");
		var b = S("watch-info"),
			c = S("watch-views"),
			d = S("watch-stats-container");
		gd(b, "expanded", !a);
		O(c, "yt-uix-expander-collapsed");
		O(d, "collapsed");
		if (!a) {
			a = S("watch-description-body");
			Aa(a[H][F], a[lc] + "px")
		}
	}, void 0);
	J("yt.www.watch.watch5.rate", function (a, b) {
		Vg(a, b)
	}, void 0);
	J("yt.www.watch.watch5.like", function () {
		ak();
		if ($j()) {
			var a = l[Ba].likeForm,
				b = {
				postBody: Xe(a),
				onComplete: function () {
					n(S("watch-actions-area"), S("watch-actions-close")[u] + S("watch-actions-area")[u]);
					Zj()
				},
				update: "watch-actions-area",
				method: "POST"
			};
			U(a[ec], b)
		}
	}, void 0);
	J("yt.www.watch.watch5.unlike", function () {
		ak();
		if ($j()) {
			var a = l[Ba].unlikeForm,
				b = {
				postBody: Xe(a),
				onComplete: function () {
					n(S("watch-actions-area"), S("watch-actions-close")[u] + S("watch-actions-area")[u]);
					Zj()
				},
				update: "watch-actions-area",
				method: "POST"
			};
			U(a[ec], b)
		}
	}, void 0);
	J("yt.www.watch.watch5.save", function (a, b, c) {
		a = ee(a, "FORM", "watch-playlists-form");
		o(a.playlist_id, b);
		o(a.add_to_favorite, b == "" ? "on" : "");
		Tj.c().sa(S("watch-playlists-button"));
		if (c) o(a.new_playlist_name, c);
		ak();
		b = {
			postBody: Xe(a),
			method: "POST",
			onComplete: function () {
				n(S("watch-actions-area"), S("watch-actions-close")[u] + S("watch-actions-area")[u]);
				Zj()
			},
			update: "watch-actions-area"
		};
		U(a[ec], b)
	}, void 0);
	J("yt.www.watch.watch5.createPlaylist", function (a) {
		X(a);
		a = T(g, "create-playlist-input", a[H])[0];
		W(a);
		a[ub]("INPUT")[0][cb]()
	}, void 0);
	J("yt.www.watch.watch5.loadPlaylists", function () {
		if ($j()) if (!T(g, "watch-playlists-form", g)[A]) {
			var a = {
				method: "GET",
				onComplete: function (b) {
					if (b = (b = b[Wb]) ? qf(b) : g) {
						b = rf(b, "html_content") || "";
						Tj.c().fe(S("watch-playlists-button"), b)
					}
				}
			};
			U("/watch_ajax?video_id=" + K("VIDEO_ID") + "&action_get_playlists_component_w5=1", a)
		}
	}, void 0);
	J("yt.www.watch.watch5.shareSuccess", function (a) {
		ak();
		n(S("watch-actions-area"), S("watch-actions-close")[u] + a)
	}, void 0);
	J("yt.www.watch.watch5.url", function () {
		ak();
		n(S("watch-actions-area"), S("watch-actions-close")[u] + '<input id="watch-href" type="textbox" style="width: 350px" onclick="this.focus();this.select();" value="' + k[D][bc] + '"/>');
		M(function () {
			S("watch-href")[cb]();
			S("watch-href")[hb]()
		}, 0)
	}, void 0);
	J("yt.www.watch.watch5.embed", function () {
		ak();
		var a = {
			method: "GET",
			onComplete: function () {
				n(S("watch-actions-area"), S("watch-actions-close")[u] + '<input type="textbox" style="width: 350px" onclick="this.focus();this.select();" id="embed_code"/>' + S("watch-actions-area")[u]);
				Hi();
				Gi();
				Zj();
				M(function () {
					S("embed_code")[cb]();
					S("embed_code")[hb]()
				}, 0)
			},
			update: "watch-actions-area"
		};
		U("/watch_ajax?action_customize_embed=1" + (K("IS_WIDESCREEN") ? "&wide=1" : "") + (K("IS_HD_AVAILABLE") ? "&hd=1" : ""), a)
	}, void 0);
	J("yt.www.watch.watch5.flag", function () {
		ak();
		if ($j()) {
			var a = {
				method: "GET",
				onComplete: function () {
					Pi();
					n(S("watch-actions-area"), S("watch-actions-close")[u] + S("watch-actions-area")[u]);
					Zj()
				},
				update: "watch-actions-area"
			};
			U("/watch_ajax?video_id=" + K("VIDEO_ID") + "&action_get_flag_video_component=1", a)
		}
	}, void 0);
	J("yt.www.watch.watch5.hide", function () {
		var a = S("watch-actions-area-container");
		O(a, "collapsed")
	}, void 0);
	J("yt.www.comments.watch5.inputFocus", kl, void 0);
	J("yt.www.comments.watch5.cancelPost", nl, void 0);
	J("yt.www.comments.watch5.post", function (a) {
		var b = a[H][H],
			c = b.comment,
			d = T(g, "watch-comments-post", b)[0],
			e = T(g, "watch-comments-post-result", b)[0];
		a = b[ec];
		var h = {
			postBody: Xe(b),
			onComplete: function (j) {
				var r = rf(j[Wb], "str_code");
				n(e, r == "OK" ? N("COMMENT_OK") : N("COMMENT_ERROR"));
				r != "INLINE_CAPTCHAFAIL" && ll();
				if (r == "OK") {
					r = T(g, "watch-comments-cancel", b)[0];
					nl(r);
					r = S("watch-comments-core");
					n(r, rf(j[Wb], "html_content") + r[u]);
					Q(e, "watch-bad-post");
					O(e, "watch-good-post");
					Q(d, "yt-button-disabled");
					O(d, "yt-button-disabled");
					pl("everything")
				} else if (r == "INLINE_CAPTCHA") {
					n(e, "");
					var w = l[y]("DIV");
					w.id = "captcha_div";
					U("/comment_servlet?gimme_captcha=1&watch5=1", {
						update: w,
						onComplete: function () {
							Kf(c, i);
							Q(d, "yt-button-disabled");
							c[H] && c[H][Wa](w, c)
						}
					})
				} else if (r == "INLINE_CAPTCHAFAIL") {
					n(e, "");
					j = S("fail_warning");
					n(S("fail_warning_text"), N("COMMENT_CAPTCHAFAIL"));
					W(j);
					Q(d, "yt-button-disabled")
				} else {
					Q(d, "yt-button-disabled");
					O(e, "watch-bad-post");
					Q(e, "watch-good-post")
				}
			}
		};
		U(a, h);
		O(d, "yt-button-disabled")
	}, void 0);
	J("yt.www.comments.watch5.showMore", ol, void 0);
	J("yt.www.comments.watch5.vote", function (a) {
		if (jl()) {
			var b = il;
			if (!Z(b, "voted")) {
				var c = K("VIDEO_ID"),
					d = Z(b, "id"),
					e = Z(b, "score");
				U("/comment_voting?a=" + a + "&id=" + d + "&video_id=" + c + "&old_vote=" + e, {
					method: "GET",
					onComplete: function () {}
				});
				Wf(b, "voted", a);
				ql(b)
			}
		}
	}, void 0);
	J("yt.www.comments.watch5.reply", function () {
		if (jl()) {
			ll();
			var a = S("watch-comments-form")[lb](f);
			a.removeAttribute("id");
			a.removeAttribute("class");
			var b = T(g, "watch-comments-post", a)[0];
			n(T(g, "watch-comments-post-result", a)[0], "");
			Q(b, "yt-button-disabled");
			b = T(g, "watch-comment-reply", il);
			if (b[A]) b = b[0];
			else {
				b = l[y]("DIV");
				wa(b, "watch-comment-reply yt-rounded");
				b = b;
				il[q](b)
			}
			n(b, "");
			b[q](a);
			W(b);
			kl(a[gb]);
			o(T(g, "comment-parent-id", a)[0], Z(il, "id"));
			b = T(g, "watch-comment", a)[0];
			var c = Z(il, "author");
			o(b, "@" + c + " ");
			rl(a[gb]);
			ql(il);
			b[cb]();
			Gg(b, b[u][A]);
			ml(g, f)
		}
	}, void 0);
	J("yt.www.comments.watch5.flag", function () {
		if (jl()) {
			var a = K("VIDEO_ID");
			a = "/comment_servlet?mark_comment_as_spam=" + Z(il, "id") + "&entity_id=" + a;
			U(a, {});
			a = T(g, "content", il)[0];
			O(a, "hide-comment");
			Wf(il, "flagged", "True");
			ml(g, f)
		}
	}, void 0);
	J("yt.www.comments.watch5.showActions", ql, void 0);
	J("yt.www.comments.watch5.hideActions", ml, void 0);
	J("yt.www.comments.watch5.approve", function (a, b) {
		var c = il,
			d = Z(c, "id"),
			e = Z(S("watch-comments-form"), "comment-type");
		U("/comment_servlet?field_approve_comment=1", {
			postBody: "comment_id=" + d + "&comment_type=" + e + "&entity_id=" + K("VIDEO_ID") + "&" + b,
			onComplete: function () {
				X(a[H]);
				Wf(c, "pending", "0");
				ql(c)
			}
		})
	}, void 0);
	J("yt.www.comments.watch5.remove", function (a, b) {
		var c = il,
			d = Z(c, "id"),
			e = Z(S("watch-comments-form"), "comment-type");
		a = {
			postBody: "deleter_user_id=" + a + "&comment_id=" + d + "&" + b,
			onComplete: function () {
				X(c);
				X(c[rb]);
				ml(g, f)
			}
		};
		U("/comment_servlet?remove_comment=1&comment_type=" + e + "&entity_id=" + K("VIDEO_ID"), a)
	}, void 0);
	J("yt.www.comments.watch5.updateCount", rl, void 0);
	J("yt.www.comments.watch5.display", function (a, b) {
		var c = T(g, "content", il)[0],
			d = T(g, "time", il)[0];
		if (b) {
			Q(c, "hide-comment");
			W(d);
			Q(a[H], "hide-mode")
		} else {
			O(c, "hide-comment");
			X(d);
			O(a[H], "hide-mode")
		}
	}, void 0);
	J("yt.www.comments.watch5.select", pl, void 0);
	J("yt.www.watch.watch5.toggleNextList", function (a) {
		if (Z(a, "loaded")) {
			a = S("watch-next-list-body");
			var b = kf(g, "next-list-current", a);
			if (b) a[H].scrollTop = b[ic]
		} else bk(a, "watch-next-list")
	}, void 0);
	J("yt.www.watch.watch5.toggleQuickList", function (a) {
		var b = kf("h3", "yt-uix-expander-head", a);
		hd(b, "yt-rounded-bottom");
		Z(a, "loaded") || bk(a, a.id)
	}, void 0);
	J("yt.www.watch.quicklist.clickedAddIcon_w5", function (a, b, c, d, e, h) {
		O(S(a), "in-quicklist");
		Ck(b, c, d, e, h)
	}, void 0);
})();