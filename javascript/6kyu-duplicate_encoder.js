/* https://www.codewars.com/kata/54b42f9314d9229fd6000d9c */

function duplicateEncode(word){
    word = word.toLowerCase().split("");

    return word.map(letter => {
      if(word.indexOf(letter) !== word.lastIndexOf(letter)) {
        return ")";
      } else {
        return "(";
      }
    }).join("");
};
