// Answer the following questions in this file using comments without running the code

// 1.
// What does `givenName` equal right now?
var givenName;
// A: undefined


// 2.
// What is `givenName` set to right now?
givenName = "Tim";
// A: string value of Tim


// 3.
// What is `givenName` set to right now?
givenName = givenName;
// A: undefined


// 4.
// What is `greeting` set to?
var greeting = "Hello, how are you? " + givenName;
// A: when calling greeting variable - it will say the given greeting and will concatenate with a givenName.  givenName must be defined otherwise it will log as "Hello, how are you? undefined"


// 5.
// What is `math` set to?
var high = 50;
var low  = 10;
var math = high - low;
// A: 50-10 and will return a value of 40 for the variable math


// 6.
// What is `math` set to?
math = high - "5";
// A: If referencing math and high variables defined above then this will return a value of 35.  If it is NOT referencing the math and high variables above, then it will return undefined.


// 7.
// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.
var born = 1984;
var today = 2017;
var age= today-born;
// A:
console.log("Tim is " + age + " years old");


// 8.
// Adjust this code. Store some information in the following variables.
// A:
var yourName = "syed";
var instructorName= "brian";


// 9.
// Update the variables `yourName` and `instructorName` so the expression below reads correctly.
// A:
yourName="abbas";
instructorName="dalton"


// This statement should read correctly
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;


// 10.
// We've created a variable named after each primitive type.
// Use the `=` operator to assign a value to each variable matching the type in the name.
var myNumber = 10;
var myString = "basketball";
var myBoolean = true;
// This one's a little tricky - think carefully about what makes a value "undefined"!
var myUndefined;
// A: myUndefined is set to myArray (which is not defined) and will return a value of undefined.


// For questions 11 - 19: List which boolean value will be stored in each variable. (Remember: `==` does not check data type)

// 11.
x = (false == 0);
// A.true


// 12.
var y = (false == "");
// A. true - string takes precedence


// 13.
var z = (0 == "");
// A. true - string will take precedence over numbers


// 14.
var a = (null == null);
// A.true


// 25.
var b = (undefined == undefined);
// A. true


// 16.
var c = (undefined == null);
// A. true


// 17.
var d = (null == false);
// A. false


// 18.
var e = (NaN == null);
// A. false


// 19.
var f = (NaN == NaN);
// A. false


// 20.
// Fix the `if...else` statement below by adding an `if` keyword and conditional expression.
// Use the variable `thirsty` as part of your conditional expression.
// A:
var thirsty = true;
if(thirsty === true)
{
  console.log("I'm parched!");
} else {
  console.log("I've had enough to drink.");
}

// For questions 21 - 29 list which statement will be logged.

// 21.
var x = 2;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A: true;


// 22.
if(""){
	console.log("True!");
} else {
	console.log("False!");
}
// A: false




// 23.
// this expression will set x to NaN
var x = 1 * undefined;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A: false;


// 24.
if(false){
	console.log("True!");
} else {
	console.log("False!");
}
// A: false;


// 25.
if(-5 && 5){
	console.log("True!");
} else {
	console.log("False!");
}
// A: true;


// 26.
if("Hello World!"){
	console.log("True!");
} else {
	console.log("False!");
}
// A: true;


// 27.
if({}){
	console.log("True!");
} else {
	console.log("False!");
}
// A: true;

// 28.
if({name: "Yehuda Katz"}){
	console.log("True!");
} else {
	console.log("False!");
}
// A:true;


// 29.
if(new Date()){
	console.log("True!");
} else {
	console.log("False!");
}
// A:true;


// 30.
// Link this file to the sibling `index.html` document, open the file in your browser and request an instructor.
