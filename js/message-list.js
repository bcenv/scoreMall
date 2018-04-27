// 查看 消息
function changeMess(id,eventThis){
	$(eventThis).addClass("selected-class").siblings().removeClass("selected-class");
}