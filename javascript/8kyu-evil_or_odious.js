/* https://www.codewars.com/kata/56fcfad9c7e1fa2472000034 */

const evil = n => n.toString(2).match(/1/g).length % 2 === 0 ? "It's Evil!" : "It's Odious!";