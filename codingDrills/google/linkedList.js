function ListNode(value) {
	this.value = value;
	this.next = null;
};

ListNode(2) {
	this.value = 2;
	this.next = null;
};

ListNode(1) {
	this.value = 1;
	this.next = ListNode(2);
};

const node = new ListNode(1);
const next = new ListNode(2);

node.next = next;
node2.next = next;



const createLinkedList = (array: number[]): ListNode => {
const head = new ListNode(array.shift());
let current = head;

while (array.length) {
	current.next = new ListNode(array.shift());
	current = current.next;
};

return head;
};

const list = createLinkedList([1,2,3,4,5]);
console.log(list);

[1, 2] => [1]
const deleteLastNode = (head: ListNode): void => {
	let current = head;
	let prev = null;
	while (current.next) {
		prev = current;
current = current.next;
 	};
	if (prev === null) {
		head = head.next;
		return;
};
	prev.next = current.next;
};

console.log(list); // => 1 -> 2 -> 3 -> 4 -> 5 -> null
deleteLastNode(list);
console.log(list); // => 1 -> 2 -> 3 -> 4 -> null


							// 1 based index
const deleteNode = (head: ListNode, index: number): ListNode => {

};

deleteNode(list, 3); => ListNode(3)
console.log(list); => 1 -> 2 -> 4 -> 5

const deleteNode = (head: ListNode, index: number): ListNode => {
	let curr = head;
	let prev = null;
	let counter = 0;
	while (counter<index) {
	counter++;
	prev = curr;
	curr = curr.next;
};
prev.next = curr.next;	
};




