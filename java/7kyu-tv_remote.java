/* https://www.codewars.com/kata/5a5032f4fd56cb958e00007a */

public class Dinglemouse {

    public static int tvRemote(final String word) {
        int[] arr1 = new int[]{'a', 'b', 'c', 'd', 'e', '1', '2', '3'};
        int[] arr2 = new int[]{'f', 'g', 'h', 'i', 'j', '4', '5', '6'};
        int[] arr3 = new int[]{'k', 'l', 'm', 'n', 'o', '7', '8', '9'};
        int[] arr4 = new int[]{'p', 'q', 'r', 's', 't', '.', '@', '0'};
        int[] arr5 = new int[]{'u', 'v', 'w', 'x', 'y', 'z', '_', '/'};

        int[][] keyboard = new int[][]{arr1, arr2, arr3, arr4, arr5};

        int[] last = {0, 0};
        int total = 0;

        for (int x = 0; x < word.length(); x++) {
            int[] actual = new int[2];

            for (int i = 0; i < keyboard.length; i++) {
                for (int j = 0; j < keyboard[i].length; j++) {
                    if (keyboard[i][j] == word.charAt(x)) {
                        actual[0] = i;
                        actual[1] = j;
                    }
                }
            }

            total += Math.abs(actual[0] - last[0]) + Math.abs(actual[1] - last[1]) + 1;

            last = actual;
        }

        return total;
    }
}