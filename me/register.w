<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;" style="width: 100%; height: 100%;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:75px;top:9px;" onLoad="modelLoad"><div component="$UI/system/components/justep/data/baasData" autoLoad="false" xid="userAccount" queryAction="queryAccount_register" saveAction="saveAccount" url="/flowapp/flowapp" tableName="account" idColumn="fid"><column label="主键" name="fid" type="String" xid="default1"></column>
  <column label="昵称" name="fname" type="String" xid="default2"></column>
  <column label="电话同时也是账户" name="fphone" type="String" xid="default3"></column>
  <column label="密码" name="fpasswd" type="String" xid="default7"></column>
  <column label="qq号码选填" name="fqq" type="String" xid="default8"></column>
  <column label="注册时间" name="fcreatetime" type="DateTime" xid="default9"></column>
  <column label="fremart" name="fremart" type="String" xid="default10"></column>
  <column label="fusertypeid" name="fusertypeid" type="String" xid="default11"></column></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="userType" idColumn="fid"><column label="主键" name="fid" type="Integer" xid="xid1"></column>
  <column label="类型名称" name="fname" type="String" xid="xid2"></column>
  <data xid="default4">[{&quot;fid&quot;:1,&quot;fname&quot;:&quot;物流&quot;},{&quot;fid&quot;:2,&quot;fname&quot;:&quot;厂家&quot;},{&quot;fid&quot;:3,&quot;fname&quot;:&quot;商户&quot;}]</data></div></div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1"> 
    <div class="x-panel-top" xid="top1" height="48"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1" title="用户注册" style="height:100%;"> 
        <div class="x-titlebar-left" xid="div1"> 
          <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" xid="button1" icon="icon-chevron-left" onClick="buttonCloseClick"> 
            <i xid="i1" class="icon-chevron-left" />  
            <span xid="span1"></span> 
          </a> 
        </div>  
        <div class="x-titlebar-title" xid="div2">用户注册</div>  
        <div class="x-titlebar-right reverse" xid="div3" /> 
      </div> 
    </div>  
    <div class="x-panel-content" xid="content1" style="font-size:18px;"> 
       
    <div component="$UI/system/components/justep/controlGroup/controlGroup" class="x-control-group" title="title" xid="controlGroup3"> 
        <input component="$UI/system/components/justep/input/input" class="form-control" xid="txt_phone" placeHolder="手机号码" style="font-size:16px;" onBlur="txt_phoneBlur"/>
        <div xid="div5" class="borde" />  
            <input component="$UI/system/components/justep/input/input" class="form-control" xid="txt_name" placeHolder="显示名称" style="font-size:16px;height:100%;width:100%;" onBlur="txt_phoneBlur"/>
        <div xid="div8" class="borde" />  
        <input component="$UI/system/components/justep/input/password" class="form-control" xid="txt_pass" placeHolder="6-12位字母数字组合密码" style="font-size:16px;" bind-blur="txt_passBlur"/>
        <div xid="div6" class="borde" />  
        <input component="$UI/system/components/justep/input/password" class="form-control" xid="txt_surepass" placeHolder="确认密码" style="font-size:16px;" bind-blur="suerpassTouchend"/>
        <div xid="div9" class="borde">
  </div>  
        <select component="$UI/system/components/justep/select/select" bind-optionsCaption="注册类型" class="form-control" xid="slt_regtype" bind-options="userType" bind-optionsValue="fid" bind-optionsLabel="fname" optionsAutoLoad="false"></select><div xid="div7" class="borde"></div><input component="$UI/system/components/justep/input/input" class="form-control" xid="txt_qq" placeHolder="腾讯QQ" style="height:100%;" bind-text=' '></input><div xid="div4" class="borde"></div><a component="$UI/system/components/justep/button/button" class="btn btn-default" xid="btn_getcode" style="width:100%;font-size:16px;margin-top:16px;" label="免费获取验证码" onClick="sendsmsButton">
   <i xid="i2"></i>
   <span xid="span2">免费获取验证码</span></a><div xid="div6" class="borde" style="margin-top:-10px;" />  
        <input component="$UI/system/components/justep/input/input" class="form-control" xid="txt_surecode" placeHolder="短信验证码" style="font-size:16px;margin-top:26px;" />
        <div xid="div9" class="borde" />  
        <a component="$UI/system/components/justep/button/button" class="btn btn-default" label="注册" xid="btn_reg" style="font-size:20px;width:100%;margin-top:40px;" onClick="registerButtom"> 
          <i xid="i5" />  
          <span xid="span5">注册</span> 
        </a>  
        <div xid="div10" class="name" style="margin-top:10px;">点击注册表示同意
          <a>用户服务协议</a>
        </div> 
      </div></div>  
    <div class="x-panel-bottom" xid="bottom1" /> 
  </div></div>