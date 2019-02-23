/* https://www.codewars.com/kata/5b043e3886d0752685000009 */

function michaelPays(costs) {
	return costs < 5
		? +costs.toFixed(2)
		: costs / 3 <= 10 ? +(costs / 3 * 2).toFixed(2) : +(costs - 10).toFixed(2);
}
