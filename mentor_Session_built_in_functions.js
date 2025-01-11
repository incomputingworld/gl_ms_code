// 1. Arrays ---------------------------------------
console.log(`-------------------- Array Functions --------------------`)
// An array is a data structure used to store a collection of values. 
// Arrays can hold multiple data types, including numbers, strings, objects, and even other arrays. 
// JavaScript arrays are dynamic, meaning their size can grow or shrink as needed
// Each element in an array has a numeric index, starting from 0

////// - Creating an array
// Create an empty array - array constructor
let arr = new Array()
console.log(`Empty Array -`, arr)

// Create an array with empty elements - array constructor
let arr1 = new Array(5)
console.log(`Array with empty elements -`, arr1)

// Create an array using square brackets.
let arr2 = [1, 2, 3, 4, 5]
console.log(`Create array using [] with values -`,arr2)

////// - Managing an array.
// Add a value at the end. push()
arr2.push(6)
console.log(`Add value at the end -`, arr2)

// Add a value at the beginning. unshift()
arr2.unshift(0)
console.log(`Add value at start -`, arr2)

// Add a value at a certain index - splice()
arr2.splice(3, 0, 2.5)
console.log(`Add value at 3rd index -`, arr2)

// Update existing values
arr2[7] = 5.5
console.log(`Updated last value -`, arr2)

// Delete last element - pop() - returns the deleted element
arr2.pop()
console.log(`Deleted last element -`, arr2)

// Delete first element - shift()- returns the deleted element
arr2.shift()
console.log(`Deleted first element -`, arr2)

// Delete a value at a certain index - splice - returns the deleted element
console.log(arr2.splice(2, 1))
console.log(`Delete at index 2 -`, arr2)

// Getting a subset of an array. Without deleting elements.
console.log(`Slice of an array -`,arr2.slice(1, 4))

// Getting a subset of an array by deleting elements.
console.log(`splice of an array -`,arr2.splice(1, 4))
console.log(`Array after splice -`, arr2)
arr2 = [1, 3, 2, 6, 4, 5, 11, 12, 7]

// Sorting an array - sort() - sorts an array considering values as string.
arr2.sort()
console.log(`Default Sorted array - `, arr2)

// Sorting using a function. in descending order
function ascending_sort(x, y){
  return x - y
  //The compare function takes two arguments and returns:
  // A negative number if the first argument should come before the second.
  // A positive number if the first argument should come after the second.
  // Zero if they are considered equal.
}

let arr3 = [1, 3, 2, 6, 4, 5, 11, 12, 7]
arr3.sort(ascending_sort)
console.log(`Sorted array using custom algo -`, arr3)

// Reversing an array
arr2.reverse()
console.log(`Reversed array -`, arr2)

// Concatenate 2 or more arrays
let big_array = arr2.concat(arr3)
console.log(`Concatenated arrays -`, big_array)

// Join array elements, retuns it as a string
console.log(`Joined array - `, big_array.join(","))

// Using forEach function
/*
We use forEach function to iterate over each element of an iterable and perform a specific action on each element.
*/
function make_upper(value, index, arr){
  arr[index] = value.toUpperCase() 
}

let arr4 = ['a', 'b', 'c', 'd', 'e']

// arr4.forEach(make_upper);
// console.log(arr)

// Filters
/*
We use filter method to iterate over an existing array and based on a filter logic it creates a new array.
*/

function isEven(num){
  return num % 2 == 0
}

let numbers = [1,2,3,4,5,6,7,8,9,10]
// let evenNumbers = numbers.filter(isEven)
// console.log(evenNumbers)

// Map function
/* 
Iterates through each element of an array and applies a specified function and creates a new array.
*/
function square(num){
  return num * num
}

// let squaredNumbers = numbers.map(square)
// console.log(squaredNumbers)

// Reduce function. 
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


