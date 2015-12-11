/* 
 * name: hyp
 * revise time: 2015-01-25 17:22
 * version: v1.0
 */
define(function(require) {
	var wordNum;
	var clear;
	var textArray;
	var from,froms;
	var to,tos;
	var content,contents;
	var forms="";
	var id;
	var picNum=0;
	var pic1,pic2,pic3;
	var clearWait;
	var count=0;
	$(function(){
		id=getRandomString(32);
		$(".container9").height($(window).height());
		$("#content").bind("input",function(){
			//alert("s");
			wordNum=75-$("#content").val().length;
			$(".num").html(wordNum);
			if($("#content").val().length>=74)
			{
				$("#content").val($("#content").val().substring(0,75));
				$(".num").html(0);
			}
		});
		$("#nextBtn").click(
			function(){
				from=$("#from").val();
				to=$(".to").val();
				content=$("#content").val();
				if(from&&to&&content)
				{
					from=encodeURI(from);
					from=encodeURI(from);
					to=encodeURI(to);
					to=encodeURI(to);
					content=encodeURI(content);
					content=encodeURI(content);
					window.location="./makePic.html?from="+from+"&to="+to+"&content="+content;
				}
				else{
					alert("信息没填写完整哈");
				}
				
			}
		);
		/*生成我的贺卡*/
		$("#saveBtn").click(
			function(){
				if(picNum<3)
				{
					alert("必须选择满3张图片才能生成贺卡哦~~");
				}
				else{
					//提交后台请求
					submits();
					
				}
			}
		);
		/*点击上传照片*/
		$("#upBtn").click(function(){
			$('#file1').trigger("click");
		});
		$(".add").click(function(){
			if(picNum==1)
			{
				$("#file2").trigger("click");
			}
			else if(picNum==2)
			{
				$("#file3").trigger("click");
			}
		});
		$("#file1").on("change",function(){
			//alert(this.files[0].name.split(".")[1]);
			var format=this.files[0].name.split(".")[1].toLowerCase();
			if(1)
			{
				var myfile = this.files[0];
				reader = new FileReader();
				reader.readAsDataURL(myfile);
				reader.onload = function(e) {
					pic1=e.target.result;
				};
				picNum++;
				$("#upBtn").css("display","none");
				$(".yes1").css("display","inline-block");
				$(".add").css("display","inline-block");
			}
			else{
				alert("文件格式不支持，请重新选择jpg/gif/png格式的图片");
			}
		});
		$("#file2").on("change",function(){
			//alert(this.files[0].name.split(".")[1]);
			var format=this.files[0].name.split(".")[1].toLowerCase();
			if(1)
			{
				var myfile = this.files[0];
				reader = new FileReader();
				reader.readAsDataURL(myfile);
				reader.onload = function(e) {
					pic2=e.target.result;
				};
				picNum++;
				$(".yes2").css("display","inline-block");
			}
			else{
				alert("文件格式不支持，请重新选择jpg/gif/png格式的图片");
			}
		});
		$("#file3").on("change",function(){
			//alert(this.files[0].name.split(".")[1]);
			var format=this.files[0].name.split(".")[1].toLowerCase();
			if(1)
			{
				var myfile = this.files[0];
				reader = new FileReader();
				reader.readAsDataURL(myfile);
				reader.onload = function(e) {
					pic3=e.target.result;
				};
				picNum++;
				$(".yes3").css("display","inline-block");
				$(".add").css("display","none");
				//alert(picNum);
			}
			else{
				alert("文件格式不支持，请重新选择jpg/gif/png格式的图片");
			}
		});
		/*播放音乐*/
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
				status = 0;
				$("#tips").html("打开");
				$("#tips").addClass("addOpen");
				$("#tips").bind('webkitAnimationEnd', function(){
					$(this).removeClass();
				});
				$(".music").addClass("stp");
			}
		});
	});	
	/*提交请求*/
	function submits()
	{
		froms=getQueryString("from");
		froms=decodeURI(froms);
		tos=getQueryString("to");
		tos=decodeURI(tos);
		contents=getQueryString("content");
		contents=decodeURI(contents);
		/*显示等待页面*/
		$("#wait").css("display","block");
		$("#waitBg").css("display","block");
		waiting();
		setTimeout(function(){
			$.ajax({
			type: "POST",
			url: "lib/image2.php",
			data: "pic1="+pic1+"&pic2="+pic2+"&pic3="+pic3+"&id="+id+"&from="+froms+"&content="+contents+"&to="+tos,
			async: false,
			success: function(msg)
			{
			   //后台记录成功
			   //alert(msg);
			   $("#wait").css("display","none");
			   clearInterval(clearWait);
			    window.location="http://lxh.comwei.com/other/hekaqx/?id="+id;
			  
			}
		 });
		},5000);	
	}
	function getRandomString(len) 
	{
		len = len || 32;
		// 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
		var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; 
		var maxPos = $chars.length;
		var id = '';
		for (i = 0; i < len; i++) {
		  id+= $chars.charAt(Math.floor(Math.random() * maxPos));
		}
		return id;
    }
	//获得URL传递的变量值
	function getQueryString(value)
	{
	  var reg = new RegExp("(^|&)" + value + "=([^&]*)(&|$)", "i");
	  var r = window.location.search.substr(1).match(reg);
	  if (r != null) return unescape(r[2]); return null;
	}
	function waiting(){
		clearWait=setInterval(function(){
			var i=(count%3)+1;
			$("#waitDot span").css("backgroundColor","#bbbbba");
			$("#waitDot span:nth-child("+i+")").css("backgroundColor","#fff");
			count++;
		},500);
	}

	
});