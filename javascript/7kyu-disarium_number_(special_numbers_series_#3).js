/* https://www.codewars.com/kata/5a53a17bfd56cb9c14000003 */

const disariumNumber = n => `${[...String(n)].map((e, i) => Math.pow(e, i + 1)).reduce((a, b) => a + b) === n ? 'Disarium' : 'Not'} !!`;
