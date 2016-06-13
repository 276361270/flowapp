<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" class="main13" component="$UI/system/components/justep/window/window"
  design="device:mobile;" xid="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="height:auto;top:339px;left:191px;"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="cashType" idColumn="type">
   <column label=" 收款方式" name="type" type="String" xid="column1"></column>
   <data xid="default5">[{&quot;type&quot;:&quot;代收款&quot;},{&quot;type&quot;:&quot;不代收&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/data" autoLoad="true" xid="transport" idColumn="transtype">
   <column label="运输类型" name="transtype" type="String" xid="column1"></column>
   <data xid="default7">[{&quot;transtype&quot;:&quot;汽运&quot;},{&quot;transtype&quot;:&quot;船运&quot;},{&quot;transtype&quot;:&quot;铁路&quot;},{&quot;transtype&quot;:&quot;空运&quot;},{&quot;transtype&quot;:&quot;其他&quot;}]</data></div>
  <div component="$UI/system/components/justep/data/baasData" autoLoad="true" xid="logictisData" queryAction="queryLogistics" saveAction="saveLogistics" url="/flowapp/flowapp" tableName="logistics" idColumn="fid" onBeforeRefresh="logictisDataBeforeRefresh" limit="15"><column label="主键" name="fid" type="String" xid="default18"></column>
  <column label="账户" name="faccountID" type="String" xid="default19"></column>
  <column label="运输方式" name="ftransport" type="String" xid="default20"></column>
  <column label="装货城市" name="fstartCity" type="String" xid="default21"></column>
  <column label="装货地址" name="fstartAddress" type="String" xid="default22"></column>
  <column label="叫车电话" name="fstartPhone" type="String" xid="default23"></column>
  <column label="查询电话" name="fstartTel" type="String" xid="default24"></column>
  <column label="终点站" name="fendCity" type="String" xid="default25"></column>
  <column label="提货地址" name="fendAddress" type="String" xid="default26"></column>
  <column label="联系电话" name="fendPhone" type="String" xid="default27"></column>
  <column label="中转" name="ftransfer" type="String" xid="default28"></column>
  <column label="报价" name="fprice" type="Double" xid="default29"></column>
  <column label="报价单位" name="fpriceType" type="String" xid="default30"></column>
  <column label="备注信息" name="freMark" type="String" xid="default31"></column></div></div>  
  <div component="$UI/system/components/justep/distpicker/distpicker2" class="x-popPicker" xid="distpicker" onOK="distpickerOK">
   <div class="x-popPicker-overlay" xid="div2"></div>
   <div class="x-popPicker-content" xid="div8">
    <div class="x-poppicker-header" xid="div9">
     <button class="btn btn-default x-btn-ok" xid="button2">确定</button></div> </div> </div><div component="$UI/system/components/justep/popOver/popOver" class="x-popOver"
    xid="sortingPopOver" anchor="sortingBtn" direction="left-bottom" opacity="0.7"
    dismissible="true"> 
    <div class="x-popOver-overlay" xid="div4"/>
    <div class="x-popOver-content tb-sorting" xid="div11"> 
      <div component="$UI/system/components/justep/list/list" class="x-list"
        data="transport" bind-click="sortingListClick" xid="conditionList" dataItemAlias="conditionRow" style="height:100%;"> 
        <ul class="x-list-template" xid="ul1"> 
          <li class="list-group-item" bind-css="{'current':conditionRow.val('fState')==1}"> 
            <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-xs btn-only-icon pull-right tb-liBtn"
              label="button" icon="icon-checkmark"> 
              <i xid="i4" class="icon-checkmark text-danger"/>  
              <span xid="span29"/> 
            </a>  
            <span bind-text=' val("transtype")'/> 
          </li> 
        </ul> 
      </div> 
    </div> 
  </div>  
  <div component="$UI/system/components/justep/popOver/popOver" class="x-popOver"
    xid="screeningPopOver" direction="right-bottom" opacity="0.7" anchor="listStyleBtn"
    dismissible="true"> 
    <div class="x-popOver-overlay" xid="div4"/>  
    <div class="x-popOver-content tb-sorting"> 
      <div>
        <div class="text-center panel-body" xid="div33"> 
          <input component="$UI/system/components/justep/input/input" class="form-control" xid="input3" readonly="true"></input></div>  
        </div> 
    </div> 
  </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full x-card x-has-iosstatusbar"> 
    <div class="x-panel-top" height="88"> 
      <div component="$UI/system/components/justep/titleBar/titleBar" title="查找路线" class="x-titlebar" xid="titleBar1">
   <div class="x-titlebar-left" xid="left1">
    </div> 
   <div class="x-titlebar-title" xid="title1">查找路线</div>
   <div class="x-titlebar-right reverse" xid="right1">
    </div> </div><div> 
        <div class="col-xs-10 pull-left tb-nopadding"> 
          <div component="$UI/system/components/justep/button/buttonGroup"
            class="btn-group btn-group-justified" tabbed="true" xid="buttonGroup1"
            style="height:40px;"> 
            <a component="$UI/system/components/justep/button/button" class="btn btn-link"
              label="运输方式" xid="sortingBtn" icon="icon-arrow-down-b" onClick="sortingBtnClick"> 
              <i xid="i13" class="icon-arrow-down-b text-danger"/>  
              <span class="text-danger">运输方式</span> 
            </a>  
            <a component="$UI/system/components/justep/button/button" class="btn btn-link"
              label="出发城市" xid="btn_startCity" icon="icon-arrow-down-b" onClick="btn_startCityClick"> 
              <i xid="i1" class="icon-arrow-down-b"/>  
              <span xid="span1">出发城市</span> 
            </a>  
            <a component="$UI/system/components/justep/button/button" class="btn btn-link"
              label="到达城市" icon="icon-arrow-down-b" xid="screeningBtn" onClick="screeningBtnClick"> 
              <i xid="i8" class="icon-arrow-down-b"/>  
              <span xid="span7">到达城市</span> 
            </a> 
          </div> 
        </div>  
        <div class="col-xs-2 pull-left text-center tb-nopadding"> 
          <div component="$UI/system/components/justep/button/buttonGroup"
            class="btn-group btn-group-justified" tabbed="true" xid="buttonGroup2"> 
            <a component="$UI/system/components/justep/button/button" class="btn btn-link"
              xid="btn_cash" icon="icon-android-search" onClick="btn_cashClick" label="全部"> 
              <i xid="i2" class="icon-android-search"/>  
              <span xid="span2">全部</span> 
            </a> 
          </div> 
        </div> 
      </div> 
    </div>  
    <div xid="content" class="x-panel-content tb-trans"> 
      <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
        active="0" xid="pages"  wrap="true" swipe="false" slidable="false"> 
        <div class="x-contents-content x-scroll-view " xid="oneColList"> 
          <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView" xid="scrollView1">
   <div class="x-content-center x-pull-down container" xid="div5">
    <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i7"></i>
    <span class="x-pull-down-label" xid="span15">下拉刷新...</span></div> 
   <div class="x-scroll-content" xid="div6">
    <div component="$UI/system/components/justep/list/list" class="x-list" xid="list1" data="logictisData" limit="6">
     <ul class="x-list-template" xid="listTemplateUl1">
      <li xid="li1" class="media">
       <div xid="div10" class="media-left">
        <img alt="" xid="image1" class="img-rounded media-object" style="background-color:transparent;width:75px;" dir="ltr" height="80px" bind-attr-src=' $model.getImageUrl( val("ftransport"))'></img></div> 
       <div class="media-body" xid="div14">
        <div class="text-muted" xid="div15">
         <span xid="span11" class="text-danger"><![CDATA[起:]]></span>
         <span xid="span9" class="text-danger" bind-text='ref("fstartCity")'></span></div> 
        <div class="text-muted" xid="div16">
         <span xid="span30"><![CDATA[终:]]></span>
         <span xid="span21" bind-text='ref("fendCity")'></span>
         </div> 
  <div class="text-muted" xid="div1">
   <span xid="span4"><![CDATA[转:]]></span>
   <span xid="span3" bind-text='ref("ftransfer")'></span></div>
  <div class="text-muted" xid="div3">
   <span xid="span6"><![CDATA[价:]]></span>
   <span xid="span5" bind-text='ref("fprice")'></span>
  <span xid="span8" bind-text='ref("fpriceType")'></span>
  <span xid="span10"><![CDATA[电话:]]></span>
  <span xid="span12" bind-text='ref("fstartPhone")'></span></div></div> </li> </ul> </div> </div> 
   <div class="x-content-center x-pull-up" xid="div7">
    <span class="x-pull-up-label" xid="span16">加载更多...</span></div> </div></div>  
        </div> 
    </div> 
  </div> 
</div>