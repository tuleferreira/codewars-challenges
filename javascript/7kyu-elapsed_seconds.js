/* https://www.codewars.com/kata/517b25a48557c200b800000c */

function elapsedSeconds(startDate, endDate) {
	var d1 = new Date(startDate);
	var d2 = new Date(endDate);

	return (d2 - d1) / 1000;
}
