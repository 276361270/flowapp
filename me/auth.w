<?xml version="1.0" encoding="UTF-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" xid="window" class="window" component="$UI/system/components/justep/window/window" design="device:m;">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;left:321px;top:462px;" onLoad="modelLoad"><div component="$UI/system/components/justep/data/data" autoLoad="true" xid="data" idColumn="id" autoNew="false" limit="-1" confirmRefresh="false" confirmDelete="false">
   <column name="id" type="String" xid="xid3"></column>
   <column name="fileName" type="String" xid="column1"></column>
   <data xid="default6">[]</data></div>
  <div component="$UI/system/components/justep/data/baasData" autoLoad="true" xid="baasData" queryAction="queryAuthaccount" saveAction="saveAuthaccount" url="/flowapp/flowapp" tableName="authaccount" idColumn="fid" onBeforeRefresh="baasDataBeforeRefresh" autoNew="false"><column label="fid" name="fid" type="String" xid="default12"></column>
  <column label="faccountID" name="faccountID" type="String" xid="default13"></column>
  <column label="城市" name="fcity" type="String" xid="default14"></column>
  <column label="座机电话" name="fphoneTel" type="String" xid="default15"></column>
  <column label="faddress" name="faddress" type="String" xid="default16"></column>
  <column label="fmphone" name="fmphone" type="String" xid="default17"></column>
  <column label="ffoxtel" name="ffoxtel" type="String" xid="default18"></column>
  <column label="fimg0" name="fimg0" type="String" xid="default19"></column>
  <column label="fimg1" name="fimg1" type="String" xid="default20"></column>
  <column label="fimg2" name="fimg2" type="String" xid="default21"></column></div></div> 
<div component="$UI/system/components/justep/panel/panel" class="x-panel x-full" xid="panel1" style="background-color:#F2F2F2;">
   <div class="x-panel-top" xid="top1"><div component="$UI/system/components/justep/titleBar/titleBar" class="x-titlebar" xid="titleBar1">
   <div class="x-titlebar-left" xid="left1"><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-only-icon" label="返回" xid="backBtn" icon="icon-chevron-left" onClick="backBtnClick">
   <i xid="i1" class="icon-chevron-left"></i>
   <span xid="span2">返回</span></a></div>
   <div class="x-titlebar-title" xid="title1"><span xid="span1"><![CDATA[账户认证]]></span></div>
   <div class="x-titlebar-right reverse" xid="right1"></div>
  </div></div>
   <div class="x-panel-content" xid="content1"><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label15" xid="labelEdit3">
   <label class="x-label" xid="label3"><![CDATA[电话]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="txt_phone"></input></div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label15" xid="labelEdit1">
   <label class="x-label" xid="label1"><![CDATA[传真]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="txt_fox"></input></div><div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label15" xid="labelEdit2">
   <label class="x-label" xid="label2"><![CDATA[城市]]></label>
   <input component="$UI/system/components/justep/input/input" class="form-control x-edit" xid="txt_city" bind-click="txt_cityClick" valueUpdateMode="input" dataType="String" placeHolder="点击选择城市"></input></div><div xid="div1"><p xid="p1" style="font-size:medium;"><![CDATA[公司地址]]></p></div>
  <textarea component="$UI/system/components/justep/textarea/textarea" xid="txt_address" placeHolder="公司详细地址。。。" class="form-control"></textarea>
<div xid="div2">
   <p xid="p2" style="font-size:medium;"><![CDATA[图片（公司营业执照，或者身份证照片）]]></p></div>
  <div component="$UI/system/components/justep/attachment/attachmentSimple" actionUrl="/baas/justep/attachment/simpleFileStore" xid="attachmentSimple" bind-ref='$model.data.ref("fileName")' compress="false">
   <div class="x-attachment" xid="div17">
    <div class="x-attachment-content x-card-border" xid="div18">
     <div class="x-doc-process" xid="div19">
      <div class="progress-bar x-doc-process-bar" role="progressbar" style="width:0%;" xid="progressBar2"></div></div> 
     <div data-bind="foreach:$attachmentItems" xid="div20">
      <div class="x-attachment-cell" xid="div21">
       <div class="x-attachment-item x-item-other" data-bind="click:$model.previewOrRemoveItem.bind($model),style:{backgroundImage:($model.previewPicture.bind($model,$object))()}" xid="div22">
        <a data-bind="visible:$model.$state.get() == 'remove'" class="x-remove-barget" xid="a2"></a></div> </div> </div> 
     <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload'" xid="div23">
      <div class="x-attachment-item x-item-upload" data-bind="visible:$state.get() == 'upload'" xid="div24"></div></div> 
     <div class="x-attachment-cell" data-bind="visible:$state.get() == 'upload' &amp;&amp; $attachmentItems.get().length &gt; 0" xid="div25">
      <div class="x-attachment-item x-item-remove" data-bind="click:changeState.bind($object,'remove')" xid="div26"></div></div> 
     <div style="clear:both;" xid="div27"></div></div> </div> </div><div component="$UI/system/components/justep/row/row" class="x-row" xid="row1">
   <div class="x-col" xid="col1"></div>
   <div class="x-col x-col-80" xid="col2"><a component="$UI/system/components/justep/button/button" class="btn btn-default btn-block" label="提交" xid="submitBtn" onClick="submitBtnClick">
   <i xid="i2"></i>
   <span xid="span5">提交</span></a></div>
   <div class="x-col" xid="col3"></div></div>
  </div>
   </div>
  <div component="$UI/system/components/justep/distpicker/distpicker2" class="x-popPicker" xid="distpicker" onOK="distpickerOK">
   <div class="x-popPicker-overlay" xid="div14"></div>
   <div class="x-popPicker-content" xid="div15">
    <div class="x-poppicker-header" xid="div16">
     <button class="btn btn-default x-btn-ok" xid="button1">确定</button></div> </div> </div>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog"></span></div>