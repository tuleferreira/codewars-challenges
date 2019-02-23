/* https://www.codewars.com/kata/58e0cb3634a3027180000040 */

function sortByValueAndIndex(array) {
  return array.map((e,i)=>[e,i+1]).sort((x,y)=>(x[0]*x[1])-(y[0]*y[1])).map(e=>e[0])
}