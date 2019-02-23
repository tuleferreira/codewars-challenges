/* https://www.codewars.com/kata/580fe518cefeff16d00000c0 */

CREATE FUNCTION increment(i integer) returns integer AS $$ 
  BEGIN 
    RETURN i + 1; 
  END;
$$ language plpgsql;