/* https://www.codewars.com/kata/594804a218e96caa8d00051b */

SELECT id, 
       ASCII(name) AS name, 
       birthday, 
       ASCII(race) AS race 
FROM   demographics 