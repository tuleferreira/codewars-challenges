/* https://www.codewars.com/kata/534ea96ebb17181947000ada */

public class Chocolate{
  public static int breakChocolate(int n, int m) {
    if (n * m == 0) return 0;
    
    return n * m - 1;
  }
}