const SinglyLinkedList = require('../src/core/SinglyLinkedList');

describe('LinkedList Insert Methods', () => {
  // 🔹 insertAtHead
  test('insertAtHead - multiple inserts', () => {
    const list = new SinglyLinkedList();

    list.insertAtHead(10);
    list.insertAtHead(20);
    list.insertAtHead(30);

    expect(list.toArray()).toEqual([30, 20, 10]);
  });

  // 🔹 insertAtTail
  test('insertAtTail - multiple inserts', () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);
    list.insertAtTail(30);

    expect(list.toArray()).toEqual([10, 20, 30]);
  });

  // 🔹 insertAtPosition
  test('insertAtPosition - insert at head', () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);

    list.insertAtPosition(0, 5);

    expect(list.toArray()).toEqual([5, 10, 20]);
  });

  test('insertAtPosition - insert in middle', () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);
    list.insertAtTail(30);

    list.insertAtPosition(1, 15);

    expect(list.toArray()).toEqual([10, 15, 20, 30]);
  });

  test('insertAtPosition - insert at end', () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);

    list.insertAtPosition(2, 30);

    expect(list.toArray()).toEqual([10, 20, 30]);
  });

  // 🔹 insertAfterValue
  test('insertAfterValue - normal case', () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);

    list.insertAfterValue(10, 15);

    expect(list.toArray()).toEqual([10, 15, 20]);
  });

  test('insertAfterValue - value not found', () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);

    list.insertAfterValue(999, 15);

    expect(list.toArray()).toEqual([10]); // no change
  });

  // 🔹 insertBeforeValue
  test('insertBeforeValue - middle', () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);

    list.insertBeforeValue(20, 15);

    expect(list.toArray()).toEqual([10, 15, 20]);
  });

  test('insertBeforeValue - before head', () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);

    list.insertBeforeValue(10, 5);

    expect(list.toArray()).toEqual([5, 10]);
  });

  test('insertBeforeValue - value not found', () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);

    list.insertBeforeValue(999, 5);

    expect(list.toArray()).toEqual([10]); // no change
  });
});

describe('LinkedList Delete Methods', () => {
  // 🔹 deleteHead
  test('deleteHead - normal case', () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);
    list.insertAtTail(30);

    list.deleteHead();

    expect(list.toArray()).toEqual([20, 30]);
  });

  test('deleteHead - single element', () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.deleteHead();

    expect(list.toArray()).toEqual([]);
  });

  test('deleteHead - empty list', () => {
    const list = new SinglyLinkedList();

    list.deleteHead();

    expect(list.toArray()).toEqual([]);
  });

  // 🔹 deleteTail
  test('deleteTail - normal case', () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);
    list.insertAtTail(30);

    list.deleteTail();

    expect(list.toArray()).toEqual([10, 20]);
  });

  test('deleteTail - single element', () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.deleteTail();

    expect(list.toArray()).toEqual([]);
  });

  test('deleteTail - empty list', () => {
    const list = new SinglyLinkedList();

    list.deleteTail();

    expect(list.toArray()).toEqual([]);
  });

  // 🔹 deleteByValue
  test('deleteByValue - middle node', () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);
    list.insertAtTail(30);

    list.deleteByValue(20);

    expect(list.toArray()).toEqual([10, 30]);
  });

  test('deleteByValue - head node', () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);

    list.deleteByValue(10);

    expect(list.toArray()).toEqual([20]);
  });

  test('deleteByValue - value not found', () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);

    list.deleteByValue(999);

    expect(list.toArray()).toEqual([10]);
  });

  // 🔹 deleteAtPosition
  test('deleteAtPosition - delete head', () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);

    list.deleteAtPosition(0);

    expect(list.toArray()).toEqual([20]);
  });

  test('deleteAtPosition - middle', () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);
    list.insertAtTail(30);

    list.deleteAtPosition(1);

    expect(list.toArray()).toEqual([10, 30]);
  });

  test('deleteAtPosition - last node', () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);

    list.deleteAtPosition(1);

    expect(list.toArray()).toEqual([10]);
  });

  test('deleteAtPosition - invalid index', () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);

    list.deleteAtPosition(5);

    expect(list.toArray()).toEqual([10]); // no change
  });
});

