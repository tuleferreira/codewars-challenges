/* https://www.codewars.com/kata/58111f4ee10b5301a7000175 */

SELECT age, COUNT(*) as people_count
FROM people
GROUP BY age;