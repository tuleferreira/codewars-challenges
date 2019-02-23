/* https://www.codewars.com/kata/544047f0cf362503e000036e */

function findBall(scales) {
	// call scales.getWeight() max 4 times
	// return indexOfHeavyBall;
	var x = scales.getWeight([0, 1, 2, 3], [4, 5, 6, 7]);
	if (x === -1) {
		for (var i = 1; i < 4; i++) {
			var leftPan = [i - 1];
			var rightPan = [i];
			var w = scales.getWeight(leftPan, rightPan);

			if (w === -1) {
				// left pan is heavier
				return leftPan[0];
			}

			if (w === 1) {
				// right pan is heavier
				return rightPan[0];
			}
		}
	} else {
		for (var i = 5; i < 8; i++) {
			var leftPan = [i - 1];
			var rightPan = [i];
			var w = scales.getWeight(leftPan, rightPan);

			if (w === -1) {
				// left pan is heavier
				return leftPan[0];
			}

			if (w === 1) {
				// right pan is heavier
				return rightPan[0];
			}
		}
	}
}
