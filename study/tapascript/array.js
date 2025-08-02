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
const ret = salad.push('🍠');
console.log(ret); // after adding the alement push method returns the total number of array
console.log(salad);

// unshift() - adds the element at the start of the array
const unret = salad.unshift('🫑');
console.log(unret);
console.log(salad);

// Remove elements // 

// pop() - removes the element from the end
console.log(salad);
salad.pop();
console.log(salad);