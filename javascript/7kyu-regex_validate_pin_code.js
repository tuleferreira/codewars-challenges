/* https://www.codewars.com/kata/55f8a9c06c018a0d6e000132 */

const validatePIN = pin => pin.match(/^\d{4}$|^\d{6}$/) && (pin.length == 4 || pin.length == 6) ? true : false;