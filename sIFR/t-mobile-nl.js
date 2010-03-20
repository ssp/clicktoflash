// Readable version of AllCombined_min.js from http://www.t-mobile.nl/Persoonlijk/htdocs/page/homepage.aspx

(function () {
    var l = this,
        g, y = l.jQuery,
        p = l.$,
        o = l.jQuery = l.$ = function (E, F) {
        return new o.fn.init(E, F)
    },
        D = /^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,
        f = /^.[^:#\[\.,]*$/;
    o.fn = o.prototype = {
        init: function (E, H) {
            E = E || document;
            if (E.nodeType) {
                this[0] = E;
                this.length = 1;
                this.context = E;
                return this
            }
            if (typeof E === "string") {
                var G = D.exec(E);
                if (G && (G[1] || !H)) {
                    if (G[1]) {
                        E = o.clean([G[1]], H)
                    } else {
                        var I = document.getElementById(G[3]);
                        if (I && I.id != G[3]) {
                            return o().find(E)
                        }
                        var F = o(I || []);
                        F.context = document;
                        F.selector = E;
                        return F
                    }
                } else {
                    return o(H).find(E)
                }
            } else {
                if (o.isFunction(E)) {
                    return o(document).ready(E)
                }
            }
            if (E.selector && E.context) {
                this.selector = E.selector;
                this.context = E.context
            }
            return this.setArray(o.isArray(E) ? E : o.makeArray(E))
        },
        selector: "",
        jquery: "1.3.2",
        size: function () {
            return this.length
        },
        get: function (E) {
            return E === g ? Array.prototype.slice.call(this) : this[E]
        },
        pushStack: function (F, H, E) {
            var G = o(F);
            G.prevObject = this;
            G.context = this.context;
            if (H === "find") {
                G.selector = this.selector + (this.selector ? " " : "") + E
            } else {
                if (H) {
                    G.selector = this.selector + "." + H + "(" + E + ")"
                }
            }
            return G
        },
        setArray: function (E) {
            this.length = 0;
            Array.prototype.push.apply(this, E);
            return this
        },
        each: function (F, E) {
            return o.each(this, F, E)
        },
        index: function (E) {
            return o.inArray(E && E.jquery ? E[0] : E, this)
        },
        attr: function (F, H, G) {
            var E = F;
            if (typeof F === "string") {
                if (H === g) {
                    return this[0] && o[G || "attr"](this[0], F)
                } else {
                    E = {};
                    E[F] = H
                }
            }
            return this.each(function (I) {
                for (F in E) {
                    o.attr(G ? this.style : this, F, o.prop(this, E[F], G, I, F))
                }
            })
        },
        css: function (E, F) {
            if ((E == "width" || E == "height") && parseFloat(F) < 0) {
                F = g
            }
            return this.attr(E, F, "curCSS")
        },
        text: function (F) {
            if (typeof F !== "object" && F != null) {
                return this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(F))
            }
            var E = "";
            o.each(F || this, function () {
                o.each(this.childNodes, function () {
                    if (this.nodeType != 8) {
                        E += this.nodeType != 1 ? this.nodeValue : o.fn.text([this])
                    }
                })
            });
            return E
        },
        wrapAll: function (E) {
            if (this[0]) {
                var F = o(E, this[0].ownerDocument).clone();
                if (this[0].parentNode) {
                    F.insertBefore(this[0])
                }
                F.map(function () {
                    var G = this;
                    while (G.firstChild) {
                        G = G.firstChild
                    }
                    return G
                }).append(this)
            }
            return this
        },
        wrapInner: function (E) {
            return this.each(function () {
                o(this).contents().wrapAll(E)
            })
        },
        wrap: function (E) {
            return this.each(function () {
                o(this).wrapAll(E)
            })
        },
        append: function () {
            return this.domManip(arguments, true, function (E) {
                if (this.nodeType == 1) {
                    this.appendChild(E)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, true, function (E) {
                if (this.nodeType == 1) {
                    this.insertBefore(E, this.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, false, function (E) {
                this.parentNode.insertBefore(E, this)
            })
        },
        after: function () {
            return this.domManip(arguments, false, function (E) {
                this.parentNode.insertBefore(E, this.nextSibling)
            })
        },
        end: function () {
            return this.prevObject || o([])
        },
        push: [].push,
        sort: [].sort,
        splice: [].splice,
        find: function (E) {
            if (this.length === 1) {
                var F = this.pushStack([], "find", E);
                F.length = 0;
                o.find(E, this[0], F);
                return F
            } else {
                return this.pushStack(o.unique(o.map(this, function (G) {
                    return o.find(E, G)
                })), "find", E)
            }
        },
        clone: function (G) {
            var E = this.map(function () {
                if (!o.support.noCloneEvent && !o.isXMLDoc(this)) {
                    var I = this.outerHTML;
                    if (!I) {
                        var J = this.ownerDocument.createElement("div");
                        J.appendChild(this.cloneNode(true));
                        I = J.innerHTML
                    }
                    return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g, "").replace(/^\s*/, "")])[0]
                } else {
                    return this.cloneNode(true)
                }
            });
            if (G === true) {
                var H = this.find("*").andSelf(),
                    F = 0;
                E.find("*").andSelf().each(function () {
                    if (this.nodeName !== H[F].nodeName) {
                        return
                    }
                    var I = o.data(H[F], "events");
                    for (var K in I) {
                        for (var J in I[K]) {
                            o.event.add(this, K, I[K][J], I[K][J].data)
                        }
                    }
                    F++
                })
            }
            return E
        },
        filter: function (E) {
            return this.pushStack(o.isFunction(E) && o.grep(this, function (G, F) {
                return E.call(G, F)
            }) || o.multiFilter(E, o.grep(this, function (F) {
                return F.nodeType === 1
            })), "filter", E)
        },
        closest: function (E) {
            var G = o.expr.match.POS.test(E) ? o(E) : null,
                F = 0;
            return this.map(function () {
                var H = this;
                while (H && H.ownerDocument) {
                    if (G ? G.index(H) > -1 : o(H).is(E)) {
                        o.data(H, "closest", F);
                        return H
                    }
                    H = H.parentNode;
                    F++
                }
            })
        },
        not: function (E) {
            if (typeof E === "string") {
                if (f.test(E)) {
                    return this.pushStack(o.multiFilter(E, this, true), "not", E)
                } else {
                    E = o.multiFilter(E, this)
                }
            }
            var F = E.length && E[E.length - 1] !== g && !E.nodeType;
            return this.filter(function () {
                return F ? o.inArray(this, E) < 0 : this != E
            })
        },
        add: function (E) {
            return this.pushStack(o.unique(o.merge(this.get(), typeof E === "string" ? o(E) : o.makeArray(E))))
        },
        is: function (E) {
            return !!E && o.multiFilter(E, this).length > 0
        },
        hasClass: function (E) {
            return !!E && this.is("." + E)
        },
        val: function (K) {
            if (K === g) {
                var E = this[0];
                if (E) {
                    if (o.nodeName(E, "option")) {
                        return (E.attributes.value || {}).specified ? E.value : E.text
                    }
                    if (o.nodeName(E, "select")) {
                        var I = E.selectedIndex,
                            L = [],
                            M = E.options,
                            H = E.type == "select-one";
                        if (I < 0) {
                            return null
                        }
                        for (var F = H ? I : 0, J = H ? I + 1 : M.length; F < J; F++) {
                            var G = M[F];
                            if (G.selected) {
                                K = o(G).val();
                                if (H) {
                                    return K
                                }
                                L.push(K)
                            }
                        }
                        return L
                    }
                    return (E.value || "").replace(/\r/g, "")
                }
                return g
            }
            if (typeof K === "number") {
                K += ""
            }
            return this.each(function () {
                if (this.nodeType != 1) {
                    return
                }
                if (o.isArray(K) && /radio|checkbox/.test(this.type)) {
                    this.checked = (o.inArray(this.value, K) >= 0 || o.inArray(this.name, K) >= 0)
                } else {
                    if (o.nodeName(this, "select")) {
                        var N = o.makeArray(K);
                        o("option", this).each(function () {
                            this.selected = (o.inArray(this.value, N) >= 0 || o.inArray(this.text, N) >= 0)
                        });
                        if (!N.length) {
                            this.selectedIndex = -1
                        }
                    } else {
                        this.value = K
                    }
                }
            })
        },
        html: function (E) {
            return E === g ? (this[0] ? this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g, "") : null) : this.empty().append(E)
        },
        replaceWith: function (E) {
            return this.after(E).remove()
        },
        eq: function (E) {
            return this.slice(E, +E + 1)
        },
        slice: function () {
            return this.pushStack(Array.prototype.slice.apply(this, arguments), "slice", Array.prototype.slice.call(arguments).join(","))
        },
        map: function (E) {
            return this.pushStack(o.map(this, function (G, F) {
                return E.call(G, F, G)
            }))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        },
        domManip: function (J, M, L) {
            if (this[0]) {
                var I = (this[0].ownerDocument || this[0]).createDocumentFragment(),
                    F = o.clean(J, (this[0].ownerDocument || this[0]), I),
                    H = I.firstChild;
                if (H) {
                    for (var G = 0, E = this.length; G < E; G++) {
                        L.call(K(this[G], H), this.length > 1 || G > 0 ? I.cloneNode(true) : I)
                    }
                }
                if (F) {
                    o.each(F, z)
                }
            }
            return this;

            function K(N, O) {
                return M && o.nodeName(N, "table") && o.nodeName(O, "tr") ? (N.getElementsByTagName("tbody")[0] || N.appendChild(N.ownerDocument.createElement("tbody"))) : N
            }
        }
    };
    o.fn.init.prototype = o.fn;

    function z(E, F) {
        if (F.src) {
            o.ajax({
                url: F.src,
                async: false,
                dataType: "script"
            })
        } else {
            o.globalEval(F.text || F.textContent || F.innerHTML || "")
        }
        if (F.parentNode) {
            F.parentNode.removeChild(F)
        }
    }
    function e() {
        return +new Date
    }
    o.extend = o.fn.extend = function () {
        var J = arguments[0] || {},
            H = 1,
            I = arguments.length,
            E = false,
            G;
        if (typeof J === "boolean") {
            E = J;
            J = arguments[1] || {};
            H = 2
        }
        if (typeof J !== "object" && !o.isFunction(J)) {
            J = {}
        }
        if (I == H) {
            J = this;
            --H
        }
        for (; H < I; H++) {
            if ((G = arguments[H]) != null) {
                for (var F in G) {
                    var K = J[F],
                        L = G[F];
                    if (J === L) {
                        continue
                    }
                    if (E && L && typeof L === "object" && !L.nodeType) {
                        J[F] = o.extend(E, K || (L.length != null ? [] : {}), L)
                    } else {
                        if (L !== g) {
                            J[F] = L
                        }
                    }
                }
            }
        }
        return J
    };
    var b = /z-?index|font-?weight|opacity|zoom|line-?height/i,
        q = document.defaultView || {},
        s = Object.prototype.toString;
    o.extend({
        noConflict: function (E) {
            l.$ = p;
            if (E) {
                l.jQuery = y
            }
            return o
        },
        isFunction: function (E) {
            return s.call(E) === "[object Function]"
        },
        isArray: function (E) {
            return s.call(E) === "[object Array]"
        },
        isXMLDoc: function (E) {
            return E.nodeType === 9 && E.documentElement.nodeName !== "HTML" || !! E.ownerDocument && o.isXMLDoc(E.ownerDocument)
        },
        globalEval: function (G) {
            if (G && /\S/.test(G)) {
                var F = document.getElementsByTagName("head")[0] || document.documentElement,
                    E = document.createElement("script");
                E.type = "text/javascript";
                if (o.support.scriptEval) {
                    E.appendChild(document.createTextNode(G))
                } else {
                    E.text = G
                }
                F.insertBefore(E, F.firstChild);
                F.removeChild(E)
            }
        },
        nodeName: function (F, E) {
            return F.nodeName && F.nodeName.toUpperCase() == E.toUpperCase()
        },
        each: function (G, K, F) {
            var E, H = 0,
                I = G.length;
            if (F) {
                if (I === g) {
                    for (E in G) {
                        if (K.apply(G[E], F) === false) {
                            break
                        }
                    }
                } else {
                    for (; H < I;) {
                        if (K.apply(G[H++], F) === false) {
                            break
                        }
                    }
                }
            } else {
                if (I === g) {
                    for (E in G) {
                        if (K.call(G[E], E, G[E]) === false) {
                            break
                        }
                    }
                } else {
                    for (var J = G[0]; H < I && K.call(J, H, J) !== false; J = G[++H]) {}
                }
            }
            return G
        },
        prop: function (H, I, G, F, E) {
            if (o.isFunction(I)) {
                I = I.call(H, F)
            }
            return typeof I === "number" && G == "curCSS" && !b.test(E) ? I + "px" : I
        },
        className: {
            add: function (E, F) {
                o.each((F || "").split(/\s+/), function (G, H) {
                    if (E.nodeType == 1 && !o.className.has(E.className, H)) {
                        E.className += (E.className ? " " : "") + H
                    }
                })
            },
            remove: function (E, F) {
                if (E.nodeType == 1) {
                    E.className = F !== g ? o.grep(E.className.split(/\s+/), function (G) {
                        return !o.className.has(F, G)
                    }).join(" ") : ""
                }
            },
            has: function (F, E) {
                return F && o.inArray(E, (F.className || F).toString().split(/\s+/)) > -1
            }
        },
        swap: function (H, G, I) {
            var E = {};
            for (var F in G) {
                E[F] = H.style[F];
                H.style[F] = G[F]
            }
            I.call(H);
            for (var F in G) {
                H.style[F] = E[F]
            }
        },
        css: function (H, F, J, E) {
            if (F == "width" || F == "height") {
                var L, G = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                    K = F == "width" ? ["Left", "Right"] : ["Top", "Bottom"];

                function I() {
                    L = F == "width" ? H.offsetWidth : H.offsetHeight;
                    if (E === "border") {
                        return
                    }
                    o.each(K, function () {
                        if (!E) {
                            L -= parseFloat(o.curCSS(H, "padding" + this, true)) || 0
                        }
                        if (E === "margin") {
                            L += parseFloat(o.curCSS(H, "margin" + this, true)) || 0
                        } else {
                            L -= parseFloat(o.curCSS(H, "border" + this + "Width", true)) || 0
                        }
                    })
                }
                if (H.offsetWidth !== 0) {
                    I()
                } else {
                    o.swap(H, G, I)
                }
                return Math.max(0, Math.round(L))
            }
            return o.curCSS(H, F, J)
        },
        curCSS: function (I, F, G) {
            var L, E = I.style;
            if (F == "opacity" && !o.support.opacity) {
                L = o.attr(E, "opacity");
                return L == "" ? "1" : L
            }
            if (F.match(/float/i)) {
                F = w
            }
            if (!G && E && E[F]) {
                L = E[F]
            } else {
                if (q.getComputedStyle) {
                    if (F.match(/float/i)) {
                        F = "float"
                    }
                    F = F.replace(/([A-Z])/g, "-$1").toLowerCase();
                    var M = q.getComputedStyle(I, null);
                    if (M) {
                        L = M.getPropertyValue(F)
                    }
                    if (F == "opacity" && L == "") {
                        L = "1"
                    }
                } else {
                    if (I.currentStyle) {
                        var J = F.replace(/\-(\w)/g, function (N, O) {
                            return O.toUpperCase()
                        });
                        L = I.currentStyle[F] || I.currentStyle[J];
                        if (!/^\d+(px)?$/i.test(L) && /^\d/.test(L)) {
                            var H = E.left,
                                K = I.runtimeStyle.left;
                            I.runtimeStyle.left = I.currentStyle.left;
                            E.left = L || 0;
                            L = E.pixelLeft + "px";
                            E.left = H;
                            I.runtimeStyle.left = K
                        }
                    }
                }
            }
            return L
        },
        clean: function (F, K, I) {
            K = K || document;
            if (typeof K.createElement === "undefined") {
                K = K.ownerDocument || K[0] && K[0].ownerDocument || document
            }
            if (!I && F.length === 1 && typeof F[0] === "string") {
                var H = /^<(\w+)\s*\/?>$/.exec(F[0]);
                if (H) {
                    return [K.createElement(H[1])]
                }
            }
            var G = [],
                E = [],
                L = K.createElement("div");
            o.each(F, function (P, S) {
                if (typeof S === "number") {
                    S += ""
                }
                if (!S) {
                    return
                }
                if (typeof S === "string") {
                    S = S.replace(/(<(\w+)[^>]*?)\/>/g, function (U, V, T) {
                        return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i) ? U : V + "></" + T + ">"
                    });
                    var O = S.replace(/^\s+/, "").substring(0, 10).toLowerCase();
                    var Q = !O.indexOf("<opt") && [1, "<select multiple='multiple'>", "</select>"] || !O.indexOf("<leg") && [1, "<fieldset>", "</fieldset>"] || O.match(/^<(thead|tbody|tfoot|colg|cap)/) && [1, "<table>", "</table>"] || !O.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!O.indexOf("<td") || !O.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || !O.indexOf("<col") && [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"] || !o.support.htmlSerialize && [1, "div<div>", "</div>"] || [0, "", ""];
                    L.innerHTML = Q[1] + S + Q[2];
                    while (Q[0]--) {
                        L = L.lastChild
                    }
                    if (!o.support.tbody) {
                        var R = /<tbody/i.test(S),
                            N = !O.indexOf("<table") && !R ? L.firstChild && L.firstChild.childNodes : Q[1] == "<table>" && !R ? L.childNodes : [];
                        for (var M = N.length - 1; M >= 0; --M) {
                            if (o.nodeName(N[M], "tbody") && !N[M].childNodes.length) {
                                N[M].parentNode.removeChild(N[M])
                            }
                        }
                    }
                    if (!o.support.leadingWhitespace && /^\s/.test(S)) {
                        L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]), L.firstChild)
                    }
                    S = o.makeArray(L.childNodes)
                }
                if (S.nodeType) {
                    G.push(S)
                } else {
                    G = o.merge(G, S)
                }
            });
            if (I) {
                for (var J = 0; G[J]; J++) {
                    if (o.nodeName(G[J], "script") && (!G[J].type || G[J].type.toLowerCase() === "text/javascript")) {
                        E.push(G[J].parentNode ? G[J].parentNode.removeChild(G[J]) : G[J])
                    } else {
                        if (G[J].nodeType === 1) {
                            G.splice.apply(G, [J + 1, 0].concat(o.makeArray(G[J].getElementsByTagName("script"))))
                        }
                        I.appendChild(G[J])
                    }
                }
                return E
            }
            return G
        },
        attr: function (J, G, K) {
            if (!J || J.nodeType == 3 || J.nodeType == 8) {
                return g
            }
            var H = !o.isXMLDoc(J),
                L = K !== g;
            G = H && o.props[G] || G;
            if (J.tagName) {
                var F = /href|src|style/.test(G);
                if (G == "selected" && J.parentNode) {
                    J.parentNode.selectedIndex
                }
                if (G in J && H && !F) {
                    if (L) {
                        if (G == "type" && o.nodeName(J, "input") && J.parentNode) {
                            throw "type property can't be changed"
                        }
                        J[G] = K
                    }
                    if (o.nodeName(J, "form") && J.getAttributeNode(G)) {
                        return J.getAttributeNode(G).nodeValue
                    }
                    if (G == "tabIndex") {
                        var I = J.getAttributeNode("tabIndex");
                        return I && I.specified ? I.value : J.nodeName.match(/(button|input|object|select|textarea)/i) ? 0 : J.nodeName.match(/^(a|area)$/i) && J.href ? 0 : g
                    }
                    return J[G]
                }
                if (!o.support.style && H && G == "style") {
                    return o.attr(J.style, "cssText", K)
                }
                if (L) {
                    J.setAttribute(G, "" + K)
                }
                var E = !o.support.hrefNormalized && H && F ? J.getAttribute(G, 2) : J.getAttribute(G);
                return E === null ? g : E
            }
            if (!o.support.opacity && G == "opacity") {
                if (L) {
                    J.zoom = 1;
                    J.filter = (J.filter || "").replace(/alpha\([^)]*\)/, "") + (parseInt(K) + "" == "NaN" ? "" : "alpha(opacity=" + K * 100 + ")")
                }
                return J.filter && J.filter.indexOf("opacity=") >= 0 ? (parseFloat(J.filter.match(/opacity=([^)]*)/)[1]) / 100) + "" : ""
            }
            G = G.replace(/-([a-z])/ig, function (M, N) {
                return N.toUpperCase()
            });
            if (L) {
                J[G] = K
            }
            return J[G]
        },
        trim: function (E) {
            return (E || "").replace(/^\s+|\s+$/g, "")
        },
        makeArray: function (G) {
            var E = [];
            if (G != null) {
                var F = G.length;
                if (F == null || typeof G === "string" || o.isFunction(G) || G.setInterval) {
                    E[0] = G
                } else {
                    while (F) {
                        E[--F] = G[F]
                    }
                }
            }
            return E
        },
        inArray: function (G, H) {
            for (var E = 0, F = H.length; E < F; E++) {
                if (H[E] === G) {
                    return E
                }
            }
            return -1
        },
        merge: function (H, E) {
            var F = 0,
                G, I = H.length;
            if (!o.support.getAll) {
                while ((G = E[F++]) != null) {
                    if (G.nodeType != 8) {
                        H[I++] = G
                    }
                }
            } else {
                while ((G = E[F++]) != null) {
                    H[I++] = G
                }
            }
            return H
        },
        unique: function (K) {
            var F = [],
                E = {};
            try {
                for (var G = 0, H = K.length; G < H; G++) {
                    var J = o.data(K[G]);
                    if (!E[J]) {
                        E[J] = true;
                        F.push(K[G])
                    }
                }
            } catch (I) {
                F = K
            }
            return F
        },
        grep: function (F, J, E) {
            var G = [];
            for (var H = 0, I = F.length; H < I; H++) {
                if (!E != !J(F[H], H)) {
                    G.push(F[H])
                }
            }
            return G
        },
        map: function (E, J) {
            var F = [];
            for (var G = 0, H = E.length; G < H; G++) {
                var I = J(E[G], G);
                if (I != null) {
                    F[F.length] = I
                }
            }
            return F.concat.apply([], F)
        }
    });
    var C = navigator.userAgent.toLowerCase();
    o.browser = {
        version: (C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1],
        safari: /webkit/.test(C),
        opera: /opera/.test(C),
        msie: /msie/.test(C) && !/opera/.test(C),
        mozilla: /mozilla/.test(C) && !/(compatible|webkit)/.test(C)
    };
    o.each({
        parent: function (E) {
            return E.parentNode
        },
        parents: function (E) {
            return o.dir(E, "parentNode")
        },
        next: function (E) {
            return o.nth(E, 2, "nextSibling")
        },
        prev: function (E) {
            return o.nth(E, 2, "previousSibling")
        },
        nextAll: function (E) {
            return o.dir(E, "nextSibling")
        },
        prevAll: function (E) {
            return o.dir(E, "previousSibling")
        },
        siblings: function (E) {
            return o.sibling(E.parentNode.firstChild, E)
        },
        children: function (E) {
            return o.sibling(E.firstChild)
        },
        contents: function (E) {
            return o.nodeName(E, "iframe") ? E.contentDocument || E.contentWindow.document : o.makeArray(E.childNodes)
        }
    }, function (E, F) {
        o.fn[E] = function (G) {
            var H = o.map(this, F);
            if (G && typeof G == "string") {
                H = o.multiFilter(G, H)
            }
            return this.pushStack(o.unique(H), E, G)
        }
    });
    o.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (E, F) {
        o.fn[E] = function (G) {
            var J = [],
                L = o(G);
            for (var K = 0, H = L.length; K < H; K++) {
                var I = (K > 0 ? this.clone(true) : this).get();
                o.fn[F].apply(o(L[K]), I);
                J = J.concat(I)
            }
            return this.pushStack(J, E, G)
        }
    });
    o.each({
        removeAttr: function (E) {
            o.attr(this, E, "");
            if (this.nodeType == 1) {
                this.removeAttribute(E)
            }
        },
        addClass: function (E) {
            o.className.add(this, E)
        },
        removeClass: function (E) {
            o.className.remove(this, E)
        },
        toggleClass: function (F, E) {
            if (typeof E !== "boolean") {
                E = !o.className.has(this, F)
            }
            o.className[E ? "add" : "remove"](this, F)
        },
        remove: function (E) {
            if (!E || o.filter(E, [this]).length) {
                o("*", this).add([this]).each(function () {
                    o.event.remove(this);
                    o.removeData(this)
                });
                if (this.parentNode) {
                    this.parentNode.removeChild(this)
                }
            }
        },
        empty: function () {
            o(this).children().remove();
            while (this.firstChild) {
                this.removeChild(this.firstChild)
            }
        }
    }, function (E, F) {
        o.fn[E] = function () {
            return this.each(F, arguments)
        }
    });

    function j(E, F) {
        return E[0] && parseInt(o.curCSS(E[0], F, true), 10) || 0
    }
    var h = "jQuery" + e(),
        v = 0,
        A = {};
    o.extend({
        cache: {},
        data: function (F, E, G) {
            F = F == l ? A : F;
            var H = F[h];
            if (!H) {
                H = F[h] = ++v
            }
            if (E && !o.cache[H]) {
                o.cache[H] = {}
            }
            if (G !== g) {
                o.cache[H][E] = G
            }
            return E ? o.cache[H][E] : H
        },
        removeData: function (F, E) {
            F = F == l ? A : F;
            var H = F[h];
            if (E) {
                if (o.cache[H]) {
                    delete o.cache[H][E];
                    E = "";
                    for (E in o.cache[H]) {
                        break
                    }
                    if (!E) {
                        o.removeData(F)
                    }
                }
            } else {
                try {
                    delete F[h]
                } catch (G) {
                    if (F.removeAttribute) {
                        F.removeAttribute(h)
                    }
                }
                delete o.cache[H]
            }
        },
        queue: function (F, E, H) {
            if (F) {
                E = (E || "fx") + "queue";
                var G = o.data(F, E);
                if (!G || o.isArray(H)) {
                    G = o.data(F, E, o.makeArray(H))
                } else {
                    if (H) {
                        G.push(H)
                    }
                }
            }
            return G
        },
        dequeue: function (H, G) {
            var E = o.queue(H, G),
                F = E.shift();
            if (!G || G === "fx") {
                F = E[0]
            }
            if (F !== g) {
                F.call(H)
            }
        }
    });
    o.fn.extend({
        data: function (E, G) {
            var H = E.split(".");
            H[1] = H[1] ? "." + H[1] : "";
            if (G === g) {
                var F = this.triggerHandler("getData" + H[1] + "!", [H[0]]);
                if (F === g && this.length) {
                    F = o.data(this[0], E)
                }
                return F === g && H[1] ? this.data(H[0]) : F
            } else {
                return this.trigger("setData" + H[1] + "!", [H[0], G]).each(function () {
                    o.data(this, E, G)
                })
            }
        },
        removeData: function (E) {
            return this.each(function () {
                o.removeData(this, E)
            })
        },
        queue: function (E, F) {
            if (typeof E !== "string") {
                F = E;
                E = "fx"
            }
            if (F === g) {
                return o.queue(this[0], E)
            }
            return this.each(function () {
                var G = o.queue(this, E, F);
                if (E == "fx" && G.length == 1) {
                    G[0].call(this)
                }
            })
        },
        dequeue: function (E) {
            return this.each(function () {
                o.dequeue(this, E)
            })
        }
    });
    (function () {
        var R = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,
            L = 0,
            H = Object.prototype.toString;
        var F = function (Y, U, ab, ac) {
            ab = ab || [];
            U = U || document;
            if (U.nodeType !== 1 && U.nodeType !== 9) {
                return []
            }
            if (!Y || typeof Y !== "string") {
                return ab
            }
            var Z = [],
                W, af, ai, T, ad, V, X = true;
            R.lastIndex = 0;
            while ((W = R.exec(Y)) !== null) {
                Z.push(W[1]);
                if (W[2]) {
                    V = RegExp.rightContext;
                    break
                }
            }
            if (Z.length > 1 && M.exec(Y)) {
                if (Z.length === 2 && I.relative[Z[0]]) {
                    af = J(Z[0] + Z[1], U)
                } else {
                    af = I.relative[Z[0]] ? [U] : F(Z.shift(), U);
                    while (Z.length) {
                        Y = Z.shift();
                        if (I.relative[Y]) {
                            Y += Z.shift()
                        }
                        af = J(Y, af)
                    }
                }
            } else {
                var ae = ac ? {
                    expr: Z.pop(),
                    set: E(ac)
                } : F.find(Z.pop(), Z.length === 1 && U.parentNode ? U.parentNode : U, Q(U));
                af = F.filter(ae.expr, ae.set);
                if (Z.length > 0) {
                    ai = E(af)
                } else {
                    X = false
                }
                while (Z.length) {
                    var ah = Z.pop(),
                        ag = ah;
                    if (!I.relative[ah]) {
                        ah = ""
                    } else {
                        ag = Z.pop()
                    }
                    if (ag == null) {
                        ag = U
                    }
                    I.relative[ah](ai, ag, Q(U))
                }
            }
            if (!ai) {
                ai = af
            }
            if (!ai) {
                throw "Syntax error, unrecognized expression: " + (ah || Y)
            }
            if (H.call(ai) === "[object Array]") {
                if (!X) {
                    ab.push.apply(ab, ai)
                } else {
                    if (U.nodeType === 1) {
                        for (var aa = 0; ai[aa] != null; aa++) {
                            if (ai[aa] && (ai[aa] === true || ai[aa].nodeType === 1 && K(U, ai[aa]))) {
                                ab.push(af[aa])
                            }
                        }
                    } else {
                        for (var aa = 0; ai[aa] != null; aa++) {
                            if (ai[aa] && ai[aa].nodeType === 1) {
                                ab.push(af[aa])
                            }
                        }
                    }
                }
            } else {
                E(ai, ab)
            }
            if (V) {
                F(V, U, ab, ac);
                if (G) {
                    hasDuplicate = false;
                    ab.sort(G);
                    if (hasDuplicate) {
                        for (var aa = 1; aa < ab.length; aa++) {
                            if (ab[aa] === ab[aa - 1]) {
                                ab.splice(aa--, 1)
                            }
                        }
                    }
                }
            }
            return ab
        };
        F.matches = function (T, U) {
            return F(T, null, null, U)
        };
        F.find = function (aa, T, ab) {
            var Z, X;
            if (!aa) {
                return []
            }
            for (var W = 0, V = I.order.length; W < V; W++) {
                var Y = I.order[W],
                    X;
                if ((X = I.match[Y].exec(aa))) {
                    var U = RegExp.leftContext;
                    if (U.substr(U.length - 1) !== "\\") {
                        X[1] = (X[1] || "").replace(/\\/g, "");
                        Z = I.find[Y](X, T, ab);
                        if (Z != null) {
                            aa = aa.replace(I.match[Y], "");
                            break
                        }
                    }
                }
            }
            if (!Z) {
                Z = T.getElementsByTagName("*")
            }
            return {
                set: Z,
                expr: aa
            }
        };
        F.filter = function (ad, ac, ag, W) {
            var V = ad,
                ai = [],
                aa = ac,
                Y, T, Z = ac && ac[0] && Q(ac[0]);
            while (ad && ac.length) {
                for (var ab in I.filter) {
                    if ((Y = I.match[ab].exec(ad)) != null) {
                        var U = I.filter[ab],
                            ah, af;
                        T = false;
                        if (aa == ai) {
                            ai = []
                        }
                        if (I.preFilter[ab]) {
                            Y = I.preFilter[ab](Y, aa, ag, ai, W, Z);
                            if (!Y) {
                                T = ah = true
                            } else {
                                if (Y === true) {
                                    continue
                                }
                            }
                        }
                        if (Y) {
                            for (var X = 0;
                            (af = aa[X]) != null; X++) {
                                if (af) {
                                    ah = U(af, Y, X, aa);
                                    var ae = W ^ !! ah;
                                    if (ag && ah != null) {
                                        if (ae) {
                                            T = true
                                        } else {
                                            aa[X] = false
                                        }
                                    } else {
                                        if (ae) {
                                            ai.push(af);
                                            T = true
                                        }
                                    }
                                }
                            }
                        }
                        if (ah !== g) {
                            if (!ag) {
                                aa = ai
                            }
                            ad = ad.replace(I.match[ab], "");
                            if (!T) {
                                return []
                            }
                            break
                        }
                    }
                }
                if (ad == V) {
                    if (T == null) {
                        throw "Syntax error, unrecognized expression: " + ad
                    } else {
                        break
                    }
                }
                V = ad
            }
            return aa
        };
        var I = F.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
            },
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (T) {
                    return T.getAttribute("href")
                }
            },
            relative: {
                "+": function (aa, T, Z) {
                    var X = typeof T === "string",
                        ab = X && !/\W/.test(T),
                        Y = X && !ab;
                    if (ab && !Z) {
                        T = T.toUpperCase()
                    }
                    for (var W = 0, V = aa.length, U; W < V; W++) {
                        if ((U = aa[W])) {
                            while ((U = U.previousSibling) && U.nodeType !== 1) {}
                            aa[W] = Y || U && U.nodeName === T ? U || false : U === T
                        }
                    }
                    if (Y) {
                        F.filter(T, aa, true)
                    }
                },
                ">": function (Z, U, aa) {
                    var X = typeof U === "string";
                    if (X && !/\W/.test(U)) {
                        U = aa ? U : U.toUpperCase();
                        for (var V = 0, T = Z.length; V < T; V++) {
                            var Y = Z[V];
                            if (Y) {
                                var W = Y.parentNode;
                                Z[V] = W.nodeName === U ? W : false
                            }
                        }
                    } else {
                        for (var V = 0, T = Z.length; V < T; V++) {
                            var Y = Z[V];
                            if (Y) {
                                Z[V] = X ? Y.parentNode : Y.parentNode === U
                            }
                        }
                        if (X) {
                            F.filter(U, Z, true)
                        }
                    }
                },
                "": function (W, U, Y) {
                    var V = L++,
                        T = S;
                    if (!U.match(/\W/)) {
                        var X = U = Y ? U : U.toUpperCase();
                        T = P
                    }
                    T("parentNode", U, V, W, X, Y)
                },
                "~": function (W, U, Y) {
                    var V = L++,
                        T = S;
                    if (typeof U === "string" && !U.match(/\W/)) {
                        var X = U = Y ? U : U.toUpperCase();
                        T = P
                    }
                    T("previousSibling", U, V, W, X, Y)
                }
            },
            find: {
                ID: function (U, V, W) {
                    if (typeof V.getElementById !== "undefined" && !W) {
                        var T = V.getElementById(U[1]);
                        return T ? [T] : []
                    }
                },
                NAME: function (V, Y, Z) {
                    if (typeof Y.getElementsByName !== "undefined") {
                        var U = [],
                            X = Y.getElementsByName(V[1]);
                        for (var W = 0, T = X.length; W < T; W++) {
                            if (X[W].getAttribute("name") === V[1]) {
                                U.push(X[W])
                            }
                        }
                        return U.length === 0 ? null : U
                    }
                },
                TAG: function (T, U) {
                    return U.getElementsByTagName(T[1])
                }
            },
            preFilter: {
                CLASS: function (W, U, V, T, Z, aa) {
                    W = " " + W[1].replace(/\\/g, "") + " ";
                    if (aa) {
                        return W
                    }
                    for (var X = 0, Y;
                    (Y = U[X]) != null; X++) {
                        if (Y) {
                            if (Z ^ (Y.className && (" " + Y.className + " ").indexOf(W) >= 0)) {
                                if (!V) {
                                    T.push(Y)
                                }
                            } else {
                                if (V) {
                                    U[X] = false
                                }
                            }
                        }
                    }
                    return false
                },
                ID: function (T) {
                    return T[1].replace(/\\/g, "")
                },
                TAG: function (U, T) {
                    for (var V = 0; T[V] === false; V++) {}
                    return T[V] && Q(T[V]) ? U[1] : U[1].toUpperCase()
                },
                CHILD: function (T) {
                    if (T[1] == "nth") {
                        var U = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2] == "even" && "2n" || T[2] == "odd" && "2n+1" || !/\D/.test(T[2]) && "0n+" + T[2] || T[2]);
                        T[2] = (U[1] + (U[2] || 1)) - 0;
                        T[3] = U[3] - 0
                    }
                    T[0] = L++;
                    return T
                },
                ATTR: function (X, U, V, T, Y, Z) {
                    var W = X[1].replace(/\\/g, "");
                    if (!Z && I.attrMap[W]) {
                        X[1] = I.attrMap[W]
                    }
                    if (X[2] === "~=") {
                        X[4] = " " + X[4] + " "
                    }
                    return X
                },
                PSEUDO: function (X, U, V, T, Y) {
                    if (X[1] === "not") {
                        if (X[3].match(R).length > 1 || /^\w/.test(X[3])) {
                            X[3] = F(X[3], null, null, U)
                        } else {
                            var W = F.filter(X[3], U, V, true ^ Y);
                            if (!V) {
                                T.push.apply(T, W)
                            }
                            return false
                        }
                    } else {
                        if (I.match.POS.test(X[0]) || I.match.CHILD.test(X[0])) {
                            return true
                        }
                    }
                    return X
                },
                POS: function (T) {
                    T.unshift(true);
                    return T
                }
            },
            filters: {
                enabled: function (T) {
                    return T.disabled === false && T.type !== "hidden"
                },
                disabled: function (T) {
                    return T.disabled === true
                },
                checked: function (T) {
                    return T.checked === true
                },
                selected: function (T) {
                    T.parentNode.selectedIndex;
                    return T.selected === true
                },
                parent: function (T) {
                    return !!T.firstChild
                },
                empty: function (T) {
                    return !T.firstChild
                },
                has: function (V, U, T) {
                    return !!F(T[3], V).length
                },
                header: function (T) {
                    return /h\d/i.test(T.nodeName)
                },
                text: function (T) {
                    return "text" === T.type
                },
                radio: function (T) {
                    return "radio" === T.type
                },
                checkbox: function (T) {
                    return "checkbox" === T.type
                },
                file: function (T) {
                    return "file" === T.type
                },
                password: function (T) {
                    return "password" === T.type
                },
                submit: function (T) {
                    return "submit" === T.type
                },
                image: function (T) {
                    return "image" === T.type
                },
                reset: function (T) {
                    return "reset" === T.type
                },
                button: function (T) {
                    return "button" === T.type || T.nodeName.toUpperCase() === "BUTTON"
                },
                input: function (T) {
                    return /input|select|textarea|button/i.test(T.nodeName)
                }
            },
            setFilters: {
                first: function (U, T) {
                    return T === 0
                },
                last: function (V, U, T, W) {
                    return U === W.length - 1
                },
                even: function (U, T) {
                    return T % 2 === 0
                },
                odd: function (U, T) {
                    return T % 2 === 1
                },
                lt: function (V, U, T) {
                    return U < T[3] - 0
                },
                gt: function (V, U, T) {
                    return U > T[3] - 0
                },
                nth: function (V, U, T) {
                    return T[3] - 0 == U
                },
                eq: function (V, U, T) {
                    return T[3] - 0 == U
                }
            },
            filter: {
                PSEUDO: function (Z, V, W, aa) {
                    var U = V[1],
                        X = I.filters[U];
                    if (X) {
                        return X(Z, W, V, aa)
                    } else {
                        if (U === "contains") {
                            return (Z.textContent || Z.innerText || "").indexOf(V[3]) >= 0
                        } else {
                            if (U === "not") {
                                var Y = V[3];
                                for (var W = 0, T = Y.length; W < T; W++) {
                                    if (Y[W] === Z) {
                                        return false
                                    }
                                }
                                return true
                            }
                        }
                    }
                },
                CHILD: function (T, W) {
                    var Z = W[1],
                        U = T;
                    switch (Z) {
                    case "only":
                    case "first":
                        while (U = U.previousSibling) {
                            if (U.nodeType === 1) {
                                return false
                            }
                        }
                        if (Z == "first") {
                            return true
                        }
                        U = T;
                    case "last":
                        while (U = U.nextSibling) {
                            if (U.nodeType === 1) {
                                return false
                            }
                        }
                        return true;
                    case "nth":
                        var V = W[2],
                            ac = W[3];
                        if (V == 1 && ac == 0) {
                            return true
                        }
                        var Y = W[0],
                            ab = T.parentNode;
                        if (ab && (ab.sizcache !== Y || !T.nodeIndex)) {
                            var X = 0;
                            for (U = ab.firstChild; U; U = U.nextSibling) {
                                if (U.nodeType === 1) {
                                    U.nodeIndex = ++X
                                }
                            }
                            ab.sizcache = Y
                        }
                        var aa = T.nodeIndex - ac;
                        if (V == 0) {
                            return aa == 0
                        } else {
                            return (aa % V == 0 && aa / V >= 0)
                        }
                    }
                },
                ID: function (U, T) {
                    return U.nodeType === 1 && U.getAttribute("id") === T
                },
                TAG: function (U, T) {
                    return (T === "*" && U.nodeType === 1) || U.nodeName === T
                },
                CLASS: function (U, T) {
                    return (" " + (U.className || U.getAttribute("class")) + " ").indexOf(T) > -1
                },
                ATTR: function (Y, W) {
                    var V = W[1],
                        T = I.attrHandle[V] ? I.attrHandle[V](Y) : Y[V] != null ? Y[V] : Y.getAttribute(V),
                        Z = T + "",
                        X = W[2],
                        U = W[4];
                    return T == null ? X === "!=" : X === "=" ? Z === U : X === "*=" ? Z.indexOf(U) >= 0 : X === "~=" ? (" " + Z + " ").indexOf(U) >= 0 : !U ? Z && T !== false : X === "!=" ? Z != U : X === "^=" ? Z.indexOf(U) === 0 : X === "$=" ? Z.substr(Z.length - U.length) === U : X === "|=" ? Z === U || Z.substr(0, U.length + 1) === U + "-" : false
                },
                POS: function (X, U, V, Y) {
                    var T = U[2],
                        W = I.setFilters[T];
                    if (W) {
                        return W(X, V, U, Y)
                    }
                }
            }
        };
        var M = I.match.POS;
        for (var O in I.match) {
            I.match[O] = RegExp(I.match[O].source + /(?![^\[]*\])(?![^\(]*\))/.source)
        }
        var E = function (U, T) {
            U = Array.prototype.slice.call(U);
            if (T) {
                T.push.apply(T, U);
                return T
            }
            return U
        };
        try {
            Array.prototype.slice.call(document.documentElement.childNodes)
        } catch (N) {
            E = function (X, W) {
                var U = W || [];
                if (H.call(X) === "[object Array]") {
                    Array.prototype.push.apply(U, X)
                } else {
                    if (typeof X.length === "number") {
                        for (var V = 0, T = X.length; V < T; V++) {
                            U.push(X[V])
                        }
                    } else {
                        for (var V = 0; X[V]; V++) {
                            U.push(X[V])
                        }
                    }
                }
                return U
            }
        }
        var G;
        if (document.documentElement.compareDocumentPosition) {
            G = function (U, T) {
                var V = U.compareDocumentPosition(T) & 4 ? -1 : U === T ? 0 : 1;
                if (V === 0) {
                    hasDuplicate = true
                }
                return V
            }
        } else {
            if ("sourceIndex" in document.documentElement) {
                G = function (U, T) {
                    var V = U.sourceIndex - T.sourceIndex;
                    if (V === 0) {
                        hasDuplicate = true
                    }
                    return V
                }
            } else {
                if (document.createRange) {
                    G = function (W, U) {
                        var V = W.ownerDocument.createRange(),
                            T = U.ownerDocument.createRange();
                        V.selectNode(W);
                        V.collapse(true);
                        T.selectNode(U);
                        T.collapse(true);
                        var X = V.compareBoundaryPoints(Range.START_TO_END, T);
                        if (X === 0) {
                            hasDuplicate = true
                        }
                        return X
                    }
                }
            }
        }(function () {
            var U = document.createElement("form"),
                V = "script" + (new Date).getTime();
            U.innerHTML = "<input name='" + V + "'/>";
            var T = document.documentElement;
            T.insertBefore(U, T.firstChild);
            if ( !! document.getElementById(V)) {
                I.find.ID = function (X, Y, Z) {
                    if (typeof Y.getElementById !== "undefined" && !Z) {
                        var W = Y.getElementById(X[1]);
                        return W ? W.id === X[1] || typeof W.getAttributeNode !== "undefined" && W.getAttributeNode("id").nodeValue === X[1] ? [W] : g : []
                    }
                };
                I.filter.ID = function (Y, W) {
                    var X = typeof Y.getAttributeNode !== "undefined" && Y.getAttributeNode("id");
                    return Y.nodeType === 1 && X && X.nodeValue === W
                }
            }
            T.removeChild(U)
        })();
        (function () {
            var T = document.createElement("div");
            T.appendChild(document.createComment(""));
            if (T.getElementsByTagName("*").length > 0) {
                I.find.TAG = function (U, Y) {
                    var X = Y.getElementsByTagName(U[1]);
                    if (U[1] === "*") {
                        var W = [];
                        for (var V = 0; X[V]; V++) {
                            if (X[V].nodeType === 1) {
                                W.push(X[V])
                            }
                        }
                        X = W
                    }
                    return X
                }
            }
            T.innerHTML = "<a href='#'></a>";
            if (T.firstChild && typeof T.firstChild.getAttribute !== "undefined" && T.firstChild.getAttribute("href") !== "#") {
                I.attrHandle.href = function (U) {
                    return U.getAttribute("href", 2)
                }
            }
        })();
        if (document.querySelectorAll) {
            (function () {
                var T = F,
                    U = document.createElement("div");
                U.innerHTML = "<p class='TEST'></p>";
                if (U.querySelectorAll && U.querySelectorAll(".TEST").length === 0) {
                    return
                }
                F = function (Y, X, V, W) {
                    X = X || document;
                    if (!W && X.nodeType === 9 && !Q(X)) {
                        try {
                            return E(X.querySelectorAll(Y), V)
                        } catch (Z) {}
                    }
                    return T(Y, X, V, W)
                };
                F.find = T.find;
                F.filter = T.filter;
                F.selectors = T.selectors;
                F.matches = T.matches
            })()
        }
        if (document.getElementsByClassName && document.documentElement.getElementsByClassName) {
            (function () {
                var T = document.createElement("div");
                T.innerHTML = "<div class='test e'></div><div class='test'></div>";
                if (T.getElementsByClassName("e").length === 0) {
                    return
                }
                T.lastChild.className = "e";
                if (T.getElementsByClassName("e").length === 1) {
                    return
                }
                I.order.splice(1, 0, "CLASS");
                I.find.CLASS = function (U, V, W) {
                    if (typeof V.getElementsByClassName !== "undefined" && !W) {
                        return V.getElementsByClassName(U[1])
                    }
                }
            })()
        }
        function P(U, Z, Y, ad, aa, ac) {
            var ab = U == "previousSibling" && !ac;
            for (var W = 0, V = ad.length; W < V; W++) {
                var T = ad[W];
                if (T) {
                    if (ab && T.nodeType === 1) {
                        T.sizcache = Y;
                        T.sizset = W
                    }
                    T = T[U];
                    var X = false;
                    while (T) {
                        if (T.sizcache === Y) {
                            X = ad[T.sizset];
                            break
                        }
                        if (T.nodeType === 1 && !ac) {
                            T.sizcache = Y;
                            T.sizset = W
                        }
                        if (T.nodeName === Z) {
                            X = T;
                            break
                        }
                        T = T[U]
                    }
                    ad[W] = X
                }
            }
        }
        function S(U, Z, Y, ad, aa, ac) {
            var ab = U == "previousSibling" && !ac;
            for (var W = 0, V = ad.length; W < V; W++) {
                var T = ad[W];
                if (T) {
                    if (ab && T.nodeType === 1) {
                        T.sizcache = Y;
                        T.sizset = W
                    }
                    T = T[U];
                    var X = false;
                    while (T) {
                        if (T.sizcache === Y) {
                            X = ad[T.sizset];
                            break
                        }
                        if (T.nodeType === 1) {
                            if (!ac) {
                                T.sizcache = Y;
                                T.sizset = W
                            }
                            if (typeof Z !== "string") {
                                if (T === Z) {
                                    X = true;
                                    break
                                }
                            } else {
                                if (F.filter(Z, [T]).length > 0) {
                                    X = T;
                                    break
                                }
                            }
                        }
                        T = T[U]
                    }
                    ad[W] = X
                }
            }
        }
        var K = document.compareDocumentPosition ?
        function (U, T) {
            return U.compareDocumentPosition(T) & 16
        } : function (U, T) {
            return U !== T && (U.contains ? U.contains(T) : true)
        };
        var Q = function (T) {
            return T.nodeType === 9 && T.documentElement.nodeName !== "HTML" || !! T.ownerDocument && Q(T.ownerDocument)
        };
        var J = function (T, aa) {
            var W = [],
                X = "",
                Y, V = aa.nodeType ? [aa] : aa;
            while ((Y = I.match.PSEUDO.exec(T))) {
                X += Y[0];
                T = T.replace(I.match.PSEUDO, "")
            }
            T = I.relative[T] ? T + "*" : T;
            for (var Z = 0, U = V.length; Z < U; Z++) {
                F(T, V[Z], W)
            }
            return F.filter(X, W)
        };
        o.find = F;
        o.filter = F.filter;
        o.expr = F.selectors;
        o.expr[":"] = o.expr.filters;
        F.selectors.filters.hidden = function (T) {
            return T.offsetWidth === 0 || T.offsetHeight === 0
        };
        F.selectors.filters.visible = function (T) {
            return T.offsetWidth > 0 || T.offsetHeight > 0
        };
        F.selectors.filters.animated = function (T) {
            return o.grep(o.timers, function (U) {
                return T === U.elem
            }).length
        };
        o.multiFilter = function (V, T, U) {
            if (U) {
                V = ":not(" + V + ")"
            }
            return F.matches(V, T)
        };
        o.dir = function (V, U) {
            var T = [],
                W = V[U];
            while (W && W != document) {
                if (W.nodeType == 1) {
                    T.push(W)
                }
                W = W[U]
            }
            return T
        };
        o.nth = function (X, T, V, W) {
            T = T || 1;
            var U = 0;
            for (; X; X = X[V]) {
                if (X.nodeType == 1 && ++U == T) {
                    break
                }
            }
            return X
        };
        o.sibling = function (V, U) {
            var T = [];
            for (; V; V = V.nextSibling) {
                if (V.nodeType == 1 && V != U) {
                    T.push(V)
                }
            }
            return T
        };
        return;
        l.Sizzle = F
    })();
    o.event = {
        add: function (I, F, H, K) {
            if (I.nodeType == 3 || I.nodeType == 8) {
                return
            }
            if (I.setInterval && I != l) {
                I = l
            }
            if (!H.guid) {
                H.guid = this.guid++
            }
            if (K !== g) {
                var G = H;
                H = this.proxy(G);
                H.data = K
            }
            var E = o.data(I, "events") || o.data(I, "events", {}),
                J = o.data(I, "handle") || o.data(I, "handle", function () {
                return typeof o !== "undefined" && !o.event.triggered ? o.event.handle.apply(arguments.callee.elem, arguments) : g
            });
            J.elem = I;
            o.each(F.split(/\s+/), function (M, N) {
                var O = N.split(".");
                N = O.shift();
                H.type = O.slice().sort().join(".");
                var L = E[N];
                if (o.event.specialAll[N]) {
                    o.event.specialAll[N].setup.call(I, K, O)
                }
                if (!L) {
                    L = E[N] = {};
                    if (!o.event.special[N] || o.event.special[N].setup.call(I, K, O) === false) {
                        if (I.addEventListener) {
                            I.addEventListener(N, J, false)
                        } else {
                            if (I.attachEvent) {
                                I.attachEvent("on" + N, J)
                            }
                        }
                    }
                }
                L[H.guid] = H;
                o.event.global[N] = true
            });
            I = null
        },
        guid: 1,
        global: {},
        remove: function (K, H, J) {
            if (K.nodeType == 3 || K.nodeType == 8) {
                return
            }
            var G = o.data(K, "events"),
                F, E;
            if (G) {
                if (H === g || (typeof H === "string" && H.charAt(0) == ".")) {
                    for (var I in G) {
                        this.remove(K, I + (H || ""))
                    }
                } else {
                    if (H.type) {
                        J = H.handler;
                        H = H.type
                    }
                    o.each(H.split(/\s+/), function (M, O) {
                        var Q = O.split(".");
                        O = Q.shift();
                        var N = RegExp("(^|\\.)" + Q.slice().sort().join(".*\\.") + "(\\.|$)");
                        if (G[O]) {
                            if (J) {
                                delete G[O][J.guid]
                            } else {
                                for (var P in G[O]) {
                                    if (N.test(G[O][P].type)) {
                                        delete G[O][P]
                                    }
                                }
                            }
                            if (o.event.specialAll[O]) {
                                o.event.specialAll[O].teardown.call(K, Q)
                            }
                            for (F in G[O]) {
                                break
                            }
                            if (!F) {
                                if (!o.event.special[O] || o.event.special[O].teardown.call(K, Q) === false) {
                                    if (K.removeEventListener) {
                                        K.removeEventListener(O, o.data(K, "handle"), false)
                                    } else {
                                        if (K.detachEvent) {
                                            K.detachEvent("on" + O, o.data(K, "handle"))
                                        }
                                    }
                                }
                                F = null;
                                delete G[O]
                            }
                        }
                    })
                }
                for (F in G) {
                    break
                }
                if (!F) {
                    var L = o.data(K, "handle");
                    if (L) {
                        L.elem = null
                    }
                    o.removeData(K, "events");
                    o.removeData(K, "handle")
                }
            }
        },
        trigger: function (I, K, H, E) {
            var G = I.type || I;
            if (!E) {
                I = typeof I === "object" ? I[h] ? I : o.extend(o.Event(G), I) : o.Event(G);
                if (G.indexOf("!") >= 0) {
                    I.type = G = G.slice(0, -1);
                    I.exclusive = true
                }
                if (!H) {
                    I.stopPropagation();
                    if (this.global[G]) {
                        o.each(o.cache, function () {
                            if (this.events && this.events[G]) {
                                o.event.trigger(I, K, this.handle.elem)
                            }
                        })
                    }
                }
                if (!H || H.nodeType == 3 || H.nodeType == 8) {
                    return g
                }
                I.result = g;
                I.target = H;
                K = o.makeArray(K);
                K.unshift(I)
            }
            I.currentTarget = H;
            var J = o.data(H, "handle");
            if (J) {
                J.apply(H, K)
            }
            if ((!H[G] || (o.nodeName(H, "a") && G == "click")) && H["on" + G] && H["on" + G].apply(H, K) === false) {
                I.result = false
            }
            if (!E && H[G] && !I.isDefaultPrevented() && !(o.nodeName(H, "a") && G == "click")) {
                this.triggered = true;
                try {
                    H[G]()
                } catch (L) {}
            }
            this.triggered = false;
            if (!I.isPropagationStopped()) {
                var F = H.parentNode || H.ownerDocument;
                if (F) {
                    o.event.trigger(I, K, F, true)
                }
            }
        },
        handle: function (K) {
            var J, E;
            K = arguments[0] = o.event.fix(K || l.event);
            K.currentTarget = this;
            var L = K.type.split(".");
            K.type = L.shift();
            J = !L.length && !K.exclusive;
            var I = RegExp("(^|\\.)" + L.slice().sort().join(".*\\.") + "(\\.|$)");
            E = (o.data(this, "events") || {})[K.type];
            for (var G in E) {
                var H = E[G];
                if (J || I.test(H.type)) {
                    K.handler = H;
                    K.data = H.data;
                    var F = H.apply(this, arguments);
                    if (F !== g) {
                        K.result = F;
                        if (F === false) {
                            K.preventDefault();
                            K.stopPropagation()
                        }
                    }
                    if (K.isImmediatePropagationStopped()) {
                        break
                    }
                }
            }
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (H) {
            if (H[h]) {
                return H
            }
            var F = H;
            H = o.Event(F);
            for (var G = this.props.length, J; G;) {
                J = this.props[--G];
                H[J] = F[J]
            }
            if (!H.target) {
                H.target = H.srcElement || document
            }
            if (H.target.nodeType == 3) {
                H.target = H.target.parentNode
            }
            if (!H.relatedTarget && H.fromElement) {
                H.relatedTarget = H.fromElement == H.target ? H.toElement : H.fromElement
            }
            if (H.pageX == null && H.clientX != null) {
                var I = document.documentElement,
                    E = document.body;
                H.pageX = H.clientX + (I && I.scrollLeft || E && E.scrollLeft || 0) - (I.clientLeft || 0);
                H.pageY = H.clientY + (I && I.scrollTop || E && E.scrollTop || 0) - (I.clientTop || 0)
            }
            if (!H.which && ((H.charCode || H.charCode === 0) ? H.charCode : H.keyCode)) {
                H.which = H.charCode || H.keyCode
            }
            if (!H.metaKey && H.ctrlKey) {
                H.metaKey = H.ctrlKey
            }
            if (!H.which && H.button) {
                H.which = (H.button & 1 ? 1 : (H.button & 2 ? 3 : (H.button & 4 ? 2 : 0)))
            }
            return H
        },
        proxy: function (F, E) {
            E = E ||
            function () {
                return F.apply(this, arguments)
            };
            E.guid = F.guid = F.guid || E.guid || this.guid++;
            return E
        },
        special: {
            ready: {
                setup: B,
                teardown: function () {}
            }
        },
        specialAll: {
            live: {
                setup: function (E, F) {
                    o.event.add(this, F[0], c)
                },
                teardown: function (G) {
                    if (G.length) {
                        var E = 0,
                            F = RegExp("(^|\\.)" + G[0] + "(\\.|$)");
                        o.each((o.data(this, "events").live || {}), function () {
                            if (F.test(this.type)) {
                                E++
                            }
                        });
                        if (E < 1) {
                            o.event.remove(this, G[0], c)
                        }
                    }
                }
            }
        }
    };
    o.Event = function (E) {
        if (!this.preventDefault) {
            return new o.Event(E)
        }
        if (E && E.type) {
            this.originalEvent = E;
            this.type = E.type
        } else {
            this.type = E
        }
        this.timeStamp = e();
        this[h] = true
    };

    function k() {
        return false
    }
    function u() {
        return true
    }
    o.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = u;
            var E = this.originalEvent;
            if (!E) {
                return
            }
            if (E.preventDefault) {
                E.preventDefault()
            }
            E.returnValue = false
        },
        stopPropagation: function () {
            this.isPropagationStopped = u;
            var E = this.originalEvent;
            if (!E) {
                return
            }
            if (E.stopPropagation) {
                E.stopPropagation()
            }
            E.cancelBubble = true
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = u;
            this.stopPropagation()
        },
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k
    };
    var a = function (F) {
        var E = F.relatedTarget;
        while (E && E != this) {
            try {
                E = E.parentNode
            } catch (G) {
                E = this
            }
        }
        if (E != this) {
            F.type = F.data;
            o.event.handle.apply(this, arguments)
        }
    };
    o.each({
        mouseover: "mouseenter",
        mouseout: "mouseleave"
    }, function (F, E) {
        o.event.special[E] = {
            setup: function () {
                o.event.add(this, F, a, E)
            },
            teardown: function () {
                o.event.remove(this, F, a)
            }
        }
    });
    o.fn.extend({
        bind: function (F, G, E) {
            return F == "unload" ? this.one(F, G, E) : this.each(function () {
                o.event.add(this, F, E || G, E && G)
            })
        },
        one: function (G, H, F) {
            var E = o.event.proxy(F || H, function (I) {
                o(this).unbind(I, E);
                return (F || H).apply(this, arguments)
            });
            return this.each(function () {
                o.event.add(this, G, E, F && H)
            })
        },
        unbind: function (F, E) {
            return this.each(function () {
                o.event.remove(this, F, E)
            })
        },
        trigger: function (E, F) {
            return this.each(function () {
                o.event.trigger(E, F, this)
            })
        },
        triggerHandler: function (E, G) {
            if (this[0]) {
                var F = o.Event(E);
                F.preventDefault();
                F.stopPropagation();
                o.event.trigger(F, G, this[0]);
                return F.result
            }
        },
        toggle: function (G) {
            var E = arguments,
                F = 1;
            while (F < E.length) {
                o.event.proxy(G, E[F++])
            }
            return this.click(o.event.proxy(G, function (H) {
                this.lastToggle = (this.lastToggle || 0) % F;
                H.preventDefault();
                return E[this.lastToggle++].apply(this, arguments) || false
            }))
        },
        hover: function (E, F) {
            return this.mouseenter(E).mouseleave(F)
        },
        ready: function (E) {
            B();
            if (o.isReady) {
                E.call(document, o)
            } else {
                o.readyList.push(E)
            }
            return this
        },
        live: function (G, F) {
            var E = o.event.proxy(F);
            E.guid += this.selector + G;
            o(document).bind(i(G, this.selector), this.selector, E);
            return this
        },
        die: function (F, E) {
            o(document).unbind(i(F, this.selector), E ? {
                guid: E.guid + this.selector + F
            } : null);
            return this
        }
    });

    function c(H) {
        var E = RegExp("(^|\\.)" + H.type + "(\\.|$)"),
            G = true,
            F = [];
        o.each(o.data(this, "events").live || [], function (I, J) {
            if (E.test(J.type)) {
                var K = o(H.target).closest(J.data)[0];
                if (K) {
                    F.push({
                        elem: K,
                        fn: J
                    })
                }
            }
        });
        F.sort(function (J, I) {
            return o.data(J.elem, "closest") - o.data(I.elem, "closest")
        });
        o.each(F, function () {
            if (this.fn.call(this.elem, H, this.fn.data) === false) {
                return (G = false)
            }
        });
        return G
    }
    function i(F, E) {
        return ["live", F, E.replace(/\./g, "`").replace(/ /g, "|")].join(".")
    }
    o.extend({
        isReady: false,
        readyList: [],
        ready: function () {
            if (!o.isReady) {
                o.isReady = true;
                if (o.readyList) {
                    o.each(o.readyList, function () {
                        this.call(document, o)
                    });
                    o.readyList = null
                }
                o(document).triggerHandler("ready")
            }
        }
    });
    var x = false;

    function B() {
        if (x) {
            return
        }
        x = true;
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", function () {
                document.removeEventListener("DOMContentLoaded", arguments.callee, false);
                o.ready()
            }, false)
        } else {
            if (document.attachEvent) {
                document.attachEvent("onreadystatechange", function () {
                    if (document.readyState === "complete") {
                        document.detachEvent("onreadystatechange", arguments.callee);
                        o.ready()
                    }
                });
                if (document.documentElement.doScroll && l == l.top) {
                    (function () {
                        if (o.isReady) {
                            return
                        }
                        try {
                            document.documentElement.doScroll("left")
                        } catch (E) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        o.ready()
                    })()
                }
            }
        }
        o.event.add(l, "load", o.ready)
    }
    o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","), function (F, E) {
        o.fn[E] = function (G) {
            return G ? this.bind(E, G) : this.trigger(E)
        }
    });
    o(l).bind("unload", function () {
        for (var E in o.cache) {
            if (E != 1 && o.cache[E].handle) {
                o.event.remove(o.cache[E].handle.elem)
            }
        }
    });
    (function () {
        o.support = {};
        var F = document.documentElement,
            G = document.createElement("script"),
            K = document.createElement("div"),
            J = "script" + (new Date).getTime();
        K.style.display = "none";
        K.innerHTML = '   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';
        var H = K.getElementsByTagName("*"),
            E = K.getElementsByTagName("a")[0];
        if (!H || !H.length || !E) {
            return
        }
        o.support = {
            leadingWhitespace: K.firstChild.nodeType == 3,
            tbody: !K.getElementsByTagName("tbody").length,
            objectAll: !! K.getElementsByTagName("object")[0].getElementsByTagName("*").length,
            htmlSerialize: !! K.getElementsByTagName("link").length,
            style: /red/.test(E.getAttribute("style")),
            hrefNormalized: E.getAttribute("href") === "/a",
            opacity: E.style.opacity === "0.5",
            cssFloat: !! E.style.cssFloat,
            scriptEval: false,
            noCloneEvent: true,
            boxModel: null
        };
        G.type = "text/javascript";
        try {
            G.appendChild(document.createTextNode("window." + J + "=1;"))
        } catch (I) {}
        F.insertBefore(G, F.firstChild);
        if (l[J]) {
            o.support.scriptEval = true;
            delete l[J]
        }
        F.removeChild(G);
        if (K.attachEvent && K.fireEvent) {
            K.attachEvent("onclick", function () {
                o.support.noCloneEvent = false;
                K.detachEvent("onclick", arguments.callee)
            });
            K.cloneNode(true).fireEvent("onclick")
        }
        o(function () {
            var L = document.createElement("div");
            L.style.width = L.style.paddingLeft = "1px";
            document.body.appendChild(L);
            o.boxModel = o.support.boxModel = L.offsetWidth === 2;
            document.body.removeChild(L).style.display = "none"
        })
    })();
    var w = o.support.cssFloat ? "cssFloat" : "styleFloat";
    o.props = {
        "for": "htmlFor",
        "class": "className",
        "float": w,
        cssFloat: w,
        styleFloat: w,
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        tabindex: "tabIndex"
    };
    o.fn.extend({
        _load: o.fn.load,
        load: function (G, J, K) {
            if (typeof G !== "string") {
                return this._load(G)
            }
            var I = G.indexOf(" ");
            if (I >= 0) {
                var E = G.slice(I, G.length);
                G = G.slice(0, I)
            }
            var H = "GET";
            if (J) {
                if (o.isFunction(J)) {
                    K = J;
                    J = null
                } else {
                    if (typeof J === "object") {
                        J = o.param(J);
                        H = "POST"
                    }
                }
            }
            var F = this;
            o.ajax({
                url: G,
                type: H,
                dataType: "html",
                data: J,
                complete: function (M, L) {
                    if (L == "success" || L == "notmodified") {
                        F.html(E ? o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g, "")).find(E) : M.responseText)
                    }
                    if (K) {
                        F.each(K, [M.responseText, L, M])
                    }
                }
            });
            return this
        },
        serialize: function () {
            return o.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? o.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || /select|textarea/i.test(this.nodeName) || /text|hidden|password|search/i.test(this.type))
            }).map(function (E, F) {
                var G = o(this).val();
                return G == null ? null : o.isArray(G) ? o.map(G, function (I, H) {
                    return {
                        name: F.name,
                        value: I
                    }
                }) : {
                    name: F.name,
                    value: G
                }
            }).get()
        }
    });
    o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","), function (E, F) {
        o.fn[F] = function (G) {
            return this.bind(F, G)
        }
    });
    var r = e();
    o.extend({
        get: function (E, G, H, F) {
            if (o.isFunction(G)) {
                H = G;
                G = null
            }
            return o.ajax({
                type: "GET",
                url: E,
                data: G,
                success: H,
                dataType: F
            })
        },
        getScript: function (E, F) {
            return o.get(E, null, F, "script")
        },
        getJSON: function (E, F, G) {
            return o.get(E, F, G, "json")
        },
        post: function (E, G, H, F) {
            if (o.isFunction(G)) {
                H = G;
                G = {}
            }
            return o.ajax({
                type: "POST",
                url: E,
                data: G,
                success: H,
                dataType: F
            })
        },
        ajaxSetup: function (E) {
            o.extend(o.ajaxSettings, E)
        },
        ajaxSettings: {
            url: location.href,
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            xhr: function () {
                return l.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest()
            },
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                script: "text/javascript, application/javascript",
                json: "application/json, text/javascript",
                text: "text/plain",
                _default: "*/*"
            }
        },
        lastModified: {},
        ajax: function (M) {
            M = o.extend(true, M, o.extend(true, {}, o.ajaxSettings, M));
            var W, F = /=\?(&|$)/g,
                R, V, G = M.type.toUpperCase();
            if (M.data && M.processData && typeof M.data !== "string") {
                M.data = o.param(M.data)
            }
            if (M.dataType == "jsonp") {
                if (G == "GET") {
                    if (!M.url.match(F)) {
                        M.url += (M.url.match(/\?/) ? "&" : "?") + (M.jsonp || "callback") + "=?"
                    }
                } else {
                    if (!M.data || !M.data.match(F)) {
                        M.data = (M.data ? M.data + "&" : "") + (M.jsonp || "callback") + "=?"
                    }
                }
                M.dataType = "json"
            }
            if (M.dataType == "json" && (M.data && M.data.match(F) || M.url.match(F))) {
                W = "jsonp" + r++;
                if (M.data) {
                    M.data = (M.data + "").replace(F, "=" + W + "$1")
                }
                M.url = M.url.replace(F, "=" + W + "$1");
                M.dataType = "script";
                l[W] = function (X) {
                    V = X;
                    I();
                    L();
                    l[W] = g;
                    try {
                        delete l[W]
                    } catch (Y) {}
                    if (H) {
                        H.removeChild(T)
                    }
                }
            }
            if (M.dataType == "script" && M.cache == null) {
                M.cache = false
            }
            if (M.cache === false && G == "GET") {
                var E = e();
                var U = M.url.replace(/(\?|&)_=.*?(&|$)/, "$1_=" + E + "$2");
                M.url = U + ((U == M.url) ? (M.url.match(/\?/) ? "&" : "?") + "_=" + E : "")
            }
            if (M.data && G == "GET") {
                M.url += (M.url.match(/\?/) ? "&" : "?") + M.data;
                M.data = null
            }
            if (M.global && !o.active++) {
                o.event.trigger("ajaxStart")
            }
            var Q = /^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);
            if (M.dataType == "script" && G == "GET" && Q && (Q[1] && Q[1] != location.protocol || Q[2] != location.host)) {
                var H = document.getElementsByTagName("head")[0];
                var T = document.createElement("script");
                T.src = M.url;
                if (M.scriptCharset) {
                    T.charset = M.scriptCharset
                }
                if (!W) {
                    var O = false;
                    T.onload = T.onreadystatechange = function () {
                        if (!O && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                            O = true;
                            I();
                            L();
                            T.onload = T.onreadystatechange = null;
                            H.removeChild(T)
                        }
                    }
                }
                H.appendChild(T);
                return g
            }
            var K = false;
            var J = M.xhr();
            if (M.username) {
                J.open(G, M.url, M.async, M.username, M.password)
            } else {
                J.open(G, M.url, M.async)
            }
            try {
                if (M.data) {
                    J.setRequestHeader("Content-Type", M.contentType)
                }
                if (M.ifModified) {
                    J.setRequestHeader("If-Modified-Since", o.lastModified[M.url] || "Thu, 01 Jan 1970 00:00:00 GMT")
                }
                J.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                J.setRequestHeader("Accept", M.dataType && M.accepts[M.dataType] ? M.accepts[M.dataType] + ", */*" : M.accepts._default)
            } catch (S) {}
            if (M.beforeSend && M.beforeSend(J, M) === false) {
                if (M.global && !--o.active) {
                    o.event.trigger("ajaxStop")
                }
                J.abort();
                return false
            }
            if (M.global) {
                o.event.trigger("ajaxSend", [J, M])
            }
            var N = function (X) {
                if (J.readyState == 0) {
                    if (P) {
                        clearInterval(P);
                        P = null;
                        if (M.global && !--o.active) {
                            o.event.trigger("ajaxStop")
                        }
                    }
                } else {
                    if (!K && J && (J.readyState == 4 || X == "timeout")) {
                        K = true;
                        if (P) {
                            clearInterval(P);
                            P = null
                        }
                        R = X == "timeout" ? "timeout" : !o.httpSuccess(J) ? "error" : M.ifModified && o.httpNotModified(J, M.url) ? "notmodified" : "success";
                        if (R == "success") {
                            try {
                                V = o.httpData(J, M.dataType, M)
                            } catch (Z) {
                                R = "parsererror"
                            }
                        }
                        if (R == "success") {
                            var Y;
                            try {
                                Y = J.getResponseHeader("Last-Modified")
                            } catch (Z) {}
                            if (M.ifModified && Y) {
                                o.lastModified[M.url] = Y
                            }
                            if (!W) {
                                I()
                            }
                        } else {
                            o.handleError(M, J, R)
                        }
                        L();
                        if (X) {
                            J.abort()
                        }
                        if (M.async) {
                            J = null
                        }
                    }
                }
            };
            if (M.async) {
                var P = setInterval(N, 13);
                if (M.timeout > 0) {
                    setTimeout(function () {
                        if (J && !K) {
                            N("timeout")
                        }
                    }, M.timeout)
                }
            }
            try {
                J.send(M.data)
            } catch (S) {
                o.handleError(M, J, null, S)
            }
            if (!M.async) {
                N()
            }
            function I() {
                if (M.success) {
                    M.success(V, R)
                }
                if (M.global) {
                    o.event.trigger("ajaxSuccess", [J, M])
                }
            }
            function L() {
                if (M.complete) {
                    M.complete(J, R)
                }
                if (M.global) {
                    o.event.trigger("ajaxComplete", [J, M])
                }
                if (M.global && !--o.active) {
                    o.event.trigger("ajaxStop")
                }
            }
            return J
        },
        handleError: function (F, H, E, G) {
            if (F.error) {
                F.error(H, E, G)
            }
            if (F.global) {
                o.event.trigger("ajaxError", [H, F, G])
            }
        },
        active: 0,
        httpSuccess: function (F) {
            try {
                return !F.status && location.protocol == "file:" || (F.status >= 200 && F.status < 300) || F.status == 304 || F.status == 1223
            } catch (E) {}
            return false
        },
        httpNotModified: function (G, E) {
            try {
                var H = G.getResponseHeader("Last-Modified");
                return G.status == 304 || H == o.lastModified[E]
            } catch (F) {}
            return false
        },
        httpData: function (J, H, G) {
            var F = J.getResponseHeader("content-type"),
                E = H == "xml" || !H && F && F.indexOf("xml") >= 0,
                I = E ? J.responseXML : J.responseText;
            if (E && I.documentElement.tagName == "parsererror") {
                throw "parsererror"
            }
            if (G && G.dataFilter) {
                I = G.dataFilter(I, H)
            }
            if (typeof I === "string") {
                if (H == "script") {
                    o.globalEval(I)
                }
                if (H == "json") {
                    I = l["eval"]("(" + I + ")")
                }
            }
            return I
        },
        param: function (E) {
            var G = [];

            function H(I, J) {
                G[G.length] = encodeURIComponent(I) + "=" + encodeURIComponent(J)
            }
            if (o.isArray(E) || E.jquery) {
                o.each(E, function () {
                    H(this.name, this.value)
                })
            } else {
                for (var F in E) {
                    if (o.isArray(E[F])) {
                        o.each(E[F], function () {
                            H(F, this)
                        })
                    } else {
                        H(F, o.isFunction(E[F]) ? E[F]() : E[F])
                    }
                }
            }
            return G.join("&").replace(/%20/g, "+")
        }
    });
    var m = {},
        n, d = [
        ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
        ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
        ["opacity"]
    ];

    function t(F, E) {
        var G = {};
        o.each(d.concat.apply([], d.slice(0, E)), function () {
            G[this] = F
        });
        return G
    }
    o.fn.extend({
        show: function (J, L) {
            if (J) {
                return this.animate(t("show", 3), J, L)
            } else {
                for (var H = 0, F = this.length; H < F; H++) {
                    var E = o.data(this[H], "olddisplay");
                    this[H].style.display = E || "";
                    if (o.css(this[H], "display") === "none") {
                        var G = this[H].tagName,
                            K;
                        if (m[G]) {
                            K = m[G]
                        } else {
                            var I = o("<" + G + " />").appendTo("body");
                            K = I.css("display");
                            if (K === "none") {
                                K = "block"
                            }
                            I.remove();
                            m[G] = K
                        }
                        o.data(this[H], "olddisplay", K)
                    }
                }
                for (var H = 0, F = this.length; H < F; H++) {
                    this[H].style.display = o.data(this[H], "olddisplay") || ""
                }
                return this
            }
        },
        hide: function (H, I) {
            if (H) {
                return this.animate(t("hide", 3), H, I)
            } else {
                for (var G = 0, F = this.length; G < F; G++) {
                    var E = o.data(this[G], "olddisplay");
                    if (!E && E !== "none") {
                        o.data(this[G], "olddisplay", o.css(this[G], "display"))
                    }
                }
                for (var G = 0, F = this.length; G < F; G++) {
                    this[G].style.display = "none"
                }
                return this
            }
        },
        _toggle: o.fn.toggle,
        toggle: function (G, F) {
            var E = typeof G === "boolean";
            return o.isFunction(G) && o.isFunction(F) ? this._toggle.apply(this, arguments) : G == null || E ? this.each(function () {
                var H = E ? G : o(this).is(":hidden");
                o(this)[H ? "show" : "hide"]()
            }) : this.animate(t("toggle", 3), G, F)
        },
        fadeTo: function (E, G, F) {
            return this.animate({
                opacity: G
            }, E, F)
        },
        animate: function (I, F, H, G) {
            var E = o.speed(F, H, G);
            return this[E.queue === false ? "each" : "queue"](function () {
                var K = o.extend({}, E),
                    M, L = this.nodeType == 1 && o(this).is(":hidden"),
                    J = this;
                for (M in I) {
                    if (I[M] == "hide" && L || I[M] == "show" && !L) {
                        return K.complete.call(this)
                    }
                    if ((M == "height" || M == "width") && this.style) {
                        K.display = o.css(this, "display");
                        K.overflow = this.style.overflow
                    }
                }
                if (K.overflow != null) {
                    this.style.overflow = "hidden"
                }
                K.curAnim = o.extend({}, I);
                o.each(I, function (O, S) {
                    var R = new o.fx(J, K, O);
                    if (/toggle|show|hide/.test(S)) {
                        R[S == "toggle" ? L ? "show" : "hide" : S](I)
                    } else {
                        var Q = S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),
                            T = R.cur(true) || 0;
                        if (Q) {
                            var N = parseFloat(Q[2]),
                                P = Q[3] || "px";
                            if (P != "px") {
                                J.style[O] = (N || 1) + P;
                                T = ((N || 1) / R.cur(true)) * T;
                                J.style[O] = T + P
                            }
                            if (Q[1]) {
                                N = ((Q[1] == "-=" ? -1 : 1) * N) + T
                            }
                            R.custom(T, N, P)
                        } else {
                            R.custom(T, S, "")
                        }
                    }
                });
                return true
            })
        },
        stop: function (F, E) {
            var G = o.timers;
            if (F) {
                this.queue([])
            }
            this.each(function () {
                for (var H = G.length - 1; H >= 0; H--) {
                    if (G[H].elem == this) {
                        if (E) {
                            G[H](true)
                        }
                        G.splice(H, 1)
                    }
                }
            });
            if (!E) {
                this.dequeue()
            }
            return this
        }
    });
    o.each({
        slideDown: t("show", 1),
        slideUp: t("hide", 1),
        slideToggle: t("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        }
    }, function (E, F) {
        o.fn[E] = function (G, H) {
            return this.animate(F, G, H)
        }
    });
    o.extend({
        speed: function (G, H, F) {
            var E = typeof G === "object" ? G : {
                complete: F || !F && H || o.isFunction(G) && G,
                duration: G,
                easing: F && H || H && !o.isFunction(H) && H
            };
            E.duration = o.fx.off ? 0 : typeof E.duration === "number" ? E.duration : o.fx.speeds[E.duration] || o.fx.speeds._default;
            E.old = E.complete;
            E.complete = function () {
                if (E.queue !== false) {
                    o(this).dequeue()
                }
                if (o.isFunction(E.old)) {
                    E.old.call(this)
                }
            };
            return E
        },
        easing: {
            linear: function (G, H, E, F) {
                return E + F * G
            },
            swing: function (G, H, E, F) {
                return ((-Math.cos(G * Math.PI) / 2) + 0.5) * F + E
            }
        },
        timers: [],
        fx: function (F, E, G) {
            this.options = E;
            this.elem = F;
            this.prop = G;
            if (!E.orig) {
                E.orig = {}
            }
        }
    });
    o.fx.prototype = {
        update: function () {
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }(o.fx.step[this.prop] || o.fx.step._default)(this);
            if ((this.prop == "height" || this.prop == "width") && this.elem.style) {
                this.elem.style.display = "block"
            }
        },
        cur: function (F) {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop]
            }
            var E = parseFloat(o.css(this.elem, this.prop, F));
            return E && E > -10000 ? E : parseFloat(o.curCSS(this.elem, this.prop)) || 0
        },
        custom: function (I, H, G) {
            this.startTime = e();
            this.start = I;
            this.end = H;
            this.unit = G || this.unit || "px";
            this.now = this.start;
            this.pos = this.state = 0;
            var E = this;

            function F(J) {
                return E.step(J)
            }
            F.elem = this.elem;
            if (F() && o.timers.push(F) && !n) {
                n = setInterval(function () {
                    var K = o.timers;
                    for (var J = 0; J < K.length; J++) {
                        if (!K[J]()) {
                            K.splice(J--, 1)
                        }
                    }
                    if (!K.length) {
                        clearInterval(n);
                        n = g
                    }
                }, 13)
            }
        },
        show: function () {
            this.options.orig[this.prop] = o.attr(this.elem.style, this.prop);
            this.options.show = true;
            this.custom(this.prop == "width" || this.prop == "height" ? 1 : 0, this.cur());
            o(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = o.attr(this.elem.style, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        },
        step: function (H) {
            var G = e();
            if (H || G >= this.options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                this.options.curAnim[this.prop] = true;
                var E = true;
                for (var F in this.options.curAnim) {
                    if (this.options.curAnim[F] !== true) {
                        E = false
                    }
                }
                if (E) {
                    if (this.options.display != null) {
                        this.elem.style.overflow = this.options.overflow;
                        this.elem.style.display = this.options.display;
                        if (o.css(this.elem, "display") == "none") {
                            this.elem.style.display = "block"
                        }
                    }
                    if (this.options.hide) {
                        o(this.elem).hide()
                    }
                    if (this.options.hide || this.options.show) {
                        for (var I in this.options.curAnim) {
                            o.attr(this.elem.style, I, this.options.orig[I])
                        }
                    }
                    this.options.complete.call(this.elem)
                }
                return false
            } else {
                var J = G - this.startTime;
                this.state = J / this.options.duration;
                this.pos = o.easing[this.options.easing || (o.easing.swing ? "swing" : "linear")](this.state, J, 0, 1, this.options.duration);
                this.now = this.start + ((this.end - this.start) * this.pos);
                this.update()
            }
            return true
        }
    };
    o.extend(o.fx, {
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (E) {
                o.attr(E.elem.style, "opacity", E.now)
            },
            _default: function (E) {
                if (E.elem.style && E.elem.style[E.prop] != null) {
                    E.elem.style[E.prop] = E.now + E.unit
                } else {
                    E.elem[E.prop] = E.now
                }
            }
        }
    });
    if (document.documentElement.getBoundingClientRect) {
        o.fn.offset = function () {
            if (!this[0]) {
                return {
                    top: 0,
                    left: 0
                }
            }
            if (this[0] === this[0].ownerDocument.body) {
                return o.offset.bodyOffset(this[0])
            }
            var G = this[0].getBoundingClientRect(),
                J = this[0].ownerDocument,
                F = J.body,
                E = J.documentElement,
                L = E.clientTop || F.clientTop || 0,
                K = E.clientLeft || F.clientLeft || 0,
                I = G.top + (self.pageYOffset || o.boxModel && E.scrollTop || F.scrollTop) - L,
                H = G.left + (self.pageXOffset || o.boxModel && E.scrollLeft || F.scrollLeft) - K;
            return {
                top: I,
                left: H
            }
        }
    } else {
        o.fn.offset = function () {
            if (!this[0]) {
                return {
                    top: 0,
                    left: 0
                }
            }
            if (this[0] === this[0].ownerDocument.body) {
                return o.offset.bodyOffset(this[0])
            }
            o.offset.initialized || o.offset.initialize();
            var J = this[0],
                G = J.offsetParent,
                F = J,
                O = J.ownerDocument,
                M, H = O.documentElement,
                K = O.body,
                L = O.defaultView,
                E = L.getComputedStyle(J, null),
                N = J.offsetTop,
                I = J.offsetLeft;
            while ((J = J.parentNode) && J !== K && J !== H) {
                M = L.getComputedStyle(J, null);
                N -= J.scrollTop,
                I -= J.scrollLeft;
                if (J === G) {
                    N += J.offsetTop,
                    I += J.offsetLeft;
                    if (o.offset.doesNotAddBorder && !(o.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(J.tagName))) {
                        N += parseInt(M.borderTopWidth, 10) || 0,
                        I += parseInt(M.borderLeftWidth, 10) || 0
                    }
                    F = G,
                    G = J.offsetParent
                }
                if (o.offset.subtractsBorderForOverflowNotVisible && M.overflow !== "visible") {
                    N += parseInt(M.borderTopWidth, 10) || 0,
                    I += parseInt(M.borderLeftWidth, 10) || 0
                }
                E = M
            }
            if (E.position === "relative" || E.position === "static") {
                N += K.offsetTop,
                I += K.offsetLeft
            }
            if (E.position === "fixed") {
                N += Math.max(H.scrollTop, K.scrollTop),
                I += Math.max(H.scrollLeft, K.scrollLeft)
            }
            return {
                top: N,
                left: I
            }
        }
    }
    o.offset = {
        initialize: function () {
            if (this.initialized) {
                return
            }
            var L = document.body,
                F = document.createElement("div"),
                H, G, N, I, M, E, J = L.style.marginTop,
                K = '<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';
            M = {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            };
            for (E in M) {
                F.style[E] = M[E]
            }
            F.innerHTML = K;
            L.insertBefore(F, L.firstChild);
            H = F.firstChild,
            G = H.firstChild,
            I = H.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = (G.offsetTop !== 5);
            this.doesAddBorderForTableAndCells = (I.offsetTop === 5);
            H.style.overflow = "hidden",
            H.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = (G.offsetTop === -5);
            L.style.marginTop = "1px";
            this.doesNotIncludeMarginInBodyOffset = (L.offsetTop === 0);
            L.style.marginTop = J;
            L.removeChild(F);
            this.initialized = true
        },
        bodyOffset: function (E) {
            o.offset.initialized || o.offset.initialize();
            var G = E.offsetTop,
                F = E.offsetLeft;
            if (o.offset.doesNotIncludeMarginInBodyOffset) {
                G += parseInt(o.curCSS(E, "marginTop", true), 10) || 0,
                F += parseInt(o.curCSS(E, "marginLeft", true), 10) || 0
            }
            return {
                top: G,
                left: F
            }
        }
    };
    o.fn.extend({
        position: function () {
            var I = 0,
                H = 0,
                F;
            if (this[0]) {
                var G = this.offsetParent(),
                    J = this.offset(),
                    E = /^body|html$/i.test(G[0].tagName) ? {
                    top: 0,
                    left: 0
                } : G.offset();
                J.top -= j(this, "marginTop");
                J.left -= j(this, "marginLeft");
                E.top += j(G, "borderTopWidth");
                E.left += j(G, "borderLeftWidth");
                F = {
                    top: J.top - E.top,
                    left: J.left - E.left
                }
            }
            return F
        },
        offsetParent: function () {
            var E = this[0].offsetParent || document.body;
            while (E && (!/^body|html$/i.test(E.tagName) && o.css(E, "position") == "static")) {
                E = E.offsetParent
            }
            return o(E)
        }
    });
    o.each(["Left", "Top"], function (F, E) {
        var G = "scroll" + E;
        o.fn[G] = function (H) {
            if (!this[0]) {
                return null
            }
            return H !== g ? this.each(function () {
                this == l || this == document ? l.scrollTo(!F ? H : o(l).scrollLeft(), F ? H : o(l).scrollTop()) : this[G] = H
            }) : this[0] == l || this[0] == document ? self[F ? "pageYOffset" : "pageXOffset"] || o.boxModel && document.documentElement[G] || document.body[G] : this[0][G]
        }
    });
    o.each(["Height", "Width"], function (I, G) {
        var E = I ? "Left" : "Top",
            H = I ? "Right" : "Bottom",
            F = G.toLowerCase();
        o.fn["inner" + G] = function () {
            return this[0] ? o.css(this[0], F, false, "padding") : null
        };
        o.fn["outer" + G] = function (K) {
            return this[0] ? o.css(this[0], F, false, K ? "margin" : "border") : null
        };
        var J = G.toLowerCase();
        o.fn[J] = function (K) {
            return this[0] == l ? document.compatMode == "CSS1Compat" && document.documentElement["client" + G] || document.body["client" + G] : this[0] == document ? Math.max(document.documentElement["client" + G], document.body["scroll" + G], document.documentElement["scroll" + G], document.body["offset" + G], document.documentElement["offset" + G]) : K === g ? (this.length ? o.css(this[0], J) : null) : this.css(J, typeof K === "string" ? K : K + "px")
        }
    })
})();
(function ($) {
    $.fn.bgIframe = $.fn.bgiframe = function (s) {
        if ($.browser.msie && /6.0/.test(navigator.userAgent)) {
            s = $.extend({
                top: 'auto',
                left: 'auto',
                width: 'auto',
                height: 'auto',
                opacity: true,
                src: 'javascript:false;'
            }, s || {});
            var prop = function (n) {
                return n && n.constructor == Number ? n + 'px' : n;
            },
                html = '<iframe class="bgiframe"frameborder="0"tabindex="-1"src="' + s.src + '"' + 'style="display:block;position:absolute;z-index:-1;' + (s.opacity !== false ? 'filter:Alpha(Opacity=\'0\');' : '') + 'top:' + (s.top == 'auto' ? 'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')' : prop(s.top)) + ';' + 'left:' + (s.left == 'auto' ? 'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')' : prop(s.left)) + ';' + 'width:' + (s.width == 'auto' ? 'expression(this.parentNode.offsetWidth+\'px\')' : prop(s.width)) + ';' + 'height:' + (s.height == 'auto' ? 'expression(this.parentNode.offsetHeight+\'px\')' : prop(s.height)) + ';' + '"/>';
            return this.each(function () {
                if ($('> iframe.bgiframe', this).length == 0) this.insertBefore(document.createElement(html), this.firstChild);
            });
        }
        return this;
    };
})(jQuery);
(function ($) {
    $.fn.hoverIntent = function (f, g) {
        var cfg = {
            sensitivity: 7,
            interval: 100,
            timeout: 0
        };
        cfg = $.extend(cfg, g ? {
            over: f,
            out: g
        } : f);
        var cX, cY, pX, pY;
        var track = function (ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };
        var compare = function (ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            if ((Math.abs(pX - cX) + Math.abs(pY - cY)) < cfg.sensitivity) {
                $(ob).unbind("mousemove", track);
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob, [ev]);
            } else {
                pX = cX;
                pY = cY;
                ob.hoverIntent_t = setTimeout(function () {
                    compare(ev, ob);
                }, cfg.interval);
            }
        };
        var delay = function (ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob, [ev]);
        };
        var handleHover = function (e) {
            var p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget;
            while (p && p != this) {
                try {
                    p = p.parentNode;
                } catch (e) {
                    p = this;
                }
            }
            
            if (p == this) {
                return false;
            }
            
            var ev = jQuery.extend({}, e);
            var ob = this;
            if (ob.hoverIntent_t) {
                ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            }
            
            if (e.type == "mouseover") {
                pX = ev.pageX;
                pY = ev.pageY;
                $(ob).bind("mousemove", track);
                if (ob.hoverIntent_s != 1) {
                    ob.hoverIntent_t = setTimeout(function () {
                        compare(ev, ob);
                    }, cfg.interval);
                }
            } else {
                $(ob).unbind("mousemove", track);
                if (ob.hoverIntent_s == 1) {
                    ob.hoverIntent_t = setTimeout(function () {
                        delay(ev, ob);
                    }, cfg.timeout);
                }
            }
        };
        return this.mouseover(handleHover).mouseout(handleHover);
    };
})(jQuery);;
(function ($) {
    var $cluetip, $cluetipInner, $cluetipOuter, $cluetipTitle, $cluetipArrows, $dropShadow, imgCount;
    $.fn.cluetip = function (js, options) {
        if (typeof js == 'object') {
            options = js;
            js = null;
        }
        
        return this.each(function (index) {
            var $this = $(this);
            var opts = $.extend(true, {}, $.fn.cluetip.defaults, options || {}, $.metadata ? $this.metadata() : $.meta ? $this.data() : {});
            var cluetipContents = false;
            var cluezIndex = parseInt(opts.cluezIndex, 10) - 1;
            var isActive = false,
                closeOnDelay = 0;
            if (!$('#cluetip').length) {
                $cluetipInner = $('<div id="cluetip-inner"></div>');
                $cluetipTitle = $('<h3 id="cluetip-title"></h3>');
                $cluetipOuter = $('<div id="cluetip-outer"></div>').append($cluetipInner).prepend($cluetipTitle);
                $cluetip = $('<div id="cluetip"></div>').css({
                    zIndex: opts.cluezIndex
                }).append($cluetipOuter).append('<div id="cluetip-extra"></div>')[insertionType](insertionElement).hide();
                $('<div id="cluetip-waitimage"></div>').css({
                    position: 'absolute',
                    zIndex: cluezIndex - 1
                }).insertBefore('#cluetip').hide();
                $cluetip.css({
                    position: 'absolute',
                    zIndex: cluezIndex
                });
                $cluetipOuter.css({
                    position: 'relative',
                    zIndex: cluezIndex + 1
                });
                $cluetipArrows = $('<div id="cluetip-arrows" class="cluetip-arrows"></div>').css({
                    zIndex: cluezIndex + 1
                }).appendTo('#cluetip');
            }
            
            var dropShadowSteps = (opts.dropShadow) ? +opts.dropShadowSteps : 0;
            if (!$dropShadow) {
                $dropShadow = $([]);
                for (var i = 0; i < dropShadowSteps; i++) {
                    $dropShadow = $dropShadow.add($('<div></div>').css({
                        zIndex: cluezIndex - i - 1,
                        opacity: .1,
                        top: 1 + i,
                        left: 1 + i
                    }));
                };
                $dropShadow.css({
                    position: 'absolute',
                    backgroundColor: '#000'
                }).prependTo($cluetip);
            }
            var tipAttribute = $this.attr(opts.attribute),
                ctClass = opts.cluetipClass;
            if (!tipAttribute && !opts.splitTitle && !js) return true;
            if (opts.local && opts.localPrefix) {
                tipAttribute = opts.localPrefix + tipAttribute;
            }
            
            if (opts.local && opts.hideLocal) {
                $(tipAttribute + ':first').hide();
            }
            
            var tOffset = parseInt(opts.topOffset, 10),
                lOffset = parseInt(opts.leftOffset, 10);
            var tipHeight, wHeight;
            var defHeight = isNaN(parseInt(opts.height, 10)) ? 'auto' : (/\D/g).test(opts.height) ? opts.height : opts.height + 'px';
            var sTop, linkTop, posY, tipY, mouseY, baseline;
            var tipInnerWidth = isNaN(parseInt(opts.width, 10)) ? 275 : parseInt(opts.width, 10);
            var tipWidth = tipInnerWidth + (parseInt($cluetip.css('paddingLeft'), 10) || 0) + (parseInt($cluetip.css('paddingRight'), 10) || 0) + dropShadowSteps;
            var linkWidth = this.offsetWidth;
            var linkLeft, posX, tipX, mouseX, winWidth;
            var tipParts;
            var tipTitle = (opts.attribute != 'title') ? $this.attr(opts.titleAttribute) : '';
            if (opts.splitTitle) {
                if (tipTitle == undefined) {
                    tipTitle = '';
                }
                 tipParts = tipTitle.split(opts.splitTitle);
                tipTitle = tipParts.shift();
            }
            
            if (opts.escapeTitle) {
                tipTitle = tipTitle.replace(/&/g, '&amp;').replace(/>/g, '&gt;').replace(/</g, '&lt;');
            }
            
            var localContent;
            var activate = function (event) {
                if (!opts.onActivate($this)) {
                    return false;
                }
                 isActive = true;
                $cluetip.removeClass().css({
                    width: tipInnerWidth
                });
                if (tipAttribute == $this.attr('href')) {
                    $this.css('cursor', opts.cursor);
                }
                 $this.attr('title', '');
                if (opts.hoverClass) {
                    $this.addClass(opts.hoverClass);
                }
                 linkTop = posY = $this.offset().top;
                linkLeft = $this.offset().left;
                mouseX = event.pageX;
                mouseY = event.pageY;
                if ($this[0].tagName.toLowerCase() != 'area') {
                    sTop = $(document).scrollTop();
                    winWidth = $(window).width();
                }
                
                if (opts.positionBy == 'fixed') {
                    posX = linkWidth + linkLeft + lOffset;
                    $cluetip.css({
                        left: posX
                    });
                } else {
                    posX = (linkWidth > linkLeft && linkLeft > tipWidth) || linkLeft + linkWidth + tipWidth + lOffset > winWidth ? linkLeft - tipWidth - lOffset : linkWidth + linkLeft + lOffset;
                    if ($this[0].tagName.toLowerCase() == 'area' || opts.positionBy == 'mouse' || linkWidth + tipWidth > winWidth) {
                        if (mouseX + 20 + tipWidth > winWidth) {
                            $cluetip.addClass(' cluetip-' + ctClass);
                            posX = (mouseX - tipWidth - lOffset) >= 0 ? mouseX - tipWidth - lOffset - parseInt($cluetip.css('marginLeft'), 10) + parseInt($cluetipInner.css('marginRight'), 10) : mouseX - (tipWidth / 2);
                        } else {
                            posX = mouseX + lOffset;
                        }
                    }
                    
                    var pY = posX < 0 ? event.pageY + tOffset : event.pageY;
                    $cluetip.css({
                        left: (posX > 0 && opts.positionBy != 'bottomTop') ? posX : (mouseX + (tipWidth / 2) > winWidth) ? winWidth / 2 - tipWidth / 2 : Math.max(mouseX - (tipWidth / 2), 0)
                    });
                }
                wHeight = $(window).height();
                if (js) {
                    if (typeof js == 'function') {
                        js = js($this[0]);
                    }
                     $cluetipInner.html(js);
                    cluetipShow(pY);
                }
                
                else if (tipParts) {
                    var tpl = tipParts.length;
                    $cluetipInner.empty();
                    for (var i = 0; i < tpl; i++) {
                        if (i == 0) {
                            $cluetipInner.html(tipParts[i]);
                        } else {
                            $cluetipInner.append('<div class="split-body">' + tipParts[i] + '</div>');
                        }
                    };
                    cluetipShow(pY);
                }
                
                else if (!opts.local && tipAttribute.indexOf('#') != 0) {
                    if (/\.(jpe?g|tiff?|gif|png)$/i.test(tipAttribute)) {
                        $cluetipInner.html('<img src="' + tipAttribute + '" alt="' + tipTitle + '" />');
                        cluetipShow(pY);
                    } else if (cluetipContents && opts.ajaxCache) {
                        $cluetipInner.html(cluetipContents);
                        cluetipShow(pY);
                    } else {
                        var ajaxSettings = opts.ajaxSettings;
                        ajaxSettings.cache = false;
                        ajaxSettings.url = tipAttribute;
                        ajaxSettings.beforeSend = function () {
                            $cluetipOuter.children().empty();
                            if (opts.waitImage) {
                                $('#cluetip-waitimage').css({
                                    top: mouseY + 20,
                                    left: mouseX + 20
                                }).show();
                            }
                        };
                        ajaxSettings.error = function () {
                            if (isActive) {
                                $cluetipInner.html('<i>sorry, the contents could not be loaded</i>');
                            }
                        };
                        ajaxSettings.success = function (data) {
                            cluetipContents = opts.ajaxProcess(data);
                            if (isActive) {
                                $cluetipInner.html(cluetipContents);
                            }
                        };
                        ajaxSettings.complete = function () {
                            imgCount = $('#cluetip-inner img').length;
                            if (imgCount && !$.browser.opera) {
                                $('#cluetip-inner img').load(function () {
                                    imgCount--;
                                    if (imgCount < 1) {
                                        $('#cluetip-waitimage').hide();
                                        if (isActive) cluetipShow(pY);
                                    }
                                });
                            } else {
                                $('#cluetip-waitimage').hide();
                                if (isActive) cluetipShow(pY);
                            }
                        };
                        $.ajax(ajaxSettings);
                    }
                } else if (opts.local) {
                    var $localContent = $(tipAttribute + ':eq(' + index + ')').clone(true).show();
                    $cluetipInner.html($localContent.html());
                    cluetipShow(pY);
                }
            };
            var cluetipShow = function (bpY) {
                $cluetip.addClass('cluetip-' + ctClass);
                if (opts.truncate) {
                    var $truncloaded = $cluetipInner.text().slice(0, opts.truncate) + '...';
                    $cluetipInner.html($truncloaded);
                }
                
                function doNothing() {};
                tipTitle ? $cluetipTitle.show().html(tipTitle) : (opts.showTitle) ? $cluetipTitle.show().html('&nbsp;') : $cluetipTitle.hide();
                if (opts.sticky) {
                    var $closeLink = $('<div id="cluetip-close"><a href="#">' + opts.closeText + '</a></div>');
                    (opts.closePosition == 'bottom') ? $closeLink.appendTo($cluetipInner) : (opts.closePosition == 'title') ? $closeLink.prependTo($cluetipTitle) : $closeLink.prependTo($cluetipInner);
                    $closeLink.click(function () {
                        cluetipClose();
                        return false;
                    });
                    if (opts.mouseOutClose) {
                        if ($.fn.hoverIntent && opts.hoverIntent) {
                            $cluetip.hoverIntent({
                                over: doNothing,
                                timeout: opts.hoverIntent.timeout,
                                out: function () {
                                    $closeLink.trigger('click');
                                }
                            });
                        } else {
                            $cluetip.hover(doNothing, function () {
                                $closeLink.trigger('click');
                            });
                        }
                    } else {
                        $cluetip.unbind('mouseout');
                    }
                }
                
                var direction = '';
                $cluetipOuter.css({
                    overflow: defHeight == 'auto' ? 'visible' : 'auto',
                    height: defHeight
                });
                tipHeight = defHeight == 'auto' ? Math.max($cluetip.outerHeight(), $cluetip.height()) : parseInt(defHeight, 10);
                tipY = posY;
                baseline = sTop + wHeight;
                if (opts.positionBy == 'fixed') {
                    tipY = posY - opts.dropShadowSteps + tOffset;
                } else if ((posX < mouseX && Math.max(posX, 0) + tipWidth > mouseX) || opts.positionBy == 'bottomTop') {
                    if (posY + tipHeight + tOffset > baseline && mouseY - sTop > tipHeight + tOffset) {
                        tipY = mouseY - tipHeight - tOffset;
                        direction = 'top';
                    } else {
                        tipY = mouseY + tOffset;
                        direction = 'bottom';
                    }
                } else if (posY + tipHeight + tOffset > baseline) {
                    tipY = (tipHeight >= wHeight) ? sTop : baseline - tipHeight - tOffset;
                } else if ($this.css('display') == 'block' || $this[0].tagName.toLowerCase() == 'area' || opts.positionBy == "mouse") {
                    tipY = bpY - tOffset;
                } else {
                    tipY = posY - opts.dropShadowSteps;
                }
                
                if (direction == '') {
                    posX < linkLeft ? direction = 'left' : direction = 'right';
                }
                 $cluetip.css({
                    top: tipY + 'px'
                }).removeClass().addClass('clue-' + direction + '-' + ctClass).addClass(' cluetip-' + ctClass);
                if (opts.arrows) {
                    var bgY = (posY - tipY - opts.dropShadowSteps);
                    $cluetipArrows.css({
                        top: (/(left|right)/.test(direction) && posX >= 0 && bgY > 0) ? bgY + 'px' : /(left|right)/.test(direction) ? 0 : ''
                    }).show();
                } else {
                    $cluetipArrows.hide();
                }
                 $dropShadow.hide();
                $cluetip.hide()[opts.fx.open](opts.fx.open != 'show' && opts.fx.openSpeed);
                if (opts.dropShadow) $dropShadow.css({
                    height: tipHeight,
                    width: tipInnerWidth
                }).show();
                if ($.fn.bgiframe) {
                    $cluetip.bgiframe();
                }
                
                if (opts.delayedClose > 0) {
                    closeOnDelay = setTimeout(cluetipClose, opts.delayedClose);
                }
                 opts.onShow($cluetip, $cluetipInner);
            };
            var inactivate = function (event) {
                isActive = false;
                $('#cluetip-waitimage').hide();
                if (!opts.sticky || (/click|toggle/).test(opts.activation)) {
                    cluetipClose();
                    clearTimeout(closeOnDelay);
                };
                if (opts.hoverClass) {
                    $this.removeClass(opts.hoverClass);
                }
            };
            var cluetipClose = function () {
                $cluetipOuter.parent().hide().removeClass();
                opts.onHide($cluetip, $cluetipInner);
                $this.removeClass('cluetip-clicked');
                if (tipTitle) {
                    $this.attr(opts.titleAttribute, tipTitle);
                }
                 $this.css('cursor', '');
                if (opts.arrows) $cluetipArrows.css({
                    top: ''
                });
            };
            if ((/click|toggle/).test(opts.activation)) {
                $this.click(function (event) {
                    if ($cluetip.is(':hidden') || !$this.is('.cluetip-clicked')) {
                        activate(event);
                        $('.cluetip-clicked').removeClass('cluetip-clicked');
                        $this.addClass('cluetip-clicked');
                    } else {
                        inactivate(event);
                    }
                     this.blur();
                    return false;
                });
            } else if (opts.activation == 'focus') {
                $this.focus(function (event) {
                    activate(event);
                });
                $this.blur(function (event) {
                    inactivate(event);
                });
            } else {
                $this.click(function () {
                    if ($this.attr('href') && $this.attr('href') == tipAttribute && !opts.clickThrough) {
                        return false;
                    }
                });
                var mouseTracks = function (evt) {
                    if (opts.tracking == true) {
                        var trackX = posX - evt.pageX;
                        var trackY = tipY ? tipY - evt.pageY : posY - evt.pageY;
                        $this.mousemove(function (evt) {
                            $cluetip.css({
                                left: evt.pageX + trackX,
                                top: evt.pageY + trackY
                            });
                        });
                    }
                };
                if ($.fn.hoverIntent && opts.hoverIntent) {
                    $this.mouseover(function () {
                        $this.attr('title', '');
                    }).hoverIntent({
                        sensitivity: opts.hoverIntent.sensitivity,
                        interval: opts.hoverIntent.interval,
                        over: function (event) {
                            activate(event);
                            mouseTracks(event);
                        },
                        timeout: opts.hoverIntent.timeout,
                        out: function (event) {
                            inactivate(event);
                            $this.unbind('mousemove');
                        }
                    });
                } else {
                    $this.hover(function (event) {
                        activate(event);
                        mouseTracks(event);
                    }, function (event) {
                        inactivate(event);
                        $this.unbind('mousemove');
                    });
                }
            }
        });
    };
    $.fn.cluetip.defaults = {
        width: 275,
        height: 'auto',
        cluezIndex: 97,
        positionBy: 'auto',
        topOffset: 15,
        leftOffset: 15,
        local: true,
        localPrefix: null,
        hideLocal: true,
        attribute: 'rel',
        titleAttribute: 'title',
        splitTitle: '',
        escapeTitle: false,
        showTitle: false,
        cluetipClass: 'default',
        hoverClass: '',
        waitImage: true,
        cursor: 'help',
        arrows: true,
        dropShadow: false,
        dropShadowSteps: 6,
        sticky: false,
        mouseOutClose: false,
        activation: 'hover',
        clickThrough: false,
        tracking: false,
        delayedClose: 0,
        closePosition: 'top',
        closeText: 'Close',
        truncate: 0,
        fx: {
            open: 'show',
            openSpeed: ''
        },
        hoverIntent: {
            sensitivity: 3,
            interval: 50,
            timeout: 0
        },
        onActivate: function (e) {
            return true;
        },
        onShow: function (ct, c) {},
        onHide: function (ct, c) {},
        ajaxCache: true,
        ajaxProcess: function (data) {
            data = data.replace(/<s(cript|tyle)(.|\s)*?\/s(cript|tyle)>/g, '').replace(/<(link|title)(.|\s)*?\/(link|title)>/g, '');
            return data;
        },
        ajaxSettings: {
            dataType: 'html'
        },
        debug: false
    };
    var insertionType = 'appendTo',
        insertionElement = 'body';
    $.cluetip = {};
    $.cluetip.setup = function (options) {
        if (options && options.insertionType && (options.insertionType).match(/appendTo|prependTo|insertBefore|insertAfter/)) {
            insertionType = options.insertionType;
        }
        
        if (options && options.insertionElement) {
            insertionElement = options.insertionElement;
        }
    };
})(jQuery);
jQuery.fn.labelOver = function (overClass) {
    return this.each(function () {
        var label = jQuery(this);
        var f = label.attr('for');
        if (f) {
            var input = jQuery('#' + f);
            this.hide = function () {
                label.css({
                    textIndent: -10000
                });
            };
            this.show = function () {
                if (input.val() == '')  {
                    label.css({
                        textIndent: 0
                    });
                }
            };
            input.focus(this.hide);
            input.blur(this.show);
            label.addClass(overClass).click(function () {
                input.focus()
            });
            if (input.val() != '')  {
                this.hide();
            }
        }
    })
}

