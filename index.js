define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');
	
	var Model = function(){
		this.callParent();		
		var shellImpl = new ShellImpl(this, {
			"contentsXid" : "pages",
			"pageMappings" : {
				"main":{
					url : require.toUrl('./main.w')
				},
				"register":{
					url : require.toUrl('./me/register.w')
				},
				"login":{
					url : require.toUrl('./me/login.w')
				}
			}
		});
		
	};

	return Model;
});