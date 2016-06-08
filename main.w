<?xml version="1.0" encoding="utf-8"?>

<div xmlns="http://www.w3.org/1999/xhtml" class="main13" component="$UI/system/components/justep/window/window"
  design="device:mobile;" xid="window">  
  <div component="$UI/system/components/justep/model/model" xid="model" style="left:18px;top:83px;height:244px;"
    onModelConstruct="modelModelConstruct" onLoad="modelLoad" onunLoad="modelUnLoad"> 
    <div component="$UI/system/components/justep/data/data" autoLoad="true"
      xid="imgData" idColumn="id" onCustomRefresh="imgDataCustomRefresh"> 
      <column label="id" name="id" type="String" xid="xid1"/>  
      <column label="图片" name="fImgUrl" type="String" xid="xid2"/>  
      <column label="链接地址" name="fUrl" type="String" xid="xid9"/> 
    </div>  
    </div>  
  <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full"> 
    <div class="x-panel-content tb-trans"> 
      <div component="$UI/system/components/justep/contents/contents" class="x-contents x-full"
        active="0" xid="contents2" swipe="false" wrap="false" slidable="false"> 
        <div class="x-contents-content x-cards" xid="homeContent"> 
          <div component="$UI/system/components/justep/panel/panel" class="x-panel x-full x-has-iosstatusbar"> 
            <div class="x-panel-top" xid="top1"> 
              <div component="$UI/system/components/justep/titleBar/titleBar"
                class="x-titlebar" xid="titleBar1" title="发货找货"> 
                <div class="x-titlebar-left" xid="div6"> 
                  <a component="$UI/system/components/justep/button/button"
                    class="btn btn-link btn-icon-top" label="第一物流" icon="glyphicon glyphicon-qrcode"> 
                    <i xid="i6" class="glyphicon glyphicon-qrcode"/>  
                    <span xid="span6">第一物流</span> 
                  </a> 
                </div>  
                <div class="x-titlebar-title" xid="div1" bind-click="searchBtnClick">发货找货</div>  
                <div class="x-titlebar-right reverse" xid="div5"> 
                  <a component="$UI/system/components/justep/button/button"
                    class="btn btn-link btn-only-icon" label="消息" xid="button8" icon="icon-android-add"> 
                    <i xid="i8" class="icon-android-add"/>  
                    <span xid="span8">消息</span> 
                  </a> 
                </div> 
              </div> 
            </div>  
            <div class="x-panel-content  x-scroll-view" xid="content3" style="bottom: 0px;"> 
              <div class="x-scroll" component="$UI/system/components/justep/scrollView/scrollView"
                xid="scrollView" onPullDown="scrollViewPullDown"> 
                <div class="x-content-center x-pull-down container" style="display:none;"
                  xid="div16"> 
                  <i class="x-pull-down-img glyphicon x-icon-pull-down" xid="i9"/>  
                  <span class="x-pull-down-label" xid="span17">下拉刷新...</span> 
                </div>  
                <div class="x-scroll-content" xid="div17"> 
                  <div component="$UI/system/components/justep/panel/panel"
                    class="panel panel-default x-card" xid="imgroll"> 
                    <div component="$UI/system/components/bootstrap/carousel/carousel"
                      class="x-carousel carousel" xid="carousel1" auto="true" style="height:133px;"> 
                      <ol class="carousel-indicators" xid="ol1"/>  
                      <div class="x-contents carousel-inner" role="listbox"
                        component="$UI/system/components/justep/contents/contents"
                        active="0" slidable="true" wrap="true" swipe="true" xid="contentsImg"
                        routable="false"> 
                        <div class="x-contents-content" xid="content2"> 
                          <img src="" alt="" xid="image13" bind-click="openPageClick"
                            class="tb-img1" pagename=""/> 
                        </div> 
                      </div> 
                    </div> 
                  </div>  
                  <div component="$UI/system/components/justep/panel/panel"
                    class="panel panel-default x-card" xid="panel3"> 
                    <div component="$UI/system/components/bootstrap/row/row"
                      class="row" xid="row1" style="width:100%;"> 
                      <div class="col col-xs-7 cell tb-nopadding" xid="col1"> 
                        <img alt="" xid="image4" class=" img-responsive center-block"
                          bind-click="openPageClick" pagename="./list.w" dir="ltr"
                          bind-attr-src="$model.transUrl(&quot;./main/img/a1.jpg&quot;)" height="100%" style="width:100%;"/> 
                      </div>  
                      <div class="col col-xs-5 col-sm-5 col-md-5 col-lg-5 cell tb-nopadding" xid="col2"> 
                        <div component="$UI/system/components/bootstrap/row/row"
                          class="row" xid="row3"> 
                          <div class="col cell col-xs-12 tb-nopadding" xid="col5"> 
                            <img alt="" xid="image5" class=" img-responsive center-block"
                              bind-click="openPageClick" pagename="./list.w" bind-attr-src="$model.transUrl(&quot;./main/img/a2.jpg&quot;)" height="100%" style="width:100%;"/> 
                          </div> 
                        </div>  
                        <div component="$UI/system/components/bootstrap/row/row"
                          class="row" xid="row4"> 
                          <div class="col col-xs-12 cell tb-nopadding" xid="col8"> 
                            <img alt="" xid="image6" class=" img-responsive center-block"
                              bind-click="openPageClick" pagename="./list.w" bind-attr-src="$model.transUrl(&quot;./main/img/a3.jpg&quot;)" height="100%" style="width:100%;"/> 
                          </div> 
                        </div> 
                      </div> 
                    </div> 
                  </div>  
                  <div component="$UI/system/components/justep/panel/panel"
                    class="panel panel-default x-card" xid="panel3"> 
                    <div component="$UI/system/components/bootstrap/row/row"
                      class="row" xid="row1" style="width:100%;"> 
                      <div class="col col-xs-5 cell tb-nopadding" xid="col2"> 
                        <div component="$UI/system/components/bootstrap/row/row"
                          class="row" xid="row3"> 
                          <div class="col cell col-xs-12 tb-nopadding" xid="col5"> 
                            <img alt="" xid="image5" class=" img-responsive center-block"
                              bind-click="openPageClick" pagename="./list.w" height="100%"
                              bind-attr-src="$model.transUrl(&quot;./main/img/b2.jpg&quot;)" style="width:100%;"/> 
                          </div> 
                        </div>  
                        <div component="$UI/system/components/bootstrap/row/row"
                          class="row" xid="row4"> 
                          <div class="col col-xs-12 cell tb-nopadding" xid="col8"> 
                            <img alt="" xid="image6" class=" img-responsive center-block"
                              bind-click="openPageClick" pagename="./list.w" bind-attr-src="$model.transUrl(&quot;./main/img/b3.jpg&quot;)" style="width:100%;"/> 
                          </div> 
                        </div> 
                      </div>
                      <div class="col col-xs-7 cell tb-nopadding" xid="col1"> 
                        <img alt="" xid="image4" class=" img-responsive center-block"
                          bind-click="openPageClick" pagename="./list.w" dir="ltr"
                          bind-attr-src="$model.transUrl(&quot;./main/img/b1.jpg&quot;)" height="100%" style="width:100%;"/> 
                      </div> 
                    </div> 
                  </div>  
                  <div component="$UI/system/components/justep/panel/panel"
                    class="panel panel-default x-card" xid="panel3"> 
                    <div component="$UI/system/components/bootstrap/row/row"
                      class="row" xid="row1" style="width:100%;"> 
                      <div class="col col-xs-6 cell tb-nopadding" xid="col2" style="width:50%;"> 
                        <img alt="" xid="image5" class=" img-responsive center-block" bind-click="openPageClick" pagename="./list.w" bind-attr-src='$model.transUrl("./main/img/c2.jpg")' height="100%" style="width:100%;"/></div>
                      <div class="col col-xs-6 col-sm-6 col-md-6 col-lg-6 cell tb-nopadding" xid="col1" style="width:50%;"> 
                        <img alt="" xid="image4" class=" img-responsive center-block"
                          bind-click="openPageClick" pagename="./list.w" dir="ltr"
                          bind-attr-src='$model.transUrl("./main/img/c1.jpg")' height="100%" style="width:100%;"/> 
                      </div> 
                    </div> 
                  </div> 
                </div>  
                <div class="x-content-center x-pull-up" xid="div18"> 
                  <span class="x-pull-up-label" xid="span18">加载更多...</span> 
                </div> 
              </div> 
            </div> 
          </div> 
        </div>  
        <div class="x-contents-content x-cards" xid="microContent"> 
          <div component="$UI/system/components/justep/windowContainer/windowContainer"
            class="x-window-container" xid="microContainer" autoLoad="true" src="$UI/flowapp/me/register.w"/> 
        </div>  
        <div class="x-contents-content x-cards" xid="foundContent"> 
          <div component="$UI/system/components/justep/windowContainer/windowContainer"
            class="x-window-container" xid="foundContainer" autoLoad="true"/> 
        </div>  
        <div class="x-contents-content x-cards" xid="shoppingContent" onInactive="shoppingContentInactive"> 
          <div component="$UI/system/components/justep/windowContainer/windowContainer"
            class="x-window-container" xid="shoppingContainer" autoLoad="true"/> 
        </div>  
        <div class="x-contents-content x-cards" xid="userContent"> 
          <div component="$UI/system/components/justep/windowContainer/windowContainer"
            class="x-window-container" xid="userContainer" autoLoad="true" src="./me/login.w"/> 
        </div> 
      </div> 
    </div>  
    <div class="x-panel-bottom" xid="bottom1" height="55"> 
      <div component="$UI/system/components/justep/button/buttonGroup" class="btn-group btn-group-justified x-card"
        tabbed="true" xid="buttonGroup1" style="height:55px;"> 
        <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top active"
          label="货源" xid="homeBtn" icon="icon-ios7-box-outline" target="homeContent"> 
          <i xid="i1" class="icon icon-ios7-box-outline"/>  
          <span xid="span1">货源</span> 
        </a>  
        <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top"
          label="消息" xid="microBtn" icon="icon-chatbubble" target="microContent"> 
          <i xid="i2" class="icon icon-chatbubble"/>  
          <span xid="span2">消息</span> 
        </a>  
        <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top" xid="shoppingCartBtn" icon="icon-arrow-graph-up-right" target="shoppingContent" label="路线"> 
          <i xid="i4" class="icon icon-arrow-graph-up-right" />  
          <span xid="span4">路线</span> 
        </a><a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top"
          label="发现" xid="foundBtn" icon="icon-eye" target="foundContent"> 
          <i xid="i3" class="icon icon-eye"/>  
          <span xid="span3">发现</span> 
        </a>  
          
        <a component="$UI/system/components/justep/button/button" class="btn btn-link btn-icon-top"
          label="我" xid="userBtn" icon="icon-person" target="userContent"> 
          <i xid="i5" class="icon icon-person"/>  
          <span xid="span5">我</span> 
        </a> 
      </div> 
    </div> 
  </div> 
</div>
