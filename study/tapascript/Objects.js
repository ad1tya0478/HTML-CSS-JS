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
function Car(name, model){
    this.name = name;  
    this.model = model;
}
const bmw = new Car("BMW", "M4 Comp");  // we used new because we are not calling a normal function, we are calling a object

const audi = new Car("Ferrari", "La Ferrari");
console.log(bmw);
console.log(audi);

console.log(bmw instanceof Car);

const person = new Object();
