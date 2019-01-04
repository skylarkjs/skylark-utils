/**
 * skylark-utils - An Elegant HTML5 JavaScript Library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.5
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./skylark","./langx","./noder","./datax","./finder","./geom","./eventer","./styler"],function(r,a,e,n,g,t,d,s){d.on,d.off,n.attr,n.removeAttr,t.pagePosition,s.addClass,t.height;var i=new(a.Evented.inherit({klassName:"DndManager",init:function(){},prepare:function(r){var a=d.create("preparing",{dragSource:r.dragSource,dragHandle:r.dragHandle});r.trigger(a),r.dragSource=a.dragSource},start:function(r,e){var n=t.pagePosition(r.dragSource);this.draggingOffsetX=parseInt(e.pageX-n.left),this.draggingOffsetY=parseInt(e.pageY-n.top);var g=d.create("started",{elm:r.elm,dragSource:r.dragSource,dragHandle:r.dragHandle,ghost:null,transfer:{}});r.trigger(g),this.dragging=r,r.draggingClass&&s.addClass(r.dragSource,r.draggingClass),this.draggingGhost=g.ghost,this.draggingGhost||(this.draggingGhost=r.elm),this.draggingTransfer=g.transfer,this.draggingTransfer&&a.each(this.draggingTransfer,function(r,a){e.dataTransfer.setData(r,a)}),e.dataTransfer.setDragImage(this.draggingGhost,this.draggingOffsetX,this.draggingOffsetY),e.dataTransfer.effectAllowed="copyMove";var i=d.create("dndStarted",{elm:g.elm,dragSource:g.dragSource,dragHandle:g.dragHandle,ghost:g.ghost,transfer:g.transfer});this.trigger(i)},over:function(){},end:function(r){var a=this.dragging;a&&a.draggingClass&&s.removeClass(a.dragSource,a.draggingClass);var e=d.create("dndEnded",{});this.trigger(e),this.dragging=null,this.draggingTransfer=null,this.draggingGhost=null,this.draggingOffsetX=null,this.draggingOffsetY=null}})),o=a.Evented.inherit({klassName:"Draggable",init:function(r,e){var t=this;t.elm=r,t.draggingClass=e.draggingClass||"dragging",t.params=a.clone(e),["preparing","started","ended","moving"].forEach(function(r){a.isFunction(e[r])&&t.on(r,e[r])}),d.on(r,{mousedown:function(r){var a=t.params;a.handle&&(t.dragHandle=g.closest(r.target,a.handle),!t.dragHandle)||(a.source?t.dragSource=g.closest(r.target,a.source):t.dragSource=t.elm,i.prepare(t),t.dragSource&&n.attr(t.dragSource,"draggable","true"))},mouseup:function(r){t.dragSource&&(t.dragSource=null,t.dragHandle=null)},dragstart:function(r){n.attr(t.dragSource,"draggable","false"),i.start(t,r)},dragend:function(r){d.stop(r),i.dragging&&i.end(!1)}})}}),l=a.Evented.inherit({klassName:"Droppable",init:function(r,e){var n,g,t=this,o=(e.draggingClass,!0);t.elm=r,t._params=e,["started","entered","leaved","dropped","overing"].forEach(function(r){a.isFunction(e[r])&&t.on(r,e[r])}),d.on(r,{dragover:function(r){if(r.stopPropagation(),o){var a=d.create("overing",{overElm:r.target,transfer:i.draggingTransfer,acceptable:!0});t.trigger(a),a.acceptable&&(r.preventDefault(),r.dataTransfer.dropEffect="copyMove")}},dragenter:function(r){t._params;var a=t.elm,e=d.create("entered",{transfer:i.draggingTransfer});t.trigger(e),r.stopPropagation(),n&&o&&s.addClass(a,n)},dragleave:function(r){t._params;var a=t.elm;if(!o)return!1;var e=d.create("leaved",{transfer:i.draggingTransfer});t.trigger(e),r.stopPropagation(),n&&o&&s.removeClass(a,n)},drop:function(r){t._params;var a=t.elm;if(d.stop(r),i.dragging){n&&o&&s.addClass(a,n);var e=d.create("dropped",{transfer:i.draggingTransfer});t.trigger(e),i.end(!0)}}}),i.on("dndStarted",function(a){var e=d.create("started",{transfer:i.draggingTransfer,acceptable:!1});t.trigger(e),o=e.acceptable,n=e.hoverClass,(g=e.activeClass)&&o&&s.addClass(r,g)}).on("dndEnded",function(a){var e=d.create("ended",{transfer:i.draggingTransfer,acceptable:!1});t.trigger(e),n&&o&&s.removeClass(r,n),g&&o&&s.removeClass(r,g),o=!1,g=null,n=null})}});function c(){return c}return a.mixin(c,{draggable:function(r,a){return new o(r,a)},droppable:function(r,a){return new l(r,a)},manager:i}),r.dnd=c});
//# sourceMappingURL=sourcemaps/dnd.js.map
