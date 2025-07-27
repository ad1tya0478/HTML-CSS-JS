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


const tom = {
    name: "Tom",
    age: 7,
}
const jerry = {
    name: "Jerry",
    age: 3
}
function greetMe(obj){
    obj.logmessage = function(){
        
    }
}