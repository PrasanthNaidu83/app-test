

//strings
const d=new Date();
console.log(d)
console.log(d.toString())
console.log(d.toDateString())
console.log(d.toISOString())

console.log(d)

//type conversions
 console.log(5 + null);
console.log("5" + null);
console.log("5" + 2);
console.log("5" - 2);
console.log("5" * "2");
console.log("5" / "2");
//if statements
let age = 25;
if (age >= 18) 
    {
  console.log("Eligible to vote");
}
//else statement
let marks = 30;

if (marks >= 35) {
  console.log("Pass");
} else
     {
  console.log("Fail");
}
//if...else if...else statement
let grade = 85;

if (grade >= 90) 
    {
  console.log("A grade");
}
 else if (grade >= 75) 
    {
  console.log("B grade");
} 
else (grade >=60)
 {
  console.log("C grade");
}
//data types
console.log("'John' is " + typeof "John");
console.log("('John' + 'Doe') is " + typeof ("John" + "Doe"));
console.log("3.14 is " + typeof 3.14);
console.log("33 is " + typeof 33);
console.log("(33 + 66) is " + typeof (33 + 66));
console.log("prasAnth is " + typeof prasAnth);
console.log("true is " + typeof true);
console.log("false is " + typeof false);
console.log("8309596525n is " + typeof 8309596525n);
console.log("Symbol() is " + typeof Symbol());
console.log("x is " + typeof x);
// Array concepts
let fruits = ["Apple", "Banana", "Mango"];
console.log("Fruits list:", fruits);
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Total fruits:", fruits.length);
fruits.push("Orange");
console.log("After adding a fruit:", fruits);
console.log("All fruits:");
for (let i = 0; i < fruits.length; i++)
     {
  console.log(fruits[i]);
}
//variables
var name = "Prasanth";
let height = 180;
const country = "India";
console.log(name);
console.log(age);
console.log(country);
//loops
// FOR LOOP
console.log("For Loop:");
for (let i = 1; i <= 9; i++) 
    {
  console.log(i);
}

// WHILE LOOP
console.log("\nWhile Loop:");
let j = 1;
while (j <= 10) 
    {
  console.log(j);
  j++;
}

// DO...WHILE LOOP
console.log("\nDo...While Loop:");
let k = 1;
do 
{
  console.log(k);
  k++;
}
 while (k <= 5);
// Arithmetic Operators
let a = 10;
let b = 5;

console.log("Arithmetic Operators:");
console.log("a + b =", a + b);   // addition
console.log("a - b =", a - b);   // subtraction
console.log("a * b =", a * b);   // multiplication
console.log("a / b =", a / b);   // division
console.log("a % b =", a % b);   // modulus

// Assignment Operators
let x = 10;
console.log("\nAssignment Operators:");
x += 5;   // x = x + 5
console.log("x += 5:", x);

x -= 3;   // x = x - 3
console.log("x -= 3:", x);

// Comparison Operators
let p = 10;
let q = "10";

console.log("\nComparison Operators:");
console.log("p == q:", p == q);     
console.log("p === q:", p === q);   
console.log("p != q:", p != q);
console.log("p > 5:", p > 5);



