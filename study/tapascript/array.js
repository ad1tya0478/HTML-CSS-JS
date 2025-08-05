// array - collection of elemenst of any data type 
  
const mixedarray = [100, true, "Aditya", {}];
// index - the position of an element in the array, starts with 0.

const salad = ['🍅', '🥗', '🥕', '🥒'];

// constructor function 
function Car(model){
    this.model = model
}

const bmw = new Car("bmw_M4");
console.log(bmw);

// Array constructor method // 
const anothersalad = new Array('🍅', '🥗', '🥕', '🥒');
console.log(salad);
console.log(anothersalad);

console.log(salad === anothersalad); // this is false because, salad and anothersalad, even if they look the same they're stored at different memory locations. So this checks if both point to the same object in the memory and they don't.


const two = new Array(2);
console.log(two); // Because new Array(n) is special, it doesn’t fill the array, it just reserves space. the cnstructor method behaves differently based on how many arguments we pass. so if you pass multiple arguments, it will fill the array. 1 argument -> empty slots in array | multiple arguments -> behaves like a normal array

console.log(salad[0]);
console.log(salad[2]); 

for(let i=0;i<salad.length;i++){
    console.log(`Element at index ${i} is ${salad[i]}`);
}

// adding elements to the array // 

// push() - it add the element to the end of the array
// const ret = salad.push('🍠');
// console.log(ret); // after adding the alement push method returns the total number of array
// console.log(salad);

// unshift() - adds the element at the start of the array
// const unret = salad.unshift('🫑');
// console.log(unret);
// console.log(salad);

// Remove elements // 

// pop() - removes the element from the end
// console.log(salad);
// const popret = salad.pop(); // now after removing the last element pop() methods returns the element that was removed
// console.log(popret);
// console.log(salad);

// // shift() - removes the element from the beginning
// console.log(salad);
// const shret = salad.shift();  // the vice versa of pop()
// console.log(shret);
// console.log(salad);

// slice() - creates a copy 
// const Scopy =  salad.slice();
// console.log("Salad Before Copy: ", salad);
// console.log(Scopy);
// console.log(salad === Scopy); // false 

// const a = Array.isArray(salad);
// console.log(a);


// Array destructuring // - we can assign a default value to a variable while destructuring, we can skip a value 
/*
const tomato = salad[0];
const carrot = salad[2];
const peas = salad[3];
*/

// const [a, b, c] = ['🍅', '🥗', '🥕'];
// console.log(a, b, c); 

// const [tomato, mushroom = '🍄'] = ['🍅'];
// console.log(mushroom, tomato);

// skipping a value 
const [a, , c] = ['tomato', 'mushroom', 'carrot'];

// nested array 
const ar = [1, 2, 3, ['potato', 'tomato', 'peas']]; 

const n = ar[3];
const z = n[2];

ar[3][2];


// rest parameter and spread 
/// Rest and spread operator /// 
/// rest - we use it when we want to collect multiple values into one. operator - [ ... ]
// example ...names grabs all the arguments and stores them in one array called names.
// Spread - we use it when you want to unpack values from an array or object. (unpacks to many) Operator - ( ... )

const [tomato, ...rest] = ['🍅', '🥗', '🥕', '🥒'];
console.log(tomato);
console.log(rest);
// we have to use this operator at the left side of the assignment operator

// const mySalad = ['tomato', 'onion', 'Carrot', 'cucumber'];
// const myScopy = [...mySalad, 'salad', 'Vegeies'];
// console.log(mySalad);
// console.log(myScopy);

// // Swapping //

// let first = '😂';
// let sec = '💪';
// [first, sec] = [sec, first];

// console.log(first);
// console.log(sec);

// // merge // 
// const emotions = ['better', 'good'];
// const veggies = ['🥕', '🥔', '🍆', '🍠']

// const merge = [...emotions, ...veggies];
// console.log(merge);



