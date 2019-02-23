/* https://www.codewars.com/kata/55cbd4ba903825f7970000f5 */

function getGrade(s1, s2, s3) {
	let r = (s1 + s2 + s3) / 3;
	return r < 60 ? 'F' : r < 70 ? 'D' : r < 80 ? 'C' : r < 90 ? 'B' : 'A';
}