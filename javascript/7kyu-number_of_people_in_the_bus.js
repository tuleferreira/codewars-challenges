/* https://www.codewars.com/kata/5648b12ce68d9daa6b000099 */

var number = function(busStops) {
	var results = 0;
	for (var i = 0; i < busStops.length; i++) {
		results += busStops[i].reduce((a, b) => a - b);
	}
	return results;
};