/* https://www.codewars.com/kata/5a7893ef0025e9eb50000013 */

import java.util.Arrays;

public class Solution {
    public static int maxGap(int[] numbers) {
        Arrays.sort(numbers);
        int max = 0;

        for (int i = 0; i < numbers.length - 1; i++) {
            int diff = numbers[i + 1] - numbers[i];
            if (diff > max) max = diff;
        }

        return max;
    }
}