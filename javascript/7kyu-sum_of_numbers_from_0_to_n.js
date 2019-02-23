/* https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763 */

var SequenceSum = (function() {
	function SequenceSum() {}

	SequenceSum.showSequence = function(count) {
		let eq = [],
	  		r = 0;
      
		if (count < 0) {
			return `${count}<0`;
		} else if (count === 0) {
			return `${count}=0`;
		} else {
			for (var i = 0; i <= count; i++) {
				eq.push(i);
				r += i;
			}
			return `${eq.join('+')} = ${r}`;
		}
	};

	return SequenceSum;
})();
