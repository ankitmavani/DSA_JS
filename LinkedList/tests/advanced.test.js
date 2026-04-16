const SinglyLinkedList = require('../src/core/SinglyLinkedList')

describe("LinkedList Advanced Methods", () => {

  // 🔹 reverse()
  test("reverse - normal case", () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(1);
    list.insertAtTail(2);
    list.insertAtTail(3);

    list.reverse();

    expect(list.toArray()).toEqual([3, 2, 1]);
  });

  test("reverse - single node", () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(1);
    list.reverse();

    expect(list.toArray()).toEqual([1]);
  });

  test("reverse - empty list", () => {
    const list = new SinglyLinkedList();

    list.reverse();

    expect(list.toArray()).toEqual([]);
  });

  // 🔹 findMiddle()
  test("findMiddle - odd length", () => {
    const list = new SinglyLinkedList();

    [1, 2, 3, 4, 5].forEach(v => list.insertAtTail(v));

    expect(list.findMiddle().value).toBe(3);
  });

  test("findMiddle - even length (second middle)", () => {
    const list = new SinglyLinkedList();

    [1, 2, 3, 4].forEach(v => list.insertAtTail(v));

    expect(list.findMiddle().value).toBe(3);
  });

  // 🔹 detectCycle()
  test("detectCycle - no cycle", () => {
    const list = new SinglyLinkedList();

    [1, 2, 3].forEach(v => list.insertAtTail(v));

    expect(list.detectCycle()).toBe(false);
  });

  test("detectCycle - with cycle", () => {
    const list = new SinglyLinkedList();

    [1, 2, 3].forEach(v => list.insertAtTail(v));

    // create cycle: last node -> head
    let curr = list.head;
    while (curr.next) curr = curr.next;
    curr.next = list.head;

    expect(list.detectCycle()).toBe(true);
  });

  // 🔹 removeCycle()
  test("removeCycle - should remove cycle", () => {
    const list = new SinglyLinkedList();

    [1, 2, 3, 4].forEach(v => list.insertAtTail(v));

    // create cycle: last -> second node
    let curr = list.head;
    let second = list.head.next;

    while (curr.next) curr = curr.next;
    curr.next = second;

    expect(list.detectCycle()).toBe(true);

    list.removeCycle();

    expect(list.detectCycle()).toBe(false);
    expect(list.toArray()).toEqual([1, 2, 3, 4]);
  });

  // 🔹 nthFromEnd()
  test("nthFromEnd - valid case", () => {
    const list = new SinglyLinkedList();

    [10, 20, 30, 40, 50].forEach(v => list.insertAtTail(v));

    expect(list.nthFromEnd(2).value).toBe(40);
  });

  test("nthFromEnd - n equals length", () => {
    const list = new SinglyLinkedList();

    [10, 20, 30].forEach(v => list.insertAtTail(v));

    expect(list.nthFromEnd(3).value).toBe(10);
  });

  test("nthFromEnd - invalid n", () => {
    const list = new SinglyLinkedList();

    [10, 20].forEach(v => list.insertAtTail(v));

    expect(list.nthFromEnd(5)).toBe(null);
  });

  // 🔹 removeNthFromEnd()
  test("removeNthFromEnd - remove middle", () => {
    const list = new SinglyLinkedList();

    [1, 2, 3, 4, 5].forEach(v => list.insertAtTail(v));

    list.removeNthFromEnd(2);

    expect(list.toArray()).toEqual([1, 2, 3, 5]);
  });

  test("removeNthFromEnd - remove head", () => {
    const list = new SinglyLinkedList();

    [1, 2, 3].forEach(v => list.insertAtTail(v));

    list.removeNthFromEnd(3);

    expect(list.toArray()).toEqual([2, 3]);
  });

  test("removeNthFromEnd - remove last", () => {
    const list = new SinglyLinkedList();

    [1, 2, 3].forEach(v => list.insertAtTail(v));

    list.removeNthFromEnd(1);

    expect(list.toArray()).toEqual([1, 2]);
  });

});