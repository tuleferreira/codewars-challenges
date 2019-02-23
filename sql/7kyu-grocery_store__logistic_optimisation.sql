/* https://www.codewars.com/kata/5a8ec692b17101bfc70001ba */

SELECT Count(DISTINCT( id )) AS unique_products, 
       producer 
FROM   products 
GROUP BY producer 
ORDER BY unique_products DESC, 
         producer; 