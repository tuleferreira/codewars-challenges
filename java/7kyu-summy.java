/* https://www.codewars.com/kata/599c20626bd8795ce900001d */

import java.util.Arrays;

class Summation {

    static long summy(String stringOfInts) {
        return Arrays
                .stream(stringOfInts.split(" "))
                .mapToLong(num -> Long.parseLong(num))
                .sum();
    }
}