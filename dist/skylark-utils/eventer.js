/**
 * skylark-utils - An Elegant HTML5 JavaScript Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5-beta
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./langx","./browser","./finder","./noder","./datax"],function(e,t,n,i,r,o){function s(e,n){return!n&&e.isDefaultPrevented||(n||(n=e),t.each(y,function(i,r){var o=n[i];e[i]=function(){return this[r]=t.returnTrue,o&&o.apply(n,arguments)},e[r]=t.returnFalse})),e}function a(e){var t=(""+e).split(".");return{type:t[0],ns:t.slice(1).sort().join(" ")}}function u(e){var t,n={originalEvent:e};for(t in e)"keyIdentifier"===t||w.test(t)||void 0===e[t]||(n[t]=e[t]);return s(n,e)}function c(e,n,i,r){var o=this;if(t.isPlainObject(n))return t.each(n,function(t,n){c(e,t,i,n)}),o;t.isString(i)||t.isFunction(r)||r===!1||(r=i,i=void 0),r===!1&&(r=t.returnFalse),"string"==typeof n&&(n=n.indexOf(",")>-1?n.split(","):n.split(/\s/));var s=F(e);return n&&n.forEach(function(e){s.unregister(e,r,{selector:i})}),this}function d(e,n,i,r,o,s){if(t.isPlainObject(n))return t.each(n,function(t,n){d(e,t,i,r,n,s)}),this;t.isString(i)||t.isFunction(o)||(o=r,r=i,i=void 0),t.isFunction(r)&&(o=r,r=void 0),o===!1&&(o=t.returnFalse),"string"==typeof n&&(n=n.indexOf(",")>-1?n.split(","):n.split(/\s/));var a=F(e);return n.forEach(function(e){return"ready"==e?p(o):void a.register(e,o,{data:r,selector:i,one:!!s})}),this}function l(e,t,n,i,r){return d(e,t,n,i,r,1),this}function f(e){return window.document.all&&(e.keyCode=0),e.preventDefault&&(e.preventDefault(),e.stopPropagation()),this}function v(e,t,n){var i;i=t instanceof Event?t:b(t,n),i._args=n;var r=e.dispatchEvent||e.trigger;return r?r.call(e,i):console.warn("The evented parameter is not a eventable object"),this}function p(e){return E.test(document.readyState)&&document.body?e():document.addEventListener("DOMContentLoaded",e,!1),this}function h(e){var t=o.data(e,"shortcuts");if(!t){t={},o.data(e,"shortcuts",t);var n=function(e,t){var n=t.metaKey||t.ctrlKey;if(e.ctrl==n&&e.alt==t.altKey&&e.shift==t.shiftKey&&(t.keyCode==e.keyCode||t.charCode&&t.charCode==e.charCode))return t.preventDefault(),"keydown"==t.type&&e.fn(t),!0};d(e,"keyup keypress keydown",function(e){if(!/INPUT|TEXTAREA/.test(e.target.nodeName))for(var i in t)n(t[i],e)})}return{add:function(e,n){var i;i=e.indexOf(",")>-1?e.toLowerCase().split(","):e.toLowerCase().split(" "),i.forEach(function(e){var i={fn:n,alt:!1,ctrl:!1,shift:!1};e.split("+").forEach(function(e){switch(e){case"alt":case"ctrl":case"shift":i[e]=!0;break;default:i.charCode=e.charCodeAt(0),i.keyCode=I[e]||e.toUpperCase().charCodeAt(0)}});var r=(i.ctrl?"ctrl":"")+","+(i.alt?"alt":"")+","+(i.shift?"shift":"")+","+i.keyCode;t[r]=i})}}}function g(){return g}var m=(t.mixin,t.each,Array.prototype.slice,t.uid),w=/^([A-Z]|returnValue$|layer[XY]$)/,y={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"},E=/complete|loaded|interactive/,b=function(){function e(e){var t=i[e];return t||(t=0),n[t]}var n=[window.CustomEvent,window.CompositionEvent,window.DragEvent,window.Event,window.FocusEvent,window.KeyboardEvent,window.MessageEvent,window.MouseEvent,window.MouseScrollEvent,window.MouseWheelEvent,window.MutationEvent,window.ProgressEvent,window.TextEvent,window.TouchEvent,window.UIEvent,window.WheelEvent],i={compositionstart:1,compositionend:1,compositionupdate:1,beforecopy:2,beforecut:2,beforepaste:2,copy:2,cut:2,paste:2,drag:2,dragend:2,dragenter:2,dragexit:2,dragleave:2,dragover:2,dragstart:2,drop:2,abort:3,change:3,error:3,selectionchange:3,submit:3,reset:3,focus:4,blur:4,focusin:4,focusout:4,keydown:5,keypress:5,keyup:5,message:6,click:7,contextmenu:7,dblclick:7,mousedown:7,mouseup:7,mousemove:7,mouseover:7,mouseout:7,mouseenter:7,mouseleave:7,textInput:12,touchstart:13,touchmove:13,touchend:13,load:14,resize:14,select:14,scroll:14,unload:14,wheel:15};return function(n,i){t.isString(n)?i=i||{}:(i=n,n=i.type);var r=a(n);n=r.type,i=t.mixin({bubbles:!0,cancelable:!0},i),r.ns&&(i.namespace=r.ns);var o=e(n),u=new o(n,i);return t.safeMixin(u,i),s(u)}}(),_={},k="onfocusin"in window,x={focus:"focusin",blur:"focusout"},C={mouseenter:"mouseover",mouseleave:"mouseout"},P=function(e){return C[e]||k&&x[e]||e},D={},T=t.klass({init:function(e,t){this._target=e,this._event=t,this._bindings=[]},add:function(e,n){var o=this._bindings,s={fn:e,options:t.mixin({},n)};o.push(s);var a=this;if(!a._listener){a._listener=function(e){var n=this,r=u(e),o=e._args,s=a._bindings,c=r.namespace;o=t.isDefined(o)?[r].concat(o):[r],t.each(s,function(e,s){var u=n;if(r.isImmediatePropagationStopped&&r.isImmediatePropagationStopped())return!1;var d=s.fn,l=s.options||{},f=l.selector,v=l.one,p=l.data;if(!c||c==l.ns){if(f){if(u=i.closest(r.target,f),!u||u===n)return;t.mixin(r,{currentTarget:u,liveFired:n})}t.isDefined(p)&&(r.data=p),v&&a.remove(d,l);var h=d.apply(u,o);h===!1&&(r.preventDefault(),r.stopPropagation())}})};var c=a._event;if(c in C){var d=a._listener;a._listener=function(e){var t=e.relatedTarget;if(!t||t!==this&&!r.contains(this,t))return d.apply(this,arguments)}}a._target.addEventListener?a._target.addEventListener(P(c),a._listener,!1):console.warn("invalid eventer object",a._target)}},remove:function(e,n){function i(e){return new RegExp("(?:^| )"+e.replace(" "," .* ?")+"(?: |$)")}n=t.mixin({},n);var r;n.ns&&(r=i(n.ns)),this._bindings=this._bindings.filter(function(t){var i=(!e||e===t.fn)&&(!r||r.test(t.options.ns))&&(!n.selector||n.selector==t.options.selector);return!i}),0==this._bindings.length&&(this._target.removeEventListener&&this._target.removeEventListener(P(this._event),this._listener,!1),this._listener=null)}}),S=t.klass({init:function(e){this._target=e,this._handler={}},register:function(e,n,i){var r=a(e),e=r.type,o=_[e],s=o&&(o.bindType||o.bindEventName),u=this._handler;void 0===u[e]&&(u[e]=new T(this._target,s||e)),u[e].add(n,t.mixin({ns:r.ns},i))},unregister:function(e,n,i){var r=this._handler,o=a(e);e=o.type;var s=r[e];s&&s.remove(n,t.mixin({ns:o.ns},i))}}),F=function(e){var t=m(e),n=D[t];return n||(n=D[t]=new S(e)),n},I={"delete":46};return t.mixin(g,{create:b,off:c,on:d,one:l,proxy:u,ready:p,shortcuts:h,special:_,stop:f,trigger:v}),e.eventer=g});
//# sourceMappingURL=sourcemaps/eventer.js.map
