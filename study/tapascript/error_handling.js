// parsing error - happens before you run the code, JS reads your code find something wrong with the syntax
// RunTime error - Code runs but breaks while running, logic might be fine but something goes wrong during execution

// Examples:-

// console.log(x);  // refrence error

// let obj = null;
// console.log(obj.name); // type error 

// let arr = new Array(-1)  // uncaught range error

// eval - it takes a string and runs it like code 
// eval("console.log(2 + 2)");
// eval("var a = ;")       //  evalerror


//  try....catch 

try{
    // logic or code
} catch(err) {
    // handle error
}

/* 
1. Code inside try gets executed
2. If no error in the try block, the catch block will be ignored and will not be executed
3. If there is an error in the try block, the execution of the try block will be suspended and the control will move to the catch block. In the catch block you can find the error details and do the needful.
*/


// in this code below, you can see the (abc;) error, so when the code reaches to that line, it immediately goes to the catch and give the output, so only (execution starts here) will be printed
// try {
//     console.log("execution starts here")
//     Abc;
//     console.log("execution ends here")
// } catch(err){
//     console.log("an error has occured");
//     console.log(err);

//     console.log(err.name);
//     console.log(err.message);
//     console.log(err.stack);
// }


// Real-World Use cases //

// function divideNum(a, b){
//     try{
//         if(b === 0){
//             const err = new Error("Division by zero is not allowed"); 
//             throw err;   // throw - is used to manually generate an error. It stops the current execution and passes the error to the nearest catch block.
//         }

//         const res = a / b;
//         console.log(`the results is ${res}`);
//     } catch(error){
//         console.error('Got an error -', error.message);
//     }
// }

// divideNum(15,3);
// divideNum(15,0);


// const person = {
//     name: 'Aditya',
//     address: {
//         city: 'Gwalior'
//     }
// }
// function getpostal(user){
//     try{
//         console.log(user.address.postalcode);
//     } catch(error){

//     }
// }
// getpostal(person);


// function ageValidate(age){
//     try{
//         if(isNaN(age)){
//             throw new Error(`Invalid input: Age must be a number. Your Input is ${age}`)
//         }
//         console.log(`User's age is: ${age}`);
//     } catch(error){
//         console.error("Validate Error:", error.message)
//     }
// }
// ageValidate("Adi");


// function validateform(formdata){
//     try{
//         if(!formdata.username) throw new Error("User name is mandatory");
//         if(!formdata.email.includes("@")) throw new Error("Invaild email format..!");
//     } catch(error){
//         console.error("Validation issues found:", error.message);
//         throw error;  // rethrow means catching an error in a catch block and then throwing it again using throw, so it can be handled elsewhere or crash the program if unhandled.
//     }
// }

// try{
//     validateform({username: "Aditya", email: "Bademail"});
// } catch(error){
//     console.error("Showing error msg for user creation", error.message);
// }



// try-catch-finally  ---- You use finally when there’s something you always want to do, finally is a block that always runs after try and catch, not matter what error or no error
try{

} catch(error){

} finally{

}

// function processInfo(info){
//     try {
//         console.log("Processig Information...");
//         if(!info) throw new Error("No info available to process");
//         console.log("Information processed");
//     } catch(error){
//         console.error("Error:", error.message);
//     } finally{
//         console.log("Cleaning: Closing Database connnection");
//     }
// }

// processInfo("Aditya loves to play games");


// Custom Error

// function Validationerror(message){
//     this.name = "Validation Error";
//     this.message = message;
//     this.stack = new Error().stack;
// }

// Validationerror.prototype = object.create(Error.prototype);

// function valiCiti(age){
//     if (age<60){
//         throw new Validationerror("You are not a senior citizen");
//     }
//     return 'You are a senior Citizen';
// }
// try{
//     const message = valiCiti(90);
//     console.log(message);
// } catch(error){
//     console.error(`${error.name}: ${error.message}`);
// } 


