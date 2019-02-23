/* https://www.codewars.com/kata/5a8ed96bfd8c066e7f00011a */

SELECT Count(*) AS products, 
       country 
FROM   products 
WHERE  country IN ( 'United States of America', 'Canada' ) 
GROUP BY country 
ORDER BY products DESC; 