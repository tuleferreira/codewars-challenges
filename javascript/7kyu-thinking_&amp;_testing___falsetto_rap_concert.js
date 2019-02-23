/* https://www.codewars.com/kata/56de38c1c54a9248dd0006e4 */

function testit(s) {
	s = s.split('');

	for (let i = 0; i < s.length; i++) {
		if (/[a-z]/i.test(s[i])) {
			if (i % 2 == 0) {
				if (s[i] === 'z' || s[i] === 'Z') {
					s[i] = String.fromCharCode(s[i].charCodeAt(0) - 25);
				} else {
					s[i] = String.fromCharCode(s[i].charCodeAt(0) + 1);
				}
			} else if (i % 2 == 1) {
				if (s[i] === 'a' || s[i] === 'A') {
					s[i] = String.fromCharCode(s[i].charCodeAt(0) + 25);
				} else {
					s[i] = String.fromCharCode(s[i].charCodeAt(0) - 1);
				}
			}
		}
	}

	return s.join('');
}
