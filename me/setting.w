<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window"
  design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:449px;left:310px;" onLoad="modelLoad"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="userData" idColumn="account"><column label="账户" name="account" type="String" xid="xid1"></column>
  <column label="昵称" name="name" type="String" xid="xid2"></column>
  <column label="地址" name="address" type="String" xid="xid3"></column>
  <column label="类型" name="usertype" type="String" xid="xid4"></column>
  <data xid="default1">[{&quot;account&quot;:&quot;15340555558&quot;,&quot;name&quot;:&quot;王端&quot;,&quot;address&quot;:&quot;重庆市大学城协信城立方&quot;,&quot;usertype&quot;:&quot;物流&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/baasData" autoLoad="false" xid="baasData" queryAction="queryAuthaccount" saveAction="saveAuthaccount" url="/flowapp/flowapp" tableName="authaccount" idColumn="fid" onBeforeRefresh="baasDataBeforeRefresh"><column label="fid" name="fid" type="String" xid="default12"></column>
  <column label="城市" name="fcity" type="String" xid="default14"></column>
  <column label="座机电话" name="fphoneTel" type="String" xid="default15"></column>
  <column label="faddress" name="faddress" type="String" xid="default16"></column>
  <column label="fmphone" name="fmphone" type="String" xid="default17"></column>
  <column label="ffoxtel" name="ffoxtel" type="String" xid="default18"></column>
  <column label="fimg0" name="fimg0" type="String" xid="default19"></column>
  <column label="fimg1" name="fimg1" type="String" xid="default20"></column>
  <column label="fimg2" name="fimg2" type="String" xid="default21"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"
    xid="panel1" style="background-color:#F2F2F2;"> 
    <div class="x-panel-top" xid="top1">
  <div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1">
   <div class="x-titlebar-left" xid="left1"></div>
   <div class="x-titlebar-title" xid="title1"><span xid="span4"><![CDATA[设置]]></span></div>
   <div class="x-titlebar-right reverse" xid="right1"></div>
  </div></div>  
    <div class="x-panel-content" xid="content1"> 
      <div component="$UI/system/components/justep/panel/panel" class="panel panel-default x-card"
        xid="panel3"> 
        <ul xid="ul1" class="list-group"> 
        	 
          <li class="list-group-item" xid="li1"> 
            <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label15" xid="labelEdit2">
   <label class="x-label" xid="label2" bind-text='$model.userData.label("account")'><![CDATA[]]></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="txt_phone" bind-ref='$model.userData.ref("account")'></div></div></li>  
          <li class="list-group-item" xid="li1"> 
            <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label15" xid="labelEdit3">
   <label class="x-label" xid="label3" bind-text='$model.userData.label("name")'></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output4" bind-ref='$model.userData.ref("name")'></div></div></li>  
          <li class="list-group-item" xid="li1"> 
            <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label15" xid="labelEdit4">
   <label class="x-label" xid="label4" bind-text='$model.userData.label("address")'></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output5" bind-text=' $model.baasData.val("fcity")+ $model.baasData.val("faddress")'></div></div></li> 
   
            <li class="list-group-item" xid="li1"> 
            <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label15" xid="labelEdit4">
   <label class="x-label" xid="label4" bind-text='$model.userData.label("usertype")'></label>
   <div component="$UI/system/components/justep/output/output" class="x-output x-edit" xid="output5" bind-ref='$model.userData.ref("usertype")'></div></div></li> 
        </ul> 
      </div>  
      <div class="panel panel-default x-card" component="$UI/system/components/bootstrap/panel/panel" xid="logistic_panel">
   
   <a component="$UI/system/components/justep/button/button" class="btn btn-link center-block" label="添加物流路线" xid="btn_logtics" onClick="btn_logticsClick">
   <i xid="i1"></i>
   <span xid="span1">添加物流路线</span></a></div><div class="panel panel-default x-card" component="$UI/system/components/bootstrap/panel/panel" xid="panel6">
   
   <a component="$UI/system/components/justep/button/button" class="btn btn-link" label="认证" xid="btn_auth" style="width:100%;" onClick="btn_authClick">
   <i xid="i5"></i>
   <span xid="span6">认证</span></a></div><div component="$UI/system/components/justep/panel/panel" class="panel panel-default x-card"
        xid="panel2"> 
        <a component="$UI/system/components/justep/button/button" class="btn btn-link center-block" label="退出" xid="btn_exit" onClick="cleanUser">
   <i xid="i4"></i>
   <span xid="span5">退出</span></a></div>
    </div>  
    </div>
</div>