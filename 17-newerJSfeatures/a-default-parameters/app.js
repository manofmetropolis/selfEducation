//default parameters

//When we would like a parameter to be provided, but it isn't, we can set a default parameter for the function to pass.

//The old way
function rollDie(numSides) {
    if (numSides === undefined) {
        numSides = 6
    }
    return Math.floor((Math.random() * numSides) + 1);
}

//The new, improved way
function rollAgain(numSides = 6) { //Set the default right in the parameters space
    return Math.floor((Math.random() * numSides) + 1);
}

//ALWAYS have default parameters come last. JS isn't smart enough to know which one to use.