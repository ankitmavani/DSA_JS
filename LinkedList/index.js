const SinglyLinkedList = require('./src/core/SinglyLinkedList')

const list = new SinglyLinkedList()

list.insertHead(10)
list.insertHead(20)
list.insertHead(30)

list.insertTail(5);
list.insertTail(1);

list.print();

console.log("Length:", list.length()); // 4

console.log("Search 10:", list.search(10)); // true
console.log("Search 1:", list.search(1)); // true
console.log("Search 99:", list.search(99)); // false

list.print()