/* https://www.codewars.com/kata/54fb963d3fe32351f2000102 */

import java.util.*;

public class Collatz {
  public static long conjecture(long x) {
    List<Integer> collatzConjecture = new ArrayList<>();
    
    while (true) {
      collatzConjecture.add((int) x);
      
      if (x == 1) break;
      
      if (x % 2 == 0) {
        x /= 2;
      } else {
        x = x * 3 + 1;
      }
    }    
    
    return collatzConjecture.size();
  }
}