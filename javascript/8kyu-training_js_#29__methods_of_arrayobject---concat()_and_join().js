/* https://www.codewars.com/kata/5731861d05d14d6f50000626 */

const bigToSmall = arr => {
	for (var r = [], i = 0; i < arr.length; i++) r = r.concat(arr[i]);
	return r.sort((a, b) => b - a).join('>');
};