/* https://www.codewars.com/kata/537baa6f8f4b300b5900106c */

var circleArea = function(radius) {
	return radius > 0 && typeof radius === 'number'
		? parseFloat((Math.PI * Math.pow(radius, 2)).toFixed(2))
		: false;
};
