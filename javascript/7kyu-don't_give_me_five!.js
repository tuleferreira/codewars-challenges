/* https://www.codewars.com/kata/5813d19765d81c592200001a */

function dontGiveMeFive(start, end) {
	let r = [];
	for (let i = start; i <= end; i++) {
			r.push(i);
	}
  
	return r.filter(a=> !(a + '').includes(5)).length
  }
