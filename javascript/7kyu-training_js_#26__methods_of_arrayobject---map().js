/* https://www.codewars.com/kata/572fdeb4380bb703fc00002c */

function isolateIt(arr) {
	return arr.slice().map(a => {
		if (a.length % 2) {
			return (
				a.substring(0, a.length / 2) +
				'|' +
				a.substring(a.length / 2 + 1, a.length)
			);
		} else {
			return (
				a.substring(0, a.length / 2) + '|' + a.substring(a.length / 2, a.length)
			);
		}
	});
}