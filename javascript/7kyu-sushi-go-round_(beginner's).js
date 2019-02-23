/* https://www.codewars.com/kata/59619e4609868dd923000041 */

function totalBill(str) {
	let n = str.replace(/\s/g, '').length;
	return (n - Math.floor(n / 5)) * 2;
}
