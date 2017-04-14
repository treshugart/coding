import { pretty } from '../util';

interface LinkedNode {
  value: any;
}

interface SinglyLinkedNode extends LinkedNode {
  next?: SinglyLinkedNode;
}

interface DoublyLinkedNode extends SinglyLinkedNode {
  next?: DoublyLinkedNode;
  prev?: DoublyLinkedNode;
}

class SinglyLinkedList {
  head: SinglyLinkedNode;
  last: SinglyLinkedNode;

  push (value: any): SinglyLinkedNode {
    const node: LinkedNode = { value };
    if (this.head) {
      this.last.next = node;
    } else {
      this.head = node;
    }
    this.last = node;
    return node;
  }
}

class DoublyLinkedList extends SinglyLinkedList {
  head: DoublyLinkedNode;
  last: DoublyLinkedNode;

  push (value: any): DoublyLinkedNode {
    const { last } = this;
    const node: DoublyLinkedNode = super.push(value);
    node.prev = last;
    return node;
  }
}


const sll = new SinglyLinkedList();
sll.push(0);
sll.push(1);
sll.push(2);
pretty(sll.head);

const dll = new DoublyLinkedList();
dll.push(0);
dll.push(1);
dll.push(2);
pretty(dll.head);
