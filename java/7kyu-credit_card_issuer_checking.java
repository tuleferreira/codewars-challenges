/* https://www.codewars.com/kata/5701e43f86306a615c001868 */

public class Kata {
    public static String getIssuer(String cardNumber) {
        int len = cardNumber.length();
        String sub2 = cardNumber.substring(0, 2);

        if (cardNumber.charAt(0) == '4' && (len == 13 || len == 16)) {
            return "VISA";
        } else if ((sub2.equals("34") || sub2.equals("37")) && len == 15) {
            return "AMEX";
        } else if (cardNumber.substring(0, 4).equals("6011") && len == 16) {
            return "Discover";
        } else if ((sub2.equals("51") || sub2.equals("52") || sub2.equals("53") || sub2.equals("54") || sub2.equals("55")) && len == 16) {
            return "Mastercard";
        } else {
            return "Unknown";
        }
    }
}