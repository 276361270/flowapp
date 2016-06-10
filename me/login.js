define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var MD5 = require("$UI/system/lib/base/md5");
	var DataUtils = require("../js/DataUtils");

	var Model = function() {
		this.callParent();
	};

	// 图片路径转换
	Model.prototype.toUrl = function(url) {
		return url ? require.toUrl(url) : "";
	};

	Model.prototype.registerBtnClick = function(event) {
		justep.Shell.showPage("register");
	};

	// login
	Model.prototype.btn_loginClick = function(event) {
		var name = $.trim(this.comp('txt_phone').val());
		var pass = $.trim(this.comp('txt_pass').val());
		var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
		
		if (name === "" || pass === "") {
			show("忘记输入用户名或密码?");
		} 
		else if(!reg.test(name)){
			show("登录账号必须是手机号码!");
		}
		else {
			var md5 = new MD5();
//			202cb962ac59075b964b07152d234b70
			console.log(md5.hex_md5(pass));
			var userData = this.comp("login");
			userData.clear();
			userData.filters.setVar("name", name);
			userData.filters.setVar("pass", md5.hex_md5(pass));
			userData.refreshData();
			console.log(userData.count());
			if (userData.count() > 0) {
				console.log(userData);
				justep.Util.hint("登录成功");
//				justep.Shell.userType.set("ISM");
//				justep.Shell.userName.set(name);
//				localStorage.removeItem("userUUID");
	
				var user = {};
				user.userid = name;
				user.accountType = "ISM";
				user.name = name || "NONAME";
				localStorage.setItem("userUUID", JSON.stringify(user));
	
				setTimeout(function() {
					//justep.Shell.closePage();
				}, 3000);
			} else {
				justep.Util.hint("用户或密码有误！", {
					"type" : "danger"
				});
			}
		}
		


	

	};
	function show(msg) {
		justep.Util.hint(msg, {
			"type" : "danger", 
			"position" : "middle"
		});
	}
	// 检查密码长度
	Model.prototype.txt_passBlur = function(event) {
		var len = this.comp("txt_pass").val().length;
		if (len < 6 || len > 12) {
			show("密码长度在6到12位之间");
		}
	};

	return Model;
});