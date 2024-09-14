// 1) array length - return no. of elements in an array
let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5

// 2. Array toString()
let fruits = ["Apple", "Banana", "Mango"];
let res = fruits.toString();
console.log(res); // 'Apple,Banana,Mango'
console.log(typeof res);

/*
3. Array at()
The at() method returns the element at the given index.
 */
let number = [10, 20, 30, 40];
console.log(number.at(1)); // 20
console.log(number.at(-1)); // 40 (last element)

// 4. Array join()
// The join() method joins array elements into a string, with a specified separator.

let element = ["Fire", "Water", "Earth", "Air"];
console.log(element.join(" & ")); // Output : 'Fire & Water & Earth & Earth'

// 5. Array pop()
// The pop() method removes the last element from an array and returns it.
let lastFruit = fruits.pop();
console.log(lastFruit); // 'Mango'
console.log(fruits); // ['Apple', 'Banana']

/*
6. Array push()
The push() method adds one or more elements to the end of an array and returns the new length.
 */
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]
console.log(numbers.length); // 4

/*
7. Array shift()
The shift() method removes the first element of an array and returns it.
 */
let firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);

/*
8. Array unshift()
The unshift() method adds elements to the beginning of the array and returns the new length.
 */
fruits.unshift("Orange");
console.log(fruits);
fruits.unshift("Mango");
console.log(fruits);

/*
9. Array delete
The delete operator removes an element without changing the length of the array.
 */
delete fruits[1];
console.log(fruits); // ['Apple', undefined, 'Banana']
//note : delete removes the element but leaves an empty slot in its place.

/*
10. Array concat()
The concat() method merges two or more arrays into a new array.
 */
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = arr1.concat(arr2);
console.log(combined);

/*
11. Array copyWithin()
The copyWithin() method copies part of an array to another location in the same array.
 */

let array = [1, 2, 3, 4, 5];
array.copyWithin(1, 3);
console.log(array);

/*
12. Array flat()
The flat() method flattens a nested array into a single array.
 */
let array1 = [1, [2, [3, 4]]];
console.log(array1.flat(2));

/*
13. Array splice()
The splice() method adds/removes items to/from an array.
 */
let Fruits = ["Apple", "Banana", "Mango"];
Fruits.splice(1, 1, "Orange");
console.log(Fruits);
/*
14. Array indexOf()
The indexOf() method returns the first index of a specified value.
 */
console.log(numbers);
console.log(numbers.indexOf(3)); // output : 2
// note :indexOf(3) returns the index where 3 is first found.

/*
15. Array lastIndexOf()
The lastIndexOf() method returns the last index of a specified value.
 */
numbers.push(4);
numbers.push(3);
numbers.push(5);
numbers.push(6);
numbers.push(4);
numbers.push(2);
console.log(numbers);
console.log(numbers.lastIndexOf(2));

//Array include() : next day we will start
