/* https://www.codewars.com/kata/5a58d889880385c2f40000aa */

const automorphic = n => {
	let r = true,
		str = String(n),
		sqr = String(n * n);

	for (let i = 0; i < str.length; i++) {
		if (str[str.length - 1 - i] !== sqr[sqr.length - 1 - i]) r = false;
	}

	return r ? 'Automorphic' : 'Not!!';
};
