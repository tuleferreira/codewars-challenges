/* https://www.codewars.com/kata/57fb142297e0860073000064 */

function product(s) {
	let exc = 0,
		que = 0;

	s = [...s];

	s.map(a => (a === '!' ? exc++ : que++));

	return exc * que;
}
