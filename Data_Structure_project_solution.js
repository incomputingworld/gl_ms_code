// 1. Boookstore Inventory.

class BookStore{
  constructor(){
    this.books = []
  }
  isEmpty(){
    if(this.books.length === 0){
      console.log("No books in Inventory")
      return
    }
    console.log(`Books are available in Inventory`)
  }
  addBook(book){
    this.books.push(book)
    console.log(`New book added: ${book}.`)
  }
  sellBook(){
    console.log(`Book sold: ${this.books.pop()}.`)
  }
  checkStock(){
    console.log(`Book available for sale is - ${this.books[this.books.length-1]}`)
  }
  showInventory(){
    console.log(`All books in inventory are... \n${this.books.join("\n")}`)
  }
}

// Test BookStore
// let myBookStore = new BookStore()
// myBookStore.isEmpty()

// myBookStore.addBook("The Invisible Man")
// myBookStore.addBook("Lord of the Rings")

// myBookStore.isEmpty()
// myBookStore.showInventory()

// myBookStore.checkStock()
// myBookStore.sellBook()
// myBookStore.checkStock()

// 2. Postfix Evaluation
function postFixEvaluation(expression){
  let operations = ['+', '-', '*', "/"]
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let my_stack = []
  for(data of expression){
    if (numbers.includes(data)){
      let num = Number(data)
      my_stack.push(num)
    }
    else if(operations.includes(data)){
      if(my_stack.length < 2){
        console.log('Expression is not correct')
        return null
      }
      let num2 = my_stack.pop()
      let num1 = my_stack.pop()
      if (data == '+'){
        my_stack.push(num1 + num2)
      }
      else if(data == '-'){
        my_stack.push(num1 - num2)
      }
      else if(data == '*'){
        my_stack.push(num1 * num2)
      }
      else if(data == '/'){
        my_stack.push(num1 / num2)
      }
      else{
        console.log("Invalid Operation")
        return null
      }      
    }
    // console.log(my_stack)
  }
  return my_stack.pop()
}

// console.log(postFixEvaluation("622*+8-"))
// console.log(postFixEvaluation("421*7-"))

// 3. Ticketing System
class TicketingSystem{
  constructor(){
    this.tickets = []
  }
  isEmpty(){
    if(this.tickets.length === 0){
      console.log("No tickets available")
      return
    }
    console.log(`Tickets are available.`)
  }
  enqueue(ticket){
    this.tickets.push(ticket)
    console.log(`Ticket issued: ${ticket}`)
  }
  dequeue(){
    let ticket = this.tickets.shift()
    console.log(`Ticket Removed: ${ticket}`)
  }
  peek(){
    if (this.tickets.length!=  0){
      console.log(`Next ticket in the queue: ${this.tickets[0]}`)
    }
    else{
      console.log(`Queue is empty.`)
    }
  }
  displayQueue(){
    console.log(`All tickets... \n${this.tickets.join(", ")}`) 
  }
}

// let myTicketSystem = new TicketingSystem()
// myTicketSystem.enqueue("Ticket-101");
// myTicketSystem.enqueue("Ticket-102");
// myTicketSystem.enqueue("Ticket-103");
// myTicketSystem.enqueue("Ticket-104");
// myTicketSystem.enqueue("Ticket-105");
// myTicketSystem.enqueue("Ticket-106");

// // Display the next ticket in the queue
// myTicketSystem.peek();
// // Process a ticket from the queue
// myTicketSystem.dequeue();
// // Display the updated queue
// myTicketSystem.displayQueue();


// 4. Queue system

class EventQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.queue = [];
    this.waitingTime = 0;
    this.deniedEntries = 0;
  }

  enqueue(groupSize) {
    if (groupSize > this.capacity) {
      this.deniedEntries += groupSize;
      console.log(`Entry denied to group of ${groupSize}`);
    } else {
      this.capacity -= groupSize;
      this.queue.push(groupSize);
      console.log(
        `Entry provided to group of ${groupSize}, waiting time: ${this.waitingTime} minutes`
      );
      this.waitingTime += groupSize; // Increment waiting time for previous entries
    }
  }

  displayResults() {
    console.log(`Total ${this.deniedEntries} persons denied entry`);
    console.log(`Seats Available: ${this.capacity}`);
  }
}

// Example usage:
let guestList = [4, 8, 9, 7, 3, 1, 5, 8, 2, 10, 4, 6, 10, 1, 8, 9, 5, 3, 5];
let guestList1 = [5, 2, 10, 10, 10, 7, 10, 10, 10, 10, 8, 9, 3]
let eventQueue = new EventQueue(100);

for (let groupSize of guestList1) {
  eventQueue.enqueue(groupSize);
}

eventQueue.displayResults();