/* https://www.codewars.com/kata/57873ab5e55533a2890000c7 */

//Beautiful
function timeCorrect(timestring) {
	var isValid = /^([0-9]?[0-9]):([0-9][0-9])(:[0-9][0-9])?$/.test(timestring);

	if (isValid) {
		var date = timestring.split(':').map(a => parseInt(a));

		if (date[2] > 59) {
			date[2] -= 60;
			date[1]++;
		}
		if (date[1] > 59) {
			date[1] -= 60;
			date[0]++;
		}
		if (date[0] >= 24) date[0] = date[0] % 24;

		return date.map(x => ('0' + x).slice(-2)).join(':');
	} else if (timestring == '') {
		return timestring;
	} else {
		return null;
	}
}