describe('LinkedList Advanced Methods', () => {
  // 🔹 reverse()
  test('reverse - normal case', () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(1);
    list.insertAtTail(2);
    list.insertAtTail(3);

    list.reverse();

    expect(list.toArray()).toEqual([3, 2, 1]);
  });

  test('reverse - single node', () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(1);
    list.reverse();

    expect(list.toArray()).toEqual([1]);
  });

  test('reverse - empty list', () => {
    const list = new SinglyLinkedList();

    list.reverse();

    expect(list.toArray()).toEqual([]);
  });

  // 🔹 findMiddle()
  test('findMiddle - odd length', () => {
    const list = new SinglyLinkedList();

    [1, 2, 3, 4, 5].forEach((v) => list.insertAtTail(v));

    expect(list.findMiddle().value).toBe(3);
  });

  test('findMiddle - even length (second middle)', () => {
    const list = new SinglyLinkedList();

    [1, 2, 3, 4].forEach((v) => list.insertAtTail(v));

    expect(list.findMiddle().value).toBe(3);
  });

  // 🔹 detectCycle()
  test('detectCycle - no cycle', () => {
    const list = new SinglyLinkedList();

    [1, 2, 3].forEach((v) => list.insertAtTail(v));

    expect(list.detectCycle()).toBe(false);
  });

  test('detectCycle - with cycle', () => {
    const list = new SinglyLinkedList();

    [1, 2, 3].forEach((v) => list.insertAtTail(v));

    // create cycle: last node -> head
    let curr = list.head;
    while (curr.next) curr = curr.next;
    curr.next = list.head;

    expect(list.detectCycle()).toBe(true);
  });

  // 🔹 removeCycle()
  test('removeCycle - should remove cycle', () => {
    const list = new SinglyLinkedList();

    [1, 2, 3, 4].forEach((v) => list.insertAtTail(v));

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

  // // 🔹 nthFromEnd()
  // test('nthFromEnd - valid case', () => {
  //   const list = new SinglyLinkedList();

  //   [10, 20, 30, 40, 50].forEach((v) => list.insertAtTail(v));

  //   expect(list.nthFromEnd(2).value).toBe(40);
  // });

  // test('nthFromEnd - n equals length', () => {
  //   const list = new SinglyLinkedList();

  //   [10, 20, 30].forEach((v) => list.insertAtTail(v));

  //   expect(list.nthFromEnd(3).value).toBe(10);
  // });

  // test('nthFromEnd - invalid n', () => {
  //   const list = new SinglyLinkedList();

  //   [10, 20].forEach((v) => list.insertAtTail(v));

  //   expect(list.nthFromEnd(5)).toBe(null);
  // });

  // // 🔹 removeNthFromEnd()
  // test('removeNthFromEnd - remove middle', () => {
  //   const list = new SinglyLinkedList();

  //   [1, 2, 3, 4, 5].forEach((v) => list.insertAtTail(v));

  //   list.removeNthFromEnd(2);

  //   expect(list.toArray()).toEqual([1, 2, 3, 5]);
  // });

  // test('removeNthFromEnd - remove head', () => {
  //   const list = new SinglyLinkedList();

  //   [1, 2, 3].forEach((v) => list.insertAtTail(v));

  //   list.removeNthFromEnd(3);

  //   expect(list.toArray()).toEqual([2, 3]);
  // });

  // test('removeNthFromEnd - remove last', () => {
  //   const list = new SinglyLinkedList();

  //   [1, 2, 3].forEach((v) => list.insertAtTail(v));

  //   list.removeNthFromEnd(1);

  //   expect(list.toArray()).toEqual([1, 2]);
  // });
});
