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