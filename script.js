const body = document.querySelector('body');
const button = document.querySelector('button');
const colors = ["red", "violet", "lightblue", "gold", "maroon", "aqua", "grey"];

button.addEventListener('click', ()=> {
    console.log("Clicked");
    const colorIndex = Math.floor(Math.random() * colors.length);
    console.log(colorIndex);
    body.style.backgroundColor = colors[colorIndex];
})