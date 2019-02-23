/* https://www.codewars.com/kata/577b9960df78c19bca00007e */

var findDigit = function(num, nth) {
	num = Math.abs(num).toString().split('').reverse().join('');
	
	if (nth > num.length) {
		return 0;
	} else if (nth <= 0) {
		return -1;
	} else {
		return parseInt(num[nth - 1]);
	}
};