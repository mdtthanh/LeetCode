/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    let a = new Date(date1).getTime()
    let b = new Date(date2).getTime()
    let result = Math.round(a-b)/(1000*60*60*24)
    return Math.abs(result)
};