/**
 * skylark-utils - An Elegant HTML5 JavaScript Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5-beta
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["../langx"],function(e){function i(e){var i="";switch(e.code){case FileError.QUOTA_EXCEEDED_ERR:i="QUOTA_EXCEEDED_ERR";break;case FileError.NOT_FOUND_ERR:i="NOT_FOUND_ERR";break;case FileError.SECURITY_ERR:i="SECURITY_ERR";break;case FileError.INVALID_MODIFICATION_ERR:i="INVALID_MODIFICATION_ERR";break;case FileError.INVALID_STATE_ERR:i="INVALID_STATE_ERR";break;default:i="Unknown Error"}return i}function n(){return n}var t=e.Deferred,r=window.requestFileSystem||window.webkitRequestFileSystem,o=(window.resolveLocalFileSystemURL||window.webkitResolveLocalFileSystemURL,window.MozBlobBuilder||window.WebKitBlobBuilder||window.BlobBuilder,e.Evented.inherit({_fs:null,_isPersisted:!0,_cwd:null,init:function(e){this._fs=e,this._cwd=e.root},readfileAsArrayBuffer:function(e,i,n){this._cwd.getFile(e,{},function(e){e.file(function(e){var n=new FileReader;n.onloadend=function(){i(null,this.result)},n.readAsArrayBuffer(e)},n)},n)},readfileAsDataURL:function(e,i,n){this._cwd.getFile(e,{},function(e){e.file(function(e){var n=new FileReader;n.onloadend=function(){i(null,this.result)},n.readAsDataURL(e)},n)},n)},readfileAsText:function(e,i,n){this._cwd.getFile(e,{},function(e){e.file(function(e){var n=new FileReader;n.onloadend=function(){i(null,this.result)},n.readAsText(e)},n)},n)},writefile:function(e,i,n,t){var r=this,o=e.split("/");o=o.slice(0,o.length-1),this.mkdir(o.join("/"),function(){r._cwd.getFile(e,{create:!0},function(e){e.createWriter(function(e){var r=!1;e.onwriteend=function(){return r?void(n&&n()):(r=!0,void this.truncate(this.position))},e.onerror=t;var o=i;!o instanceof Blob&&(o=new Blob([i],{type:"text/plain"})),e.write(o)},t)},t)})},rmfile:function(e,i,n){this._cwd.getFile(e,{},function(e){e.remove(function(){i()},n)},n)},readdir:function(e,i,n){this._cwd.getDirectory(e,{},function(e){function t(){r.readEntries(function(e){e.length?(o=o.concat(Array.prototype.slice.call(e).map(function(e){return e.name+(e.isDirectory?"/":"")})),t()):i(null,o)},n)}var r=e.createReader(),o=[];t()},n)},mkdir:function(e,i,n){var t=e.split("/"),r=function(o,c){return"."!=c[0]&&""!=c[0]||(c=c.slice(1)),0==c.length?void i(o):void o.getDirectory(c[0],{create:!0,exclusive:!1},function(o){if(o.isDirectory)c.length&&1!=t.length?r(o,c.slice(1)):i&&i(o);else{var u=new Error(e+" is not a directory");if(!n)throw u;n(u)}},function(e){if(!n)throw e;n(e)})};r(this._cwd,t)},rmdir:function(e,i,n){this._cwd.getDirectory(e,{},function(e){e.removeRecursively(function(){i()},n)},n)},copy:function(e,i,n){this._cwd.getFile(e,{},function(e){cwd.getDirectory(i,{},function(i){e.copyTo(i,function(){n()},n)},n)},n)},move:function(e,i,n){this._cwd.getFile(e,{},function(e){cwd.getDirectory(i,{},function(i){e.moveTo(i,function(){n()},n)},n)},n)},chdir:function(e,i){this._cwd.getDirectory(e,{},function(e){cwd=e,fs.onchdir&&fs.onchdir(cwd.fullPath),i()},i)},importFromHost:function(e){for(var n,r=new t,o=0;n=e[o];++o)!function(e){cwd.getFile(n.name,{create:!0,exclusive:!0},function(n){n.createWriter(function(i){i.write(e)},i)},i)}(n);return r.promise},exportToHost:function(){}}));return e.mixin(n,{isSupported:function(){return!!r},request:function(e,i){e=e||10485760;var n=i?PERSISTENT:TEMPORARY,c=new t;return r(n,e,function(e){var n=new o(e,(!!i));c.resolve(n)},function(e){c.reject(e)}),c.promise},FileSystem:o}),n});
//# sourceMappingURL=../sourcemaps/_storages/localfs.js.map