// 2. Math functions ---------------------------------------
console.log(`-------------------- Math Functions --------------------`)
console.log(`Absolute value (-5) -`, Math.abs(-5))
console.log("")
console.log(`Round to nearest Integer (4.2) -`, Math.round(4.2))
console.log(`Round to nearest Integer (6.5) -`, Math.round(6.5))
console.log(`Round to nearest Integer (6.7) -`, Math.round(6.7))
console.log(`Round to nearest Integer (7.5) -`, Math.round(7.5))
console.log("")
console.log(`Round up to nearest integer (4.3) -`, Math.ceil(4.3))
console.log(`Round up to nearest integer (4.5) -`, Math.ceil(4.5))
console.log(`Round up to nearest integer (4.7) -`, Math.ceil(4.7))
console.log("")
console.log(`Round down to nearest integer (4.3) -`, Math.floor(4.3))
console.log(`Round down to nearest integer (4.5) -`, Math.floor(4.5))
console.log(`Round down to nearest integer (4.7) -`, Math.floor(4.7))
console.log("")
console.log(`Remove decimal part (4.3) -`, Math.trunc(4.3))
console.log(`Remove decimal part (4.5) -`, Math.trunc(4.5))
console.log(`Remove decimal part (4.7) -`, Math.trunc(4.7))
console.log("")
console.log(`Number raised to power of another number 2^8 =`, Math.pow(2, 8))
// Not covered exponential, tignometric and logarthmic functions
console.log("")
console.log(`Random Number, floating point, between 0 (inclusive) and 1 (exclusive) -`, Math.random())
console.log(`Random Integer 1 digit -`, Math.floor(Math.random() * 10))
console.log(`Random Integer 2 digit -`, Math.floor(Math.random() * 100))
console.log(`Random Integer between 1 to 10 -`, Math.floor(Math.random() * 10) + 1)
console.log(`Random Integer between 3 to 8 -`, Math.floor(Math.random() * (8 - 3 + 1)) + 1)

// Understanding random integer generation... 
console.log("")
console.log("Understanding Random Integer generation")
let random_number = Math.random()
console.log(`Randim number = `, random_number)
let random_integer = Math.floor(random_number * 10)
console.log(`Random Integer = `, random_integer)
console.log(`Random Integer between 1 to 10 =`, random_integer + 1)
console.log(`Random Integer between 3 to 8 -`, Math.floor(random_number * (8 - 3 + 1)) + 3)
console.log("")
console.log(`Find minimum value from an array - `, Math.min(...numbers)) // used ...SPREAD operator to pass individual values of the array
console.log(`Find maximum value from an array - `, Math.max(...numbers))
console.log("")
console.log(`Constant π (Alt + 227) = `, Math.PI)
console.log("")
console.log(`Convert string ("45") to an integer -`, parseInt("45"))
console.log(`Convert string ("45.45") to a float -`, parseFloat("45.45"))
console.log(`Convert string ("45.45") to an integer -`, parseInt("45"))
console.log(`Convert string ("45") to a float -`, parseFloat("45"))

// 3. Number functions ---------------------------------------
// These functions are used to conver string to a number, checking properties and formatting of numbers

console.log(`-------------------- Number Functions --------------------`)
console.log(`Check if (25) is integer -`, Number.isInteger(25))
console.log(`Check if (25.45) is integer -`, Number.isInteger(25.45))
console.log(`Check if (0) is integer -`, Number.isInteger(0))
console.log(`Check if (-5) is integer -`, Number.isInteger(-5))
console.log(`Check if (-5.6) is integer -`, Number.isInteger(-5.6))

// isNaN
// Check for NaN: The primary purpose of isNaN() is to test if a value is NaN. It returns true if the value is NaN, and false otherwise.
// Type Coercion: One of the unique features of isNaN() is that it first attempts to convert the input value to a number before performing the check. 
// This means that non-numeric values may be coerced into numbers, which can lead to unexpected results. 
// For example, an empty string is converted to 0, and boolean values are converted to 0 or 1, which are not NaN
console.log("")
console.log(`Check if 5 is not a NaN -`, isNaN(5))
console.log(`Check if "5" is not a NaN -`, isNaN("5"))
console.log(`Check if "test" is not a NaN -`, isNaN("test"))
console.log(`Check if "56test" is not a NaN -`, isNaN("56test"))
console.log(`Check if "5.6456" is not a NaN -`, isNaN("5.6456"))
console.log(`Check if "" is not a NaN -`, isNaN(""))
console.log(`Check if true is not a NaN -`, isNaN(true))

// parseInt()
// string: Parse a string and return the first integer found within it. If the string starts with non-numeric characters, it will return NaN (Not-a-Number) instead.
// radix: An integer between 2 and 36 that specifies the base of the numeral system to be used. If omitted, it defaults to 10 (decimal).
console.log("")
console.log(`parseInt("5") -`, parseInt("5"))
console.log(`parseInt("50cups") -`, parseInt("50cups"))
console.log(`parseInt("50 cups") -`, parseInt("50 cups"))
console.log(`parseInt("-50cups") -`, parseInt("-50 cups"))
console.log(`parseInt("T50") -`, parseInt("T50"))
console.log(`parseInt("255") -`, parseInt("255"))
console.log(`parseInt("11111111") in Binary -`, parseInt("11111111", 2))
console.log(`parseInt("FF") in Hexadecimal -`, parseInt("FF", 16))

