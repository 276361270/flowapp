define(function(require) {
//	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var DataUtils = require("$UI/commom/js/DataUtils");

	var Model = function() {
		this.callParent();
	};

	Model.prototype.backBtnClick = function(event) {
		justep.Shell.closePage();
	};

	Model.prototype.txt_cityClick = function(event) {
		this.comp("distpicker").show();
	};

	Model.prototype.distpickerOK = function(event) {
		var comp = event.source;
		var value = comp.getValue();
		this.comp("txt_city").val(value.province + ' ' + value.city + ' ' + value.district);
	};

	Model.prototype.modelLoad = function(event) {
		var baasData = this.comp("baasData");
		var row = baasData.getCurrentRow();
		var user = JSON.parse(localStorage.getItem("userUUID"));
		
		DataUtils.genData(this.comp("data"), {
			id : user.userid,
			fileName : "["+baasData.getValue("fimg0", row)+","+baasData.getValue("fimg1", row)+","+baasData.getValue("fimg2", row)+"]"
		}, 0);
		this.comp("txt_city").val(baasData.getValue("fcity", row));
		this.comp("txt_phone").val(baasData.getValue("fmphone", row));
		this.comp("txt_address").val(baasData.getValue("faddress", row));
		this.comp("txt_phone").val(baasData.getValue("fphoneTel", row));
		this.comp("txt_fox").val(baasData.getValue("ffoxtel", row));
	};

	Model.prototype.save = function() {
		var baasData = this.comp("baasData");
		var baasRow = baasData.getCurrentRow();
		
		var user = JSON.parse(localStorage.getItem("userUUID"));

		var data = this.comp('data');
		var row = data.getCurrentRow();
		var jsonList = eval("(" + row.val('fileName') + ")");
		var self = this;
		console.log(baasData.count());
		if (baasData.count() < 1) {
			var json = {
				"fid" : justep.UUID.createUUID(),
				"faccountID" : user.fid,
				"fcity" : this.comp("txt_city").val(),
				"fphoneTel" : this.comp("txt_phone").val(),
				"faddress" : this.comp("txt_address").val(),
				"fmphone" : this.comp("txt_phone").val(),
				"ffoxtel" : this.comp("txt_fox").val(),
				"fimg0" : JSON.stringify(jsonList[0]),
				"fimg1" : JSON.stringify(jsonList[1]),
				"fimg2" : JSON.stringify(jsonList[2])
			};
			DataUtils.genData(baasData, json, 0);

			baasData.saveData({
				"onSuccess" : function(info) {
					self.comp("messageDialog").show({
						message : "资料已提交"
					});
				},
				"onError" : function(msg, xhr) {
					console.log("注册失败，请稍后再试");
				}
			});
		} else {
			baasData.setValue("fcity", this.comp("txt_city").val(), baasRow);
			baasData.setValue("fphoneTel", this.comp("txt_phone").val(), baasRow);
			baasData.setValue("faddress", this.comp("txt_address").val(), baasRow);
			baasData.setValue("fmphone", this.comp("txt_phone").val(), baasRow);
			baasData.setValue("ffoxtel", this.comp("txt_fox").val(), baasRow);
			baasData.setValue("fimg0", JSON.stringify(jsonList[0]), baasRow);
			baasData.setValue("fimg1", JSON.stringify(jsonList[1]), baasRow);
			baasData.setValue("fimg2", JSON.stringify(jsonList[2]), baasRow);
			
			console.log(baasData.toJson());
			baasData.saveData({
				"onSuccess" : function(event) {
					baasData.refreshData();
					self.comp("messageDialog").show({
						message : "资料已更新"
					});
				}
			});
			//justep.Util.hint("已经提交认证,请勿重复提交");
		}

	};

	Model.prototype.submitBtnClick = function(event) {
		// var data = this.comp('data');
		// var row=data.getCurrentRow();
		// var jsonList = eval("(" + row.val('fileName') + ")");
		// var ownerID = row.getID();	 
		// var realFileName = jsonList[0]["realFileName"];
		// var storeFileName = jsonList[0]["storeFileName"];
		// var operateType = "preview";
		// previewUrl=this.comp("attachmentSimple").getFileUrl(realFileName,storeFileName,ownerID,operateType);
		this.save();
	};

	Model.prototype.baasDataBeforeRefresh = function(event) {
		var user = JSON.parse(localStorage.getItem("userUUID"));
		var data = event.source;
		data.filters.setVar("faccountID", user.fid);
	};

	return Model;
});