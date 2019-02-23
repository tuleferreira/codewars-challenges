/* https://www.codewars.com/kata/59413d53f5c3947364000016 */

SELECT REGEXP_SPLIT_TO_TABLE(text, '[aeiou]', 'i') AS results 
FROM   random_string; 