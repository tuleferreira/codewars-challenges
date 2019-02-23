/* https://www.codewars.com/kata/5786f8404c4709148f0006bf */

function startingMark(bodyHeight) {
	var a = { x: 1.52, y: 9.45 },
		b = { x: 1.83, y: 10.67 },
		m = (b.y - a.y) / (b.x - a.x);
    
	return Math.round((m * bodyHeight + b.y - m * b.x) * 100) / 100;
}