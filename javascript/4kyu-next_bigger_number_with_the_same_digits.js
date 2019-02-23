/* https://www.codewars.com/kata/55983863da40caa2c900004e */

const nextBigger = n => {
  let nArr = n.toString().split("");
  
  for (let i = nArr.length - 1; i >= 0; i--) {
    if (nArr[i] > nArr[i - 1]) {
      let min = getMinLargest(nArr.slice(i - 1), nArr[i - 1]);
      let minIdx = nArr.lastIndexOf(min.toString());
      
      let temp = nArr[i - 1];
      nArr[i - 1] = nArr[minIdx];
      nArr[minIdx] = temp;
      
      return +nArr.slice(0, i).concat(nArr.slice(i).sort((a, b) => a - b)).join('');
    }
  }
  
  return -1;
}

const getMinLargest = (arr, n) => {
  let min;
  
  arr.forEach((el , i) => {
    if ((+el < min || min === undefined) && +el > +n) min = +el;
  });
  
  return min;
}