/* https://www.codewars.com/kata/56747fd5cb988479af000028 */

function getMiddle(s) {
	var i = s.length;
	var middleOdd = (i - 1) / 2 + 1;
	var middleEven = i / 2;
	if (i & 1) {
		return s.substring(middleOdd, middleOdd - 1);
	} else {
		return s.substring(middleEven - 1, middleEven + 1);
	}
	return;
}
