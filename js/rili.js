var $$ = function(id) {
	return "string" == typeof id ? document.getElementById(id) : id;
};
var Class = {
	create: function() {
		return function() {
			this.initialize.apply(this, arguments);
		}
	}
}
Object.extend = function(destination, source) {
	for(var property in source) {
		destination[property] = source[property];
	}
	return destination;
}
var Calendar = Class.create();
Calendar.prototype = {
	initialize: function(container, options) {
		this.Container = $$(container); //容器(table结构)
		this.Days = []; //日期对象列表
		this.SetOptions(options);
		this.Year = this.options.Year;
		this.Month = this.options.Month;
		this.onFinish = this.options.onFinish;
		this.Draw();
	},
	//设置默认属性
	SetOptions: function(options) {
		this.options = { //默认值
			Year: new Date().getFullYear(), //显示年
			Month: new Date().getMonth() + 1, //显示月
			qdDay: null,
			onToday: function() {}, //已签到
			onSignIn: function(){}, //今天是否签到
			onFinish: function() {} //日历画完后触发
		};
		Object.extend(this.options, options || {});
	},
	//上一个月
	PreMonth: function() {
		//先取得上一个月的日期对象
		var d = new Date(this.Year, this.Month - 2, 1);
		//再设置属性
		this.Year = d.getFullYear();
		this.Month = d.getMonth() + 1;
		//重新画日历
		this.Draw();
	},
	//下一个月
	NextMonth: function() {
		var d = new Date(this.Year, this.Month, 1);
		this.Year = d.getFullYear();
		this.Month = d.getMonth() + 1;
		this.Draw();
	},
	//画日历
	Draw: function() {
		//签到日期
		var day = this.qdDay;
		//日期列表
		var arr = [];
		//用当月第一天在一周中的日期值作为当月离第一天的天数
		for(var i = 1, firstDay = new Date(this.Year, this.Month - 1, 1).getDay(); i <= firstDay; i++) {
			arr.push("&nbsp;");
		}
		//用当月最后一天在一个月中的日期值作为当月的天数
		for(var i = 1, monthDay = new Date(this.Year, this.Month, 0).getDate(); i <= monthDay; i++) {
			arr.push(i);
		}
		var frag = document.createDocumentFragment();
		this.Days = [];
		while(arr.length > 0) {
			//每个星期插入一个tr
			var row = document.createElement("tr");
			//每个星期有7天
			for(var i = 1; i <= 7; i++) {
				var cell = document.createElement("td");
				cell.innerHTML = "&nbsp;";
				if(arr.length > 0) {
					var d = arr.shift();
					cell.innerHTML = '<span class="day_'+d+'">' + d + '</span>';
				}
				row.appendChild(cell);
			}
			frag.appendChild(row);
		}
		//先清空内容再插入(ie的table不能用innerHTML)
		while(this.Container.hasChildNodes()) {
			this.Container.removeChild(this.Container.firstChild);
		}
		this.Container.appendChild(frag);
		this.onFinish();
	},
};
