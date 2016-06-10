<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:385px;top:582px;"><div component="$UI/system/components/justep/data/baasData" autoLoad="false" xid="login" queryAction="queryAccount_login" saveAction="saveAccount" url="/flowapp/flowapp" tableName="account" idColumn="fid"><column label="主键" name="fid" type="String" xid="default9"></column>
  <column label="昵称" name="fname" type="String" xid="default10"></column>
  <column label="电话同时也是账户" name="fphone" type="String" xid="default11"></column>
  <column label="密码" name="fpasswd" type="String" xid="default12"></column>
  <column label="qq号码选填" name="fqq" type="String" xid="default13"></column>
  <column label="注册时间" name="fcreatetime" type="DateTime" xid="default14"></column>
  <column label="fremart" name="fremart" type="String" xid="default15"></column>
  <column label="fusertypeid" name="fusertypeid" type="String" xid="default16"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1" style="background-color:#F2F2F2;">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1">
   <div class="x-titlebar-left" xid="left1"></div>
   <div class="x-titlebar-title" xid="title1"><span xid="span1" style="font-weight:normal;"><![CDATA[登录]]></span></div>
   <div class="x-titlebar-right reverse" xid="right1"></div></div></div>
   <div class="x-panel-content" xid="content1"><ul xid="ul2">
    <li class="list-group-item" xid="li1">
     
     
     <div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup4">
   <span class="input-group-addon" xid="span4"><![CDATA[账号]]></span><input type="text" class="form-control" component="$UI/system/components/justep/input/input" xid="txt_phone" placeHolder="注册手机号码"></input></div></li> 
    <li class="list-group-item" xid="li1">
     
     
     <div class="input-group" component="$UI/system/components/bootstrap/inputGroup/inputGroup" xid="inputGroup3">
   <span class="input-group-addon" xid="span5"><![CDATA[密码]]></span>
  <input component="$UI/system/components/justep/input/password" class="form-control" xid="txt_pass" placeHolder="请输入密码" bind-blur="txt_passBlur"></input></div></li> 
    </ul><div class="spacing list-group-item" xid="div1">
    
    
    <span component="$UI/system/components/justep/button/toggle" class="x-toggle x-toggle-xs pull-right" xid="toggle2"></span><span xid="span6"><![CDATA[自动登录]]></span></div>
  <div xid="div5" class="list-group-item">
   <a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="登录" xid="btn_login" onClick="btn_loginClick">
    <i xid="i1"></i>
    <span xid="span2">登录</span></a> </div>
  <div xid="div6" class="list-group-item" align="center">
   <a component="$UI/system/components/justep/button/button" class="btn btn-link" label="注册账号" xid="registerBtn" onClick="registerBtnClick">
    <i xid="i2"></i>
    <span xid="span7">注册账号</span></a> 
   <i xid="i4" class="icon-ios7-information-empty"></i>
   <a component="$UI/system/components/justep/button/button" class="btn btn-link" label="忘记密码" xid="forgetBtn">
    <i xid="i3"></i>
    <span xid="span8">忘记密码</span></a> </div></div>
   </div>
  </div>