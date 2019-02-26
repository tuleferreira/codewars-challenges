/* https://www.codewars.com/kata/5b728f801db5cec7320000c7 */

public class SimpleLetterRemoval {
    public static String solve(String s, int k) {
        char actual = 'a';

        while (k != 0) {
            if (s.indexOf(actual) != -1) {
                s = s.replaceFirst(Character.toString(actual), "");
                k--;
            } else {
                actual++;
            }

            if (s.equals("")) break;
        }

        return s;
    }
}