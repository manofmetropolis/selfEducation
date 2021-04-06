//command line based to-do list

//starts with "what would you like to do?"
//"new" - create new list item
//"list" - list all items
//"delete" - remove specific item
//"quit" - quit app

//while loop needed; while not equal to "quit," keep looping.
//ask for input

//removoe item with splice

//storage of to-do items will be an array
let todoList = [];

function addItem() {
    let input = prompt(`Add item to list. Add item or type "quit."`);
    while (input !== 'quit') {
        todoList.push(input);
        input = prompt("Anything else?");
        if (input.toLowerCase() === 'no') {
            nextStep();
        }
    }
    console.log("Applicaiton quit.");
}

function nextStep() {
    let command = prompt("Now what should we do? New, Delete, List or Quit.");
    while (command !== 'quit') {
        if (command.toLowerCase() === "new") {
            addItem();
            nextStep();
        } else if (command.toLowerCase() === "list") {
            console.log(todoList);
            nextStep();
        } else if (command.toLowerCase() === "delete") {
            let deleteItem = prompt("Which item would you like to delete?");
            todoList.splice(deleteItem, 1);
            console.log(todoList);
            nextStep();
        }
    }
    console.log("Application quit.");
}

addItem();