/* https://www.codewars.com/kata/594633020a561e329a0000a2 */

SELECT race, 
       COUNT(*) as count
FROM demographics
GROUP BY race
ORDER BY count DESC;