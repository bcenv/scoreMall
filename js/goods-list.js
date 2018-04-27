function changeGoodsClass(id,eventThis){
	$(eventThis).addClass("selected-class").siblings().removeClass("selected-class");
}
// 选择支付方式
$(function  () {
	$("input[name=payType]").click(function(){
  		//console.log($(this).val());
  		var type=$(this).val();
  		alert(type);
  		if(type == "wechat"){
  			$("#wechat").prev("img").addClass("checkIt");
  			$("#alipay").prev("img").removeClass("checkIt");
  		}
  		else{
  			$("#alipay").prev("img").addClass("checkIt");
  			$("#wechat").prev("img").removeClass("checkIt");
  		}
  		
 	});
});
// 查看 兑换记录
function changeDate(id,eventThis){
	$(eventThis).addClass("selected-class").siblings().removeClass("selected-class");
}