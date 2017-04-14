import { LinkedNode } from './util';

export interface SinglyLinkedNode extends LinkedNode {
  next?: SinglyLinkedNode;
}

export class SinglyLinkedList {
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
