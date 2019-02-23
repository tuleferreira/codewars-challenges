/* https://www.codewars.com/kata/5761a717780f8950ce001473 */

//this is beautiful :)
function calculateAge(a, b) {
	return `You ${b - a > 0
		? `are ${b - a === 1 ? `${b - a} year` : `${b - a} years`} old.`
		: b - a === 0
			? `were born this very year!`
			: `will be born in ${a - b === 1
					? `${a - b} year`
					: `${a - b} years`}.`}`;
}