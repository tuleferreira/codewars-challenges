/* https://www.codewars.com/kata/5a1428eb6975989403000136 */

public class GameInput {

   public float[] getVector(boolean[] wasd) {
     float[] coord = new float[2];
     float diag = (float)(1/Math.sqrt(2));
     
     if (wasd[0]) coord[1]++;
     if (wasd[1]) coord[0]--;
     if (wasd[2]) coord[1]--;
     if (wasd[3]) coord[0]++;
     
     if (coord[0] != 0 && coord[1] != 0) {
       coord[0] *= diag;
       coord[1] *= diag;
     } 
     
     return coord;
   }
}