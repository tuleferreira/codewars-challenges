/* https://www.codewars.com/kata/56d6c333c9ae3fc32800070f */

const yearDays = year => `${year} has ${year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0) ? 366 : 365} days`