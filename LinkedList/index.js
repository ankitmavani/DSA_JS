const SinglyLinkedList = require('./src/core/SinglyLinkedList');

const list = new SinglyLinkedList();

// const list = new SinglyLinkedList();

[1, 2, 3, 4].forEach((v) => list.insertAtTail(v));

list.print();
// create cycle: last -> second node
let curr = list.head;
let second = list.head.next;

while (curr.next) curr = curr.next;
curr.next = second;

// expect(list.detectCycle()).toBe(true);

list.removeCycle();

// list.insertHead(10);
// list.insertHead(20);
// list.insertHead(30);

// list.insertTail(5);
// list.insertTail(1);

// list.print();

// console.log('Length:', list.length()); // 4

// console.log('Search 10:', list.search(10)); // true
// console.log('Search 1:', list.search(1)); // true
// console.log('Search 99:', list.search(99)); // false

list.print();
