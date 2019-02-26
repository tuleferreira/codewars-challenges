/* https://www.codewars.com/kata/5b93fecd8463745630001d05 */

public class Kata {
    public static int snail(int column, int day, int night) {
        int count = 0;
        
        while (true) {
            column -= day;
            count++;
            
            if (column <= 0) break;
            
            column += night;
        }
        
        return count;
    }
}