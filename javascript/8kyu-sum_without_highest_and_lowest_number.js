/* https://www.codewars.com/kata/576b93db1129fcf2200001e6 */

const sumArray = array => array === null || array.length < 3 ? 0 : array.sort((a,b)=>a-b).slice(1,array.length -1).reduce((x,y)=>x+y)