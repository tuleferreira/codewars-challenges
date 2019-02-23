/* https://www.codewars.com/kata/56582133c932d8239900002e */

function mostFrequentItemCount(collection) {
	var arr = [...new Set(collection)],
		count = [];

	collection.map(
		a =>
			count[arr.indexOf(a)] === undefined
				? count.push(1)
				: count[arr.indexOf(a)]++
	);
	return collection.length < 1 ? 0 : count.sort()[count.length - 1];
}
