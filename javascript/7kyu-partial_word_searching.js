/* https://www.codewars.com/kata/54b81566cd7f51408300022d */

function wordSearch(query, seq) {
	let r = seq.filter(x => x.toLowerCase().includes(query.toLowerCase()));
	return r.length === 0 ? ['Empty'] : r;
}
