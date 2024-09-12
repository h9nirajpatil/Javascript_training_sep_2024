// String methods
// 1 string length
let text = "jaydeep";
let length = text.length;
console.log(length);

//Extracting String Characters
/*
The at(position) Method
The charAt(position) Method
The charCodeAt(position) Method
Using property access [] like in arrays
 */

// charAt
let name = "rohit";
//          01234   L -> R
let char = name.charAt(5);
console.log(char);
//limit extended so it will give empty string

//charcodeAt()
let text1 = "Hello world";
let char1 = text1.charCodeAt(2);
console.log(char1);
// A - 65 , a = 97

// at()
const firstname = "ganesh patel";
let letter = name.at(2);
console.log(letter);

//[] property access
let car = "bmw";
console.log(car[4]);
//limit extended so it will give undefined

/*
Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
 */

//slice
let form = "student form created";
//          01234567891011
console.log(form.slice(1, 5));
console.log(form.slice(5));
console.log(form.slice(5, 10));

//substring
let fruits = "apple, banana, kiwi, oranage";
console.log(fruits.substring(6, 12));
console.log(fruits.substring(1));

//substr
console.log(fruits.substr(7, 10));
console.log(fruits.substr(-4));

// converting to upper and loer case
// toUpperCase() -- a string conv -> uppercase
// to LowerCase() -- a string conver -> lower

let uppercase = "i have done my work";
console.log(uppercase.toUpperCase());

let lowercase = "I AM FULL STACK DEVELOPER!";
console.log(lowercase.toLowerCase());

// js string concate()
let First_Name = "Virat";
let Last_Name = "Kohli";
let Full_Name = First_Name.concat(" ", Last_Name);
console.log(Full_Name);

// +
let Name = "Ramesh";
Name = "prakash";
let Lname = "varma";
console.log(Name + " " + Lname);

// trim method // trimStart() //trimEnd() // removies whitsapce in the string
let extraspace =
  "                           Hi            how r u       ?        ";
console.log(extraspace);
console.log(extraspace.trimEnd());

// padStart()
let num = "5";
num = num.padStart(4, "0");
console.log(num);

// padEnd()
let padded = "6";
padded = padded.padEnd(4, "X");
console.log(padded);

// repeat(count)
let x = "Hello World!";
let result = x.repeat(4);
console.log(result);

//Replacing String Content replace()
let str = "I am a good boy and boy and boy";
let newText = str.replace("boy", "girl");
console.log(newText);

// replaceAll()
let newresult = str.replaceAll("boy", "girls");
console.log(newresult);
