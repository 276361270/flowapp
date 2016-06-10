define(function(require) {
	var $ = require("jquery");
	var MD5 = require("$UI/system/lib/base/md5");
	var justep = require("$UI/system/lib/justep");
	require("cordova!com.justep.cordova.plugin.security.mob");
	var DataUtils = require("../js/DataUtils");
	var Model = function() {
		this.callParent();
		this._cansave = false;
	};

	Model.prototype.sendsmsButton = function(event) {
		if (!navigator.mobsms) {
			justep.Util.hint("请安装最新版本(含插件)体验!!");
			return;
		}
		//已经注册的手机不再发送短信
		if(!this._cansave) return;
		var phoneInput = this.comp("txt_phone").val();
		var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
		justep.Util.hint(phoneInput);
		if (reg.test(phoneInput)) {
			this.comp("btn_getcode").mytimer();
			navigator.mobsms.send({
				"zone" : "86",
				"phoneNumber" : phoneInput
			}, function(info) {
				justep.Util.hint("info" + info);
			}, function(err) {
				justep.Util.hint(err);
			});
		} else {
			justep.Util.hint("手机号码不正确！");
		}
	};

	Model.prototype.modelLoad = function(event) {
		var self = this;
		var comp = this.comp("btn_getcode");
		Timmer.apply(comp, [ 60, "免费获取验证码", "重新发送" ]);

		document.addEventListener("deviceready", function() {
			self._userDefaultName = "App用户";
		}, false);

		if (justep.Browser.isX5App) {
			this._deviceType = "app";
		} else {
			this._deviceType = "web";
			window.navigator = window.navigator || {};
			window.navigator.mobsms = {
				init : function(appinfo) {
					show("发送失败，注册只支持手机应用");
				},
				send : function(appinfo) {
					show("发送失败，注册只支持手机应用");
				},
				verify : function(appinfo) {
					show("发送失败，注册只支持手机应用");
				}

			};
		}
	};

	// show
	function show(msg) {
		justep.Util.hint(msg, {
			"type" : "danger"
		});
	}

	Model.prototype.verify = function(args, success, error) {
		navigator.mobsms.verify(args, success, error);
	};

	function Timmer(loopSecond, titile1, title2, lisentner) { // todo
		// 还要检查一个结果返回变量。
		this.loopSecond = loopSecond;
		this.waittime = loopSecond;
		var self = this;
		this.mytimer = function() {
			if (self.waittime <= 0) {
				self.set({
					"disabled" : false,
					"label" : titile1
				});
				this.waittime = loopSecond; // 可设 60秒
			} else {
				self.set({
					"disabled" : true,
					"label" : title2 + "(" + self.waittime + ")"
				});
				self.waittime--;
				setTimeout(function() {
					self.mytimer();
				}, 1000);
			}
		};
	}

	Model.prototype.buttonCloseClick = function(event) {
		justep.Shell.closePage();
	};

	Model.prototype.suerpassTouchend = function(event) {
		if (this.comp("txt_pass").val() != this.comp("txt_surepass").val()) {
			justep.Util.hint("两次输入的密码不一致", {
				"type" : "danger",
				"position" : "middle"
			});
		} 

	};
	// 检查密码长度
	Model.prototype.txt_passBlur = function(event) {
		var len = this.comp("txt_pass").val().length;
		if (len < 6 || len > 12) {
			justep.Util.hint("密码长度在6到12位之间", {
				"type" : "danger",
				"position" : "middle"
			});
		}
	};
	// 焦点移除后验证唯一性
	Model.prototype.txt_phoneBlur = function(event) {
		var name = $.trim(this.comp('txt_phone').val());
		var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
		if (!reg.test(name)) {
			show("登录账号必须是手机号码!");
		} else {
			var userData = this.comp("userAccount");
			userData.clear();
			userData.filters.setVar("name", name);
			userData.refreshData();
			if (userData.count() > 0) {
				justep.Util.hint("该号码已经注册");
				this._cansave = false;
			} else {
				justep.Util.hint("恭喜你可以注册");
				this._cansave = true;
			}
		}

	};
	// 保存注册用户信息
	Model.prototype.save = function() {
		var md5 = new MD5();
		this._cansave = false;
		var data = {
			"fid" : justep.UUID.createUUID(),
			"fname" : this.comp("txt_name").val(),
			"fphone" : this.comp("txt_phone").val(),
			"fpasswd" : md5.hex_md5(this.comp("txt_surepass").val()),
			"fqq" : this.comp("txt_qq").val(),
			"fremart" : "备注信息",
			"fusertypeid" : this.comp("slt_regtype").val(),
			"fcreatetime" : new Date()

		};
		// console.log(data)
		var account = this.comp("userAccount");
		var commit = DataUtils.genData(account, data, 0);
		account.saveData({
			"onSuccess" : function(info) {
				show("注册成功");
			},
			"onError" : function(msg, xhr) {
				this._cansave = true;
				show("注册失败，请稍后再试");
			}
		});
	};

	// 依据 verify 返回值决定向Baas 保存用户。
	// 使用的是第一种方式。更安全的要求参见第二种方式
	// 第二种方式: http://wiki.mob.com/smssdk-service-verify/
	Model.prototype.registerButtom = function(event) {
	
		if(!this._cansave) return;
	
		// 账号检查是否可以注册
		var phoneInput = this.comp("txt_phone").val();
		var verifyCode = this.comp("txt_surecode").val();
		var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
		var verifyCodeReg = /^\d{4}$/;
		if (verifyCodeReg.test(verifyCode) && reg.test(phoneInput)&& $.trim(this.comp("txt_pass").val())!==""&&$.trim(this.comp("txt_name").val())!==""&&$.trim(this.comp("txt_surepass").val())!=="") {
			if (this._deviceType === "app") {
					var parms = {
					"zone" : "86",
					"phoneNumber" : phoneInput,
					"verificationCode" : verifyCode
				};
				var self = this;
				this.verify(parms, function(info) {
					if (info.result == -1) {
						self.save();
					} else {
						show("短信验证码无效请重试");
					}
				}, function(info) {
					show("短信验证码无效请重试");
				});
			}
			else 
			{	//网页直接保存数据 仅仅做测试使用
				this.save();
			}

		} else {
			justep.Util.hint("请完善注册信息");
		}

	};
	return Model;
});