var hasFlash = function () {
    var a = 6;
    if (navigator.appVersion.indexOf("MSIE") != -1 && navigator.appVersion.indexOf("Windows") > -1) {
        document.write('<script language="VBScript"\> \non error resume next \nhasFlash = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & ' + a + '))) \n</script\> \n');
        if (window.hasFlash != null) return window.hasFlash
    }
    if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
        var b = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description;
        return parseInt(b.substr(b.indexOf(".") - 2, 2), 10) >= a
    }
    return false
}();
String.prototype.normalize = function () {
    return this.replace(/\s+/g, " ")
};
if (Array.prototype.push == null) {
    Array.prototype.push = function () {
        var i = 0,
            a = this.length,
            b = arguments.length;
        while (i < b) {
            this[a++] = arguments[i++]
        }
        return this.length
    }
}
if (!Function.prototype.apply) {
    Function.prototype.apply = function (a, b) {
        var c = [];
        var d, e;
        if (!a) a = window;
        if (!b) b = [];
        for (var i = 0; i < b.length; i++) {
            c[i] = "b[" + i + "]"
        }
        e = "a.__applyTemp__(" + c.join(",") + ");";
        a.__applyTemp__ = this;
        d = eval(e);
        a.__applyTemp__ = null;
        return d
    }
}
function named(a) {
    return new named.Arguments(a)
}
named.Arguments = function (a) {
    this.oArgs = a
};
named.Arguments.prototype.constructor = named.Arguments;
named.extract = function (a, b) {
    var c, d;
    var i = a.length;
    while (i--) {
        d = a[i];
        if (d != null && d.constructor != null && d.constructor == named.Arguments) {
            c = a[i].oArgs;
            break
        }
    }
    if (c == null) return;
    for (e in c) if (b[e] != null) b[e](c[e]);
    return
};
var parseSelector = function () {
    var a = /^([^#.>`]*)(#|\.|\>|\`)(.+)$/;

    function r(s, t) {
        var u = s.split(/\s*\,\s*/);
        var v = [];
        for (var i = 0; i < u.length; i++) v = v.concat(b(u[i], t));
        return v
    }
    function b(c, d, e) {
        c = c.normalize().replace(" ", "`");
        var f = c.match(a);
        var g, h, i, j, k, n;
        var l = [];
        if (f == null) f = [c, c];
        if (f[1] == "") f[1] = "*";
        if (e == null) e = "`";
        if (d == null) d = document;
        switch (f[2]) {
        case "#":
            k = f[3].match(a);
            if (k == null) k = [null, f[3]];
            g = document.getElementById(k[1]);
            if (g == null || (f[1] != "*" && !o(g, f[1]))) return l;
            if (k.length == 2) {
                l.push(g);
                return l
            }
            return b(k[3], g, k[2]);
        case ".":
            if (e != ">") h = m(d, f[1]);
            else h = d.childNodes;
            for (i = 0, n = h.length; i < n; i++) {
                g = h[i];
                if (g.nodeType != 1) continue;
                k = f[3].match(a);
                if (k != null) {
                    if (g.className == null || g.className.match("(\\s|^)" + k[1] + "(\\s|$)") == null) continue;
                    j = b(k[3], g, k[2]);
                    l = l.concat(j)
                } else if (g.className != null && g.className.match("(\\s|^)" + f[3] + "(\\s|$)") != null) l.push(g)
            }
            return l;
        case ">":
            if (e != ">") h = m(d, f[1]);
            else h = d.childNodes;
            for (i = 0, n = h.length; i < n; i++) {
                g = h[i];
                if (g.nodeType != 1) continue;
                if (!o(g, f[1])) continue;
                j = b(f[3], g, ">");
                l = l.concat(j)
            }
            return l;
        case "`":
            h = m(d, f[1]);
            for (i = 0, n = h.length; i < n; i++) {
                g = h[i];
                j = b(f[3], g, "`");
                l = l.concat(j)
            }
            return l;
        default:
            if (e != ">") h = m(d, f[1]);
            else h = d.childNodes;
            for (i = 0, n = h.length; i < n; i++) {
                g = h[i];
                if (g.nodeType != 1) continue;
                if (!o(g, f[1])) continue;
                l.push(g)
            }
            return l
        }
    }
    function m(d, o) {
        if (o == "*" && d.all != null) return d.all;
        return d.getElementsByTagName(o)
    }
    function o(p, q) {
        return q == "*" ? true : p.nodeName.toLowerCase().replace("html:", "") == q.toLowerCase()
    }
    return r
}();
var sIFR = function () {
    var a = "http://www.w3.org/1999/xhtml";
    var b = false;
    var c = false;
    var d;
    var ah = [];
    var al = document;
    var ak = al.documentElement;
    var am = window;
    var au = al.addEventListener;
    var av = am.addEventListener;
    var f = function () {
        var g = navigator.userAgent.toLowerCase();
        var f = {
            a: g.indexOf("applewebkit") > -1,
            b: g.indexOf("safari") > -1,
            c: navigator.product != null && navigator.product.toLowerCase().indexOf("konqueror") > -1,
            d: g.indexOf("opera") > -1,
            e: al.contentType != null && al.contentType.indexOf("xml") > -1,
            f: true,
            g: true,
            h: null,
            i: null,
            j: null,
            k: null
        };
        f.l = f.a || f.c;
        f.m = !f.a && navigator.product != null && navigator.product.toLowerCase() == "gecko";
        if (f.m && g.match(/.*gecko\/(\d{8}).*/)) f.j = new Number(g.match(/.*gecko\/(\d{8}).*/)[1]);
        f.n = g.indexOf("msie") > -1 && !f.d && !f.l && !f.m;
        f.o = f.n && g.match(/.*mac.*/) != null;
        if (f.d && g.match(/.*opera(\s|\/)(\d+\.\d+)/)) f.i = new Number(g.match(/.*opera(\s|\/)(\d+\.\d+)/)[2]);
        if (f.n || (f.d && f.i < 7.6)) f.g = false;
        if (f.a && g.match(/.*applewebkit\/(\d+).*/)) f.k = new Number(g.match(/.*applewebkit\/(\d+).*/)[1]);
        if (am.hasFlash && (!f.n || f.o)) {
            var aj = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description;
            f.h = parseInt(aj.substr(aj.indexOf(".") - 2, 2), 10)
        }
        if (g.match(/.*(windows|mac).*/) == null || f.o || f.c || (f.d && (g.match(/.*mac.*/) != null || f.i < 7.6)) || (f.b && f.h < 7) || (!f.b && f.a && f.k < 312) || (f.m && f.j < 20020523)) f.f = false;
        if (!f.o && !f.m && al.createElementNS) try {
            al.createElementNS(a, "i").innerHTML = ""
        } catch (e) {
            f.e = true
        }
        f.p = f.c || (f.a && f.k < 312);
        return f
    }();

    function at() {
        return {
            bIsWebKit: f.a,
            bIsSafari: f.b,
            bIsKonq: f.c,
            bIsOpera: f.d,
            bIsXML: f.e,
            bHasTransparencySupport: f.f,
            bUseDOM: f.g,
            nFlashVersion: f.h,
            nOperaVersion: f.i,
            nGeckoBuildDate: f.j,
            nWebKitVersion: f.k,
            bIsKHTML: f.l,
            bIsGecko: f.m,
            bIsIE: f.n,
            bIsIEMac: f.o,
            bUseInnerHTMLHack: f.p
        }
    }
    if (am.hasFlash == false || !al.getElementsByTagName || !al.getElementById || (f.e && (f.p || f.n))) return {
        UA: at()
    };

    function af(e) {
        if ((!k.bAutoInit && (am.event || e) != null) || !l(e)) return;
        b = true;
        for (var i = 0, h = ah.length; i < h; i++) j.apply(null, ah[i]);
        ah = []
    }
    var k = af;

    function l(e) {
        if (c == false || k.bIsDisabled == true || ((f.e && f.m || f.l) && e == null && b == false) || al.getElementsByTagName("body").length == 0) return false;
        return true
    }
    function m(n) {
        if (f.n) return n.replace(new RegExp("%\d{0}", "g"), "%25");
        return n.replace(new RegExp("%(?!\d)", "g"), "%25")
    }
    function as(p, q) {
        return q == "*" ? true : p.nodeName.toLowerCase().replace("html:", "") == q.toLowerCase()
    }
    function o(p, q, r, s, t) {
        var u = "";
        var v = p.firstChild;
        var w, x, y, z;
        if (s == null) s = 0;
        if (t == null) t = "";
        while (v) {
            if (v.nodeType == 3) {
                z = v.nodeValue.replace("<", "&lt;");
                switch (r) {
                case "lower":
                    u += z.toLowerCase();
                    break;
                case "upper":
                    u += z.toUpperCase();
                    break;
                default:
                    u += z
                }
            } else if (v.nodeType == 1) {
                if (as(v, "a") && !v.getAttribute("href") == false) {
                    if (v.getAttribute("target")) t += "&sifr_url_" + s + "_target=" + v.getAttribute("target");
                    t += "&sifr_url_" + s + "=" + m(v.getAttribute("href")).replace(/&/g, "%26");
                    u += '<a href="asfunction:_root.launchURL,' + s + '">';
                    s++
                } else if (as(v, "br")) u += "<br/>";
                if (v.hasChildNodes()) {
                    y = o(v, null, r, s, t);
                    u += y.u;
                    s = y.s;
                    t = y.t
                }
                if (as(v, "a")) u += "</a>"
            }
            w = v;
            v = v.nextSibling;
            if (q != null) {
                x = w.parentNode.removeChild(w);
                q.appendChild(x)
            }
        }
        return {
            "u": u,
            "s": s,
            "t": t
        }
    }
    function A(B) {
        if (al.createElementNS && f.g) return al.createElementNS(a, B);
        return al.createElement(B)
    }
    function C(D, E, z) {
        var p = A("param");
        p.setAttribute("name", E);
        p.setAttribute("value", z);
        D.appendChild(p)
    }
    function F(p, G) {
        var H = p.className;
        if (H == null) H = G;
        else H = H.normalize() + (H == "" ? "" : " ") + G;
        p.className = H
    }
    function aq(ar) {
        var a = ak;
        if (k.bHideBrowserText == false) a = al.getElementsByTagName("body")[0];
        if ((k.bHideBrowserText == false || ar) && a) if (a.className == null || a.className.match(/\bsIFR\-hasFlash\b/) == null) F(a, "sIFR-hasFlash")
    }
    function j(I, J, K, L, M, N, O, P, Q, R, S, r, T) {
        if (!l()) return ah.push(arguments);
        aq();
        named.extract(arguments, {
            sSelector: function (ap) {
                I = ap
            },
            sFlashSrc: function (ap) {
                J = ap
            },
            sColor: function (ap) {
                K = ap
            },
            sLinkColor: function (ap) {
                L = ap
            },
            sHoverColor: function (ap) {
                M = ap
            },
            sBgColor: function (ap) {
                N = ap
            },
            nPaddingTop: function (ap) {
                O = ap
            },
            nPaddingRight: function (ap) {
                P = ap
            },
            nPaddingBottom: function (ap) {
                Q = ap
            },
            nPaddingLeft: function (ap) {
                R = ap
            },
            sFlashVars: function (ap) {
                S = ap
            },
            sCase: function (ap) {
                r = ap
            },
            sWmode: function (ap) {
                T = ap
            }
        });
        if (I.parentNode) {
            U = [I];
        } else {
            var U = parseSelector(I);
            if (U.length == 0) {
                return false;
            }
        }
        if (S != null) S = "&" + S.normalize();
        else S = "";
        if (K != null) S += "&textcolor=" + K;
        if (M != null) S += "&hovercolor=" + M;
        if (M != null || L != null) S += "&linkcolor=" + (L || K);
        if (O == null) O = 0;
        if (P == null) P = 0;
        if (Q == null) Q = 0;
        if (R == null) R = 0;
        if (N == null) N = "#FFFFFF";
        if (T == "transparent") if (!f.f) T = "opaque";
        else N = "transparent";
        if (T == null) T = "";
        var p, V, W, X, Y, Z, aa, ab, ac;
        var ad = null;
        for (var i = 0, h = U.length; i < h; i++) {
            p = U[i];
            if (p.className != null && p.className.match(/\bsIFR\-replaced\b/) != null) continue;
            V = p.offsetWidth - R - P;
            W = p.offsetHeight - O - Q;
            aa = A("span");
            aa.className = "sIFR-alternate";
            ac = o(p, aa, r);
            Z = "txt=" + m(ac.u).replace(/\+/g, "%2B").replace(/&/g, "%26").replace(/\"/g, "%22").normalize() + S + "&w=" + V + "&h=" + W + ac.t;
            F(p, "sIFR-replaced");
            if (ad == null || !f.g) {
                if (!f.g) {
                    if (!f.n) p.innerHTML = ['<embed class="sIFR-flash" type="application/x-shockwave-flash" src="', J, '" quality="best" wmode="', T, '" bgcolor="', N, '" flashvars="', Z, '" width="', V, '" height="', W, '" sifr="true"></embed>'].join("");
                    else p.innerHTML = ['<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" sifr="true" width="', V, '" height="', W, '" class="sIFR-flash"><param name="movie" value="', J, '"></param><param name="flashvars" value="', Z, '"></param><param name="quality" value="best"></param><param name="wmode" value="', T, '"></param><param name="bgcolor" value="', N, '"></param> </object>'].join('')
                } else {
                    if (f.d) {
                        ab = A("object");
                        ab.setAttribute("data", J);
                        C(ab, "quality", "best");
                        C(ab, "wmode", T);
                        C(ab, "bgcolor", N)
                    } else {
                        ab = A("embed");
                        ab.setAttribute("src", J);
                        ab.setAttribute("quality", "best");
                        ab.setAttribute("flashvars", Z);
                        ab.setAttribute("wmode", T);
                        ab.setAttribute("bgcolor", N)
                    }
                    ab.setAttribute("sifr", "true");
                    ab.setAttribute("type", "application/x-shockwave-flash");
                    ab.className = "sIFR-flash";
                    if (!f.l || !f.e) ad = ab.cloneNode(true)
                }
            } else ab = ad.cloneNode(true);
            if (f.g) {
                if (f.d) C(ab, "flashvars", Z);
                else ab.setAttribute("flashvars", Z);
                ab.setAttribute("width", V);
                ab.setAttribute("height", W);
                ab.style.width = V + "px";
                ab.style.height = W + "px";
                p.appendChild(ab)
            }
            p.appendChild(aa);
            if (f.p) p.innerHTML += ""
        }
        if (f.n && k.bFixFragIdBug) setTimeout(function () {
            al.title = d
        }, 0)
    }
    function ai() {
        d = al.title
    }
    function ae() {
        if (k.bIsDisabled == true) return;
        c = true;
        if (k.bHideBrowserText) aq(true);
        if (am.attachEvent) am.attachEvent("onload", af);
        else if (!f.c && (al.addEventListener || am.addEventListener)) {
            if (f.a && f.k >= 132 && am.addEventListener) am.addEventListener("load", function () {
                setTimeout("sIFR({})", 1)
            }, false);
            else {
                if (al.addEventListener) al.addEventListener("load", af, false);
                if (am.addEventListener) am.addEventListener("load", af, false)
            }
        } else if (typeof am.onload == "function") {
            var ag = am.onload;
            am.onload = function () {
                ag();
                af()
            }
        } else am.onload = af;
        if (!f.n || am.location.hash == "") k.bFixFragIdBug = false;
        else ai()
    }
    k.UA = at();
    k.bAutoInit = true;
    k.bFixFragIdBug = true;
    k.replaceElement = j;
    k.updateDocumentTitle = ai;
    k.appendToClassName = F;
    k.setup = ae;
    k.debug = function () {
        aq(true)
    };
    k.debug.replaceNow = function () {
        ae();
        k()
    };
    k.bIsDisabled = false;
    k.bHideBrowserText = true;
    return k
}();
if (typeof sIFR == "function" && !sIFR.UA.bIsIEMac && (!sIFR.UA.bIsWebKit || sIFR.UA.nWebKitVersion >= 100)) {
    sIFR.setup();
};
if (typeof sIFR == "function")(function () {
    var j = document;
    var h = j.documentElement;
    sIFR.removeDecoyClasses = function () {
        function a(b) {
            if (b && b.className != null) b.className = b.className.replace(/\bsIFR-hasFlash\b/, "")
        }
        return function () {
            a(h);
            a(j.getElementsByTagName("body")[0])
        }
    }();
    sIFR.preferenceManager = {
        storage: {
            sCookieId: "sifr",
            set: function (a) {
                var b = new Date();
                b.setFullYear(b.getFullYear() + 3);
                j.cookie = [this.sCookieId, "=", a, ";expires=", b.toGMTString(), ";path=/"].join("")
            },
            get: function () {
                var a = j.cookie.match(new RegExp(";?" + this.sCookieId + "=([^;]+);?"));
                if (a != null && a[1] == "false") return false;
                else return true
            },
            reset: function () {
                var a = new Date();
                a.setFullYear(a.getFullYear() - 1);
                j.cookie = [this.sCookieId, "=true;expires=", a.toGMTString(), ";path=/"].join("")
            }
        },
        disable: function () {
            this.storage.set(false)
        },
        enable: function () {
            this.storage.set(true)
        },
        test: function () {
            return this.storage.get()
        }
    };
    if (sIFR.preferenceManager.test() == false) {
        sIFR.bIsDisabled = true;
        sIFR.removeDecoyClasses()
    }
    sIFR.rollback = function () {
        function a(b) {
            var c, d, e, f, g, h;
            var l = parseSelector(b);
            var i = l.length - 1;
            var m = false;
            while (i >= 0) {
                c = l[i];
                l.length--;
                d = c.parentNode;
                if (c.getAttribute("sifr") == "true") {
                    h = 0;
                    while (h < d.childNodes.length) {
                        c = d.childNodes[h];
                        if (c.className == "sIFR-alternate") {
                            e = c;
                            h++;
                            continue
                        }
                        d.removeChild(c)
                    }
                    if (e != null) {
                        f = e.firstChild;
                        while (f != null) {
                            g = f.nextSibling;
                            d.appendChild(e.removeChild(f));
                            f = g
                        }
                        d.removeChild(e)
                    }
                    if (!sIFR.UA.bIsXML && sIFR.UA.bUseInnerHTMLHack) d.innerHTML += "";
                    d.className = d.className.replace(/\bsIFR\-replaced\b/, "")
                };
                m = true;
                i--
            }
            return m
        }
        return function (k) {
            named.extract(arguments, {
                sSelector: function (a) {
                    k = a
                }
            });
            if (k == null) k = "";
            else k += ">";
            sIFR.removeDecoyClasses();
            sIFR.bHideBrowserText = false;
            if (a(k + "embed") == false) a(k + "object")
        }
    }()
})() 
var dom = {
    finished: 0,
    handles: {}
};

function init_dom(doc) {
    if (typeof doc == 'undefined') {
        doc = document;
    }
    
    var tags = {
        div: 'layers',
        img: 'images',
        form: 'forms'
    };
    for (tagname in tags) {
        var elements = [];
        if (typeof doc.getElementsByTagName != 'undefined') {
            elements = doc.getElementsByTagName(tagname);
        }
        
        else if (typeof doc.layers != 'undefined') {
            elements = doc[tags[tagname]];
        }
        
        else if (doc.all) {
            elements = eval("doc.all.tags('" + tagname + "')");
        }
        
        for (i = 0; i < elements.length; i++) {
            var el = elements[i];
            if (typeof el.id != 'undefined' && el.id != '') {
                dom.handles[el.id] = el;
                if (typeof doc.layers != 'undefined') {
                    dom.handles[el.id].style = el;
                }
            }
            
            if ((typeof el.name != 'undefined' && el.name != '') || (typeof el.src != 'undefined' && el.src != '')) {
                var handle = el.name;
                if (typeof handle == 'undefined' || handle == '') {
                    handle = el.src;
                }
                
                if (typeof handle == 'string') {
                    dom.handles[handle] = el;
                }
                
                else {
                    alert("Incorrect use of name or id value encountered.");
                }
                
                if (typeof doc.layers != 'undefined') {
                    dom.handles[handle].style = el;
                }
            }
            
            if (typeof doc.layers != 'undefined' && tagname == "div") {
                init_dom(el.document);
                dom.finished = 0;
            }
        }
    }
     dom.finished = 1;
    return true;
}

function toggle(lnk, num_children) {
    if (typeof lnk != 'string') {
        if (typeof lnk == 'undefined') return false;
        var imgs = _lnk2imgs(lnk, num_children);
        for (var i = 0; i < imgs.length; i++) {
            var url = imgs[i].src;
            var lead = url.substr(0, url.lastIndexOf('.') - 1);
            var state = url.substr(url.lastIndexOf('.') - 1, 1);
            var ext = url.substr(url.lastIndexOf('.'));
            state = Math.abs(parseInt(state) - 1);
            if (/\d+/.test(state)) {
                imgs[i].src = lead + state + ext;
            }
        }
    }
    
    else {
        var handle = lnk;
        if (!dom.finished || typeof dom.handles[handle] == 'undefined') return false;
        var url = dom.handles[handle].src;
        var lead = url.substr(0, url.lastIndexOf('.') - 1);
        var state = url.substr(url.lastIndexOf('.') - 1, 1);
        var ext = url.substr(url.lastIndexOf('.'));
        state = Math.abs(parseInt(state) - 1);
        dom.handles[handle].src = lead + state + ext;
    }
    
    return true;
}

function init_mo() {
    if (!dom.finished) return false;
    dom.preloaded = [];
    for (h in dom.handles) {
        var handle = dom.handles[h];
        if (typeof handle.src != 'undefined' && handle.src != null) {
            var url = handle.src;
            if (url.lastIndexOf('?') == -1) {
                var lead = url.substr(0, url.lastIndexOf('.') - 1);
                var state = url.substr(url.lastIndexOf('.') - 1, 1);
                if ((state == 0) || (state == 1)) {
                    var ext = url.substr(url.lastIndexOf('.'));
                    state = Math.abs(parseInt(state) - 1);
                    url = lead + state + ext;
                    dom.preloaded[dom.preloaded.length] = new Image();
                    dom.preloaded[dom.preloaded.length - 1].src = url;
                }
            }
        }
    }
    return true;
}

function _lnk2imgs(lnk, num_children) {
    if (typeof lnk == 'undefined') return [];
    if (typeof num_children == 'undefined') {
        num_children = 1;
    }
    var doc = document;
    if (typeof lnk.document != 'undefined') {
        doc = lnk.document;
    }
    var imgs = [];
    var children = [];
    if (typeof lnk.children != 'undefined') children = lnk.children;
    if (typeof lnk.childNodes != 'undefined') children = lnk.childNodes;
    for (var i = 0; i < children.length; i++) {
        if (children[i].tagName == "IMG") imgs[imgs.length] = children[i];
    }
    if (imgs.length == 0) {
        for (var i = 0; i < doc.images.length; i++) {
            var image = doc.images[i];
            if (typeof image.x != 'undefined' && (image.x - image.hspace) == lnk.x && (image.y - image.vspace) == lnk.y) {
                for (var b = 0; b < num_children; b++) {
                    if (b > i) last;
                    imgs.push(doc.images[i - b]);
                }
            }
        }
    }
    return imgs;
}
$(document).ready(function () {
    ModifyPDFLinks();
});

function handleKeyDown(e) {
    if (!e) e = window.event;
    var keyCode = (e.keyCode) ? e.keyCode : (e.which) ? e.which : e.charCode;
    var source = (e.srcElement) ? e.srcElement : e.target;
    if (keyCode == 13 && source.type != 'textarea' && source.type != 'submit') {
        e.returnValue = false;
        e.cancel = true;
        return false;
    }
    else {
        return true;
    }
}
document.onkeydown = handleKeyDown;

function ClientTabSelectedHandler(sender, eventArgs) {
    var tabStrip = sender;
    tab = eventArgs.Tab;
    if (typeof redoFontReplacementAfterVisibilityChanged == "function") {
        redoFontReplacementAfterVisibilityChanged();
    }
}

function showChannel(whichDiv) {
    if (document.getElementById('out_' + whichDiv).style.display != 'none') {
        document.getElementById('out_' + whichDiv).style.display = 'none';
    } else {
        document.getElementById('out_' + whichDiv).style.display = 'block';
    }
    if (document.getElementById('up_' + whichDiv).style.display != 'block') {
        document.getElementById('up_' + whichDiv).style.display = 'block';
    } else {
        document.getElementById('up_' + whichDiv).style.display = 'none';
    }
}

function ExplorerFix() {
    for (a in document.links) document.links[a].onfocus = document.links[a].blur;
}
if (document.all) document.onmousedown = ExplorerFix;

function newPopup(source, name, width, height) {
    if (width) width = width;
    else width = 640;
    if (height) height = height;
    else height = 480;
    xl = (screen.availWidth / 2) - (width / 2);
    tt = (screen.availHeight / 2) - (height / 2);
    newWindowScreen = window.open(source, name, 'toolbar=no,scrolling=auto,resizable=no,location=no,directories=no,status=yes,scrollbars=yes,menubar=no,width=' + width + ',height=' + height + ',left=' + xl + ',top=' + tt);
    newWindowScreen.focus();
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            if (typeof(func) == "function") {
                func();
            }
        }
    }
}

function submitOnEnter(e, defaultButtonId) {
    if (!e) e = window.event;
    var keyCode = (e.keyCode) ? e.keyCode : (e.which) ? e.which : e.charCode;
    if (keyCode == 13) {
        e.returnValue = false;
        e.cancel = true;
        if (e.target != null) {
            e.target.blur();
        }
        if (typeof(defaultButtonId) == "string" && defaultButtonId.length > 0) {
            var defaultButton = document.getElementById(defaultButtonId);
            if (typeof(defaultButton) != "undefined") {
                defaultButton.focus();
                defaultButton.click();
            }
        }
        return false;
    }
    else {
        return true;
    }
}

function addEvent(obj, evType, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evType, fn, true);
        return true;
    } else if (obj.attachEvent) {
        var r = obj.attachEvent("on" + evType, fn);
        return r;
    } else {
        return false;
    }
}

