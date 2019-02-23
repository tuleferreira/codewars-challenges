/* https://www.codewars.com/kata/573023c81add650b84000429 */

function countGrade(scores) {
	var count = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 };

	scores.slice().filter(a => {
		if (a === 100) {
			return count.S++;
		} else if (a >= 90) {
			count.A++;
		} else if (a >= 80) {
			count.B++;
		} else if (a >= 60) {
			count.C++;
		} else if (a >= 0) {
			count.D++;
		} else {
			count.X++;
		}
	});
  return count;
}