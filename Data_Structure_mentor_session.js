// ******************************Data Structures*****************************
/*
1.  It is a way of ogranising data in a particular format for easy access and management. 
2.  A data strucuture defines how a data is arranged and operations can be performed.
      Data management operations are isnertion and update.
      Data management operations and searching and traversal.
3.  Common examples of data structures are arrays, linked lists, stacks, queue, trees, graphs
    hash tables and heaps.
*/
/*
For your information sharing a big list of data structures.
1. Linear Data Structures
  Linear data structures have elements arranged in a sequential manner.
    Arrays:
        Single-dimensional array
            Stores data in single line
        Multi-dimensional array (e.g., 2D arrays)
            Stores data in table format
        Dynamic arrays
            An array that can change its size at runtime. Generally arrays are fixed length data strucutres.
        Sparse arrays
            Sparse arrays are designed to efficiently store and process data structures with many zero values.
            Instead of storing every element, sparse arrays only store the non-zero values, which reduces memory usage and computational complexity.

    Linked Lists:
        Singly linked list
        Doubly linked list
        Circular linked list
        Skip list
            A skip list is a probabilistic data structure. The skip list is used to store a sorted list of elements or data with a linked list. 
            It allows the process of the elements or data to view efficiently. In one single step, it skips several elements of the entire list, 
            which is why it is known as a skip list

    Stacks: Follow Last-In-First-Out (LIFO) mechanism
        Standard stack
        Array-based stack
        Linked list-based stack

    Queues: Follow First-In-First-Out (FIFO) mechanism
        Standard queue
        Circular queue
        Deque (double-ended queue) 
            Allows addition and removal of data from both sides.
        Priority queue
            Each element is associated with a priority and higher priority elements are processed before low priority elements.

2. Non-Linear Data Structures
  Non-linear data structures allow for more complex relationships between elements.
    Trees
        Binary Trees 
            A binary tree is a tree that contains at most two child nodes.
        Binary Search Trees
            A binary search tree is a hierarchical data structure where each node has at most two children, 
            with values ordered such that left child values are smaller and right child values are greater.
        AVL Trees 
            Adelson-Velsky and Landis. It is named after its inventors.a self-balancing binary search tree (BST) 
            that maintains balance to ensure efficient operations
        Red-Black Trees 
            A self-balancing binary search tree data structure noted for fast storage and retrieval of ordered information
        B-Trees
             A btree can have more than two chilren. All the leaf nodes should be at the same level
        Heaps (Min-Heap, Max-Heap)
            Trie (a tree-based Data Structure that has been given name from 'reTRIEval', which means fetching something. 
            It is mostly used to effectively search words from a collection of strings or a dictionary)

    Graphs: Expresses a non-linear reprsentation of data. Data is represented in the form of nodes(vertices). 
        Relation between two elements is represented by edges(arcs)
        Directed graphs
            Edges have a direction associated with them. Indicates a one-way relationship between two nodes.
        Undirected graphs
            Edges have no direction associated with them. Indicates a two-way relationship between two nodes.
        Weighted graphs
            Each edge is assiged a weight(number). This number can represent anything based on context.
        Unweighted graphs

3. Hash Data Structures
Data structures that map keys to values for efficient retrieval.
  Hash tables (with variations like separate chaining and open addressing)
*/



