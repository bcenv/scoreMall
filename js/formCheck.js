function loginCheck(){
	var userEmail = $('#userEmail').val();
	var userTel = $('#userTel').val();
	var imgCode = $('#imgCode').val();
	var telCode = $('#telCode').val();
	var userPass = $('#userPass').val();
	var userPassTwo = $('#userPassTwo').val();
	if(userEmail == "") {
		document.getElementById("tip-mes").innerHTML = "请输入邮箱";
        return false;
    }else{   	
    	if(!/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/.test(userEmail)) {
    		document.getElementById("tip-mes").innerHTML = "邮箱格式不正确";
    		return false;
    	}    	
    }
	 if(userPass == "") {
	    	document.getElementById("tip-mes").innerHTML = "请输入密码";
	        return false;
	    }
    if(userTel == "") {
		document.getElementById("tip-mes").innerHTML = "请输入手机号";
        return false;
    }else {
    	if(!/(^(13|14|15|18)\d{9}$)/.test(userTel)) {
    		document.getElementById("tip-mes").innerHTML = "手机格ss式不正确";
            return false;
    	}
    }
    if(imgCode == "") {
    	document.getElementById("tip-mes").innerHTML = "请输入图形验证码";
        return false;
    }
    if(telCode == "") {
		document.getElementById("tip-mes").innerHTML = "请输入短信验证码";
        return false;
    }
   
    if(userPassTwo == "") {
    	document.getElementById("tip-mes").innerHTML = "请再次确认密码";
        return false;
    }
    if(userPassTwo !== userPass) {
    	document.getElementById("tip-mes").innerHTML = "两次密码不一致";
        return false;
    }
    return true;
}