function ModifyPDFLinks() {
    var allLinks = document.getElementsByTagName('a');
    for (var c = 0; c < allLinks.length; c++) {
        if (allLinks[c].href.toLowerCase().indexOf('.pdf') > 0) {
            addEvent(allLinks[c], "click", function () {
                var href = (document.all) ? event.srcElement.pathname : this.pathname;
                var title = (document.all) ? event.srcElement.innerHTML : this.innerHTML;
                var hostname = (document.all) ? event.srcElement.hostname : this.hostname;
                CallDCSMultiTrack(href, title, hostname, 'click');
            });
        }
    }
}

function CallDCSMultiTrack(href, title, hostname, eventname) {
    if (typeof(dcsMultiTrack) == 'function') {
        dcsMultiTrack('DCS.dcsuri', href, 'WT.ti', title, 'DCS.dcssip', hostname, 'DCSext.event_name', eventname);
    }
}

function sfHover(navId) {
    if ($.browser.msie) {
        $("#" + navId).find("ul", "li").bgIframe();
        $("#" + navId).find("li", "ul").hoverClass("sfHover");
    }
}
$.fn.hoverClass = function (c) {
    return this.each(function () {
        $(this).hover(function () {
            $(this).addClass(c);
        }, function () {
            $(this).removeClass(c);
        });
    });
}
$(document).ready(function () {
    $("#main-nav").show();
});
var holder = "m1";
var holderMain = "m1Main";
var selected = "0";
var overMenu = false;

