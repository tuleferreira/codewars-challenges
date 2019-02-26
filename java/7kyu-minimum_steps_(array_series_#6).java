/* https://www.codewars.com/kata/5a91a7c5fd8c061367000002 */

import java.util.Arrays;

public class Kata {
    public static int minimumSteps(int[] numbers, int k) {
        Arrays.sort(numbers);
        
        if (numbers[0] >= k) return 0;
        
        int sum = numbers[0];
        int count = 0;
        
        for (int i = 1; i < numbers.length; i++) {
            sum += numbers[i];
            count++;
            
            if (sum >= k) break;
        }
        
        return count;
    }
}