/* https://www.codewars.com/kata/57f24e6a18e9fad8eb000296 */

function howMuchILoveYou(nbPetals) {
	while (nbPetals > 6) nbPetals -= 6;
  return ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'][nbPetals -1]
}
