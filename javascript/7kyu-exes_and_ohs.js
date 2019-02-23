/* https://www.codewars.com/kata/55908aad6620c066bc00002a */

function XO(str) {
   var o = (str.match(/[oO]/g)||[]).length;
   var x = (str.match(/[xX]/g)||[]).length
   
   if (o === x) {
     return true
   } else {
     return false
   }
}
