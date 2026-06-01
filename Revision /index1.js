
// const prompt = require("prompt-sync")()

// const v = prompt("type-here: ")
// console.log(v)



// var x = 10; // we can change the values in this variable type
// console.log(x)
// x = 9
// console.log(x)

// let y = 5
// console.log(y)

// const valo = "Riot games"

// let and const are block-scoped variables in JS, Meaning they are only accessible within the nearest enclosing, set of curly braces. 
// where as var is different, its not block scoped like these two, it is a fucntion scoped. 

// function test(){
//     console.log(x)
//     var x = "mkc" 
//     console.log(x)
// }

// test()

// one thing here is that, when we multiply a numeric string the js turned it into a number and then the operation will be performed
// const a = "123"
// const b = 2
// console.log(a*b)

// const a = "adi"
// const b = 2
// console.log(a*b)

// type conversions --------------

// const a = "1234"
// const a1 = "1234px"
// const a2 = "123.44"

// const b = 2

// console.log(Number(a) + b)
// console.log(parseInt(a1) + b)
// console.log(parseFloat(a2) + b)

// console.log("1" == 1) // true

// console.log(true == 1) // true

// console.log(true == undefined) // false

// console.log(null == undefined) // true

// console.log(null == false) // false

// console.log(undefined == false) // false

// console.log(undefined == true) // false

// console.log("" == 0) // true

// console.log("" == []) // true

// console.log("1,2" == [1,2]) // true


////////////////

// console.log(true && false) // false

// console.log(true || false) // true

// console.log("hello" || true) // hello 

// console.log("" || "hello") // hello

// console.log(true && "hello") // hello

// console.log(false && "hello")  // false 
 
/////////////////

// const cond = 5 < 3 ? "okay cool" : "no"
// console.log(cond)

///////

// const value = require("prompt-sync")()
// const v = Number(value("type-here: "))
// switch(v){
//     case 3:
//         console.log("3 is cool")
//         break;
//     case 4:
//         console.log("4 is not that cool")
//         break;
//     default: 
//         console.log("Fuck u man")
//         break;
// }

/////////////////////////////////////

// const arr = [1,2,3,true]

// // const arr2 = new Array(5)
// // console.log(arr2)

// const arr3 = Array.from("hello")
// console.log(arr3)

// arr3[1] = "a"
// console.log(arr3)
// console.log(arr3[arr3.length - 2])

// // weird one
// arr3[arr3.length + 5] = "Nice"
// console.log(arr3)

// arr3.push(4) // last index
// console.log(arr3)

// arr3.pop() // last index
// console.log(arr3)

// arr3.shift() // remove element of the begining 
// console.log(arr3)

// arr3.unshift("new") // add it on the begining
// console.log(arr3)

// console.log(arr3.indexOf("a"))

// console.log(arr3.lastIndexOf("l"))

// console.log(arr3.includes("new"))

// const arr4 = arr.concat(arr3) // adds arrays
// console.log(arr4)

// const str = arr.join("|") // separating elements 
// console.log(str)

// const arr5 = arr.slice(0,3) //  give us the sliced array like we give it the index window like from 0 - 3 and it gives that part of the array 
// console.log(arr5)

// const arr6 = arr.splice(1,1) // it removes that specific part of the array 
// console.log(arr6)
// console.log(arr)

////// desttructuring in array - Array destructuring in JS allows u too unpack values from arrays into distinct variables 

// Basic extraction - assigning array elements to variables by position 
// const [x,y] = [1,2]
// console.log(x,y)

// // rest operator 
// const [x,...y] = [1,2,3,4,5,6]
// console.log(x,y)

// // skipping elements 
// const [first, , third] = [10, 20, 30];
// console.log(first, third) 

// // swapping variables 
// let a = 1, b = 2;
// [a, b] = [b, a];
// console.log(a,b)

////////////////////////////

const arr = [1,2,3,4,5]
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// for(let value of arr){
//     console.log(value)
// }
// now we can get the index and the elements as well ---- The array.entries() method returns a new Array Iterator object containing [index, value] pairs for each element.
// for(let [i,value] of arr.entries()){
//     console.log(i, value)
// }


//////////////////////

// const obj = {
//     name: "adi",
//     age: 20,
//     hello: function(){

