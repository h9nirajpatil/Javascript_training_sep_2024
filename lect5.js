// 1: Array is verstile data structur it allow to store multiples values in single varibale.
// using square bracket
let fruits = ["apple", "banana", "Orange"];

// using array construtor
let numbers = new Array(1, 2, 3, 4, 5);

console.log(fruits);
console.log(numbers);

// 2. accessing elements
// by their index
console.log(fruits[0]);
console.log(numbers[3]);

// 3. Modifying arrays
fruits[1] = "Mango";
console.log(fruits); // change 'banana to 'mango'

//push(): add at the end
fruits.push("grapes");
console.log(fruits);

// remove the last element
let lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);

// 4. arary methods
// shift : remove 1st element
let firstelement = fruits.shift();
console.log(firstelement);
console.log(fruits);

// unshift : adds an element to the begining of the array
let unshiftelement = fruits.unshift("kiwi");
console.log(unshiftelement);
console.log(fruits);

// concate : join two arrays or merge arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let result = array1.concat(array2);
console.log(result);

// length get length of an array using length property
console.log(fruits.length);
console.log(result.length);

//slice : extract portion of array
console.log(fruits.slice(1, 4));
console.log(result.slice(1, 4));

// splice : add/ removes elements from the array
console.log(result);
// console.log(result.splice(1, 2));

let Fruits = ["Apple", "Orange", "Mango", "Banana", "Kiwi", "Pinapple"];
Fruits.splice(1, 0, "Grapes", "Swaberry");
console.log(Fruits);

//6. Multidimensional Arrays
let matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
console.log(matrix[1][2]); // 6
