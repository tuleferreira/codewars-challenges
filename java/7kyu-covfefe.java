/* https://www.codewars.com/kata/592fd8f752ee71ac7e00008a */

public class Covfefe {
    public static String covfefe(String tweet) {
        if (tweet.indexOf("coverage") == -1) return tweet + " covfefe";
        
        return tweet.replaceAll("coverage", "covfefe");
    }
}