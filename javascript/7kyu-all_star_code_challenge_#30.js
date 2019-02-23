/* https://www.codewars.com/kata/5866f0c8442e3fec050001ec */

var manCave = function(array) {
	let k = 'off';
	array.map(x => (x.name === 'Raj' ? (k = 'on') : x));
	if (k === 'on') {
		array = array.filter(a => a.gender !== 'female');
		for (var i = 0; i < array.length; i++) {
			array[i].status = 'Single';
		}
	}
	return array;
};