/* https://www.codewars.com/kata/5ae7e3f068e6445bc8000046 */

import java.util.HashSet;
import java.util.Set;

public class HappyYear {
    static public int nextHappyYear(int year) {
        do {
            year++;
        } while (duplicates(year));

        return year;
    }

    public static boolean duplicates(int num) {
        String[] arr = Integer.toString(num).split("");
        Set<String> set = new HashSet<>();
        for (String i : arr) {
            if (set.contains(i)) return true;
            set.add(i);
        }
        return false;
    }
}