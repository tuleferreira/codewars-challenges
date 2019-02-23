/* https://www.codewars.com/kata/55c45be3b2079eccff00010f */

const order = words => words.split(" ").sort((a, b) => {
                          a = a.replace(/[^\d]+/gi, "");
                          b = b.replace(/[^\d]+/gi, "")
                          
                          return +a - +b;
                        }).join(" ");