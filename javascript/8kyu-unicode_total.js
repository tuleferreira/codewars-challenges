/* https://www.codewars.com/kata/572b6b2772a38bc1e700007a */

function uniTotal(arr) {
	for (var r = 0, i = 0; i < arr.length; i++) {
		r += arr.charCodeAt([i]);
	}
	return r;
}
