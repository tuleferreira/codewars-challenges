/* https://www.codewars.com/kata/577bd8d4ae2807c64b00045b */

//This is horrible, but I'm not having a good day - lol

function declareWinner(f1, f2, firstAttacker) {
	let f1h = f1.health,
		f2h = f2.health,
		f1d = f1.damagePerAttack,
		f2d = f2.damagePerAttack;

	while (f1h > 0 || f2h > 0) {
		if (f1.name === firstAttacker) {
			f2h -= f1d;
			if (f2h <= 0) {
				break;
			}
			f1h -= f2d;
      			if (f1h <= 0) {
				break;
			}
		} else {
			f1h -= f2d;
			if (f1h <= 0) {
				break;
			}
			f2h -= f1d;
      			if (f2h <= 0) {
				break;
			}
		}
	}
  
  console.log(f1h);
  console.log(f2h);

  return f1h > f2h ? f1.name : f2.name;
}