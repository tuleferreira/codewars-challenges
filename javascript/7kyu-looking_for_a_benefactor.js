/* https://www.codewars.com/kata/569b5cec755dd3534d00000f */

function newAvg(arr, newavg) {
	const r = newavg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0);
	return r <= 0 ? error : Math.ceil(r);
}
