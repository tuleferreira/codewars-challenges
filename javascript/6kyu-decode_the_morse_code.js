/* https://www.codewars.com/kata/54b724efac3d5402db00065e */

decodeMorse = function(morseCode) {
	var decod = morseCode.toLowerCase()
    .trim()
		.split('   ')
		.map(a => a.split(' ').map(b => MORSE_CODE[b]).join(''))
		.join(' ');
		
	return decod.toUpperCase().trim()
};