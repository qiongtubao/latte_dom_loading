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