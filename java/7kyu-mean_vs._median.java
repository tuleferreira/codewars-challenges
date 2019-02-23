/* https://www.codewars.com/kata/5806445c3f1f9c2f72000031 */

import java.util.*;

public class Solution {

  public static String meanVsMedian(int[] numbers) {
    Arrays.sort(numbers);
    
    int mean = Arrays.stream(numbers).reduce(0, (x, y) -> x + y) / numbers.length;
    int median = numbers[(numbers.length - 1) / 2];
    
    return mean > median ? "mean" : mean < median ? "median" : "same";
  }
}