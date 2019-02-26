/* https://www.codewars.com/kata/582c297e56373f0426000098 */

import java.util.*;

public class Kata {

  public static String stringify(Node list) {
      if (list == null) return "null";
      
      return list.getData() + " -> " + stringify(list.getNext());
  }

}