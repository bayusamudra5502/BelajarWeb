const skor = document.querySelector("#poin-menang");
const addFirstButton = document.querySelector("#add-first");
const addSecondButton = document.querySelector("#add-second");
const resetButton = document.querySelector("#reset");
const skorPemainPertama = document.querySelector("#pemain1");
const skorPemainKedua = document.querySelector("#pemain2");

let skorPemain = [0, 0];

skor.addEventListener("change", function () {
    skorPemain = [0, 0];

    skorPemainPertama.classList.remove("win");
    skorPemainPertama.classList.remove("lose");

    skorPemainKedua.classList.remove("win");
    skorPemainKedua.classList.remove("lose");

    updateSkor();

    if (this.value !== "null") {
        addFirstButton.removeAttribute("disabled");
        addSecondButton.removeAttribute("disabled");
        resetButton.removeAttribute("disabled");
    }
});

function updateSkor() {
    const MAXSCORE = skor.value;

    skorPemainPertama.innerHTML = skorPemain[0];
    skorPemainKedua.innerHTML = skorPemain[1];

    if (skorPemain[0] == MAXSCORE) {
        skorPemainPertama.classList.add("win");
        skorPemainKedua.classList.add("lose");

        addFirstButton.setAttribute("disabled", "");
        addSecondButton.setAttribute("disabled", "");
    } else if (skorPemain[1] == MAXSCORE) {
        skorPemainPertama.classList.add("lose");
        skorPemainKedua.classList.add("win");

        addFirstButton.setAttribute("disabled", "");
        addSecondButton.setAttribute("disabled", "");
    }
}

addFirstButton.addEventListener("click", function () {
    skorPemain[0]++;
    updateSkor();
});

addSecondButton.addEventListener("click", function () {
    skorPemain[1]++;
    updateSkor();
});

resetButton.addEventListener("click", function () {
    addFirstButton.removeAttribute("disabled");
    addSecondButton.removeAttribute("disabled");
    resetButton.removeAttribute("disabled");

    skorPemain[0] = 0;
    skorPemain[1] = 0;
    updateSkor();

    skorPemainPertama.classList.remove("win");
    skorPemainPertama.classList.remove("lose");

    skorPemainKedua.classList.remove("win");
    skorPemainKedua.classList.remove("lose");
});
