/* https://www.codewars.com/kata/577a6e90d48e51c55e000217 */

var hotpo = function(n) {
	//if(n == 0) return 0;
	var count = 0;
	while (n > 1) {
		if (n % 2 === 0) {
			n = n / 2;
			count++;
		} else {
			n = n * 3 + 1;
			count++;
		}
	}
	return count;
};