// Time and Space Complexity.
// https://builtin.com/software-engineering-perspectives/nlogn
// https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/
/*
Complexity Analysis 
We start with a question. You have to write a function that reverses a string.
You are an expert. And you wrote the string reversal function in 6 different ways.
Now the question is, which of the function is the best among these functions? What is the basis of this decision?

The choice will be the function that runs fastest (takes minimum time) and with minimum required space.
But how do you know this? We cannot decide this based on underlying hardware. 

This is where the Complexity analysis comes into picture. A technique to characterize the execution time of an algorithm 
independently from the machine, the language and the compiler.

It helps in evaluating the variations of execution time with regard to the input data
It helps in comparing algorithms as how different algorithm solve a particular problem
It helps in comparing as how an algorithm will behave as the input grows larger

Complexity analysis of a program is done by understanding the time and space complexity of a program

Time Complexity
    It helps in determining the time a function or a program will take to run with a given set of input data.
Space Complexity
    It helps in determining the memory space a function or a program will take to run with a given set of input data.

BIG-O Notation.
    Big O notation is a mathematical concept used to describe the performance or complexity of an algorithm, 
    particularly in terms of time or space as the input size grows.
    Note: While doing the BIO-O analysis the intention is not to calculate each and every step to measure the exact Time Complexity 
    but to understand as how an algorithm will behave (grows during the runtime) when huge amount of data is passed.

    O(1): Constant complexity. - This implies that the amount of time or memory does not scale with n. For time complexity, 
        this means that n is not iterated on or recursed. Generally, a value will be selected and returned, or a value will be operated on and returned.

    O(logn): Logarithmic complexity. - The intent here to understand is when we double the input values, the value of log increases by 1.
        This complexity is visible with searching and sorting algorithms.

    O(n): Linear complexity. is perhaps the most straightforward complexity to understand. O(n) means that the time/space scales 
        1:1 with changes to the size of n.

    O(nlogn): Loglinear complexity. - O(nlogn) is known as loglinear complexity. O(nlogn) implies that logn operations will occur n times. 
        O(nlogn) time is common in recursive sorting algorithms, binary tree sorting algorithms and most other types of sorts.

    O(n^x): Polynomial complexity. - O(nˣ), or polynomial complexity, covers a larger range of complexities depending on the value of x. 
        X represents the number of times all of n will be processed for every n. Polynomial complexity is where we enter the danger zone. 
        It’s extremely inefficient, and while it is the only way to create some algorithms, polynomial complexity should be regarded as 
        a “warning sign” that the code can be refactored. This holds true for not just polynomial complexity, but for all following 
        complexities we will cover.
        A red flag that an algorithm will run in polynomial time is the presence of nested loops. A general rule of thumb is that x will 
        equal the number of nested loops. A major exception to this rule is when you are working with matrices and multi-dimensional arrays. 
        Nested loops are needed to traverse these data structures and do not represent polynomial time. 

    O(X^n): Exponential time. -  O(Xⁿ), known as exponential time, means that time or space will be raised to the power of n. 
        Exponential time is extremely inefficient and should be avoided unless absolutely necessary.

    O(n!): Factorial complexity.  O(n!), or factorial complexity, is the “worst” standard complexity that exists. To illustrate how fast 
        factorial solutions will blow up in size, a standard deck of cards has 52 cards, with 52! possible orderings of cards after shuffling.
        This number is larger than the number of atoms on Earth. If someone were to shuffle a deck of cards every second from the beginning of the 
        universe until the present second, they would not have encountered every possible ordering of a deck of cards. It is highly unlikely that 
        any current deck of shuffled cards you encounter has ever existed in that order in history. To sum up: Factorial complexity is unimaginably inefficient.
*/

function logarithmicComplexity(){
  for (let n = 1; n < 11; n++){
    console.log(`For input n = ${2**n}; log n is ${Math.log2(2**n)}`)
  }
}
// logarithmicComplexity()




// ******* Searching *******

function generateNumbers(){
  let numbers = []
  for(let i = 0; i < 10; i++){
    let num = Math.floor(Math.random() * 100) + 1
    numbers.push(num)
  }
  return numbers
}

function sortFunction(x, y){
  return x - y
}

/* -- 1. Linear Search
Linear search is the simplest searching algorithm that sequentially checks each element of a list or array to find 
the target value. It does not require the data to be sorted.
Time complexity O(n)
Space Complexity O(1) - needs no extra data strucutres.

Steps of Linear Search
    Start from the First Element
        Begin at the first element of the list.
    
    Compare each Element
        Compare the current element with the target value.

    Match Found
        If the current element matches the target value, return its index (or indicate success).

    Move to the Next Element
        If the current element does not match, move to the next element in the list.

    End of the List
        If the end of the list is reached and no match is found, return a failure indication (e.g., -1 or None)
 */

