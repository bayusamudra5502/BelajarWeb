let x = 0;
let y = 0;

window.addEventListener("keydown", (e) => {
    const kotak = document.querySelector("#kotak");

    switch (e.code) {
        case "ArrowUp":
            console.log("ATAS!");
            console.log(y);
            y += 5;
            kotak.style.bottom = `${y}px`;
            break;

        case "ArrowDown":
            console.log("BAWAH!");
            y -= 5;
            kotak.style.bottom = `${y}px`;
            break;

        case "ArrowLeft":
            console.log("KIRI!");
            x -= 5;
            kotak.style.left = `${x}px`;
            break;
        case "ArrowRight":
            console.log("KANAN!");
            x += 5;
            kotak.style.left = `${x}px`;
            break;
        default:
            console.log("WHAT?!");
    }
});
