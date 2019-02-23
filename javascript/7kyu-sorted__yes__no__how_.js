/* https://www.codewars.com/kata/580a4734d6df748060000045 */

function isSortedAndHow(array) {
	const asc = array.slice().sort((a, b) => a - b).toString(),
		des = array.slice().sort((a, b) => b - a).toString();
    
	if (array.toString() == asc) {
		return 'yes, ascending';
	} else if (array.toString() == des) {
		return 'yes, descending';
	} else {
		return 'no';
	}
}
