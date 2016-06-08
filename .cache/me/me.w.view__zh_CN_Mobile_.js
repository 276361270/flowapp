window.__justep.__ResourceEngine.loadCss([{url: '/v_7dc11247fb5949ab8b47871a769dd65el_zh_CNs_d_m/system/components/bootstrap.min.css', include: '$model/system/components/bootstrap/lib/css/bootstrap,$model/system/components/bootstrap/lib/css/bootstrap-theme'},{url: '/v_329523830f7c49f48a89db709511cadal_zh_CNs_d_m/system/components/comp.min.css', include: '$model/system/components/justep/input/css/datePickerPC,$model/system/components/justep/messageDialog/css/messageDialog,$model/system/components/justep/input/css/datePicker,$model/system/components/justep/row/css/row,$model/system/components/justep/attachment/css/attachment,$model/system/components/justep/common/css/scrollable,$model/system/components/justep/barcode/css/barcodeImage,$model/system/components/bootstrap/dropdown/css/dropdown,$model/system/components/justep/dataTables/css/dataTables,$model/system/components/justep/contents/css/contents,$model/system/components/justep/common/css/forms,$model/system/components/justep/locker/css/locker,$model/system/components/justep/menu/css/menu,$model/system/components/justep/scrollView/css/scrollView,$model/system/components/justep/loadingBar/loadingBar,$model/system/components/justep/dialog/css/dialog,$model/system/components/justep/bar/css/bar,$model/system/components/justep/popMenu/css/popMenu,$model/system/components/justep/lib/css/icons,$model/system/components/justep/toolBar/css/toolBar,$model/system/components/justep/popOver/css/popOver,$model/system/components/justep/panel/css/panel,$model/system/components/bootstrap/carousel/css/carousel,$model/system/components/justep/wing/css/wing,$model/system/components/bootstrap/scrollSpy/css/scrollSpy,$model/system/components/justep/titleBar/css/titleBar,$model/system/components/justep/numberSelect/css/numberList,$model/system/components/justep/list/css/list,$model/system/components/justep/dataTables/css/dataTables'}]);window.__justep.__ResourceEngine.loadJs(['/v_0d5a660ad8e948bb8c793697b92ebc62l_zh_CNs_d_m/system/core.min.js','/v_7d224972394a456fb95fe511ec816a84l_zh_CNs_d_m/system/common.min.js','/v_dc8d2cb6336946c8a32bd0e0e9d7049fl_zh_CNs_d_m/system/components/comp.min.js']);define(function(require){
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
