/* https://www.codewars.com/kata/572df796914b5ba27c000c90 */

function sortIt(arr) {
	var new1 = arr.slice();
	var frequency = arr.reduce( function (x, val) {
        x[val] = (x[val] || 0) + 1;
        return x;
    }, {} );

	return new1
		.sort((a, b) => {
			if (frequency[b] === frequency[a]) {
				return b - a;
			} else {
				return frequency[a] - frequency[b];
			}
		})
}