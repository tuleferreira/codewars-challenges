/* https://www.codewars.com/kata/54da539698b8a2ad76000228 */

const isValidWalk = walk => {
  const filterDir = char => walk.filter(x => x === char).length;
  return filterDir("n") === filterDir("s") && filterDir("w") === filterDir("e") && walk.length === 10;
}