var jhmp4 = {
    mp4download: function(event) {
	if((event.type!="click")||(event.type=="click"&&event.which==1)) {
            var docUrl = window.content.document.location.href;
            if(docUrl.indexOf("youtube.com/watch")!=-1){
                var code = docUrl.split("v=")[1];
                if(code.indexOf("&")!=-1){code = code.split("&")[0];}
                //var t = window.content.swfArgs["t"];
                var t = window.content.document.documentElement.innerHTML.split('"t": "')[1].split('"')[0];
                this.saveVideo("http://www.youtube.com/watch?v=" + code,"http://www.youtube.com/get_video?video_id=" + code + "&t=" + t + "&fmt=18",window.content.document.title.substr(10));
                //this.getToken(code);
            }else if(docUrl.indexOf("video.google.com/videoplay")!=-1){
                var theDownUrl = window.content.document.documentElement.innerHTML.split('If the download does not start automatically, right-click <a href="')[1].split('"')[0];
                this.saveVideo(window.content.document.location.href.toLowerCase(),theDownUrl,window.content.document.title);
            }else{alert("This page does not contain a supported video.\nPlease use YouTube (youtube.com) or Google Video (video.google.com).");}
        }
    },

    elem: function(parent, name, attrs, style, text) {
        var e = parent.createElement(name);
        parent.createElement(name)
        if (attrs) {
            for (key in attrs) {
                if (key == "class") {
                    e.className = attrs[key];
                } else if (key == "id") {
                    e.id = attrs[key];
                } else {
                    e.setAttribute(key, attrs[key]);
                }
            }
        }
        if (style) {
            for (key in style) {
                e.style[key] = style[key];
            }
        }
        if (text) {
            e.appendChild(parent.createTextNode(text));
        }
        return e;
    },

    tryFindYouTubes: function() {
        var e, code, d, o, index, ob;
        o = window.content.document.getElementsByTagName("object");
        for(var index = 0 ; index<o.length ; index++) {
            try {
                e = o[index].getElementsByTagName("param")[0].getAttribute("value");
                if(e.indexOf("youtube.com") != -1) {
                    code = e.substring(e.indexOf("/v/")+3);
                    if(code.indexOf("?")!=-1){code = code.split("?")[0];}
                    if(code.indexOf("&")!=-1){code = code.split("&")[0];}
                    d = o[index].parentNode.insertBefore(this.elem(window.content.document,"div"), o[index].nextSibling);
                    d.appendChild(this.elem(window.content.document,"button", {"onclick": "javascript:void(0);", "name": code, "class": "jhmp4_ytl"}, null,"Download YouTube Video"));
                }
            } catch(err) {}            
        }
        o = window.content.frames;
        for(var index = 0 ; index<o.length ; index++) {
            try {
                ob = window.content.document.getElementsByTagName("iframe")[index];
                e = o[index].document.getElementsByTagName("param")[0].getAttribute("value");
                if(e.indexOf("youtube.com") != -1) {
                    code = e.substring(e.indexOf("/v/")+3);
                    if(code.indexOf("?")!=-1){code = code.split("?")[0];}
                    if(code.indexOf("&")!=-1){code = code.split("&")[0];}
                    d = ob.parentNode.insertBefore(this.elem(window.content.document,"div"), ob.nextSibling);
                    d.appendChild(this.elem(window.content.document,"button", {"onclick": "javascript:void(0);", "name": code, "class": "jhmp4_ytl"}, null,"Download YouTube Video"));
                }
            } catch(err) {}
        }
    },

    saveVideo: function(refer,targetUrl,videoTitle) {
        var isDone = false;
        do{
            if(targetUrl.indexOf("&amp;")!=-1){targetUrl=targetUrl.replace("&amp;","&");}else{isDone=true;}
        }while(!isDone)
        var isDTA = Components.classes["@mozilla.org/preferences-service;1"]
            .getService(Components.interfaces.nsIPrefService)
            .getBranch("mp4downloader.").getBoolPref("dta");
        var isOC = Components.classes["@mozilla.org/preferences-service;1"]
            .getService(Components.interfaces.nsIPrefService)
            .getBranch("mp4downloader.").getBoolPref("dtaOC");
        if(isDTA&&window.DTA_AddingFunctions) {
            window.DTA_AddingFunctions.saveSingleLink(isOC,targetUrl,refer,videoTitle);
        }else{
            var ifi = initFileInfo;
            initFileInfo = function(aFI, aURL, aDocument, aContentType, aContentDisposition)
            {
                aFI.uri = makeURI(targetUrl);
                aFI.fileName = videoTitle;
                aFI.fileExt = "mp4";
                aFI.fileBaseName = videoTitle;
            }
            saveURL(targetUrl, "", "", false, false, makeURI(targetUrl));
            initFileInfo = ifi;
        }
    },

    getToken: function(params)
    {
        //only used for embedded youtube vids
        var Req = new XMLHttpRequest();
        Req.open("GET", "http://www.youtube.com/get_video_info?video_id=" + params, true);
        Req.send(null);
        Req.onreadystatechange = function(){
            if(Req.readyState==4&&Req.status==200){
                try{
                    var theTitle = "YouTube Video";
                    try{
                        theTitle = unescape(Req.responseText.split("&title=")[1].split("&")[0]);
                        var isDone = false;
                        do{
                            if(theTitle.indexOf("+")!=-1){theTitle=theTitle.replace("+"," ");}else{isDone=true;}
                        }while(!isDone)
                    }catch(e){
                        //can't get title :(
                    }
                    jhmp4.saveVideo("http://www.youtube.com/watch?v=" + params,"http://www.youtube.com/get_video?video_id=" + params + "&t=" + Req.responseText.split("&token=")[1].split("&")[0] + "&fmt=18",theTitle);
                }catch(err){
                    alert("There was a problem during AJAX-request. Please try again.\n\nDetails:\n" + err);
                }
            }
        }
    }
}

