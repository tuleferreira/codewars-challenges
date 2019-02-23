/* https://www.codewars.com/kata/56b29582461215098d00000f */

function pipeFix(n) {
	for (var r = [], i = n[0]; i <= n[n.length - 1]; i++) {
		r.push(i);
	}

	return r;
}