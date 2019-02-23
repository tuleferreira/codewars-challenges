/* https://www.codewars.com/kata/571c1e847beb0a8f8900153d */

function rakeGarden(garden) {
	return garden
		.split(' ')
		.map(e => (e === 'rock' ? 'rock' : 'gravel'))
		.join(' ');
}
