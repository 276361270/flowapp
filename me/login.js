define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var MD5 = require("$UI/system/lib/base/md5");

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
			var userData = this.comp("login");
			userData.clear();
			userData.filters.setVar("name", name);
			userData.filters.setVar("pass", md5.hex_md5(pass));
			userData.refreshData();
			if (userData.count()===1) {
				justep.Shell.userName.set(name);
				localStorage.removeItem("userUUID");
				var user = {};
				console.log(userData.toJson());
				user.userid = name;
				user.fid = userData.getValue("fid", userData.getCurrentRow());
				user.name = userData.getValue("fname", userData.getCurrentRow());
				user.type = userData.getValue("fusertypeid", userData.getCurrentRow());
				var remPass = this.comp("toggle").val();
				
				var obj = {};
				obj.name = name;
				if(remPass)
				{
					obj.pass = pass;
					obj.rember = remPass;
				}
				
				localStorage.setItem("loginData", JSON.stringify(obj));
				localStorage.setItem("userUUID", JSON.stringify(user));
				
				var perent = this.getParent().comp("userContainer");
				setTimeout(function() {
					perent.load(require.toUrl("./setting.w"));
				}, 200);
			} else {
				this.show("用户或密码有误！");
			}
		}
		
	};
	function show(msg) {
		justep.Util.hint(msg);
	}
	// 检查密码长度
	Model.prototype.txt_passBlur = function(event) {
		var len = this.comp("txt_pass").val().length;
		if (len < 6 || len > 12) {
			show("密码长度在6到12位之间");
		}
	};

	Model.prototype.modelLoad = function(event){		
		var user = JSON.parse(localStorage.getItem("loginData"));
		if(user===null) return;
		this.comp('txt_phone').val(user.name);
		this.comp("toggle").val(user.rember===null?false:user.rember);
		if(user.pass)
			this.comp('txt_pass').val(user.pass);
	};

	return Model;
});