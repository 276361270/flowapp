define(function(require) {
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	var Model = function() {
		this.callParent();
		this._comp ="";
		this._trans= "";
		this._start="";
		this._end="";
		this.map = {"汽运":"1.jpg","船运":"2.jpg","铁路":"3.jpg","空运":"4.jpg"};
		
	};

	// 图片路径转换
	Model.prototype.getImageUrl = function(url) {
		console.log(url);
		return require.toUrl("../main/img/transtype/"+this.map[url]);
	};

	
	/* 运输方式 */
	Model.prototype.sortingBtnClick = function(event) {

		if ($(this.comp("sortingPopOver").$domNode).css("display") == "block") {
			this.comp("sortingPopOver").hide();
		} else {
			this.comp("sortingPopOver").show();
		}

		if ($(this.comp("screeningPopOver").$domNode).css("display") == "block") {
			this.comp("screeningPopOver").hide();
		}
	};
	/* 选择运输方式 */
	Model.prototype.sortingListClick = function(event) {
		var data = this.comp("transport");
		var row = data.getCurrentRow();
		var trans = data.getValue("transtype", row);
		if(trans!=='运输方式')
		{
			this._trans = trans;
			this.refreshData();
		}
		this.comp("sortingBtn").set("label", data.getValue("transtype", row));
		this.comp("sortingPopOver").hide();
	};

	/* 折扣和服务按钮 */
	Model.prototype.screeningBtnClick = function(event) {
		this._comp = "end";
		this.show();
	};
	
	Model.prototype.show = function() {
		var ditpicker = this.comp('distpicker');
		if ($(this.comp("screeningPopOver").$domNode).css("display") == "block") {
			this.comp("screeningPopOver").hide();
			this.comp('distpicker').hide();
		} else {
				//this.comp("screeningPopOver").show();
				ditpicker.show();
		}
		if ($(this.comp("sortingPopOver").$domNode).css("display") == "block") {
			this.comp("sortingPopOver").hide();
		}
	
	};
	//城市插件选择后刷新
	Model.prototype.distpickerOK = function(event){
		//选择城市后刷新数据
		this.comp("screeningPopOver").hide();
		var comp = event.source;
		console.log(this._comp);
		var value = comp.getValue();
	    console.log(this._comp);
	    console.log(value);
		if(this._comp==="start")
		{
			this._start=value.province + ' ' + value.city + ' ' + value.district;
		}
		else if(this._comp==="end")
		{
			this._end = value.province + ' ' + value.city + ' ' + value.district;
		}
		
		this.refreshData();

	};
	//选择起始城市
	Model.prototype.btn_startCityClick = function(event){
		this._comp="start";
		this.show();
	};
	
	//开始查询数据
	Model.prototype.btn_cashClick = function(event){
		this._comp ="";
		this._trans= "";
		this._start="";
		this._end="";
		this.refreshData();
	};
	
	Model.prototype.refreshData = function(){
		var logictisData = this.comp("logictisData");
		logictisData.refreshData();
	};

	Model.prototype.logictisDataBeforeRefresh = function(event){
		//设置搜索 过滤数据
		var data = event.source;
		var stype=0;
		data.filters.setVar("trans",this._trans);
		data.filters.setVar("start",this._start);
		data.filters.setVar("end",this._end);
		if(this._trans!=="")
		{
			stype=1;
		}
		if(this._trans!==""&&this._start!=="")
		{
			stype=2;
		}
		if(this._trans!==""&&this._start!==""&&this._end!=="")
		{
			stype=3;
		}
		
		data.filters.setVar("stype",stype);
	};

	return Model;
});