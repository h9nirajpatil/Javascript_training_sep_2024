//String Search Methods
console.log("string methods");

// indexOf()
let text = "Please find my location where i stay! location, location";
let index = text.indexOf("Hello");
console.log(index); // 15

//lastindexOF()
lastindex = text.lastIndexOf("location");
console.log(text.length);
console.log(lastindex);

//string search()
let sentence =
  "i going to market for buy things. I have seen lots of products in market! ";
// console.log(sentence.search(market));

//string match()
let textwriting = "The rain in SPAIN stays mainly in the plain";
let myarr = textwriting.match(/ain/gi);
console.log(myarr);
console.log(myarr.length + " " + myarr);

//string machAll()
// let description =
//   "I love Dogs. Dogs are very easy to love. Dogs are very popular.";
// let iterator = description.matchAll("Dogs");
// document.getElementById("demo").innerHTML = Array.from(iterator);

// Js string templates
//Back - Tics Syntax (`  `)
let name = "John ";
let lastname = `John , he's wasn't often called "Jonny"`;
console.log(lastname);

// Mutiline strings
// let para = "he               
// went
// to
// school"

let para = `
he
is good
boy
`;
console.log(para);

// Interpolation
// Template String provide an easy way to interpolate variables and expressions into strings. ${....}

// Variable Substitution
// template string allow variables in string.
let first_name = "Ramu";
let last_name = "Kumar";
let desc = `Welcome ${first_name} , ${last_name}`;
console.log(desc);
