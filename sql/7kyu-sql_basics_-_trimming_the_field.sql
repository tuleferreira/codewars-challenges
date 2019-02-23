/* https://www.codewars.com/kata/59401c25c15cbeb58d000028 */

SELECT id, 
       name, 
       REGEXP_REPLACE(characteristics, ',.*', '') AS characteristic 
FROM   monsters 
ORDER BY id; 