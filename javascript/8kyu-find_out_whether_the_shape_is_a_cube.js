/* https://www.codewars.com/kata/58d248c7012397a81800005c */

var cubeChecker = function(volume, side){
  return !(side <= 0) && (Math.pow(side, 3) === volume)
};