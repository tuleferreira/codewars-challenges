/* https://www.codewars.com/kata/56bcaedfcf6b7f2125001118 */

function htmlspecialchars(formData) {
  return formData.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
}