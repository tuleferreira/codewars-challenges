/* https://www.codewars.com/kata/587c2d08bb65b5e8040004fd */

function pointsPer48(ppg, mpg) {
	return Math.round(ppg / mpg * 48 * 10) / 10 || 0;
}