$(function(){
	$('#form').validate({
		messages:{
			user:'请输入中文',
			password:'',
			phone:'手机号码格式错误'
		},
		rules:{
			user:'required',
			password:'required',
			phone:'required'
		}
	});
});