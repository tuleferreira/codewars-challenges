/* https://www.codewars.com/kata/55d24f55d7dd296eb9000030 */

var summation = function(num) {
	var r = 0;
	while (num > 0) {
		r += num;
		num--;
	}
	return r;
};