const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener('click', function () {
    document.body.style.backgroundColor = 'red';

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = (Math.floor(Math.random() * 11)) / 10;

    let colorValue = `rgba(${r}, ${g}, ${b}, ${a})`;

    document.body.style.backgroundColor = colorValue;

    h1.innerText = colorValue;
})