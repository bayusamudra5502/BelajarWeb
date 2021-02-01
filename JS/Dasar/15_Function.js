// Cara I : Fungsi pada umumnya
function hallo(nama, kabar = "baik") {
    console.log(`Haloo.. ${nama}, kabarnya ${kabar}`);
}

hallo("Bayu", "sehat");
hallo("Ayam");

function penjumlahan(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return false;
    }

    return a + b;
}

console.log(penjumlahan(12, 4));
console.log(penjumlahan(12, "x"));

// Cara II : Implisit
const f = function (a, b) {
    return a * b + a / b;
};

console.log(f(2, 4));

// Cara III : Arrow Function
// Model 1
const g = (a, b) => a * b;
console.log(g(2, 5));

// Model 2
const h = (a) => a * a;
console.log(h(4));

// Model 3
const i = (a) => {
    return a * a;
};

console.log(i(12));

// Bisa gini
function fx() {
    function h() {
        console.log("Ayaam");
    }

    h();
}

fx(); // Ayaam

// Bisa passing function
function iniFungsi(func) {
    func();
    func();

    return function () {
        console.log("Done!");
    };
}

iniFungsi(function () {
    console.log("Haii");
})(); // Haii Haii

// Methods
const matematika = {
    num: 123,
    beel: true,
    kuadrad: function (x) {
        return x ** 2;
    },
    kubiq: function (x) {
        return x ** 3;
    },
    belalang(y) {
        // Bisa gini juga coy
        return y ** y;
    },
};

// Seluk beluk tentang this

const mobil = {
    nama: "Ayam",
    umur: 5,
    print() {
        console.log(`${this.nama} dengan umur ${this.umur}`);
    },
    pront: () => console.log(`${this.nama} dengan umur ${this.umur}`),
};

console.log(matematika.kuadrad(12)); // 144
console.log(matematika.belalang(3)); // 27

mobil.print();

mobil.nama = "Kuda";
mobil.umur = 123;
mobil.print();

let rambo = mobil.print;
rambo(); // undefined muncul coy, karena parentnya jadi window

mobil.pront(); // undefined karena this-nya naek ke window
