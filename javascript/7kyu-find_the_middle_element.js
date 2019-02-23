/* https://www.codewars.com/kata/545a4c5a61aa4c6916000755 */

var gimme = function(inputArray) {
	var sortArray = inputArray.slice().sort((a, b) => a - b);

	return inputArray.indexOf(sortArray[(sortArray.length - 1) / 2]);
};