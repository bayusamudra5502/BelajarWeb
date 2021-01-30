const orang = {
    namaDepan : "Bayu",
    namaAkhir : "Samudra",
    uang  : 100000,
    1000 : true
} // semua keys bakal jadi string

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
console.log(orang)

const mahasiswa = {
    nama : "Fulan",
    bayarUKT : true,
    nilai : {
        mk1 : 100,
        mk2 : 100
    },
    penghargaan : ["A","B"]
}

console.log(mahasiswa);

// Function
console.log(Object.keys(mahasiswa));
console.log(Object.values(mahasiswa));
console.log(Object.entries(mahasiswa));