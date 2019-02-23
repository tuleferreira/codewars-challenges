/* https://www.codewars.com/kata/53f9ee9f64b19d4b1d0001ed */

function Warrior(n){
  var name = n;  
  this.name = n => {
    if( n ) name = n;
    console.log(name)
    return name;
  }
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}