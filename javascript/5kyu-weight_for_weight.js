/* https://www.codewars.com/kata/55c6126177c9441a570000cc */

function orderWeight(strng) {
    return strng.split(" ").sort((a, b) => {
      let tempA = a.toString().split('').reduce((acc, d) => acc + +d, 0);
      let tempB = b.toString().split('').reduce((acc, d) => acc + +d, 0);

      if (tempA === tempB) {
        return a.toString().localeCompare(b.toString());
      }
      
      return tempA - tempB;
    }).join(" ");
}