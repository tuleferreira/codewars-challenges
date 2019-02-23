/* https://www.codewars.com/kata/57284d23e81185ae6200162a */

function topSecret(str) {
	var decode = [];
	for (var i = 0; i < str.length; i++) {
		if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 67) {
			decode.push(String.fromCharCode(str[i].charCodeAt() + 23));
		} else if (str[i].charCodeAt() > 67 && str[i].charCodeAt() <= 90) {
			decode.push(String.fromCharCode(str[i].charCodeAt() - 3));
		} else if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 99) {
			decode.push(String.fromCharCode(str[i].charCodeAt() + 23));
		} else if (str[i].charCodeAt() > 99 && str[i].charCodeAt() <= 122) {
			decode.push(String.fromCharCode(str[i].charCodeAt() - 3));
		} else {
			decode.push(str[i]);
		}
	}
	return decode.join('');
}

answer1 = '2214';
answer2 = 'OPjMVb';
answer3 = 'Barbie doll';