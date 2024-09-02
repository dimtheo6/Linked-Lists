import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.headNode = null;
    this._size = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.headNode === null) {
      this.headNode = newNode;
    } else {
      let tail = this.headNode;
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = newNode;
    }
    this._size++;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.headNode;

    this.headNode = newNode;
    this._size++;
  }

  size() {
    return this._size;
  }

  toString() {
    if (this.headNode === null) {
      return "null";
    }

    let result = "";
    let current = this.headNode;

    while (current !== null) {
      result += `( ${current.value} )`;
      if (current.next !== null) {
        result += " -> ";
      }
      current = current.next;
    }

    result += " -> null";
    return result;
  }

  head() {
    return this.headNode;
  }

  tail() {
    if (this.headNode === null) {
      return null;
    }

    let current = this.headNode;
    while (current.next !== null) {
      current = current.next;
    }

    return current;
  }

  at(index) {
    if (index < 0 || index >= this._size) {
      return null;
    }

    let current = this.headNode;
    for (let i = 1; i <= index; i++) {
      current = current.next;
    }

    console.log(`${current.value} at index ${index}`);
    return current;
  }

  pop() {
    if (this.headNode === null) {
      return;
    }

    if (this.headNode.next === null) {
      this.headNode = null;
    }

    let current = this.headNode;

    while (current.next.next !== null) {
      current = current.next;
    }

    current.next = null;
  }

  contains(value) {
    if (this.headNode === null) {
      return false;
    }

    let current = this.headNode;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }

      current = current.next;
    }
    return false;
  }

  find(value) {
    let index = 0;

    if (this.headNode === null) {
      return;
    }

    let current = this.headNode;

    while (current !== null) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return null;
  }

  insertAt(value, index) {
    if (index < 0 || index > this._size) {
      return null;
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.headNode;
      this.headNode = newNode;
    } else {
      let current = this.headNode;

      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }

      newNode.next = current.next;
      current.next = newNode;
    }
  }

  removeAt(index) {
    if (index < 0 || index > this._size) {
      return null;
    }

    if (index === 0) {
      this.headNode = this.headNode.next;
    }

    let current = this.headNode;
    let previous = null;

    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next;
    }

    previous.next = current.next;
  }
}
