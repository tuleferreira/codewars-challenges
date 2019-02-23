/* https://www.codewars.com/kata/546f922b54af40e1e90001da */

function alphabetPosition(text) {
var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

text = text.toLowerCase().replace(/[^a-zA-Z]/g, '').split('').map(x => alphabet.indexOf(x) + 1).join(' ');

return text;
}