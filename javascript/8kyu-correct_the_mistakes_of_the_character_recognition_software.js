/* https://www.codewars.com/kata/577bd026df78c19bca0002c0 */

function correct(string) {
    return string.replace(/0/g, "O")
                 .replace(/5/g, "S")
                 .replace(/1/g, "I");
}