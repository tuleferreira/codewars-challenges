/* https://www.codewars.com/kata/52bc74d4ac05d0945d00054e */

function firstNonRepeatingLetter(s) {
	var arra1 = s.split('');
	var result = '';
	var ctr = 0;

	for (var x = 0; x < arra1.length; x++) {
		ctr = 0;

		for (var y = 0; y < arra1.length; y++) {
			if (arra1[x].toLowerCase() === arra1[y].toLowerCase()) {
				ctr += 1;
			}
		}

		if (ctr < 2) {
			result = arra1[x];
			break;
		}
	}
	return result;
}