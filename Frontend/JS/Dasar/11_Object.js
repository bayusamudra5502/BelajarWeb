const orang = {
    namaDepan: "Bayu",
    namaAkhir: "Samudra",
    uang: 100000,
    1000: true,
}; // semua keys bakal jadi string

console.log(orang.namaAkhir);
console.log(orang["namaDepan"]);

// console.log(orang.1000); Ora iso
console.log(orang[1000]); // Diubah jadi string
console.log(orang["1000"]); // Ini juga bisa

// Ganti Nilai
orang[1000] = false;
console.log(orang);

// Bikin Nilai Baru
orang["umur"] = 12;
orang.pesan = "Hii";
console.log(orang);

const mahasiswa = {
    nama: "Fulan",
    bayarUKT: true,
    nilai: {
        mk1: 100,
        mk2: 100,
    },
    penghargaan: ["A", "B"],
};

console.log(mahasiswa);

// Function
console.log(Object.keys(mahasiswa));
console.log(Object.values(mahasiswa));
console.log(Object.entries(mahasiswa));

// Buat Objek
// CARA I  : Objek Literal
let orang2 = {
    key: "value",
    lihatThis: function () {
        console.log(this);
    },
    lihatThis2: () => console.log(this),
};

// CARA II : Function Declaration
function seseorang(nama, nilai) {
    let res = {};
    res.nama = nama;
    res.nilai = nilai;
    res.lihatThis = function () {
        console.log(this);
    };

    res.lihatThis2 = () => console.log(this);

    return res;
}

const orang3 = seseorang("A", 100);
console.log(orang3);

// CARA III : Konstruktor
// Konvensi M-nya besar. Anggap jadi class
function Mahasiswa(nama, nilai) {
    this.nama = nama;
    this.nilai = nilai;
    this.lihatThis = function () {
        console.log(this);
    };
    this.lihatThis2 = () => console.log(this);
}

// new mengganggap semua setelahnya itu Konstruktor
const orang4 = new Mahasiswa("Bayu", 12);
console.log(orang4, typeof orang4);

// THIS!
console.log("BELAJAR THIS");
console.log(this); // Object global

console.log();
console.log("THIS CARA I");
console.log(orang2.lihatThis()); // Menunjuk Objek
console.log(orang2.lihatThis2()); // Menunjuk Global

console.log();
console.log("THIS CARA II");
console.log(orang3.lihatThis());
console.log(orang3.lihatThis2());

console.log();
console.log("THIS CARA III");
console.log(orang4.lihatThis());
console.log(orang4.lihatThis2());
