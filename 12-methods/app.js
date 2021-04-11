//METHODS!!!
//A method is a function that acts on an object to change it (it can permanently change that object or not).
//There is a vast number of built-in methods in JS. Look at MDN.
//We can make our own methods too!

// const myMath = {
//     PI: 3.14159,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function (num) {
//         return num * num * num;
//     }
// }

//Shorthand for adding methods.
const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num * num * num;
    }
}

//The Mystery of the keyword "this"
//this is used to access other properties on the same object. It's commonly used with methods.
//It can be confusing as hell, though. It depends on the invocation context of the function it's used in.
//If a method is defined out in the open, the default 'this' is the window.

//'this' might call for its own learning.

// const dog = {
//     name: 'Huck',
//     color: 'black and white',
//     breed: 'pitbull terrier',
//     woof() {
//         console.log(`${this.name} says woof.`);
//     }
// }

// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//     layAnEgg() {
//         this.eggCount++;
//         return `EGG, ${this.eggCount}`;
//     }
// };

//TRY/CATCH
//These have to do with catching errors and stop them from crashing the code.

try { // When you think something might result in an error.
    hello.toUpperCase();
} catch { //And if it does...
    console.log('Error.')
}

//Find out why we would actually use that. (e.g., When we start connecting things to the outside world and it no longer works to do so.)