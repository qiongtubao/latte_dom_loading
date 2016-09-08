var latte_lib = latte.require("latte_lib");
  var latte_dom = latte.require("latte_dom");
 	var data = {
 		size: "s",
 		color:"green",
    	loading: {
    		show: false
    	},
    	shows:function() {
    		this.set("size", "s");
    		this.get("show").call(this);
    	},
    	showm:function() {
    		this.set("size", "m");
    		this.get("show").call(this);
    	},
    	showl:function() {
    		this.set("size", "l");
    		this.get("show").call(this);
    	},
    	showxl:function() {
    		this.set("size", "xl");
    		this.get("show").call(this);
    	},
    	show: function() {
    		this.set("loading.show", true);
    		var self = this;
    		setTimeout(function() {
    			self.set("loading.show", false);
    		}, 3000);
    	}
      
  	};
  var demo = latte_dom.define("demo", data);