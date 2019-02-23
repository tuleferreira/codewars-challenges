/* https://www.codewars.com/kata/565f5825379664a26b00007c */

function getSize(width, height, depth) {
	var results = [0, 0];
	results[0] = 2 * (width * height) + 2 * (width * depth) + 2 * (height * depth);
	results[1] = width * height * depth;

	return results;
}