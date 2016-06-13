define(function(require) {
	// var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var ShellImpl = require('$UI/system/lib/portal/shellImpl');

	var Model = function() {
		this.callParent();
		var shellImpl = new ShellImpl(this, {
			"contentsXid" : "pages",
			"pageMappings" : {
				// 主页
				"main" : {
					url : require.toUrl('./main.w')
				},
				// 注册
				"register" : {
					url : require.toUrl('./me/register.w')
				},
				// 登录
				"login" : {
					url : require.toUrl('./me/login.w')
				},
				// 设置
				"setting" : {
					url : require.toUrl('./me/setting.w')
				},
				// 认证
				"auth" : {
					url : require.toUrl('./me/auth.w')
				},
				// 添加物流信息
				"logistics" : {
					url : require.toUrl('./logistics/logistics.w')
				}
			}
		});

		shellImpl.useDefaultExitHandler = false;

	};
	Model.prototype.modelLoad = function(event) {
		
		justep.Shell.userName = justep.Bind.observable();
		justep.Shell.appType = justep.Bind.observable();

		justep.Shell.appType.set("web");
		document.addEventListener("deviceready", function() {
			justep.Shell.appType.set("app");
		}, false);

		var userLocal = (localStorage.getItem("userUUID") && JSON.parse(localStorage.getItem("userUUID"))) || null;
		if (userLocal) {
			justep.Shell.userName.set(userLocal.name);
		} else {
			justep.Shell.userName.set("");
		}
	};
	return Model;
});