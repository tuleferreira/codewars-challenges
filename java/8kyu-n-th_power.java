/* https://www.codewars.com/kata/57d814e4950d8489720008db */

public class Kata {
  public static int nthPower(int[] array, int n) {
    if (array.length <= n) return -1;
    
    return (int) Math.pow(array[n], n); 
  }
}