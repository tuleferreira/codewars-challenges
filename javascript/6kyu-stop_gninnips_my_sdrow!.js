/* https://www.codewars.com/kata/5264d2b162488dc400000001 */

function spinWords(str) {
	str = str.split(/\s+/).map(function(x) {
		if (x.length >= 5) {
		  return x.split("").reverse().join("")
		} else {
		  return x
		}
	});

	return str.join(" ")
}