/* https://www.codewars.com/kata/5c0ae69d5f72394e130025f6 */

SELECT name, 
       greeting, 
       SUBSTRING(greeting FROM '(?<=\#)[\d]+') AS user_id 
FROM   greetings; 