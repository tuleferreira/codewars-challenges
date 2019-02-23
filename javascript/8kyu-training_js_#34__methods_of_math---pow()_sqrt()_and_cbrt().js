/* https://www.codewars.com/kata/5733f948d780e27df6000e33 */

const cutCube = (volume,n) => Number.isInteger(Math.cbrt(n)) && Number.isInteger(Math.cbrt(volume /n))