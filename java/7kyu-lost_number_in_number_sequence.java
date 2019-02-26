/* https://www.codewars.com/kata/595aa94353e43a8746000120 */

import java.util.*;

public class Kata {
    public static int findDeletedNumber(int[] arr, int[] mixedArr) {
        int sumArr = Arrays.stream(arr).sum();
        int sumMixedArr = Arrays.stream(mixedArr).sum();

        return sumArr - sumMixedArr;
    }
}
