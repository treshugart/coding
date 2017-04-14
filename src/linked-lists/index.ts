import { pretty } from '../util';
import { DoublyLinkedList } from './doubly';
import { SinglyLinkedList } from './singly';

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
