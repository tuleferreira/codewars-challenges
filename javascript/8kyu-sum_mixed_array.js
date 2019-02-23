/* https://www.codewars.com/kata/57eaeb9578748ff92a000009 */

const sumMix = x => x.length === 1 ? parseInt(x) : x.reduce((a,b) => parseInt(a) + parseInt(b))