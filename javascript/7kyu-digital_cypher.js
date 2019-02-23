/* https://www.codewars.com/kata/592e830e043b99888600002d */

function encode(str, n) {
	var letters = {};
	var plus = (n + '').split('').map(a => parseInt(a));

	//Letters Obj
	for (let i = 0; i < 26; i++) {
		letters[String.fromCharCode(97 + i)] = i + 1;
	}

	var arr = str.split('').map((a, i) => letters[a]);

	for (let i = 0; i < arr.length; i++) {
		plus.push(plus[i]);
		arr[i] += plus[i];
	}

	return arr;
}
