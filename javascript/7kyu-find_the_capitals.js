/* https://www.codewars.com/kata/539ee3b6757843632d00026b */

var capitals = function(word) {
	let r = [];

	word.split('').filter(a => (a.match(/[A-Z]/) ? r.push(word.indexOf(a)) : a));

	return r;
};
