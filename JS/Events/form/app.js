const form = document.querySelector("form");
const list = document.querySelector("#list");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Biar ga submit

    const productInput = form.elements.product;
    const qtyInput = form.elements.qty;

    const newLi = document.createElement("li");

    newLi.innerText = `${qtyInput.value} ${productInput.value}`;
    list.appendChild(newLi);

    qtyInput.value = 0;
    productInput.value = 0;
});
