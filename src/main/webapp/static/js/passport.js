var require,define;!function(e){function n(e,n,t){function o(){clearTimeout(s),n()}if(!(e in u)){u[e]=!0;var a=document.createElement("script");t=t||function(){};var s=setTimeout(t,r.timeout);return a.onerror=function(){clearTimeout(s),t()},"onload"in a?a.onload=o:a.onreadystatechange=function(){("loaded"==this.readyState||"complete"==this.readyState)&&o()},a.type="text/javascript",a.src=e,i.appendChild(a),a}}function t(e,t,r){var o=a[e]||(a[e]=[]);o.push(t);var i,s=l[e]||l[e+".js"]||{},c=s.pkg;i=c?f[c].url:s.url||e,n(i,t,r&&function(){r(e)})}var r,o,i=document.getElementsByTagName("head")[0],a={},s={},c={},u={},l={},f={};o=function(e,n,t){void 0===t&&(t=n),s[e]=t;var r=a[e];if(r){for(var o=0,i=r.length;i>o;o++)r[o]();delete a[e]}},r=function(e){if(e instanceof Array)return r.async.apply(null,arguments);e=r.alias(e);var n=c[e];if(n)return n.exports;var t=s[e]||{type:"not found id"};if(!t)throw"[ModJS] Cannot find module `"+e+"`";n=c[e]={exports:{}};var o="function"==typeof t?t.apply(n,[r,n.exports,n]):t;return o&&(n.exports=o),n.exports},r.async=function(n,o,i){function a(e){for(var n=0,r=e.length;r>n;n++){var o=e[n];if(o in s){var u=l[o];u&&"deps"in u&&a(u.deps)}else if(!(o in d)){d[o]=!0,p++,t(o,c,i);var u=l[o];u&&"deps"in u&&a(u.deps)}}}function c(){if(0==p--){for(var t=[],i=0,a=n.length;a>i;i++)t[i]=r(n[i]);o&&o.apply(e,t)}}"string"==typeof n&&(n=[n]);for(var u=0,f=n.length;f>u;u++)n[u]=r.alias(n[u]);var d={},p=0;a(n),c()},r.resourceMap=function(e){var n,t;t=e.res;for(n in t)t.hasOwnProperty(n)&&(l[n]=t[n]);t=e.pkg;for(n in t)t.hasOwnProperty(n)&&(f[n]=t[n])},r.loadJs=function(e){n(e)},r.loadCss=function(e){if(e.content){var n=document.createElement("style");n.type="text/css",n.styleSheet?n.styleSheet.cssText=e.content:n.innerHTML=e.content,i.appendChild(n)}else if(e.url){var t=document.createElement("link");t.href=e.url,t.rel="stylesheet",t.type="text/css",i.appendChild(t)}},r.alias=function(e){return e},r.timeout=5e3,window.require=r,window.define=o,window.console=window.console||{log:function(){}}}(this);define("common:widget/passport/base64",function(){function r(){_keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",this.encode=function(r){var e,t,o,n,a,c,d,h="",C=0;for(r=_utf8_encode(r);C<r.length;)e=r.charCodeAt(C++),t=r.charCodeAt(C++),o=r.charCodeAt(C++),n=e>>2,a=(3&e)<<4|t>>4,c=(15&t)<<2|o>>6,d=63&o,isNaN(t)?c=d=64:isNaN(o)&&(d=64),h=h+_keyStr.charAt(n)+_keyStr.charAt(a)+_keyStr.charAt(c)+_keyStr.charAt(d);return h},this.decode=function(r){var e,t,o,n,a,c,d,h="",C=0;for(r=r.replace(/[^A-Za-z0-9\+\/\=]/g,"");C<r.length;)n=_keyStr.indexOf(r.charAt(C++)),a=_keyStr.indexOf(r.charAt(C++)),c=_keyStr.indexOf(r.charAt(C++)),d=_keyStr.indexOf(r.charAt(C++)),e=n<<2|a>>4,t=(15&a)<<4|c>>2,o=(3&c)<<6|d,h+=String.fromCharCode(e),64!=c&&(h+=String.fromCharCode(t)),64!=d&&(h+=String.fromCharCode(o));return h=_utf8_decode(h)},_utf8_encode=function(r){r=r.replace(/\r\n/g,"\n");for(var e="",t=0;t<r.length;t++){var o=r.charCodeAt(t);128>o?e+=String.fromCharCode(o):o>127&&2048>o?(e+=String.fromCharCode(o>>6|192),e+=String.fromCharCode(63&o|128)):(e+=String.fromCharCode(o>>12|224),e+=String.fromCharCode(o>>6&63|128),e+=String.fromCharCode(63&o|128))}return e},_utf8_decode=function(r){for(var e="",t=0,o=c1=c2=0;t<r.length;)o=r.charCodeAt(t),128>o?(e+=String.fromCharCode(o),t++):o>191&&224>o?(c2=r.charCodeAt(t+1),e+=String.fromCharCode((31&o)<<6|63&c2),t+=2):(c2=r.charCodeAt(t+1),c3=r.charCodeAt(t+2),e+=String.fromCharCode((15&o)<<12|(63&c2)<<6|63&c3),t+=3);return e}}return new r});
;define("common:widget/passport/codemsgs",function(){var e={0:"成功",1:"参数错误",2:"应用标示错误",11:"该用户id已经存在",12:"该账号已经注册过了",13:"手机号已经注册过了",14:"该身份证号已经注册过了",15:"该邮箱已经注册过了",16:"该用户不存在",17:"用户名或密码错误了",18:"跨域出错了",500:"服务器出错了"};return e});
;define("common:widget/passport/md5",function(){"use strict";function n(n,t){var r=(65535&n)+(65535&t),e=(n>>16)+(t>>16)+(r>>16);return e<<16|65535&r}function t(n,t){return n<<t|n>>>32-t}function r(r,e,u,o,c,f){return n(t(n(n(e,r),n(o,f)),c),u)}function e(n,t,e,u,o,c,f){return r(t&e|~t&u,n,t,o,c,f)}function u(n,t,e,u,o,c,f){return r(t&u|e&~u,n,t,o,c,f)}function o(n,t,e,u,o,c,f){return r(t^e^u,n,t,o,c,f)}function c(n,t,e,u,o,c,f){return r(e^(t|~u),n,t,o,c,f)}function f(t,r){t[r>>5]|=128<<r%32,t[(r+64>>>9<<4)+14]=r;var f,i,a,h,g,d=1732584193,l=-271733879,v=-1732584194,m=271733878;for(f=0;f<t.length;f+=16)i=d,a=l,h=v,g=m,d=e(d,l,v,m,t[f],7,-680876936),m=e(m,d,l,v,t[f+1],12,-389564586),v=e(v,m,d,l,t[f+2],17,606105819),l=e(l,v,m,d,t[f+3],22,-1044525330),d=e(d,l,v,m,t[f+4],7,-176418897),m=e(m,d,l,v,t[f+5],12,1200080426),v=e(v,m,d,l,t[f+6],17,-1473231341),l=e(l,v,m,d,t[f+7],22,-45705983),d=e(d,l,v,m,t[f+8],7,1770035416),m=e(m,d,l,v,t[f+9],12,-1958414417),v=e(v,m,d,l,t[f+10],17,-42063),l=e(l,v,m,d,t[f+11],22,-1990404162),d=e(d,l,v,m,t[f+12],7,1804603682),m=e(m,d,l,v,t[f+13],12,-40341101),v=e(v,m,d,l,t[f+14],17,-1502002290),l=e(l,v,m,d,t[f+15],22,1236535329),d=u(d,l,v,m,t[f+1],5,-165796510),m=u(m,d,l,v,t[f+6],9,-1069501632),v=u(v,m,d,l,t[f+11],14,643717713),l=u(l,v,m,d,t[f],20,-373897302),d=u(d,l,v,m,t[f+5],5,-701558691),m=u(m,d,l,v,t[f+10],9,38016083),v=u(v,m,d,l,t[f+15],14,-660478335),l=u(l,v,m,d,t[f+4],20,-405537848),d=u(d,l,v,m,t[f+9],5,568446438),m=u(m,d,l,v,t[f+14],9,-1019803690),v=u(v,m,d,l,t[f+3],14,-187363961),l=u(l,v,m,d,t[f+8],20,1163531501),d=u(d,l,v,m,t[f+13],5,-1444681467),m=u(m,d,l,v,t[f+2],9,-51403784),v=u(v,m,d,l,t[f+7],14,1735328473),l=u(l,v,m,d,t[f+12],20,-1926607734),d=o(d,l,v,m,t[f+5],4,-378558),m=o(m,d,l,v,t[f+8],11,-2022574463),v=o(v,m,d,l,t[f+11],16,1839030562),l=o(l,v,m,d,t[f+14],23,-35309556),d=o(d,l,v,m,t[f+1],4,-1530992060),m=o(m,d,l,v,t[f+4],11,1272893353),v=o(v,m,d,l,t[f+7],16,-155497632),l=o(l,v,m,d,t[f+10],23,-1094730640),d=o(d,l,v,m,t[f+13],4,681279174),m=o(m,d,l,v,t[f],11,-358537222),v=o(v,m,d,l,t[f+3],16,-722521979),l=o(l,v,m,d,t[f+6],23,76029189),d=o(d,l,v,m,t[f+9],4,-640364487),m=o(m,d,l,v,t[f+12],11,-421815835),v=o(v,m,d,l,t[f+15],16,530742520),l=o(l,v,m,d,t[f+2],23,-995338651),d=c(d,l,v,m,t[f],6,-198630844),m=c(m,d,l,v,t[f+7],10,1126891415),v=c(v,m,d,l,t[f+14],15,-1416354905),l=c(l,v,m,d,t[f+5],21,-57434055),d=c(d,l,v,m,t[f+12],6,1700485571),m=c(m,d,l,v,t[f+3],10,-1894986606),v=c(v,m,d,l,t[f+10],15,-1051523),l=c(l,v,m,d,t[f+1],21,-2054922799),d=c(d,l,v,m,t[f+8],6,1873313359),m=c(m,d,l,v,t[f+15],10,-30611744),v=c(v,m,d,l,t[f+6],15,-1560198380),l=c(l,v,m,d,t[f+13],21,1309151649),d=c(d,l,v,m,t[f+4],6,-145523070),m=c(m,d,l,v,t[f+11],10,-1120210379),v=c(v,m,d,l,t[f+2],15,718787259),l=c(l,v,m,d,t[f+9],21,-343485551),d=n(d,i),l=n(l,a),v=n(v,h),m=n(m,g);return[d,l,v,m]}function i(n){var t,r="";for(t=0;t<32*n.length;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function a(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;for(t=0;t<8*n.length;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return i(f(a(n),8*n.length))}function g(n,t){var r,e,u=a(n),o=[],c=[];for(o[15]=c[15]=void 0,u.length>16&&(u=f(u,8*n.length)),r=0;16>r;r+=1)o[r]=909522486^u[r],c[r]=1549556828^u[r];return e=f(o.concat(a(t)),512+8*t.length),i(f(c.concat(e),640))}function d(n){var t,r,e="0123456789abcdef",u="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),u+=e.charAt(t>>>4&15)+e.charAt(15&t);return u}function l(n){return unescape(encodeURIComponent(n))}function v(n){return h(l(n))}function m(n){return d(v(n))}function s(n,t){return g(l(n),l(t))}function C(n,t){return d(s(n,t))}function p(n,t,r){return t?r?s(t,n):C(t,n):r?v(n):m(n)}return p});
;define("common:widget/passport/utf8to16",function(){function e(e){var a,c,s,r,t,o,h,n,C;for(a=[],r=e.length,c=s=0;r>c;){switch(t=e.charCodeAt(c++),t>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:a[s++]=e.charAt(c-1);break;case 12:case 13:o=e.charCodeAt(c++),a[s++]=String.fromCharCode((31&t)<<6|63&o);break;case 14:o=e.charCodeAt(c++),h=e.charCodeAt(c++),a[s++]=String.fromCharCode((15&t)<<12|(63&o)<<6|63&h);break;case 15:switch(15&t){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:o=e.charCodeAt(c++),h=e.charCodeAt(c++),n=e.charCodeAt(c++),C=(7&t)<<18|(63&o)<<12|(63&h)<<6|(63&n)-65536,a[s]=C>=0&&1048575>=C?String.fromCharCode(C>>>10&1023|55296,1023&C|56320):"?";break;case 8:case 9:case 10:case 11:c+=4,a[s]="?";break;case 12:case 13:c+=5,a[s]="?"}}s++}return a.join("")}return e});
;define("common:widget/passport/extend",function(){return function(r){for(var n,e=Array.prototype.slice.call(arguments,1),t=0;n=e[t];t++)if(n)for(var o in n)r[o]=n[o];return r}});
;define("common:widget/passport/noop",function(){return function(){}});
;define("common:widget/passport/inherit",function(){function t(t){var r=i(t);if(y)for(var n,o=0;n=b[o++];)t.hasOwnProperty(n)&&r.push(n);return r}function r(r,n,o){for(var u,a,c=t(o),i=0,s=c.length;s>i;)"__self"!==(u=c[i++])&&(a=o[u],n[u]=_(a)&&(!e||a.toString().indexOf(".__base")>-1)?function(t,o){var e=r[t]?r[t]:"__constructor"===t?n.__self.__parent:l,u=function(){var t=this.__base;this.__base=u.__base;var r=o.apply(this,arguments);return this.__base=t,r};return u.__base=e,u}(u,a):a)}function n(t,r){for(var n,e=1;n=t[e++];)r?_(n)?o.self(r,n.prototype,n):o.self(r,n):r=_(n)?o(t[0],n.prototype,n):o(t[0],n);return r||t[0]}function o(){var t=arguments,o=p(t[0]),e=o||_(t[0]),a=e?o?n(t[0]):t[0]:u,i=t[e?1:0]||{},f=t[e?2:1],l=i.__constructor||e&&a.prototype.__constructor?function(){return this.__constructor.apply(this,arguments)}:e?function(){return a.apply(this,arguments)}:function(){};if(!e)return l.prototype=i,l.prototype.__self=l.prototype.constructor=l,s(l,f);s(l,a),l.__parent=a;var y=a.prototype,v=l.prototype=c(y);return v.__self=v.constructor=l,i&&r(y,v,i),f&&r(a,l,f),l}var e=function(){"_"}.toString().indexOf("_")>-1,u=function(){},a=Object.prototype.hasOwnProperty,c=Object.create||function(t){var r=function(){};return r.prototype=t,new r},i=Object.keys||function(t){var r=[];for(var n in t)a.call(t,n)&&r.push(n);return r},s=function(t,r){for(var n in r)a.call(r,n)&&(t[n]=r[n]);return t},f=Object.prototype.toString,p=Array.isArray||function(t){return"[object Array]"===f.call(t)},_=function(t){return"[object Function]"===f.call(t)},l=function(){},y=!0,v={toString:""};for(var h in v)v.hasOwnProperty(h)&&(y=!1);var b=y?["toString","valueOf"]:null;return o.self=function(){var t=arguments,o=p(t[0]),e=o?n(t[0],t[0][0]):t[0],u=t[1],a=t[2],c=e.prototype;return u&&r(c,c,u),a&&r(e,e,a),e},o});
;define("common:widget/passport/events",function(){function t(){}function r(t,r,e){var n=!0;if(t){var o=0,i=t.length,s=r[0],a=r[1],f=r[2];switch(r.length){case 0:for(;i>o;o+=2)n=t[o].call(t[o+1]||e)!==!1&&n;break;case 1:for(;i>o;o+=2)n=t[o].call(t[o+1]||e,s)!==!1&&n;break;case 2:for(;i>o;o+=2)n=t[o].call(t[o+1]||e,s,a)!==!1&&n;break;case 3:for(;i>o;o+=2)n=t[o].call(t[o+1]||e,s,a,f)!==!1&&n;break;default:for(;i>o;o+=2)n=t[o].apply(t[o+1]||e,r)!==!1&&n}}return n}function e(t){return"[object Function]"===Object.prototype.toString.call(t)}var n=/\s+/;t.prototype.on=function(t,r,e){var o,i,s;if(!r)return this;for(o=this.__events||(this.__events={}),t=t.split(n);i=t.shift();)s=o[i]||(o[i]=[]),s.push(r,e);return this},t.prototype.once=function(t,r,e){var n=this,o=function(){n.off(t,o),r.apply(e||n,arguments)};return this.on(t,o,e)},t.prototype.off=function(t,r,e){var i,s,a,f;if(!(i=this.__events))return this;if(!(t||r||e))return delete this.__events,this;for(t=t?t.split(n):o(i);s=t.shift();)if(a=i[s])if(r||e)for(f=a.length-2;f>=0;f-=2)r&&a[f]!==r||e&&a[f+1]!==e||a.splice(f,2);else delete i[s];return this},t.prototype.trigger=function(t){var e,o,i,s,a,f,c=[],p=!0;if(!(e=this.__events))return this;for(t=t.split(n),a=1,f=arguments.length;f>a;a++)c[a-1]=arguments[a];for(;o=t.shift();)(i=e.all)&&(i=i.slice()),(s=e[o])&&(s=s.slice()),"all"!==o&&(p=r(s,c,this)&&p),p=r(i,[o].concat(c),this)&&p;return p},t.prototype.emit=t.prototype.trigger;var o=Object.keys;return o||(o=function(t){var r=[];for(var e in t)t.hasOwnProperty(e)&&r.push(e);return r}),t.mixTo=function(r){function n(t){r[t]=function(){return o[t].apply(s,Array.prototype.slice.call(arguments)),this}}var o=t.prototype;if(e(r)){for(var i in o)o.hasOwnProperty(i)&&(r.prototype[i]=o[i]);Object.keys(o).forEach(function(t){r.prototype[t]=o[t]})}else{var s=new t;for(var i in o)o.hasOwnProperty(i)&&n(i)}},t});
;define("common:widget/passport/model",["require","exports","module","common:widget/passport/inherit","common:widget/passport/extend","common:widget/passport/events"],function(t){var e=t("common:widget/passport/inherit"),i=t("common:widget/passport/extend"),n=t("common:widget/passport/events"),r=e(n,{__constructor:function(t){this._data=i({},t)},set:function(t,e,i){if(t instanceof Object){for(var n in t)this.set(n,t[n],!0);return this.trigger("change"),this}var r=this.get(t);return r===e?this:(this._data[t]=e,this.trigger("change:"+t,{oldValue:r,newValue:e}),void(!i&&this.trigger("change")))},get:function(t){return this._data[t]},clear:function(){this._data={},this.trigger("clear")}});return r});
;define("common:widget/passport/passportstatus",function(){return{READY:"初始化完毕",LOGIN_ING:"正在登录",LOGIN_SUCCESS:"登录成功",LOGIN_FAIL:"登录失败",LOGOUT_ING:"正在登出",LOGOUT_SUCCESS:"登出成功",LOGOUT_FAIL:"登出失败"}});
;define("common:widget/passport/jsonp",["require","exports","module","common:widget/passport/extend","common:widget/passport/noop"],function(o){var e=o("common:widget/passport/extend"),n=o("common:widget/passport/noop"),t=1e4,i=function(o,i,r){if(!o)throw new Error("url is empty");"function"==typeof i&&(r=i,i={}),i=i||{},r=r||n;var i=e({data:{},jsonp:"callback",timeout:1e4,prefix:"__jsonp_"},i),p=document.getElementsByTagName("head")[0],a=window.encodeURIComponent,m=null,c=i.prefix+t++,d=[];for(var s in i.data){var u=i.data[s];d.push(s+"="+a(u))}d.push(i.jsonp+"="+c),d=d.join("&"),o+=o.match(/\?/)?"&"+d:"?"+d,o=o.replace("?&","?"),window[c]=function(o){l(),r&&r(null,o)},i.timeout&&(m=setTimeout(function(){l(),r&&r("Timeout in Jsonp,callback is "+c)},i.timeout));var l=function(){f.parentNode&&f.parentNode.removeChild(f),window[c]=n,m&&clearTimeout(m)},w=function(){window[c]&&l()},f=document.createElement("script");return f.src=o,p.appendChild(f),w};return i});
;define("common:widget/passport/promise",function(){function t(){this._callbacks=[]}function e(e){function n(t){return function(){a+=1,o[t]=Array.prototype.slice.call(arguments),a===i&&r.done(o)}}var r=new t,o=[];if(!e||!e.length)return r.done(o),r;for(var a=0,i=e.length,s=0;i>s;s++)e[s].then(n(s));return r}function n(e,r){var o=new t;return 0===e.length?o.done.apply(o,r):e[0].apply(null,r).then(function(){e.splice(0,1),n(e,arguments).then(function(){o.done.apply(o,arguments)})}),o}function r(t){var e="";if("string"==typeof t)e=t;else{var n=encodeURIComponent,r=[];for(var o in t)t.hasOwnProperty(o)&&r.push(n(o)+"="+n(t[o]));e=r.join("&")}return e}function o(){var t;if(window.XMLHttpRequest)t=new XMLHttpRequest;else if(window.ActiveXObject)try{t=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){t=new ActiveXObject("Microsoft.XMLHTTP")}return t}function a(e,n,a,i){function u(){c.abort(),p.done(s.ETIMEOUT,"",c)}var c,l,p=new t;a=a||{},i=i||{};try{c=o()}catch(f){return p.done(s.ENOXHR,""),p}l=r(a),"GET"===e&&l&&(n+="?"+l,l=null),c.open(e,n);var h="application/x-www-form-urlencoded";for(var d in i)i.hasOwnProperty(d)&&("content-type"===d.toLowerCase()?h=i[d]:c.setRequestHeader(d,i[d]));c.setRequestHeader("Content-type",h);var v=s.ajaxTimeout;if(v)var y=setTimeout(u,v);return c.onreadystatechange=function(){if(v&&clearTimeout(y),4===c.readyState){var t=!c.status||(c.status<200||c.status>=300)&&304!==c.status;p.done(t,c.responseText,c)}},c.send(l),p}function i(t){return function(e,n,r){return a(t,e,n,r)}}t.prototype.then=function(e,n){var r;return this._isdone?r=e.apply(n,this.result):(r=new t,this._callbacks.push(function(){var t=e.apply(n,arguments);t&&"function"==typeof t.then&&t.then(r.done,r)})),r},t.prototype.done=function(){this.result=arguments,this._isdone=!0;for(var t=0;t<this._callbacks.length;t++)this._callbacks[t].apply(null,arguments);this._callbacks=[]};var s={Promise:t,join:e,chain:n,ajax:a,get:i("GET"),post:i("POST"),put:i("PUT"),del:i("DELETE"),ENOXHR:1,ETIMEOUT:2,ajaxTimeout:0};return s});
;define("common:widget/passport/core",["require","exports","module","common:widget/passport/md5","common:widget/passport/base64","common:widget/passport/utf8to16","common:widget/passport/extend","common:widget/passport/noop","common:widget/passport/model","common:widget/passport/passportstatus","common:widget/passport/codemsgs","common:widget/passport/inherit","common:widget/passport/jsonp","common:widget/passport/promise"],function(o){var t=o("common:widget/passport/md5"),s=o("common:widget/passport/base64"),e=o("common:widget/passport/utf8to16"),r=o("common:widget/passport/extend"),n=o("common:widget/passport/noop"),a=o("common:widget/passport/model"),i=o("common:widget/passport/passportstatus"),p=o("common:widget/passport/codemsgs"),c=o("common:widget/passport/inherit"),d=o("common:widget/passport/jsonp"),m=o("common:widget/passport/promise"),u=function(o){o=o||[];for(var t=0;t<o.length;t++){var s=o[t];if(s&&s[0])return s[0]}return null},l=c(a,{getHost:function(){if(this.get("passportHost"))return this.get("passportHost");var o=window.location.host,t=o.match(/\w+\.com(\.\w+)?(\:\d+)?$/gi),s="pp.yanxiu.com";if(!(t&&t.length>0))throw new Error("can't find the maches passport host for"+o);return o=t[0],this.set("passportHost",s),o="pp."+o.replace(/\:\d+$/gi,"")},getProtocol:function(){return window.location.protocol},parseFromCookie:function(){var o=this.parseUserInfo();o&&this.set(o);var t=this.parseBackUrl();t&&this.set("backUrl",t)},parseUserInfo:function(){for(var o=document.cookie.split("; "),t=null,r=null,n=0;n<o.length;n++)if(0==o[n].indexOf("passport=")){t=o[n].substr(9);break}if(!t)return null;try{var a=unescape(t).split("|");if("1"==a[0]||"2"==a[0]){r={};var i,p,c=e(s.decode(a[3]));for(i=0,p=c.indexOf(":",i);-1!=p;){var d,m,u;if(d=c.substring(i,p),lenEnd_offset=c.indexOf(":",p+1),-1==lenEnd_offset)break;if(m=parseInt(c.substring(p+1,lenEnd_offset)),u=c.substr(lenEnd_offset+1,m),"|"!=c.charAt(lenEnd_offset+1+m))break;r[d]=unescape(u),i=lenEnd_offset+2+m,p=c.indexOf(":",i)}return r}return null}catch(l){return null}},parseBackUrl:function(){try{for(var o=document.cookie.split("; "),t="",s=0;s<o.length;s++)if(0==o[s].indexOf("tbckurl=")){t=o[s].substr(8);break}return unescape(t)}catch(e){return""}},login:function(o){o=r({success:n,fail:n},o);var s=new m.Promise,e=this.getProtocol()+"//"+this.getHost()+"/uc/login",a={loginName:o.passport||this.get("passport"),password:t(o.password||this.get("password")),appKey:o.appKey||this.get("appKey"),keepCookie:o.keepCookie||this.get("keepCookie")?1:0,backUrl:o.backUrl||this.get("backUrl")||""},c=this;return this.set("status",i.LOGIN_ING),d(e,{data:a,jsonp:"crossCallback"},function(t,e){var r=e&&e.code;if(t&&(t="网络请求超时",r="neterror"),t||0!==r){c.set("status",i.LOGIN_FAIL);var n={code:r,msg:t||p[r]||"网络错误"};o.fail(n),s.done(n)}else{for(var a=e.data&&e.data.domainList||[],d=[],l=0,f=a.length;f>l;l++)d.push(c.crossdomain(a[l]));m.join(d).then(function(t){var e=u(t);if(e){c.set("status",i.LOGIN_FAIL);var n={code:"domainerror",msg:e||p[r]||"跨域登录失败"};c.logout().then(function(){o.fail(n),s.done(n)})}else c.parseFromCookie(),c.set("status",i.LOGIN_SUCCESS),o.success(),s.done(null)})}}),s},crossdomain:function(o){var t=new m.Promise;return d(o,{jsonp:"crossCallback"},function(o,s){o=!o&&s&&0==s.code?o||null:"跨域通信失败",t.done(o,s)}),t},logout:function(o){o=r({success:n,fail:n},o);var t=new m.Promise,s=this.getProtocol()+"//"+this.getHost()+"/uc/logout",e=this;return this.set("status",i.LOGOUT_ING),d(s,{jsonp:"crossCallback"},function(s,r){s&&(s="网络请求超时");var n=r&&r.code;if(s||0!==n){e.set("status",i.LOGOUT_FAIL);var a={code:n,msg:s||p[n]||"网络错误"};o.fail(a),t.done(a)}else{for(var c=r.data&&r.data.domainList||[],d=[],l=0,f=c.length;f>l;l++)d.push(e.crossdomain(c[l]));m.join(d).then(function(s){var r=u(s);if(r){e.set("status",i.LOGOUT_FAIL);var a={code:"domainerror",msg:r||p[n]||"跨域登出失败"};o.fail(a),t.done(a)}else e.set("status",i.LOGOUT_SUCCESS),o.success(),t.done(null)})}}),t}});return l});
;define("common:widget/passport/popup",["require","exports","module","common:widget/passport/inherit","common:widget/passport/events"],function(require,exports,module){function html2node(n){var o=document.createElement("div"),t=[];o.innerHTML=n;for(var s=0;s<o.childNodes.length;s++){var i=o.childNodes[s];i&&1==i.nodeType&&t.push(i)}return t}function trim(n){return n.replace(/(^\s*)|(\s*$)/g,"")}var inherit=require("common:widget/passport/inherit"),Events=require("common:widget/passport/events"),Popup=inherit(Events,{template:function(obj){{var __p="";Array.prototype.join}with(obj||{})__p+='<div class="passport-login-box-mask" style="display:none;">\n</div>\n<div class="passport-login-box-container" style="display:none;" data-name="content">\n	<div class="passport-login-title">\n		<span>欢迎登录</span>\n		<a href="javascript:void(0);" class="passport-cancel-btn" data-events="onclick:hide" data-name="cancel-btn">关闭</a>\n	</div>\n	<div class="passport-login-body">\n		<div class="passport-login-msg" data-name="msg"> </div>\n\n		<form>\n		<div class="passport-login-item-row">\n			\n			<input type="text" class="passport" placeholder="账号/手机/邮箱" data-name="passport"/>\n		</div>\n		<div class="passport-login-item-row">\n		\n			<input type="password" class="password" placeholder="输入密码" data-name="password"/>\n		</div>\n		<div class="passport-login-item-row">\n			<p class="passport-login-keep-cookie-container">\n			<input type="checkbox" class="keepCookie" data-name="keepCookie" checked="true"/><label>下次自动登录</label>\n\n			<a href="http://pp.yanxiu.com/reg/toFindMobilePwd.tc" target="_blank" class="passport-login-forget-password-link">忘记密码?</a>\n			</p>\n		</div>\n		<div class="passport-login-item-row">\n			<a href="javascript:void(0);" class="passport-btn passport-submit-btn" data-events="onclick:submit" data-name="submit-btm">登录</a>\n		</div>\n		</form>\n	</div>\n</div>\n';return __p},styleTemplate:function(obj){{var __t,__p="";Array.prototype.join}with(obj||{})__p+='x<style>\n	.passport-login-box-mask{\n		position: fixed;\n		_position:absolute;\n		width: 100%;\n		height: 100%;\n		left:0;\n		top:0;\n		background-color: #000;\n		opacity: 0.5;\n		filter:alpha(opacity=50);\n	}\n	.passport-login-box-container{\n		position: fixed;\n		_position:absolute;\n		background-color: #fff;\n		width: 390px;\n		height: 300px;\n		\n		border:1px solid #efefef;\n	}\n\n	.passport-login-box-container .passport-login-item-row{\n		margin-top:15px;\n		text-align: center;\n		position: relative;\n	}\n	.passport-login-box-container .passport-login-item-row label,.passport-login-box-container .passport-login-item-row p, .passport-login-box-container .passport-login-item-row input, .passport-login-box-container .passport-login-item-row a{\n		font:14px/18px arial,"\\5b8b\\4f53",sans-serif,"Microsoft YaHei",tahoma;\n\n	}\n	.passport-login-box-container .passport-login-item-row .passport, .passport-login-box-container .passport-login-item-row .password{\n\n		width: 276px;\n	    display: block;\n	    position: relative;\n	    height: 16px;\n	    padding: 12px 20px 12px 50px;\n	    border: 1px solid #ddd;\n	    transition: .3s;\n	    -moz-transition: .3s;\n	    -o-transition: .3s;\n	    -webkit-transition: .3s;\n	    font-size: 14px;\n	    color: #666;\n	    background-image: url('+(null==(__t=backgroundImage)?"":__t)+");\n	    background-repeat: no-repeat;\n	}\n\n	.passport-login-box-container .passport-login-item-row .passport{\n		background-position: 8px -62px;\n	}\n	.passport-login-box-container .passport-login-item-row .password{\n		background-position: 8px -140px;\n	}\n	.passport-login-box-container .passport-login-item-row .passport:focus, .passport-login-box-container .passport-login-item-row .password:focus{\n		border-color: #488ee7;\n	}\n	.passport-login-box-container .passport-login-item-row .passport:focus{\n		background-position: 8px -102px;\n	}\n	.passport-login-box-container .passport-login-item-row .password:focus{\n		background-position: 8px -180px;\n	}\n	.passport-login-box-container .passport-login-keep-cookie-container label, .passport-login-box-container .passport-login-keep-cookie-container input{\n		text-align: left;\n		font-size: 12px;\n		margin-right: 6px;\n	}\n	.passport-login-box-container .passport-login-item-row a.passport-btn{\n	\n		display: block;\n	    height: 48px;\n	    line-height: 48px;\n	    font-size: 16px;\n	    font-weight: bold;\n	    cursor: pointer;\n	    color: #fff;\n	    background: #3f89ec;\n	    border-radius: 3px;\n	    border: none;\n	    -moz-border-radius: 3px;\n	    -webkit-border-radius: 3px;\n	    transition: .3s;\n	    -moz-transition: .3s;\n	    -o-transition: .3s;\n	    -webkit-transition: .3s;\n	}\n	.passport-login-box-container .passport-login-item-row a.passport-btn:hover{\n		text-decoration: none;\n		color: white;\n		opacity: 0.95;\n	}\n	.passport-login-box-container  a.passport-cancel-btn{\n		position: absolute;\n	    top: 0px;\n	    right: 20px;\n	    font-size: 12px;\n	    color:#222;\n	}\n	.passport-login-box-container  a.passport-cancel-btn:hover{\n		text-decoration: none;\n		color: #333;\n	}\n	.passport-login-box-container .passport-login-msg{\n		height: 16px;\n		line-height: 16px;\n		text-align: center;\n		color: #fc4343;\n	}\n	.passport-login-box-container .passport-login-title{\n		background-color: #f7f7f7;\n	    border-bottom: 0;\n	    font-size: 16px;\n	    line-height: 40px;\n	    padding-left: 20px;\n	    border-bottom: 1px solid #ddd;\n	}\n	.passport-login-box-container .passport-login-body{\n		padding: 10px 20px 20px 20px;\n	}\n	.passport-login-box-container .passport-login-item-row .passport-login-forget-password-link{\n		font-size: 12px;\n	    color: #3f89ec;\n	    position: absolute;\n	    bottom:0;\n	    right:0;\n	}\n\n</style>";return __p},__constructor:function(n){var o=this,t=function(n){if(1!=n.nodeType)return!1;var s=n.getAttribute("data-name");s&&(o.comps[s]=n);var i=n.getAttribute("data-events");if(i){var e=i.split(":"),a=e[0],r=e[1];n[a]=function(n){o[r]instanceof Function&&o[r](n)}}for(var p=0;p<n.childNodes.length;p++)t(n.childNodes[p])};this.core=n,this.els=html2node(this.template());var s=document.createElement("div");s.innerHTML=this.styleTemplate({backgroundImage:"http://s9.jsyxw.cn/res/static/common/widget/passport/img/icons.png"}),this.styleEl=s.lastChild,this.comps={},this.each(t),this.core.on("change:status",this._statusChangeHandler,this)},_statusChangeHandler:function(){var n=this.core.get("status");this.msg(n)},each:function(n){for(var o=0;o<this.els.length;o++){var t=this.els[o];t&&n(t)}},show:function(){if(!this.inserted){this.inserted=!0,this.each(function(n){document.body.appendChild(n)});var n=document.getElementsByTagName("head")[0];n.appendChild(this.styleEl);var o=window.addEventListener||window.attachEvent,t=this;o("resize",function(){t.center()})}this.each(function(n){n.style.display=""}),this.center()},hide:function(){this.each(function(n){n.style.display="none"})},msg:function(n){this.comps.msg.innerText=n},getValues:function(){var n=trim(this.comps.passport.value),o=trim(this.comps.password.value),t=this.comps.keepCookie.getAttribute("checked");return{passport:n,password:o,keepCookie:t,backUrl:window.location.href}},check:function(){var n=this.getValues();return n.passport?n.password?null:"请输入密码":"请输入账号"},center:function(){var n=this.comps.content,o=n.offsetWidth,t=n.offsetHeight,s=document.documentElement||document,i=s.offsetWidth,e=s.offsetHeight,a=Math.max(Math.ceil((i-o)/2),0),r=Math.max(Math.ceil((e-t)/2),0);n.style.left=a+"px",n.style.top=r+"px"},submit:function(){this.disable=!0;var n=this.check();if(n)return this.msg(n),!1;var o=this;this.core.login(this.getValues()).then(function(n){this.disable=!1,n?o.msg(n.msg):o.trigger("login:success")})}});return Popup});
;define("common:widget/passport/passport",["require","exports","module","common:widget/passport/events","common:widget/passport/passportstatus","common:widget/passport/extend","common:widget/passport/noop","common:widget/passport/core","common:widget/passport/popup"],function(t){var o=t("common:widget/passport/events"),s=t("common:widget/passport/passportstatus"),e=t("common:widget/passport/extend"),p=(t("common:widget/passport/noop"),t("common:widget/passport/core")),i=t("common:widget/passport/popup"),n={PassportStatus:s,init:function(t){this.trigger("before:init"),this.core=new p({passport:"",password:"",appKey:"",status:s.READY}),this.core.parseFromCookie(),this.core.set(t),this.core.on("change:status",this._statusChange,this),this.popup=new i(this.core),this.popup.on("login:success",this._popupLoginSuccess,this),this.trigger("after:init")},_statusChange:function(t){this.trigger("change:status",t)},_popupLoginSuccess:function(){this.trigger("popup.login:success")},getUserId:function(){return this.get("userid")},getPassport:function(){return this.get("pp")},getNickName:function(){return this.get("nickname")},getBackUrl:function(){return this.get("backUrl")},get:function(t){return this.core.get(t)},isLogin:function(){return!!this.getUserId()},login:function(t){var t=e({passport:"",password:"",appKey:"",keepCookie:0},t);return this.core.login(t)},logout:function(t){var t=e({},t);return this.core.logout(t)},showPopup:function(){this.popup.show(),this.trigger("popup:show")},hidePopup:function(){this.popup.hide(),this.trigger("popup:hide")}};return o.mixTo(n),n});
;define("common:widget/passport/template",function(){var n=function(n,e){return n.replace(/<%\s*(\w+)\s*%>/g,function(n,r){var t=e[r];return void 0===t&&(t=""),t})};return n});