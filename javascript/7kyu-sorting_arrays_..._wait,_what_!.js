/* https://www.codewars.com/kata/56bac4c34537cf1e270005a1 */

Array.prototype.sort = function(type) {
	var arr = this.valueOf();
	var swapped;
	do {
		swapped = false;
		var b;

		for (var i = 0; i < arr.length - 1; i++) {
			if (type === undefined || type == 'asc') b = arr[i] > arr[i + 1];
			else b = arr[i] < arr[i + 1];
			if (b) {
				var temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
	return arr;
};