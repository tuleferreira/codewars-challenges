/* https://www.codewars.com/kata/58d5b39b1c0402c5f7002e0d */

function bearDollars(arr) {
	return arr
		.map(
			a =>
				a[1].toLowerCase() === 'close friend'
					? a[0] * 25
					: a[1].toLowerCase() === 'friend'
						? a[0] * 50
						: a[1].toLowerCase() === 'acquaintance' ? a[0] * 100 : a[0] * 125
		)
		.reduce((x, y) => x + y, 0);
}
