/* https://www.codewars.com/kata/5a438bc1e1ce0e129100005a */

import java.util.*;

public class Solution {
  static String[] unusualLexOrder(String[] words) {
    Arrays.sort(words, (a, b) -> new StringBuilder(a).reverse().toString().compareTo(new StringBuilder(b).reverse().toString()));
    return words;
  }
}