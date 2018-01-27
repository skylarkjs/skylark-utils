/**
 * skylark-utils - An Elegant HTML5 JavaScript Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5-beta
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./langx","./browser","./geom","./styler","./eventer"],function(i,n,t,o,s,e){function a(i,t,o,a,r,c){var p,d,g,m={},u=[],f="",h=this,v=!1,w=!1;if(n.isPlainObject(o)&&(a=o.easing,r=o.complete,c=o.delay,o=o.duration),n.isString(o)&&(o=y.speeds[o]),void 0===o&&(o=y.speeds.normal),o/=1e3,y.off&&(o=0),n.isFunction(a)?(r=a,eace="swing"):a=a||"swing",c?c/=1e3:c=0,n.isString(t))m[b]=t,m[T]=o+"s",m[P]=a,d=I;else{for(p in t)j.test(p)?f+=p+"("+t[p]+") ":("scrollTop"===p&&(w=!0),m[p]=t[p],u.push(n.dasherize(p)));d=x}return f&&(m[E]=f,u.push(E)),o>0&&n.isPlainObject(t)&&(m[z]=u.join(", "),m[B]=o+"s",m[k]=c+"s",m[C]=a),g=function(n){if(v=!0,n){if(n.target!==n.currentTarget)return;e.off(n.target,d,g)}else e.off(i,I,g);s.css(i,O),r&&r.call(this)},o>0&&(e.on(i,d,g),n.debounce(function(){v||g.call(h)},1e3*(o+c)+25)()),i.clientLeft,s.css(i,m),o<=0&&n.debounce(function(){v||g.call(h)},0)(),w&&l(i,t.scrollTop,o,r),this}function r(i,t,o){return s.show(i),t&&(!o&&n.isFunction(t)&&(o=t,t="normal"),s.css(i,"opacity",0),a(i,{opacity:1,scale:"1,1"},t,o)),this}function c(i,t,o){return t?(!o&&n.isFunction(t)&&(o=t,t="normal"),a(i,{opacity:0,scale:"0,0"},t,function(){s.hide(i),o&&o.call(i)})):s.hide(i),this}function l(i,t,o,s){var e=parseInt(i.scrollTop),a=0,r=5,c=1e3*o/r,l=parseInt(t),p=setInterval(function(){a++,a<=c&&(i.scrollTop=(l-e)/c*a+e),a>=c+1&&(clearInterval(p),s&&n.debounce(s,1e3)())},r)}function p(i,n,t){return s.isInvisible(i)?r(i,n,t):c(i,n,t),this}function d(i,n,t,o,s){return a(i,{opacity:t},n,o,s),this}function g(i,n,t,o){var e=s.css(i,"opacity");return e>0?s.css(i,"opacity",0):e=1,s.show(i),d(i,n,e,t,o),this}function m(i,t,o,e){var a,r={};return n.isPlainObject(t)?(r.easing=t.easing,r.duration=t.duration,a=t.complete):(r.duration=t,e?(a=e,r.easing=o):a=o),r.complete=function(){s.hide(i),a&&a.call(i)},d(i,r,0),this}function u(i,n,t,o){return s.isInvisible(i)?g(i,n,easing,callback):m(i,n,easing,callback),this}function f(i,n,t){var o=s.css(i,"position");r(i),s.css(i,{position:"absolute",visibility:"hidden"});var e=s.css(i,"margin-top"),c=s.css(i,"margin-bottom"),l=s.css(i,"padding-top"),p=s.css(i,"padding-bottom"),d=s.css(i,"height");return s.css(i,{position:o,visibility:"visible",overflow:"hidden",height:0,marginTop:0,marginBottom:0,paddingTop:0,paddingBottom:0}),a(i,{height:d,marginTop:e,marginBottom:c,paddingTop:l,paddingBottom:p},{duration:n,complete:function(){t&&t.apply(target)}}),this}function h(i,n,t){if(o.height(i)>0){var e=i,r=(s.css(e,"position"),s.css(e,"height")),l=s.css(e,"margin-top"),p=s.css(e,"margin-bottom"),d=s.css(e,"padding-top"),g=s.css(e,"padding-bottom");s.css(i,{visibility:"visible",overflow:"hidden",height:r,marginTop:l,marginBottom:p,paddingTop:d,paddingBottom:g}),a(e,{height:0,marginTop:0,marginBottom:0,paddingTop:0,paddingBottom:0},{duration:n,queue:!1,complete:function(){c(e),s.css(e,{visibility:"visible",overflow:"hidden",height:r,marginTop:l,marginBottom:p,paddingTop:d,paddingBottom:g}),t&&t.apply(e)}})}return this}function v(i,n,t){return 0==o.height(i)?f(i,n,callback):h(i,n,callback),this}function y(){return y}var b,T,P,w,z,B,C,k,I=t.normalizeCssEvent("AnimationEnd"),x=t.normalizeCssEvent("TransitionEnd"),j=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,E=t.css3PropPrefix+"transform",O={};return O[b=t.normalizeCssProperty("animation-name")]=O[T=t.normalizeCssProperty("animation-duration")]=O[w=t.normalizeCssProperty("animation-delay")]=O[P=t.normalizeCssProperty("animation-timing-function")]="",O[z=t.normalizeCssProperty("transition-property")]=O[B=t.normalizeCssProperty("transition-duration")]=O[k=t.normalizeCssProperty("transition-delay")]=O[C=t.normalizeCssProperty("transition-timing-function")]="",n.mixin(y,{off:!1,speeds:{normal:400,fast:200,slow:600},animate:a,fadeIn:g,fadeOut:m,fadeTo:d,fadeToggle:u,hide:c,scrollToTop:l,slideDown:f,slideToggle:v,slideUp:h,show:r,toggle:p}),i.fx=y});
//# sourceMappingURL=sourcemaps/fx.js.map
