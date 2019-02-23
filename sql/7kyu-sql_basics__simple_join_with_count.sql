/* https://www.codewars.com/kata/580918e24a85b05ad000010c */

SELECT people.id, 
       people.name, 
       COUNT(toys.id) AS toy_count
FROM people
JOIN toys 
  ON people.id = toys.people_id
GROUP BY people.id;