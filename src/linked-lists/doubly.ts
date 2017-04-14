import { LinkedNode } from './util';
import { SinglyLinkedList, SinglyLinkedNode } from './singly';

export interface DoublyLinkedNode extends SinglyLinkedNode {
  next?: DoublyLinkedNode;
  prev?: DoublyLinkedNode;
}

export class DoublyLinkedList extends SinglyLinkedList {
  head: DoublyLinkedNode;
  last: DoublyLinkedNode;

  push (value: any): DoublyLinkedNode {
    const { last } = this;
    const node: DoublyLinkedNode = super.push(value);
    node.prev = last;
    return node;
  }
}
