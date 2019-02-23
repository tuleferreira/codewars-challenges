/* https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed */

public class Solution {
    public static String jumpingNumber(int number) {
      String[] numStr = Integer.toString(number).split("");
      
      for (int i = 0; i < numStr.length - 1; i++) {   
        if (Math.abs(Integer.valueOf(numStr[i]) - Integer.valueOf(numStr[i + 1])) > 1) {
          return "Not!!";
        }
      }
      
      return "Jumping!!";
    }
}