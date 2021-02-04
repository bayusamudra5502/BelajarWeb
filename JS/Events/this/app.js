const container = document.querySelector("#container");

function randomColor() {
    return Math.floor(Math.random() * 256);
}

function gantiWarna() {
    const [r, g, b] = [randomColor(), randomColor(), randomColor()];
    this.style.backgroundColor = `rgb(${r},${g},${b})`;

    const hsp = Math.sqrt(0.299 * r ** 2 + 0.587 * g ** 2 + 0.114 * b ** 2);

    if (hsp > 127.5) {
        this.style.color = "black";
    } else {
        this.style.color = "white";
    }
}

for (let i = 0; i < 50; i++) {
    const btn = document.createElement("button");
    btn.innerText = `Tombol ${i + 1}`;
    btn.addEventListener("click", gantiWarna);
    container.appendChild(btn);
}
