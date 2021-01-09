/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);
//Values and Variables
//A Value is basically a piece of data, the most fundamental unit in programming.
console.log("Jonas");
console.log(23);
//Decaring a variable, like putting a lable on a box
let myFirstName = "Matilda";
console.log(myFirstName);
console.log(myFirstName);
console.log(myFirstName);
//Variable names can only contain letters, numbers, underscores, or the dollar sign
//JavaScript will not let you use reserved words as variable names
//Using the word "Name" is illagle to use, but is allowed by the console.
let person = "jonas";
//Make sure variable names are concise and discriptive
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';
//vs
let job1 = 'programmer';
let job2 = 'teacher';
//Variables that are in uppercase are reserved for constatns that we know will never change
let PI = 3.14;
//VSCode will also change uppercase variables in a different color
console.log(myFirstJob);
//EXERSIZE 1
let country = 'USA';
let continent = 'North America';
let population = '328 million';
console.log(country);
console.log(continent);
console.log(population);
//The Seven Primitive Data Types
//1: Number: Floating points numbers, used for decimals and intergers
let age = 23
//2: String: Sequence of characters, used for text
let firstName = 'Jonas';
//3: Boolean: Logical type that can only be true or false, used for making decisions
let fullAge = true;
//4: Undefined: Value taken by a variable that is not yet definded ('empty value')
let children;
//5: Null: Also means 'empty value'
//6: Sybmol (ES2015): Value that is unique and cannot be changed [Not useful for now]
//7: BigInt (ES2020): Larger integers than the Number type can hold
//JavaScript has Dynamic Typing: We do not have to manyally define the data type of the vaule stored in a variable. Instead, data types are determined automatcally
//Vaule has type, NOT variable
//Use // to comment a line
//Use /* and *//* around multiple lines of code to coment it out
//Use CTRL+/ to comment a line on or off
// let blah = "bleh"
//Boolians
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');
//The first time you declare a variable value, use the let function. If you want to declare a new value for the variable, just write the variable and the new value.
javascriptIsFun = 'Yes!';
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);
console.log(typeof null);
let age = 30;
age = 31;
//Declaring a variable without a value can be usefule since you can list the variables unassigned at the top of the JS document then fill them in later
//Constant variables cannot be changed. They cannot be listed with empty values
const birthyear = 1989;
// birthyear = 1990; This would throw an error up
//The variable type var should be avoided, but you may run into it in legacy code
var job = 'programmer';
job = 'teacher';
//Math Opperators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);
// 2 ** 3 mean s2 to the power of 3
const firstName = 'Jonas';
const lastName = 'Smith';
console.log(firstName + ' ' + lastName);
//Assignment Opperators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; //x = x + 1
x--;
x--;
console.log(x);
//Comparison Opperators
console.log(ageJonas > ageSarah); // <. >. <=, >=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > 2018);
*/