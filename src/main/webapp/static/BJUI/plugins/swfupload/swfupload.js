/**
 * SWFUpload: http://www.swfupload.org, http://swfupload.googlecode.com
 *
 * mmSWFUpload 1.0: Flash upload dialog - http://profandesign.se/swfupload/,  http://www.vinterwebb.se/
 *
 * SWFUpload is (c) 2006-2007 Lars Huring, Olov Nilz閚 and Mammon Media and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * SWFUpload 2 is (c) 2007-2008 Jake Roberts and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
+(function($){
    window.SWFUpload = function(a) {
        this.initSWFUpload(a);
    };;;;

    SWFUpload.prototype.initSWFUpload = function(b) {
        try {
            this.customSettings = {};
            this.settings = b;
            this.eventQueue = [];
            this.movieName = "SWFUpload_" + SWFUpload.movieCount++;
            this.movieElement = null;
            SWFUpload.instances[this.movieName] = this;
            this.initSettings();
            this.loadFlash();
            this.displayDebugInfo();
        } catch (a) {
            delete SWFUpload.instances[this.movieName];
            throw a;
        }
    };

    SWFUpload.instances = {};

    SWFUpload.movieCount = 0;

    SWFUpload.version = "2.2.0 2009-03-25";

    SWFUpload.QUEUE_ERROR = {
        QUEUE_LIMIT_EXCEEDED:-100,
        FILE_EXCEEDS_SIZE_LIMIT:-110,
        ZERO_BYTE_FILE:-120,
        INVALID_FILETYPE:-130
    };

    SWFUpload.UPLOAD_ERROR = {
        HTTP_ERROR:-200,
        MISSING_UPLOAD_URL:-210,
        IO_ERROR:-220,
        SECURITY_ERROR:-230,
        UPLOAD_LIMIT_EXCEEDED:-240,
        UPLOAD_FAILED:-250,
        SPECIFIED_FILE_ID_NOT_FOUND:-260,
        FILE_VALIDATION_FAILED:-270,
        FILE_CANCELLED:-280,
        UPLOAD_STOPPED:-290
    };

    SWFUpload.FILE_STATUS = {
        QUEUED:-1,
        IN_PROGRESS:-2,
        ERROR:-3,
        COMPLETE:-4,
        CANCELLED:-5
    };

    SWFUpload.BUTTON_ACTION = {
        SELECT_FILE:-100,
        SELECT_FILES:-110,
        START_UPLOAD:-120
    };

    SWFUpload.CURSOR = {
        ARROW:-1,
        HAND:-2
    };

    SWFUpload.WINDOW_MODE = {
        WINDOW:"window",
        TRANSPARENT:"transparent",
        OPAQUE:"opaque"
    };

    SWFUpload.completeURL = function(a) {
        if (typeof a !== "string" || a.match(/^https?:\/\//i) || a.match(/^\//)) {
            return a;
        }
        var c = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port :"");
        var b = window.location.pathname.lastIndexOf("/");
        if (b <= 0) {
            path = "/";
        } else {
            path = window.location.pathname.substr(0, b) + "/";
        }
        return path + a;
    };

    SWFUpload.prototype.initSettings = function() {
        this.ensureDefault = function(b, a) {
            this.settings[b] = this.settings[b] == undefined ? a :this.settings[b];
        };
        this.ensureDefault("upload_url", "");
        this.ensureDefault("preserve_relative_urls", false);
        this.ensureDefault("file_post_name", "Filedata");
        this.ensureDefault("post_params", {});
        this.ensureDefault("use_query_string", false);
        this.ensureDefault("requeue_on_error", false);
        this.ensureDefault("http_success", []);
        this.ensureDefault("assume_success_timeout", 0);
        this.ensureDefault("file_types", "*.*");
        this.ensureDefault("file_types_description", "All Files");
        this.ensureDefault("file_size_limit", 0);
        this.ensureDefault("file_upload_limit", 0);
        this.ensureDefault("file_queue_limit", 0);
        this.ensureDefault("flash_url", "swfupload.swf");
        this.ensureDefault("prevent_swf_caching", true);
        this.ensureDefault("button_image_url", "");
        this.ensureDefault("button_width", 1);
        this.ensureDefault("button_height", 1);
        this.ensureDefault("button_text", "");
        this.ensureDefault("button_text_style", "color: #000000; font-size: 16pt;");
        this.ensureDefault("button_text_top_padding", 0);
        this.ensureDefault("button_text_left_padding", 0);
        this.ensureDefault("button_action", SWFUpload.BUTTON_ACTION.SELECT_FILES);
        this.ensureDefault("button_disabled", false);
        this.ensureDefault("button_placeholder_id", "");
        this.ensureDefault("button_placeholder", null);
        this.ensureDefault("button_cursor", SWFUpload.CURSOR.ARROW);
        this.ensureDefault("button_window_mode", SWFUpload.WINDOW_MODE.WINDOW);
        this.ensureDefault("debug", false);
        this.settings.debug_enabled = this.settings.debug;
        this.settings.return_upload_start_handler = this.returnUploadStart;
        this.ensureDefault("swfupload_loaded_handler", null);
        this.ensureDefault("file_dialog_start_handler", null);
        this.ensureDefault("file_queued_handler", null);
        this.ensureDefault("file_queue_error_handler", null);
        this.ensureDefault("file_dialog_complete_handler", null);
        this.ensureDefault("upload_start_handler", null);
        this.ensureDefault("upload_progress_handler", null);
        this.ensureDefault("upload_error_handler", null);
        this.ensureDefault("upload_success_handler", null);
        this.ensureDefault("upload_complete_handler", null);
        this.ensureDefault("debug_handler", this.debugMessage);
        this.ensureDefault("custom_settings", {});
        this.customSettings = this.settings.custom_settings;
        if (!!this.settings.prevent_swf_caching) {
            this.settings.flash_url = this.settings.flash_url + (this.settings.flash_url.indexOf("?") < 0 ? "?" :"&") + "preventswfcaching=" + new Date().getTime();
        }
        if (!this.settings.preserve_relative_urls) {
            this.settings.upload_url = SWFUpload.completeURL(this.settings.upload_url);
            this.settings.button_image_url = this.settings.button_image_url ? SWFUpload.completeURL(this.settings.button_image_url) :this.settings.button_image_url;
        }
        delete this.ensureDefault;
    };

    SWFUpload.prototype.loadFlash = function() {
        var a, b;
        if (document.getElementById(this.movieName) !== null) {
            throw "ID " + this.movieName + " is already in use. The Flash Object could not be added";
        }
        a = document.getElementById(this.settings.button_placeholder_id) || this.settings.button_placeholder;
        if (a == undefined) {
            throw "Could not find the placeholder element: " + this.settings.button_placeholder_id;
        }
        b = document.createElement("div");
        b.innerHTML = this.getFlashHTML();
        a.parentNode.replaceChild(b.firstChild, a);
        if (window[this.movieName] == undefined) {
            window[this.movieName] = this.getMovieElement();
        }
    };

    SWFUpload.prototype.getFlashHTML = function() {
        return [ '<object id="', this.movieName, '" type="application/x-shockwave-flash" data="', this.settings.flash_url, '" width="', this.settings.button_width, '" height="', this.settings.button_height, '" class="swfupload">', '<param name="wmode" value="', this.settings.button_window_mode, '" />', '<param name="movie" value="', this.settings.flash_url, '" />', '<param name="quality" value="high" />', '<param name="menu" value="false" />', '<param name="allowScriptAccess" value="always" />', '<param name="flashvars" value="' + this.getFlashVars() + '" />', "</object>" ].join("");
    };

    SWFUpload.prototype.getFlashVars = function() {
        var b = this.buildParamString();
        var a = this.settings.http_success.join(",");
        return [ "movieName=", encodeURIComponent(this.movieName), "&amp;uploadURL=", encodeURIComponent(this.settings.upload_url), "&amp;useQueryString=", encodeURIComponent(this.settings.use_query_string), "&amp;requeueOnError=", encodeURIComponent(this.settings.requeue_on_error), "&amp;httpSuccess=", encodeURIComponent(a), "&amp;assumeSuccessTimeout=", encodeURIComponent(this.settings.assume_success_timeout), "&amp;params=", encodeURIComponent(b), "&amp;filePostName=", encodeURIComponent(this.settings.file_post_name), "&amp;fileTypes=", encodeURIComponent(this.settings.file_types), "&amp;fileTypesDescription=", encodeURIComponent(this.settings.file_types_description), "&amp;fileSizeLimit=", encodeURIComponent(this.settings.file_size_limit), "&amp;fileUploadLimit=", encodeURIComponent(this.settings.file_upload_limit), "&amp;fileQueueLimit=", encodeURIComponent(this.settings.file_queue_limit), "&amp;debugEnabled=", encodeURIComponent(this.settings.debug_enabled), "&amp;buttonImageURL=", encodeURIComponent(this.settings.button_image_url), "&amp;buttonWidth=", encodeURIComponent(this.settings.button_width), "&amp;buttonHeight=", encodeURIComponent(this.settings.button_height), "&amp;buttonText=", encodeURIComponent(this.settings.button_text), "&amp;buttonTextTopPadding=", encodeURIComponent(this.settings.button_text_top_padding), "&amp;buttonTextLeftPadding=", encodeURIComponent(this.settings.button_text_left_padding), "&amp;buttonTextStyle=", encodeURIComponent(this.settings.button_text_style), "&amp;buttonAction=", encodeURIComponent(this.settings.button_action), "&amp;buttonDisabled=", encodeURIComponent(this.settings.button_disabled), "&amp;buttonCursor=", encodeURIComponent(this.settings.button_cursor) ].join("");
    };

    SWFUpload.prototype.getMovieElement = function() {
        if (this.movieElement == undefined) {
            this.movieElement = document.getElementById(this.movieName);
        }
        if (this.movieElement === null) {
            throw "Could not find Flash element";
        }
        return this.movieElement;
    };

    SWFUpload.prototype.buildParamString = function() {
        var c = this.settings.post_params;
        var b = [];
        if (typeof c === "object") {
            for (var a in c) {
                if (c.hasOwnProperty(a)) {
                    b.push(encodeURIComponent(a.toString()) + "=" + encodeURIComponent(c[a].toString()));
                }
            }
        }
        return b.join("&amp;");
    };

    SWFUpload.prototype.destroy = function() {
        try {
            this.cancelUpload(null, false);
            var a = null;
            a = this.getMovieElement();
            if (a && typeof a.CallFunction === "unknown") {
                for (var c in a) {
                    try {
                        if (typeof a[c] === "function") {
                            a[c] = null;
                        }
                    } catch (e) {}
                }
                try {
                    a.parentNode.removeChild(a);
                } catch (b) {}
            }
            window[this.movieName] = null;
            SWFUpload.instances[this.movieName] = null;
            delete SWFUpload.instances[this.movieName];
            this.movieElement = null;
            this.settings = null;
            this.customSettings = null;
            this.eventQueue = null;
            this.movieName = null;
            return true;
        } catch (d) {
            return false;
        }
    };

    SWFUpload.prototype.displayDebugInfo = function() {
        this.debug([ "---SWFUpload Instance Info---\n", "Version: ", SWFUpload.version, "\n", "Movie Name: ", this.movieName, "\n", "Settings:\n", "    ", "upload_url:               ", this.settings.upload_url, "\n", "  ", "flash_url:                ", this.settings.flash_url, "\n", "   ", "use_query_string:         ", this.settings.use_query_string.toString(), "\n", " ", "requeue_on_error:         ", this.settings.requeue_on_error.toString(), "\n", " ", "http_success:             ", this.settings.http_success.join(", "), "\n", " ", "assume_success_timeout:   ", this.settings.assume_success_timeout, "\n", "  ", "file_post_name:           ", this.settings.file_post_name, "\n", "  ", "post_params:              ", this.settings.post_params.toString(), "\n", "  ", "file_types:               ", this.settings.file_types, "\n", "  ", "file_types_description:   ", this.settings.file_types_description, "\n", "  ", "file_size_limit:          ", this.settings.file_size_limit, "\n", " ", "file_upload_limit:        ", this.settings.file_upload_limit, "\n", "   ", "file_queue_limit:         ", this.settings.file_queue_limit, "\n", "    ", "debug:                    ", this.settings.debug.toString(), "\n", "    ", "prevent_swf_caching:      ", this.settings.prevent_swf_caching.toString(), "\n", "  ", "button_placeholder_id:    ", this.settings.button_placeholder_id.toString(), "\n", "    ", "button_placeholder:       ", this.settings.button_placeholder ? "Set" :"Not Set", "\n", "   ", "button_image_url:         ", this.settings.button_image_url.toString(), "\n", " ", "button_width:             ", this.settings.button_width.toString(), "\n", " ", "button_height:            ", this.settings.button_height.toString(), "\n", "    ", "button_text:              ", this.settings.button_text.toString(), "\n", "  ", "button_text_style:        ", this.settings.button_text_style.toString(), "\n", "    ", "button_text_top_padding:  ", this.settings.button_text_top_padding.toString(), "\n", "  ", "button_text_left_padding: ", this.settings.button_text_left_padding.toString(), "\n", " ", "button_action:            ", this.settings.button_action.toString(), "\n", "    ", "button_disabled:          ", this.settings.button_disabled.toString(), "\n", "  ", "custom_settings:          ", this.settings.custom_settings.toString(), "\n", "Event Handlers:\n", " ", "swfupload_loaded_handler assigned:  ", (typeof this.settings.swfupload_loaded_handler === "function").toString(), "\n", "   ", "file_dialog_start_handler assigned: ", (typeof this.settings.file_dialog_start_handler === "function").toString(), "\n", "  ", "file_queued_handler assigned:       ", (typeof this.settings.file_queued_handler === "function").toString(), "\n", "    ", "file_queue_error_handler assigned:  ", (typeof this.settings.file_queue_error_handler === "function").toString(), "\n", "   ", "upload_start_handler assigned:      ", (typeof this.settings.upload_start_handler === "function").toString(), "\n", "   ", "upload_progress_handler assigned:   ", (typeof this.settings.upload_progress_handler === "function").toString(), "\n", "    ", "upload_error_handler assigned:      ", (typeof this.settings.upload_error_handler === "function").toString(), "\n", "   ", "upload_success_handler assigned:    ", (typeof this.settings.upload_success_handler === "function").toString(), "\n", " ", "upload_complete_handler assigned:   ", (typeof this.settings.upload_complete_handler === "function").toString(), "\n", "    ", "debug_handler assigned:             ", (typeof this.settings.debug_handler === "function").toString(), "\n" ].join(""));
    };

    SWFUpload.prototype.addSetting = function(b, c, a) {
        if (c == undefined) {
            return this.settings[b] = a;
        } else {
            return this.settings[b] = c;
        }
    };

    SWFUpload.prototype.getSetting = function(a) {
        if (this.settings[a] != undefined) {
            return this.settings[a];
        }
        return "";
    };

    SWFUpload.prototype.callFlash = function(functionName, argumentArray) {
        argumentArray = argumentArray || [];
        var movieElement = this.getMovieElement();
        var returnValue, returnString;
        try {
            returnString = movieElement.CallFunction('<invoke name="' + functionName + '" returntype="javascript">' + __flash__argumentsToXML(argumentArray, 0) + "</invoke>");
            returnValue = eval(returnString);
        } catch (ex) {
            throw "Call to " + functionName + " failed";
        }
        if (returnValue != undefined && typeof returnValue.post === "object") {
            returnValue = this.unescapeFilePostParams(returnValue);
        }
        return returnValue;
    };

    SWFUpload.prototype.selectFile = function() {
        this.callFlash("SelectFile");
    };

    SWFUpload.prototype.selectFiles = function() {
        this.callFlash("SelectFiles");
    };

    SWFUpload.prototype.startUpload = function(a) {
        this.callFlash("StartUpload", [ a ]);
    };

    SWFUpload.prototype.cancelUpload = function(a, b) {
        if (b !== false) {
            b = true;
        }
        this.callFlash("CancelUpload", [ a, b ]);
    };

    SWFUpload.prototype.stopUpload = function() {
        this.callFlash("StopUpload");
    };

    SWFUpload.prototype.getStats = function() {
        return this.callFlash("GetStats");
    };

    SWFUpload.prototype.setStats = function(a) {
        this.callFlash("SetStats", [ a ]);
    };

    SWFUpload.prototype.getFile = function(a) {
        if (typeof a === "number") {
            return this.callFlash("GetFileByIndex", [ a ]);
        } else {
            return this.callFlash("GetFile", [ a ]);
        }
    };

    SWFUpload.prototype.addFileParam = function(a, b, c) {
        return this.callFlash("AddFileParam", [ a, b, c ]);
    };

    SWFUpload.prototype.removeFileParam = function(a, b) {
        this.callFlash("RemoveFileParam", [ a, b ]);
    };

    SWFUpload.prototype.setUploadURL = function(a) {
        this.settings.upload_url = a.toString();
        this.callFlash("SetUploadURL", [ a ]);
    };

    SWFUpload.prototype.setPostParams = function(a) {
        this.settings.post_params = a;
        this.callFlash("SetPostParams", [ a ]);
    };

    SWFUpload.prototype.addPostParam = function(a, b) {
        this.settings.post_params[a] = b;
        this.callFlash("SetPostParams", [ this.settings.post_params ]);
    };

    SWFUpload.prototype.removePostParam = function(a) {
        delete this.settings.post_params[a];
        this.callFlash("SetPostParams", [ this.settings.post_params ]);
    };

    SWFUpload.prototype.setFileTypes = function(a, b) {
        this.settings.file_types = a;
        this.settings.file_types_description = b;
        this.callFlash("SetFileTypes", [ a, b ]);
    };

    SWFUpload.prototype.setFileSizeLimit = function(a) {
        this.settings.file_size_limit = a;
        this.callFlash("SetFileSizeLimit", [ a ]);
    };

    SWFUpload.prototype.setFileUploadLimit = function(a) {
        this.settings.file_upload_limit = a;
        this.callFlash("SetFileUploadLimit", [ a ]);
    };

    SWFUpload.prototype.setFileQueueLimit = function(a) {
        this.settings.file_queue_limit = a;
        this.callFlash("SetFileQueueLimit", [ a ]);
    };

    SWFUpload.prototype.setFilePostName = function(a) {
        this.settings.file_post_name = a;
        this.callFlash("SetFilePostName", [ a ]);
    };

    SWFUpload.prototype.setUseQueryString = function(a) {
        this.settings.use_query_string = a;
        this.callFlash("SetUseQueryString", [ a ]);
    };

    SWFUpload.prototype.setRequeueOnError = function(a) {
        this.settings.requeue_on_error = a;
        this.callFlash("SetRequeueOnError", [ a ]);
    };

    SWFUpload.prototype.setHTTPSuccess = function(a) {
        if (typeof a === "string") {
            a = a.replace(" ", "").split(",");
        }
        this.settings.http_success = a;
        this.callFlash("SetHTTPSuccess", [ a ]);
    };

    SWFUpload.prototype.setAssumeSuccessTimeout = function(a) {
        this.settings.assume_success_timeout = a;
        this.callFlash("SetAssumeSuccessTimeout", [ a ]);
    };

    SWFUpload.prototype.setDebugEnabled = function(a) {
        this.settings.debug_enabled = a;
        this.callFlash("SetDebugEnabled", [ a ]);
    };

    SWFUpload.prototype.setButtonImageURL = function(a) {
        if (a == undefined) {
            a = "";
        }
        this.settings.button_image_url = a;
        this.callFlash("SetButtonImageURL", [ a ]);
    };

    SWFUpload.prototype.setButtonDimensions = function(c, a) {
        this.settings.button_width = c;
        this.settings.button_height = a;
        var b = this.getMovieElement();
        if (b != undefined) {
            b.style.width = c + "px";
            b.style.height = a + "px";
        }
        this.callFlash("SetButtonDimensions", [ c, a ]);
    };

    SWFUpload.prototype.setButtonText = function(a) {
        this.settings.button_text = a;
        this.callFlash("SetButtonText", [ a ]);
    };

    SWFUpload.prototype.setButtonTextPadding = function(b, a) {
        this.settings.button_text_top_padding = a;
        this.settings.button_text_left_padding = b;
        this.callFlash("SetButtonTextPadding", [ b, a ]);
    };

    SWFUpload.prototype.setButtonTextStyle = function(a) {
        this.settings.button_text_style = a;
        this.callFlash("SetButtonTextStyle", [ a ]);
    };

    SWFUpload.prototype.setButtonDisabled = function(a) {
        this.settings.button_disabled = a;
        this.callFlash("SetButtonDisabled", [ a ]);
    };

    SWFUpload.prototype.setButtonAction = function(a) {
        this.settings.button_action = a;
        this.callFlash("SetButtonAction", [ a ]);
    };

    SWFUpload.prototype.setButtonCursor = function(a) {
        this.settings.button_cursor = a;
        this.callFlash("SetButtonCursor", [ a ]);
    };

    SWFUpload.prototype.queueEvent = function(b, c) {
        if (c == undefined) {
            c = [];
        } else {
            if (!(c instanceof Array)) {
                c = [ c ];
            }
        }
        var a = this;
        if (typeof this.settings[b] === "function") {
            this.eventQueue.push(function() {
                this.settings[b].apply(this, c);
            });
            setTimeout(function() {
                a.executeNextEvent();
            }, 0);
        } else {
            if (this.settings[b] !== null) {
                throw "Event handler " + b + " is unknown or is not a function";
            }
        }
    };

    SWFUpload.prototype.executeNextEvent = function() {
        var a = this.eventQueue ? this.eventQueue.shift() :null;
        if (typeof a === "function") {
            a.apply(this);
        }
    };

    SWFUpload.prototype.unescapeFilePostParams = function(c) {
        var e = /[$]([0-9a-f]{4})/i;
        var f = {};
        var d;
        if (c != undefined) {
            for (var a in c.post) {
                if (c.post.hasOwnProperty(a)) {
                    d = a;
                    var b;
                    while ((b = e.exec(d)) !== null) {
                        d = d.replace(b[0], String.fromCharCode(parseInt("0x" + b[1], 16)));
                    }
                    f[d] = c.post[a];
                }
            }
            c.post = f;
        }
        return c;
    };

    SWFUpload.prototype.testExternalInterface = function() {
        try {
            return this.callFlash("TestExternalInterface");
        } catch (a) {
            return false;
        }
    };

    SWFUpload.prototype.flashReady = function() {
        var a = this.getMovieElement();
        if (!a) {
            this.debug("Flash called back ready but the flash movie can't be found.");
            return;
        }
        this.cleanUp(a);
        this.queueEvent("swfupload_loaded_handler");
    };

    SWFUpload.prototype.cleanUp = function(a) {
        try {
            if (this.movieElement && typeof a.CallFunction === "unknown") {
                this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");
                for (var c in a) {
                    try {
                        if (typeof a[c] === "function") {
                            a[c] = null;
                        }
                    } catch (b) {}
                }
            }
        } catch (d) {}
        window.__flash__removeCallback = function(e, f) {
            try {
                if (e) {
                    e[f] = null;
                }
            } catch (g) {}
        };
    };

    SWFUpload.prototype.fileDialogStart = function() {
        this.queueEvent("file_dialog_start_handler");
    };

    SWFUpload.prototype.fileQueued = function(a) {
        a = this.unescapeFilePostParams(a);
        this.queueEvent("file_queued_handler", a);
    };

    SWFUpload.prototype.fileQueueError = function(a, c, b) {
        a = this.unescapeFilePostParams(a);
        this.queueEvent("file_queue_error_handler", [ a, c, b ]);
    };

    SWFUpload.prototype.fileDialogComplete = function(b, c, a) {
        this.queueEvent("file_dialog_complete_handler", [ b, c, a ]);
    };

    SWFUpload.prototype.uploadStart = function(a) {
        a = this.unescapeFilePostParams(a);
        this.queueEvent("return_upload_start_handler", a);
    };

    SWFUpload.prototype.returnUploadStart = function(a) {
        var b;
        if (typeof this.settings.upload_start_handler === "function") {
            a = this.unescapeFilePostParams(a);
            b = this.settings.upload_start_handler.call(this, a);
        } else {
            if (this.settings.upload_start_handler != undefined) {
                throw "upload_start_handler must be a function";
            }
        }
        if (b === undefined) {
            b = true;
        }
        b = !!b;
        this.callFlash("ReturnUploadStart", [ b ]);
    };

    SWFUpload.prototype.uploadProgress = function(a, c, b) {
        a = this.unescapeFilePostParams(a);
        this.queueEvent("upload_progress_handler", [ a, c, b ]);
    };

    SWFUpload.prototype.uploadError = function(a, c, b) {
        a = this.unescapeFilePostParams(a);
        this.queueEvent("upload_error_handler", [ a, c, b ]);
    };

    SWFUpload.prototype.uploadSuccess = function(b, a, c) {
        b = this.unescapeFilePostParams(b);
        this.queueEvent("upload_success_handler", [ b, a, c ]);
    };

    SWFUpload.prototype.uploadComplete = function(a) {
        a = this.unescapeFilePostParams(a);
        this.queueEvent("upload_complete_handler", a);
    };

    SWFUpload.prototype.debug = function(a) {
        this.queueEvent("debug_handler", a);
    };

    SWFUpload.prototype.debugMessage = function(c) {
        if (this.settings.debug) {
            var a, d = [];
            if (typeof c === "object" && typeof c.name === "string" && typeof c.message === "string") {
                for (var b in c) {
                    if (c.hasOwnProperty(b)) {
                        d.push(b + ": " + c[b]);
                    }
                }
                a = d.join("\n") || "";
                d = a.split("\n");
                a = "EXCEPTION: " + d.join("\nEXCEPTION: ");
                SWFUpload.Console.writeLine(a);
            } else {
                SWFUpload.Console.writeLine(c);
            }
        }
    };

    SWFUpload.Console = {};

    SWFUpload.Console.writeLine = function(d) {
        var b, a;
        try {
            b = document.getElementById("SWFUpload_Console");
            if (!b) {
                a = document.createElement("form");
                document.getElementsByTagName("body")[0].appendChild(a);
                b = document.createElement("textarea");
                b.id = "SWFUpload_Console";
                b.style.fontFamily = "monospace";
                b.setAttribute("wrap", "off");
                b.wrap = "off";
                b.style.overflow = "auto";
                b.style.width = "700px";
                b.style.height = "350px";
                b.style.margin = "5px";
                a.appendChild(b);
            }
            b.value += d + "\n";
            b.scrollTop = b.scrollHeight - b.clientHeight;
        } catch (c) {
            alert("Exception: " + c.name + " Message: " + c.message);
        }
    };
})(jQuery);
