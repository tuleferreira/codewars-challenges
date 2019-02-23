/* https://www.codewars.com/kata/55e4c52ad58df7509c00007e */

function validate(username, password){
  var database = new Database();
  return password.includes('//') || password.includes('||') ? 'Wrong username or password!' : database.login(username, password);
}