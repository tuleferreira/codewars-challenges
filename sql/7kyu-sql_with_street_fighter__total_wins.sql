/* https://www.codewars.com/kata/5ac698cdd325ad18a3000170 */

SELECT name, 
       Sum(won)  AS won, 
       Sum(lost) AS lost 
FROM   fighters f 
       LEFT JOIN winning_moves w 
              ON f.move_id = w.id 
WHERE  w.move NOT IN ( 'Hadoken', 'Shouoken', 'Kikoken' ) 
GROUP  BY name 
ORDER  BY won DESC 
LIMIT  6; 