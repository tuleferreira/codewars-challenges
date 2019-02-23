/* https://www.codewars.com/kata/5b853229cfde412a470000d0 */

public class TwiceAsOld {

    public static int TwiceAsOld(int dadYears, int sonYears)  {
        int count = 0;

        if (sonYears * 2 > dadYears) {
            while (sonYears > 1) {
                if (dadYears == sonYears * 2) {
                    return count;
                }

                sonYears--;
                dadYears--;
                count++;
            }
        } else {
            while (true) {
                if (dadYears == sonYears * 2) {
                    return count;
                }

                sonYears++;
                dadYears++;
                count++;
            }
        }

        return 0;
    }
}