/* https://www.codewars.com/kata/54e9554c92ad5650fe00022b */

function toCurrency(price) {
	let r = '';
	price = [...String(price)].reverse();
  
	for (let i = 0; i < price.length; i++) {
		r += price[i];
		if ((i + 1) % 3 === 0 && i !== price.length - 1) {
			r += ',';
		}
	}
  
	return r.split('').reverse().join('');
}