// const strs = "(){}";

// var isValid = function(s) {
//         let flag = false;
//     for(let i=0;i<s.length;i++){
//         if(s[i] === '('){
//                 if(s[i+1] === ')'){
//                 flag = true;
//             } else {
//                 flag = false;
//                 continue;
//             }
//         } else if(s[i] === '['){
//             if(s[i+1]===']'){
//                 flag = true;
//             } else {
//                     flag = false;
//                 continue;
//             }
//         } else if(s[i]==='{'){
//             if(s[i+1]==='}'){
//                     flag = true;
//                 } else {
//                         flag = false;
//                 continue;
//             }
//         } else if(s[i]===')' && flag!=true) {
//             flag = false;
//         } else if(s[i]===']' && flag!=true){
//                 flag = false;
//         } else if(s[i]==='}' && flag!=true){
//             flag = false;
//         }
//     }
//     return flag;
// };



// const stack = [];
//    const map = {
//     ')' : '(',
//     ']' : '[',
//     '}' : '{'
//    };

//    for(let i of s){
//     if(i==='(' || i==='[' || i==='{'){
//         stack.push(i);
//     } else {
//         if(stack.pop() !== map[i]) return false;
//     }
//    }
// return stack.length===0;

// var createHelloWorld = function () {
//     return function () {
//         return "Hello World"
//     }
// };



// let nums = [2,7,11,15];
// let target = 9;
// let twoSum = function(nums,target) {
//     for(let i = 0;i<nums.length;i++){
//         for(let j = i+1;j<nums.length;j++){
//             if (nums[i] + nums[j] == target){
//                 return [i,j];
//             }
//         }
//     }   
// };


// function isEven(num) {
//     if (num%2 == 0){
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// isEven(7);

// let revstr = "";
// const string = "hi"; 
// function reverseString(str) {
//     for(let i = str.length - 1; i >= 0; i--){
//         revstr = revstr + str.charAt(i);
//     }
// }
// reverseString(string);
// console.log(revstr);


// let arr = [2,4,5,45,5]
// let max = arr[0];
// function findMax(arr) {
//     for(let i = 0;i<arr.length;i++){
//         if(max < arr[i]) max = arr[i];
//     }
// }
// findMax(arr);
// console.log(max);


// const student = {
//     name: "aditya",
//     age: 19,
//     marks: "34"
// }
// const greet = (object) => {
//     console.log("hi my name is "+ student.name);
// }
// greet(student);


// function countKeys(obj){
//     return Object.keys(student).length;
// }
// console.log(countKeys());

// delete student.marks;
// console.log(student);
// student.grades = 'A';
// console.log(student);

// let arr = [1,2,3,4,5]
// let sum = 0;
// function sumArray(arr) {
//     for(let i = 0;i<arr.length;i++){
//         sum += arr[i];
//     }
// }
// sumArray(arr);
// console.log(sum);

// let arr = [1,2,3,4,5,6]
// let evenArr = [];
// const filterEven = (arr) => {
//     for(let i = 0; i<arr.length;i++){
//         if (arr[i] % 2 == 0){
//             evenArr.push(arr[i]);
//         }
//     }
// }
// filterEven(arr);
// console.log(evenArr);


// let arr = [1,2,3,4,5,6,99];
// let target = 99;
// const isPresent = (arr, target) => {
//     for(let i of arr) {
//         if(i == target) return true; 
//     }
//     return false; 
// }
// console.log(isPresent(arr, target));

// const users = [
//     {name: "Aditya", age: 23},
//     {name: "Anirudh", age: 78},
//     {name: "abhi", age: 89}
// ];
// let arrName = [];
// const ArrayName = (name)  => {
//     for(let i of name){
//      arrName.push(i.name);
//     }
// }
// ArrayName(users);
// console.log(arrName);

// let nums = 1534236469;
// let rev = 0;
// var reverse = function(x) {
//     let num = x;
//     while(num!=0){
//         rev = rev * 10 + (num%10);
//         num = num/10 | 0;
//     }
// };
// reverse(nums);
// console.log(rev);

// const names = ["Walt", "Jesse", "Saul"];
// const doubled = names.map((num) => "Mr." + num);
// console.log(doubled);


// const nums = [5,7,56,78,23,10];
// const greater = nums.filter((num) => num >= 10);
// console.log(greater);

// const bills = [100,250,50,600];
// const total = bills.reduce((acc, val) => acc + val);
// console.log(total);

// const words = ["cook","meth","blue","heisenberg"];
// let uppercase = words.filter(word => word.length > 4)
// .map(word => word.toUpperCase());
// console.log(uppercase);

// const fruits = ["apple", "banana","cherry"];
// const number = fruits.map((num, index) => index +":" + num );
// console.log(number);

// const users = [
//     {name: "walt", isActive: true},
//     {name: "jesse", isActive: false},
//     {name: "skyler", isActive: true},
// ];
// const active = users.filter((users) => {
//     if (users.isActive) {
//         return users.name;
//     }
// });
// console.log(active);

