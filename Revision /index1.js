
// const prompt = require("prompt-sync")()

// const v = prompt("type-here: ")
// console.log(v)



var x = 10; // we can change the values in this variable type
console.log(x)
x = 9
console.log(x)

let y = 5
console.log(y)

const valo = "Riot games"

// let and const are block-scoped variables in JS, Meaning they are only accessible within the nearest enclosing, set of curly braces. 
// where as var is different, its not block scoped like these two, it is a fucntion scoped. 

function test(){
    console.log(x)
    var x = "mkc" 
    console.log(x)
}

test()

// one thing here is that, when we multiply a numeric string the js turned it into a number and then the operation will be performed
// const a = "123"
// const b = 2
// console.log(a*b)

// const a = "adi"
// const b = 2
// console.log(a*b)

// type conversions --------------

const a = "1234"
const a1 = "1234px"
const a2 = "123.44"

const b = 2

console.log(Number(a) + b)
console.log(parseInt(a1) + b)
console.log(parseFloat(a2) + b)



