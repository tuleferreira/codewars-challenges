/* https://www.codewars.com/kata/5a8eb3fb57c562110f0000a1 */

SELECT id, 
       name, 
       stock 
FROM   products 
WHERE  stock <= 2 
       AND producent = 'CompanyA' 
ORDER BY id; 