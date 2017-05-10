// 判断当前浏览器是否是 ie 以及具体的版本
var isIE = function(ver) {
	var b = document.createElement('b')
	b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
	return b.getElementsByTagName('i').length === 1
}
