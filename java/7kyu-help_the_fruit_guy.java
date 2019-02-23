/* https://www.codewars.com/kata/557af4c6169ac832300000ba */

public class FruitGuy{
 
 public static String[] removeRotten(String[] fruitBasket) {
    if (fruitBasket == null) return new String[0];
    
    for(int i = 0; i < fruitBasket.length; i++) {
      if(fruitBasket[i].contains("rotten")) {
        fruitBasket[i] = fruitBasket[i].replaceAll("rotten", "").toLowerCase();
      }
    }
    
    return fruitBasket;
 }

}