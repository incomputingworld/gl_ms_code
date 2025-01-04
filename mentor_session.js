// 1. Classes in JavaScript
/* 
A blueprint for creating an object.
Encapsulates attributes/properties and methods that manipulate this data.
A class syntax was introduced to provide an intuitive and cleaner way to work with the objects.
It is a syntactic sugar on top of constructor/prototype pattern.  
*/
// A class example.
class Person {
  constructor(name){
    this.name = name  // attribute with public access
  }
  getName(){
    return `I am ${this.name}.`
  }
}

// let amit = new Person("Amit")
// console.log(amit.getName())
// console.log(amit.name)


// 2. Access specifiers 
/* 
All the object oriented languages, define access specifiers which determines how an attribute is accessible
from an object or when a class inherits from another class.
These are... 
a. Private - These attributes are not accessible directly via objet. Inheriting class will not inherit these attributes
b. Protected - These attributes are accessible directly via objet. Inheriting class inherits these attributes
c. Public - These attributes are accessible directly via objet. Inheriting class inherits these attributes
In JavaScript - all the attributes are public by default. You can mark an attribute as a protected with an underscore(_)
before the attribute name. This is a convention. JavaScript does not mandate this. It is still possible to access a 
protected member just like a public attribute
JavaScript supports private specifier. For this you have to define a variable starting with a hash(#) and it must be defined
at the class level. If you try to access this via object, JavaScript throws an error.
This way of defining a private attribute, can be confusing for people coming from C++, Java, Python background.
*/

class Person1 {
  #gender  // private attribute
  constructor(name, age, gender){
    this.name = name  // public attribute
    this._age = age  // protected attribute.
    this.#gender = gender   // private attribute. 
  }
  getName(){
    return `I am ${this.name}.`
  }
  getGender(){
    return this.#gender
  }
}
// let amit1 = new Person1("Amit#1", 25, "M")
// let ritu1 = new Person1("Ritu#1", 25, "F")
// console.log("Calling getGennder() - ", amit1.getGender())
// console.log("Calling getGennder() - ", ritu1.getGender())
// console.log(amit1._age)  // Though menctioed as protected. Yet, accessible.
// console.log(amit1.gender) // Not accessible. 


// 3. Getters and setters
/* 
A protected/public attribute should not be accessed directly. This exposes the code and creates dependency.
This makes code maintenance difficult.
Suppose the class expects the "name" not to be empty, but I still can do it. To prevent such updates that can 
throw the program logic off balance we have the concept of getters and setters where we can add required checks before
we make any change to an attribute. The keywords to define these are get and set.
We call these methods just like an attribute of an object, without parentheses.
*/

class Person2 {
  constructor(name){
    this._name = name  // we make this protected or change variable name to avoid conflict with getter/setter name
  }
  get name(){  // recommend to use getter and setter with the same name as of the attribute. Though not madatory.
    return `I am ${this._name}.`
  }
  set name(new_name){
    new_name = new_name.trim()
    if (new_name === ''){
      console.log("Name cannot be empty")
      return 
    }
    this._name = new_name
  }
}

// let amit2 = new Person2("Amit#2")
// amit2.name = "   "
// console.log(amit2.name)
// amit2.name = "AMIT#2"
// console.log(amit2.name)


// 4. Constructor method
/* 
It is a special function defined within a class. It is used to initialize an object of the class.
When a new object is created, JavaScript executes this method automatically. 
A class can have only one constructor method. 
In case a class does not have a constructor method, JavaScript provides one. And it does nothing.
You can pass parameters to this methods to initialize attributes.
*/


// 5. Encapsulation
/* 
The purpose of encapsulation is the put together the attributes and methods of a class together in one single unit
and expose a well defined set of methods for other objects to interact without referring to the attributes directly.
We have seen this implementation via getters and setters and via private attribute of a class. 
*/
class Person3 {
  #gender  // private attribute
  constructor(name, gender){
    this._name = name  // public attribute
    this.#gender = gender   // private attribute. 
  }
  get name(){
    return `I am ${this._name}.`
  }
  set name(new_name){
    new_name = new_name.trim()
    if (new_name === ''){
      console.log("Name cannot be empty")
      return 
    }
    this._name = new_name
  }
  get gender(){
    return this.#gender
  }
  set gender(new_value){
    new_value = new_value.trim()
    if(new_value === 'F' || new_value === 'M'){
      this.#gender = new_value
    }
    else{
      console.log("Specify a valid value. 'M' or 'F'.")
    }
  }
}
// let suman3 = new Person3("Suman#3", 'M')
// console.log(suman3.name, suman3.gender)
// suman3.name = "Suman"
// suman3.gender = 'F'
// console.log(suman3.name, suman3.gender)


