define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/input/password');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/button/toggle');
require('$model/UI2/system/components/bootstrap/inputGroup/inputGroup');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/flowapp/me/login'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='caaYfIv';
	this._flag_='b566d84e2b0112d0e79e595684ddbf3d';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fid":{"define":"fid","label":"主键","name":"fid","relation":"fid","type":"String"},"fname":{"define":"fname","label":"昵称","name":"fname","relation":"fname","type":"String"},"fqq":{"define":"fqq","label":"qq号码选填","name":"fqq","relation":"fqq","type":"String"},"fusertypeid":{"define":"fusertypeid","label":"fusertypeid","name":"fusertypeid","relation":"fusertypeid","type":"String"}},"directDelete":false,"events":{},"filters":{"filter0":"","filter1":"","filter2":""},"idColumn":"fid","limit":20,"queryAction":"queryAccount_login","saveAction":"saveAccount","tableName":"account","url":"/flowapp/flowapp","xid":"login"});
}}); 
return __result;});