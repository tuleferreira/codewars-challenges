/* https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3 */

function abbrevName(name) {
	name = name.toUpperCase().split(' ');
	return name[0][0] + '.' + name[1][0];
}