/* https://www.codewars.com/kata/5ab828bcedbcfc65ea000099 */

SELECT pokemon_name, 
       str * multiplier AS modifiedStrength, 
       element 
FROM   pokemon pk 
       LEFT JOIN multipliers mt 
              ON pk.element_id = mt.id 
WHERE  modifiedstrength >= 40 
ORDER  BY modifiedstrength DESC; 