/* https://www.codewars.com/kata/580755730b5a77650500010c */

public class OddEvenSort {
  public static String sortMyString(String s) {
    String odd = "";
    String even = "";
    
    for (int i = 0; i < s.length(); i++) {
      if (i % 2 == 0) {
        odd += s.charAt(i);
      } else {
        even += s.charAt(i);
      }
    }
    
    return odd + " " + even;
  }
}