/* https://www.codewars.com/kata/54d418bd099d650fa000032d */

const vampire_test = (a, b) => {
	const fix = n =>
		(n + '').replace(/-/g, '').split('').sort((x, y) => x - y).join('');

	return a < 0 && b < 0 ? false : fix(a * b) === fix(a + '' + b);
};
