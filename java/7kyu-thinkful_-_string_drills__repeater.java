/* https://www.codewars.com/kata/585a1a227cb58d8d740001c3 */

public class Repeater{
  public static String repeat(String string,long n) {
    String res = "";
    
    while (n > 0) {
      res += string;
      n--;
    }
    
    return res;
  }
}