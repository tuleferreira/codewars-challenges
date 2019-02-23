/* https://www.codewars.com/kata/55a75e2d0803fea18f00009d */

const slope = p => (p[2]-p[0]) === 0 ? 'undefined' : '' + (p[3]-p[1])/(p[2]-p[0]);