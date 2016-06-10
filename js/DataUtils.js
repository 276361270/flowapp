/*! 
 * WeX5 v3 (http://www.justep.com) 
 * Copyright 2015 Justep, Inc.
 * Licensed under Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0) 
 */
define(function(require) {
	var justep = require("$UI/system/lib/justep");
	var bassurl = "/flowapp/flowapp";
	var DataUtils = function() {
		
	};
	//加载远程ajax返回json数据
	DataUtils.load = function(action, params, success) {
		// 发送请求
		justep.Baas.sendRequest({
			"url" : bassurl, // servlet请求地址
			"action" : action, // action
			"params" : params, // action对应的参数
			"success" : success,
			"error" : function(msg, xhr) {
				console.log(action+"调用错误"+msg+"parms"+JSON.stringify(params));	
			}
		// 请求成功后的回调方法
		});
	};
	//远程ajax返回数据加载到comp 组件上
	DataUtils.loadToComp=function(action, params,idx,datacomp)
	{
		DataUtils.load(action,params,function(resultData){
			datacomp.newData({
				index : idx,
				defaultValues : [ resultData ]
			});
		});
	};
	
	DataUtils.genData=function(comp,json,idx){
		// 生成订单数据
		var orderRows = comp.newData({
			index : idx,
			defaultValues : [json]
		});
		return orderRows;
	};
	



	return DataUtils;
});