//         return "hello"
//     },
//     career: {

//     }
// }
// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.hello())

// obj.age = 90
// obj.newprop = [1,2]

// console.log(obj)

// delete obj.career
// console.log(obj)

// console.log(Object.values(obj))
// console.log(Object.keys(obj))

// const obj2 = {
//     haircolor: "black",
//     arr: [1,2,3],
//     name: "Himanshi"
// }

// const obj3 = {...obj, ...obj2}
// console.log(obj3)

// obj3.career.info = "tech"
// console.log(obj, obj3)



////////////////////////////////////////////


// const myset = new Set([1,2,3]);
// myset.add(4)
// myset.delete(1)
// myset.has(2)
// myset.size

// for(let value of myset){
//     console.log(value)
// }

// myset.clear()



/////////////////////////////////////
// Map is data-structure that holds key value pairs, maintaining the original order of the keys and allowing any datatype to be used as either a key or a value.
// const mymap = new Map();
// const numbermap = new Map([[1,"one"],[2,'two']]);

// mymap.set(4, "four")
// mymap.delete(2)
// mymap.get(1)
// mymap.has(1)

// for(let [key, value] of mymap){
//     console.log(key, value)
// }


////////////////////////

// try{
//     riskyfucntion();
// } catch(error){
//     console.error("An error occured:", error.message);
// } finally{
//     console.log("cleanup code can go here.");
// }

// throw new Error("this is not good!")


////////////////////////////////////////

// function greet(name){
//     console.log(name,"Good morning")
// }

// console.log(greet("aditya"))


// const greet1 = function(name){
//     return name;
// }

// const greet2 = (name) => {

// }

// function addnums(...numbers){
//     return []
// }



///////////////////
// Map - creates a new array by applying a function to every element. it returns a new array of same length.
// filter - creates a new array with only elements that pass a condtional test, returns a new array(subset of original)
// reduce - combines all elements into a single value using an accumulator. returns a single value(number, object, string)

// const numbers = [1,2,3,4]
// const doubled = numbers.map((num) => num * 2);
// console.log(doubled);

// const users = [
//     {name: "aditya", age: 20},
//     {name: "himanshi", age: 20}
// ];

// const names = users.map((user) => user.name);
// console.log(names)

// const numbers2 = [1,2,3,4];
// const sum = numbers2.reduce((acc,num) => acc + num, 0);
// console.log(sum)

// const numbers3 = [1,2,3,4,5];
// const evenNumbers = numbers3.filter(num => num%2===0);
// console.log(evenNumbers);


//////////////////////////////////
// this keyword - refers to the object that is executing the current function or method.

// const person = {
//     name: "adi",
//     age: 20,
//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     },
// };

// person.greet();

// this keyword doesnt work under a arrow function, arrow fuctions doesnt have their own this. Objects do not create this. Function calls create this. Arrow functions completely ignore that rule and use the surrounding this instead.
// const person2 = {
//     name: "adi",
//     age: 20,
//     greet: () => {
//         console.log(`Hello, my name is ${this.name}`);
//     },
// };

// person2.greet();  // hello, my name is undefined 


///////////////////////////////////////////
// Promise - An object that represents the eventual completion or failure of an asynchronous operation. A promise is used when u dont know how long something is going to take to complete.
// .then - method is used to handle the fulfilled(successfull) state of a promise.
// .catch - method handles the rejected state of a promise.
// .finally(): Available for cleanup code that runs regardless of whether the promise was fulfilled or rejected

// const myprom = new Promise((resolve, reject) => {
//     // Asynchronous Function
//     if(false){
//         resolve("good"); // fulfill the promise
//     } else {
//         reject("bad"); // reject the promise 
//     }
// });

// myprom.then((value) => {
//     console.log(value)
// }).catch((value) => {
//     console.log(value)
// }).finally(() => {
//     console.log("Wuuuhhhuuu")
// })



const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 1000, "foo"));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 3000, "bar"));

Promise.all([promise1, promise2, promise3])   // promise.all waits until all promises succeed, and if even one promise is rejects then the, .then is skipped and .catch runs.
    .then((results) => {
        console.log(results)
    })
    .catch((error) => {
        console.log(error)
    })

