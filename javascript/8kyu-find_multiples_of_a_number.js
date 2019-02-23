/* https://www.codewars.com/kata/58ca658cc0d6401f2700045f */

function findMultiples(i, limit) {
	var r = [],
		n = i,
		count = 0;
		
	while (count < Math.floor(limit / i)) {
		r.push(n);
		n += i;
		count++;
	}
	return r;
}
