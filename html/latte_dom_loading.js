
(function(define) {'use strict'
define("latte_dom/c/commands/loading.js", ["require", "exports", "module", "window"],
function(require, exports, module, window) {
(function() {
	var View = require("../../v/view.js");
	this.beforeLevel = 1;
	//依赖于dialog
	this.before = function(data, dom, controller) {
		var type = dom.attr("latte-loading");
		if(type) {
			var handle ;
			try {
				handle = require("./loadings/"+type+".js");
			}catch(e) {
				console.error("loadding type",type,"Error",e);
				return;
			}
			handle.create(data, dom, controller);
		}
	}
}).call(module.exports);
});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });
(function(define) {'use strict'
	define("latte_dom/c/commands/loadings/loading1.css", ["require", "exports", "module", "window"],
 	function(require, exports, module, window) {
 		module.exports='.latte_loading1 {	margin: 100px auto;  	width: 20px;  	height: 20px;  	position: relative;}.s .latte_loading1 {  width: :20px;  height: 20px;}.m .latte_loading1 {  width: 30px;  height:30px;}.l .latte_loading1 {  width: 40px;  height: 40px;}.xl .latte_loading1 {  width: 50px;  height: 50px;} .latte_loading1 .container1 > div,.latte_loading1 .container2 > div,.latte_loading1 .container3 > div {  	width: 6px;  	height: 6px;  	background-color: #333;   	border-radius: 100%;  	position: absolute;  	-webkit-animation: bouncedelay 1.2s infinite ease-in-out;  	animation: bouncedelay 1.2s infinite ease-in-out;  	-webkit-animation-fill-mode: both;  	animation-fill-mode: both;}.green  .latte_loading1 .container1 > div,.green .latte_loading1 .container2 >  div,.green .latte_loading1 .container3 > div {  background-color: green;}.m .latte_loading1 .container1 > div,.m .latte_loading1 .container2 > div,.m .latte_loading1 .container3 > div {  width: 9px;  height:9px;}.l .latte_loading1 .container1 > div,.l .latte_loading1 .container2 > div,.l .latte_loading1 .container3 > div {  width: 12px;  height:12px;}.xl .latte_loading1 .container1 > div,.xl .latte_loading1 .container2 > div,.xl .latte_loading1 .container3 > div {  width: 16px;  height:16px;}.latte_loading1  .spinner-container {	position: absolute;  	width: 100%;  	height: 100%;}.latte_loading1  .container2 {	-webkit-transform: rotateZ(45deg);  	transform: rotateZ(45deg);}.latte_loading1 .container3 {	-webkit-transform: rotateZ(90deg);  	transform: rotateZ(90deg);}.latte_loading1  .circle1 { top: 0; left: 0; }.latte_loading1 .circle2 { top: 0; right: 0; }.latte_loading1 .circle3 { right: 0; bottom: 0; }.latte_loading1 .circle4 { left: 0; bottom: 0; }.latte_loading1 .container2 .circle1 {  -webkit-animation-delay: -1.1s;  animation-delay: -1.1s;} .latte_loading1 .container3 .circle1 {  -webkit-animation-delay: -1.0s;  animation-delay: -1.0s;} .latte_loading1 .container1 .circle2 {  -webkit-animation-delay: -0.9s;  animation-delay: -0.9s;} .latte_loading1 .container2 .circle2 {  -webkit-animation-delay: -0.8s;  animation-delay: -0.8s;} .latte_loading1 .container3 .circle2 {  -webkit-animation-delay: -0.7s;  animation-delay: -0.7s;} .latte_loading1 .container1 .circle3 {  -webkit-animation-delay: -0.6s;  animation-delay: -0.6s;} .latte_loading1 .container2 .circle3 {  -webkit-animation-delay: -0.5s;  animation-delay: -0.5s;} .latte_loading1 .container3 .circle3 {  -webkit-animation-delay: -0.4s;  animation-delay: -0.4s;} .latte_loading1 .container1 .circle4 {  -webkit-animation-delay: -0.3s;  animation-delay: -0.3s;} .latte_loading1 .container2 .circle4 {  -webkit-animation-delay: -0.2s;  animation-delay: -0.2s;} .latte_loading1 .container3 .circle4 {  -webkit-animation-delay: -0.1s;  animation-delay: -0.1s;} @-webkit-keyframes bouncedelay {  0%, 80%, 100% { -webkit-transform: scale(0.0) }  40% { -webkit-transform: scale(1.0) }} @keyframes bouncedelay {  0%, 80%, 100% {    transform: scale(0.0);    -webkit-transform: scale(0.0);  } 40% {    transform: scale(1.0);    -webkit-transform: scale(1.0);  }}'
 	});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });
(function(define) {'use strict'
define("latte_dom/c/commands/loadings/loading1.js", ["require", "exports", "module", "window"],
function(require, exports, module, window) {
(function(){
	/**
		<div class="spinner">
		  <div class="spinner-container container1">
		    <div class="circle1"></div>
		    <div class="circle2"></div>
		    <div class="circle3"></div>
		    <div class="circle4"></div>
		  </div>
		  <div class="spinner-container container2">
		    <div class="circle1"></div>
		    <div class="circle2"></div>
		    <div class="circle3"></div>
		    <div class="circle4"></div>
		  </div>
		  <div class="spinner-container container3">
		    <div class="circle1"></div>
		    <div class="circle2"></div>
		    <div class="circle3"></div>
		    <div class="circle4"></div>
		  </div>
		</div>		
	*/
		var ce = function() {
			return document.createElement("div");
		}
		var cc = function() {
			var f = ce();
			f.className = "spinner-container";
			for(var i = 1; i <= 4; i++) {
				var c = ce();
				c.className = "circle"+i;
				f.appendChild(c);
			}
			return f;
		}
		var cd = function() {
			var f = ce();
			f.className = "latte_loading1";
			for(var i = 1; i <=3 ;i++) {
				var c = cc();
				c.className+= " container"+i;
				f.appendChild(c);
			}
			return f;
		}
	this.create = function(data, dom, controller) {
		var dataName = dom.attr("latte-loading-data");
		if(dataName) {
			dom.attr("latte-dialog", "static");
			dom.attr("latte-dialog-data", dataName);
					
				var loadingDom = cd();
			dom.appendChild(loadingDom);
		}	
	}
	require("latte_dom/utils/css.js").importCssString(require("./loading1.css"), "latte_layout_loading1_css");
}).call(module.exports);
});
})(typeof define === "function"? define: function(name, reqs, factory) { factory(require, exports, module); });