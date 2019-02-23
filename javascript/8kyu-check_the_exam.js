/* https://www.codewars.com/kata/5a3dd29055519e23ec000074 */

function checkExam(a, b) {
	var result = 0;

	for (var i = 0; i < a.length; i++) {
		if (a[i] === b[i]) {
			result += 4;
		} else if (b[i] === '') {
			result += 0;
		} else {
			result -= 1;
		}
	}

  
	return result > 0 ? result : 0;
}