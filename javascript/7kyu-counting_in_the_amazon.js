/* https://www.codewars.com/kata/55b95c76e08bd5eef100001e */

function countArara(n) {
	return n % 2 === 0
		? 'adak '.repeat(n / 2).trim()
		: `${'adak '.repeat((n - 1) / 2).trim()} anane`;
}
