/* https://www.codewars.com/kata/57126304cdbf63c6770012bd */

public class MyUtilities{

  public boolean isDigit(String s) {
    try {
      double d = Double.parseDouble(s);
      return true;
    } catch (NumberFormatException nfe) {
      return false;
    }
  }
}