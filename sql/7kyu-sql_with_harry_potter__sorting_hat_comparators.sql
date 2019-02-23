/* https://www.codewars.com/kata/5abcf0f930488ff1a6000b66 */

SELECT * 
FROM   students 
WHERE  quality1 IN ( 'studious', 'hufflepuff' ) 
        OR quality2 IN ( 'intelligent', 'hufflepuff' ) 
        OR ( quality1 = 'evil' AND quality2 = 'cunning' ) 
        OR ( quality1 = 'brave' AND quality2 != 'evil' ); 