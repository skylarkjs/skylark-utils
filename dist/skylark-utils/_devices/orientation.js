/**
 * skylark-utils - An Elegant HTML5 JavaScript Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["../langx"],function(n){function i(){return i}return window.DeviceOrientationEvent?window.addEventListener("deviceorientation",function(n){n.gamma,n.beta,n.alpha},!1):window.OrientationEvent&&window.addEventListener("MozOrientation",function(n){n.x,n.y,n.z},!1),n.mixin(i,{isSupported:function(){return!(!window.DeviceOrientationEvent&&!window.OrientationEvent)},on:function(n){navigator.vibrate(n)},off:function(){navigator.vibrate(0)}}),i});
//# sourceMappingURL=../sourcemaps/_devices/orientation.js.map
