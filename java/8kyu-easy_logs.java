/* https://www.codewars.com/kata/5b68c7029756802aa2000176 */

public class EasyLogs {

  public static double logs(double x, double a, double b) {
    x = Math.log(x);
  
    return (Math.log(a) / x) + (Math.log(b) / x);
  }

}
