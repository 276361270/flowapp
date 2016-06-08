define(function(require){
require('$model/UI2/system/components/justep/model/model');
require('$model/UI2/system/components/justep/loadingBar/loadingBar');
require('$model/UI2/system/components/justep/button/button');
require('$model/UI2/system/components/justep/controlGroup/controlGroup');
require('$model/UI2/system/components/justep/input/input');
require('$model/UI2/system/components/justep/titleBar/titleBar');
require('$model/UI2/system/components/justep/panel/child');
require('$model/UI2/system/components/justep/window/window');
require('$model/UI2/system/components/justep/data/baasData');
require('$model/UI2/system/components/justep/labelEdit/labelEdit');
require('$model/UI2/system/components/justep/panel/panel');
var __parent1=require('$model/UI2/system/lib/base/modelBase'); 
var __parent0=require('$model/UI2/flowapp/me'); 
var __result = __parent1._extend(__parent0).extend({
	constructor:function(contextUrl){
	this.__sysParam='true';
	this.__contextUrl=contextUrl;
	this.__id='';
	this.__cid='c3uMBBn';
	this._flag_='426c0e6acdfe2d264098bfae9330872f';
	this.callParent(contextUrl);
 var __BaasData__ = require("$UI/system/components/justep/data/baasData");new __BaasData__(this,{"autoLoad":true,"confirmDelete":true,"confirmRefresh":true,"defCols":{"fcreatetime":{"define":"fcreatetime","label":"注册时间","name":"fcreatetime","relation":"fcreatetime","rules":{"datetime":true},"type":"DateTime"},"fid":{"define":"fid","label":"主键","name":"fid","relation":"fid","rules":{"integer":true},"type":"Integer"},"fpasswd":{"define":"fpasswd","label":"密码","name":"fpasswd","relation":"fpasswd","type":"String"},"fphone":{"define":"fphone","label":"电话同时也是账户","name":"fphone","relation":"fphone","type":"String"},"fqq":{"define":"fqq","label":"qq号码选填","name":"fqq","relation":"fqq","type":"String"},"fremart":{"define":"fremart","label":"","name":"fremart","relation":"fremart","type":"String"},"fusertypeid":{"define":"fusertypeid","label":"","name":"fusertypeid","relation":"fusertypeid","rules":{"integer":true},"type":"Integer"}},"directDelete":true,"events":{"onSaveCommit":"saveCommit"},"idColumn":"fid","limit":20,"queryAction":"queryAccount","saveAction":"saveAccount","tableName":"account","url":"/flowapp/flowapp","xid":"mainData"});
}}); 
return __result;});