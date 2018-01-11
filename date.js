const {DateTime} = require('luxon')

// 基本的时间格式化
function formatDate (date) {
  let d = date.getDate();
  let m = date.getMonth() + 1;
  let y = date.getFullYear();

  let h = date.getHours();
  let minu = date.getMinutes();
  let s = date.getSeconds();

  return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d) + " " + (h <= 9 ? '0' + h : h) + ":"
    + (minu <= 9 ? '0' + minu : minu) + ":" + (s <= 9 ? '0' + s : s);
}

// 给数字加上指定的前导零
function pad (num, size) {
  var s = num + ''
  while (s.length < size) s = '0' + s
  return s
}

// 获取 refDate 所在年的第 weekNo 周的日期范围
function getWeekRange (refDate, weekNumber) {
  let _refDate = new Date(refDate)
  let d = DateTime.fromJSDate(_refDate)

  let numOfdaysPastSinceLastMonday = eval(_refDate.getDay() - 1)
  _refDate.setDate(_refDate.getDate() - numOfdaysPastSinceLastMonday)
  let weekNoToday = d.weekNumber
  let weeksInTheFuture = eval(weekNumber - weekNoToday)
  _refDate.setDate(_refDate.getDate() + eval(7 * weeksInTheFuture))

  let rangeIsFrom = new Date(_refDate)

  _refDate.setDate(_refDate.getDate() + 6)
  let rangeIsTo = _refDate

  return {
    year: _refDate.year,
    weekNumber: weekNumber,
    from: rangeIsFrom,
    to: rangeIsTo
  }
}

// 获取 refDate 在一年中的哪一周，以及该周的日期范围
function getWeekInfo (refDate) {
  let d = DateTime.fromJSDate(refDate)
  let weekNumber = d.weekNumber
  return getWeekRange(refDate, weekNumber)
}

module.exports = {
  getWeekRange,
  getWeekInfo,
  formatDate,
  pad
}
