/* https://www.codewars.com/kata/58f0ba42e89aa6158400000e */

function foldTo(distance) {
	let tkn = 0.0001,
		count = 0;
    
	if (distance <= 0) {
		return null;
	} else {
		while (tkn < distance) {
			tkn = tkn * 2;
			count++;
		}
	}

	return count;
}
