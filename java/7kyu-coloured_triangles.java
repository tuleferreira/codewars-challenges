/* https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111 */

import java.util.*;

public class Kata {

    public static char triangle(final String row) {
        if (row.length() == 1) return row.charAt(0);
        
        String lastRow = row;
        String tempRow = "";
        
        while (tempRow.length() != 1) {
            tempRow = "";
        
            for (int i = 0; i < lastRow.length() - 1; i++) {
                String subRow = lastRow.substring(i, i + 2);

                if (subRow.charAt(0) == subRow.charAt(1)) {
                    tempRow += subRow.charAt(0);
                } else if (subRow.indexOf("B") != -1 && subRow.indexOf("G") != -1) {
                    tempRow += "R";
                } else if (subRow.indexOf("R") != -1 && subRow.indexOf("B") != -1) {
                    tempRow += "G";
                } else {
                    tempRow += "B";
                }
            }
            
            lastRow = tempRow;
        }
        
        return tempRow.charAt(0);
    }

}