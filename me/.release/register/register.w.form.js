define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/controlGroup/controlGroup');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/panel/panel');
require('$model/UI2/system/components/justep/input/password');
require('$model/UI2/system/components/justep/select/select');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/data/data');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/flowapp/me/register'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='cfqayai';
	this._flag_='e9acb13288d7e0cad68d8ec9ed40f71b';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":false,"autoNew":false,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fcreatetime":{"define":"fcreatetime","label":"注册时间","name":"fcreatetime","relation":"fcreatetime","rules":{"datetime":true},"type":"DateTime"},"fid":{"define":"fid","label":"主键","name":"fid","relation":"fid","type":"String"},"fname":{"define":"fname","label":"昵称","name":"fname","relation":"fname","type":"String"},"fpasswd":{"define":"fpasswd","label":"密码","name":"fpasswd","relation":"fpasswd","type":"String"},"fphone":{"define":"fphone","label":"电话同时也是账户","name":"fphone","relation":"fphone","type":"String"},"fqq":{"define":"fqq","label":"qq号码选填","name":"fqq","relation":"fqq","type":"String"},"fremart":{"define":"fremart","label":"fremart","name":"fremart","relation":"fremart","type":"String"},"fusertypeid":{"define":"fusertypeid","label":"fusertypeid","name":"fusertypeid","relation":"fusertypeid","type":"String"}},"directDelete":false,"events":{},"idColumn":"fid","limit":20,"queryAction":"queryAccount_register","saveAction":"saveAccount","tableName":"account","url":"/flowapp/flowapp","xid":"userAccount"});
 var __Data__ = require("$UI/system/components/justep/data/data");new __Data__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fid":{"define":"fid","label":"主键","name":"fid","relation":"fid","rules":{"integer":true},"type":"Integer"},"fname":{"define":"fname","label":"类型名称","name":"fname","relation":"fname","type":"String"}},"directDelete":false,"events":{},"idColumn":"fid","initData":"[{\"fid\":1,\"fname\":\"物流\"},{\"fid\":2,\"fname\":\"厂家\"},{\"fid\":3,\"fname\":\"商户\"}]","limit":20,"xid":"userType"});
 var justep = require('$UI/system/lib/justep');if(!this['__justep__']) this['__justep__'] = {};if(!this['__justep__'].selectOptionsAfterRender)	this['__justep__'].selectOptionsAfterRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._addDefaultOption();	};if(!this['__justep__'].selectOptionsBeforeRender)	this['__justep__'].selectOptionsBeforeRender = function($element) {		var comp = justep.Component.getComponent($element);		if(comp) comp._optionsBeforeRender();	};
}}); 
return __result;});