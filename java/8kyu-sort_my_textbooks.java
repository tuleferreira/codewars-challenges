/* https://www.codewars.com/kata/5a07e5b7ffe75fd049000051 */

import java.util.*;

class sorter {
  public static List<String> sort(List<String> textbooks) {
  
    Collections.sort(textbooks, new Comparator<String>() {

            @Override
            public int compare(String o1, String o2) {              
              return  o1.toLowerCase().compareTo(o2.toLowerCase());
            }
        });
    
    return textbooks;
  }
}