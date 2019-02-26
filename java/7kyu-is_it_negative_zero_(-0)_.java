/* https://www.codewars.com/kata/5c5086287bc6600001c7589a */

import java.util.Objects;

public class NegativeZeroValidator {
    public static boolean isNegativeZero(float n) {
        return Objects.equals(n, -0f);
    }
}