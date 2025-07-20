// A promimse represents a value that may be available now, later 
// or never. It handles async tasks.

// let a  = new Promise(function(resolve, reject){
    
// })

// Executor 
// function a(resolve, reject){
//     // Logic goes here 

// }

// state - pending: Initially when the executor function starts the execution.
//         fulfiiled: When the promise is resolved. 
//         rejected: When the promise is rejected.

// Result - Undefined: Initially when the state value is pending.
//          Value: when the resolve(value) is called
//          Error: When reject(error) is called


// let promise1 = new Promise(function(resolve, reject){
//     resolve("hey i am done");
// })
// let promise2 = new Promise(function(resolve, reject){
//     reject("something is not right");
// })


//  -  Handling Promises 

// .then() - .catch()  -  .finally()
// let loading = false;
// const promise  = new Promise(function(resolve, reject){
//     loading = true;
//     // make a network call or an API call/io operation
//     resolve("i am resolved...");
// });
// promise.then(
//     (result) => {console.log(result)}
// ).catch(
//     (error) => {console.error(error)}
// ).finally(
//     () => {
//         loading = false;
//     }
// )


//  -  Promise Chain 

// RULE NO. 1: Every promise gives you a .then() handler method. Every rejected promise promise provides you a .catch() handler.

// RULE NO. 2: You can dp mainly three valuable things from the .then() method. You can return another promise(for async operation). 
//             You can return any other value from a synchronous operation. Lastly, you can throw an error.
            

// Return a promise from the .then() handler 
let getUser = new Promise(function(resolve, reject){
    const user = {
        name: 'John doe',
        email: 'jdoe@email.com',
        password: '1234567',
        permissions: ['db', 'dev']
    };
    resolve(user)
})
getUser.then( (user) => {
    console.log(`Got user ${user.name}`);

    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve('Banglore');
        }, 2000)
    })
})
.then((address) => {
    console.log(`User address is ${address}`);
})


// Return a simple value from the .then() handler
getUser.then( (user) => {

    console.log(`Got user ${user.name}`);
    return user.email;
})    
.then(function(email)  {
    console.log(`user email is ${email}`);
})


//  Throw an error from the .then() handler 
getUser.then((user) => {
    console.log(`Got user ${user.name}`);

    if(!user.permissions.includes("hr")){
        throw new Error("You are not allowed to access the HR module");
    }

    return user.email;
})
.then((email) => {
    console.log(`user email is ${email}`);
})
.catch((error) => {
    console.error(error);
});


// RULE NO. 3: You can throw the .catch() handler to handle the error 
//             later. In this case, the control will go to the next closest .catch() handler.

let promise404 = new Promise(function(resolve, reject){
    reject(401)
});
promise404.catch((error) => {
    console.log(error);
    if(error === 401){
        console.log("Rethrowing 401");
        throw error;
    } else {
        console.log("didn't rethrow"); 
    }
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(`Handling ${error} here`);
})


/// RULE NO. 4: Unlike .then() and .catch(), the finally() handler doesn't process the result value or error. 
//              It just passes the result as is to the next handler.

let promisefinally = new Promise(function(resolve, reject){
    resolve('testing finally');
})
promisefinally.finally(() => {
    console.log("Running Finally");
}).then((result) => {
    console.log(result);
})


/// RULE NO.5: Calling the .then() handler method multiple times on a single promise is NOT chaining.



/// Handle multiple promises-----

// Promise.all([promises])

const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';

function getPromise(URL){
    return fetch(URL) 
    .then((response) => {
        if(!response.ok){
            throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
    })
}

let promise1 = getPromise(BULBASAUR_POKEMONS_URL);
let promise2 = getPromise(RATICATE_POKEMONS_URL);
let promise3 = getPromise(KAKUNA_POKEMONS_URL);


Promise.all([promise1, promise2, promise3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
})

Promise.any([promise1, promise2, promise3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
})



/// Settling a Promise = Fulfilling(resolve) + rejecting

Promise.allSettled([promise1, promise2, promise3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
})


Promise.race([promise1, promise2, promise3])
.then((result) => {
    console.log(result);
}).catch(error => {
    console.log('An error occured');
})


// Promise.resolve() is same as 
// let promise = new promise(resolve => resolve(value));


// Promise.reject() is same as 
// let promise = new Promise((resolve, reject) => reject(error));


/// HOW TO CANCEL A PROMISE 

