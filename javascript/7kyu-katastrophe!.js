/* https://www.codewars.com/kata/55a3cb91d1c9ecaa2900001b */

function strongEnough(earthquake, age) {
	let dmg = earthquake
		.map(x => x.reduce((a, b) => a + b))
		.reduce((a, b) => a * b);
	let str = 1000 * Math.pow(0.99, age);
	return str >= dmg ? 'Safe!' : 'Needs Reinforcement!';
}
