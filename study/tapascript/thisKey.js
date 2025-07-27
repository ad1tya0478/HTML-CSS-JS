// This Keyword - this is a special keyword in JavaScript. It refers to the context in which a function is called and that context decides what this will point to.

// In the global scope, this will point to the global object, if you are running this in a browser you will get the window object, and if on the server side, the global object

// console.log("This at the global", this); // window object

// object 
// function 

// inside of an object
// Implicit binding is when this is automatically set to the object that’s calling the function. Implicit binding is a way in which you understand that if a method is called on an object using the dot notation, the context of this is bound or associated to the object on which we have invoked the method 
// const emp = {
//     id: "A987987",
//     FirstName: "adi",
//     lastname: "S",

//     returnThis: function(){
//         return this;
//     },
//     getFullname(){
//         return `${this.FirstName} ${this.lastname}`
//     }
// }
// console.log("Emp Id: ", emp.id);
// console.log("This inside the employee Object", emp.returnThis());
// console.log(emp.getFullname());



// const tom = {
//     name: "Tom",
//     age: 7,
// }
// const jerry = {
//     name: "Jerry",
//     age: 3
// }
// function greetMe(obj){
//     obj.logmessage = function(){
//         console.log(`${this.name} is ${this.age} years old`)
//     }
// }
// greetMe(tom);
// tom.logmessage();

// greetMe(jerry);
// jerry.logmessage();



// inside a standalone function // 
// "use strict";
// function sayName() {
//     console.log("This inside a function", this);  // right now this keyword is pointing to window object because,When a function is called normally (not as a method) in the global context, and not in strict mode, the value of this defaults to the global object (window in browsers). 
// }
// sayName();

// if a regular function is called without an object before it, this defaults to the global object 
 // this is the strict mode, a directive that makes JS run in strict mode, catching silent errors and preventing unsafe actions
// Disables sloppy this binding (this will not point to the window), prevents accidental globals, catches duplicate property names, blocks deletion of variables

// function outer(a){
//     console.log("This inside an outer function", this);

//     return function inner(b) {
//         console.log("this inside an inner function", this);
//     }
// }
// const outerResult = outer(5);
// outerResult(3);



// inside an arrow function // 

// // In arrow functions, 'this' is inherited from the outer scope.
// Here, that's the global scope — so in browsers, it's 'window' even in strict mode. Arrow function don't have their own this.they capture this from their lexical (outer) scope, and strict mode doesn’t change that.

// const getfood = () => this;

// console.log("this inside an arrow function defined in global scope",getfood());


// arrow functions doesn't have their own this, this doesn't refer to food, it refer to the outer lexical scope, which is in this case is the global object or undefined in strict mode
// const food = {
//     name: "mango",
//     color: "yellow",

    // getDesc: () => ` ${this.name} is ${this.color}`, 
    
    // getDesc: function(){
    //     return `${this.name} is ${this.color}`;
    // }

//     getDesc: function(){
//         return () => `${this.name} is ${this.color}`;  
//     },
// }
// const desFunc = food.getDesc()
// console.log(desFunc());



// explicit binding // - Explicit binding is when you manually set the value of this using .call(), .apply(), or .bind().

// the call() method - The .call() method calls a function with a specific this value, and arguments passed one by one.

// now the function and the object is not related entirely and we have to point our this to the object, to refer to the object we have to use explicit binding

// function greeting(){
//     console.log(`hello, ${this.name} belongs to ${this.address}`);
// }
// const user = {
//     name: 'aditya',
//     address: 'No One'
// };
// greeting.call(user); // we used call method here to attach function to the object

const likes = function(hobby1, hobby2){
    console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}
const person = {
    name: "Aditya"
}
likes.call(person, "Games", "Travel") // now if we have to pass arguments this much then it does not look good, what if there are 10-12 paramneters, then we have to give 10-12 arguments, instead of that we can use 
// the apply method - .apply() calls a function with a specific this, just like .call(),but passes arguments as an array or array-like object.

const hobbies = ["sleeping", "eating"];

likes.apply(person, hobbies); 

// the bind method - .bind() creates a new function with a permanently set this,and optional preset arguments.It doesn’t call the function immediately, unlike .call() or .apply().

const newhobbies = function(hobby1, hobby2) {
    console.log(this.name + " likes " + hobby1 + " , " + hobby2);
}
const officer = {
    name: "Bob"
};
const newfn = newhobbies.bind(officer, "Dancing", "Singing");

newfn();


///////////////////////////

// A constructor function in JavaScript is a regular function used with the new keyword to create and initialize objects.


const Cartoon = function(name, animal){
    this.name = name;
    this.animal = animal;
    this.log = function(){
        console.log(this.name + ' is a ' + this.animal);
    }
};

const tomcartoon = new Cartoon("tom", "cat");
const jerry = new Cartoon("jerry", "mouse");

tomcartoon.log();
jerry.log();

