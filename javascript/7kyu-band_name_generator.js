/* https://www.codewars.com/kata/59727ff285281a44e3000011 */

function bandNameGenerator(str) {
	const cap = str.charAt(0).toUpperCase() + str.slice(1);

	if (str[0] === str[str.length - 1]) {
		return cap + str.slice(1);
	} else {
		return 'The ' + cap;
	}
}
