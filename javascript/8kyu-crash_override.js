/* https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f */

function aliasGen(a, b){
    a = a.toUpperCase();
    b = b.toUpperCase();
    return a[0].match(/[A-Z]/g) && b[0].match(/[A-Z]/g) ? firstName[a[0]] + ' ' + surname[b[0]] : "Your name must start with a letter from A - Z."
}