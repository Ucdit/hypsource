// vqd.pageAnimate v1.0.0
define(function(require, exports, module) {
	var isFirst = true; // 计数器
	var title;
	var s;
	var clearTitle,clearContent;
	var vqd = {
		page0 : function(){
			if(clearTitle||clearContent)
			{
				clearInterval(clearTitle);
				clearInterval(clearContent);
				$(".mainContent").html(s);
				$("#title").html(title);
				$(".jili").addClass("addAppear").css("opacity","1");
				$(".lastP").addClass("addAppear").css("opacity","1");
			}
			
			$("#new").addClass("addAppear").css("opacity","1");
			setTimeout(function(){
				$("#year").addClass("addAppear").css("opacity","1");
				$("#thisYear").addClass("addAppear").css("opacity","1");
			},500);
			setTimeout(function(){
				$("#fast").addClass("addAppear").css("opacity","1");
			},1000);
			setTimeout(function(){
				$("#happy").addClass("addAppear").css("opacity","1");
			},1500);
			setTimeout(function(){
				$("#bestWord").addClass("addAppear").css("opacity","1");
			},2000);
			setTimeout(function(){
				$("#bestDiv").addClass("addGo").css("width","60%");
			},2800);
			
		},
		page1 : function(){
			title=$("#title").html();
			s = $(".mainContent").html();
			var index = 0;
			var o=0;
			//alert($("#title").html());
			/*添加文字效果*/
			if(isFirst)
			{
				isFirst=false;
				$(".mainContent").html("");
				$("#title").html("");
				$(".jili").css("opacity","0");
				$(".lastP").css("opacity","0");
				setTimeout(function(){
					clearTitle=setInterval(function(){
					$("#title").append(title.charAt(o));
					if(o++===$("#title").html().length)
					{
						clearInterval(clearTitle);
					}
					//console.log(o);
					},80);
				},2000);
				setTimeout(function(){
					clearContent=setInterval(function(){
						$(".mainContent").append(s.charAt(index));
						if(index++===$(".mainContent").html().length)
						{
							clearInterval(clearContent);
							$(".jili").addClass("addAppear").css("opacity","1");
							$(".lastP").addClass("addAppear").css("opacity","1");
						}
					},80);
				},2180);
			}
			/*设置绳子的宽度，过度动画开始*/
			$(".line1").css("width","100%");
			setTimeout(function(){
				$(".picDiv1").addClass("addAppear").css("opacity","1");
			},1000);
			setTimeout(function(){
				$("#lDot i:nth-child(1)").css("opacity","1");
				$("#rDot i:nth-child(1)").css("opacity","1");
				//$("#lDot i:nth-child(2)").addClass("addAppear").css("opacity","1");
				//$("#rDot i:nth-child(2)").addClass("addAppear").css("opacity","1");
			},1500);
			setTimeout(function(){
				$("#lDot i:nth-child(2)").css("opacity","1");
				$("#rDot i:nth-child(2)").css("opacity","1");
				//$("#lDot i:nth-child(4)").addClass("addAppear").css("opacity","1");
				//$("#rDot i:nth-child(4)").addClass("addAppear").css("opacity","1");
			},1700);
			setTimeout(function(){
				$("#lDot i:nth-child(3)").css("opacity","1");
				$("#rDot i:nth-child(3)").css("opacity","1");
				//$("#lDot i:nth-child(4)").addClass("addAppear").css("opacity","1");
				//$("#rDot i:nth-child(4)").addClass("addAppear").css("opacity","1");
			},1900);
			setTimeout(function(){
				$("#lDot i:nth-child(4)").css("opacity","1");
				$("#rDot i:nth-child(4)").css("opacity","1");
				//$("#lDot i:nth-child(4)").addClass("addAppear").css("opacity","1");
				//$("#rDot i:nth-child(4)").addClass("addAppear").css("opacity","1");
			},2200);
			setTimeout(function(){
				$("#lDot i:nth-child(5)").css("opacity","1");
				$("#rDot i:nth-child(5)").css("opacity","1");
				//$("#lDot i:nth-child(4)").addClass("addAppear").css("opacity","1");
				//$("#rDot i:nth-child(4)").addClass("addAppear").css("opacity","1");
			},2300);
			setTimeout(function(){
				$("#lDot i:nth-child(6)").css("opacity","1");
				$("#rDot i:nth-child(6)").css("opacity","1");
				//$("#lDot i:nth-child(4)").addClass("addAppear").css("opacity","1");
				//$("#rDot i:nth-child(4)").addClass("addAppear").css("opacity","1");
			},2500);
			setTimeout(function(){
				$("#lDot i:nth-child(7)").css("opacity","1");
				$("#rDot i:nth-child(7)").css("opacity","1");
				//$("#lDot i:nth-child(4)").addClass("addAppear").css("opacity","1");
				//$("#rDot i:nth-child(4)").addClass("addAppear").css("opacity","1");
			},2700);
			
			
		},
		page2:function(){
			clearInterval(clearTitle);
			clearInterval(clearContent);
			$(".mainContent").html(s);
			$("#title").html(title);
			$(".jili").addClass("addAppear").css("opacity","1");
			$(".lastP").addClass("addAppear").css("opacity","1");
			$(".line2").css("width","100%");
			setTimeout(function(){
				$(".one").addClass("addAppear").css("opacity","1");
			},500);
		},
		page3:function(){
			$(".line3").css("width","100%");
			setTimeout(function(){
				$(".two").addClass("addAppear").css("opacity","1");
			},500);
		},
		page4:function(){
			$(".line6").css("width","100%");
			setTimeout(function(){
				$(".five").addClass("addAppear").css("opacity","1");
			},500);
		},
		page5:function(){
			//alert("2");
			$(".line72").css("width","100%");
			setTimeout(function(){
				$(".cold").addClass("addAppear").css("opacity","1");
			},1000);
			setTimeout(function(){
				$(".yule").addClass("addAppear").css("opacity","1");
			},1200);
			setTimeout(function(){
				$(".line73").css("width","100%");
			},1500);
			setTimeout(function(){
				$(".think").addClass("addAppear").css("opacity","1");
			},1900);
			setTimeout(function(){
				$(".yiwai").addClass("addAppear").css("opacity","1");
			},2100);
			setTimeout(function(){
				$(".lingshi").addClass("addAppear").css("opacity","1");
			},2300);	
		}
	}
	
	module.exports = vqd;
});