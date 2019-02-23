/* https://www.codewars.com/kata/55be95786abade3c71000079 */

function Node(data) {
	this.data = data;
	this.next = null;
}

function push(head, data) {
	let newNode = new Node(data);
	newNode.next = head;
	return newNode;
}

function buildOneTwoThree() {
	let myList = null;
	myList = push(myList, 3);
	myList = push(myList, 2);
	myList = push(myList, 1);
	return myList;
}
