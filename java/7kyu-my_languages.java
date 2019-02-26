/* https://www.codewars.com/kata/5b16490986b6d336c900007d */

package com.codewars.anter69;

import java.util.*;

public class MyLanguages {
    public static List<String> myLanguages(final Map<String, Integer> results) {
        List<String> res = new ArrayList<>();

        for (String key : results.keySet()) {
            if (results.get(key) >= 60) {
                res.add(key);
            }
        }

        Collections.sort(res, new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                int o1Value = results.get(o1);
                int o2Value = results.get(o2);
                
                if (o1Value > o2Value) {
                    return -1;
                } else if (o1Value < o2Value) {
                    return 1;
                } else {
                    return 0;
                }
            }
        });

        return res;
    }
}