// 6. Inheritance
/*
A concept that allows a class (child class) to inherit properties and methods from other class (parent class). 
This promotes hierarchical structure. And we can build a specialized functionality on top of existing generic one.
JavaScript provides the functionality of inheritance via two keywords extend and super. 

The extends keyword
Establishes a parent-child relationship between classes.
Facilitates code reuse by inheriting behavior from a base class.
Enables polymorphism, where child classes can have their specific implementations of methods.

The super keyword is used to call the constructor of the parent class, and it's mandatory to call it before using 
this keyword in the construtor of child class.
Use this function to call a method of a parent class.

*/

class Animal{
  constructor(type){
    this.type = type
  }
  make_sound(){
    console.log("Make a sound")
  }
}

class Dog extends Animal{
  constructor(name){
    super("Dog")
    this.name = name
  }
  make_sound(){
    // super.make_sound()
    console.log(`The ${this.type}, ${this.name}, is barking`)
  }
}

let rex = new Dog("Rex")
// console.log(rex)
// rex.make_sound()

// 7. Polymorphism
/* 
Allows methods to perform different task based on the object that invokes it. 
In Javascript we can achieve polymorphism using function overriding. You have seen the example above
Here we have a function make_sound() available both in the parent class (Animal) and the child class(Dog).
Another way to achieve this is via Dynamic polymorphism where the method to execute is determined at the runtime
based on the object's type.
*/

class Lion extends Animal{
  constructor(name){
    super("Lion")
    this.name = name
  }
  make_sound(){
    // super.make_sound()
    console.log(`The ${this.type}, ${this.name}, is roaring`)
  } 
}

let leo = new Lion("Leo")

function sound(animal){
  animal.make_sound()
}

// console.log("Funtion sound()...")
// sound(leo)
// sound(rex)

/*
Polymorphism - using interfaces. This implies the suitability of an object is determined by
it behavior (methods and attributes) instead of its type. 
The concept is - if it walks like a duck and quacks like a duck, it is probably a duck. 
Based on above example, the sound function works both for tiger and dog and it  will work for any 
other species of animal as well as long as that class implements the function make_sound
*/

class Sparrow{
  constructor(name){
    this.name = name
  }
  make_sound(){
    console.log(`The ${this.type}, ${this.name}, is chirping`)
  } 
}

let peanut = new Sparrow("Peanut")

// sound(leo)
// sound(rex)
// sound(peanut)


// function sound1(animal){
//   if (animal instanceof Animal){
//     animal.make_sound()
//   }
// }

// console.log("Funtion sound1()...")
// sound1(rex)
// sound1(leo)
// sound1(peanut)


// 8. Iterables
/*
In JavaScript an iterable is an object whose elements can be iterated over using for... of... loop.
Arrays, strings, maps, sets are some of the iterable objects. 
For an object to be an iterable it has to implement the Symbol.iterator method.
Symbol.iterator is a property which refers to a function that returns an iterator object.
This iterator object must implement the next method. This next method returns an object. 
The object it returns has two values. First is the value which is the current element of an iterable and 
The second is done, a boolean flag that indicates whether the iteration is complete or not. 
false indicate more values are available in the iterable and true indicates end of the elements. 
We will write a custom iterable to iterate through the list of books 
*/

class Book{ // Node of the linked list
  constructor(bookName, author){
      this.bookName = bookName
      this.author = author
      this.next = null
  }
}