function linearSearch(numbers, target){
  console.log(numbers)
  for(let i = 0; i < numbers.length; i++){
    if (numbers[i] == target){
      console.log(`Linear Search - Found ${target} and index ${i}`)
      return
    }
  }
  console.log(`Linear Search - ${target} not found`)
}

let numbers = generateNumbers()
let anyNum = Math.floor(Math.random() * 100) + 1
let random_elm = numbers[Math.floor(Math.random() * numbers.length)]
let first_elm = numbers[0]

// linearSearch(numbers, anyNum)
// linearSearch(numbers, random_elm)
// linearSearch(numbers, first_elm)


/* -- 2. Binary Search
Binary Search is an efficient algorithm used to find the position of a target element in a sorted array or list. 
It operates by repeatedly dividing the search interval in half, eliminating half of the elements with each step, 
which makes it significantly faster than linear search.
Time complexity O(logn)
Space Complexity O(1) - needs no extra data strucutres.


Steps of Binary Search
    Start with the Middle Element:
        Find the middle index of the array/list.
        Compare the middle element with the target value.

    Compare and Decide:
        If the middle element equals the target value, the search is complete, and the index is returned.
        If the target value is smaller than the middle element, narrow the search to the left half (elements before the middle).
        If the target value is greater than the middle element, narrow the search to the right half (elements after the middle).
    
    Repeat:
        Repeat the process on the new interval (left or right half) until the target element is found or the interval becomes empty.

    End Condition:
        If the interval becomes empty, the target element is not in the list, and the search returns a failure indication (e.g., -1).

*/
function binarySearch(numbers, target){
  console.log(numbers, target)
  let left = 0
  let right = numbers.length - 1
  while (left <= right){
    let mid = Math.floor((left + right) / 2)
    console.log(`Left - ${left}(${numbers[left]}); Mid - ${mid}(${numbers[mid]}); Right - ${right}(${numbers[right]}); Target - ${target}`)
    if (numbers[mid] === target){
      console.log(`Binary Search - Found ${target} and index ${mid}`)
      return mid
    } 
    else if(numbers[mid] < target){
      left = mid + 1
    }
    else{
      right = mid - 1
    }
  }
  console.log(`Binary Search - ${target} not found`)
  return -1
}

// numbers.sort(sortFunction)
// first_elm = numbers[0]
// binarySearch(numbers, first_elm)
// binarySearch(numbers, random_elm)
// binarySearch(numbers, anyNum)


// ******* Sorting *******
// https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/

/* -- 1. Bubble Sort
Bubble Sort is a simple sorting algorithm that repeatedly compares adjacent elements in an array and swaps them 
if they are in the wrong order. The process continues until the array is fully sorted.
Time complexity O(n^2)
Space Complexity O(n) - Because we are creating a new sorted array.
It will be O(1) - if we are doing the in-place sorting. Or updating the original array.

Step-by-Step Explanation
    Divide the Array into Two Parts. The array is conceptually divided into:
        Sorted Part: Initially empty but grows as the largest elements "bubble up" to the correct position.
        Unsorted Part: Initially the entire array, shrinks as elements are sorted.

    Compare Adjacent Elements
        Start from the beginning of the array and compare two adjacent elements.
        If the first element is greater than the second (for ascending order), swap them.

    Repeat Until the Largest Element Moves to the End
        After one full pass through the array, the largest element in the unsorted part will "bubble up" to its correct position at the end.

    Repeat for Remaining Unsorted Part
        Ignore the last element (which is now sorted) and repeat the process for the remaining unsorted part.
        Continue until no swaps are needed, indicating that the array is sorted.
*/

function bubbleSort(array){
  console.log(`Initial Array - ${array}`)
  let arr = [...array]
  let len = arr.length
  for(let i = 0; i < len; i++){
    for(let j = 0; j < len - 1; j++){
      if(arr[j] > arr[j+1]){
        console.log(`Swapping arr[${j}]-(${arr[j]}) and arr[${j+1}]-(${arr[j+1]})`);
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        console.log(`Swapped Array - ${arr}`)
      }
    }
  }
  return arr
}

