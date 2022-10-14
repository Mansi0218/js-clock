//1. WAYS TO PRINT IN JS
// console.log("Hello World")
// alert("me");
// document.write("hey there, this is document.write");

// 2. CONSOLE API
// console.log("Hello World", 4 + 9, "Another Log")
// console.warn("this is warning")
// console.error("this is an error")

// 3. JAVASCRIPT VARIABLES: CONTAINER TO STORE DATA VALUES
var number1 = 34;
var number2 = 67;
// console.log(number1+number2);

// 4. DATA TYPES IN JAVASCRIPT

// 4.1 PRIMITIVES DATA TYPES : undefined , null, number, string, boolean, symbol: gives unique value everytime
// 4.2 REFERENCE DATA TYPES: arrays, objects

// NUMBERS
var number1 = 34;
var number2 = 67.7;
// console.log(number1+number2);

// STRINGS
var str1 = "This is a string.";
var str2 = 'This is also a string';
// console.log(str1);
// console.log(str2);

// OBJECTS
var marks = {
    ravi: 34,
    shubham: 67,
    harry: 78.98
}
// console.log(marks);

// BOOLEANS
var a = true;
var b = false;
// console.log(a, b);

// UNDEFINED OR NULL
// by default all the variables has undefined value
var und;
var x = undefined;
// console.log(und, x);

var y = null;
// console.log(y);

// ARRAY
var arr = [34, 56, "string", 67, 78, 98]
// console.log(arr)
// console.log(arr[1])

// 5.OPERATORS IN JAVASCRIPT

// arithmetic operators: + - * / 

var a = 9;
var b = 3;
// console.log("the value of a + b is" , a+b);
// console.log("the value of a - b is" , a-b);
// console.log("the value of a * b is" , a*b);
// console.log("the value of a / b is" , a/b);

// assignment operator

var c = b;
c += 2;
// console.log(c);

// comparision operators

var x = 34;
var y = 7;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x<y);
// console.log(x>y);

// logical operators

// logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);

// logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);

// logical not
// console.log(!true);
// console.log(!false);


// (alt and click: to select multiple points in a line)

// 6. FUNCTIONS
// DRY: do not repeat yourself
function avg(a, b) {
    return (a + b) / 2;
}
c1 = avg(4, 8);
c2 = avg(3, 7);

// console.log(c1, c2);

// 7. CONDITIONAL IN JAVASCRIPT

// single if statement
// var age=93;
// if(age>18){
//     console.log("You are not a kid");
// }

// if else statement
// var c=39;
// if(c<18){
//     console.log("c is less than the given  no");
// }
// else{
//     console.log("c is gretaer than the given no");
// }

// if else ladder
// var age=399;
// if(age<18){
//     console.log("you are a kid");
// }
// else if(age>50){
//     console.log("you are too old ");
// }
// else{
//     console.log("age ", age);
// }

// 8. LOOPS 

// for loop
var arr = [2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(function (element) {
//     console.log(element);
// })

// let: block level scope (under curly braces)
let j=0;

// const: fixed, cannot be changed, use when you want to avoid overwriting
// const n=0;
// n=n+1;

// while loop
let ac=10;
// while(ac<arr.length){
//     console.log(arr[ac]);
//     ac ++;
// }

// do while loop

// do{
//     console.log(arr[ac]);
//         ac ++;
// }while(ac<arr.length)

// 9. BREAK AND CONTINUE STATEMENTS
// for(var i=0; i<arr.length; i++){
//     if(i==2){
//         break;
//     }
//         console.log(arr[i]);
// }

// for(var i=0; i<arr.length; i++){
//     if(i==2){
//         continue;
//     }
//         console.log(arr[i]);
// }
    
// 10. ARRAY methods
let myArr = ["Fan", "Camera", 34, null, true]
// console.log(myArr.length);
myArr.pop();
myArr.push("mansi");
// myArr.shift();
// myArr.unshift("Tanush");
// console.log(myArr.unshift("Tanush"));

const newlen = myArr.unshift("harry");
// console.log(newlen);
// console.log(myArr);

let d = [1,23,55,67,45,32,34]
const abc = d.sort();
// console.log(abc);

// 11. STRING METHODS IN JAVASCRIPT
let myString = "mansi is a good girl, good";
// console.log(myString.length);
// console.log(myString.indexOf("good"));
// console.log(myString.lastIndexOf("good"));

// console.log(myString.slice(4,11));
hj = myString.replace("mansi", "aayushi" );
// console.log(myString, hj);
// only first element will get replaced

// 12. DATE
let mydate = new Date();
// console.log(mydate);
// // for getting time in seconds
// console.log(mydate. getTime());
// // getting the year
// console.log(mydate. getFullYear());
// // getting the day in numerical form
// console.log(mydate. getDay());
// // getting the minutes
// console.log(mydate.getMinutes());
// // getting the hours
// console.log(mydate.getHours());

// 13. DOM MANIPULATION
let elem = document.getElementById('btn');
// console.log(elem);

let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("text-success");
elemClass[0].classList.remove("text-success");

// console.log(elem.innerHTML); 
// console.log(elem.innerText); 

// console.log(elemClass[0].innerText); 
// console.log(elemClass[0].innerText); 

tn = document.getElementsByTagName('div');
console.log(tn);

createdElement = document.createElement('p');
createdElement.innerText = "This is a created para";
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b');
createdElement2.innerText = "This is a created bold";
tn[0].replaceChild(createdElement2, createdElement);

// removeChild(element); --> removes an element

document.title;
document.scripts;
document.URL;
document.links;
document.images;
document.domain;

// Selecting using Query
sel = document.querySelector('.container');
console.log(sel);
sel = document.querySelectorAll('.container');
console.log(sel);

// 14. Events in JavaScript

//---------------------------------------------
function clicked(){
    console.log('The button was clicked');
}

// window.onload = function(){
//     console.log('document is loaded');
// }
//-----------------------------------------------

// firstContainer.addEventListener('click', function(){
//     console.log('clicked on container');
// });

// firstContainer.addEventListener('mouseover', function(){
//     console.log('Mouse on container');
// });

// firstContainer.addEventListener('mouseout', function(){
//     console.log('Mouse out of container');
// });

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log('Mouse up when clicked on container');
// });
// firstContainer.addEventListener('mousedown', function(){
//      document.querySelectorAll('.container')[1].innerHTML ="<b>We have clicked on container</b>"
//     console.log('Mouse down when clicked off container');
// });

// ARROW FUNCTIONS 
// function summ(a,b){
//     return a+b;
// }
summ = (a,b)=>{
    return a+b;
}

logkaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b>Set interval fired</b>"
    console.log("I am your log");
}
// 15.SETTIMEOUT AND SETINTERVAL
clr =setTimeout(logkaro, 5000);
// to process something repeatedly
// clr = setInterval(logkaro, 2000);

// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// 16. JAVASCRIPT LOCAL STORAGE
// localStorage.setItem('name', 'mansi')
// undefined
// localStorage.getItem('name')
// "mansi"
// localStorage.clear()
// undefined 
// localStorage
// Storage { name: "mansi", length: 1 }
// localStorage.removeItem('name')
// localStorage.clear

// 17. JSON
// 1.to exchange or transfer data  
// (JSON requires double quotes)
obj = { name: "mansi", length: 1 }
jso = JSON.stringify(obj);
console.log(jso);
console.log( typeof jso);

parsed = JSON.parse(`{"name":"mansi","length":1}`);
console.log(parsed);

// ecmascript is a standard with which javascript is getting maintained
// ``: backticks
//  template literals- backticks
 a=34;
 console.log(`this is my ${a}`);