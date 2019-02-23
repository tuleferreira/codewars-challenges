/* https://www.codewars.com/kata/57613fb1033d766171000d60 */

uefaEuro2016 = (t, s) => `At match ${t[0]} - ${t[1]}, ${s[0] === s[1] ? `teams played draw.` : s[0] > s[1] ? `${t[0]} won!` : `${t[1]} won!`}`