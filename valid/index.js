define(['jquery','validate'],function($,validate){
	$(function(){
	$.extend({validate:function(){}});
	$.validate({});
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
	$("#form2").validate({
			messages:{
				user:'请输入中文',
				password:{
					required:'密码格式错误',
					min:'太小'
				},
				phone:'手机号码格式错误'
			},
			rules: {
				user:{
					required:{
						depends: function(element) {
					      return $("#form2 input[name=password]").val()!=''?true:false;
					    }
					}
				},
				password: {
				  required: true,
				  min: {
				    // min needs a parameter passed to it
				    param: 6,
				    depends: function(element) {
				      return $("#form2 input[name=user]").val()!=''?true:false;
				    }
				  }
				}
			}
	});
	$("#form3").validate({
			messages:{
				user:'请输入中文',
				password:{
					required:'密码格式错误',
					min:'太小'
				},
				phone:'手机号码格式错误'
			},
			rules: {
				user:{
					required:true
					
				},
				password: {
				  required: true,
				  min: {
				    // min needs a parameter passed to it
				    param: 6,
				    depends: function(element) {
				      return $("#form3 input[name=user]").val()!=''?true:false;
				    }
				  }
				}
			},
			invalidHandler: function(event, validator) {
			    // 'this' refers to the form
			    var errors = validator.numberOfInvalids();
			    alert(errors);
			    return;
		    }
	});
});
});
