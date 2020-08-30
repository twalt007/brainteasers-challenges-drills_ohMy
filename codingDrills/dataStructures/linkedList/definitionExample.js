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