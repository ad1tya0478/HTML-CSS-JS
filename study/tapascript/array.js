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
console.log(two);