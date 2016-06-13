<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:mobile"
  xid="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:-2px;left:65px;height:auto;" onLoad="modelLoad" onModelConstruct="modelModelConstruct" onParamsReceive="modelParamsReceive">
    <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="transport" idColumn="transtype"><column label="运输类型" name="transtype" type="String" xid="xid1"></column>
  <data xid="default1">[{&quot;transtype&quot;:&quot;汽运&quot;},{&quot;transtype&quot;:&quot;船运&quot;},{&quot;transtype&quot;:&quot;铁路&quot;},{&quot;transtype&quot;:&quot;空运&quot;},{&quot;transtype&quot;:&quot;其他&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="pricetype" idColumn="type"><column label="运费单位" name="type" type="String" xid="xid2"></column>
  <data xid="default3">[{&quot;type&quot;:&quot;元/吨&quot;},{&quot;type&quot;:&quot;元/立&quot;},{&quot;type&quot;:&quot;其他&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/baasData" autoLoad="true" xid="mainData" queryAction="queryLogistics" saveAction="saveLogistics" url="/flowapp/flowapp" tableName="logistics" idColumn="fid"><column label="主键" name="fid" type="String" xid="default17"></column>
  <column label="账户" name="faccountID" type="String" xid="default18"></column>
  <column label="运输方式" name="ftransport" type="String" xid="default19"></column>
  <column label="装货城市" name="fstartCity" type="String" xid="default20"></column>
  <column label="装货地址" name="fstartAddress" type="String" xid="default21"></column>
  <column label="叫车电话" name="fstartPhone" type="String" xid="default22"></column>
  <column label="查询电话" name="fstartTel" type="String" xid="default23"></column>
  <column label="终点站" name="fendCity" type="String" xid="default24"></column>
  <column label="提货地址" name="fendAddress" type="String" xid="default25"></column>
  <column label="联系电话" name="fendPhone" type="String" xid="default26"></column>
  <column label="中转" name="ftransfer" type="String" xid="default27"></column>
  <column label="报价" name="fprice" type="Double" xid="default28"></column>
  <column label="报价单位" name="fpriceType" type="String" xid="default29"></column>
  <column label="备注信息" name="freMark" type="String" xid="default30"></column></div></div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"> 
    <div class="x-panel-top"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="添加路线"
        class="x-titlebar"> 
        <div class="x-titlebar-left"> 
          <a component="$UI/system/components/justep/button/button" label=""
            class="btn btn-link btn-only-icon" icon="icon-chevron-left" onClick="{operation:'window.close'}"
            xid="backBtn"> 
            <i class="icon-chevron-left"/>  
            <span/> 
          </a> 
        </div>  
        <div class="x-titlebar-title">添加路线</div>  
        <div class="x-titlebar-right reverse"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="保存" xid="btn_add" onClick="btn_addClick">
   <i xid="i1"></i>
   <span xid="span1">保存</span></a>
  </div> 
      </div> 
    </div>  
    <div class="x-panel-content"> 
      <div component="$UI/system/components/justep/controlGroup/controlGroup"
        class="x-control-group" title="详细信息"> 
 
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label20"> 
          <label class="x-label left" bind-text="$model.mainData.label('ftransport')"/>  
          <div class="x-edit">
            <select component="$UI/system/components/justep/select/select" class="form-control" xid="slt_ftransport" bind-options="transport" bind-optionsValue="transtype" bind-optionsLabel="transtype" bind-ref='$model.transport.ref("transtype")'></select></div> 
        </div>
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label20"> 
          <label class="x-label left" bind-text="$model.mainData.label('fstartCity')"/>  
          <div class="x-edit">
            <input class="form-control" component="$UI/system/components/justep/input/input"
              data="mainData" xid="txt_fstartCity" bind-click="txt_cityClick" placeHolder="触摸选择城市" readonly="true"/>
              </div> 
        </div>
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label20"> 
          <label class="x-label left" bind-text="$model.mainData.label('fstartAddress')"/>  
          <div class="x-edit">
            <input class="form-control" component="$UI/system/components/justep/input/input"
              data="mainData" xid="txt_fstartAddress"/>
          </div> 
        </div>
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label20"> 
          <label class="x-label left" bind-text="$model.mainData.label('fstartPhone')"/>  
          <div class="x-edit">
            <input class="form-control" component="$UI/system/components/justep/input/input"
              data="mainData" xid="txt_fstartPhone" pattern="/^0?1[3|4|5|7|8][0-9]\d{8}$/"/>
          </div> 
        </div>
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label20"> 
          <label class="x-label left" bind-text="$model.mainData.label('fstartTel')"/>  
          <div class="x-edit">
            <input class="form-control" component="$UI/system/components/justep/input/input"
              data="mainData" xid="txt_fstartTel"/>
          </div> 
        </div>
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label20"> 
          <label class="x-label left" bind-text="$model.mainData.label('fendCity')"/>  
          <div class="x-edit">
            <input class="form-control" component="$UI/system/components/justep/input/input"
              data="mainData" placeHolder="触摸选择城市" xid="txt_fendCity" bind-click="txt_endcityClick" readonly="true"/>
          </div> 
        </div>
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label20"> 
          <label class="x-label left" bind-text="$model.mainData.label('fendAddress')"/>  
          <div class="x-edit">
            <input class="form-control" component="$UI/system/components/justep/input/input"
              data="mainData" xid="txt_fendAddress"/>
          </div> 
        </div>
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label20"> 
          <label class="x-label left" bind-text="$model.mainData.label('fendPhone')"/>  
          <div class="x-edit">
            <input class="form-control" component="$UI/system/components/justep/input/input"
              data="mainData" xid="txt_fendPhone" pattern="/^0?1[3|4|5|7|8][0-9]\d{8}$/"/>
          </div> 
        </div>
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label20"> 
          <label class="x-label left" bind-text="$model.mainData.label('ftransfer')"/>  
          <div class="x-edit">
            <input class="form-control" component="$UI/system/components/justep/input/input"
              data="mainData" valueUpdateMode="input" xid="txt_ftransfer"/>
          </div> 
        </div>
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label20"> 
          <label class="x-label left" bind-text="$model.mainData.label('fprice')"/>  
          <div class="x-edit">
            <input class="form-control" component="$UI/system/components/justep/input/input"
              data="mainData" xid="txt_fprice" dataType="Integer"/>
          </div> 
        </div>
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label20"> 
          <label class="x-label left" bind-text="$model.mainData.label('fpriceType')"/>  
          <div class="x-edit">
            <select component="$UI/system/components/justep/select/select" class="form-control" xid="slt_fpriceType" bind-options="pricetype" bind-optionsValue="type" bind-optionsLabel="type" bind-ref='$model.pricetype.ref("type")'></select></div> 
        </div>
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label20"> 
          <label class="x-label left" bind-text="$model.mainData.label('freMark')"/>  
          <div class="x-edit">
            <textarea class="form-control" component="$UI/system/components/justep/textarea/textarea"
              data="mainData" xid="txt_freMark"/> 
          </div> 
        </div>
      </div> 
    </div> 
  </div> 
<div component="$UI/system/components/justep/distpicker/distpicker2" class="x-popPicker" xid="distpicker" onOK="distpickerOK">
   <div class="x-popPicker-overlay" xid="div1"></div>
   <div class="x-popPicker-content" xid="div2">
    <div class="x-poppicker-header" xid="div3">
     <button class="btn btn-default x-btn-ok" xid="button1">确定</button></div> </div> </div>
  <span component="$UI/system/components/justep/messageDialog/messageDialog" xid="messageDialog" type="YesNo" onYes="messageDialogYes" onNo="messageDialogNo"></span></div>