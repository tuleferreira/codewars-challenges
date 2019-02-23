/* https://www.codewars.com/kata/563cf89eb4747c5fb100001b */

function removeSmallest(numbers) {
	numbers.splice(numbers.indexOf(Math.min(...numbers)), 1);
	return numbers;
}