// const words = ["blue", "meth","blue", "cook", "blue"];
// const rep = words.reduce((acc, val) => {
//     acc[val] = (acc[val] || 0) + 1;
//     return acc;
// }, {} );
// console.log(rep);

// Conatiner With most water problem 
// var maxArea = function(height) {
//     let maxWater = 0;
//     let lp = 0, rp =  height.length-1;

//     while(lp < rp ){
//         let width = rp - lp ;
//         let ht = Math.min(height[lp], height[rp]);
//         let curtWater = width * ht;

//         maxWater = Math.max(maxWater, curtWater);

//         height[lp] < height[rp] ? lp++ : rp--;
//     }
// };

// const prices = [100, 200, 300];
// const tax = prices.map((num) =>  num + (num * 0.18) );
// console.log(tax);


// const strings = ["cook", "meth", "", "blue",""];
// const out = strings.filter((num) => num !== "");
// console.log(out);

// const nums = [5, 12, 8, 130, 44];
// const W = nums.reduce((acc, curr) => {
//     return acc > curr ? acc : curr ;
// });
// console.log(W);

// const people = [
//     {name: "walt", age: 50},
//     {name: "jesse", age: 25},
//     {name: "mike", age: 60}
// ]
// const ret = people 
//      .filter(person => person.age > 40)
//      .map(person => person.name + " is " + person.age);
// console.log(ret);


// let string = "III";
// function roman(s) {
//     let numb = 0;
//     for(let i =0; i < s.length;i++){        
//         if (s[i] == "I"){ 
//             if (s[i + 1] == "V"){
//                 numb += 4;
//                 i++;
//             } else if (s[i + 1] == "X") {
//                 numb += 9;
//                 i++;
//             } else {
//                 numb += 1;
//             }
//         }
//         else if (s[i] == "V") {
//             numb += 5;
//         }
//         else if (s[i] == "X"){
//             if (s[i + 1] == "L"){
//                 numb += 40;
//                 i++;
//             } else if (s[i + 1] == "C"){
//                 numb += 90;
//                 i++;
//             } else {
//                 numb+= 10;
//             }
//         }
//         else if (s[i] == "L") {
//             numb += 50;
//         }
//         else if (s[i] == "C") {
//             if (s[i + 1] == "D"){
//                 numb += 400;
//                 i++;
//             } else if (s[i + 1] == "M"){
//                 numb += 900;
//                 i++;
//             } else {
//                 numb += 100;
//             }
//         }
//         else if (s[i] == "D") {
//             numb += 500;
//         }
//         else if (s[i] == "M") {
//             numb += 1000;
//         }
//     }
//     return numb;
// }
// roman(string);
// console.log(numb);


// const arr = [1, 2, 3, 4];
// let  newArr = [];
// var filter = function(arr, fn) {
//     for(let i = 0; i<arr.length;i++){
//         if (fn(arr[i], i)){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(newArr);


// const digits = [1, 2, 3];
// var plusone = function (digits) {
//     for(let i = digits.length - 1;i >= 0;i--){
//         if(digits[i] < 9){
//             digits[i]++;
//             return digits;
//         } else {
//         digits[i] = 0;
//         }
//     }
//     digits.unshift(1);
//     return digits;
// }
// console.log(plusone(digits));

// var reduce = function(nums, fn, init) {
//     let val = init ;
//     for(let i =0; i<nums.length;i++){
//         val = fn(val, nums[i])
//     }
//     return val;
// };



// var possibleStringCount = function(word) {
//     const count = new Set();
//     count.add(word);

//     for(let i = 1;i<word.length;i++){
//         if (word[i] == word[i -1] ){
//             let fixed = word.slice(0,1) + word.slice(i+1);
//             count.add(fixed);
//         }
//     }
//     return count.size;
// };



// var objisempty = function(obj){
//     if(Object.keys(obj) === 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// }


// var map = function(arr, fn) {
//     let arr2 = [];
//     for(let i = 0;i<arr.length;i++){
//         arr2.push(fn(arr[i], i));
//     }
//     return arr2;
// };


// var once = function(fn) {
//     let called = false;
//     let result;
//     return function(...args){
//         if(!called){
//             called = true;
//             result = fn(...args);
//             return result;
//         }
//     return undefined;
//     };
// };


// var createCounter = function(init) {
//     let current = init;

//     return {
//         increment: () => ++current,
//         decrement: () => --current,
//         reset: () => current = init
//     }
// };


// var findLucky = function(arr) {
//     const freq = {};
//     for (let num of arr) {
//         freq[num] = (freq[num] || 0) + 1;
//     }
//     let maxLucky = -1;
//     for (let num in freq) {
//         if (parseInt(num) === freq[num]) {
//             maxLucky = Math.max(maxLucky, parseInt(num));
//         }
//     }
//     return maxLucky;
// };


// async function sleep(millis) {
//     return new Promise(function(resolve)  {
//         setTimeout(resolve, millis);
//     });
// }


// var createCounter = function(n) {
//     let count = -1; 
//     return function counter() {
//       count++;
//       return n + count;
//     };
// };


// var addBinary = function(a, b) {
//     return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
// };


