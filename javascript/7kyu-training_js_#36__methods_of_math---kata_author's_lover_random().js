/* https://www.codewars.com/kata/5735956413c2054a680009ec */

function rndCode() {
	var code = [];
	var symbols = '~!@#$%^&*';

	for (var i = 0; i < 2; i++) {
		code.push(String.fromCharCode(~~(Math.random() * (77 - 65) + 65)));
	}

	code.push(~~(Math.random() * (9999 - 1000) + 1000));

	for (var j = 0; j < 2; j++) {
		code.push(symbols[~~(symbols.length * Math.random())]);
	}

	return code.join('');
}