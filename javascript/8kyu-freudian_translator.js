/* https://www.codewars.com/kata/5713bc89c82eff33c60009f7 */

const toFreud = string => string.length === 0 ? '' : 'sex '.repeat(string.split(' ').length).trim()