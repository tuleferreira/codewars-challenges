/* https://www.codewars.com/kata/593b1909e68ff627c9000186 */

function nicknameGenerator(name) {
	return name.length <= 3
		? 'Error: Name too short'
		: /a|e|i|o|u/i.test(name[2]) ? name.substring(0, 4) : name.substring(0, 3);
}
