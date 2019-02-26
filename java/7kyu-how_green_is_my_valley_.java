/* https://www.codewars.com/kata/56e3cd1d93c3d940e50006a4 */

import java.util.Arrays;

public class Valley {

    public static int[] makeValley(int[] arr) {
        Arrays.sort(arr);

        int[] res = new int[arr.length];

        for (int i = 0; i < arr.length; i++) {
            if (i % 2 == 0) {
                res[i / 2] = arr[arr.length - 1 - i];
            } else {
                res[arr.length - 1 - (i / 2)] = arr[arr.length - 1 - i];
            }
        }

        return res;
    }
}