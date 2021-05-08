// WRITE YOUR CODE IN HERE:
const container = document.getElementById('container');

for (let i = 0; i < 100; i++) {
    const newButton = document.createElement('button');
    newButton.innerText = 'Buttons!';
    container.appendChild(newButton);
}