function getMenu(mm, sel) {
    selected = [sel];
    var subMenu = document.getElementById([holder]);
    subMenu.style.visibility = "hidden";
    var container = document.getElementById([holderMain]);
    container.className = (selected != 0) ? "wc103MainNavItemSel" : "wc103MainNavItem";
    holder = [mm];
    holderMain = [mm] + "Main";
    document.getElementById([holderMain]).className = "wc103MainNavItemActive";
    overMenu = true;
    var menu = document.getElementById([holder]);
    menu.style.visibility = "visible";
}

function cleanUp() {
    overMenu = false;
    setTimeout("closeMenu()", 500);
}

function retainMenu() {
    overMenu = true;
    closeMenu();
}

function closeMenu() {
    if (!overMenu) {
        var menu = document.getElementById([holder]);
        menu.style.visibility = "hidden";
        var container = document.getElementById([holderMain]);
        container.className = (selected != 0) ? "wc103MainNavItemSel" : "wc103MainNavItem";
    }
}

function loadCorrectionStylesheet(cssFolder) {
    if (typeof cssFolder == 'undefined') {
        alert("Parameter cssFolder undefined");
        return;
    }
    var user_agent_information = [{
        pattern: /MSIE\ 6\.0/,
        label: "msie60"
    },
    {
        pattern: /MSIE\ 7\.0/,
        label: "msie70"
    },
    {
        pattern: /MSIE\ 8\.0/,
        label: "msie70"
    },
    {
        pattern: /Gecko/,
        label: "gecko"
    }];
    var userAgent = navigator.userAgent;
    for (var i = 0; i < user_agent_information.length; i++) {
        if (user_agent_information[i].pattern.test(userAgent)) {
            var appPath = window.location.pathname;
            if (appPath.indexOf('/DesignViewer') == 0) {
                appPath = appPath.replace(new RegExp('^(/[^/]+)/.*', ''), "$1");
            }
            else if (appPath.indexOf('PDFSheetLoader.aspx') >= 0) {
                return;
            }
            else {
                appPath = appPath.replace(new RegExp('/APShop', 'i'), '');
                appPath = appPath.replace(new RegExp('^(.*)(/[^/]+)/htdocs/.*', ''), "$1");
            }
            var cssurl = appPath + cssFolder + "/correction-styles/" + user_agent_information[i].label + ".css";
            var out = "<link href='" + cssurl + "' rel=\"stylesheet\" type='text/css'>";
            if (user_agent_information[i].label != "") {
                document.write(out);
            }
            return;
        }
    }
}
jQuery.fn.sIFR = function (namedHash) {
    $(this).each(function () {
        if (typeof sIFR == "function") {
            sIFR.replaceElement(this, named(namedHash));
        }
    });
}
$(document).ready(function () {
    $("#wrapper div.wc105PageHeader>h1, .popup-body div.wc105PageHeader>h1").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "transparent",
        sColor: "#E20074",
        sBgColor: "#FFFFFF",
        sFlashVars: "underline=false&textalign=left "
    });
    $("#wrapper div.wc105PageHeader>h2, .popup-body div.wc105PageHeader>h2").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "transparent",
        sColor: "#666666",
        sBgColor: "#FFFFFF",
        sFlashVars: "underline=false&textalign=left "
    });
    $("#wrapper div.wc131subHeader>h3, .popup-body div.wc131subHeader>h3").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "opaque",
        sColor: "#E20074",
        sBgColor: "#FFFFFF",
        sFlashVars: "underline=false&textalign=left "
    });
    $("#wrapper div.wc105PageHeader>h1, .popup-body div.wc105PageHeader>h1").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "opaque",
        sColor: "#E20074",
        sBgColor: "#FFFFFF",
        sFlashVars: "underline=false&textalign=left "
    });
    $("#wrapper div.wc105PageHeader>h2, .popup-body div.wc105PageHeader>h2").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "opaque",
        sColor: "#666666",
        sBgColor: "#FFFFFF",
        sFlashVars: "underline=false&textalign=left "
    });
    $("#wrapper div.wc131subHeader>h3, .popup-body div.wc131subHeader>h3").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "opaque",
        sColor: "#E20074",
        sBgColor: "#FFFFFF",
        sFlashVars: "underline=false&textalign=left "
    });
    $("div.wc102SplitNav>div.inactive div.text").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "transparent",
        sColor: "#666666",
        sBgColor: "#FFFFFF",
        sFlashVars: "textalign=center&offsetTop=13"
    });
    $("div.wc102SplitNav>div.active div.text").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "transparent",
        sColor: "#E20074",
        sBgColor: "#FFFFFF",
        sFlashVars: "textalign=center&offsetTop=13"
    });
    $("div.wc113MultiChannelHeader>h3").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "opaque",
        sColor: "#E20074",
        sBgColor: "#FFFFFF",
        sFlashVars: "underline=false&textalign=left "
    });
    $("div.wc106tableMainHeader>h3").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "opaque",
        sColor: "#E20074",
        sBgColor: "#FFFFFF",
        sFlashVars: "underline=false&textalign=left "
    });
    $("div.wc107rlaHeader>h3").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "transparent",
        sColor: "#666666",
        sBgColor: "#FFFFFF",
        sFlashVars: "underline=false&textalign=left"
    });
    $("div.wc108firstSubHeader>h3").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "opaque",
        sColor: "#666666",
        sBgColor: "#FFFFFF",
        sFlashVars: "underline=false&textalign=left "
    });
    $("div.wc108subHeader>h3").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "opaque",
        sColor: "#666666",
        sBgColor: "#FFFFFF",
        sFlashVars: "underline=false&textalign=left "
    });
    $("div.wc119ConTeasBordHdr>h3").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "opaque",
        sColor: "#E20074",
        sBgColor: "#FFFFFF",
        sFlashVars: "underline=false&textalign=left "
    });
    $("div.wc120ConTeasHdrMagenta>h3").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "opaque",
        sColor: "#FFFFFF",
        sBgColor: "#E20074",
        sFlashVars: "underline=false&textalign=left "
    });
    $("div.wc120ConTeasHdrGrey>h3").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "opaque",
        sColor: "#666666",
        sBgColor: "#DCDCDC",
        sFlashVars: "underline=false&textalign=left "
    });
    $("div.wc121ConTeasAdLightGrey>div.wc121ConTeasAdHeader>h3").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "opaque",
        sColor: "#666666",
        sBgColor: "#e4e4e4",
        sFlashVars: "underline=false&textalign=left "
    });
    $("div.wc121ConTeasAdDarkGrey>div.wc121ConTeasAdHeader>h3").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "opaque",
        sColor: "#FFFFFF",
        sBgColor: "#666666",
        sFlashVars: "underline=false&textalign=left "
    });
    $("div.wc123ConTeasGradBoxHdr>h3").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "transparent",
        sColor: "#E20074",
        sBgColor: "#FFFFFF",
        sFlashVars: "underline=false&textalign=left "
    });
    $("div.wc124ConTeasOptionsHdr>h3").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "opaque",
        sColor: "#E20074",
        sBgColor: "#FFFFFF",
        sFlashVars: "underline=false&textalign=left "
    });
    $("div.wc125ConTeasHdrTeasHdr>h3").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "opaque",
        sColor: "#E20074",
        sBgColor: "#FFFFFF",
        sFlashVars: "underline=false&textalign=left "
    });
    $("div.wc142ContentPageLoginSubHeader>h3").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "opaque",
        sColor: "#E20074",
        sBgColor: "#EEEEEE",
        sFlashVars: "underline=false&textalign=left "
    });
    $("div.wc136ErrorMsgTxt>h3").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "opaque",
        sColor: "#333333",
        sBgColor: "#FFFFFF",
        sFlashVars: "underline=false&textalign=left "
    });
    $("div.wcDarkGreyErrorMsgTxt>h3").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "opaque",
        sColor: "#333333",
        sBgColor: "#d3d5d5",
        sFlashVars: "underline=false&textalign=left "
    });
    $("div.wcGreyErrorMsgTxt>h3").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "opaque",
        sColor: "#333333",
        sBgColor: "#eeeeee",
        sFlashVars: "underline=false&textalign=left "
    });
    $(".component-style-4 .sidebar .sidebar-header h3").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "transparent",
        sColor: "#666666",
        sBgColor: "#FFFFFF",
        sFlashVars: "underline=false&textalign=left "
    });
    $(".application-style-campaigns .panel .Header .HeaderText").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "transparent",
        sColor: "#E20074",
        sBgColor: "#FFFFFF",
        sFlashVars: "underline=false&textalign=left "
    });
    $(".application-style-dashboard .panel .panel-header h3").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "transparent",
        sColor: "#E20074",
        sBgColor: "#FFFFFF",
        sFlashVars: "underline=false&textalign=left "
    });
    $(".application-style-dashboard .sidebar .sidebar-header h3").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "transparent",
        sColor: "#666666",
        sBgColor: "#FFFFFF",
        sFlashVars: "underline=false&textalign=left "
    });
});

