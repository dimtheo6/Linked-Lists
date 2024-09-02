import LinkedList from "./linkedList.js";

const list = new LinkedList();

list.append(5);
list.append(8);
list.append(10);
console.log(list.toString()); // ( 5 ) -> ( 8 ) -> ( 10 ) -> null
list.prepend(11);
console.log(list.toString()); // ( 11 ) -> ( 5 ) -> ( 8 ) -> ( 10 ) -> null
console.log(list.size()); // 4
console.log(list.head()); // return head Node
console.log(list.tail()); // return tail Node
console.log(list.at(2)); // 8 at index 2
console.log(list.at(5)); // null
list.pop(); // removes the last node
console.log(list.toString()); // ( 11 ) -> ( 5 ) -> ( 8 ) -> null
console.log(list.find(5)); // returns the index, in this case its 1
console.log(list.contains(5)); // true
console.log(list.contains(9)); // false
list.insertAt(3, 1); // add a new node at index 1
console.log(list.toString()); // ( 11 ) -> ( 3 ) -> ( 5 ) -> ( 8 ) -> null
list.removeAt(2); // removes the node at index 2
console.log(list.toString()); // ( 11 ) -> ( 3 ) -> ( 8 ) -> null
