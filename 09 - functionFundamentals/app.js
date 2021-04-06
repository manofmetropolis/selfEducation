//FUNCTIONS ARE A BIG DEAL. YOU KNOW THIS.

let diceTypes = [6, 6];
let results = [];

function rollDie() {

    for (let i = 0; i < diceTypes.length; i++) {
        let sides = diceTypes[i];
        let result = Math.floor(Math.random() * sides + 1);

        results.push(result);
    }
    console.log(results);
}

//STEP 1: Define the function — give it a name, tell JS it's a thing.  This does not run the function!

//The "function" way:

function robIsGreat() {
    console.log("Rob is so great!");
}

//STEP 2: CALL THE FUNCTION

//ARGUMENTS!!!
//Arguments define the inputs of the function. They essentially act as variables that cause the function to turn out a different result based on them.

function declareHusband(fullName) {
    console.log(`I'm going to marry ${fullName}`);
};

//MULTIPLE ARGUMENTS
//Tell the function to expect multiple parameters. Like first name and last name. Remember that everything is defined by order.

function saySomething(firstName, lastName) {
    console.log(`Hey, how you doin', ${firstName} ${lastName[0]}.?`)
}

var textBox = document.querySelector(".textBox");

function repeat(str, num) {
    var result = '';

    for (let i = 0; i < num; i++) {
        result += str;
    }
    textBox.innerText = result;
}

//RETURNS FINALLY!
//Return outputs the result of a function and STOPS the function.

function isShortsWeather(temp) {
    if (temp >= 75) {
        return true;
    } else {
        return false;
    }
}