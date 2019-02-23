/* https://www.codewars.com/kata/57dd3a06eb0537b899000a64 */

import java.util.*;

public class Dinglemouse {

  public static class HelpSaveChristmas implements Comparator<String> {
  
    @Override
    public int compare(final String line1, final String line2) {
        String x = line1.split(" ")[0];
        String y = line2.split(" ")[0];
        
        if (x.equals("On") || y.equals("a")) return -1;
        else if (x.equals("a") || y.equals("On")) return 1;
        else if (Integer.parseInt(x) > Integer.parseInt(y)) return -1;
        else if (Integer.parseInt(x) < Integer.parseInt(y)) return 1;
        else return 0;
    }    
  }
  
}