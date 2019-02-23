/* https://www.codewars.com/kata/59491429952ac97ad9000106 */

SELECT LENGTH(number1 :: text) AS octnum1, 
       LENGTH(number2 :: text) AS octnum2, 
       LENGTH(number3 :: text) AS octnum3, 
       LENGTH(number4 :: text) AS octnum4, 
       LENGTH(number5 :: text) AS octnum5 
FROM   numbers; 