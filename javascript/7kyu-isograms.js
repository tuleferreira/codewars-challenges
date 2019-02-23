/* https://www.codewars.com/kata/54ba84be607a92aa900000f1 */

const isIsogram = str => (/(.).*\1/).test(str.toLowerCase()) ? false : true