/* https://www.codewars.com/kata/525e5a1cb735154b320002c8 */

public class Triangular {
    public static int triangular(int n) {
      if (n < 0) return 0;
    
      return (1 + n) * n / 2;
    }
}