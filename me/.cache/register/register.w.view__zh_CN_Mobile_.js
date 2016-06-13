window.__justep.__ResourceEngine.loadCss([{url: '/v_fdaca7fd01cb4fbdad5948127f14fad0l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_950f03f9cc9b4273928d7186789ca19al_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/common/css/scrollable,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_7b8701c5b7874cb6b8faae3f863b005bl_zh_CNs_d_m/system/core.min.js','/v_b0c3285fe1a7472293245a67fd17d930l_zh_CNs_d_m/system/common.min.js','/v_2e98fbcd8b024709af7654e0c0999c67l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
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
