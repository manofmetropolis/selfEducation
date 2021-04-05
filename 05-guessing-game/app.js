let maximum = parseInt(prompt("Enter maximum number"));
//parseInt pulls out the number from input that has a number in it.
while (!maximum) {
    maximum = parseInt(prompt("Please enter a valid number."));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;
while (!guess) {
    guess = parseInt(prompt("Enter a valid number!"));
}

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too High.");
    } else {
        guess = prompt("Too Low.");
    }
}
if (guess === 'q') {
    console.log("Quitter.")
} else {
    console.log(`You got it in ${attempts} guesses.`);
}