//HIGHER ORDER FUNCTIONS: Functions that operate with other functions
//Accept functions as arguments; Functions that can return a function

// let greet = function () {
//     console.log('Hieeeee.');
// }

// function callTwice(func) {
//     func();
//     func();
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log("Noice.");
//         }
//     } else {
//         alert("This is annoying.");
//         alert("This is annoying.");
//         alert("This is annoying.");
//         alert("This is annoying.");
//         alert("This is annoying.");
//     }
// }

// function makeBetweenFunc(min, max) {

// }

// function isBetween(num) {
//     return num >= 50 && num <= 100; //return true or false
// }

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}