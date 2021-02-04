const button = document.querySelector("#random_button");
const h1 = document.querySelector("h1");
const body = document.body;

function randomColor() {
    return Math.floor(Math.random() * 256);
}

button.addEventListener("click", () => {
    const [r, g, b] = [randomColor(), randomColor(), randomColor()];
    body.style.backgroundColor = `rgb(${r},${g},${b})`;
    h1.innerText = `rgb(${r},${g},${b})`;

    // Rumus : http://alienryderflex.com/hsp.html
    const hsp = Math.sqrt(0.299 * r ** 2 + 0.587 * g ** 2 + 0.114 * b ** 2);

    if (hsp > 127.5) {
        h1.style.color = "black";
    } else {
        h1.style.color = "white";
    }
});
