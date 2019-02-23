/* https://www.codewars.com/kata/5735e39313c205fe39001173 */

function countAnimals(animals, count) {
	for (var r = [], i = 0; i < count.length; i++) {
		r.push((animals.match(new RegExp(count[i] + '', 'gi')) || []).length);
	}

	return r;
}