/* https://www.codewars.com/kata/53d6387b83db278202000802 */

const liftoff = instructions => `${instructions.sort((a, b) => b - a).join(' ')} liftoff!`;
