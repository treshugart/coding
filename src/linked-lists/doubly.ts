import { LinkedNode } from './util';
import { SinglyLinkedList, SinglyLinkedNode } from './singly';

export interface DoublyLinkedNode extends SinglyLinkedNode {
  next?: DoublyLinkedNode;
  prev?: DoublyLinkedNode;
}

export class DoublyLinkedList extends SinglyLinkedList {
  head: DoublyLinkedNode;
  tail: DoublyLinkedNode;

  push (value: any): DoublyLinkedNode {
    const { tail } = this;
    const node: DoublyLinkedNode = super.push(value);
    node.prev = tail;
    return node;
  }
}
