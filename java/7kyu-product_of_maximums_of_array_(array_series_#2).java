/* https://www.codewars.com/kata/5a63948acadebff56f000018 */

import java.util.*;

public class Solution {
    public static long maxProduct(int[] numbers, int sub_size) {
        Arrays.sort(numbers);
        
        return Arrays
                .stream(Arrays.copyOfRange(numbers, numbers.length - sub_size, numbers.length))
                .asLongStream()
                .reduce(1, (x, y) -> x * y);
    }
}