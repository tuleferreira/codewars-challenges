/* https://www.codewars.com/kata/5721c189cdd71194c1000b9b */

function grabDoll(dolls) {
	var bag = [];
	for (var i = 0; i < dolls.length; i++) {
		if (dolls[i] !== 'Hello Kitty' && dolls[i] !== 'Barbie doll') continue;
		else if (bag.length === 3) break;
		bag.push(dolls[i]);
	}
	return bag;
}