/* https://www.codewars.com/kata/53f1015fa9fe02cbda00111a */

function Ghost() {
	this.color = { 1: 'white', 2: 'yellow', 3: 'purple', 4: 'red' }[
		Math.floor(4 * Math.random()) + 1
	];
}
