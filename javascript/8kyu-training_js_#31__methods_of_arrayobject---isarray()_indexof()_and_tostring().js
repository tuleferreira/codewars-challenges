/* https://www.codewars.com/kata/5732b0351eb838d03300101d */

const blackAndWhite = arr => { return !Array.isArray(arr) ? "It's a fake array" : arr.toString().indexOf(13) > -1 && arr.indexOf(5) > -1 ? "It's a black array" : "It's a white array"; }