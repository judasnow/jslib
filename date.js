const {DateTime} = require('luxon')

// 基本的时间格式化
function formatDate (date) {
  var d = date.getDate();
  var m = date.getMonth() + 1;
  var y = date.getFullYear();

  var h = date.getHours();
  var minu = date.getMinutes();
  var s = date.getSeconds();

  return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d) + " " + (h <= 9 ? '0' + h : h) + ":"
    + (minu <= 9 ? '0' + minu : minu) + ":" + (s <= 9 ? '0' + s : s);
}

function pad (num, size) {
  var s = num + ''
  while (s.length < size) s = '0' + s
  return s
}

// 获取 refDate 所在年的第 weekNo 周的日期范围
function getWeekRange (refDate, weekNo) {
  let _refDate = new Date(refDate)
  let d = DateTime.fromJSDate(_refDate)

  let numOfdaysPastSinceLastMonday = eval(_refDate.getDay() - 1)
  _refDate.setDate(_refDate.getDate() - numOfdaysPastSinceLastMonday)
  let weekNoToday = d.weekNumber
  let weeksInTheFuture = eval(weekNo - weekNoToday)
  _refDate.setDate(_refDate.getDate() + eval(7 * weeksInTheFuture))

  let rangeIsFrom = `${_refDate.getFullYear()}-${eval(pad(_refDate.getMonth() + 1), 2)}-${pad(_refDate.getDate(), 2)}`

  _refDate.setDate(_refDate.getDate() + 6)
  let rangeIsTo = `${_refDate.getFullYear()}-${eval(pad(_refDate.getMonth() + 1), 2)}-${pad(_refDate.getDate(), 2)}`

  return rangeIsFrom + " to " + rangeIsTo
}

module.exports = {
  getWeekRange,
  formatDate,
  pad
}