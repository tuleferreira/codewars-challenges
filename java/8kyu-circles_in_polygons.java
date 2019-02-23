/* https://www.codewars.com/kata/5a026a9cffe75fbace00007f */

public class Polygon {
    int sides;
    int sideLength;

    public Polygon(int sides, int sideLength) {
        this.sides = sides;
        this.sideLength = sideLength;
    }
    
    public double circleDiameter(){
        return 2 * (this.sideLength / (2 * (Math.tan(Math.PI / this.sides))));
    }
    
}