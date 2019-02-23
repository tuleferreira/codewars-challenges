/* https://www.codewars.com/kata/5672a98bdbdd995fad00000f */

const rps = (p1, p2) => {
	var p3;
	if (p1 === 'rock' && p2 === 'scissors') {
		p3 = 1;
	} else if (p1 === 'scissors' && p2 === 'paper') {
		p3 = 1;
	} else if (p1 === 'paper' && p2 === 'rock') {
		p3 = 1;
	} else if (p1 === p2) {
		return `Draw!`;
	} else {
		p3 = 2;
	}
	return `Player ${p3} won!`;
};
