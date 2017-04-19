// @flow

import { pretty } from '../util';
import { DoublyLinkedList } from './doubly';
import { SinglyLinkedList } from './singly';

const sll: SinglyLinkedList = new SinglyLinkedList();
sll.push(0);
sll.push(1);
sll.push(2);
// sll.reverse();
sll.remove(1);
pretty(sll.head);

const dll: DoublyLinkedList = new DoublyLinkedList();
dll.push(0);
dll.push(1);
dll.push(2);
// sll.reverse();
dll.remove(1);
pretty(dll.head);
