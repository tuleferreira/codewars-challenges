/* https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5 */

public class ReverseNumber {

    public static int reverse(int number) {
        int reversed = Integer.parseInt(
                new StringBuilder(
                        Integer.toString(Math.abs(number)))
                        .reverse()
                        .toString());

        return number < 0 ? reversed * -1 : reversed;
    }

}