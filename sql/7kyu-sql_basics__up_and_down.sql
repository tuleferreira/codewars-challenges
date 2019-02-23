/* https://www.codewars.com/kata/595a3ba3843b0cbf8e000004 */

SELECT CASE 
         WHEN Sum(number1) % 2 = 0 THEN Max(number1) 
         ELSE Min(number1) 
       end AS number1, 
       CASE 
         WHEN Sum(number2) % 2 = 0 THEN Max(number2) 
         ELSE Min(number2) 
       end AS number2 
FROM   numbers; 