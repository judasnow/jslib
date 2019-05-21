// 在将 base64 转换成一个 file 对象
function dataURLtoFile(dataurl, filename) {
	var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1]
	var bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)
	while(n--){
		u8arr[n] = bstr.charCodeAt(n)
	}
	return new File([u8arr], filename, {type:mime})
}

function hashCode(s) {
	let h;
	for (let i = 0; i < s.length; i++) {
		h = Math.imul(31, h) + s.charCodeAt(i) | 0;
	}
	return h;
}
