/* https://www.codewars.com/kata/59c5f4e9d751df43cf000035 */

function solve(s) {
	let r = 0;
	let count = 0;
	for (let i = 0; i < s.length; i++) {
		if (/[aeiou]/.test(s[i])) {
			count++;
			for (let j = 1 + i; j < s.length; j++) {
				if (/[aeiou]/.test(s[j])) {
					count++;
				} else {
					break;
				}
			}
		}
		if (count > r) r = count;
		count = 0;
	}
	return r;
}
