/* https://www.codewars.com/kata/53e30ec0116393fe1a00060b */

import java.util.*;

public class UniqueArray {
  public static int[] unique(int[] integers) {    
    return Arrays.stream(integers).distinct().toArray();
  }
}