function rollbackErrorMessageReplacement() {
    if (typeof sIFR == "function") {
        sIFR.rollback(named({
            sSelector: "div.wc136ErrorMsgTxt>h3"
        }));
        sIFR.rollback(named({
            sSelector: "div.wcGreyErrorMsgTxt>h3"
        }));
        sIFR.rollback(named({
            sSelector: "div.wcDarkGreyErrorMsgTxt>h3"
        }));
    }
}

function rollforwardErrorMessageReplacement() {
    if (typeof sIFR == "function") {
        rollbackErrorMessageReplacement();
        $("div.wc136ErrorMsgTxt>h3").sIFR({
            sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
            sWmode: "opaque",
            sColor: "#333333",
            sBgColor: "#FFFFFF",
            sFlashVars: "underline=false&textalign=left"
        });
        $("div.wcDarkGreyErrorMsgTxt>h3").sIFR({
            sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
            sWmode: "opaque",
            sColor: "#333333",
            sBgColor: "#d3d5d5",
            sFlashVars: "underline=false&textalign=left"
        });
        $("div.wcGreyErrorMsgTxt>h3").sIFR({
            sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
            sWmode: "opaque",
            sColor: "#333333",
            sBgColor: "#eeeeee",
            sFlashVars: "underline=false&textalign=left"
        });
    }
}

function redoFontReplacementAfterVisibilityChanged() {
    if (typeof sIFR == "function") {
        sIFR.rollback(named({
            sSelector: "div.wc131subHeader>h3"
        }));
        sIFR.rollback(named({
            sSelector: "div.wc136ErrorMsgTxt>h3"
        }));
        sIFR.rollback(named({
            sSelector: "div.wc113MultiChannelHeader>h3"
        }));
        sIFR.rollback(named({
            sSelector: "div.wc106tableMainHeader>h3"
        }));
        $("div.wc131subHeader>h3").sIFR({
            sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
            sWmode: "opaque",
            sColor: "#E20074",
            sBgColor: "#FFFFFF",
            sFlashVars: "underline=false&textalign=left"
        });
        $("div.wc136ErrorMsgTxt>h3").sIFR({
            sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
            sWmode: "opaque",
            sColor: "#333333",
            sBgColor: "#FFFFFF",
            sFlashVars: "underline=false&textalign=left"
        });
        $("div.wc113MultiChannelHeader>h3").sIFR({
            sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
            sWmode: "opaque",
            sColor: "#E20074",
            sBgColor: "#FFFFFF",
            sFlashVars: "underline=false&textalign=left "
        });
        $("div.wc106tableMainHeader>h3").sIFR({
            sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
            sWmode: "opaque",
            sColor: "#E20074",
            sBgColor: "#FFFFFF",
            sFlashVars: "underline=false&textalign=left "
        });
    }
}

function redoDashboardFontReplacementAfterVisibilityChanged() {
    if (typeof sIFR == "function") {
        sIFR.rollback(named({
            sSelector: ".application-style-dashboard .panel .panel-header h3"
        }));
        $(".application-style-dashboard .panel .panel-header h3").sIFR({
            sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
            sWmode: "transparent",
            sColor: "#E20074",
            sBgColor: "#FFFFFF",
            sFlashVars: "underline=false&textalign=left "
        });
    }
}
var gToolTipConflictingElements;

function showToolTip(n, text) {
    var ttObj = getContainerElement();
    var imgObj = document.getElementById('Img_' + n)
    var ttObjWidth = 242;
    var offset = 10;
    var clientWidth = getClientWidth();
    var posTop = findPosToolTip(imgObj).top + offset;
    var posLeft = findPosToolTip(imgObj).left + offset;
    ttObj.style.zIndex = '100010';
    ttObj.innerHTML = text;
    ttObj.style.display = 'block';
    ttObj.style.top = posTop + 'px';
    ttObj.style.left = posLeft + 'px';
    ttObj.style.backgroundImage = "url(/global/media/images/applications/bg_tooltip_left.gif)";
    ttObj.style.width = ttObjWidth + 'px';
    if (clientWidth < (posLeft + ttObjWidth)) {
        ttObj.style.left = (posLeft - ttObjWidth - offset) + "px";
        ttObj.style.backgroundImage = "url(/global/media/images/applications/bg_tooltip_right.gif)";
    }
    hideToolTipConflictingElements();
}

function getClientWidth() {
    var clientWidth;
    if (document.documentElement && document.documentElement.clientWidth) {
        clientWidth = document.documentElement.clientWidth;
    } else if (document.body) {
        clientWidth = document.body.clientWidth;
    }
    return clientWidth;
}

function hideToolTip(n) {
    var ttObj = getContainerElement();
    ttObj.innerHTML = '';
    ttObj.style.display = 'none';
    resetToolTipConflictingElements()
}

function findPosToolTip(obj) {
    var point = new Object
    point.left = 0;
    point.top = 0;
    if (obj.offsetParent) {
        while (obj.offsetParent) {
            point.top += obj.offsetTop
            point.left += obj.offsetLeft
            obj = obj.offsetParent;
            if (obj.offsetParent == null && (obj.offsetLeft != null || obj.offsetTop != null)) {
                point.top += obj.offsetTop;
                point.left += obj.offsetLeft;
            }
        }
    }
    else {
        if (obj.x) {
            point.left += obj.x;
        }
        if (obj.y) {
            point.top += obj.y;
        }
    }
    return point;
}

function elementIsCoveredByToolTip(elt, menuDims) {
    var eltDims = findPosToolTip(elt);
    eltDims.bottom = eltDims.top + elt.offsetHeight;
    eltDims.right = eltDims.left + elt.offsetWidth
    return !(eltDims.bottom < menuDims.top || eltDims.top > menuDims.bottom || eltDims.left > menuDims.right || eltDims.right < menuDims.left);
}

function getToolTipConflictingElements() {
    var i;
    var c_elts = new Array;
    var containerElement = getContainerElement();
    var menuDims = findPosToolTip(containerElement);
    menuDims.bottom = menuDims.top + containerElement.offsetHeight;
    menuDims.right = menuDims.left + containerElement.offsetWidth
    var elts = document.getElementsByTagName('select');
    for (i = 0; i < elts.length; ++i) {
        if (elementIsCoveredByToolTip(elts[i], menuDims)) {
            c_elts[c_elts.length] = elts[i];
        }
    }
    return c_elts;
}

function resetToolTipConflictingElements() {
    var i;
    if (gToolTipConflictingElements != null) for (i = 0; i < gToolTipConflictingElements.length; ++i) gToolTipConflictingElements[i].style.visibility = gToolTipConflictingElements[i].storedVisibility;
    gToolTipConflictingElements = null;
}

function hideToolTipConflictingElements() {
    resetToolTipConflictingElements();
    gToolTipConflictingElements = getToolTipConflictingElements();
    for (i = 0; i < gToolTipConflictingElements.length; ++i) {
        gToolTipConflictingElements[i].storedVisibility = gToolTipConflictingElements[i].style.visibility;
        gToolTipConflictingElements[i].style.visibility = 'hidden';
    }
}

function getContainerElement() {
    var container = document.getElementById('tmobile-tooltip-container');
    return container;
}
loadCorrectionStylesheet("/Code/WebPortals/Platform/PublicWeb/Framework/UI/Stylesheets" + compressionDirectory + "/component-style-4");
$(document).ready(function () {
    $(".table-header>h3").sIFR({
        sFlashSrc: "/global/media/flash/sifr/TeleGroteskHal.swf",
        sWmode: "opaque",
        sColor: "#E20074",
        sBgColor: "#FFFFFF",
        sFlashVars: "underline=false&textalign=left"
    });
    $(".default-text").focus(function (srcc) {
        if ($(this).val() == $(this)[0].title) {
            $(this).removeClass("default-text-active");
            $(this).val("");
        }
    });
    $(".default-text").blur(function () {
        if ($(this).val() == "") {
            $(this).addClass("default-text-active");
            $(this).val($(this)[0].title);
        }
    });
    $(".default-text").blur();
});
var isIE = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;

function ControlVersion() {
    var version;
    var axo;
    var e;
    try {
        axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
        version = axo.GetVariable("$version");
    } catch (e) {}
    if (!version) {
        try {
            axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
            version = "WIN 6,0,21,0";
            axo.AllowScriptAccess = "always";
            version = axo.GetVariable("$version");
        } catch (e) {}
    }
    if (!version) {
        try {
            axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
            version = axo.GetVariable("$version");
        } catch (e) {}
    }
    if (!version) {
        try {
            axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
            version = "WIN 3,0,18,0";
        } catch (e) {}
    }
    if (!version) {
        try {
            axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            version = "WIN 2,0,0,11";
        } catch (e) {
            version = -1;
        }
    }
    return version;
}

function GetSwfVer() {
    var flashVer = -1;
    if (navigator.plugins != null && navigator.plugins.length > 0) {
        if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
            var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
            var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
            var descArray = flashDescription.split(" ");
            var tempArrayMajor = descArray[2].split(".");
            var versionMajor = tempArrayMajor[0];
            var versionMinor = tempArrayMajor[1];
            var versionRevision = descArray[3];
            if (versionRevision == "") {
                versionRevision = descArray[4];
            }
            if (versionRevision[0] == "d") {
                versionRevision = versionRevision.substring(1);
            } else if (versionRevision[0] == "r") {
                versionRevision = versionRevision.substring(1);
                if (versionRevision.indexOf("d") > 0) {
                    versionRevision = versionRevision.substring(0, versionRevision.indexOf("d"));
                }
            }
            var flashVer = versionMajor + "." + versionMinor + "." + versionRevision;
        }
    }
    else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) flashVer = 4;
    else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) flashVer = 3;
    else if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 2;
    else if (isIE && isWin && !isOpera) {
        flashVer = ControlVersion();
    }
    return flashVer;
}

function DetectFlashVer(reqMajorVer, reqMinorVer, reqRevision) {
    versionStr = GetSwfVer();
    if (versionStr == -1) {
        return false;
    } else if (versionStr != 0) {
        if (isIE && isWin && !isOpera) {
            tempArray = versionStr.split(" ");
            tempString = tempArray[1];
            versionArray = tempString.split(",");
        } else {
            versionArray = versionStr.split(".");
        }
        var versionMajor = versionArray[0];
        var versionMinor = versionArray[1];
        var versionRevision = versionArray[2];
        if (versionMajor > parseFloat(reqMajorVer)) {
            return true;
        } else if (versionMajor == parseFloat(reqMajorVer)) {
            if (versionMinor > parseFloat(reqMinorVer)) return true;
            else if (versionMinor == parseFloat(reqMinorVer)) {
                if (versionRevision >= parseFloat(reqRevision)) return true;
            }
        }
        return false;
    }
}

function AC_AddExtension(src, ext) {
    if (src.indexOf('?') != -1) return src.replace(/\?/, ext + '?');
    else return src + ext;
}

function AC_Generateobj(objAttrs, params, embedAttrs) {
    var str = '';
    if (isIE && isWin && !isOpera) {
        str += '<object ';
        for (var i in objAttrs) {
            str += i + '="' + objAttrs[i] + '" ';
        }
        str += '>';
        for (var i in params) {
            str += '<param name="' + i + '" value="' + params[i] + '" /> ';
        }
         str += '</object>';
    }
    else {
        str += '<embed ';
        for (var i in embedAttrs) {
            str += i + '="' + embedAttrs[i] + '" ';
        }
        str += '> </embed>';
    }
    document.write(str);
}

