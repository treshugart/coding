// @flow

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

  remove (value: any): SinglyLinkedNode {
    let prev;
    let curr = this.head;
    if (curr.value === value) {
      this.head = curr.next;
    } else {
      while (curr.next) {
        if (curr.value === value) {
          break;
        }
        prev = curr;
        curr = curr.next;
      }
    }
    if (prev) {
      prev.next = curr.next;
    }
    return curr;
  }

  reverse (): SinglyLinkedList {
    const head = this.head;
    let curr = this.head;
    let temp;
    while (curr) {
      temp = curr.next;
      // curr.next = curr.prev;
      // curr.prev = temp;
      if (!temp) {
        this.head = curr;
      }
      curr = temp;
    }
    return this;
  }
}
