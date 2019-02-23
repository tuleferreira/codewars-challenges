/* https://www.codewars.com/kata/58712dfa5c538b6fc7000569 */

public class BeadsCounter {
    public static int countRedBeads(final int nBlue) {
      if (nBlue == 0) return 0;
      
      return nBlue * 2 - 2;
    }
}