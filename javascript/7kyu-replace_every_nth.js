/* https://www.codewars.com/kata/57fcaed83206fb15fd00027a */

function replaceNth(text, n, oldValue, newValue) {
	var letter = text.split('');
	var count = 0;

	for (var i = 0; i < letter.length; i++) {
		if (letter[i] === oldValue) {
			count++;
			if (count % n === 0) {
				letter[i] = newValue;
			}
		}
	}

	return n < 0 ? text : letter.join('');
}
