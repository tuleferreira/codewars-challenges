/* https://www.codewars.com/kata/5bb904724c47249b10000131 */

public class TotalPoints {
  
    public static int points(String[] games) {
      int count = 0;
      
      for (int i = 0; i < games.length; i++) {
        String[] score = games[i].split(":");
        
        if (Integer.parseInt(score[0]) > Integer.parseInt(score[1])) {
          count += 3;
        } else if (Integer.parseInt(score[0]) == Integer.parseInt(score[1])) {
          count += 1;
        }
      }
      
      return count;
    }
}