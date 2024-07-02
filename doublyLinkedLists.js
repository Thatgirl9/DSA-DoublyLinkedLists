// Doubly Linked Lists




// Created a Node Class
class Node {
  // Initializing a new instance of the Node class with the given data using the constructor function
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

// Created a DoublyLinkedList class with it's various methods
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // METHODS

  // * Insertion 


  // ?Prepend a node to the beginning of the list.
  prepend(data) {
    const newNode = new Node(data);
    // Checks if the list is empty
    if (!this.head) {
      // Set head and tail to newNode
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Set the next pointer of the current head to the newNode
      newNode.next = this.head;
      // Set the previous pointer of the current head to the newNode
      this.head.prev = newNode;
      // Update the head to the newNode
      this.head = newNode;
    }

    // *Time and Space Complexity -- 0(1)
  }


  // ?Append a node to the end of the list.

  append(data) {
    const newNode = new Node(data);
    // Checks if the list is empty
    if (!this.head) {
      // Set head and tail to newNode
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Set the next pointer of the current tail to the newNode
      this.tail.next = newNode;
      // Set the previous pointer of the newNode to the current tail
      newNode.prev = this.tail;
      // update the tail to the newNode
      this.tail = newNode;
    }

    // *Time and Space Complexity -- 0(1)
  }



  // * Display the list from the beginning

  printList() {

    let current = this.head;
    while (current) {
      // To print the data of each node in the list
      console.log(current.data);
      // To print the node
      const prevData = current.prev ? current.prev.data : null;
      const nextData = current.next ? current.next.data : null;
      console.log(`[ ${prevData} | ${current.data} | ${nextData} ]`);
      // Move to the next node
      current = current.next;
    }
  }
  // * Remove the first node with the give 'data' from the list

  remove(data) {
    let current = this.head;

    while (current) {
      // Check if current node's data matches the given data
      if (current.data === data) {
        // Check if the current node is not the head
        if (current.prev) {
          // Set the previous node's next pointer to the current node's next pointer
          current.prev.next = current.next;
        } else {
          // Update the head to the current node's next node
          this.head = current.next;
        }

        // Check if the current node is not the tail
        if (current.next) {
          // Set the next node's previous pointer to the current node's previous pointer
          current.next.prev = current.prev;
        } else {
          // Update the tail to the current node's previous node
          this.tail = current.prev;
        }

        return;
      }
      current = current.next;
    }
    //    * Time Complexity -- 0(n)
    // * Space Complexity -- 0(1) 
  }



  // * Reverse the list

  reverse = function () {
    let current = this.head;
    let temp = null;

    while (current) {

      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    if (temp) {
      this.head = temp.prev;
    }

  }

  // *Time Complexity -- 0(n)
  // *Space Complexity -- 0(1) 

}

let dlinkedlist = new DoublyLinkedList();
dlinkedlist.prepend(0);
dlinkedlist.append(1);
dlinkedlist.append(2);
dlinkedlist.append(3);
dlinkedlist.append(4);


console.log("Original list:");
dlinkedlist.printList();
// console.log(dlinkedlist.printList())
dlinkedlist.remove(2);
console.log("After removing 2:");
dlinkedlist.printList();

dlinkedlist.reverse();
console.log("Reversed list:");
dlinkedlist.printList();

console.log("After deleting the tail:");