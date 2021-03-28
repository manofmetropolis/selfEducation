//THE WHILE LOOP
//The while loop is "simpler." As long as something evaluates to true, the loop will run. Por ejemplo:
// let mariah = ['Mariah Carey', 'Emotions', 'Music Box', 'Daydream'];


// function mariahAlbums() {
//     let i = 0;
//     while (i < mariah.length) {
//         console.log(`${mariah[i]} is a Mariah Carey album.`); //what you want to happen
//         i++; // the increment can come before or after, but you get a different result...
//     }
// };

//Something like the above example is better suited for a for loop. A while loop is better for a situation when you don't really know how many times you'll need to iterate. For example, a game where you won't know how many turns it will take to oend the game.

// const secret = "MariahCarey";

// let guess = prompt("Who\'s the greatest?");
// let numGuess = 0;
// while (guess !== secret) {
//     guess = prompt("Who\'s the greatest?");
// }
// console.log("Damn right she is.");

//Break Keyword: Inside of a loop (usually a while), once the break is encountered, the loop is exited.

// let input = prompt("Say something.")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === 'stop copying me') {
//         break;
//     }
// }
// console.log("You are no fun.");