// let sortedNumbers = bubbleSort(numbers)
// console.log(sortedNumbers)


// let fruits = ["Banana", "Apple", "Cherry", "Mango", "Pineapple", "Guava", "Strawberry"]
// let sortedFruits = bubbleSort(fruits)
// console.log(sortedFruits)


/* -- 2. Selection Sort
Selection Sort is a simple comparison-based sorting algorithm that repeatedly selects the smallest (or largest) element 
from the unsorted part of the array and moves it to the sorted part.
Time complexity O(n^2)
Space Complexity O(n) - Because we are creating a new sorted array.
It will be O(1) - if we are doing the in-place sorting. Or updating the original array.


Step-by-Step Explanation
    Divide the Array into Two Parts. The array is conceptually divided into:
        Sorted Part: Initially empty, grows as elements are sorted.
        Unsorted Part: Initially the entire array, shrinks as elements are moved to the sorted part.

    Start with the First Element
        Assume the first element of the unsorted part is the smallest.

    Find the Minimum Element in the Unsorted Part
        Traverse through the unsorted part of the array.
        Keep track of the index of the smallest element found so far.
        Compare each element with the current smallest and update the minimum index if a smaller element is found.

    Swap the Smallest Element with the First Unsorted Element
        Once the smallest element in the unsorted part is identified, swap it with the first element of the unsorted part.
        This ensures that the smallest element is now in its correct position in the sorted part.

    Repeat for the Remaining Unsorted Part
        Move the boundary of the sorted part by one element to the right.
        Repeat steps 3 and 4 until the entire array is sorted.*/

function selectionSort(array) {
  console.log(`Initial Array - ${array}`)
  let arr = [...array]
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    // Find the index of the smallest element in the unsorted part
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the found smallest element with the first element of the unsorted part
    if (minIndex !== i) {
      console.log(`Swapping arr[${i}]-(${arr[i]}) and arr[${minIndex}]-(${arr[minIndex]})`);
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      console.log(`Swapped Array - ${arr}`)
    }
  }
  return arr; // Return the new sorted array
}

// let sortedNumbers = selectionSort(numbers)
// console.log(sortedNumbers)


/* -- 3. Quick Sort
Quick Sort is a divide-and-conquer sorting algorithm that works by selecting a 'pivot' element
from the array and partitioning the other elements into two sub-arrays according to whether
they are less than or greater than the pivot. The process is then applied recursively to the
sub-arrays.
Time complexity O(nlogn); average, On^2 worst case scenario
Space Complexity O(n) - Because we are creating a new sorted array.
It will be O(1) - if we are doing the in-place sorting. Or updating the original array.

    Base Case:
        If the array has 0 or 1 element, it's already sorted, so return it.

    Choose a Pivot:
        Select a pivot element. In this implementation, the middle element is chosen, 
        but other strategies (e.g., first, last, or random element) can also be used.
   
    Partitioning:
        Split the array into three parts:
        Left: Elements smaller than the pivot.
        Equal: Elements equal to the pivot.
        Right: Elements larger than the pivot.
   
    Recursive Sorting:
        Recursively apply Quick Sort on the left and right parts.

    Combine:
        Concatenate the sorted left, equal, and right arrays to get the final sorted array.
*/

function quickSort(array) {
  console.log(`Full Array - ${array}`)
  let len = array.length
  if (len < 2){  // Base case
    return array
  }
  const pivot = array[Math.floor(array.length / 2)]
  console.log(`Pivot value - ${pivot}`)

  // Partition the array into three parts
  const left = [];  // Elements less than the pivot
  const right = []; // Elements greater than the pivot
  const equal = []; // Elements equal to the pivot

  for (let element of array) {
    if (element < pivot) {
      left.push(element);
    } else if (element > pivot) {
      right.push(element);
    } else {
      equal.push(element);
    }
  }
  console.log(`Left Array - ${left}; Equal Array = ${equal}; Right Array - ${right}`)
  // Recursively sort the left and right parts and combine them
  return [...quickSort(left), ...equal, ...quickSort(right)];
}

