window.__justep.__ResourceEngine.loadCss([{url: '/v_790d788ad7ca45a5ba4c5d59be146bf3l_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_3be915bc008648f9945280babcdd3f74l_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/common/css/scrollable,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_cb21bfb599b245e18217df68c7771e98l_zh_CNs_d_m/system/components/comp2.min.js','/v_c34af949733448519ec218a47bc3c47bl_zh_CNs_d_m/system/core.min.js','/v_a41e406658034222893bfdbb1265dc47l_zh_CNs_d_m/system/common.min.js','/v_327bde5d1fc54e2d94634eb5ccb4cc78l_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
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
