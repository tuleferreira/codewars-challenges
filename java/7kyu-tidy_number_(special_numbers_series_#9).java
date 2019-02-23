/* https://www.codewars.com/kata/5a87449ab1710171300000fd */

public class Solution
{
    public static boolean tidyNumber(int number) {
      String numToStr = Integer.toString(number);
      
      for (int i = 0; i < numToStr.length() - 1; i++) {
        if (Character.getNumericValue(numToStr.charAt(i)) >  Character.getNumericValue(numToStr.charAt(i + 1))) {
          return false;
        }
      }
      
      return true;
    }
}