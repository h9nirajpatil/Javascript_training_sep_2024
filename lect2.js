// Javscript output
// innerHTML
// document.write()
// window.alert()// alert()
// console.log()

// operator
//-assigment =
// - addition +
// multiplication *
// comparison >

/*
1. arithmetic opertors : it perform basic operations

+ : addition
 */
let sum = 5 + 3;
console.log(sum); //sum = 8

/* - : substraction */
let difference = 10 - 4;
console.log(difference); // diff = 6

/* '*' : Mul */
let product = 4 * 3;
console.log(product); //prod=12

/* / :divi */
let division = 12 / 4;
console.log(division); // div = 3

/* '%' Modulus(remainder)  */
let remainder = 10 % 3;
console.log(remainder); // remainder = 1

// ------------------------------------------------------

/* Assigment Opertor : these operands are used to assign value to variables */
/* '=' assign a value */
let x = 10;
console.log(10); // 10

/* '+= : adds and assigns*/
x += 5; // x = x + 5 ; x = 10 + 5
console.log(x); // 15

/* '-= : sub & assign*/

x -= 10; // x = x - 10 ; x = 15 - 10 ; x = 5
console.log(x);

/* '*= : mul & assign*/
x *= 2; // x = x * 2 ; x = 5 * 2 ; x = 10;
console.log(x);

/* '/= : division & assign*/
x /= 2; // x = x / 2; x = 10 / 2; x = 5;
console.log(x);

/* '%= : Modulus & assign*/
x %= 2; // x = x % 2 ; x = 5 % 2 ; x= 1;
console.log(x);
//--------------------------------------------------------

/* 3. Comparison Operator :these operators compare two valus nd return a Boolean (true or false) */

/* '==' : Equal to(values check)*/
console.log(5 == "5"); // integer == string // true // only check the values

/* '===' : stricly Equal to(values check as well as data type)*/
console.log(5 === "5"); // false / because data type r different

/* '!=' Not equal (value)*/
console.log(5 != "5"); //false

// '!== : stricly equal'(value & data type)
console.log(5 !== "5"); //true

// ' > ' : Checks if the left operand is greater than the right.
console.log(10 > 5); // true

// ' < ' : Checks if the left operand is less than the right.
console.log(3 < 7); // true

// ' >= ' : Checks if the left operand is greater than or equal to the right.
console.log(5 >= 5); // true

// ' <= ' : Checks if the left operand is less than or equal to the right.
console.log(6 <= 6); // true

// ------------------------------------------------

// Logical Operator

// Logical AND (&&): Returns true if both operands are true.
console.log(5 > 3 && 8 > 6); // T && T  - T
console.log(5 > 6 && 8 > 6); // F && T  - F
console.log(5 > 3 && 8 > 9); // T && F  - F
console.log(5 > 6 && 8 > 9); // F && F  - F

// Logical OR (||): Returns true if at least one operand is true.
console.log(5 > 10 || 8 > 6); // F || F - F
console.log(5 > 4 || 8 > 10); // F || T - T
console.log(5 > 4 || 8 > 6); // T || T - T

// Logical NOT (!): Reverses the Boolean value of the operand.
console.log(!(5 > 10)); // 5 > 10 : false but !(false) : true
console.log(!(10 > 5)); // 10 > 5 : true but !(true) : false

/*
5. Increment and Decrement Operators
These operators are used to increase or decrease a variable's value by 1.
 */
//increment
let count = 5;
count++;
console.log(count); //6

//decrement
let num = 5;
num--;
console.log(num); //4

/*
6. Ternary Operator
The ternary operator is a shorthand for an if-else statement.

Syntax: condition ? expr1 : expr2
 */

let age = 17;
// 17 >= 18 //false // no
// 18 >= 18 // true // yes
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);

// let age1 = 18;
// if (age1 >= 18) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

/*
8. Bitwise Operators
These operators work on a binary level and are used in more advanced scenarios.

Bitwise AND (&): Returns a 1 in each bit position for which both operands' corresponding bits are 1.

Example
 */

console.log(5 & 1); // 1
