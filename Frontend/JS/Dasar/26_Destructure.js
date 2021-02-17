// Array
const arr = [1, 5, 2, 8, 10, 12];

const [ayam, bebek, ...sisa] = arr;
console.log(ayam);
console.log(bebek);
console.log(sisa);
console.log();

// Object
const obj = {
    nama: "Fulan",
    umur: 12,
    kota: "Cimahi",
    email: "fulan@example.com",
    pesan: "Haiii",
};

const { email, nama, kucing, apa = 90, umur: umurku = 6, ...x } = obj;
console.log(email);
console.log(nama);
console.log(kucing); // Undefined karena gaada kucing di obj
console.log(apa); // Diambilnya default
console.log(umurku);
console.log(x);

// Arguments
function pengguna({ nama, umur = 0 }) {
    return `${nama} - ${umur}`;
}

console.log(pengguna(obj));