function AC_FL_RunContent() {
    var ret = AC_GetArgs(arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", "application/x-shockwave-flash");
    AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_SW_RunContent() {
    var ret = AC_GetArgs(arguments, ".dcr", "src", "clsid:166B1BCA-3F9C-11CF-8075-444553540000", null);
    AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_GetArgs(args, ext, srcParamName, classid, mimeType) {
    var ret = new Object();
    ret.embedAttrs = new Object();
    ret.params = new Object();
    ret.objAttrs = new Object();
    for (var i = 0; i < args.length; i = i + 2) {
        var currArg = args[i].toLowerCase();
        switch (currArg) {
        case "classid":
            break;
        case "pluginspage":
            ret.embedAttrs[args[i]] = args[i + 1];
            break;
        case "src":
        case "movie":
            args[i + 1] = AC_AddExtension(args[i + 1], ext);
            ret.embedAttrs["src"] = args[i + 1];
            ret.params[srcParamName] = args[i + 1];
            break;
        case "onafterupdate":
        case "onbeforeupdate":
        case "onblur":
        case "oncellchange":
        case "onclick":
        case "ondblclick":
        case "ondrag":
        case "ondragend":
        case "ondragenter":
        case "ondragleave":
        case "ondragover":
        case "ondrop":
        case "onfinish":
        case "onfocus":
        case "onhelp":
        case "onmousedown":
        case "onmouseup":
        case "onmouseover":
        case "onmousemove":
        case "onmouseout":
        case "onkeypress":
        case "onkeydown":
        case "onkeyup":
        case "onload":
        case "onlosecapture":
        case "onpropertychange":
        case "onreadystatechange":
        case "onrowsdelete":
        case "onrowenter":
        case "onrowexit":
        case "onrowsinserted":
        case "onstart":
        case "onscroll":
        case "onbeforeeditfocus":
        case "onactivate":
        case "onbeforedeactivate":
        case "ondeactivate":
        case "type":
        case "codebase":
        case "id":
            ret.objAttrs[args[i]] = args[i + 1];
            break;
        case "width":
        case "height":
        case "align":
        case "vspace":
        case "hspace":
        case "class":
        case "title":
        case "accesskey":
        case "name":
        case "tabindex":
            ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i + 1];
            break;
        default:
            ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i + 1];
        }
    }
    ret.objAttrs["classid"] = classid;
    if (mimeType) ret.embedAttrs["type"] = mimeType;
    return ret;
}

function addClassName(element, className) {
    if (typeof(element) == "string") {
        element = $("#" + element);
    }
    if (typeof(element) == "undefined" || element == null) return;
    if (typeof(className) == "string") {
        $(element).removeClass(className);
        $(element).addClass(className);
    }
}

function removeClassName(element, className) {
    if (typeof(element) == "string") {
        element = $("#" + element);
    }
    if (typeof(element) == "undefined" || element == null) return;
    if (typeof(className) == "string") {
        $(element).removeClass(className);
    }
}

function CustomValidatorEnable(val, enable, validate) {
    if (typeof(val) == "string") {
        val = document.getElementById(val);
    }
    if (typeof(val) == "undefined" || val == null) return;
    if (typeof(validate) != "undefined" && validate) {
        ValidatorEnable(val, enable);
        CustomValidatorUpdateDisplay(val, val.isvalid);
    }
    else {
        val.enabled = enable;
        if (enable == false) {
            CustomValidatorUpdateDisplay(val, true);
        }
    }
}

function CustomValidatorUpdateDisplay(val, isvalid, requiredIsValid) {
    if (typeof(requiredIsValid) == "undefined") requiredIsValid = true;
    var styleControlId;
    if (typeof(val.controltostyle) == "string" && val.controltostyle.length > 0) {
        styleControlId = val.controltostyle;
    }
    else {
        styleControlId = val.controltovalidate;
    }
    var styleControl = document.getElementById(styleControlId);
    if (isvalid) {
        if (!IsErrorStylingApplied(val)) {
            removeClassName(styleControl, val.emptyerrorcssclass);
            removeClassName(styleControl, val.errorcssclass);
            UpdateErrorMessageControlDisplay(val.errormessagecontrol, false, val.errormessage);
        }
    }
    else {
        removeClassName(styleControl, val.emptyerrorcssclass);
        removeClassName(styleControl, val.errorcssclass);
        if (!requiredIsValid) {
            addClassName(styleControl, val.emptyerrorcssclass);
        }
        else {
            addClassName(styleControl, val.errorcssclass);
        }
        UpdateErrorMessageControlDisplay(val.errormessagecontrol, true, val.errormessage);
    }
}

function IsErrorStylingApplied(val) {
    var otherInvalidVals = $.grep(Page_Validators, function (n, i) {
        return (val.id != n.id && val.controltovalidate == n.controltovalidate && !n.isvalid);
    });
    var otherInvalidValExists = (otherInvalidVals.length > 0);
    return otherInvalidValExists;
}

function CompositeValidatorEvaluateIsValid(val) {
    var evaluateIsValid = true;
    var requiredEvaluateIsValid = true;
    var expressionEvaluateIsValid = true;
    var customEvaluateIsValid = true;
    var compareEvaluateIsValid = true;
    var rangeEvaluateIsValid = true;
    if (eval(val.isrequired)) {
        requiredEvaluateIsValid = RequiredFieldValidatorEvaluateIsValid(val);
    }
    if (typeof(val.validationexpression) == "string" && val.validationexpression.length > 0) {
        expressionEvaluateIsValid = RegularExpressionValidatorEvaluateIsValid(val);
    }
    if (typeof(val.clientvalidationfunction) == "string" && val.clientvalidationfunction.length > 0) {
        customEvaluateIsValid = CustomClientFunctionEvaluateIsValid(val);
    }
    if ((typeof(val.controltocompare) == "string" && val.controltocompare.length > 0) || (typeof(val.valuetocompare) == "string" && val.valuetocompare.length > 0)) {
        compareEvaluateIsValid = CompareValidatorEvaluateIsValid(val);
    }
    if ((typeof(val.minimumvalue) == "string" && val.minimumvalue.length > 0) && (typeof(val.maximumvalue) == "string" && val.maximumvalue.length > 0)) {
        rangeEvaluateIsValid = RangeValidatorEvaluateIsValid(val);
    }
    evaluateIsValid = (requiredEvaluateIsValid && expressionEvaluateIsValid && customEvaluateIsValid && compareEvaluateIsValid && rangeEvaluateIsValid);
    CustomValidatorUpdateDisplay(val, evaluateIsValid, requiredEvaluateIsValid);
    return evaluateIsValid;
}

function CustomClientFunctionEvaluateIsValid(val) {
    var value = "";
    if (typeof(val.controltovalidate) == "string") {
        var control = document.getElementById(val.controltovalidate);
        var checkItemSelected = false;
        if (control.type != 'select-one' && control.type != 'select-multiple') {
            var inputControls = control.getElementsByTagName("INPUT");
            if (inputControls != null) {
                for (var i = 0; i < inputControls.length; ++i) {
                    if (inputControls[i].type == 'radio' || inputControls[i].type == 'checkbox') {
                        checkItemSelected = true;
                    }
                }
            }
        }
        else if (!eval(val.isrequired)) {
            checkItemSelected = true;
        }
        if (!checkItemSelected) {
            value = ValidatorGetValue(val.controltovalidate);
            if ((ValidatorTrim(value).length == 0) && ((typeof(val.validateemptytext) != "string") || (val.validateemptytext != "true"))) {
                return true;
            }
        }
    }
    var args = {
        Value: value,
        IsValid: true
    };
    if (typeof(val.clientvalidationfunction) == "string") {
        eval(val.clientvalidationfunction + "(val, args) ;");
    }
    return args.IsValid;
}

function UpdateErrorMessageControlDisplay(controlId, visible, errorMessage) {
    if (typeof(controlId) == "string" && controlId.length > 0) {
        var control = document.getElementById(controlId);
        if (typeof(control) == "undefined" || control == null) return;
    }
    else {
        return;
    }
    var isValidationSummary = false;
    var summary;
    if (typeof(Page_CustomValidationSummaries) != "undefined") {
        var errorControls = $.grep(Page_CustomValidationSummaries, function (n, i) {
            return (controlId == n.id);
        });
        if (errorControls.length > 0) {
            isValidationSummary = true;
            summary = errorControls[0];
        }
    }
    if (isValidationSummary) {
        if (visible && typeof(errorMessage) != "undefined") {
            if (typeof(summary.controltohide) == "string" && summary.controltohide.length > 0) {
                var controltohide = document.getElementById(summary.controltohide);
                if (controltohide != null && typeof(controltohide) != "undefined") {
                    controltohide.style.display = "none";
                }
            }
            summary.style.display = "";
            rollbackErrorMessageReplacement();
            var headers = summary.getElementsByTagName("H3");
            if (typeof(headers) != "undefined" && headers.length > 0) {
                headers[0].innerHTML = errorMessage;
            }
            rollforwardErrorMessageReplacement();
            window.scrollTo(0, 0);
        }
        else {
            summary.style.display = "none";
        }
    }
    else if (controlId.length > 0) {
        var ctrl = $("#" + controlId)
        ctrl.innerHTML = errorMessage;
        if (visible) {
            ctrl.show();
        } else {
            ctrl.hide();
        }
        rollforwardErrorMessageReplacement();
    }
}

function CustomValidationSummaryOnSubmit(validationGroup) {
    if (typeof(Page_CustomValidationSummaries) == "undefined") return;
    var summary, sums, messages;
    for (sums = 0; sums < Page_CustomValidationSummaries.length; sums++) {
        summary = Page_CustomValidationSummaries[sums];
        summary.style.display = "none";
        var controltohide;
        if (typeof(summary.controltohide) == "string" && summary.controltohide.length > 0) {
            controltohide = document.getElementById(summary.controltohide);
        }
        if (!Page_IsValid && IsValidationGroupMatch(summary, validationGroup)) {
            if (typeof(controltohide) != "undefined") {
                if (controltohide != null) {
                    controltohide.style.display = "none";
                }
            }
            
            if (summary.showsummary != "False") {
                summary.style.display = "";
                if (summary.displaymode == "List") {
                    messages = "";
                    for (i = 0; i < Page_Validators.length; i++) {
                        var validator = Page_Validators[i];
                        if (!validator.isvalid && typeof(validator.errormessage) == "string") {
                            messages += validator.errormessage;
                            break;
                        }
                    }
                    rollbackErrorMessageReplacement();
                    var headers = summary.getElementsByTagName("H3");
                    if (typeof(headers) != "undefined" && headers.length > 0) {
                        headers[0].innerHTML = messages;
                    }
                }
                rollforwardErrorMessageReplacement();
                window.scrollTo(0, 0);
            }
        }
    }
    if (window.postCustomValidateSubmit) {
        postCustomValidateSubmit();
    }
}

function isListItemSelected(sender, args) {
    var isSelected = true;
    var controlId = sender.controltovalidate;
    if (typeof(controlId) == "string" && controlId.length > 0) {
        var control = document.getElementById(controlId);
        if (typeof(control) != "undefined") {
            var items = control.getElementsByTagName("INPUT");
            if (typeof(items) != "undefined") {
                isSelected = false;
                for (i = 0; i < items.length; i++) {
                    if (items[i].checked) {
                        isSelected = true;
                    }
                }
            }
        }
    }
    args.IsValid = isSelected;
}

function isChecked(sender, args) {
    var isSelected = true;
    var controlId = sender.controltovalidate;
    if (typeof(controlId) == "string" && controlId.length > 0) {
        var control = document.getElementById(controlId);
        if (typeof(control) != "undefined") {
            if (control.type == 'radio' || control.type == 'checkbox') {
                isSelected = control.checked;
            }
        }
    }
    args.IsValid = isSelected;
}

function isValidGeneralTerms(sender, args) {
    args.IsValid = document.getElementById["chkbox"].checked;
}

function isValidDate(sender, args) {
    var selectedFullDate = args.Value;
    var array = selectedFullDate.split("/");
    var newDate = array[1] + '/' + array[0] + '/' + array[2];
    args.IsValid = isDate(newDate);
}

function isPastDate(sender, args) {
    var today = new Date();
    var selectedFullDate = args.Value;
    var array = selectedFullDate.split("/");
    var newDate = array[1] + '/' + array[0] + '/' + array[2];
    today.setHours(0, 00, 00, 000);
    if (isDate(newDate)) {
        if (dateDiff('D', today, newDate) > 0) {
            args.IsValid = false;
        }
        else {
            args.IsValid = true;
        }
    }
    else {
        args.IsValid = false;
    }
}

function isCorrectPassValidationDate(sender, args) {
    var today = new Date();
    var selectedFullDate = args.Value;
    var array = selectedFullDate.split("/");
    var newDate = array[1] + '/' + today.getDate() + '/' + array[2];
    today.setHours(0, 00, 00, 000);
    if (isDate(newDate)) {
        if (dateDiff('D', today, newDate) < 0) {
            args.IsValid = false;
        }
        else {
            args.IsValid = true;
        }
    }
    else {
        args.IsValid = false;
    }
}

function isFutureDate(sender, args) {
    var today = new Date();
    var selectedFullDate = args.Value;
    var array = selectedFullDate.split("/");
    var newDate = array[1] + '/' + array[0] + '/' + array[2];
    today.setHours(0, 00, 00, 000);
    if (isDate(newDate)) {
        if (dateDiff('D', today, newDate) >= 0) {
            args.IsValid = true;
        }
        else {
            args.IsValid = false;
        }
    }
    else {
        args.IsValid = false;
    }
}

function isDateWithin5Years(sender, args) {
    var today = new Date();
    today.setHours(0, 00, 00, 000);
    var selectedFullDate = args.Value;
    var array = selectedFullDate.split("/");
    var userInputDate = new Date();
    userInputDate.setFullYear(array[2], array[1] - 1, array[0]);
    if (!isDate(userInputDate)) {
        args.IsValid = false;
        return;
    }
    if (userInputDate > today) {
        var maxDate = new Date()
        maxDate.setFullYear(maxDate.getUTCFullYear() + 5)
        maxDate.setHours(23, 59, 59, 999);
        if (userInputDate < maxDate) {
            args.IsValid = true;
        }
        else {
            args.IsValid = false;
        }
    }
    else {
        args.IsValid = false;
    }
}

function isDateWithin10Years(sender, args) {
    var today = new Date();
    today.setHours(0, 00, 00, 000);
    var selectedFullDate = args.Value;
    var array = selectedFullDate.split("/");
    var userInputDate = new Date();
    userInputDate.setFullYear(array[2], array[1] - 1, array[0]);
    if (isDate(userInputDate)) {
        if (userInputDate > today) {
            var maxDate = new Date()
            maxDate.setFullYear(maxDate.getUTCFullYear() + 10)
            maxDate.setHours(23, 59, 59, 999);
            if (userInputDate < maxDate) {
                args.IsValid = true;
            }
            else {
                args.IsValid = false;
            }
        }
        else {
            args.IsValid = false;
        }
    }
}

function isValidActivationDate(sender, args) {
    var today = new Date();
    var selectedFullDate = args.Value;
    var array = selectedFullDate.split("/");
    var newDate = array[1] + '/' + array[0] + '/' + array[2];
    if (!isDate(newDate)) {
        args.IsValid = false;
        return;
    }
    today.setHours(0, 00, 00, 000);
    if (dateDiff('D', today, newDate) >= 0) {
        var maxDate = new Date()
        maxDate.setFullYear(maxDate.getUTCFullYear(), maxDate.getUTCMonth() + 4, maxDate.getUTCDate())
        maxDate.setHours(0, 0, 0, 0);
        if (dateDiff('D', maxDate, newDate) <= 0) {
            args.IsValid = true;
        }
        else {
            args.IsValid = false;
        }
    }
    else {
        args.IsValid = false;
    }
}

function isValidContractEndDate(sender, args) {
    var today = new Date();
    var selectedFullDate = args.Value;
    var array = selectedFullDate.split("/");
    var newDate = array[1] + '/' + array[0] + '/' + array[2];
    if (!isDate(newDate)) {
        args.IsValid = false;
        return;
    }
    today.setHours(0, 00, 00, 000);
    var maxDate = new Date()
    maxDate.setFullYear(maxDate.getUTCFullYear(), maxDate.getUTCMonth() + 4, maxDate.getUTCDate())
    maxDate.setHours(0, 0, 0, 0);
    if (dateDiff('D', maxDate, newDate) <= 0) {
        args.IsValid = true;
    }
    else {
        args.IsValid = false;
    }
}

function isValidRijbewijsnummer(sender, args) {
    var idNumber = args.Value;
    var total = 0;
    var lastNumber = 0;
    var returnValue = false;
    if (idNumber.length == 10) {
        for (x = 0; x < idNumber.length; x++) {
            y = x + 1;
            eval('var char' + y + ' = idNumber.substring(' + x + ',' + y + ')');
            if (y != 10) {
                eval('char' + y + '=char' + y + '-0');
                total = total + eval('char' + y);
            }
        }
        lastNumber = Math.floor(total / 9);
        lastNumber = lastNumber * 9;
        lastNumber = total - lastNumber;
        returnValue = (lastNumber == char10);
    }
    args.IsValid = returnValue;
}

function isMixOfDigitsAndCharacters(sender, args) {
    var value = args.Value;
    if (ValidatorTrim(value).length == 0) {
        return true;
    }
    var charsOnlyExpression = "^[A-Za-z]*$";
    var digitsOnlyExpression = "^[0-9]*$";
    var charsOnlyRx = new RegExp(charsOnlyExpression);
    var digitsOnlyRx = new RegExp(digitsOnlyExpression);
    var charsOnlyMatches = charsOnlyRx.exec(value);
    var digitsOnlyMatches = digitsOnlyRx.exec(value);
    var isNotCharsOnly = (charsOnlyMatches == null || value != charsOnlyMatches[0]);
    var isNotDigitsOnly = (digitsOnlyMatches == null || value != digitsOnlyMatches[0]);
    var isValid = (isNotCharsOnly && isNotDigitsOnly);
    args.IsValid = isValid;
}

function isValidBanknumber(sender, args) {
    var banknr = args.Value;
    var waarde;
    banknr = banknr.replace(/[^0-9]/g, "");
    banknr = banknr.replace(/[^0-9]/g, ".");
    while (banknr.length > 1 && banknr.substring(0, 1) == "0") {
        banknr = banknr.substring(1, banknr.length);
    }
    if (banknr == "0") {
        args.IsValid = false;
    }
    else {
        waarde = ((banknr.charAt(0) * 9) + (banknr.charAt(1) * 8) + (banknr.charAt(2) * 7) + (banknr.charAt(3) * 6) + (banknr.charAt(4) * 5) + (banknr.charAt(5) * 4) + (banknr.charAt(6) * 3) + (banknr.charAt(7) * 2) + (banknr.charAt(8) * 1)) / 11;
        args.IsValid = (waarde == parseInt(waarde));
    }
}

function isValidGironumber(sender, args) {
    var gironr = args.Value;
    gironr = gironr.replace(/[^0-9]/g, "");
    gironr = gironr.replace(/[^0-9]/g, ".");
    args.IsValid = (gironr != 1111111 && gironr != 1234567 && gironr != 111 && gironr != 777);
}

function isDate(expression) {
    return !isNaN(new Date(expression));
}

function dateDiff(interval, date1, date2, firstdayofweek, firstweekofyear) {
    if (!isDate(date1)) {
        return "invalid date: '" + date1 + "'";
    }
    if (!isDate(date2)) {
        return "invalid date: '" + date2 + "'";
    }
    var dt1 = new Date(date1);
    var dt2 = new Date(date2);
    var iDiffMS = dt2.valueOf() - dt1.valueOf();
    var dtDiff = new Date(iDiffMS);
    var nYears = dt2.getUTCFullYear() - dt1.getUTCFullYear();
    var nMonths = dt2.getUTCMonth() - dt1.getUTCMonth() + (nYears != 0 ? nYears * 12 : 0);
    var nQuarters = parseInt(nMonths / 3);
    var nMilliseconds = iDiffMS;
    var nSeconds = parseInt(iDiffMS / 1000);
    var nMinutes = parseInt(nSeconds / 60);
    var nHours = parseInt(nMinutes / 60);
    var nDays = parseInt(nHours / 24);
    var nWeeks = parseInt(nDays / 7);
    var iDiff = 0;
    switch (interval.toLowerCase()) {
    case "yyyy":
        return nYears;
    case "q":
        return nQuarters;
    case "m":
        return nMonths;
    case "y":
    case "d":
        return nDays;
    case "w":
        return nDays;
    case "ww":
        return nWeeks;
    case "h":
        return nHours;
    case "n":
        return nMinutes;
    case "s":
        return nSeconds;
    case "ms":
        return nMilliseconds;
    default:
        return "invalid interval: '" + interval + "'";
    }
}

function HasLegalAge(sender, args) {
    var array = args.Value.split("/");
    var now = new Date();
    var dob = new Date(array[2], parseInt(array[1]) - 1, array[0]);
    if (!isDate(dob)) {
        args.IsValid = false;
        return;
    }
    var yearNow = now.getFullYear();
    var monthNow = now.getMonth();
    var dateNow = now.getDate();
    var yearDob = dob.getFullYear();
    var monthDob = dob.getMonth();
    var dateDob = dob.getDate();
    yearAge = yearNow - yearDob;
    if (monthNow >= monthDob) {
        var monthAge = monthNow - monthDob;
    } else {
        yearAge--;
        var monthAge = 12 + monthNow - monthDob;
    }
    if (dateNow >= dateDob) {
        var dateAge = dateNow - dateDob;
    } else {
        monthAge--;
        var dateAge = 31 + dateNow - dateDob;
        if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
        }
    }
    args.IsValid = ((yearAge >= 18) && (yearAge <= 105));
}

function PostAddreessZipCodeEvaluateIsValid(sender, args) {
    var countryControl = document.getElementById(sender.countryControlId);
    sender.validationexpression = (countryControl.value.toLowerCase() == "nederland") ? "^[1-9][0-9][0-9][0-9]\\s?[a-zA-Z][a-zA-Z]$" : "^[0-9A-Z\\s]*$";
    args.IsValid = RegularExpressionValidatorEvaluateIsValid(sender);
}

function WebTrends(customDcsid, customDomain) {
    var that = this;
    this.dcsid = customDcsid;
    this.domain = customDomain;
    this.timezone = 1;
    this.fpcdom = ".t-mobile.nl";
    this.onsitedoms = ".*t-mobile\.nl";
    this.downloadtypes = "xls,doc,pdf,txt,csv,zip";
    this.rightclicktypes = "xls,doc,pdf,txt,csv,zip";
    this.adclickparam = "WT.ac";
    this.trackevents = true;
    this.enabled = true;
    this.i18n = false;
    this.fpc = "WT_FPC";
    this.DCS = {};
    this.WT = {};
    this.DCSext = {};
    this.images = [];
    this.index = 0;
    this.exre = (function () {
        return (window.RegExp ? new RegExp("dcs(uri)|(ref)|(aut)|(met)|(sta)|(sip)|(pro)|(byt)|(dat)|(p3p)|(cfg)|(redirect)|(cip)", "i") : "");
    })();
    this.re = (function () {
        return (window.RegExp ? (that.i18n ? {
            "%25": /\%/g
        } : {
            "%09": /\t/g,
            "%20": / /g,
            "%23": /\#/g,
            "%26": /\&/g,
            "%2B": /\+/g,
            "%3F": /\?/g,
            "%5C": /\\/g,
            "%22": /\"/g,
            "%7F": /\x7F/g,
            "%A0": /\xA0/g
        }) : "");
    })();
}
WebTrends.prototype.dcsGetId = function () {
    if (this.enabled && (document.cookie.indexOf(this.fpc + "=") == -1) && (document.cookie.indexOf("WTLOPTOUT=") == -1)) {;
    }
}
WebTrends.prototype.dcsGetCookie = function (name) {
    var cookies = document.cookie.split("; ");
    var cmatch = [];
    var idx = 0;
    var i = 0;
    var namelen = name.length;
    var clen = cookies.length;
    for (i = 0; i < clen; i++) {
        var c = cookies[i];
        if ((c.substring(0, namelen + 1)) == (name + "=")) {
            cmatch[idx++] = c;
        }
    }
    var cmatchCount = cmatch.length;
    if (cmatchCount > 0) {
        idx = 0;
        if ((cmatchCount > 1) && (name == this.fpc)) {
            var dLatest = new Date(0);
            for (i = 0; i < cmatchCount; i++) {
                var lv = parseInt(this.dcsGetCrumb(cmatch[i], "lv"));
                var dLst = new Date(lv);
                if (dLst > dLatest) {
                    dLatest.setTime(dLst.getTime());
                    idx = i;
                }
            }
        }
        return unescape(cmatch[idx].substring(namelen + 1));
    }
    else {
        return null;
    }
}
WebTrends.prototype.dcsGetCrumb = function (cval, crumb, sep) {
    var aCookie = cval.split(sep || ":");
    for (var i = 0; i < aCookie.length; i++) {
        var aCrumb = aCookie[i].split("=");
        if (crumb == aCrumb[0]) {
            return aCrumb[1];
        }
    }
    return null;
}
WebTrends.prototype.dcsGetIdCrumb = function (cval, crumb) {
    var id = cval.substring(0, cval.indexOf(":lv="));
    var aCrumb = id.split("=");
    for (var i = 0; i < aCrumb.length; i++) {
        if (crumb == aCrumb[0]) {
            return aCrumb[1];
        }
    }
    return null;
}
WebTrends.prototype.dcsIsFpcSet = function (name, id, lv, ss) {
    var c = this.dcsGetCookie(name);
    if (c) {
        return ((id == this.dcsGetIdCrumb(c, "id")) && (lv == this.dcsGetCrumb(c, "lv")) && (ss == this.dcsGetCrumb(c, "ss"))) ? 0 : 3;
    }
    return 2;
}
WebTrends.prototype.dcsFPC = function () {
    if (document.cookie.indexOf("WTLOPTOUT=") != -1) {
        return;
    }
    var WT = this.WT;
    var name = this.fpc;
    var dCur = new Date();
    var adj = (dCur.getTimezoneOffset() * 60000) + (this.timezone * 3600000);
    dCur.setTime(dCur.getTime() + adj);
    var dExp = new Date(dCur.getTime() + 315360000000);
    var dSes = new Date(dCur.getTime());
    WT.co_f = WT.vtid = WT.vtvs = WT.vt_f = WT.vt_f_a = WT.vt_f_s = WT.vt_f_d = WT.vt_f_tlh = WT.vt_f_tlv = "";
    if (document.cookie.indexOf(name + "=") == -1) {
        if ((typeof(gWtId) != "undefined") && (gWtId != "")) {
            WT.co_f = gWtId;
        }
        else if ((typeof(gTempWtId) != "undefined") && (gTempWtId != "")) {
            WT.co_f = gTempWtId;
            WT.vt_f = "1";
        }
        else {
            WT.co_f = "2";
            var curt = dCur.getTime().toString();
            for (var i = 2; i <= (32 - curt.length); i++) {
                WT.co_f += Math.floor(Math.random() * 16.0).toString(16);
            }
            WT.co_f += curt;
            WT.vt_f = "1";
        }
        if (typeof(gWtAccountRollup) == "undefined") {
            WT.vt_f_a = "1";
        }
        WT.vt_f_s = WT.vt_f_d = "1";
        WT.vt_f_tlh = WT.vt_f_tlv = "0";
    }
    else {
        var c = this.dcsGetCookie(name);
        var id = this.dcsGetIdCrumb(c, "id");
        var lv = parseInt(this.dcsGetCrumb(c, "lv"));
        var ss = parseInt(this.dcsGetCrumb(c, "ss"));
        if ((id == null) || (id == "null") || isNaN(lv) || isNaN(ss)) {
            return;
        }
        WT.co_f = id;
        var dLst = new Date(lv);
        WT.vt_f_tlh = Math.floor((dLst.getTime() - adj) / 1000);
        dSes.setTime(ss);
        if ((dCur.getTime() > (dLst.getTime() + 1800000)) || (dCur.getTime() > (dSes.getTime() + 28800000))) {
            WT.vt_f_tlv = Math.floor((dSes.getTime() - adj) / 1000);
            dSes.setTime(dCur.getTime());
            WT.vt_f_s = "1";
        }
        if ((dCur.getDay() != dLst.getDay()) || (dCur.getMonth() != dLst.getMonth()) || (dCur.getYear() != dLst.getYear())) {
            WT.vt_f_d = "1";
        }
    }
    WT.co_f = escape(WT.co_f);
    WT.vtid = (typeof(this.vtid) == "undefined") ? WT.co_f : (this.vtid || "");
    WT.vtvs = (dSes.getTime() - adj).toString();
    var expiry = "; expires=" + dExp.toGMTString();
    var cur = dCur.getTime().toString();
    var ses = dSes.getTime().toString();
    document.cookie = name + "=" + "id=" + WT.co_f + ":lv=" + cur + ":ss=" + ses + expiry + "; path=/" + (((this.fpcdom != "")) ? ("; domain=" + this.fpcdom) : (""));
    var rc = this.dcsIsFpcSet(name, WT.co_f, cur, ses);
    if (rc != 0) {
        WT.co_f = WT.vtvs = WT.vt_f_s = WT.vt_f_d = WT.vt_f_tlh = WT.vt_f_tlv = "";
        if (typeof(this.vtid) == "undefined") {
            WT.vtid = "";
        }
        WT.vt_f = WT.vt_f_a = rc;
    }
}
WebTrends.prototype.dcsAdSearch = function () {
    if (document.links) {
        var param = this.adclickparam + "=";
        var paramlen = param.length;
        var paramre = new RegExp(param, "i");
        var len = document.links.length;
        var pos = end = -1;
        var anch = urlp = value = "";
        var urlpre;
        var url = document.URL + "";
        var start = url.search(paramre);
        if (start != -1) {
            end = url.indexOf("&", start);
            urlp = url.substring(start, (end != -1) ? end : url.length);
            urlpre = new RegExp(urlp + "(&|#)", "i");
        }
        for (var i = 0; i < len; i++) {
            if (document.links[i].href) {
                anch = document.links[i].href + "";
                if (urlp.length > 0) {
                    anch = anch.replace(urlpre, "$1");
                }
                pos = anch.search(paramre);
                if (pos != -1) {
                    start = pos + paramlen;
                    end = anch.indexOf("&", start);
                    value = anch.substring(start, (end != -1) ? end : anch.length);
                    this.WT.ad = this.WT.ad ? (this.WT.ad + ";" + value) : value;
                }
            }
        }
    }
}
WebTrends.prototype.dcsIsOnsite = function (host) {
    if (host.length > 0) {
        host = host.toLowerCase();
        if (host == window.location.hostname.toLowerCase()) {
            return true;
        }
        if (typeof(this.onsitedoms.test) == "function") {
            return this.onsitedoms.test(host);
        }
        else if (this.onsitedoms.length > 0) {
            var doms = this.dcsSplit(this.onsitedoms);
            var len = doms.length;
            for (var i = 0; i < len; i++) {
                if (host == doms[i]) {
                    return true;
                }
            }
        }
    }
    return false;
}
WebTrends.prototype.dcsTypeMatch = function (pth, typelist) {
    var type = pth.substring(pth.lastIndexOf(".") + 1, pth.length);
    var types = this.dcsSplit(typelist);
    var tlen = types.length;
    for (var i = 0; i < tlen; i++) {
        if (type == types[i]) {
            return true;
        }
    }
    return false;
}
WebTrends.prototype.dcsEvt = function (evt, tag) {
    var e = evt.target || evt.srcElement;
    while (e.tagName && (e.tagName != tag)) {
        e = e.parentElement || e.parentNode;
    }
    return e;
}
WebTrends.prototype.dcsNavigation = function (evt) {
    return "";
}
WebTrends.prototype.dcsBind = function (event, func) {
    if ((typeof(func) == "function") && document.body) {
        if (document.body.addEventListener) {
            document.body.addEventListener(event, func.wtbind(this), true);
        }
        else if (document.body.attachEvent) {
            document.body.attachEvent("on" + event, func.wtbind(this));
        }
    }
}
WebTrends.prototype.dcsET = function () {
    var e = (navigator.appVersion.indexOf("MSIE") != -1) ? "click" : "mousedown";
    this.dcsBind(e, this.dcsDownload);
    this.dcsBind(e, this.dcsOffsite);
    this.dcsBind("contextmenu", this.dcsRightClick);
}
WebTrends.prototype.dcsMultiTrack = function () {
    var args = dcsMultiTrack.arguments ? dcsMultiTrack.arguments : arguments;
    if (args.length % 2 == 0) {
        this.dcsSetProps(args);
        var dCurrent = new Date();
        this.DCS.dcsdat = dCurrent.getTime();
        this.dcsFPC();
        this.dcsTag();
    }
}
WebTrends.prototype.dcsCleanUp = function () {
    this.DCS = {};
    this.WT = {};
    this.DCSext = {};
    if (arguments.length % 2 == 0) {
        this.dcsSetProps(arguments);
    }
}
 WebTrends.prototype.dcsSetProps = function (args) {
    for (var i = 0; i < args.length; i += 2) {
        if (args[i].indexOf('WT.') == 0) {
            this.WT[args[i].substring(3)] = args[i + 1];
        }
        else if (args[i].indexOf('DCS.') == 0) {
            this.DCS[args[i].substring(4)] = args[i + 1];
        }
        else if (args[i].indexOf('DCSext.') == 0) {
            this.DCSext[args[i].substring(7)] = args[i + 1];
        }
    }
}
WebTrends.prototype.dcsSplit = function (list) {
    var items = list.toLowerCase().split(",");
    var len = items.length;
    for (var i = 0; i < len; i++) {
        items[i] = items[i].replace(/^\s*/, "").replace(/\s*$/, "");
    }
    return items;
}
WebTrends.prototype.dcsDownload = function (evt) {
    evt = evt || (window.event || "");
    if (evt && ((typeof(evt.which) != "number") || (evt.which == 1))) {
        var e = this.dcsEvt(evt, "A");
        if (e.href) {
            var hn = e.hostname ? (e.hostname.split(":")[0]) : "";
            if (this.dcsIsOnsite(hn) && this.dcsTypeMatch(e.pathname, this.downloadtypes)) {
                var qry = e.search ? e.search.substring(e.search.indexOf("?") + 1, e.search.length) : "";
                var pth = e.pathname ? ((e.pathname.indexOf("/") != 0) ? "/" + e.pathname : e.pathname) : "/";
                var ttl = "";
                var text = document.all ? e.innerText : e.text;
                var img = this.dcsEvt(evt, "IMG");
                if (img.alt) {
                    ttl = img.alt;
                }
                else if (text) {
                    ttl = text;
                }
                else if (e.innerHTML) {
                    ttl = e.innerHTML;
                }
                this.dcsMultiTrack("DCS.dcssip", hn, "DCS.dcsuri", pth, "DCS.dcsqry", e.search || "", "WT.ti", "Download:" + ttl, "WT.dl", "20", "WT.nv", this.dcsNavigation(evt));
                this.DCS.dcssip = this.DCS.dcsuri = this.DCS.dcsqry = this.WT.ti = this.WT.dl = this.WT.nv = "";
            }
        }
    }
}
WebTrends.prototype.dcsRightClick = function (evt) {
    evt = evt || (window.event || "");
    if (evt) {
        var btn = evt.which || evt.button;
        if ((btn != 1) || (navigator.userAgent.indexOf("Safari") != -1)) {
            var e = this.dcsEvt(evt, "A");
            if ((typeof(e.href) != "undefined") && e.href) {
                if ((typeof(e.protocol) != "undefined") && e.protocol && (e.protocol.indexOf("http") != -1)) {
                    if ((typeof(e.pathname) != "undefined") && this.dcsTypeMatch(e.pathname, this.rightclicktypes)) {
                        var pth = e.pathname ? ((e.pathname.indexOf("/") != 0) ? "/" + e.pathname : e.pathname) : "/";
                        var hn = e.hostname ? (e.hostname.split(":")[0]) : "";
                        this.dcsMultiTrack("DCS.dcssip", hn, "DCS.dcsuri", pth, "DCS.dcsqry", "", "WT.ti", "RightClick:" + pth, "WT.dl", "25");
                        this.DCS.dcssip = this.DCS.dcsuri = this.WT.ti = this.WT.dl = this.WT.nv = "";
                    }
                }
            }
        }
    }
}
WebTrends.prototype.dcsOffsite = function (evt) {
    evt = evt || (window.event || "");
    if (evt && ((typeof(evt.which) != "number") || (evt.which == 1))) {
        var e = this.dcsEvt(evt, "A");
        if (e.href) {
            var hn = e.hostname ? (e.hostname.split(":")[0]) : "";
            var pr = e.protocol || "";
            if ((hn.length > 0) && (pr.indexOf("http") == 0) && !this.dcsIsOnsite(hn)) {
                var qry = e.search ? e.search.substring(e.search.indexOf("?") + 1, e.search.length) : "";
                var pth = e.pathname ? ((e.pathname.indexOf("/") != 0) ? "/" + e.pathname : e.pathname) : "/";
                var trim = true;
                this.dcsMultiTrack("DCS.dcssip", hn, "DCS.dcsuri", pth, "DCS.dcsqry", trim ? "" : qry, "WT.ti", "Offsite:" + hn + pth + qry, "WT.dl", "24", "WT.nv", this.dcsNavigation(evt));
                this.DCS.dcssip = this.DCS.dcsuri = this.DCS.dcsqry = this.WT.ti = this.WT.dl = this.WT.nv = "";
            }
        }
    }
}
WebTrends.prototype.dcsAdv = function () {
    if (this.trackevents && (typeof(this.dcsET) == "function")) {
        if (window.addEventListener) {
            window.addEventListener("load", this.dcsET.wtbind(this), false);
        }
        else if (window.attachEvent) {
            window.attachEvent("onload", this.dcsET.wtbind(this));
        }
    }
    this.dcsFPC();
    this.dcsAdSearch();
}
WebTrends.prototype.dcsVar = function () {
    var dCurrent = new Date();
    var WT = this.WT;
    var DCS = this.DCS;
    WT.tz = parseInt(dCurrent.getTimezoneOffset() / 60 * -1) || "0";
    WT.bh = dCurrent.getHours() || "0";
    WT.ul = navigator.appName == "Netscape" ? navigator.language : navigator.userLanguage;
    if (typeof(screen) == "object") {
        WT.cd = navigator.appName == "Netscape" ? screen.pixelDepth : screen.colorDepth;
        WT.sr = screen.width + "x" + screen.height;
    }
    if (typeof(navigator.javaEnabled()) == "boolean") {
        WT.jo = navigator.javaEnabled() ? "Yes" : "No";
    }
    if (document.title) {
        if (window.RegExp) {
            var tire = new RegExp("^" + window.location.protocol + "//" + window.location.hostname + "\\s-\\s");
            WT.ti = document.title.replace(tire, "");
        }
        else {
            WT.ti = document.title;
        }
    }
    WT.js = "Yes";
    WT.jv = (function () {
        var agt = navigator.userAgent.toLowerCase();
        var major = parseInt(navigator.appVersion);
        var mac = (agt.indexOf("mac") != -1);
        var ff = (agt.indexOf("firefox") != -1);
        var ff0 = (agt.indexOf("firefox/0.") != -1);
        var ff10 = (agt.indexOf("firefox/1.0") != -1);
        var ff15 = (agt.indexOf("firefox/1.5") != -1);
        var ff20 = (agt.indexOf("firefox/2.0") != -1);
        var ff3up = (ff && !ff0 && !ff10 & !ff15 & !ff20);
        var nn = (!ff && (agt.indexOf("mozilla") != -1) && (agt.indexOf("compatible") == -1));
        var nn4 = (nn && (major == 4));
        var nn6up = (nn && (major >= 5));
        var ie = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
        var ie4 = (ie && (major == 4) && (agt.indexOf("msie 4") != -1));
        var ie5up = (ie && !ie4);
        var op = (agt.indexOf("opera") != -1);
        var op5 = (agt.indexOf("opera 5") != -1 || agt.indexOf("opera/5") != -1);
        var op6 = (agt.indexOf("opera 6") != -1 || agt.indexOf("opera/6") != -1);
        var op7up = (op && !op5 && !op6);
        var jv = "1.1";
        if (ff3up) {
            jv = "1.8";
        }
        else if (ff20) {
            jv = "1.7";
        }
        else if (ff15) {
            jv = "1.6";
        }
        else if (ff0 || ff10 || nn6up || op7up) {
            jv = "1.5";
        }
        else if ((mac && ie5up) || op6) {
            jv = "1.4";
        }
        else if (ie5up || nn4 || op5) {
            jv = "1.3";
        }
        else if (ie4) {
            jv = "1.2";
        }
        return jv;
    })();
    WT.ct = "unknown";
    if (document.body && document.body.addBehavior) {
        try {
            document.body.addBehavior("#default#clientCaps");
            WT.ct = document.body.connectionType || "unknown";
            document.body.addBehavior("#default#homePage");
            WT.hp = document.body.isHomePage(location.href) ? "1" : "0";
        }
        catch (e) {}
    }
    if (document.all) {
        WT.bs = document.body ? document.body.offsetWidth + "x" + document.body.offsetHeight : "unknown";
    }
    else {
        WT.bs = window.innerWidth + "x" + window.innerHeight;
    }
    WT.fv = (function () {
        var i, flash;
        if (window.ActiveXObject) {
            for (i = 10; i > 0; i--) {
                try {
                    flash = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + i);
                    return i + ".0";
                }
                catch (e) {}
            }
        }
        else if (navigator.plugins && navigator.plugins.length) {
            for (i = 0; i < navigator.plugins.length; i++) {
                if (navigator.plugins[i].name.indexOf('Shockwave Flash') != -1) {
                    return navigator.plugins[i].description.split(" ")[2];
                }
            }
        }
        return "Not enabled";
    })();
    WT.slv = (function () {
        var slv = "Not enabled";
        try {
            if (navigator.userAgent.indexOf('MSIE') != -1) {
                var sli = new ActiveXObject('AgControl.AgControl');
                if (sli) {
                    slv = "Unknown";
                }
            }
            else if (navigator.plugins["Silverlight Plug-In"]) {
                slv = "Unknown";
            }
        }
        catch (e) {}
        if (slv != "Not enabled") {
            var i, j, v;
            if ((typeof(Silverlight) == "object") && (typeof(Silverlight.isInstalled) == "function")) {
                for (j = 9; j >= 0; j--) {
                    for (i = 3; i > 0; i--) {
                        v = i + "." + j;
                        if (Silverlight.isInstalled(v)) {
                            slv = v;
                            break;
                        }
                    }
                    if (slv == v) {
                        break;
                    }
                }
            }
        }
        return slv;
    })();
    if (this.i18n) {
        if (typeof(document.defaultCharset) == "string") {
            WT.le = document.defaultCharset;
        }
        else if (typeof(document.characterSet) == "string") {
            WT.le = document.characterSet;
        }
        else {
            WT.le = "unknown";
        }
    }
    WT.tv = "8.6.0";
    WT.dl = "0";
    WT.ssl = (window.location.protocol.indexOf('https:') == 0) ? "1" : "0";
    DCS.dcsdat = dCurrent.getTime();
    DCS.dcssip = window.location.hostname;
    DCS.dcsuri = window.location.pathname;
    WT.es = DCS.dcssip + DCS.dcsuri;
    if (window.location.search) {
        DCS.dcsqry = window.location.search;
    }
    if ((window.document.referrer != "") && (window.document.referrer != "-")) {
        if (!(navigator.appName == "Microsoft Internet Explorer" && parseInt(navigator.appVersion) < 4)) {
            DCS.dcsref = window.document.referrer;
        }
    }
}
WebTrends.prototype.dcsEscape = function (S, REL) {
    if (REL != "") {
        S = S.toString();
        for (var R in REL) {
            if (REL[R] instanceof RegExp) {
                S = S.replace(REL[R], R);
            }
        }
        return S;
    }
    else {
        return escape(S);
    }
}
WebTrends.prototype.dcsA = function (N, V) {
    if (this.i18n && (this.exre != "") && !this.exre.test(N)) {
        if (N == "dcsqry") {
            var newV = "";
            var params = V.substring(1).split("&");
            for (var i = 0; i < params.length; i++) {
                var pair = params[i];
                var pos = pair.indexOf("=");
                if (pos != -1) {
                    var key = pair.substring(0, pos);
                    var val = pair.substring(pos + 1);
                    if (i != 0) {
                        newV += "&";
                    }
                    newV += key + "=" + this.dcsEncode(val);
                }
            }
            V = V.substring(0, 1) + newV;
        }
        else {
            V = this.dcsEncode(V);
        }
    }
    return "&" + N + "=" + this.dcsEscape(V, this.re);
}
 WebTrends.prototype.dcsEncode = function (S) {
    return (typeof(encodeURIComponent) == "function") ? encodeURIComponent(S) : escape(S);
}
WebTrends.prototype.dcsCreateImage = function (dcsSrc) {
    if (document.images) {
        this.images[this.index] = new Image();
        this.images[this.index].src = dcsSrc;
        this.index++;
    }
    else {
        document.write('<IMG ALT="" BORDER="0" NAME="DCSIMG" WIDTH="1" HEIGHT="1" SRC="' + dcsSrc + '">');
    }
}
WebTrends.prototype.dcsMeta = function () {
    var elems;
    if (document.all) {
        elems = document.all.tags("meta");
    }
    else if (document.documentElement) {
        elems = document.getElementsByTagName("meta");
    }
    if (typeof(elems) != "undefined") {
        var length = elems.length;
        for (var i = 0; i < length; i++) {
            var name = elems.item(i).name;
            var content = elems.item(i).content;
            var equiv = elems.item(i).httpEquiv;
            if (name.length > 0) {
                if (name.toUpperCase().indexOf("WT.") == 0) {
                    this.WT[name.substring(3)] = content;
                }
                else if (name.toUpperCase().indexOf("DCSEXT.") == 0) {
                    this.DCSext[name.substring(7)] = content;
                }
                else if (name.toUpperCase().indexOf("DCS.") == 0) {
                    this.DCS[name.substring(4)] = content;
                }
            }
        }
    }
}
WebTrends.prototype.dcsTag = function () {
    if (document.cookie.indexOf("WTLOPTOUT=") != -1) {
        return;
    }
    var WT = this.WT;
    var DCS = this.DCS;
    var DCSext = this.DCSext;
    var i18n = this.i18n;
    var P = "http" + (window.location.protocol.indexOf('https:') == 0 ? 's' : '') + "://" + this.domain + (this.dcsid == "" ? '' : '/' + this.dcsid) + "/dcs.gif?";
    if (i18n) {
        WT.dep = "";
    }
    for (var N in DCS) {
        if (DCS[N] && (typeof DCS[N] != "function")) {
            P += this.dcsA(N, DCS[N]);
        }
    }
    var keys = ["co_f", "vtid", "vtvs", "vt_f_tlv"];
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (WT[key]) {
            P += this.dcsA("WT." + key, WT[key]);
            delete WT[key];
        }
    }
    for (N in WT) {
        if (WT[N] && (typeof WT[N] != "function")) {
            P += this.dcsA("WT." + N, WT[N]);
        }
    }
    for (N in DCSext) {
        if (DCSext[N] && (typeof DCSext[N] != "function")) {
            if (i18n) {
                WT.dep = (WT.dep.length == 0) ? N : (WT.dep + ";" + N);
            }
            P += this.dcsA(N, DCSext[N]);
        }
    }
    if (i18n && (WT.dep.length > 0)) {
        P += this.dcsA("WT.dep", WT.dep);
    }
    if (P.length > 2048 && navigator.userAgent.indexOf('MSIE') >= 0) {
        P = P.substring(0, 2040) + "&WT.tu=1";
    }
    this.dcsCreateImage(P);
    this.WT.ad = "";
}
WebTrends.prototype.dcsDebug = function () {
    var t = this;
    var i = t.images[0].src;
    var q = i.indexOf("?");
    var r = i.substring(0, q).split("/");
    var m = "<b>Protocol</b><br><code>" + r[0] + "<br></code>";
    m += "<b>Domain</b><br><code>" + r[2] + "<br></code>";
    m += "<b>Path</b><br><code>/" + r[3] + "/" + r[4] + "<br></code>";
    m += "<b>Query Params</b><code>" + i.substring(q + 1).replace(/\&/g, "<br>") + "</code>";
    m += "<br><b>Cookies</b><br><code>" + document.cookie.replace(/\;/g, "<br>") + "</code>";
    if (t.w && !t.w.closed) {
        t.w.close();
    }
    t.w = window.open("", this.dcsid + "dcsDebug", "width=500,height=650,scrollbars=yes,resizable=yes");
    t.w.document.write(m);
    t.w.focus();
}
WebTrends.prototype.dcsCollect = function () {
    if (this.enabled) {
        this.dcsVar();
        this.dcsMeta();
        this.dcsAdv();
        this.dcsTag();
    }
}

