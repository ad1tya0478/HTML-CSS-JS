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
