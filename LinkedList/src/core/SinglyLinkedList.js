const Node = require('./Node.js')

class SinglyLinkedList{
  constructor(){
    this.head = null
  }

  insertAtHead(value) {
    let newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
  }

  insertAtTail(value){
    let newNode = new Node(value)
    if(!this.head){
      this.head=newNode
      return
    }
    let temp = this.head
    while(temp.next){
      temp = temp.next
    }
    temp.next = newNode
  }

  insertAtPosition(pos, value){
    if(pos === 0){
      this.insertAtHead(value)
      return
    }
    let count = 0
    let cur = this.head
    while(cur){
      if(count === pos-1){
        break;
      }
      count++
      cur = cur.next
    }
    let newNode = new Node(value)
    newNode.next = cur.next
    cur.next = newNode
  }

  insertAfterValue(target, value){
    let cur = this.head
    while(cur){
      if(cur.value === target){
        let newNode = new Node(value)
        newNode.next = cur.next
        cur.next = newNode
      }
      cur = cur.next
    }
  }

  insertBeforeValue(target, value){
    let cur = this.head
    let prev = null
    if(cur.value === target){
      this.insertAtHead(value)
      return
    }
    while(cur){
      if(cur.value === target){
        let newNode = new Node(value)
        newNode.next = cur
        prev.next = newNode
      }
      prev = cur
      cur = cur.next
    }
  }

  deleteHead(){
    if(!this.head){
      return null;
    }
    this.head = this.head.next
  }

  deleteTail(){
    if(!this.head || !this.head.next){
      this.head = null
      return null;
    }
    let cur = this.head
    let prev = null
    while(cur.next){
      prev = cur
      cur = cur.next
    }
    prev.next = null
  }

  deleteByValue(target){
    let cur = this.head
    let prev = null
    if(cur.value===target){
      this.deleteHead()
      return
    }
    while(cur){
      if(cur.value === target){
        prev.next =cur.next
        break
      }
      prev = cur
      cur = cur.next
    }
  }

  deleteAtPosition(pos){
    if(pos===0){
      this.deleteHead()
      return
    }
    let cur = this.head
    let prev = null
    let count = 0
    while(cur){
      if(count === pos){
        prev.next = cur.next
      }
      count++
      prev = cur
      cur = cur.next
    }
  }

  length(){
    let temp = this.head
    let count = 0

    while(temp){
      count++
      temp = temp.next
    }
    return count
  }

  search(val){
    let temp = this.head
    while(temp){
      if(temp.value === val){
        return true
      }
      temp = temp.next
    }
    return false
  }

  print(){
    let temp = this.head
    let result = ''
    while(temp){
      result+=temp.value+'-->'
      temp = temp.next
    }
    result+='null'
    console.log(result);
  }

  toArray(){
    const arr = []
    let temp = this.head
    while(temp){
      arr.push(temp.value)
      temp = temp.next
    }
    return arr
  }
}

module.exports = SinglyLinkedList