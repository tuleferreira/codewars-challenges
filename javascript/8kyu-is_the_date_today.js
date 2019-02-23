/* https://www.codewars.com/kata/563c13853b07a8f17c000022 */

function isToday(date) {
  var today = new Date();
  return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
}