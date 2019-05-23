// 根据屏幕的 dpi 转换 mm 和 px

function getDPI() {
    var arrDPI = [];
    if (window.screen.deviceXDPI) {
        arrDPI[0] = window.screen.deviceXDPI;
        arrDPI[1] = window.screen.deviceYDPI;
    } else {
        var tmpNode = document.createElement("DIV");
        tmpNode.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
        document.body.appendChild(tmpNode);
        arrDPI[0] = parseInt(tmpNode.offsetWidth);
        arrDPI[1] = parseInt(tmpNode.offsetHeight);
        tmpNode.parentNode.removeChild(tmpNode);
    }
    return arrDPI;
};

function px2mm(value) {
    let inch = value / getDPI()[0];
    return inch * 25.4;
};

function mm2Px(value) {
    let inch = value / 25.4;
    return inch * getDPI()[0];
}

export default {
    px2mm,
    mm2Px,
}
