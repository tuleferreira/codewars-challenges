/* https://www.codewars.com/kata/578a8a01e9fd1549e50001f1 */

function periodIsLate(last, today, cycleLength) {
	var timeDiff = Math.abs(today.getTime() - last.getTime());
	return Math.ceil(timeDiff / (1000 * 3600 * 24)) > cycleLength;
}
