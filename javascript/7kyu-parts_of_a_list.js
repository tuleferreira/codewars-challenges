/* https://www.codewars.com/kata/56f3a1e899b386da78000732 */

function partlist(arr) {
	var def = arr.slice();
	var r = [];

	for (var i = 0; i < arr.length - 1; i++) {
		r.push([def.slice(0, i + 1).join(' '), def.splice(i + 1).join(' ')]);

		def = arr.slice();
	}

	return r;
}
