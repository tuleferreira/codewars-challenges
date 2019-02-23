/* https://www.codewars.com/kata/57cc981a58da9e302a000214 */

public class Kata
{
  public static boolean smallEnough(int[] a, int limit) {
    for (int i = 0; i < a.length; i++) {
      if(a[i] > limit) return false;
    }
    
    return true;
  }
}