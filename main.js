define(function(require) {
	var $ = require("jquery");
	require("cordova!com.phonegap.plugins.barcodescanner");
	var justep = require("$UI/system/lib/justep");
	var allData = require("$UI/commom/js/loadData");

	var Model = function() {
		this.callParent();
		this.contentName;
		this.tag;
		this.lastContentXid = "homeContent";
	};

	// 图片路径转换
	Model.prototype.getImageUrl = function(url) {
		return require.toUrl(url);
	};
	Model.prototype.transUrl = function(url) {
		return require.toUrl(url);
	};
	/*
	 * 写首页图片数据缓存的代码 1、数据模型创建时事件
	 * 2、判断有没有localStorage，如果有显示localStorage中的内容，否则显示静态内容。
	 * 3、从服务端获取最新数据和图片，获取之后，更新界面并写入localStorage
	 */

	Model.prototype.imgDataCustomRefresh = function(event) {
		/*
		 * 1、加载轮换图片数据 2、根据data数据动态添加carouse组件中的content页面 3、修改第一张图片
		 */
		var url = require.toUrl("./main/json/imgData.json");
		var imgData = event.source;
		imgData.clear();
		$.ajaxSettings.async = false;
		$.getJSON(url, function(data) {
			imgData.loadData(data);
		});

		var carousel = this.comp("carousel1");
		event.source.each(function(obj) {
			var fImgUrl = require.toUrl(obj.row.val("fImgUrl"));
			var fUrl = require.toUrl(obj.row.val("fUrl"));
			if (obj.index === 0) {
				localStorage.setItem("index_BannerImg_src", fImgUrl);
				localStorage.setItem("index_BannerImg_url", fUrl);
				$(carousel.domNode).find("img").eq(obj.index).attr({
					"src" : fImgUrl,
					"pagename" : fUrl
				});
			} else {
				if ($(carousel.domNode).find("img").length > obj.index) {
					$(carousel.domNode).find("img").eq(obj.index).attr({
						"src" : fImgUrl,
						"pagename" : fUrl
					});
				} else {
					carousel.add('<img src="' + fImgUrl + '" class="tb-img1" bind-click="openPageClick" pagename="' + fUrl + '"/>');
				}

			}
		});
	};
	Model.prototype.modelModelConstruct = function(event) {
		/*
		 * 1、数据模型创建时事件 2、加载静态图片或从缓存中加载图片
		 */
		var carousel = this.comp("carousel1");

		var fImgUrl = localStorage.getItem("index_BannerImg_src");
		if (fImgUrl === undefined) {
			$(carousel.domNode).find("img").eq(0).attr({
				"src" : "./main/img/carouselBox61.jpg",
				"goodsID" : "1",
				"pagename" : "./detail.w"
			});
		} else {
			var fUrl = localStorage.getItem("index_BannerImg_url");
			$(carousel.domNode).find("img").eq(0).attr({
				"src" : fImgUrl,
				"pagename" : fUrl
			});
		}
	};

	Model.prototype.goodsDataCustomRefresh = function(event) {
		/*
		 * 1、加载商品数据
		 */
		var url = require.toUrl("./main/json/goodsData.json");
		allData.loadDataFromFile(url, event.source, true);
	};

	// 打开页面
	Model.prototype.openPageClick = function(event) {
		/*
		 * 1、点击组件增加算定义属性：pagename 2、获取自定义属性，打开 对应页面
		 */
		// var pageName = event.currentTarget.getAttribute('pagename');
		// if (pageName)
		// justep.Shell.showPage(require.toUrl(pageName));
	};

	// 刷新广告视图
	Model.prototype.scrollViewPullDown = function(event) {
		/*
		 * 1、滚动视图下拉事件 2、刷新data
		 */
		this.comp("imgData").refreshData();
	};

	Model.prototype.btnBarScan = function(event) {
		if (justep.Shell.appType.get() === "app") {
			// 在扫描成功回调方法中获得扫描结果 result //通过扫描结果 result 获取二维码信息
			// 在扫描失败回调方法中获得出错信息 error
			cordova.plugins.barcodeScanner.scan(function(result) {
				console.log("扫描结果:" + result.text);
			}, function(error) {
				console.log("扫描失败:" + error);
			}); // 扫描二维码
		}
		else
		{
			justep.Util.hint("网页程序不支持扫码功能");
		}
	};

	Model.prototype.userContentActive = function(event) {
		var userContainer = this.comp("userContainer");
		if ($.trim(justep.Shell.userName.get()) !== "") {
			userContainer.load(require.toUrl("./me/setting.w"));
		} else {
			userContainer.load(require.toUrl("./me/login.w"));
		}

	};

	Model.prototype.shoppingContentActive = function(event) {
		var shopping = this.comp("shoppingContainer");
		shopping.load(require.toUrl("./logistics/ways.w"));
	};

	return Model;
});