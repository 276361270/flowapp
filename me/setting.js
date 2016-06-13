define(function(require){
//	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");
	var DataUtils = require("$UI/commom/js/DataUtils");
	
	var Model = function(){
		this.callParent();
	};
	//清理用户退出消息
	Model.prototype.cleanUser = function(){
		//移除登录内存数据
		justep.Shell.userName.set("");
		//移除历史数据
		localStorage.removeItem("userUUID");
		
		var perent = this.getParent().comp("userContainer");
		setTimeout(function() {
			perent.load(require.toUrl("./login.w"));
		}, 300);
	};
	

	Model.prototype.btn_authClick = function(event){
		
		justep.Shell.showPage("auth");
	};
	

	Model.prototype.btn_logticsClick = function(event){
		var baasData = this.comp("baasData");
		var parms ={};
		parms.city= baasData.getValue("fcity", baasData.getCurrentRow());
		parms.address= baasData.getValue("faddress", baasData.getCurrentRow());
		justep.Shell.showPage("logistics",parms);
	};
	

	Model.prototype.modelLoad = function(event){
		var userData = this.comp("userData");
		userData.clear();
		
		var user = 	JSON.parse(localStorage.getItem("userUUID"));
		
		var data = {account:user.userid,name:user.name,address:"",usertype:user.type};
		if(user.type!=="物流"){
			   var node = this.getElementByXid("logistic_panel");
			   justep.Bind.removeNode(node);
		}
		
		DataUtils.genData(userData,data,0);
		
		DataUtils.load("queryAuthaccount",{"faccountID":user.fid},function(res){
			console.log(res);
		});
		this.comp("baasData").refreshData();
	};
	

	Model.prototype.baasDataBeforeRefresh = function(event){
		var data = event.source;
		var user = 	JSON.parse(localStorage.getItem("userUUID"));
		data.filters.setVar("faccountID",user.fid);
	};
	
	return Model;
});