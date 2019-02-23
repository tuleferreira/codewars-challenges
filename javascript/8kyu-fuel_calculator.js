/* https://www.codewars.com/kata/57b58827d2a31c57720012e8 */

function fuelPrice(litres, pricePerLiter) {
	return (
		Math.round(
			litres *
				(litres < 2
					? pricePerLiter
					: litres < 4
						? pricePerLiter - 0.05
						: litres < 6
							? pricePerLiter - 0.1
							: litres < 8
								? pricePerLiter - 0.15
								: litres < 10 ? pricePerLiter - 0.2 : pricePerLiter - 0.25) *
				100
		) / 100
	);
}