function dcsMultiTrack() {
    if (typeof(_tag) != "undefined") {
        return ($(_tag).each(function () {
            this.dcsMultiTrack()
        }));
    }
}

function dcsDebug() {
    if (typeof(_tag) != "undefined") {
        $(_tag).each(function () {
            this.dcsDebug()
        });
    }
}
Function.prototype.wtbind = function (obj) {
    var method = this;
    var temp = function () {
        return method.apply(obj, arguments);
    };
    return temp;
}

function VoviciWebInterceptSurvey() {
    this.utils = new VoviciSurveyUtils();
    this.SurveyUrl = "";
    this.ExitSurveyUrl = "";
    this.ShoppingCartAbandonmentSurveyUrl = "";
    this.ShoppingCartCompletedSurveyUrl = "";
    this.FailoverToLayerWhenPopupsBlocked = false;
    this.ShoppingCartCookieName = "";
    this.ShoppingCartRegex = "";
    this.PurchaseMadeCookieName = "";
    this.PurchaseMadeRegex = "";
    this.WatcherJavascriptUrl = "VoviciSurveyInvite.js";
    this.NthVisitorToInvite = 1;
    this.SurveyInNewWindow = false;
    this.SurveyWindowWidth = 625;
    this.SurveyWindowHeight = 400;
    this.SurveyWindowLeftOffset = 200;
    this.SurveyWindowTopOffset = 100;
    this.SurveyWindowDecorationOptions = "scrollbars=yes, resizable=true, location=no, toolbar=no, menubar=no";
    this.SurveyWindowName = "VoviciSurvey";
    this.CookieDomain = "";
    this.CookieValue = "1";
    this.CookieDuration = "";
    this.CookiePath = "/";
    this.CookieName = "VOVICI_SURVEY_INVITE";
    this.LaunchExitSurveyCookieValue = "2";
    this.InviteStyle = "popup";
    this.SurveyPrompt = "We'd like your input! Please take a few moments to complete a brief survey.";
    this.SurveyPromptDivInnerHtml = "<map name=\"VoviciSurveyPromptMap\">" + "<area id=\"VoviciSurveyPromptYesButton\" shape=\"rect\" coords=\"65,125,225,175\" >" + "<area id=\"VoviciSurveyPromptNoButton\" shape=\"rect\" coords=\"340,125,500,175\" >" + "<area shape=\"default\" nohref>" + "</map><img src=\"/Code/WebPortals/Platform/PublicWeb/Framework/UI/scripts/Questionnaire/surveyinvite1.gif\" border=\"0\" usemap=\"#VoviciSurveyPromptMap\">";
    this.SurveyPromptDivYesButtonId = "VoviciSurveyPromptYesButton";
    this.SurveyPromptDivNoButtonId = "VoviciSurveyPromptNoButton";
    this.SurveyPromptDivWidth = 575;
    this.SurveyPromptDivHeight = 179;
    this.SurveyPromptDivLeftOffset = 200;
    this.SurveyPromptDivTopOffset = 100;
    this.SurveyFrameName = "VoviciSurveyFrameOuterDiv";
    this.SurveyInnerFrameName = "VoviciSurveyFrameInnerDiv";
    this.SurveyDisplayFrameInnerHtml = "<div id=\"" + this.SurveyFrameName + "\" style=\"background-color:#FFFFFF;border: 1px solid #E2E5E7;\">" + "  <div id=\"" + this.SurveyPromptDivNoButtonId + "\" style=\"text-align:right; color: red\">[x]</div>" + "<div id=\"" + this.SurveyInnerFrameName + "\" ></div>" + "</div>";
    this.URLParameters = new Array();
    this.SurveyPromptDivName = "VoviciSurveyInvite_Prompt";
    this.div;
    this.toString = function () {
        return "VoviciWebInterceptSurvey internal state:" + "\n\tDebuggingEnabled: " + this.utils.DebuggingEnabled + "\n\tSurveyUrl: " + this.GetSurveyUrl() + "\n\tNthVisitorToInvite: " + this.NthVisitorToInvite + "\n\tInviteStyle: " + survey.InviteStyle + "\n" + "\n\tSurveyPrompt: " + this.SurveyPrompt + "\n\tSurveyPromptDivName: " + this.SurveyPromptDivName + "\n\tSurveyPromptDivInnerHtml: " + this.SurveyPromptDivInnerHtml + "\n\tSurveyPromptDivYesButtonId: " + this.SurveyPromptDivYesButtonId + "\n\tSurveyPromptDivNoButtonId: " + this.SurveyPromptDivNoButtonId + "\n\tSurveyPromptDivWidth: " + this.SurveyPromptDivWidth + "\n\tSurveyPromptDivHeight: " + this.SurveyPromptDivHeight + "\n\tSurveyPromptDivLeftOffset: " + this.SurveyPromptDivLeftOffset + "\n\tSurveyPromptDivTopOffset: " + this.SurveyPromptDivTopOffset + "\n" + "\n\tSurveyInNewWindow: " + this.SurveyInNewWindow + "\n\tSurveyWindowWidth: " + this.SurveyWindowWidth + "\n\tSurveyWindowHeight: " + this.SurveyWindowHeight + "\n\tSurveyWindowLeftOffset: " + this.SurveyWindowLeftOffset + "\n\tSurveyWindowTopOffset: " + this.SurveyWindowTopOffset + "\n\tSurveyWindowDecorationOptions: " + this.SurveyWindowDecorationOptions + "\n\tSurveyWindowName: " + this.SurveyWindowName + "\n" + "\n\tSurveyFrameName: " + this.SurveyFrameName + "\n\tSurveyInnerFrameName: " + this.SurveyInnerFrameName + "\n\tSurveyDisplayFrameInnerHtml : " + this.SurveyDisplayFrameInnerHtml + "\n" + "\n\tCookieDomain: " + this.CookieDomain + "\n\tCookieName: " + this.CookieName + "\n\tCookieValue: " + this.CookieValue + "\n\tCookiePath: " + this.CookiePath + "\n\tCookieDuration: " + this.CookieDuration + "\n\nCookies:\n\n" + "\n\t" + this.CookieName + ": " + this.utils.GetCookie(this.CookieName) + "\n" + "\n\tLaunchExitSurvey: " + this.LaunchExitSurvey() + "\n\tFailoverToLayerWhenPopupsBlocked: " + this.FailoverToLayerWhenPopupsBlocked + "\n\tExitSurveyUrl: " + this.GetExitSurveyUrl() + "\n\tShoppingCartAbandonmentSurveyUrl: " + this.GetShoppingCartAbandonmentSurveyUrl() + "\n\tShoppingCartCompletedSurveyUrl: " + this.GetShoppingCartCompletedSurveyUrl() + "\n\tShoppingCartCookieName: " + this.ShoppingCartCookieName + "\n\tShoppingCartRegex: " + this.ShoppingCartRegex + "\n\tPurchaseMadeCookieName: " + this.PurchaseMadeCookieName + "\n\tPurchaseMadeRegex: " + this.PurchaseMadeRegex + "\n\tWatcherJavascriptUrl: " + this.WatcherJavascriptUrl;
    };
    this.DebuggingEnabled = function (_1) {
        this.utils.DebuggingEnabled = _1;
    };
    this.Load = function () {
        var _2 = this;
        this.utils.DebugLog("Adding window.onload handler for Web Intercept Survey Load");
        this.utils.AddEvent(window, "load", function () {
            _2.CheckForInvite();
        });
    };
    this.TestLoad = function () {
        var _3 = this;
        this.utils.AddEvent(window, "load", function () {
            _3.YesButtonClicked();
        });
    };
    this.CheckForInvite = function () {
        if (this.utils.GetCookie(this.CookieName) == this.LaunchExitSurveyCookieValue) {
            if (this.LaunchExitSurvey()) {
                this.ExitSurvey();
            }
        } else {
            if (this.utils.GetCookie(this.CookieName) != this.CookieValue) {
                this.utils.SetCookie(this.CookieName, this.CookieValue, this.CookieDomain, this.CookieDuration, this.CookiePath);
                if (this.utils.GetRandom(this.NthVisitorToInvite) == this.NthVisitorToInvite) {
                    this.Invite();
                }
            }
        }
    };
    this.Invite = function () {
        if (this.InviteStyle == "popup") {
            if (confirm(this.SurveyPrompt)) {
                this.YesButtonClicked();
            }
        } else {
            this.Create(this.SurveyPromptDivName, this.SurveyPromptDivInnerHtml, this.SurveyPromptDivYesButtonId, this.SurveyPromptDivNoButtonId, this.SurveyPromptDivWidth, this.SurveyPromptDivHeight, this.SurveyPromptDivLeftOffset, this.SurveyPromptDivTopOffset);
        }
    };
    this.Create = function (id, _5, _6, _7, _8, _9, _a, _b) {
        this.utils.DebugLog("VoviciWebInterceptSurvey.Create");
        var _c = "VoviciSurveyPromptContainer_" + id;
        this.SurveyPromptDivName = id;
        var _d = document.createElement("div");
        _d.style.display = "none";
        _d.setAttribute("id", _c);
        _d.setAttribute("name", _c);
        _d.innerHTML = _5;
        document.body.appendChild(_d);
        this.div = document.getElementById(this.SurveyPromptDivName);
        this.div.style.width = _8 ? _8 : 575;
        this.div.style.height = _9 ? _9 : 179;
        if ((_a || _b) || (_a && _b)) {
            this.div.style.position = "absolute";
            this.div.style.left = _a ? _a : 200;
            this.div.style.top = _b ? _b : 200;
        }
        var _e = this;
        if (_6) {
            var _f = document.getElementById(_6);
            if (_f) {
                this.utils.AddEvent(_f, "click", function () {
                    _e.YesButtonClicked();
                });
            }
        }
        if (_7) {
            var no = document.getElementById(_7);
            if (no) {
                this.utils.AddEvent(no, "click", function () {
                    _e.NoButtonClicked();
                });
            }
        }
        _d.style.display = "block";
    };
    this.YesButtonClicked = function () {
        this.Hide();
        if (this.LaunchExitSurvey()) {
            this.utils.SetCookie(this.CookieName, this.LaunchExitSurveyCookieValue, this.CookieDomain, this.CookieDuration, this.CookiePath);
            this.ExitSurvey();
        } else {
            if (this.SurveyInNewWindow) {
                var _11 = "width=" + this.SurveyWindowWidth + ",height=" + this.SurveyWindowHeight + "," + "top=" + this.SurveyWindowTopOffset + ",left=" + this.SurveyWindowLeftOffset + "," + this.SurveyWindowDecorationOptions;
                var _12 = window.open(this.GetSurveyUrl(), this.SurveyWindowName, _11);
                _12.focus();
            } else {
                window.location = this.GetSurveyUrl();
            }
        }
        return false;
    };
    this.ExitSurvey = function () {
        var _13 = new VoviciExitSurvey();
        _13.CookieDomain = this.CookieDomain;
        _13.CookieValue = this.CookieValue;
        _13.CookieDuration = this.CookieDuration;
        _13.CookiePath = this.CookiePath;
        _13.Invitation_State_CookieName = this.CookieName;
        _13.Invitation_State_CookieInvited = this.LaunchExitSurveyCookieValue;
        _13.ShoppingCartCookieName = this.ShoppingCartCookieName;
        _13.ShoppingCartRegex = this.ShoppingCartRegex;
        _13.PurchaseMadeCookieName = this.PurchaseMadeCookieName;
        _13.PurchaseMadeRegex = this.PurchaseMadeRegex;
        _13.PromptToTakeTheSurvey = false;
        _13.WatcherJavascriptUrl = this.WatcherJavascriptUrl;
        _13.ExitSurveyUrl = this.ExitSurveyUrl;
        _13.ShoppingCartAbandonmentSurveyUrl = this.ShoppingCartAbandonmentSurveyUrl;
        _13.ShoppingCartCompletedSurveyUrl = this.ShoppingCartCompletedSurveyUrl;
        _13.FailoverToLayerWhenPopupsBlocked = this.FailoverToLayerWhenPopupsBlocked;
        _13.URLParameters = this.URLParameters;
        _13.SurveyWindowWidth = this.SurveyWindowWidth;
        _13.SurveyWindowHeight = this.SurveyWindowHeight;
        _13.SurveyWindowLeftOffset = this.SurveyWindowLeftOffset;
        _13.SurveyWindowTopOffset = this.SurveyWindowTopOffset;
        _13.SurveyWindowDecorationOptions = this.SurveyWindowDecorationOptions;
        _13.SurveyFrameName = this.SurveyFrameName;
        _13.SurveyInnerFrameName = this.SurveyInnerFrameName;
        _13.SurveyDisplayFrameInnerHtml = this.SurveyDisplayFrameInnerHtml;
        _13.DebuggingEnabled(this.utils.DebuggingEnabled);
        _13.SetupWatcher();
        return false;
    };
    this.NoButtonClicked = function () {
        this.utils.SetCookie(this.CookieName, this.CookieValue, this.CookieDomain, this.CookieDuration, this.CookiePath);
        this.Hide();
        return false;
    };
    this.Hide = function () {
        if (this.div) {
            this.div.style.display = "none";
        }
    };
    this.Show = function () {
        if (this.div) {
            this.div.style.display = "block";
        }
    };
    this.GetSurveyUrl = function () {
        return this.SurveyUrl;
    };
    this.GetExitSurveyUrl = function () {
        return this.utils.AddUrlParameters(this.ExitSurveyUrl, this.URLParameters);
    };
    this.GetShoppingCartAbandonmentSurveyUrl = function () {
        return this.utils.AddUrlParameters(this.ShoppingCartAbandonmentSurveyUrl, this.URLParameters);
    };
    this.GetShoppingCartCompletedSurveyUrl = function () {
        return this.utils.AddUrlParameters(this.ShoppingCartCompletedSurveyUrl, this.URLParameters);
    };
    this.AddUrlParameter = function (_14, val) {
        this.URLParameters[_14] = val;
    };
    this.LaunchExitSurvey = function () {
        return this.ExitSurveyUrl != "" || this.ShoppingCartAbandonmentSurveyUrl != "" || this.ShoppingCartCompletedSurveyUrl != "";
    };
};

