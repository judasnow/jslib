/**
 * Created by judasnow on 21/06/2017.
 */


function saveCookie(name, value, opt) {
    var _opt = Object.assign(opt, {path: '/'})
    if (value) {
        cookie.save(name, value, _opt)
    } else {

    }
}

function getCookie(name) {
    return cookie.load(name, undefined)
}

function deleteCookie(name) {
    cookie.remove(name, { path: '/' })
}