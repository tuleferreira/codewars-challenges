/* https://www.codewars.com/kata/594093784aafb857f0000122 */

const diff = (a, b) => {
	const r1 = a.filter(e => b.indexOf(e) === -1),
	  	  r2 = b.filter(e => a.indexOf(e) === -1);

	return [...new Set(r1.concat(r2).sort())];
}
