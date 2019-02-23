/* https://www.codewars.com/kata/5704aea738428f4d30000914 */

function tripleTrouble(one, two, three) {
	var r = [];
	for (var i = 0; i < one.length; i++) {
		r.push(one[i]);
		r.push(two[i]);
		r.push(three[i]);
	}
	return r.join('');
}