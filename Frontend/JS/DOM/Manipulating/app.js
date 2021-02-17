const data = document.querySelector("a");

// * Bisa diubah isinya!
let l = data.innerHTML;
let m = data.innerText; // Ini mah nampilin yang muncul
let m2 = data.textContent; // Ini nampilin sesuai yg ada di markup

// * Attribut
// Cara I
const banner = document.querySelector("#banner");
banner.id = "kucing";
banner.id = "banner";

// Cara II
const firstLink = document.querySelector("a");
console.log(firstLink.href); // Alamat lokasi yg dimaksud

console.log(firstLink.getAttribute("href")); // Ambil langsung dari HTML-nya
firstLink.setAttribute("href", "https://www.google.com");

// * Style Manip
// Inline Style
const h1 = document.querySelector("h1");
h1.style.color = "gold";

// Computed Style
console.log(window.getComputedStyle(h1).fontSize);

// * Class Manip
const h2 = document.querySelector("h2");
// h2.setAttribute("class", "purple"); Bisa gini tapi gabisa banyak
const clH2 = h2.classList;
h2.classList.add("purple", "border");
h2.classList.remove("purple");

console.log(clH2.contains("purple"));
clH2.toggle("purple");

// CREATE ELEMENT : Satu objek sekali pakai, diambil yg paling
// terakhir
const newImage = document.createElement("img");
newImage.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80"
);
newImage.classList.add("square");

const newParagraph = document.createElement("p");
newParagraph.innerHTML = "Haii";

const newH2 = document.createElement("h2");
newH2.innerHTML = "Kambing";

document.body.append(newImage, newParagraph); // Boleh gini klo pake append
// document.body.prepend(newImage, newParagraph); // Didepan

document.querySelector("h1");
h1.insertAdjacentElement("afterend", newH2);
// h1.insertAdjacentElement("afterend", newParagraph);

// * REMOVE
const b = document.querySelector("b")
b.remove();
b.remove();
document.body.append(b)

b.parentElement.removeChild(b);