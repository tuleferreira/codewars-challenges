/* https://www.codewars.com/kata/573f5c61e7752709df0005d2 */

import java.util.*;

public class Kata {
	public static int[] mergeArrays(int[] first, int[] second) {
		int length = first.length + second.length;
    int[] res = new int[length];
    
    System.arraycopy(first, 0, res, 0, first.length);
    System.arraycopy(second, 0, res, first.length, second.length);
    
    res = Arrays.stream(res).distinct().toArray();
    
    Arrays.sort(res);
    
    return res;
	}
}