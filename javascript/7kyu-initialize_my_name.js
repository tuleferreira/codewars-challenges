/* https://www.codewars.com/kata/5768a693a3205e1cc100071f */

function initializeNames(name) {
	name = name.split(' ');

	if (name.length > 2) {
		for (let i = 1; i < name.length - 1; i++) {
			name[i] = name[i][0] + '.';
		}
	}

	return name.join(' ');
}
