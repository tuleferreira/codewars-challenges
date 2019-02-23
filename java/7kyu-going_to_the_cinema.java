/* https://www.codewars.com/kata/562f91ff6a8b77dfe900006e */

public class Movie {
    
    public static int movie(int card, int ticket, double perc) {
        double systemA = 0;
        double systemB = card;
        double lastTicketB = ticket;
        int count = 0;
        
        while (systemA <= Math.ceil(systemB)) {
          double tempTicketB = lastTicketB * perc;
          
          systemA += ticket;
          systemB += tempTicketB;
          lastTicketB = tempTicketB;
          count++;
        }
        
        return count;
    }
}