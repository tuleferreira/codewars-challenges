/* https://www.codewars.com/kata/573fb9223f9793e485000453 */

var regex=/(\d)(?=(\d{3})+(?!\d))/g
const addCommas = (money,reg) => money.replace(reg, "$1,");