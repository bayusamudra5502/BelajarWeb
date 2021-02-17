// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 898; i++) {
    const wrap = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");

    img.src = `${baseURL}${i}.png`;
    p.innerText = `#${i}`;
    wrap.append(img, p);

    wrap.style.display = "inline-block";
    wrap.style.textAlign = "center";

    container.append(wrap);
}