// console.log(numbers)
// let sortedNumbers = quickSort(numbers)
// console.log(sortedNumbers)

/* -- 4. Merge Sort
Merge Sort is another divide-and-conquer algorithm that divides the array into two halves, sorts
each half, and then merges them back together. It utilizes a merging step to combine two sorted
arrays into a single sorted array.
Time complexity O(nlogn)
Space Complexity O(n) - Because we are creating a new sorted array.
It will be O(1) - if we are doing the in-place sorting. Or updating the original array.

    Divide:
        Split the unsorted array into two halves. This process continues recursively until each sub-array contains a single element, which is inherently sorted.
    
    Conquer:
        Recursively sort both halves of the array. Since single-element arrays are already sorted, this step focuses on merging the sorted subarrays.
    
    Combine:
        Merge the two sorted halves into a single sorted array. This involves comparing the elements of both halves and placing them in the correct order in a temporary array.

*/

function mergeSort(array) {
  console.log(`Full Array - ${array}`)
  let len = array.length
  if (array.length < 2) {  // Base case
      return array;
  }
  // Divide the array into two halves
  const middle = Math.floor(len / 2);
  console.log(`Left Array - ${array.slice(0, middle)}; Right Array - ${array.slice(middle)}`)
  const left = mergeSort(array.slice(0, middle)); // Recursively sort the left half
  const right = mergeSort(array.slice(middle));   // Recursively sort the right half
  // Merge the sorted halves
  return merge(left, right);
}

function merge(left, right) {
  console.log(`Merge - Left - ${left}; Right - ${right}`)
  let merged = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // Compare elements from both arrays and merge them in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          merged.push(left[leftIndex]);
          leftIndex++;
      } else {
          merged.push(right[rightIndex]);
          rightIndex++;
      }
  }
  // Concatenate any remaining elements from both arrays
  merged = merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  console.log(`Merged - ${merged}`)
  return merged
}

// Example usage:
// console.log(numbers);
// let sortedNumbers = mergeSort(numbers);
// let sortedNumbers = mergeSort([98, 78, 25, 97,  1])
// console.log(sortedNumbers); 


// ******* Stack and Queue *******

/* 1. Stack using array
*/

class Stack{
  constructor(){
    this.items = []
  }
  push(element){
    this.items.push(element)
  }
  pop(){
    return this.items.pop()
  }
  peek(){
    if (!this.isEmpty()){
      return this.items[this.items.length-1]
    }
  }
  isEmpty(){
    return this.items.length === 0
  }
  clear(){
    this.items = []
  }
  print(){
    console.log(this.items.join(", "))
  }
  size() {
    return this.items.length;
  }
}

// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// console.log("Top element:", stack.peek()); // Output: Top element: 30
// console.log("Stack size:", stack.size());   // Output: Stack size: 3
// stack.print();                               // Output: 10 20 30
// console.log("Popped element:", stack.pop()); // Output: Popped element: 30
// console.log("Stack size after pop:", stack.size()); // Output: Stack size after pop: 2
// stack.print(); 



class Queue{
  constructor(){
    this.items = []
  }
  enqueue(element){
    this.items.push(element)
  }
  dequeue(){
    return this.items.shift()
  }
  peek(){
    if (!this.isEmpty()){
      return this.items[0]
    }
  }
  isEmpty(){
    return this.items.length === 0
  }
  clear(){
    this.items = []
  }
  print(){
    console.log(this.items.join(", "))
  }
  size() {
    return this.items.length;
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Front element:", queue.peek()); // Output: Front element: 10
console.log("Queue size:", queue.size());     // Output: Queue size: 3
queue.print();                                 // Output: 10 20 30
console.log("Dequeued element:", queue.dequeue()); // Output: Dequeued element: 10
console.log("Queue size after dequeue:", queue.size()); // Output: Queue size after dequeue: 2
queue.print();