/* https://www.codewars.com/kata/52774a314c2333f0a7000688 */

function validParentheses(parens){
  let compare = {")" : "(", "]" : "[", "}" : "{"};
  let queue = [];
  
  for (let i = 0; i < parens.length; i++) {
    if (queue[queue.length - 1] === compare[parens[i]] && compare[parens[i]] !== undefined) {
      queue.pop();
    } else {
      queue.push(parens[i]);
    }
  }
  console.log(queue)
  
  return queue.length === 0;
}