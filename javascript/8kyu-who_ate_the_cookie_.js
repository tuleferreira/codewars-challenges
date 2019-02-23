/* https://www.codewars.com/kata/55a996e0e8520afab9000055 */

function cookie(x) {
  return (
    (x =
      "number" == typeof x
        ? "Monica"
        : "string" == typeof x ? "Zach" : "the dog"),
    `Who ate the last cookie? It was ${x}!`
  );
}