// objects - an object is a collection of key-value pairs, where keys are strings and values can be anything -- numbers, strings, functions, other objects


// let user = {
//     name: "aditya",
//     age: 89,
//     "is admin" : true  // special character | if a key has a space in it, it must be wrapped in quotes. You can't use dot notation here like user.is admin - that would break 
// };

// console.log(user.name);
// console.log(user.age);

// user.isSeniorCitizen = false;   // adds a new property to the object 

// user["movie lover"] = true;

// console.log(user["is admin"]);   // this is the way to call a special character, you must use bracket notation when the key has special characters or spaces.

// console.log(user);

// delete user["movie lover"];
// delete user.age;

// console.log(user);

// const somekey = "age";
// console.log(user.age);


// let car = prompt("Which is your fav car?");  // prompt opens a dialog box in browser, ask user for their input, reutrns whatever they types as a string

// let favCars = {
//     [car]: 5
// }

// console.log(favCars);

// constructor functions - this is a constructor function used to forge new objects, we have to use "this" in the function to make it a constructor and also the name of the function is has te start with a capital letter 
// function Car(name, model){
//     this.name = name;  
//     this.model = model;
// }
// const bmw = new Car("BMW", "M4 Comp");  // we used new because we are not calling a normal function, we are calling a object

// const audi = new Car("Ferrari", "La Ferrari");
// console.log(bmw);
// console.log(audi);

// console.log(bmw instanceof Car);

// const person = new Object();  // this creates an empty object using the object constructor - built into javascript itself

// person.name = "Khushi";
// person.age = 20;
// console.log(person);

// Factory function // 
// function CreateUser(name, age){   // this function returns a brand new object, shorthand here (name: name) -> just (name), and there is no this, no new, just plain function returning an object, 
//     return {
//         name,
//         age,
//         greet(){
//             console.log( "Hello " + this.name);
//         }
//     }
// }
// const user1 = CreateUser("Aadhya", 11);
// factory function != constructor, You're not building with this, you're just returning an object manually.
// In a constructor we must use this to assign values and use new to make sure this points to the right place .
// In a factory - you don't use this, you just build and return the Object yourself.
// user1.name;
// user1.age;
// user1.greet();
// console.log(user1);




// let profile = {
//     name: "Khushi",
//     Company: "Amazon",
//     message: function(){
//         console.log(`${this.name} works at ${this.Company}`)
//     },
//     address: {     // Nested object
//         city: "Gwalior",
//         pin: 474005,
//         state: "MP",
//         country: "India",
//         greeting: function(){
//             console.log("Welcome to India");
//         }
//     },
//     salary: undefined
// }
// console.log(profile.name);
// console.log(profile.Company);

// console.log("salary" in profile);  // in - checks if a property exist in a object or not.

// if(!profile.salary){
//     console.log("The salary property doesn't exist");
// }

// profile.message();
// console.log(profile.address);

// // for in loop for objects
// for(let key in profile){
//     console.log(key);
//     console.log(profile[key]);
// }
// console.log(Object.keys(profile));


// Object Reference // 

// These two look the same, but they aren't 
// let fruit = {name: "mango"};
// let onemoreFruit = {name: "mango"};

// console.log(fruit === onemoreFruit); // false

// fruit = onemoreFruit;  // now both fruit and onemoreFRUIT point to the same object in memory

// console.log(fruit === onemoreFruit); // true


// STATIC METHODS // - Static methods are methods that belong to the class itself, not to the objects (instances) created from it. You call them directly on the constructor (like Object, Array, your own class).
// You don’t call them on an instance.

const target = {p:1, a:2};
const source = {a:3, b:4};

const returnOBJ = Object.assign(target, source);
console.log(returnOBJ);


const obj = {name: "Aditya"};
const obj2 = Object.assign({}, obj); // assign - static method in javascript used to copy properties from one or more source objects to a target object, obj and obj2 have the same values, but are dieeferent objects
console.log(obj2);
console.log(obj === obj2);

const obj3 = {
    a: 1,
    b: {c: 2}
}
const obj4 = Object.assign({}, obj3);
console.log(obj4);

obj4.b.c = 3;

console.log(obj4.b.c);
console.log(obj3.b.c);   // why both are coming 3, because Object.assign() does a shallow copy, that means (a: 1) is primitive so its copied by value but (b: {c: 2}) is an object, so its copied by reference, so obj3.b and obj4.b point to the same inner object

console.log("Structured clone used: ");
const obj5 = structuredClone(obj3); // structuredclone() - creates a deep copy of a js object, meaning it copies everything, including nested objects and arrays -- not just the surface like Object.assign().

obj5.a = 300;
obj5.b.c = 30;

console.log(obj5.a); // 300
console.log(obj3.a); // 1

console.log(obj5.b.c); // 30
console.log(obj3.b.c) // 3
