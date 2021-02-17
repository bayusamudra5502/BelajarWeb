// Selecting
// Pake ID
const banner = document.getElementById("banner");

// Pake Tag name
const images = document.getElementsByTagName("img");
[...images].forEach((i) => console.log(i.src));

const tag = document.getElementsByClassName("square");
for (let i of tag) {
    i.src =
        "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";
}

// Query Selector : Pake jurus css!
const p = document.querySelector("p"); // First Match
const ban = document.querySelector("#banner");
const sq = document.querySelector(".square");

const sqs = document.querySelectorAll(".square"); // Semuanya

// Keluarga elemen
const pa = p.parentElement;
const chil = p.children[0];
const pNext = p.nextElementSibling;
const pPrev = p.previousElementSibling;
