/* https://www.codewars.com/kata/57a429e253ba3381850000fb */

function bmi(weight, height) {
	let total = weight / Math.pow(height, 2);
	return total <= 18.5
		? 'Underweight'
		: total <= 25.0 ? 'Normal' : total <= 30.0 ? 'Overweight' : 'Obese';
}