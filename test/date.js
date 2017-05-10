/**
 * Created by judasnow on 12/06/2017.
 */

var assert = require('assert')
var date = require('../date.js')


describe('date', function() {
  describe('getWeekRange', function() {
    it('', function() {
      for (let weekNo=1; weekNo < 53; weekNo++) {
        console.log(date.getWeekRange(new Date(), weekNo))
      }
    })
  })
})