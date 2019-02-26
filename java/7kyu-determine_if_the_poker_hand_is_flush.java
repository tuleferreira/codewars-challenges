/* https://www.codewars.com/kata/5acbc3b3481ebb23a400007d */

public class Kata {
    public static boolean CheckIfFlush(String[] cards) {
        for (int i = 1; i < cards.length; i++) {
            if (!cards[i].matches("(.*)" + cards[0].charAt(cards[0].length() - 1))) {
                return false;
            }
        }

        return true;
    }
}