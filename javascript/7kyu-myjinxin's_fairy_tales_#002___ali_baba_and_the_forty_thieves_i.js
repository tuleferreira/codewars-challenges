/* https://www.codewars.com/kata/57de36c721bc491a54000178 */

function aliBaba(trying) {
	var a = 0,
		  b = 0;
  
  trying.map(	x => x.includes('Open, Sesame')	? (a = trying.indexOf(x)+1)	: x.includes('Shut, Sesame') ? (b = trying.indexOf(x)+1) : x);
  
  return a === 0 ?  "Ali Baba didn't get the treasure and he was still a poor man." : a < b ? "Ali Baba got a lot of treasures and he lived a rich life." : "Ali Baba got a lot of treasure and he was finally killed by the robbers."
}
