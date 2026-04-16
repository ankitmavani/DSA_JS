const SinglyLinkedList = require('../src/core/SinglyLinkedList')

describe("LinkedList Insert Methods", () => {

  // 🔹 insertAtHead
  test("insertAtHead - multiple inserts", () => {
    const list = new SinglyLinkedList();

    list.insertAtHead(10);
    list.insertAtHead(20);
    list.insertAtHead(30);

    expect(list.toArray()).toEqual([30, 20, 10]);
  });

  // 🔹 insertAtTail
  test("insertAtTail - multiple inserts", () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);
    list.insertAtTail(30);

    expect(list.toArray()).toEqual([10, 20, 30]);
  });

  // 🔹 insertAtPosition
  test("insertAtPosition - insert at head", () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);

    list.insertAtPosition(0, 5);

    expect(list.toArray()).toEqual([5, 10, 20]);
  });

  test("insertAtPosition - insert in middle", () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);
    list.insertAtTail(30);

    list.insertAtPosition(1, 15);

    expect(list.toArray()).toEqual([10, 15, 20, 30]);
  });

  test("insertAtPosition - insert at end", () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);

    list.insertAtPosition(2, 30);

    expect(list.toArray()).toEqual([10, 20, 30]);
  });

  // 🔹 insertAfterValue
  test("insertAfterValue - normal case", () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);

    list.insertAfterValue(10, 15);

    expect(list.toArray()).toEqual([10, 15, 20]);
  });

  test("insertAfterValue - value not found", () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);

    list.insertAfterValue(999, 15);

    expect(list.toArray()).toEqual([10]); // no change
  });

  // 🔹 insertBeforeValue
  test("insertBeforeValue - middle", () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);

    list.insertBeforeValue(20, 15);

    expect(list.toArray()).toEqual([10, 15, 20]);
  });

  test("insertBeforeValue - before head", () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);

    list.insertBeforeValue(10, 5);

    expect(list.toArray()).toEqual([5, 10]);
  });

  test("insertBeforeValue - value not found", () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);

    list.insertBeforeValue(999, 5);

    expect(list.toArray()).toEqual([10]); // no change
  });

});

describe("LinkedList Delete Methods", () => {

  // 🔹 deleteHead
  test("deleteHead - normal case", () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);
    list.insertAtTail(30);

    list.deleteHead();

    expect(list.toArray()).toEqual([20, 30]);
  });

  test("deleteHead - single element", () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.deleteHead();

    expect(list.toArray()).toEqual([]);
  });

  test("deleteHead - empty list", () => {
    const list = new SinglyLinkedList();

    list.deleteHead();

    expect(list.toArray()).toEqual([]);
  });

  // 🔹 deleteTail
  test("deleteTail - normal case", () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);
    list.insertAtTail(30);

    list.deleteTail();

    expect(list.toArray()).toEqual([10, 20]);
  });

  test("deleteTail - single element", () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.deleteTail();

    expect(list.toArray()).toEqual([]);
  });

  test("deleteTail - empty list", () => {
    const list = new SinglyLinkedList();

    list.deleteTail();

    expect(list.toArray()).toEqual([]);
  });

  // 🔹 deleteByValue
  test("deleteByValue - middle node", () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);
    list.insertAtTail(30);

    list.deleteByValue(20);

    expect(list.toArray()).toEqual([10, 30]);
  });

  test("deleteByValue - head node", () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);

    list.deleteByValue(10);

    expect(list.toArray()).toEqual([20]);
  });

  test("deleteByValue - value not found", () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);

    list.deleteByValue(999);

    expect(list.toArray()).toEqual([10]);
  });

  // 🔹 deleteAtPosition
  test("deleteAtPosition - delete head", () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);

    list.deleteAtPosition(0);

    expect(list.toArray()).toEqual([20]);
  });

  test("deleteAtPosition - middle", () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);
    list.insertAtTail(30);

    list.deleteAtPosition(1);

    expect(list.toArray()).toEqual([10, 30]);
  });

  test("deleteAtPosition - last node", () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);
    list.insertAtTail(20);

    list.deleteAtPosition(1);

    expect(list.toArray()).toEqual([10]);
  });

  test("deleteAtPosition - invalid index", () => {
    const list = new SinglyLinkedList();

    list.insertAtTail(10);

    list.deleteAtPosition(5);

    expect(list.toArray()).toEqual([10]); // no change
  });

});