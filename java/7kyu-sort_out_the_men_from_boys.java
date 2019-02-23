/* https://www.codewars.com/kata/5af15a37de4c7f223e00012d */

import java.util.*;

public class Kata {
    public static int[] menFromBoys(final int[] values) {
        // Your Code is Here .. Enjoy !! , Don't Forget To Vote :wink: :wink
        ArrayList<Integer> even = new ArrayList<>();
        ArrayList<Integer> odd = new ArrayList<>();
        
        Arrays.stream(values).distinct().toArray();
        
        for (int i = 0; i < values.length; i++) {
          if (values[i] % 2 == 0) {
            even.add(values[i]);  
          } else {
            odd.add(values[i]);
          }
        }
        
        Collections.sort(even);
        Collections.sort(odd, Collections.reverseOrder());
        
        even.addAll(even.size(), odd);
        
        return even.stream().distinct().mapToInt(i -> i).toArray();
    }
}