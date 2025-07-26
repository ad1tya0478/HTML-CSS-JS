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

// const target = {p:1, a:2};
// const source = {a:3, b:4};

// const returnOBJ = Object.assign(target, source);
// console.log(returnOBJ);


// const obj = {name: "Aditya"};
// const obj2 = Object.assign({}, obj); // assign - static method in javascript used to copy properties from one or more source objects to a target object, obj and obj2 have the same values, but are dieeferent objects
// console.log(obj2);
// console.log(obj === obj2);

// const obj3 = {
//     a: 1,
//     b: {c: 2}
// }
// const obj4 = Object.assign({}, obj3);
// console.log(obj4);

// obj4.b.c = 3;

// console.log(obj4.b.c);
// console.log(obj3.b.c);   // why both are coming 3, because Object.assign() does a shallow copy, that means (a: 1) is primitive so its copied by value but (b: {c: 2}) is an object, so its copied by reference, so obj3.b and obj4.b point to the same inner object

// console.log("Structured clone used: ");
// const obj5 = structuredClone(obj3); // structuredclone() - creates a deep copy of a js object, meaning it copies everything, including nested objects and arrays -- not just the surface like Object.assign().

// obj5.a = 300;
// obj5.b.c = 30;

// console.log(obj5.a); // 300
// console.log(obj3.a); // 1

// console.log(obj5.b.c); // 30
// console.log(obj3.b.c) // 3


// converting object to array // 
// const myobj = {
//     a: "Adi",
//     b: 20
// };
// const myarr = Object.entries(myobj);  // .entries() is another static method, it returns an of key-value pairs from an object 
// console.log(myarr);
 

// // to convert array to object // 
// const entries = new Map([
//     ["Foo", "Bar"],
//     ["Baz", 42],
// ])
// const obj = Object.fromEntries(entries);  // returns an object, also a static method, takes an iterable like a map or an array and convert it into a plain object.
// console.log(obj);


//// freeze method /// immutability - something that you cannot change
// const emp = {
//     salary: 100
// }
// Object.freeze(emp);  // freeze method freezes the value of key meaning it cannot be changed 
// emp.salary = 200;
// console.log(emp);

// console.log(Object.isFrozen(emp)); // returns true or false, whether a particular object is frozen or not

// seal() method //
// const dept = {
//     name: "finance"
// }
// Object.seal(dept); // in seal() method, if you use it, you cannot remove or add another key into the object, but you can modify an existting property in seal() method

// dept.intern = "alex";
// delete dept.name;
// console.log(dept);

// console.log(Object.hasOwn(dept, "name")); // checks if a property is in the object or not



/// ///// OBJECT DESTRUCTURING   /////// 
// Object destructuring is a way to unpack values from an object into individual variables, quickly and cleanly.

let STUDENT = {
    'name': "Khushi",
    'age': 9,
    'std': 3,
    'subject': ['maths', 'english', 'EVS' ],
    'parents': {
        'Father': 'Brown Williamson',
        'mother': 'sophia',
        'email': 'john-parents@abcd.com'
    },
    'address': {     // Nested object
        'city': "Gwalior",
        'pin': 474005,
        'state': "MP",
        'country': "India"
    }
}

// const name = STUDENT.name;
// const city = STUDENT.address.city;
// console.log(name , city);

// shortcut 
// const {name , address: {city}} = STUDENT;
// console.log(name, city);

// const {name , age , meal="bread"} = STUDENT;
// console.log(name, age, meal);
// console.log(STUDENT);

// const {subject, numberOfSubject = subject.length} = STUDENT;
// console.log(subject, numberOfSubject);

// aliases // 
// const {std: standard} = STUDENT;  // now we cannot use std
// console.log(standard);


// const {address: {pin}} = STUDENT;
// console.log(pin);

// function sendEmail({parents: {email}}){
//     console.log(`Send an email to ${email}`);
// }
// sendEmail(STUDENT);

// const students = [
//     {
//         'name': 'Aditya',
//         'grade': 'A++'
//     },
//     {
//         'name': 'Anirudh',
//         'grade': 'A++'
//     },
//     {
//         'name': 'Khushi',
//         'grade': 'A++'
//     }
// ];

// for(let {name} of students){
//     console.log(name);
// }



// const empl = {
//     sal: {
//         bonus: 300
//     }
// }

// console.log(empl.department); // undefined
// console.log(empl.department.name); 

// const name = empl.department?.name;
// console.log(name);


//  Q.1 
// const user = {
//     name: "Alex",
//     age: undefined
// };
// console.log(user.age ?? "not provided"); // output - not provided


// Q.2 
// const obj = Object.freeze({ a: 1 });
// obj.a = 2;
// console.log(obj.a); // output - 1

// Q.3 
// const person = {
//   name: "Tapas",
//   company: {
//     name: "tapaScript",
//     location: {
//       city: "Bangalore",
//       zip: "94107"
//     }
//   }
// };

// const {name, company: {name: name1}, company: {location: {city} }} = person;
// console.log(name, name1, city);


// Q.4 Store student details in an object (name, age, grades).
// Implement a method to calculate the average grade.
// const student = {
//     name: 'Aditya',
//     age: 20,
//     grades: [10,12,8,15,20],

//     averageGrade() {
//         let sum = 0;
//         for(let i = 0; i<this.grades.length;i++){
//             sum += this.grades[i];
//         }
//         return (sum/this.grades.length).toFixed(2);
//     }
// }
// console.log("Nmae: ", student.name);
// console.log("Age: ", student.age);
// console.log("Average Grade: ", student.averageGrade());


// Q.5
// const book = {
//     books: {
//         "Game of thrones": 3,
//         "Atomic Habits": 5,
//         "1984": 0
//     },

//     availability(title){
//         return this.books[title] > 0
//         ? `${title} is available (${this.books[title]} in stock).` : `${title} is out of stock`;
//     },

//     restock(title, count){
//         if(this.books[title] != undefined){
//             this.books[title] += count;
//         } else {
//             this.books[title] = count;
//         }
//         return `${title} now has ${this.books[title]} copies.`
//     }
// };

// console.log(book.availability("1984"));
// console.log(book.restock("1984", 10));
// console.log(book.availability("1984"));