function VoviciExitSurvey() {
    this.utils = new VoviciSurveyUtils();
    this.WatcherJavascriptUrl = "VoviciSurveyInvite.js";
    this.ExitSurveyUrl = "";
    this.ShoppingCartAbandonmentSurveyUrl = "";
    this.ShoppingCartCompletedSurveyUrl = "";
    this.FailoverToLayerWhenPopupsBlocked = false;
    this.NthVisitorToInvite = 1;
    this.SurveyInNewWindow = false;
    this.SurveyWindowWidth = 625;
    this.SurveyWindowHeight = 400;
    this.SurveyWindowLeftOffset = 200;
    this.SurveyWindowTopOffset = 100;
    this.SurveyWindowDecorationOptions = "scrollbars=yes, resizable=true, location=no, toolbar=no, menubar=no";
    this.SurveyWindowName = "VoviciExitSurvey";
    this.CookieDomain = "";
    this.CookieValue = "1";
    this.CookieDuration = "1440";
    this.CookiePath = "/";
    this.CookieName = "VOVICI_EXIT_SURVEY_INVITE";
    this.Invitation_State_CookieName = "";
    this.Invitation_State_CookieInvited = "";
    this.ShoppingCartCookieName = "";
    this.ShoppingCartRegex = "";
    this.PurchaseMadeCookieName = "";
    this.PurchaseMadeRegex = "";
    this.PromptToTakeTheSurvey = true;
    this.InviteStyle = "popup";
    this.SurveyPrompt = "We'd like your input! Please take a few moments to complete a brief survey.";
    this.SurveyPromptDivInnerHtml = "<map name=\"VoviciSurveyPromptMap\">" + "<area id=\"VoviciSurveyPromptYesButton\" shape=\"rect\" coords=\"65,125,225,175\" >" + "<area id=\"VoviciSurveyPromptNoButton\" shape=\"rect\" coords=\"340,125,500,175\" >" + "<area shape=\"default\" nohref>" + "</map><img src=\"/Code/WebPortals/Platform/PublicWeb/Framework/UI/scripts/Questionnaire/surveyinvite1.gif\" border=\"0\" usemap=\"#VoviciSurveyPromptMap\">";
    this.SurveyPromptDivYesButtonId = "VoviciSurveyPromptYesButton";
    this.SurveyPromptDivNoButtonId = "VoviciSurveyPromptNoButton";
    this.SurveyPromptDivWidth = 575;
    this.SurveyPromptDivHeight = 179;
    this.SurveyPromptDivLeftOffset = 200;
    this.SurveyPromptDivTopOffset = 100;
    this.WatcherMessageDivName = "VoviciWatcherMessage";
    this.WatcherMessage = "<div style=\"height:100px;text-align:left;padding-left:3px; font: bold 14px arial, helvetica, sans-serif; color:E20074;\">Wanneer u de website verlaat, verschijnt er in dit venster de enqu&ecirc;te. Als u hieraan wilt deelnemen, dient u dit venster geopend te houden.</div>";
    this.SurveyFrameName = "VoviciSurveyFrameOuterDiv";
    this.SurveyInnerFrameName = "VoviciSurveyFrameInnerDiv";
    this.SurveyDisplayFrameInnerHtml = "<div id=\"" + this.SurveyFrameName + "\" style=\"background-color:#FFFFFF;border: 1px solid #E2E5E7;\">" + "  <div id=\"" + this.SurveyPromptDivNoButtonId + "\" style=\"text-align:right; color: red\">[x]</div>" + "<div id=\"" + this.SurveyInnerFrameName + "\" ></div>" + "</div>";
    this.SurveyPromptDivName = "VoviciExitSurveyInvite_Prompt";
    this.TimerInterval = new Number(1000);
    this.TimerId;
    this.Watcher;
    this.WatcherWindowName = "VoviciExitSurveyWatcher";
    this.WatcherWindowDecorationOptions = "scrollbars=no, resizable=true, location=no, toolbar=no, menubar=no";
    this.URLParameters = new Array();
};
VoviciExitSurvey.prototype.DebuggingEnabled = function (_16) {
    this.utils.DebuggingEnabled = _16;
};
VoviciExitSurvey.prototype.toString = function () {
    return "VoviciExitSurvey internal state:" + "\n\tDebuggingEnabled: " + this.utils.DebuggingEnabled + "\n\tFailoverToLayerWhenPopupsBlocked: " + this.FailoverToLayerWhenPopupsBlocked + "\n\tExitSurveyUrl: " + this.GetExitSurveyUrl() + "\n\tShoppingCartAbandonmentSurveyUrl: " + this.GetShoppingCartAbandonmentSurveyUrl() + "\n\tShoppingCartCompletedSurveyUrl: " + this.GetShoppingCartCompletedSurveyUrl() + "\n\tNthVisitorToInvite: " + this.NthVisitorToInvite + "\n" + "\n\tInviteStyle: " + this.InviteStyle + "\n\tPromptToTakeTheSurvey: " + this.PromptToTakeTheSurvey + "\n\tSurveyPrompt: " + this.SurveyPrompt + "\n\tSurveyPromptDivName: " + this.SurveyPromptDivName + "\n\tSurveyPromptDivInnerHtml: " + this.SurveyPromptDivInnerHtml + "\n\tSurveyPromptDivYesButtonId: " + this.SurveyPromptDivYesButtonId + "\n\tSurveyPromptDivNoButtonId: " + this.SurveyPromptDivNoButtonId + "\n\tSurveyPromptDivWidth: " + this.SurveyPromptDivWidth + "\n\tSurveyPromptDivHeight: " + this.SurveyPromptDivHeight + "\n\tSurveyPromptDivLeftOffset: " + this.SurveyPromptDivLeftOffset + "\n\tSurveyPromptDivTopOffset: " + this.SurveyPromptDivTopOffset + "\n" + "\n\tSurveyInNewWindow: " + this.SurveyInNewWindow + "\n\tSurveyWindowWidth: " + this.SurveyWindowWidth + "\n\tSurveyWindowHeight: " + this.SurveyWindowHeight + "\n\tSurveyWindowLeftOffset: " + this.SurveyWindowLeftOffset + "\n\tSurveyWindowTopOffset: " + this.SurveyWindowTopOffset + "\n\tSurveyWindowDecorationOptions: " + this.SurveyWindowDecorationOptions + "\n\tSurveyWindowName: " + this.SurveyWindowName + "\n" + "\n\tSurveyFrameName: " + this.SurveyFrameName + "\n\tSurveyInnerFrameName: " + this.SurveyInnerFrameName + "\n\tSurveyDisplayFrameInnerHtml : " + this.SurveyDisplayFrameInnerHtml + "\n" + "\n\tTimerInterval: " + this.TimerInterval + "\n" + "\n\tCookieDomain: " + this.CookieDomain + "\n\tCookieName: " + this.CookieName + "\n\tCookieValue: " + this.CookieValue + "\n\tCookiePath: " + this.CookiePath + "\n\tCookieDuration: " + this.CookieDuration + "\n\nCookies:\n\n" + "\n\t" + this.CookieName + ": " + this.utils.GetCookie(this.CookieName);
};
VoviciExitSurvey.prototype.GetExitSurveyUrl = function () {
    return this.utils.AddUrlParameters(this.ExitSurveyUrl, this.URLParameters);
};
VoviciExitSurvey.prototype.GetShoppingCartAbandonmentSurveyUrl = function () {
    return this.utils.AddUrlParameters(this.ShoppingCartAbandonmentSurveyUrl, this.URLParameters);
};
VoviciExitSurvey.prototype.GetShoppingCartCompletedSurveyUrl = function () {
    return this.utils.AddUrlParameters(this.ShoppingCartCompletedSurveyUrl, this.URLParameters);
};
VoviciExitSurvey.prototype.AddUrlParameter = function (_17, val) {
    this.URLParameters[_17] = val;
};
VoviciExitSurvey.prototype.Load = function () {
    var _19 = this;
    this.utils.DebugLog("Adding window.onload handler for SetupWatcher");
    this.utils.AddEvent(window, "load", function () {
        _19.SetupWatcher();
    });
};
VoviciExitSurvey.prototype.SetupWatcher = function () {
    this.utils.DebugLog("SetupWatcher starting..");
    var _1a = new Boolean(false);
    var _1b = new Boolean(false);
    this.WatcherLaunch();
    this.Check(_1a, _1b);
    var _1c = this;
    this.utils.DebugLog("Setting timer for Check at interval " + this.TimerInterval);
    this.TimerId = setInterval(function () {
        _1c.Check(_1a, _1b);
    }, this.TimerInterval);
};
VoviciExitSurvey.prototype.WatcherLaunch = function () {
    var _1d = this.utils.GetCookie(this.CookieName);
    this.utils.DebugLog("WatcherLaunch: " + _1d);
    var _1e = new Boolean(true);
    var _1f = new Boolean(true);
    var _1g = this.utils.GetCookie(this.Invitation_State_CookieName);
    if ((!_1d || _1d == "") || _1g == "2") {
        this.Check(_1e, _1f);
        this.utils.DebugLog("Opening watcher window");
        var _20 = (document.all) ? window.screenLeft : window.screenX;
        var top = (document.all) ? window.screenTop : window.screenY;
        var _22 = 300;
        var _23 = 50;
        this.WatcherJavascriptUrl = "/Code/WebPortals/Platform/PublicWeb/Framework/UI/scripts/Questionnaire/VoviciSurveyInvite.js";
        var _24 = "width=" + _22 + ",height=" + _23 + "," + "top=" + top + ",left=" + _20 + "," + this.WatcherWindowDecorationOptions;
        var _25 = window.open("", this.WatcherWindowName, _24);
        if (_25) {
            try {
                _25.document.write("<html><head><title>T-Mobile tevredenheidsonderzoek</title></head></html>");
            } catch (e) {
                return;
            }
        }
        if (_25) {
            this.Watcher = _25;
            var _26 = "";
            for (var key in this.URLParameters) {
                if (key.toString().indexOf('&') != -1) _26 += "   watcher.AddUrlParameter('" + key + "', \"" + this.URLParameters[key] + "\");\n"
            }
            var writeHTML = "<html><head><title>T-Mobile tevredenheidsonderzoek</title>\n" + "<script type='text/javascript' language='javascript' src='" + this.WatcherJavascriptUrl + "'></script>\n" + "<script type='text/javascript' language='javascript'>\n" + "<!--\n" + "function LoadWatcher() {\n" + "  var watcher = new VoviciSurveyWatcher();\n" + "  watcher.DebuggingEnabled(" + this.utils.DebuggingEnabled + ");\n" + "  watcher.ExitSurveyUrl ='" + this.ExitSurveyUrl + "';\n" + "  watcher.Invitation_State_CookieName ='" + this.Invitation_State_CookieName + "';\n" + "  watcher.Invitation_State_CookieValue ='" + this.CookieValue + "';\n" + "  watcher.CookieDomain ='" + this.CookieDomain + "';\n" + "  watcher.CookieDuration ='" + this.CookieDuration + "';\n" + "  watcher.CookiePath ='" + this.CookiePath + "';\n" + "  watcher.ShoppingCartAbandonmentSurveyUrl ='" + this.ShoppingCartAbandonmentSurveyUrl + "';\n" + "  watcher.ShoppingCartCompletedSurveyUrl ='" + this.ShoppingCartCompletedSurveyUrl + "';\n" + _26 + "  watcher.ShoppingCartCookieName ='" + this.ShoppingCartCookieName + "';\n" + "  watcher.ShoppingCartRegex ='" + this.ShoppingCartRegex + "';\n" + "  watcher.PurchaseMadeCookieName ='" + this.PurchaseMadeCookieName + "';\n" + "  watcher.PurchaseMadeRegex ='" + this.PurchaseMadeRegex + "';\n" + "  watcher.PromptToTakeTheSurvey = " + this.PromptToTakeTheSurvey + ";\n" + "  watcher.WatcherMessageDivName='" + this.WatcherMessageDivName + "';\n" + "  watcher.SurveyPromptDivName='" + this.SurveyPromptDivName + "';\n" + "  watcher.SurveyPromptDivYesButtonId='" + this.SurveyPromptDivYesButtonId + "';\n" + "  watcher.SurveyPromptDivNoButtonId='" + this.SurveyPromptDivNoButtonId + "';\n" + "  watcher.SurveyPromptDivWidth= " + this.SurveyPromptDivWidth + ";\n" + "  watcher.SurveyPromptDivHeight= " + this.SurveyPromptDivHeight + ";\n" + "  watcher.SurveyPromptDivLeftOffset= " + this.SurveyPromptDivLeftOffset + ";\n" + "  watcher.SurveyPromptDivTopOffset= " + this.SurveyPromptDivTopOffset + ";\n" + "  watcher.SurveyWindowWidth= " + this.SurveyWindowWidth + ";\n" + "  watcher.SurveyWindowHeight= " + this.SurveyWindowHeight + ";\n" + "  watcher.SurveyWindowLeftOffset= " + this.SurveyWindowLeftOffset + ";\n" + "  watcher.SurveyWindowTopOffset= " + this.SurveyWindowTopOffset + ";\n" + "  watcher.WatcherLoad();\n" + "}\n" + "// -->\n" + "</script>\n</head>\n<body onload='LoadWatcher()'>\n" + "<div id='" + this.SurveyPromptDivName + "' style='display:none'>" + this.SurveyPromptDivInnerHtml + "</div>\n<div id='" + this.WatcherMessageDivName + "'>" + this.WatcherMessage + "</div>\n" + "</body>\n</html>";
            this.Watcher.document.write(writeHTML);
            this.Watcher.document.close();
            if (!this.Watcher.opener) {
                this.Watcher.opener = self;
            }
            if (!this.TimerId) {
                var _28 = this;
                this.TimerId = setInterval(function () {
                    _28.Check(_1e, _1f);
                }, this.TimerInterval);
            }
        } else {
            if (this.FailoverToLayerWhenPopupsBlocked) {
                var _29 = new VoviciSurveyWatcher();
                _29.IsAPopup = false;
                _29.DebuggingEnabled(this.utils.DebuggingEnabled);
                _29.ExitSurveyUrl = this.ExitSurveyUrl;
                _29.Invitation_State_CookieName = this.Invitation_State_CookieName;
                _29.Invitation_State_CookieValue = this.CookieValue;
                _29.CookieDomain = this.CookieDomain;
                _29.CookieDuration = this.CookieDuration;
                _29.CookiePath = this.CookiePath;
                _29.ShoppingCartAbandonmentSurveyUrl = this.ShoppingCartAbandonmentSurveyUrl;
                _29.ShoppingCartCompletedSurveyUrl = this.ShoppingCartCompletedSurveyUrl;
                _29.URLParameters = this.URLParameters;
                _29.ShoppingCartCookieName = this.ShoppingCartCookieName;
                _29.ShoppingCartRegex = this.ShoppingCartRegex;
                _29.PurchaseMadeCookieName = this.PurchaseMadeCookieName;
                _29.PurchaseMadeRegex = this.PurchaseMadeRegex;
                _29.PromptToTakeTheSurvey = this.PromptToTakeTheSurvey;
                _29.WatcherMessageDivName = this.WatcherMessageDivName;
                _29.SurveyPromptDivName = this.SurveyPromptDivName;
                _29.SurveyPromptDivYesButtonId = this.SurveyPromptDivYesButtonId;
                _29.SurveyPromptDivNoButtonId = this.SurveyPromptDivNoButtonId;
                _29.SurveyPromptDivWidth = this.SurveyPromptDivWidth;
                _29.SurveyPromptDivHeight = this.SurveyPromptDivHeight;
                _29.SurveyPromptDivLeftOffset = this.SurveyPromptDivLeftOffset;
                _29.SurveyPromptDivTopOffset = this.SurveyPromptDivTopOffset;
                _29.SurveyWindowWidth = this.SurveyWindowWidth;
                _29.SurveyWindowHeight = this.SurveyWindowHeight;
                _29.SurveyWindowLeftOffset = this.SurveyWindowLeftOffset;
                _29.SurveyWindowTopOffset = this.SurveyWindowTopOffset;
                _29.SurveyFrameName = this.SurveyFrameName;
                _29.SurveyInnerFrameName = this.SurveyInnerFrameName;
                _29.SurveyDisplayFrameInnerHtml = this.SurveyDisplayFrameInnerHtml;
                _29.Activate();
            }
        }
    } else {
        this.Test(true);
    }
};
VoviciExitSurvey.prototype.ChangeLinks = function () {
    this.utils.DebugLog("ExitSurveyChangeLinks..");
    var _2a = document.getElementsByTagName("a");
    var _2b = this;
    for (var i = 0; i < _2a.length; i++) {
        if (_2a[i].href != "") {
            this.utils.DebugLog("Adding ExitSurveyWatcherLaunch to link to " + _2a[i].href);
            var obj = _2a[i];
            _2a[i].onclick = function () {
                _2b.ExitSurveyWatcherLaunch();
            };
        }
    }
};
VoviciExitSurvey.prototype.Check = function (_2e, _2f) {
    if (_2e == false) {
        if (this.utils.GetCookie(this.CookieName) != "") {
            this.Update();
            return null;
        }
    } else {
        if (_2f == true) {
            this.Update();
            return null;
        } else {
            if (this.utils.GetCookie(this.CookieName) != "") {
                this.Update();
                return null;
            } else {
                this.Clear();
                return null;
            }
        }
    }
};
VoviciExitSurvey.prototype.Update = function () {
    this.utils.SetCookie(this.CookieName, Date(), this.CookieDomain, this.CookieDuration, this.CookiePath);
};
VoviciExitSurvey.prototype.CheckCookie = function (_30) {
    strDate = this.utils.GetCookie(_30);
    if (strDate != null && strDate != "") {
        return true;
    } else {
        return false;
    }
};
VoviciExitSurvey.prototype.Clear = function () {
    if (this.TimerId) {
        clearTimeout(this.TimerId);
    }
    if (this.utils.GetCookie(this.CookieName) != "") {
        this.utils.DeleteCookie(this.CookieName);
    }
    return null;
};
VoviciExitSurvey.prototype.Test = function (_31) {
    var _32 = this.utils.GetCookie(this.CookieName);
    if (_31 == false) {
        if (_32 != "") {
            this.utils.DebugLog("ExitSurveyTest: " + _32);
        }
    } else {
        this.utils.DebugLog("Watcher Window already launched! Close the watcher window and try again!");
    }
};

function VoviciSurveyWatcher() {
    this.utils = new VoviciSurveyUtils();
    this.CookieName = "VOVICI_EXIT_SURVEY_INVITE";
    this.Invitation_State_CookieName = "";
    this.Invitation_State_CookieValue = "";
    this.CookieDomain = "";
    this.CookieDuration = "";
    this.CookiePath = "";
    this.PromptToTakeTheSurvey = true;
    this.ExitSurveyUrl = "";
    this.ShoppingCartAbandonmentSurveyUrl = "";
    this.ShoppingCartCompletedSurveyUrl = "";
    this.ShoppingCartCookieName = "";
    this.ShoppingCartRegex = "";
    this.PurchaseMadeCookieName = "";
    this.PurchaseMadeRegex = "";
    this.SurveyUrl = "";
    this.SurveyPromptDivName = "VoviciSurveyInvite_Prompt";
    this.SurveyPromptDivYesButtonId = "VoviciSurveyPromptYesButton";
    this.SurveyPromptDivNoButtonId = "VoviciSurveyPromptNoButton";
    this.WatcherMessageDivName = "VoviciWatcherMessage";
    this.SurveyPromptDivWidth = 575;
    this.SurveyPromptDivHeight = 179;
    this.SurveyPromptDivLeftOffset = 200;
    this.SurveyPromptDivTopOffset = 100;
    this.SurveyWindowWidth = 400;
    this.SurveyWindowHeight = 600;
    this.SurveyWindowLeftOffset = 100;
    this.SurveyWindowTopOffset = 100;
    this.SurveyFrameName = "VoviciSurveyFrameOuterDiv";
    this.SurveyInnerFrameName = "VoviciSurveyFrameInnerDiv";
    this.SurveyDisplayFrameInnerHtml = "<div id=\"" + this.SurveyFrameName + "\" style=\"background-color:#FFFFFF;border: 1px solid #E2E5E7;\">" + "  <div id=\"" + this.SurveyPromptDivNoButtonId + "\" style=\"text-align:right; color: red\">[x]</div>" + "<div id=\"" + this.SurveyInnerFrameName + "\" ></div>" + "</div>";
    this.TimerId;
    this.TimerInterval = new Number(10000);
    this.IsAPopup = true;
    this.IFrameObj;
    this.URLParameters = new Array();
};
VoviciSurveyWatcher.prototype.DebuggingEnabled = function (_33) {
    this.utils.DebuggingEnabled = _33;
};
VoviciSurveyWatcher.prototype.Load = function () {
    this.utils.AddEvent(window, "load", function () {
        watcher.WatcherLoad();
    });
};
VoviciSurveyWatcher.prototype.WatcherLoad = function () {
    this.utils.DebugLog("Load");
    self.blur();
    var _34 = this;
    this.utils.AddEvent(window, "unload", function () {
        _34.Unload();
    });
    _34.StartChecking();
};
VoviciSurveyWatcher.prototype.StartChecking = function () {
    this.utils.DebugLog("StartChecking");
    this.Blur();
    this.Clear();
    this.CheckCondition();
    var _35 = this;
    this.TimerId = setInterval(function () {
        _35.CheckCondition();
    }, this.TimerInterval);
};
VoviciSurveyWatcher.prototype.Unload = function () {
    this.utils.DebugLog("Unload");
    this.Clear();
    if (this.utils.GetCookie(this.Invitation_State_CookieName) == this.Invitation_State_CookieValue) {
        window.self.focus();
    }
    this.utils.DeleteCookie(this.CookieName);
};
VoviciSurveyWatcher.prototype.Blur = function () {
    this.utils.DebugLog("Blur");
    if (!this.utils.DebuggingEnabled) {
        window.self.blur();
    }
};
VoviciSurveyWatcher.prototype.CheckCondition = function () {
    this.utils.DebugLog("CheckCondition");
    var _36 = new Date();
    var _37;
    var _38;
    var _39 = this.utils.GetCookie(this.CookieName);
    var _3a = new Number(-1);
    if (_39 != "") {
        _37 = new Date(_39);
        _38 = new Date();
        _38.setDate(_36.getDate());
        _38 = new Date(_38.toGMTString());
        _3a = _38 - _37;
        this.Hide();
        this.Test();
    } else {
        this.Clear();
        this.Activate();
        return null;
    }
    if ((_3a == -1) || (_3a >= this.TimerInterval)) {
        this.Clear();
        this.Activate();
        return null;
    }
};
VoviciSurveyWatcher.prototype.Clear = function () {
    if (this.TimerId) {
        clearTimeout(this.TimerId);
    }
    return null;
};
VoviciSurveyWatcher.prototype.Hide = function () {
    this.Blur();
};
VoviciSurveyWatcher.prototype.GetExitSurveyUrl = function () {
    return this.utils.AddUrlParameters(this.ExitSurveyUrl, this.URLParameters);
};
VoviciSurveyWatcher.prototype.GetShoppingCartAbandonmentSurveyUrl = function () {
    return this.utils.AddUrlParameters(this.ShoppingCartAbandonmentSurveyUrl, this.URLParameters);
};
VoviciSurveyWatcher.prototype.GetShoppingCartCompletedSurveyUrl = function () {
    return this.utils.AddUrlParameters(this.ShoppingCartCompletedSurveyUrl, this.URLParameters);
};
VoviciSurveyWatcher.prototype.AddUrlParameter = function (_3b, val) {
    this.URLParameters[_3b] = val;
};
VoviciSurveyWatcher.prototype.Activate = function () {
    this.utils.SetCookie(this.Invitation_State_CookieName, this.Invitation_State_CookieValue, this.CookieDomain, this.CookieDuration, this.CookiePath);
    this.utils.DeleteCookie(this.CookieName);
    if (!this.IsAPopup) {
        window.focus();
    }
    var _3d = document.getElementById(this.WatcherMessageDivName);
    if (_3d) {
        _3d.style.display = "none";
    }
    if (this.PromptToTakeTheSurvey) {
        try {
            window.resizeTo(this.SurveyPromptDivWidth, this.SurveyPromptDivHeight);
            window.moveTo(this.SurveyPromptDivLeftOffset, this.SurveyPromptDivTopOffset);
        }
        catch (error) {}
        var _3e = document.getElementById(this.SurveyPromptDivName);
        if (_3e) {
            _3e.style.display = "block";
        }
        var _3f = this;
        if (this.SurveyPromptDivYesButtonId) {
            var yes = document.getElementById(this.SurveyPromptDivYesButtonId);
            if (yes) {
                this.utils.AddEvent(yes, "click", function () {
                    _3f.YesButtonClicked();
                });
            }
        }
        if (this.SurveyPromptDivNoButtonId) {
            var no = document.getElementById(this.SurveyPromptDivNoButtonId);
            if (no) {
                this.utils.AddEvent(no, "click", function () {
                    _3f.NoButtonClicked();
                });
            }
        }
    } else {
        this.YesButtonClicked();
    }
};
VoviciSurveyWatcher.prototype.HidePrompt = function () {
    var _42 = document.getElementById(this.SurveyPromptDivName);
    if (_42) {
        _42.style.display = "none";
    }
    
    var _43 = document.getElementById(this.SurveyFrameName);
    if (_43) {
        _43.style.display = "none";
    }
};
VoviciSurveyWatcher.prototype.YesButtonClicked = function () {
    this.utils.SetCookie(this.Invitation_State_CookieName, this.Invitation_State_CookieValue, this.CookieDomain, this.CookieDuration, this.CookiePath);
    if (this.IsAPopup) {
        try {
            window.resizeTo(this.SurveyWindowWidth, this.SurveyWindowHeight);
            window.moveTo(this.SurveyWindowLeftOffset, this.SurveyWindowTopOffset);
        }
        catch (error) {}
        window.location = this.GetExitSurveyUrl();
        return false;
    } else {
        this.HidePrompt();
        var _44 = document.getElementById(this.SurveyFrameName);
        if (_44 && _44.parentNode && _44.parentNode.removeChild) {
            _44.parentNode.removeChild(_44);
        }
        var _45 = document.getElementById(this.SurveyPromptDivNoButtonId);
        if (_45 && _45.parentNode && _45.parentNode.removeChild) {
            _45.parentNode.removeChild(_45);
        }
        var obj = this;
        this.SurveyLayer = this.utils.CreateLayer(this.SurveyFrameName, this.SurveyDisplayFrameInnerHtml, obj, "", this.SurveyPromptDivNoButtonId, this.SurveyWindowWidth, this.SurveyWindowHeight, this.SurveyWindowLeftOffset, this.SurveyWindowTopOffset);
        this.LoadSurveyInIFrame();
    }
};
VoviciSurveyWatcher.prototype.NoButtonClicked = function () {
    if (this.IsAPopup) {
        window.close();
    } else {
        this.HidePrompt();
    }
    return false;
};
VoviciSurveyWatcher.prototype.LoadSurveyInIFrame = function () {
    if (!document.createElement) {
        return true;
    }
    " + this.SurveyInnerFrameName + ";
    var _47 = document.getElementById(this.SurveyInnerFrameName);
    if (!_47) {
        return true;
    }
    var _48;
    if (!this.IFrameObj && document.createElement) {
        try {
            var _49 = document.createElement("iframe");
            _49.setAttribute("id", "VoviciSurveyIFrame");
            _49.style.position = "relative";
            _49.style.border = "0px";
            _49.style.width = "100%";
            _49.style.height = "100%";
            this.IFrameObj = _47.appendChild(_49);
            if (document.frames) {
                this.IFrameObj = document.frames["VoviciSurveyIFrame"];
            }
        }
        catch (exception) {
            iframeHTML = "<iframe id=\"VoviciSurveyIFrame\" style=\"";
            iframeHTML += "position:relative;";
            iframeHTML += "border:0px;";
            iframeHTML += "width:100%;";
            iframeHTML += "height:100;";
            iframeHTML += "\"></iframe>";
            _47.innerHTML += iframeHTML;
            this.IFrameObj = new Object();
            this.IFrameObj.document = new Object();
            this.IFrameObj.document.location = new Object();
            this.IFrameObj.document.location.iframe = document.getElementById("VoviciSurveyIFrame");
            this.IFrameObj.document.location.replace = function (_4a) {
                this.iframe.src = _4a;
            };
        }
    }
    if (navigator.userAgent.indexOf("Gecko") != -1 && !this.IFrameObj.contentDocument) {
        setTimeout(this.LoadSurveyInIFrame, 10);
        return false;
    }
    if (this.IFrameObj.contentDocument) {
        _48 = this.IFrameObj.contentDocument;
    } else {
        if (this.IFrameObj.contentWindow) {
            _48 = this.IFrameObj.contentWindow.document;
        } else {
            if (this.IFrameObj.document) {
                _48 = this.IFrameObj.document;
            } else {
                return true;
            }
        }
    }
    _48.location.replace(this.GetExitSurveyUrl());
    return false;
};
VoviciSurveyWatcher.prototype.Test = function () {
    this.utils.DebugLog("cookie: " + this.utils.GetCookie(this.CookieName));
};

function VoviciSurveyUtils() {
    this.DebuggingEnabled = false;
    this.DebugDivName = "VoviciSurveyInvite_DebugOutput";
    this.DebugDiv;
    this.DebugLog = function (_4b) {
        if (this.DebuggingEnabled) {
            this.CreateDebugDiv();
            if (this.DebugDiv) {
                this.DebugDiv.appendChild(document.createTextNode(_4b));
                this.DebugDiv.appendChild(document.createElement("br"));
            } else {}
        }
    };
    this.CreateDebugDiv = function () {
        if (!this.DebugDiv) {
            var div = document.getElementById(this.DebugDivName);
            if (div) {
                this.DebugDiv = div;
            } else {
                if (document.body) {
                    this.DebugDiv = document.createElement("div");
                    this.DebugDiv.id = this.DebugDivName;
                    document.body.appendChild(this.DebugDiv);
                }
            }
        }
    };
    this.AddEvent = function (obj, _4e, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(_4e, fn, false);
            return true;
        } else {
            if (obj.attachEvent) {
                var r = obj.attachEvent("on" + _4e, fn);
                return r;
            } else {
                return false;
            }
        }
    };
    this.RemoveEvent = function (obj, _52, fn) {
        if (obj.removeEventListener) {
            obj.removeEventListener(_52, fn, false);
            return true;
        } else {
            if (obj.detachEvent) {
                var r = obj.detachEvent("on" + _52, fn);
                return r;
            } else {
                return false;
            }
        }
    };
    this.SetCookie = function (_55, _56, _57, _58, _59) {
        var _5a = _55 + "=" + _56 + ";";
        if (_57) {
            _5a += " domain=" + _57 + ";";
        }
        if (_59) {
            _5a += " path=" + _59 + ";";
        }
        var _5b = this.GetCookieExpireDate(_58);
        if (_5b) {
            _5a += " expires=" + _5b.toGMTString() + ";";
        }
        document.cookie = _5a;
    };
    this.GetCookie = function (_5c) {
        arg = _5c + "=";
        alen = arg.length;
        clen = document.cookie.length;
        i = 0;
        while (i < clen) {
            j = i + alen;
            if (document.cookie.substring(i, j) == arg) {
                return this.GetCookieValue(j);
            }
            i = document.cookie.indexOf(" ", i) + 1;
            if (i === 0) {
                break;
            }
        }
    };
    this.GetCookieValue = function (_5d) {
        endstr = document.cookie.indexOf(";", _5d);
        if (endstr == -1) {
            endstr = document.cookie.length;
        }
        return unescape(document.cookie.substring(_5d, endstr));
    };
    this.GetCookieExpireDate = function (_5e) {
        if (_5e == "" || _5e == 0) {
            return "";
        }
        if (_5e == "today") {
            var _5f = new Date();
            _5f.setDate(_5f.getDate() + 1);
            _5f.setHours(0);
            _5f.setMinutes(1);
            _5f.setSeconds(0);
            _5f.setMilliseconds(0);
            return _5f;
        } else {
            var _60 = new Date();
            _60.setTime(_60.getTime() + _5e * 60 * 1000);
            return _60;
        }
    };
    this.DeleteCookie = function (_61) {
        var _62 = new Date();
        _62.setTime(_62.getTime() - 1);
        document.cookie = _61 += "=; expires=" + _62.toGMTString();
    };
    this.GetRandom = function (max) {
        if (max == 1) {
            return 1;
        } else {
            return (Math.floor(Math.random() * max)) + 1;
        }
    };
    this.CookieMatchesRegex = function (_64, _65) {
        var _66 = this.GetCookie(_64);
        if (_66) {
            return _66.match(new RegExp(_65));
        }
        return false;
    };
    this.AddUrlParameters = function (_67, _68) {
        if (_68) {
            var out = _67;
            if (!/\?/.test(out)) {
                out += "?";
            }
            var _6a = 0;
            for (var key in _68) {
                if (key.toString().indexOf('&') != -1) {
                    out += (_6a > 0 ? "&" : "") + key + "=" + escape(_68[key]);
                }
            }
            return out;
        } else {
            return _67;
        }
    };
    this.GetLayerWidth = function (_6c) {
        var _6d = 0;
        if (typeof(window.innerWidth) == "number") {
            _6d = window.innerWidth;
        } else {
            if (document.documentElement && document.documentElement.clientWidth) {
                _6d = document.documentElement.clientWidth;
            } else {
                if (document.body && document.body.clientWidth) {
                    _6d = document.body.clientWidth;
                }
            }
        }
        if (_6c) {
            return Math.min(_6c, _6d);
        } else {
            return _6d;
        }
    };
    this.GetLayerHeight = function (_6e) {
        var _6f = 0;
        if (typeof(window.innerHeight) == "number") {
            _6f = window.innerHeight;
        } else {
            if (document.documentElement && document.documentElement.clientHeight) {
                _6f = document.documentElement.clientHeight;
            } else {
                if (document.body && document.body.clientHeight) {
                    _6f = document.body.clientHeight;
                }
            }
        }
        if (_6e) {
            return Math.min(_6e, _6f);
        } else {
            return _6f;
        }
    };
    this.CreateLayer = function (id, _71, obj, _73, _74, _75, _76, _77, _78) {
        var _79 = "VoviciSurveyPromptContainer_" + id;
        var _7a = document.createElement("div");
        _7a.style.display = "none";
        _7a.setAttribute("id", _79);
        _7a.setAttribute("name", _79);
        _7a.innerHTML = _71;
        document.body.appendChild(_7a);
        var div = document.getElementById(id);
        var _7c = this.GetLayerWidth();
        var _7d = this.GetLayerHeight();
        var _7e = _75 ? this.GetLayerWidth(_75) : (_7c * 0.9);
        var _7f = _76 ? this.GetLayerHeight(_76) : (_7d * 0.9);
        div.style.width = _7e;
        div.style.height = _7f;
        div.style.position = "absolute";
        div.style.left = _77 ? _77 : Math.abs(_7c - _7e) / 2;
        div.style.top = _78 ? _78 : Math.abs(_7d - _7f) / 2;
        if (_73) {
            var yes = document.getElementById(_73);
            if (yes) {
                this.AddEvent(yes, "click", function () {
                    obj.YesButtonClicked();
                });
            }
        }
        if (_74) {
            var no = document.getElementById(_74);
            if (no) {
                this.AddEvent(no, "click", function () {
                    obj.NoButtonClicked();
                });
            }
        }
        _7a.style.display = "block";
        return _7a;
    };
};
var lpMTagConfig = {
    'lpServer': 'server.lon.liveperson.net',
    'lpNumber': '91533411',
    'lpProtocol': (document.location.toString().indexOf('https:') == 0) ? 'https' : 'http',
    'lpTagLoaded': false,
    'lpTagSrv': 'sr2.liveperson.net',
    'pageStartTime': (new Date()).getTime(),
    'deploymentID': '1'
};
lpMTagConfig.deploymentConfigPath = lpMTagConfig.lpServer + '/visitor/addons/deploy.asp';
lpMTagConfig.lpLoadScripts = function () {
    lpAddMonitorTag(lpMTagConfig.lpProtocol + '://' + lpMTagConfig.deploymentConfigPath + '?site=' + lpMTagConfig.lpNumber + '&d_id=' + lpMTagConfig.deploymentID);
}

function lpAddMonitorTag(src) {
    if (!lpMTagConfig.lpTagLoaded) {
        if (typeof(src) == 'undefined' || typeof(src) == 'object') {
            if (lpMTagConfig.lpMTagSrc) {
                src = lpMTagConfig.lpMTagSrc;
            } else {
                if (lpMTagConfig.lpTagSrv) {
                    src = lpMTagConfig.lpProtocol + '://' + lpMTagConfig.lpTagSrv + '/hcp/html/mTag.js';
                } else {
                    src = '/hcp/html/mTag.js';
                };
            };
        };
        if (src.indexOf('http') != 0) {
            src = lpMTagConfig.lpProtocol + '://' + lpMTagConfig.lpServer + src + '?site=' + lpMTagConfig.lpNumber;
        } else {
            if (src.indexOf('site=') < 0) {
                if (src.indexOf('?') < 0) {
                    src = src + '?';
                } else {
                    src = src + '&';
                }
                src = src + 'site=' + lpMTagConfig.lpNumber;
            };
        };
        var s = document.createElement('script');
        s.setAttribute('type', 'text/javascript');
        s.setAttribute('charset', 'iso-8859-1');
        s.setAttribute('src', src);
        document.getElementsByTagName('head').item(0).appendChild(s);
    }
}
lpMTagConfig.calculateSentPageTime = function () {
    var t = (new Date()).getTime() - lpMTagConfig.pageStartTime;
    lpAddVars('page', 'pageLoadTime', Math.round(t / 1000) + ' sec');
};
if (typeof(lpMTagConfig.pageVar) == 'undefined') {
    lpMTagConfig.pageVar = [];
}
if (typeof(lpMTagConfig.sessionVar) == 'undefined') {
    lpMTagConfig.sessionVar = [];
}
if (typeof(lpMTagConfig.visitorVar) == 'undefined') {
    lpMTagConfig.visitorVar = [];
}
if (typeof(lpMTagConfig.onLoadCode) == 'undefined') {
    lpMTagConfig.onLoadCode = [];
}
if (typeof(lpMTagConfig.dynButton) == 'undefined') {
    lpMTagConfig.dynButton = [];
}
if (typeof(lpMTagConfig.ifVisitorCode) == 'undefined') {
    lpMTagConfig.ifVisitorCode = [];
}

function lpAddVars(scope, name, value) {
    if (name.indexOf('OrderTotal') != -1 || name.indexOf('OrderNumber') != -1) {
        if (value == '' || value == 0) return;
        else lpMTagConfig.sendCookies = false
    }
    value = lpTrimSpaces(value.toString());
    if (name.length > 50) {
        name = name.substr(0, 50);
    }
    if (value.length > 100) {
        value = value.substr(0, 100);
    }
    switch (scope) {
    case 'page':
        lpMTagConfig.pageVar[lpMTagConfig.pageVar.length] = escape(name) + '=' + escape(value);
        break;
    case 'session':
        lpMTagConfig.sessionVar[lpMTagConfig.sessionVar.length] = escape(name) + '=' + escape(value);
        break;
    case 'visitor':
        lpMTagConfig.visitorVar[lpMTagConfig.visitorVar.length] = escape(name) + '=' + escape(value);
        break;
    }
}

function onloadEMT() {
    var LPcookieLengthTest = document.cookie;
    if (lpMTag.lpBrowser == 'IE' && LPcookieLengthTest.length > 1000) {
        lpMTagConfig.sendCookies = false;
    }
}

function lpTrimSpaces(stringToTrim) {
    return stringToTrim.replace(/^\s+|\s+$/g, '');
}

function lpSendData(varscope, varname, varvalue) {
    if (typeof(lpMTag) != 'undefined' && typeof(lpMTag.lpSendData) != 'undefined') lpMTag.lpSendData(varscope.toUpperCase() + 'VAR!' + varname + '=' + varvalue, true);
}
try {
    if (typeof(lpUnit) == 'undefined') {
        var lpUnit = 'tmnl-consumer-shop';
    }
    if (typeof(lpAddVars) != 'undefined') {
        lpAddVars('page', 'unit', lpUnit);
    }
    lpMTagConfig.defaultInvite = 'chat' + '-' + lpUnit;
} catch (e) {}
lpMTagConfig.onLoadCode[lpMTagConfig.onLoadCode.length] = onloadEMT;
lpMTagConfig.onLoadCode[lpMTagConfig.onLoadCode.length] = function () {
    if (typeof(lpMTagConfig.dynButton) != 'undefined') {
        for (i = 0; i < lpMTagConfig.dynButton.length; ++i) {
            if (typeof(lpMTagConfig.dynButton[i].pid) != 'undefined' && document.getElementById(lpMTagConfig.dynButton[i].pid) == null) {
                lpMTagConfig.dynButton.splice(i, 1);
            }
        }
    }
};
lpMTagConfig.onLoadAll = function () {
    lpMTagConfig.calculateSentPageTime();
    lpMTagConfig.lpLoadScripts();
};
if (window.attachEvent) {
    window.attachEvent('onload', lpMTagConfig.onLoadAll);
} else {
    window.addEventListener('load', lpMTagConfig.onLoadAll, false);
}
lpMTagConfig.dynButton[lpMTagConfig.dynButton.length] = {
    'name': 'chat-' + lpUnit,
    'pid': 'lpbutton-div',
    'afterStartPage': true
};