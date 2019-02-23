/* https://www.codewars.com/kata/56efc695740d30f963000557 */

String.prototype.toAlternatingCase = function() {
	var r = [];
	for (var i = 0; i < this.length; i++) {
		if (this[i] === this[i].toLowerCase()) {
			r.push(this[i].toUpperCase());
		} else {
			r.push(this[i].toLowerCase());
		}
	}
	return r.join('').toString();
};