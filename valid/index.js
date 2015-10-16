$(function(){
	/*$.validator.setDefaults({
		submitHandler: function() {
			$.ajax({
				type:'post',
				url:'back.json',
				datyType:'json',
				data:'1',
				success:function(data){
					alert(data.name);
				},
				error:function(XMLHttpRequest, textStatus, errorThrown){
                     console.log(XMLHttpRequest.status);//200
                        console.log(XMLHttpRequest.readyState);//4
                        console.log(textStatus); //parsererror   
                    console.log('fail');
                }
			});
		}
	});*/
	$('#form1').validate({
		
	});
	$('#form').validate({
		/*debug:false,*/
		messages:{
			user:'请输入中文',
			password:'密码格式错误',
			phone:'手机号码格式错误'
		},
		rules:{
			user:'required',
			password:'required',
			phone:'required'
		},
		submitHandler:function(form) {
			$.ajax({
				type:'post',
				url:'back.json',
				datyType:'json',
				data:'1',
				success:function(data){
					alert(data.name);
				},
				error:function(XMLHttpRequest, textStatus, errorThrown){
                     console.log(XMLHttpRequest.status);//200
                        console.log(XMLHttpRequest.readyState);//4
                        console.log(textStatus); //parsererror   
                    console.log('fail');
                }
			});
		}
	});
});