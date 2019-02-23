/* https://www.codewars.com/kata/57a083a57cb1f31db7000028 */

function powersOfTwo(n) {
	var s = 1,
  		r = [];

	while (n >= 0) {
		r.push(s);
		s = s * 2;
		n--;
	}
	return r;
}
