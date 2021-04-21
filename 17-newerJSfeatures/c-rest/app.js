//Rest looks like spread because of the 3 dots

//The arguments object is in every fnuctiono
//It's an array-like object. It has a length property. But it doesn't have array methods.
//It contains all the args passed to the function and is not available inside of arrow functions.

function sum() {
    return arguments;
}

//Rest takes all the arguments and puts them into an actual array.
//Rest means "remaining", not like ... "nap."

function addUp(...nums) {
    return nums.reduce((total, el) => total + el);
}

function schedule(grill, door, ...staff) {
    console.log(`${grill} is working the grill.`);
    console.log(`${door} is working the door.`);
    console.log(`Also scheduled: ${staff}`);
}