var jhmp4_prefs = Components.classes["@mozilla.org/preferences-service;1"]
    .getService(Components.interfaces.nsIPrefService)
    .getBranch("mp4downloader.");
jhmp4_prefs.QueryInterface(Components.interfaces.nsIPrefBranch2);

function jhmp4_testContextMenu() {
var isHidden = !((window.content.document.location.href.indexOf("youtube.com/watch")!=-1||window.content.document.location.href.indexOf("video.google.com/videoplay")!=-1)&&jhmp4_prefs.getBoolPref("cm"));
document.getElementById("MP4downCM").setAttribute("hidden",isHidden);
}

function jhmp4_windowLoaded() {
var obs = Components.classes["@mozilla.org/observer-service;1"]
    .getService(Components.interfaces["nsIObserverService"]);
obs.addObserver({observe: function(aWindow){jhmp4.tryFindYouTubes();}}, "EndDocumentLoad", false);
}

function jhmp4_mouseClick(event) {
if(event.originalTarget.className == "jhmp4_ytl") {
    jhmp4.getToken(event.originalTarget.getAttribute("name"));
}
}

if(jhmp4_prefs.getBoolPref("embedBtn")) {
window.addEventListener("load", jhmp4_windowLoaded, false); 
window.addEventListener("click", jhmp4_mouseClick, false);
}

window.addEventListener("load",jhmp4_onloadBtn,true);
function jhmp4_onloadBtn() {
    if(jhmp4_prefs.getBoolPref("firstTime129")==true){
        var afterElem=document.getElementById("urlbar-container");
        if(afterElem){
            var navBar=afterElem.parentNode;
            if(document.getElementById("MP4downBTN")==null) {
                navBar.insertItem("MP4downBTN",afterElem.nextSibling);
                navBar.setAttribute("currentset", navBar.currentSet );
                document.persist("nav-bar", "currentset");
            }
        }
        jhmp4_prefs.setBoolPref("firstTime129", false);
    }
}
