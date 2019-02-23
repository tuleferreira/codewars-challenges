/* https://www.codewars.com/kata/56598d8076ee7a0759000087 */

function calculateTip(amount, r) {
	r = r.toLowerCase();

	if (r === 'excellent') {
		return Math.ceil(amount * 20 / 100);
	} else if (r === 'great') {
		return Math.ceil(amount * 15 / 100);
	} else if (r === 'good') {
		return Math.ceil(amount * 10 / 100);
	} else if (r === 'poor') {
		return Math.ceil(amount * 5 / 100);
	} else if (r === 'terrible') {
		return Math.ceil(amount * 0 / 100);
	} else {
		return 'Rating not recognised';
	}
}
