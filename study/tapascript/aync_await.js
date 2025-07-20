// Async Await:- 
// Async - Marks a function as asynchronous, always return a Promise
// Await - Waits for the Promise to settle(resolve, reject), and returns its result.


// Problems With the promise 
// const promise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve("I am a promise");
//     }, 2000)
// });
// promise.then((x) => console.log(x)); 

// Syntax
// if we use async key word before a function and then run it, it will always return a promise
// so, here we are returning 101, so async will wrap this 101 into a promsie, like this - Promise { 101 }

// return Promise.resolve(101) - it will return Promise { <pending> }
// return 101 - in this it will return the 101 wrapped in promise 


// async function fool(){
//     return Promise.resolve(101);
// }


// instead of doing this //
// fool().then(function(result) {
//     console.log(result);
// });

// you can do this - we can you use await because it will also print only the result that we were doing with .then, so intead of using 
// .then() all the time you can use await to get the result. so to use it just use the await, in front of the async funation, to get the result(resolve)


// const result = await fool();
// console.log(result);


// we cannot use await outside of a async function, so in the upper case you can put the await into another async function to execute 
// in simple words you cannot use await function globally 
// if we don't put it correctly, it will give a syntax error in the console

// async function tackle() {
//     const result = await fool();  // Now here the execution will be halted, until the promsie is settled
//     console.log(result);
// }
// console.log(tackle());  // now it will give you a promise with pending and undefined value, because you are logging a promise not the result of it 
//                         because tackle() is async, it reutnrs a promise not the result


// console.log("I am after tackle()");
// console.log(tackle());



// Error handling //

// const error = new Promise((resolve, reject) => {
//     reject("error occured");
// })
// error.catch((error) => console.log(error));

// async function handleError() {
//     try {
//         await error;
//     }
//     catch(error){
//         console.error(error);
//     }
// }

// handleError();



// IIFE - Immediately Invoked Function Expression //
// An IIFE is a function that is defined and executed instatntly, not like it will outrun all the code, it will run where it's placed, waiting for this 
// turn, and then it runs, immediatley when the interpreter reaches it

// Good for one time setups 
// A variable created inside this, cannot be touched outside 
// Before import/export. iife was used to stimulate modules 

// (function () {
//     console.log("Executed Instantly");
// }());


// Handling Multiple async/await // 

const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';

// async function resolvepoke(){
// const responses = Promise.allSettled([  // allsettled - When all promises in a list have finished, no matter if they were, fulfilled(success) or rejected(failed)
//     fetch(BULBASAUR_POKEMONS_URL),
//     fetch(RATICATE_POKEMONS_URL),
//     fetch(KAKUNA_POKEMONS_URL)
// ]);
//     const p = await responses;
//     // console.log(p);

//     const pk_1 = await p[0]?.value.jason();
//     console.log(pk_1);
// }
// resolvepoke();



async function resolvepokeV2(){
const responses = await Promise.allSettled([  // allsettled - When all promises in a list have finished, no matter if they were, fulfilled(success) or rejected(failed)
    
    fetch(BULBASAUR_POKEMONS_URL).then(response => response.json()),
    fetch(RATICATE_POKEMONS_URL).then(response => response.json()),
    fetch(KAKUNA_POKEMONS_URL).then(response => response.json())
]);
    console.log(responses);
}
resolvepokeV2();


