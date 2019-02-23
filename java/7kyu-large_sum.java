/* https://www.codewars.com/kata/5a378f28eced70bef80004b3 */

import java.math.*;

public class LargeSum {

    public static String firstTenDigitsOfSum(String[] numbers) {
            BigInteger sum = new BigInteger(numbers[0]);
            
            for (int i = 1; i < numbers.length; i++) {
              BigInteger next = new BigInteger(numbers[i]);
              sum = sum.add(next);
            }

            return sum.toString().substring(0, 10);
    }


}