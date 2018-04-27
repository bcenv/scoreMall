function selectLoginType(type,eventType){
	$(".errorShow").hide();
	if(type == "mobile"){
		$(eventType).addClass("select-type").siblings().removeClass("select-type");
		$(".mobile-type").show();
		$(".password-type").hide();	
	}
	else{
		$(eventType).addClass("select-type").siblings().removeClass("select-type");
		$(".mobile-type").hide();
		$(".password-type").show();
	}
}

// login
function login(){
	window.location="user.html"
}
/*短信倒计时  */
$(function  () {
	//获取短信验证码
	var validCode=true;		
	$("#getCode").click (function  () {
		var mobileVal=$("#mobile").val();	
		var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
		if(mobileVal == ""){
			$(".errorShow").show().text("请输入手机号");
			return false;
		}
		else{
			if(!myreg.test(mobileVal)){
				$(".errorShow").show().text("手机号格式不正确");
				return false;
			} // 手机号格式不正确
			else{
				var time=10;
				var code=$(this);
				if (validCode) {
					validCode=false;
					code.attr("disabled","disabled");/*按钮不可点击*/
					code.addClass("get-code-no");
					code.removeClass("get-code");
					var t=setInterval(function  () {
						time--;
						code.val(time+"秒重发");
						if (time==0) {
							clearInterval(t);
							code.removeAttr("disabled","disabled");;/*移除按钮不可点击*/
							code.val("重新获取");
							validCode=true;
							code.removeClass("get-code-no");
							code.addClass("get-code");
						}
					},1000)
				}
			}
		}
	});		
});