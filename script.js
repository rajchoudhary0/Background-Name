const body = document.querySelector('body');
const button = document.querySelector('button');
const colors = ["red", "violet", "lightblue", "gold", "maroon", "aqua", "grey"];

body.addEventListener('click', ()=> {
    const colorIndex = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
})