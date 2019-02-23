/* https://www.codewars.com/kata/54ff3102c1bad923760001f3 */

function getCount(str) {
	var vowelsCount = 0;

	str.split('').map(x => (/[aeiou]/gi.test(x) ? vowelsCount++ : x));

	return vowelsCount;
}