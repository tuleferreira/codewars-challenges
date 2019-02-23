/* https://www.codewars.com/kata/57ebdf944cde58f973000405 */

// reverse the letters in the sentence
function reverser(sentence) {
	return sentence.split(' ').map(a => a.split('').reverse().join('')).join(' ');
}
