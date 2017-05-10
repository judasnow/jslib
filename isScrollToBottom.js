// 判断可以滚动元素中内容是否已经滚动到了底部
// delta 距离底部指定像素，也判定为已经滚动到了底部
function isScrollBottom(elId, delta) {
	var list = window.Document.getElementById(elId)

	var scrollTop = list.scrollTop
	var rankListScrollHeight = list.scrollHeight
	var rankListClientHeight = list.clientHeight

	if (rankListScrollHeight - scrollTop === rankListClientHeight) {
		return true
	} else {
		return false
	}
}
