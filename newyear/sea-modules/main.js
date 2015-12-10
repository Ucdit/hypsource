/* 
 * name: hyp
 * revise time: 2015-01-25 17:22
 * version: v1.0
 */
define(function(require) {
	var royalSlider = require('./jquery.royalslider');
	var loading = require('./vqd.loading');
	var resource = require('./resource');
	var pages = require('./royalslider.page.js');
	var contentWidth = $(window).width();
	var contentHeight = $(window).height();
	var id;
	$(function(){
		id=getQueryString("id");
		//weixin_check();
		if(id!=null)
		{
			/*通过id去请求文字和图片*/
			submits();
		}
		/*翻页*/
		$('#full-width-slider').royalSlider({
			loop: true,
			keyboardNavEnabled: false,
			controlsInside: false,
			imageScaleMode: 'fill',
			autoScaleSlider: true, 
			autoScaleSliderWidth: contentWidth,     
			autoScaleSliderHeight:contentHeight,
			controlNavigation: 'bullets',
			thumbsFitInViewport: false,
			navigateByClick: false,
			startSlideId: 0,
			autoPlay: false,
			transitionType:'move',
			globalCaption: true,
			slidesOrientation:'vertical',
			slidesSpacing:0,
			arrowsNav:false,
			autoScaleSlider: true,
			deeplinking: {
				enabled: true,
				change: false
			},
		});
		/*音乐*/
		var status = $("#Player").attr("music-status");
		$(".music_button").on("click",function(){
			if(!status || status == 0){
				$("#Player")[0].pause();
				status = 1;
				$("#tips").html("暂停");
				$("#tips").addClass("addOpen");
				$(".music").removeClass("stp");
				$("#tips").bind('webkitAnimationEnd', function(){
					$(this).removeClass();
				});
			}else if (status == 1) {
				$("#Player")[0].play();
				$("#tips").html("打开");
				$("#tips").addClass("addOpen");
				$("#tips").bind('webkitAnimationEnd', function(){
					$(this).removeClass();
				});
				status = 0;
				$(".music").addClass("stp");
			}
		});
		$("#sendBtn").click(function(){
			$("#share").css("display","block");
			$("#shareImg").css("display","block");
			$("#sendBtn .sendImg").attr("src","statics/images/sendBtnC.png");
		});
		$("#makeBtn").click(function(){
			$(".makeImg").attr("src","statics/images/makeBtnC.png");
			//alert($(".makeImg").attr("src"));
		});
	});
	/* 追加弹窗 */
	var init = {
		/* 加载进度条 */
		load : function() {
			var append = $("#append");
			if(append.length) {
				var $centerBox = $("#loading");
				var bWidth = $centerBox.width();
				var bHeight = $centerBox.height();
				$centerBox.fadeIn().css({
					"top":contentHeight/2-bHeight/2,
					"left":contentWidth/2-bWidth/2,
					"position":"absolute",
					"opacity":"1"
				})
			} else {
				var div = document.createElement("div");
				div.setAttribute("id","append");
				var htmls = "<div id='loading'>";
				htmls += "<i id='circle'></i>";
				htmls += "<span><i class='progress_len' id='progress_len'></i></span></div>";
				div.innerHTML = htmls;
				document.body.appendChild(div);
				var bWidth = $(document.getElementById("append")).width();
				var bHeight = $(document.getElementById("append")).height();
				$(document.getElementById("append")).css({
					"top":contentHeight/2-bHeight/2,
					"left":contentWidth/2-bWidth/2,
					"position":"absolute",
					"opacity":"1"
				})
			}
		},
		/* 隐藏进度条 */
		hide : function() {
			$("#loading").animate({
				"opacity": 0
			},2000,function() {
				$(this).remove();
			});
			setTimeout(function(){
				$("#append").animate({
				"opacity": 0
				},function() {
					$(this).remove();
					pages.page0();
				});
			},2000);
		}
	};
	/* 加载的图片列表 */
	var imgList = config.imgResource;
	/* 调用loading中的函数，进度条加载之后的动作 */
	function Imgdone(s){
		var progress = document.getElementById("progress_len");
		progress.style.width = s+"%";

		var progress_len = progress.style.width;
		if(progress_len == "100%"){
			document.getElementById("circle").setAttribute("class","complete");
			init.hide();
			
		}
	}
	
	//调用loading
	loading.init(imgList,"",Imgdone,init.load);
	//获得URL传递的变量值
	function getQueryString(value)
	{
	  var reg = new RegExp("(^|&)" + value + "=([^&]*)(&|$)", "i");
	  var r = window.location.search.substr(1).match(reg);
	  if (r != null) return unescape(r[2]); return null;
	}
	function submits()
	{
		var today=new Date();
		var when=today.getFullYear()+"年"+today.getMonth()+"月"+today.getDate()+"日";
		$.ajax({
			type: "POST",
			url: "lib/getInfo.php",
			data: "id="+id,
			async: false,
			dataType:"json",
			success: function(msg)
			{
			   //设置图片，文字
			   $(".pic1").attr("src",msg.image_url[0]);
			   $(".pic2").attr("src",msg.image_url[1]);
			   $(".pic3").attr("src",msg.image_url[2]);
			   $("#title").html(msg.congratulation.to);
			   $(".mainContent").html(msg.congratulation.content);
			   $(".jili").html("");
			   $(".from").html(msg.congratulation.from);
			   $(".time").html(when);
			   $(".picP").css("display","none");
			   $("#share").css("display","block");
			   $("#shareImg").css("display","block");
			    setTimeout(function(){
					$("#share").css("display","none");
					$("#shareImg").css("display","none");
				},2000);
			}
		 });
	}
	function weixin_check(){
		function is_weixin(){
			var ua = navigator.userAgent.toLowerCase();
			if(ua.match(/MicroMessenger/i)=="micromessenger") {
				return true;
			} else {
				return false;
			}
		}
		var check=is_weixin();
		if(check==false){
			window.location="check_explorer.html";
		}
	}

	
	
});