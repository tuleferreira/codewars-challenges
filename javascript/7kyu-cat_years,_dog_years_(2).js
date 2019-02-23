/* https://www.codewars.com/kata/5a6d3bd238f80014a2000187 */

const ownedCatAndDog = (catYears, dogYears) => {
	const calc = (n, div) => Math.floor((n - 24) / div) + 2;
	return [
		catYears >= 24 ? calc(catYears, 4) : catYears >= 15 ? 1 : 0,
		dogYears >= 24 ? calc(dogYears, 5) : dogYears >= 15 ? 1 : 0,
	];
};
