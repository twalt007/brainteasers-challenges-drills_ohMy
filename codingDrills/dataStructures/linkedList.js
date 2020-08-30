///LinkedList Example and Definition:
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





interface ListNodeInterface {
	value: number;
	next: ListNodeInterface | null;
};

function ListNode(value) {
	this.value = value;
	this.next = null;
};


const list = createLinkedList([1,2,3,4,5]);
console.log(list);

ListNode(10) -> ListNode(52) -> ListNode(23) -> ListNode(14) -> ListNode(5)


 			    		// 1 based index
const removeListNode = (head, nodeIndex) => {
	let counter = 1;
	let current = head;
	let prev = null;
	while (counter !== nodeIndex){
		prev = current;
		current = current.next;
		if (current === null) return head;
		counter++;
};
if ( prev === null ) {
	head = head.next;
	return head;
};
prev.next = current.next;
return head;
};

let dylan = {};
let tatumn = {};


console.log(dylan === tatumn); // => false


const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head = [1,2,3,4,5]
head 

nodeIndex= 1
current = head
prev = null 
counter = 0

head.value = 
head.next = 

1.

prev = 


storing mechanism
while (
redefine



pointers



1 -> 2 -> 3 -> 4 -> 11 -> 12
			|
			5 -> 6 -> 7
				|
				8 -> 9 -> 10


1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 8 -> 9 -> 10 -> 7 -> 11 -> 12

https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/



const reverse = (head) => {
	let current = head;
	let nodes = [];
	while (current){
		nodes.push(current);
		current = current.next;
};
const newHead = nodes.pop();
current = newHead;
while (nodes.length){
	const node = nodes.pop();
	current.next = node;
current = current.next;
};
current.next = null;
return newHead;
};

1 -> 2 -> 3 -> 4 -> 5
const reverseLinkedList = (head: ListNode): ListNode => {
	if (!head) return null;
	let current = head;
	let prev = null;

	while (current) {
		const {next} = current;
		current.next = prev;
		prev = current;
		current = next;
 	};

	return prev;
};







interface ListNodeInterface {
	value: number;
	next: ListNodeInterface | null;
};

check for ends
lopping through and strong all the information, and then buildinding back up

xx  identify the last listNode; 
xx  reverse the pointers;

head - next.null without stepping through


function ListNode(this: ListNodeInterface, value: number){
	this.value = value;
	this.next = null; 
}

Given a linked list, reverse it
1 -> 2 -> 3 -> 4 -> 5
=> 
5 -> 4 -> 3 -> 2 -> 1

[1,2,3,4,5] => 5 -> 4 -> 3 -> 2 -> 1

loop=>
5.next = ListNode(4);

loop through list values, store in array
loop backwards through array
	on each step, current node.next = ListNode(array[i-1]);
return

const reverse = (head) => {
	let current = head;
	let nodes = [];
	while (current){
		nodes.push(current);
		current = current.next;
};
const newHead = nodes.pop();
current = newHead;
while (nodes.length){
	const node = nodes.pop();
	current.next = node;
current = current.next;
};
current.next = null;
return newHead;
};

https://leetcode.com/problems/reverse-linked-list/
1 -> 2 -> 3 -> 4 -> 5
const reverseLinkedList = (head: ListNode): ListNode => {
	if (!head) return null;
	let current = head;
	let prev = null;

	while (current) {
		const {next} = current;
		current.next = prev;
		prev = current;
		current = next;
 	};

	return prev;
};





obj1 {
1: ->2 
2: -> 3
3: ->4 
4: ->5
5: null
}
{
5: obj1.3
4:2



1 <-- 2 -> 3 -> 4

1 -> 2 -> 3 -> 4 -> 
var nextStep
var redefinedNext 
loop through each node
	save next step
	updated redefinedNExt

const reverse = (head) => {
	var current = head;
var prev = null;


};






