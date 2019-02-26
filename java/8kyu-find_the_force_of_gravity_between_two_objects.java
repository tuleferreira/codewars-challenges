/* https://www.codewars.com/kata/5b609ebc8f47bd595e000627 */

import java.util.*;

public class Solution {

    public static double solution(double[] arrVal, String[] arrUnit) {
        double m1 = arrVal[0];
        double m2 = arrVal[1];
        double d = arrVal[2];
        String um1 = arrUnit[0];
        String um2 = arrUnit[1];
        String ud = arrUnit[2];
        
        double G = 6.67e-11;

        Map<String, Double> conversion = new HashMap<>();

        conversion.put("kg", 1.0);
        conversion.put("g", 1e-3);
        conversion.put("mg", 1e-6);
        conversion.put("μg", 1e-9);
        conversion.put("lb", .453592);
        conversion.put("m", 1.0);
        conversion.put("cm", 1e-2);
        conversion.put("mm", 1e-3);
        conversion.put("μm", 1e-6);
        conversion.put("ft", .3048);

        return G * m1 * conversion.get(um1) * m2 * conversion.get(um2) / Math.pow((d * conversion.get(ud)), 2);
    }

}