// Iterable iterator implementation.
class BookCollection{ // Iterable iterator
    constructor(){
        this.books = null
        this.currentBook = null 
    }
    addNewBook(bookName, author){
        let newBook = new Book(bookName, author)
        if (this.books == null)
            this.books = newBook
        else{
            let current = this.books
            while(current.next != null)
                current = current.next
            current.next = newBook   
        }
    }
    [Symbol.iterator] (){
        this.currentBook = this.books
        return this  
    }
    next(){
        if(this.currentBook){
            let data = `${this.currentBook.bookName} - ${this.currentBook.author}`
            this.currentBook = this.currentBook.next
            return {value: data, done: false}   
        }
        else
            return {value: undefined, done: true}
    }
}

// // Iterable iterator - testing code
// let myBookCollection = new BookCollection()

// myBookCollection.addNewBook("The Tell-Tale Brain", "V.S. Ramachandran")
// myBookCollection.addNewBook("Phantoms in the Brain", "V.S. Ramachandran")
// myBookCollection.addNewBook("The Joy of X", "Steven Strogatz")
// myBookCollection.addNewBook("Outliers", "Malcom Gladwel")
// myBookCollection.addNewBook("The Invisible Man", "H.G. Wells")
// myBookCollection.addNewBook("Book Thief", "Markus Zusak")
// myBookCollection.addNewBook("Pre-suasion", "Robert Caildini")

// for (let book of myBookCollection){
//     console.log(book)
// }


// ITerator using generator functionality
class BookCollection1 {
    constructor(){
        this.books = null
        this.currentBook = null
    }
    addNewBook(bookName, author){
        let newBook = new Book(bookName, author)
        if(this.books == null){
            this.books = newBook
        }
        else{
            let currentBook = this.books
            while (currentBook.next != null){
                currentBook = currentBook.next
            }
            currentBook.next = newBook
        }
    }
    * [Symbol.iterator] (){ // iterable iterator
        this.currentBook = this.books
        while(this.currentBook != null){
            let book = `${this.currentBook.bookName} - ${this.currentBook.author}`
            this.currentBook = this.currentBook.next
            yield book
        }
    }
}

let myBookCollection = new BookCollection1()

myBookCollection.addNewBook("The Tell-Tale Brain", "V.S. Ramachandran")
myBookCollection.addNewBook("Phantoms in the Brain", "V.S. Ramachandran")
myBookCollection.addNewBook("The Joy of X", "Steven Strogatz")
myBookCollection.addNewBook("Outliers", "Malcom Gladwel")
myBookCollection.addNewBook("The Invisible Man", "H.G. Wells")
myBookCollection.addNewBook("Book Thief", "Markus Zusak")
myBookCollection.addNewBook("Pre-suasion", "Robert Caildini")

for(let book of myBookCollection){
    console.log(book)
}


// 9. using forEach function
/*
We use forEach function to iterate over each element of an iterable and perform a specific action on each element.
*/
function make_upper(value, index, arr){
  arr[index] = value.toUpperCase() 
}

let arr = ['a', 'b', 'c', 'd', 'e']

// arr.forEach(make_upper);
// console.log(arr)

// 10. Filters
/*
We use filter method to iterate over an existing array and based on a filter logic it creates a new array.
*/

function isEven(num){
  return num % 2 == 0
}

let numbers = [1,2,3,4,5,6,7,8,9,10]
// let evenNumbers = numbers.filter(isEven)
// console.log(evenNumbers)

// 11. map function
/* 
Iterates through each element of an array and applies a specified function and creates a new array.
*/
function square(num){
  return num * num
}

// let squaredNumbers = numbers.map(square)
// console.log(squaredNumbers)

// 11.5 - reduce function. 
function add(x, y){
  return x + y
}

let sumTotal = numbers.reduce(add)
console.log(sumTotal)

/* forEach vs map
ForEach - 
returns undefined.
Can modify the original array directly
Cannot chain this with other methods as it returns undefined
Executes on all elements. Includes empty slots

map - 
returns a new array
Does not modify the original array
Chainable with methods like map, reduce as it returns a new array
Skips empty slots in a sparse array.
*/

// 12. Sets

/* 
Build in data structure that allows to store a collection of ordered unique values of any data type.
You have to pass an iterable to the constructor to create a set.
*/

let my_set = new Set([1,2,3,4,5,6,4,2,7,1])
// console.log(my_set)


// Reference
// https://www.youtube.com/@InComputingWorld
// https://sunilkathuria.substack.com/


