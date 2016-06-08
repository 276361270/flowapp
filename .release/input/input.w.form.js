define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/select/radioGroup');
require('$model/UI2/system/components/justep/input/range');
require('$model/UI2/system/components/justep/button/toggle');
require('$model/UI2/system/components/justep/input/password');
require('$model/UI2/system/components/justep/button/checkbox');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/button/radio');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/flowapp/input'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='ca2eYva';
	this._flag_='faa1d479620d65716bae50a5a7531c6d';
	this.callParent(contextUrl);
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"name":{"define":"name","label":"规则","name":"name","relation":"name","type":"String"}},"directDelete":false,"events":{},"idColumn":"name","initData":"[{\"col\":1,\"name\":\"厂家\"},{\"col\":2,\"name\":\"物流\"},{\"col\":3,\"name\":\"客户\"}]","limit":20,"xid":"col"});
 new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"channel":{"define":"channel","label":"销售渠道","name":"channel","relation":"channel","type":"String"},"comDate":{"define":"comDate","label":"到货日期","name":"comDate","relation":"comDate","rules":{"date":true},"type":"Date"},"createTime":{"define":"createTime","label":"抢购开始时间","name":"createTime","relation":"createTime","rules":{"datetime":true},"type":"DateTime"},"name":{"define":"name","label":"品名","name":"name","relation":"name","type":"String"},"price":{"define":"price","label":"价格","name":"price","relation":"price","rules":{"number":true},"type":"Float"},"spec":{"define":"spec","label":"规格","name":"spec","relation":"spec","type":"String"},"startTime":{"define":"startTime","label":"抢购开始时间","name":"startTime","relation":"startTime","type":"String"},"state":{"define":"state","label":"状态","name":"state","relation":"state","type":"Boolean"}},"directDelete":false,"events":{},"idColumn":"name","initData":"[{\"name\":\"水彩笔\",\"price\":30,\"state\":\"true\",\"spec\":\"24色\",\"channel\":\"jd\",\"comDate\":\"2014-11-18\",\"createTime\":\"2014-11-19T\",\"startTime\":\"2014-11-19\"}]","limit":20,"xid":"data"});
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fid":{"define":"fid","label":"主键","name":"fid","relation":"fid","rules":{"integer":true},"type":"Integer"},"fname":{"define":"fname","label":"注册的类型","name":"fname","relation":"fname","type":"String"},"fremark":{"define":"fremark","label":"备注","name":"fremark","relation":"fremark","type":"String"}},"directDelete":false,"events":{},"idColumn":"fid","limit":20,"queryAction":"queryUsertype","tableName":"usertype","url":"/flowapp/flowapp","xid":"userType"});
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
}}); 
return __result;});