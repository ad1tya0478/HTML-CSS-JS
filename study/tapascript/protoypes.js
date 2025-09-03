// Prtototype - Every object carries a hidden link (called [[Prototype]]) to another object, from which it can inherit properties and methods. That linked object is the prototype.

const user = {
    "name": "adi",
    "address": {
        "street": "250, 2nd street",
        "country": "austria"
    },
    "age": 34,
    "hobbies": ['swimming', 'dancing'],
    "unique-number": "A0F0899"
}
// console.log(user.unique-number);  // this will give an refrence error, because we cannot use dot notation when there is a special character
console.log(user["unique-number"]); //subscript notation, when the property has spaces and special characters subscript notation will work 

// const user1 = {
//     'name': 'bob',
//     'magicnumber': function(){  // method
//         return Math.random();
//     }
// }
// console.log(user1.magicnumber());

function Car(model, year, color, owner) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.owner = owner;    // intead of string/numbers it can also hold another object
    this.wheelNumber = function() {
        return 4;
    }
}
// const bmw = new Car("BMW", 2025, "grey"); // if we don't use new keyword here, this function will just as a normal function, so we have to use new, so that function becomes a blueprint and a new object is created from it and then JS treats it as a constructor

// console.log(bmw);
// console.log(bmw.wheelNumber());

// const amg = new Car("Mercedes", 2024, "Black");
// console.log(amg);

// console.log(bmw === amg); // this will be false because both of the objects are pointing to diffrerent memory locations

function Owner(name, age){
    this.name = name;
    this.age = age;
}

const tapas = new Owner('Adi', 19);

const tapaCar = new Car("Mclaren", 2025, "Yellow", tapas);
console.log(tapaCar);

tapas.age = 20;
console.log(tapaCar);

// prototype - Every object in JS has a hidden link called prototype. It points to another object - the prototype. If you try to access a property or method on an object and it's not there, JS climbs up that protoype chain until it finds it. 
// Main reason to use - Instead of giving every object its own copy of a function, we put shared functions in the prototype. That way, all instances reuse the same method and it will reduce memory usage.

function Vechicle(model, color, year) {
    this.model = model;
    this.color = color;
    this.year = year;
}
const bmw = new Vechicle("BMW", "Dark blue", 2025);
console.log(bmw);

Vechicle.prototype.wheelNumber = function(){
    return 4;
}
console.log(bmw);

// Protoype chain 
// bmw
//    [[Prototype]] ---> Car.prototype
//                           [[Prototype]] ---> Object.prototype
//                                                     [[Prototype]] ---> null

// So the prototype chain is just a ladder of inheritance that JS climbs until it finds what you asked for.

// ----

function Car1(model, color, year, owner){
    this.model = model;
    this.color = color;
    this.year = year;
    this.wheelNumber = function(){
        return 4;
    }
    this.owner = owner;
}
class Car1 {
    construtor(model, color, year, owner){
    this.model = model;
    this.color = color;
    this.year = year;
    this.owner = owner;
    }
    wheelNumber() {
        return 4;
    }
}
