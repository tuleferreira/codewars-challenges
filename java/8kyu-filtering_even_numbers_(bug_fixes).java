/* https://www.codewars.com/kata/566dc566f6ea9a14b500007b */

import java.util.List;

public class Kata13December {
    public static List<Integer> filterOddNumber(List<Integer> listOfNumbers){
        for (int i = listOfNumbers.size() - 1; i >= 0; i--) {
            if (listOfNumbers.get(i) % 2 == 0) {
                listOfNumbers.remove(i);
            }
        }
        return listOfNumbers;
    }
}