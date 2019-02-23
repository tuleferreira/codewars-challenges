/* https://www.codewars.com/kata/5601409514fc93442500010b */

function betterThanAverage(classPoints, yourPoints) {
	var sum = classPoints.reduce((a, b) => a + b, 0);
	return sum / classPoints.length < yourPoints ? true : false;
}