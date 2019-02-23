/* https://www.codewars.com/kata/563e320cee5dddcf77000158 */

const getAverage = marks => Math.floor(marks.reduce( ( p, c ) => p + c, 0 ) / marks.length);