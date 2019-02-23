/* https://www.codewars.com/kata/5506b230a11c0aeab3000c1f */

function evaporator(content, evap_per_day, threshold) {
	let useful = content * threshold * 0.01,
		dayCount = 0;

	while (content > useful) {
		content *= 1 - evap_per_day * 0.01;
		dayCount++;
	}

	return dayCount;
}
