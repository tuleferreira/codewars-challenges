/* https://www.codewars.com/kata/57b6f850a6fdc76523001162 */

function counterEffect(hitCount) {
	let r = [];
	[...hitCount].map(a => r.push([parseInt(a)]));

	r.map(x => {
		for (let i = parseInt(x) - 1; i >= 0; i--) {
			x.unshift(i);
		}
	});

	return r;
}
