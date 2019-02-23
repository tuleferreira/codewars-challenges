/* https://www.codewars.com/kata/5277c8a221e209d3f6000b56 */

function validBraces(braces){
    var pairs = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };

    var stack = [];

    for (var i = 0; i < braces.length; ++i)
        if (braces[i] === '(' || braces[i] === '[' || braces[i] === '{')
            stack.push(braces[i]);
        else if (stack[stack.length-1] === pairs[braces[i]])
            stack.pop();
        else
            return false; // catchall

    return stack.length === 0;

}