/* https://www.codewars.com/kata/57cf3dad05c186ba22000348 */

function decodeResistorColors(bands) {
	const colors = {
		black: 0,
		brown: 1,
		red: 2,
		orange: 3,
		yellow: 4,
		green: 5,
		blue: 6,
		violet: 7,
		gray: 8,
		white: 9,
	};

	let pct = bands.includes('silver') ? 10 : bands.includes('gold') ? 5 : 20;
	let result = '';

	bands = bands.split(' ');

	result = String(
		(colors[bands[0]] + '' + colors[bands[1]]) *
			(1 + '' + '0'.repeat(colors[bands[2]]))
	);

	if (result.length < 4) {
		return `${result} ohms, ${pct}%`;
	} else if (result.length < 7) {
		result = +result / 1000;
		return `${result}k ohms, ${pct}%`;
	} else {
		result = +result / 1000000;
		return `${result}M ohms, ${pct}%`;
	}
}
