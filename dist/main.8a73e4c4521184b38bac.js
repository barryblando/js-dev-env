webpackJsonp([0],[function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){(function(e){var n=r(9),a="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},o=a.Raven,i=new n;i.noConflict=function(){return a.Raven=o,i},i.afterLoad(),t.exports=i}).call(e,r(0))},function(t,e,r){(function(e){function r(t){return void 0===t}function n(t){return"[object String]"===Object.prototype.toString.call(t)}function a(){try{return new ErrorEvent(""),!0}catch(t){return!1}}function o(t,e){var n,a;if(r(t.length))for(n in t)i(t,n)&&e.call(null,n,t[n]);else if(a=t.length)for(n=0;n<a;n++)e.call(null,n,t[n])}function i(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function s(t){var e,r,a,o,i,s=[];if(!t||!t.tagName)return"";if(s.push(t.tagName.toLowerCase()),t.id&&s.push("#"+t.id),(e=t.className)&&n(e))for(r=e.split(/\s+/),i=0;i<r.length;i++)s.push("."+r[i]);var l=["type","name","title","alt"];for(i=0;i<l.length;i++)a=l[i],(o=t.getAttribute(a))&&s.push("["+a+'="'+o+'"]');return s.join("")}function l(t,e){return!!(!!t^!!e)}function c(t,e){if(l(t,e))return!1;var r=t.frames,n=e.frames;if(r.length!==n.length)return!1;for(var a,o,i=0;i<r.length;i++)if(a=r[i],o=n[i],a.filename!==o.filename||a.lineno!==o.lineno||a.colno!==o.colno||a.function!==o.function)return!1;return!0}var u="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};t.exports={isObject:function(t){return"object"==typeof t&&null!==t},isError:function(t){switch({}.toString.call(t)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return t instanceof Error}},isErrorEvent:function(t){return a()&&"[object ErrorEvent]"==={}.toString.call(t)},isUndefined:r,isFunction:function(t){return"function"==typeof t},isString:n,isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},isEmptyObject:function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0},supportsErrorEvent:a,supportsFetch:function(){if(!("fetch"in u))return!1;try{return new Headers,new Request(""),new Response,!0}catch(t){return!1}},wrappedCallback:function(t){return function(e,r){var n=t(e)||e;return r?r(n)||n:n}},each:o,objectMerge:function(t,e){return e?(o(e,function(e,r){t[e]=r}),t):t},truncate:function(t,e){return!e||t.length<=e?t:t.substr(0,e)+"…"},objectFrozen:function(t){return!!Object.isFrozen&&Object.isFrozen(t)},hasKey:i,joinRegExp:function(t){for(var e,r=[],a=0,o=t.length;a<o;a++)n(e=t[a])?r.push(e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")):e&&e.source&&r.push(e.source);return new RegExp(r.join("|"),"i")},urlencode:function(t){var e=[];return o(t,function(t,r){e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}),e.join("&")},uuid4:function(){var t=u.crypto||u.msCrypto;if(!r(t)&&t.getRandomValues){var e=new Uint16Array(8);t.getRandomValues(e),e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;var n=function(t){for(var e=t.toString(16);e.length<4;)e="0"+e;return e};return n(e[0])+n(e[1])+n(e[2])+n(e[3])+n(e[4])+n(e[5])+n(e[6])+n(e[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)})},htmlTreeAsString:function(t){for(var e,r=[],n=0,a=0,o=" > ".length;t&&n++<5&&!("html"===(e=s(t))||n>1&&a+r.length*o+e.length>=80);)r.push(e),a+=e.length,t=t.parentNode;return r.reverse().join(" > ")},htmlElementAsString:s,isSameException:function(t,e){return!l(t,e)&&(t=t.values[0],e=e.values[0],t.type===e.type&&t.value===e.value&&!function(t,e){return r(t)&&r(e)}(t.stacktrace,e.stacktrace)&&c(t.stacktrace,e.stacktrace))},isSameStacktrace:c,parseUrl:function(t){var e=t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!e)return{};var r=e[6]||"",n=e[8]||"";return{protocol:e[2],host:e[4],path:e[5],relative:e[5]+r+n}},fill:function(t,e,r,n){var a=t[e];t[e]=r(a),t[e].__raven__=!0,t[e].__orig__=a,n&&n.push([t,e,a])}}}).call(e,r(0))},,,function(t,e,r){"use strict";(function(t){r(6);var e=r(7),n=function(t){return t&&t.__esModule?t:{default:t}}(r(1)),a=r(14);n.default.config(a.sentry_url).install(),(0,e.getUsers)().then(function(r){var n="";r.forEach(function(t){n+='<tr>\n    <td><a href="#" data-id="'+t.id+'" class="deleteUser">Delete</a></td>\n    <td>'+t.id+"</td>\n    <td>"+t.firstName+"</td>\n    <td>"+t.lastName+"</td>\n    <td>"+t.email+"</td>\n    </tr>"}),t.document.getElementById("users").innerHTML=n;var a=t.document.getElementsByClassName("deleteUser");Array.from(a,function(t){t.onclick=function(t){var r=t.target;t.preventDefault(),(0,e.deleteUser)(r.attributes["data-id"].value);var n=r.parentNode.parentNode;n.parentNode.removeChild(n)}})})}).call(e,r(0))},function(t,e){},function(t,e,r){"use strict";function n(t){return t.json()}function a(t){console.log(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.getUsers=function(){return function(t){return fetch(o+t).then(n,a)}("users")},e.deleteUser=function(t){return function(t){var e=new Request(o+t,{method:"DELETE"});return fetch(e).then(n,a)}("users/"+t)};var o=(0,function(t){return t&&t.__esModule?t:{default:t}}(r(8)).default)()},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function(t,e){e||(e=window.location.href),t=t.replace(/[[\]]/g,"\\$&");var r=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return r?r[2]?decodeURIComponent(r[2].replace(/\+/g," ")):"":null}("useMockApi")?"http://localhost:3001/":"/"}},function(t,e,r){(function(e){function n(){return+new Date}function a(t,e){return d(e)?function(r){return e(r,t)}:e}function o(){this._hasJSON=!("object"!=typeof JSON||!JSON.stringify),this._hasDocument=!p(B),this._hasNavigator=!p(M),this._lastCapturedException=null,this._lastData=null,this._lastEventId=null,this._globalServer=null,this._globalKey=null,this._globalProject=null,this._globalContext={},this._globalOptions={logger:"javascript",ignoreErrors:[],ignoreUrls:[],whitelistUrls:[],includePaths:[],headers:null,collectWindowErrors:!0,maxMessageLength:0,maxUrlLength:250,stackTraceLimit:50,autoBreadcrumbs:!0,instrument:!0,sampleRate:1},this._ignoreOnError=0,this._isRavenInstalled=!1,this._originalErrorStackTraceLimit=Error.stackTraceLimit,this._originalConsole=N.console||{},this._originalConsoleMethods={},this._plugins=[],this._startTime=n(),this._wrappedBuiltIns=[],this._breadcrumbs=[],this._lastCapturedEvent=null,this._keypressTimeout,this._location=N.location,this._lastHref=this._location&&this._location.href,this._resetBackoff();for(var t in this._originalConsole)this._originalConsoleMethods[t]=this._originalConsole[t]}var i=r(10),s=r(11),l=r(12),c=r(2),u=c.isError,h=c.isObject,f=c.isErrorEvent,p=c.isUndefined,d=c.isFunction,g=c.isString,_=c.isArray,v=c.isEmptyObject,m=c.each,b=c.objectMerge,y=c.truncate,E=c.objectFrozen,x=c.hasKey,k=c.joinRegExp,w=c.urlencode,S=c.uuid4,O=c.htmlTreeAsString,C=c.isSameException,R=c.isSameStacktrace,T=c.parseUrl,j=c.fill,U=c.supportsFetch,D=r(13).wrapMethod,F="source protocol user pass host port path".split(" "),I=/^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/,N="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},B=N.document,M=N.navigator;(o.prototype={VERSION:"3.21.0",debug:!1,TraceKit:i,config:function(t,e){var r=this;if(r._globalServer)return this._logDebug("error","Error: Raven has already been configured"),r;if(!t)return r;var n=r._globalOptions;e&&m(e,function(t,e){"tags"===t||"extra"===t||"user"===t?r._globalContext[t]=e:n[t]=e}),r.setDSN(t),n.ignoreErrors.push(/^Script error\.?$/),n.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/),n.ignoreErrors=k(n.ignoreErrors),n.ignoreUrls=!!n.ignoreUrls.length&&k(n.ignoreUrls),n.whitelistUrls=!!n.whitelistUrls.length&&k(n.whitelistUrls),n.includePaths=k(n.includePaths),n.maxBreadcrumbs=Math.max(0,Math.min(n.maxBreadcrumbs||100,100));var a={xhr:!0,console:!0,dom:!0,location:!0,sentry:!0},o=n.autoBreadcrumbs;"[object Object]"==={}.toString.call(o)?o=b(a,o):!1!==o&&(o=a),n.autoBreadcrumbs=o;var s={tryCatch:!0},l=n.instrument;return"[object Object]"==={}.toString.call(l)?l=b(s,l):!1!==l&&(l=s),n.instrument=l,i.collectWindowErrors=!!n.collectWindowErrors,r},install:function(){var t=this;return t.isSetup()&&!t._isRavenInstalled&&(i.report.subscribe(function(){t._handleOnErrorStackInfo.apply(t,arguments)}),t._patchFunctionToString(),t._globalOptions.instrument&&t._globalOptions.instrument.tryCatch&&t._instrumentTryCatch(),t._globalOptions.autoBreadcrumbs&&t._instrumentBreadcrumbs(),t._drainPlugins(),t._isRavenInstalled=!0),Error.stackTraceLimit=t._globalOptions.stackTraceLimit,this},setDSN:function(t){var e=this._parseDSN(t),r=e.path.lastIndexOf("/"),n=e.path.substr(1,r);this._dsn=t,this._globalKey=e.user,this._globalSecret=e.pass&&e.pass.substr(1),this._globalProject=e.path.substr(r+1),this._globalServer=this._getGlobalServer(e),this._globalEndpoint=this._globalServer+"/"+n+"api/"+this._globalProject+"/store/",this._resetBackoff()},context:function(t,e,r){return d(t)&&(r=e||[],e=t,t=void 0),this.wrap(t,e).apply(this,r)},wrap:function(t,e,r){function n(){var n=[],o=arguments.length,i=!t||t&&!1!==t.deep;for(r&&d(r)&&r.apply(this,arguments);o--;)n[o]=i?a.wrap(t,arguments[o]):arguments[o];try{return e.apply(this,n)}catch(e){throw a._ignoreNextOnError(),a.captureException(e,t),e}}var a=this;if(p(e)&&!d(t))return t;if(d(t)&&(e=t,t=void 0),!d(e))return e;try{if(e.__raven__)return e;if(e.__raven_wrapper__)return e.__raven_wrapper__}catch(t){return e}for(var o in e)x(e,o)&&(n[o]=e[o]);return n.prototype=e.prototype,e.__raven_wrapper__=n,n.__raven__=!0,n.__orig__=e,n},uninstall:function(){return i.report.uninstall(),this._unpatchFunctionToString(),this._restoreBuiltIns(),Error.stackTraceLimit=this._originalErrorStackTraceLimit,this._isRavenInstalled=!1,this},captureException:function(t,e){var r=!u(t),n=!f(t),a=f(t)&&!t.error;if(r&&n||a)return this.captureMessage(t,b({trimHeadFrames:1,stacktrace:!0},e));f(t)&&(t=t.error),this._lastCapturedException=t;try{var o=i.computeStackTrace(t);this._handleStackInfo(o,e)}catch(e){if(t!==e)throw e}return this},captureMessage:function(t,e){if(!this._globalOptions.ignoreErrors.test||!this._globalOptions.ignoreErrors.test(t)){var r,n=b({message:t+""},e=e||{});try{throw new Error(t)}catch(t){r=t}r.name=null;var a=i.computeStackTrace(r),o=_(a.stack)&&a.stack[1],s=o&&o.url||"";if((!this._globalOptions.ignoreUrls.test||!this._globalOptions.ignoreUrls.test(s))&&(!this._globalOptions.whitelistUrls.test||this._globalOptions.whitelistUrls.test(s))){if(this._globalOptions.stacktrace||e&&e.stacktrace){e=b({fingerprint:t,trimHeadFrames:(e.trimHeadFrames||0)+1},e);var l=this._prepareFrames(a,e);n.stacktrace={frames:l.reverse()}}return this._send(n),this}}},captureBreadcrumb:function(t){var e=b({timestamp:n()/1e3},t);if(d(this._globalOptions.breadcrumbCallback)){var r=this._globalOptions.breadcrumbCallback(e);if(h(r)&&!v(r))e=r;else if(!1===r)return this}return this._breadcrumbs.push(e),this._breadcrumbs.length>this._globalOptions.maxBreadcrumbs&&this._breadcrumbs.shift(),this},addPlugin:function(t){var e=[].slice.call(arguments,1);return this._plugins.push([t,e]),this._isRavenInstalled&&this._drainPlugins(),this},setUserContext:function(t){return this._globalContext.user=t,this},setExtraContext:function(t){return this._mergeContext("extra",t),this},setTagsContext:function(t){return this._mergeContext("tags",t),this},clearContext:function(){return this._globalContext={},this},getContext:function(){return JSON.parse(s(this._globalContext))},setEnvironment:function(t){return this._globalOptions.environment=t,this},setRelease:function(t){return this._globalOptions.release=t,this},setDataCallback:function(t){var e=this._globalOptions.dataCallback;return this._globalOptions.dataCallback=a(e,t),this},setBreadcrumbCallback:function(t){var e=this._globalOptions.breadcrumbCallback;return this._globalOptions.breadcrumbCallback=a(e,t),this},setShouldSendCallback:function(t){var e=this._globalOptions.shouldSendCallback;return this._globalOptions.shouldSendCallback=a(e,t),this},setTransport:function(t){return this._globalOptions.transport=t,this},lastException:function(){return this._lastCapturedException},lastEventId:function(){return this._lastEventId},isSetup:function(){return!!this._hasJSON&&(!!this._globalServer||(this.ravenNotConfiguredError||(this.ravenNotConfiguredError=!0,this._logDebug("error","Error: Raven has not been configured.")),!1))},afterLoad:function(){var t=N.RavenConfig;t&&this.config(t.dsn,t.config).install()},showReportDialog:function(t){if(B){var e=(t=t||{}).eventId||this.lastEventId();if(!e)throw new l("Missing eventId");var r=t.dsn||this._dsn;if(!r)throw new l("Missing DSN");var n=encodeURIComponent,a="";a+="?eventId="+n(e),a+="&dsn="+n(r);var o=t.user||this._globalContext.user;o&&(o.name&&(a+="&name="+n(o.name)),o.email&&(a+="&email="+n(o.email)));var i=this._getGlobalServer(this._parseDSN(r)),s=B.createElement("script");s.async=!0,s.src=i+"/api/embed/error-page/"+a,(B.head||B.body).appendChild(s)}},_ignoreNextOnError:function(){var t=this;this._ignoreOnError+=1,setTimeout(function(){t._ignoreOnError-=1})},_triggerEvent:function(t,e){var r,n;if(this._hasDocument){e=e||{},t="raven"+t.substr(0,1).toUpperCase()+t.substr(1),B.createEvent?(r=B.createEvent("HTMLEvents")).initEvent(t,!0,!0):(r=B.createEventObject()).eventType=t;for(n in e)x(e,n)&&(r[n]=e[n]);if(B.createEvent)B.dispatchEvent(r);else try{B.fireEvent("on"+r.eventType.toLowerCase(),r)}catch(t){}}},_breadcrumbEventHandler:function(t){var e=this;return function(r){if(e._keypressTimeout=null,e._lastCapturedEvent!==r){e._lastCapturedEvent=r;var n;try{n=O(r.target)}catch(t){n="<unknown>"}e.captureBreadcrumb({category:"ui."+t,message:n})}}},_keypressEventHandler:function(){var t=this;return function(e){var r;try{r=e.target}catch(t){return}var n=r&&r.tagName;if(n&&("INPUT"===n||"TEXTAREA"===n||r.isContentEditable)){var a=t._keypressTimeout;a||t._breadcrumbEventHandler("input")(e),clearTimeout(a),t._keypressTimeout=setTimeout(function(){t._keypressTimeout=null},1e3)}}},_captureUrlChange:function(t,e){var r=T(this._location.href),n=T(e),a=T(t);this._lastHref=e,r.protocol===n.protocol&&r.host===n.host&&(e=n.relative),r.protocol===a.protocol&&r.host===a.host&&(t=a.relative),this.captureBreadcrumb({category:"navigation",data:{to:e,from:t}})},_patchFunctionToString:function(){var t=this;t._originalFunctionToString=Function.prototype.toString,Function.prototype.toString=function(){return"function"==typeof this&&this.__raven__?t._originalFunctionToString.apply(this.__orig__,arguments):t._originalFunctionToString.apply(this,arguments)}},_unpatchFunctionToString:function(){this._originalFunctionToString&&(Function.prototype.toString=this._originalFunctionToString)},_instrumentTryCatch:function(){function t(t){return function(e,n){for(var a=new Array(arguments.length),o=0;o<a.length;++o)a[o]=arguments[o];var i=a[0];return d(i)&&(a[0]=r.wrap(i)),t.apply?t.apply(this,a):t(a[0],a[1])}}function e(t){var e=N[t]&&N[t].prototype;e&&e.hasOwnProperty&&e.hasOwnProperty("addEventListener")&&(j(e,"addEventListener",function(e){return function(n,o,i,s){try{o&&o.handleEvent&&(o.handleEvent=r.wrap(o.handleEvent))}catch(t){}var l,c,u;return a&&a.dom&&("EventTarget"===t||"Node"===t)&&(c=r._breadcrumbEventHandler("click"),u=r._keypressEventHandler(),l=function(t){if(t){var e;try{e=t.type}catch(t){return}return"click"===e?c(t):"keypress"===e?u(t):void 0}}),e.call(this,n,r.wrap(o,void 0,l),i,s)}},n),j(e,"removeEventListener",function(t){return function(e,r,n,a){try{r=r&&(r.__raven_wrapper__?r.__raven_wrapper__:r)}catch(t){}return t.call(this,e,r,n,a)}},n))}var r=this,n=r._wrappedBuiltIns,a=this._globalOptions.autoBreadcrumbs;j(N,"setTimeout",t,n),j(N,"setInterval",t,n),N.requestAnimationFrame&&j(N,"requestAnimationFrame",function(t){return function(e){return t(r.wrap(e))}},n);for(var o=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],i=0;i<o.length;i++)e(o[i])},_instrumentBreadcrumbs:function(){function t(t,r){t in r&&d(r[t])&&j(r,t,function(t){return e.wrap(t)})}var e=this,r=this._globalOptions.autoBreadcrumbs,n=e._wrappedBuiltIns;if(r.xhr&&"XMLHttpRequest"in N){var a=XMLHttpRequest.prototype;j(a,"open",function(t){return function(r,n){return g(n)&&-1===n.indexOf(e._globalKey)&&(this.__raven_xhr={method:r,url:n,status_code:null}),t.apply(this,arguments)}},n),j(a,"send",function(r){return function(){function n(){if(a.__raven_xhr&&4===a.readyState){try{a.__raven_xhr.status_code=a.status}catch(t){}e.captureBreadcrumb({type:"http",category:"xhr",data:a.__raven_xhr})}}for(var a=this,o=["onload","onerror","onprogress"],i=0;i<o.length;i++)t(o[i],a);return"onreadystatechange"in a&&d(a.onreadystatechange)?j(a,"onreadystatechange",function(t){return e.wrap(t,void 0,n)}):a.onreadystatechange=n,r.apply(this,arguments)}},n)}r.xhr&&U()&&j(N,"fetch",function(t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;++n)r[n]=arguments[n];var a,o=r[0],i="GET";if("string"==typeof o?a=o:"Request"in N&&o instanceof N.Request?(a=o.url,o.method&&(i=o.method)):a=""+o,-1!==a.indexOf(e._globalKey))return t.apply(this,r);r[1]&&r[1].method&&(i=r[1].method);var s={method:i,url:a,status_code:null};return e.captureBreadcrumb({type:"http",category:"fetch",data:s}),t.apply(this,r).then(function(t){return s.status_code=t.status,t})}},n),r.dom&&this._hasDocument&&(B.addEventListener?(B.addEventListener("click",e._breadcrumbEventHandler("click"),!1),B.addEventListener("keypress",e._keypressEventHandler(),!1)):(B.attachEvent("onclick",e._breadcrumbEventHandler("click")),B.attachEvent("onkeypress",e._keypressEventHandler())));var o=N.chrome,i=!(o&&o.app&&o.app.runtime)&&N.history&&history.pushState&&history.replaceState;if(r.location&&i){var s=N.onpopstate;N.onpopstate=function(){var t=e._location.href;if(e._captureUrlChange(e._lastHref,t),s)return s.apply(this,arguments)};var l=function(t){return function(){var r=arguments.length>2?arguments[2]:void 0;return r&&e._captureUrlChange(e._lastHref,r+""),t.apply(this,arguments)}};j(history,"pushState",l,n),j(history,"replaceState",l,n)}if(r.console&&"console"in N&&console.log){var c=function(t,r){e.captureBreadcrumb({message:t,level:r.level,category:"console"})};m(["debug","info","warn","error","log"],function(t,e){D(console,e,c)})}},_restoreBuiltIns:function(){for(var t;this._wrappedBuiltIns.length;){var e=(t=this._wrappedBuiltIns.shift())[0],r=t[1],n=t[2];e[r]=n}},_drainPlugins:function(){var t=this;m(this._plugins,function(e,r){var n=r[0],a=r[1];n.apply(t,[t].concat(a))})},_parseDSN:function(t){var e=I.exec(t),r={},n=7;try{for(;n--;)r[F[n]]=e[n]||""}catch(e){throw new l("Invalid DSN: "+t)}if(r.pass&&!this._globalOptions.allowSecretKey)throw new l("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");return r},_getGlobalServer:function(t){var e="//"+t.host+(t.port?":"+t.port:"");return t.protocol&&(e=t.protocol+":"+e),e},_handleOnErrorStackInfo:function(){this._ignoreOnError||this._handleStackInfo.apply(this,arguments)},_handleStackInfo:function(t,e){var r=this._prepareFrames(t,e);this._triggerEvent("handle",{stackInfo:t,options:e}),this._processException(t.name,t.message,t.url,t.lineno,r,e)},_prepareFrames:function(t,e){var r=this,n=[];if(t.stack&&t.stack.length&&(m(t.stack,function(e,a){var o=r._normalizeFrame(a,t.url);o&&n.push(o)}),e&&e.trimHeadFrames))for(var a=0;a<e.trimHeadFrames&&a<n.length;a++)n[a].in_app=!1;return n=n.slice(0,this._globalOptions.stackTraceLimit)},_normalizeFrame:function(t,e){var r={filename:t.url,lineno:t.line,colno:t.column,function:t.func||"?"};return t.url||(r.filename=e),r.in_app=!(this._globalOptions.includePaths.test&&!this._globalOptions.includePaths.test(r.filename)||/(Raven|TraceKit)\./.test(r.function)||/raven\.(min\.)?js$/.test(r.filename)),r},_processException:function(t,e,r,n,a,o){var i=(t?t+": ":"")+(e||"");if(!this._globalOptions.ignoreErrors.test||!this._globalOptions.ignoreErrors.test(e)&&!this._globalOptions.ignoreErrors.test(i)){var s;if(a&&a.length?(r=a[0].filename||r,a.reverse(),s={frames:a}):r&&(s={frames:[{filename:r,lineno:n,in_app:!0}]}),(!this._globalOptions.ignoreUrls.test||!this._globalOptions.ignoreUrls.test(r))&&(!this._globalOptions.whitelistUrls.test||this._globalOptions.whitelistUrls.test(r))){var l=b({exception:{values:[{type:t,value:e,stacktrace:s}]},culprit:r},o);this._send(l)}}},_trimPacket:function(t){var e=this._globalOptions.maxMessageLength;if(t.message&&(t.message=y(t.message,e)),t.exception){var r=t.exception.values[0];r.value=y(r.value,e)}var n=t.request;return n&&(n.url&&(n.url=y(n.url,this._globalOptions.maxUrlLength)),n.Referer&&(n.Referer=y(n.Referer,this._globalOptions.maxUrlLength))),t.breadcrumbs&&t.breadcrumbs.values&&this._trimBreadcrumbs(t.breadcrumbs),t},_trimBreadcrumbs:function(t){for(var e,r,n,a=["to","from","url"],o=0;o<t.values.length;++o)if((r=t.values[o]).hasOwnProperty("data")&&h(r.data)&&!E(r.data)){n=b({},r.data);for(var i=0;i<a.length;++i)e=a[i],n.hasOwnProperty(e)&&n[e]&&(n[e]=y(n[e],this._globalOptions.maxUrlLength));t.values[o].data=n}},_getHttpData:function(){if(this._hasNavigator||this._hasDocument){var t={};return this._hasNavigator&&M.userAgent&&(t.headers={"User-Agent":navigator.userAgent}),this._hasDocument&&(B.location&&B.location.href&&(t.url=B.location.href),B.referrer&&(t.headers||(t.headers={}),t.headers.Referer=B.referrer)),t}},_resetBackoff:function(){this._backoffDuration=0,this._backoffStart=null},_shouldBackoff:function(){return this._backoffDuration&&n()-this._backoffStart<this._backoffDuration},_isRepeatData:function(t){var e=this._lastData;return!(!e||t.message!==e.message||t.culprit!==e.culprit)&&(t.stacktrace||e.stacktrace?R(t.stacktrace,e.stacktrace):!t.exception&&!e.exception||C(t.exception,e.exception))},_setBackoffState:function(t){if(!this._shouldBackoff()){var e=t.status;if(400===e||401===e||429===e){var r;try{r=U()?t.headers.get("Retry-After"):t.getResponseHeader("Retry-After"),r=1e3*parseInt(r,10)}catch(t){}this._backoffDuration=r||(2*this._backoffDuration||1e3),this._backoffStart=n()}}},_send:function(t){var e=this._globalOptions,r={project:this._globalProject,logger:e.logger,platform:"javascript"},a=this._getHttpData();a&&(r.request=a),t.trimHeadFrames&&delete t.trimHeadFrames,(t=b(r,t)).tags=b(b({},this._globalContext.tags),t.tags),t.extra=b(b({},this._globalContext.extra),t.extra),t.extra["session:duration"]=n()-this._startTime,this._breadcrumbs&&this._breadcrumbs.length>0&&(t.breadcrumbs={values:[].slice.call(this._breadcrumbs,0)}),v(t.tags)&&delete t.tags,this._globalContext.user&&(t.user=this._globalContext.user),e.environment&&(t.environment=e.environment),e.release&&(t.release=e.release),e.serverName&&(t.server_name=e.serverName),d(e.dataCallback)&&(t=e.dataCallback(t)||t),t&&!v(t)&&(d(e.shouldSendCallback)&&!e.shouldSendCallback(t)||(this._shouldBackoff()?this._logDebug("warn","Raven dropped error due to backoff: ",t):"number"==typeof e.sampleRate?Math.random()<e.sampleRate&&this._sendProcessedPayload(t):this._sendProcessedPayload(t)))},_getUuid:function(){return S()},_sendProcessedPayload:function(t,e){var r=this,n=this._globalOptions;if(this.isSetup())if(t=this._trimPacket(t),this._globalOptions.allowDuplicates||!this._isRepeatData(t)){this._lastEventId=t.event_id||(t.event_id=this._getUuid()),this._lastData=t,this._logDebug("debug","Raven about to send:",t);var a={sentry_version:"7",sentry_client:"raven-js/"+this.VERSION,sentry_key:this._globalKey};this._globalSecret&&(a.sentry_secret=this._globalSecret);var o=t.exception&&t.exception.values[0];this._globalOptions.autoBreadcrumbs&&this._globalOptions.autoBreadcrumbs.sentry&&this.captureBreadcrumb({category:"sentry",message:o?(o.type?o.type+": ":"")+o.value:t.message,event_id:t.event_id,level:t.level||"error"});var i=this._globalEndpoint;(n.transport||this._makeRequest).call(this,{url:i,auth:a,data:t,options:n,onSuccess:function(){r._resetBackoff(),r._triggerEvent("success",{data:t,src:i}),e&&e()},onError:function(n){r._logDebug("error","Raven transport failed to send: ",n),n.request&&r._setBackoffState(n.request),r._triggerEvent("failure",{data:t,src:i}),n=n||new Error("Raven send failed (no additional details provided)"),e&&e(n)}})}else this._logDebug("warn","Raven dropped repeat event: ",t)},_makeRequest:function(t){var e=t.url+"?"+w(t.auth),r=null;if(t.options.headers&&(r=this._evaluateHeaders(t.options.headers)),U()){var n={method:"POST",body:s(t.data)};return r&&(n.headers=r),N.fetch(e,n).then(function(e){if(e.ok)t.onSuccess&&t.onSuccess();else{var r=new Error("Sentry error code: "+e.status);r.request=e,t.onError&&t.onError(r)}}).catch(function(){t.onError&&t.onError(new Error("Sentry error code: network unavailable"))})}var a=N.XMLHttpRequest&&new N.XMLHttpRequest;if(a){("withCredentials"in a||"undefined"!=typeof XDomainRequest)&&("withCredentials"in a?a.onreadystatechange=function(){if(4===a.readyState)if(200===a.status)t.onSuccess&&t.onSuccess();else if(t.onError){var e=new Error("Sentry error code: "+a.status);e.request=a,t.onError(e)}}:(a=new XDomainRequest,e=e.replace(/^https?:/,""),t.onSuccess&&(a.onload=t.onSuccess),t.onError&&(a.onerror=function(){var e=new Error("Sentry error code: XDomainRequest");e.request=a,t.onError(e)})),a.open("POST",e),r&&m(r,function(t,e){a.setRequestHeader(t,e)}),a.send(s(t.data)))}},_evaluateHeaders:function(t){var e={};for(var r in t)if(t.hasOwnProperty(r)){var n=t[r];e[r]="function"==typeof n?n():n}return e},_logDebug:function(t){this._originalConsoleMethods[t]&&this.debug&&Function.prototype.apply.call(this._originalConsoleMethods[t],this._originalConsole,[].slice.call(arguments,1))},_mergeContext:function(t,e){p(e)?delete this._globalContext[t]:this._globalContext[t]=b(this._globalContext[t]||{},e)}}).setUser=o.prototype.setUserContext,o.prototype.setReleaseContext=o.prototype.setRelease,t.exports=o}).call(e,r(0))},function(t,e,r){(function(e){function n(){return"undefined"==typeof document||null==document.location?"":document.location.href}var a=r(2),o={collectWindowErrors:!0,debug:!1},i="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},s=[].slice,l="?",c=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;o.report=function(){function t(t,e){var r=null;if(!e||o.collectWindowErrors){for(var n in p)if(p.hasOwnProperty(n))try{p[n].apply(null,[t].concat(s.call(arguments,2)))}catch(t){r=t}if(r)throw r}}function e(e,i,s,u,f){var p=a.isErrorEvent(f)?f.error:f,d=a.isErrorEvent(e)?e.message:e;if(_)o.computeStackTrace.augmentStackTraceWithInitialElement(_,i,s,d),r();else if(p&&a.isError(p))t(o.computeStackTrace(p),!0);else{var g={url:i,line:s,column:u},v=void 0;if("[object String]"==={}.toString.call(d)){var m;(m=d.match(c))&&(v=m[1],d=m[2])}g.func=l,t({name:v,message:d,url:n(),stack:[g]},!0)}return!!h&&h.apply(this,arguments)}function r(){var e=_,r=d;d=null,_=null,g=null,t.apply(null,[e,!1].concat(r))}function u(t,e){var n=s.call(arguments,1);if(_){if(g===t)return;r()}var a=o.computeStackTrace(t);if(_=a,g=t,d=n,setTimeout(function(){g===t&&r()},a.incomplete?2e3:0),!1!==e)throw t}var h,f,p=[],d=null,g=null,_=null;return u.subscribe=function(t){f||(h=i.onerror,i.onerror=e,f=!0),p.push(t)},u.unsubscribe=function(t){for(var e=p.length-1;e>=0;--e)p[e]===t&&p.splice(e,1)},u.uninstall=function(){f&&(i.onerror=h,f=!1,h=void 0),p=[]},u}(),o.computeStackTrace=function(){function t(t){if(void 0!==t.stack&&t.stack){for(var e,r,a,o=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,i=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,s=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,c=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,u=/\((\S*)(?::(\d+))(?::(\d+))\)/,h=t.stack.split("\n"),f=[],p=(/^(.*) is undefined$/.exec(t.message),0),d=h.length;p<d;++p){if(r=o.exec(h[p])){var g=r[2]&&0===r[2].indexOf("native");r[2]&&0===r[2].indexOf("eval")&&(e=u.exec(r[2]))&&(r[2]=e[1],r[3]=e[2],r[4]=e[3]),a={url:g?null:r[2],func:r[1]||l,args:g?[r[2]]:[],line:r[3]?+r[3]:null,column:r[4]?+r[4]:null}}else if(r=s.exec(h[p]))a={url:r[2],func:r[1]||l,args:[],line:+r[3],column:r[4]?+r[4]:null};else{if(!(r=i.exec(h[p])))continue;r[3]&&r[3].indexOf(" > eval")>-1&&(e=c.exec(r[3]))?(r[3]=e[1],r[4]=e[2],r[5]=null):0!==p||r[5]||void 0===t.columnNumber||(f[0].column=t.columnNumber+1),a={url:r[3],func:r[1]||l,args:r[2]?r[2].split(","):[],line:r[4]?+r[4]:null,column:r[5]?+r[5]:null}}!a.func&&a.line&&(a.func=l),f.push(a)}return f.length?{name:t.name,message:t.message,url:n(),stack:f}:null}}function e(t,e,r,n){var a={url:e,line:r};if(a.url&&a.line){if(t.incomplete=!1,a.func||(a.func=l),t.stack.length>0&&t.stack[0].url===a.url){if(t.stack[0].line===a.line)return!1;if(!t.stack[0].line&&t.stack[0].func===a.func)return t.stack[0].line=a.line,!1}return t.stack.unshift(a),t.partial=!0,!0}return t.incomplete=!0,!1}function r(t,i){for(var s,c,u=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,h=[],f={},p=!1,d=r.caller;d&&!p;d=d.caller)if(d!==a&&d!==o.report){if(c={url:null,func:l,line:null,column:null},d.name?c.func=d.name:(s=u.exec(d.toString()))&&(c.func=s[1]),void 0===c.func)try{c.func=s.input.substring(0,s.input.indexOf("{"))}catch(t){}f[""+d]?p=!0:f[""+d]=!0,h.push(c)}i&&h.splice(0,i);var g={name:t.name,message:t.message,url:n(),stack:h};return e(g,t.sourceURL||t.fileName,t.line||t.lineNumber,t.message||t.description),g}function a(e,a){var i=null;a=null==a?0:+a;try{if(i=t(e))return i}catch(t){if(o.debug)throw t}try{if(i=r(e,a+1))return i}catch(t){if(o.debug)throw t}return{name:e.name,message:e.message,url:n()}}return a.augmentStackTraceWithInitialElement=e,a.computeStackTraceFromStackProp=t,a}(),t.exports=o}).call(e,r(0))},function(t,e){function r(t,e){for(var r=0;r<t.length;++r)if(t[r]===e)return r;return-1}function n(t,e){var n=[],a=[];return null==e&&(e=function(t,e){return n[0]===e?"[Circular ~]":"[Circular ~."+a.slice(0,r(n,e)).join(".")+"]"}),function(o,i){if(n.length>0){var s=r(n,this);~s?n.splice(s+1):n.push(this),~s?a.splice(s,1/0,o):a.push(o),~r(n,i)&&(i=e.call(this,o,i))}else n.push(i);return null==t?i instanceof Error?function(t){var e={stack:t.stack,message:t.message,name:t.name};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}(i):i:t.call(this,o,i)}}(t.exports=function(t,e,r,a){return JSON.stringify(t,n(e,a),r)}).getSerialize=n},function(t,e){function r(t){this.name="RavenConfigError",this.message=t}(r.prototype=new Error).constructor=r,t.exports=r},function(t,e){t.exports={wrapMethod:function(t,e,r){var n=t[e],a=t;if(e in t){var o="warn"===e?"warning":e;t[e]=function(){var t=[].slice.call(arguments),i=""+t.join(" "),s={level:o,logger:"console",extra:{arguments:t}};"assert"===e?!1===t[0]&&(i="Assertion failed: "+(t.slice(1).join(" ")||"console.assert"),s.extra.arguments=t.slice(1),r&&r(i,s)):r&&r(i,s),n&&Function.prototype.apply.call(n,a,t)}}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sentry_url=void 0,e.logException=function(t,e){n.default.captureException(t,{extra:e}),window&&window.console&&console.error&&console.error(t)};var n=function(t){return t&&t.__esModule?t:{default:t}}(r(1));e.sentry_url="https://29fdcccc13fc41a8a78b53ac8f4e4c8b@sentry.io/267363"}],[5]);
//# sourceMappingURL=main.8a73e4c4521184b38bac.js.map