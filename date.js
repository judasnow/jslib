// 基本的时间格式化
function formatDate(date) {
	var d = date.getDate();
	var m = date.getMonth() + 1;
	var y = date.getFullYear();

	var h = date.getHours();
	var minu = date.getMinutes();
	var s = date.getSeconds();

	return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d) + " " + (h <= 9?'0'+h:h) + ":"
	+ (minu<=9?'0'+minu:minu) + ":" + (s<=9?'0'+s:s);
}
