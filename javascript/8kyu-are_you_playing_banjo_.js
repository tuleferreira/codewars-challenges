/* https://www.codewars.com/kata/53af2b8861023f1d88000832 */

function areYouPlayingBanjo(name) {
  return name.search(/R/gi) ? name + ' does not play banjo' : name + ' plays banjo';
}