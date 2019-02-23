/* https://www.codewars.com/kata/58989a079c70093f3e00008d */

function cartesianNeighbor(x, y) {
	let r = [];
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (x - 1 + i === x && y - 1 + j === y) continue;
			r.push([x - 1 + i, y - 1 + j]);
		}
	}
	return r;
}
