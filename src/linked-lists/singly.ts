import { LinkedNode } from './util';

export interface SinglyLinkedNode extends LinkedNode {
  next?: SinglyLinkedNode;
}

export class SinglyLinkedList {
  head: SinglyLinkedNode;
  tail: SinglyLinkedNode;

  push (value: any): SinglyLinkedNode {
    const node: LinkedNode = { value };
    if (this.head) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
    return node;
  }
}