console.log("")
console.log(`parseFloat("5") -`, parseFloat("5"))
console.log(`parseFloat("50.45cups") -`, parseFloat("50.45cups"))
console.log(`parseFloat("50.45 cups") -`, parseFloat("50.45 cups"))
console.log(`parseFloat("-50.444cups") -`, parseFloat("-50.444 cups"))
console.log(`parseFloat("T50") -`, parseFloat("T50"))

// toFixed()
// convert a number into a string representation with a specified number of digits after the decimal point. 
// This is particularly useful for displaying numbers in a more readable format, such as in financial calculations.
console.log("")
console.log(`π with 0 digit precision -`, Math.PI.toFixed())
console.log(`π with 0 digit precision -`, Math.PI.toFixed(0))
console.log(`π with 2 digit precision -`, Math.PI.toFixed(2))
console.log(`π with 10 digit precision -`, Math.PI.toFixed(10))
console.log(`π with 20 digit precision -`, Math.PI.toFixed(20))
console.log(`π with 50 digit precision -`, Math.PI.toFixed(50))
console.log(`π with 100 digit precision -`, Math.PI.toFixed(100))
// console.log(`π with 101 digit precision -`, Math.PI.toFixed(101)) // throws error


// 4. Date time manipulation ---------------------------------------
// Date object works with Date and time. Below console.log includes UTC offset
console.log("")
console.log(`Showing current date and time -`, new Date())
console.log(`Specific date and time -`, new Date(2025, 0, 11, 8, 41, 34))  // Month is 0 baed index
console.log(`Specific date and time -`, new Date("January 11 2025, 8:41:34"))

console.log("Get individual elements of date...")
let cDT = new Date()
// the individual date element functions below return data in local time zone.
console.log(`Year - ${cDT.getFullYear()}, Month - ${cDT.getMonth()}, Day = ${cDT.getDay()}, 
Hour - ${cDT.getHours()}, Minutes - ${cDT.getMinutes()}, Seconds - ${cDT.getSeconds()}`)

let customDate = new Date()
customDate.setFullYear(2026)
customDate.setMonth(1)
customDate.setDate(15)
customDate.setHours(22)
customDate.setMinutes(30)
console.log(`Custom Date - ${customDate}: `, customDate) // Notice the difference in the display of date.

// Formatting dates - Local date time format
const options = { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric',
  era: 'long',
  weekday: 'long',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timezone: 'short'
}

console.log(customDate.toLocaleString('en-US', options))
console.log(customDate.toLocaleString('ja-JP', options))
console.log(customDate.toLocaleDateString('hi-IN', options))
console.log(customDate.toLocaleDateString())
console.log(customDate.toLocaleTimeString())

// 5. String functions ---------------------------------------

console.log(`-------------------- String Functions --------------------`)
let str = "inComputingWorld in india"
console.log(`Lenght of str - ${str.length}`)
console.log(`Character at 3rd index - ${str.charAt(3)}`)
console.log(`Concatenate "Welcome with str - ${"Welcome to ".concat(str)}`)
console.log(`Search 'in' in str - ${str.indexOf("in")}`)
console.log(`Search last 'in' in str - ${str.lastIndexOf("in")}`)
console.log(`Whether str contains 'or' - ${str.includes("or")}`)
console.log(`Whether str starts with 'in' - ${str.startsWith("in")}`)
console.log(`Whether str ends with 'ia' - ${str.endsWith("ia")}`)
console.log(`Slice str to extract 'World' - ${str.slice(11, 16)}`)
console.log(`Slice str to extract 'World' using negative indices - ${str.slice(-14, -9)}`)
console.log(`SUbstring str to extract 'World'- ${str.substring(11, 16)}`)
console.log(`Convert case of str to upper - ${str.toUpperCase()}`)
console.log(`Convert case of str to lower - ${str.toLowerCase()}`)
console.log(`Replace 'in' with 'IN' - ${str.replace('in', 'IN')}`)
console.log(`Replace all 'o' with 'O' - ${str.replaceAll('o', 'O')}`)
console.log(`Split str - ${str.split(" ")}`)
console.log(`Join str using '-' - ${str.split(" ").join("-")}`)
