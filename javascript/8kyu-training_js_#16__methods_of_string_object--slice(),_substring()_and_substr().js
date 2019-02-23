/* https://www.codewars.com/kata/57274562c8dcebe77e001012 */

function cutIt(arr) {
	var min = 999;
  
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length < min) {
			min = arr[i].length;
		}
	}

	for (i = 0; i < arr.length; i++) {
		arr[i] = arr[i].slice(0, min);
	}
	return arr;
}