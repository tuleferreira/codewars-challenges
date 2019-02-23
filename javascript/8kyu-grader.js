/* https://www.codewars.com/kata/53d16bd82578b1fb5b00128c */

function grader(s) {
	if (s > 1 || s < 0.6) {
		return 'F';
	} else if (s >= 0.9) {
		return 'A';
	} else if (s >= 0.8) {
		return 'B';
	} else if (s >= 0.7) {
		return 'C';
	} else {
		return 'D';
	}
}