define(function(require) {
	// var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var DataUtils = require("$UI/commom/js/DataUtils");
	var Model = function() {
		this.callParent();
		this._comp = "";

	};

	Model.prototype.modelModelConstruct = function(event) {

	};

	Model.prototype.getUser = function() {
		return JSON.parse(localStorage.getItem("userUUID"));
	};

	Model.prototype.saveCommit = function(event) {
		alert("保存数据成功！");
	};

	Model.prototype.txt_cityClick = function(event) {
		this._comp = "txt_fstartCity";
		this.show();
	};

	Model.prototype.show = function() {
		var ditpicker = this.comp('distpicker');
		ditpicker.show();
	};

	Model.prototype.distpickerOK = function(event) {
		var comp = event.source;
		var value = comp.getValue();
		this.comp(this._comp).val(value.province + ' ' + value.city + ' ' + value.district);
	};

	Model.prototype.txt_endcityClick = function(event) {
		this._comp = "txt_fendCity";
		this.show();
	};

	Model.prototype.modelLoad = function(event) {
		var user = this.getUser();
		if (user === null)
			return;
		if (user.name) {
			this.comp("txt_fstartPhone").val(user.userid);
			this.comp("txt_fstartTel").val(user.userid);
		}
		if (user.address)
			this.comp("txt_fendAddress").val(user.address);

	};

	Model.prototype.check = function() {
		return this.compcheck("slt_fpriceType") && this.compcheck("txt_fprice") && this.compcheck("txt_ftransfer") && this.compcheck("txt_fendPhone") && this.compcheck("txt_fendAddress")
				&& this.compcheck("txt_fendCity") && this.compcheck("txt_fstartTel") && this.compcheck("txt_fstartPhone") && this.compcheck("txt_fstartAddress") && this.compcheck("txt_fstartCity");
	};

	Model.prototype.compcheck = function(nodeName) {
		return this.comp(nodeName).val() !== "";
	};
	Model.prototype.phoneCheck = function(phone) {
		var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
		var isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
		return reg.test(phone) || isPhone.test(phone);
	};

	Model.prototype.btn_addClick = function(event) {
		if (!this.check()) {
			justep.Util.hint("请完善对应的信息");
			return;
		}

		if (!this.phoneCheck(this.comp("txt_fstartPhone").val()) && !this.phoneCheck(this.comp("txt_fstartTel").val()) && !this.phoneCheck(this.comp("txt_fendPhone").val())) {
			justep.Util.hint("请核电话时候正确");
			return;
		}
		var mainData = this.comp("mainData");
		mainData.clear();
		var user = this.getUser();
		var data = {
			fid : justep.UUID.createUUID(),
			faccountID : user.fid,
			ftransport : this.comp("slt_ftransport").val(),
			fstartCity : this.comp("txt_fstartCity").val(),
			fstartAddress : this.comp("txt_fstartAddress").val() || "上门装货",
			fstartPhone : this.comp("txt_fstartPhone").val(),
			fstartTel : this.comp("txt_fstartTel").val(),
			fendCity : this.comp("txt_fendCity").val(),
			fendAddress : this.comp("txt_fendAddress").val(),
			fendPhone : this.comp("txt_fendPhone").val(),
			ftransfer : this.comp("txt_ftransfer").val() || "无",
			fprice : this.comp("txt_fprice").val(),
			fpriceType : this.comp("slt_fpriceType").val(),
			freMark : this.comp("txt_freMark").val() || ""
		};
		console.log(data);
		DataUtils.genData(mainData, data, 0);
		var self = this;
		mainData.saveData({
			"onSuccess" : function(info) {
				self.comp("messageDialog").show({
					message : "保存成功,是否继续"
				});
			},
			"onError" : function(msg, xhr) {
				console.log("注册失败，请稍后再试");
			}
		});

	};
	Model.prototype.modelParamsReceive = function(event) {
		this.comp("txt_fstartCity").val(event.params.city);
		this.comp("txt_fstartAddress").val(event.params.address);

	};

	Model.prototype.messageDialogYes = function(event) {
		this.comp("txt_fendAddress").val("");
		this.comp("txt_fendPhone").val("");
		this.comp("txt_ftransfer").val("");
		this.comp("txt_fprice").val("");
	};

	Model.prototype.messageDialogNo = function(event) {
		justep.Shell.closePage();
	};
	return Model;
});