/* https://www.codewars.com/kata/5a360620f28b82a711000047 */

function defineSuit(a) {
  return a.includes("♣")
    ? "clubs"
    : a.includes("♦")
      ? "diamonds"
      : a.includes("♥") ? "hearts" : "spades";
}