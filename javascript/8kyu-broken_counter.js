/* https://www.codewars.com/kata/526471539d52735c620000c6 */

function Counter(value = 0) {
	this.value = value;
}

Counter.prototype.increase = function() {
	this.value++;
};

Counter.prototype.getValue = function() {
	return this.value;
};

Counter.prototype.reset = function() {
	this.value = 0;
};