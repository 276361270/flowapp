<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" component="$UI/system/components/justep/window/window" design="device:mobile"
  xid="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="top:-2px;left:65px;height:auto;">
    <div component="$UI/system/components/justep/data/baasData" xid="mainData"
      directDelete="true" autoLoad="false" idColumn="fid"
      onSaveCommit="saveCommit"
      queryAction="queryLogistics" tableName="logistics" url="/flowapp/flowapp" saveAction="saveLogistics" autoNew="true">
      <column label="运输方式" name="ftransport" type="String"
        xid=""/>
      <column label="装货城市" name="fstartCity" type="String"
        xid=""/>
      <column label="装货地址" name="fstartAddress" type="String"
        xid=""/>
      <column label="叫车电话" name="fstartPhone" type="String"
        xid=""/>
      <column label="查询电话" name="fstartTel" type="String"
        xid=""/>
      <column label="终点站" name="fendCity" type="String"
        xid=""/>
      <column label="提货地址" name="fendAddress" type="String"
        xid=""/>
      <column label="联系电话" name="fendPhone" type="String"
        xid=""/>
      <column label="中转" name="ftransfer" type="String"
        xid=""/>
      <column label="报价" name="fprice" type="Double"
        xid=""/>
      <column label="报价单位" name="fpriceType" type="String"
        xid=""/>
      <column label="备注信息" name="freMark" type="String"
        xid=""/>
    	<rule xid="rule1">
	   <col name="fID" xid="ruleCol1">
	    <calculate xid="calculate1">
	     <expr xid="default2">justep.UUID.createUUID()</expr></calculate> </col> </rule>
	   </div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="transport" idColumn="transtype"><column label="运输类型" name="transtype" type="String" xid="xid1"></column>
  <data xid="default1">[{&quot;transtype&quot;:&quot;汽运&quot;},{&quot;transtype&quot;:&quot;船运&quot;},{&quot;transtype&quot;:&quot;铁路&quot;},{&quot;transtype&quot;:&quot;空运&quot;},{&quot;transtype&quot;:&quot;其他&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="pricetype" idColumn="type"><column label="运费单位" name="type" type="String" xid="xid2"></column>
  <data xid="default3">[{&quot;type&quot;:&quot;元/吨&quot;},{&quot;type&quot;:&quot;元/立&quot;},{&quot;type&quot;:&quot;其他&quot;}]</data></div></div>  
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
        <div class="x-titlebar-right reverse"><a component="$UI/system/components/justep/button/button" class="btn btn-default" label="保存" xid="btn_add" onClick="{operation:'mainData.save'}">
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
            <select component="$UI/system/components/justep/select/select" class="form-control" xid="slt_transtype" bind-options="transport" bind-optionsValue="transtype" bind-optionsLabel="transtype" bind-optionsCaption="请选择..." bind-ref='$model.mainData.ref("ftransport")'></select></div> 
        </div>
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label20"> 
          <label class="x-label left" bind-text="$model.mainData.label('fstartCity')"/>  
          <div class="x-edit">
            <input class="form-control" component="$UI/system/components/justep/input/input"
              data="mainData" bind-ref="mainData.ref('fstartCity')"/>
          </div> 
        </div>
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label20"> 
          <label class="x-label left" bind-text="$model.mainData.label('fstartAddress')"/>  
          <div class="x-edit">
            <input class="form-control" component="$UI/system/components/justep/input/input"
              data="mainData" bind-ref="mainData.ref('fstartAddress')"/>
          </div> 
        </div>
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label20"> 
          <label class="x-label left" bind-text="$model.mainData.label('fstartPhone')"/>  
          <div class="x-edit">
            <input class="form-control" component="$UI/system/components/justep/input/input"
              data="mainData" bind-ref="mainData.ref('fstartPhone')"/>
          </div> 
        </div>
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label20"> 
          <label class="x-label left" bind-text="$model.mainData.label('fstartTel')"/>  
          <div class="x-edit">
            <input class="form-control" component="$UI/system/components/justep/input/input"
              data="mainData" bind-ref="mainData.ref('fstartTel')"/>
          </div> 
        </div>
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label20"> 
          <label class="x-label left" bind-text="$model.mainData.label('fendCity')"/>  
          <div class="x-edit">
            <input class="form-control" component="$UI/system/components/justep/input/input"
              data="mainData" bind-ref="mainData.ref('fendCity')"/>
          </div> 
        </div>
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label20"> 
          <label class="x-label left" bind-text="$model.mainData.label('fendAddress')"/>  
          <div class="x-edit">
            <input class="form-control" component="$UI/system/components/justep/input/input"
              data="mainData" bind-ref="mainData.ref('fendAddress')"/>
          </div> 
        </div>
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label20"> 
          <label class="x-label left" bind-text="$model.mainData.label('fendPhone')"/>  
          <div class="x-edit">
            <input class="form-control" component="$UI/system/components/justep/input/input"
              data="mainData" bind-ref="mainData.ref('fendPhone')"/>
          </div> 
        </div>
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label20"> 
          <label class="x-label left" bind-text="$model.mainData.label('ftransfer')"/>  
          <div class="x-edit">
            <input class="form-control" component="$UI/system/components/justep/input/input"
              data="mainData" bind-ref="mainData.ref('ftransfer')"/>
          </div> 
        </div>
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label20"> 
          <label class="x-label left" bind-text="$model.mainData.label('fprice')"/>  
          <div class="x-edit">
            <input class="form-control" component="$UI/system/components/justep/input/input"
              data="mainData" bind-ref="mainData.ref('fprice')"/>
          </div> 
        </div>
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label20"> 
          <label class="x-label left" bind-text="$model.mainData.label('fpriceType')"/>  
          <div class="x-edit">
            <select component="$UI/system/components/justep/select/select" bind-optionsCaption="请选择..." class="form-control" xid="slt_pricetype" bind-options="pricetype" bind-optionsValue="type" bind-optionsLabel="type" bind-ref='$model.mainData.ref("fpriceType")'></select></div> 
        </div>
        <div component="$UI/system/components/justep/labelEdit/labelEdit" class="x-label-edit x-label20"> 
          <label class="x-label left" bind-text="$model.mainData.label('freMark')"/>  
          <div class="x-edit">
            <textarea class="form-control" component="$UI/system/components/justep/textarea/textarea"
              data="mainData" bind-ref="mainData.ref('freMark')"/> 
          </div> 
        </div>
      </div> 
    </div> 
  </div> 
</div>