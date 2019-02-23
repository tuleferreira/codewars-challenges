/* https://www.codewars.com/kata/552564a82142d701f5001228 */

const discoverOriginalPrice = (d, s) => {
	return parseFloat((100 * d / (100 - s)).toFixed(2));
};
