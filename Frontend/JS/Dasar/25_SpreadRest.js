let arr = [1, 5, 2, 8, 10, 12];

// Function Spread
console.log(Math.max(...arr));
console.log(...arr);

let arrB = [2, 5, 7, 10, 12];

// Array Spread
let arr2 = [...arr, 3, 4, 5, ...arrB];
console.log(...arr2);

// Object Spread
const data = {
    nama: "Fulan",
    umur: 19,
};

const nilai = {
    nilai: 100,
    indeks: "A",
    umur: 20, // Mengoveride umur
};

// Override indeks
const mahasiswa = { ...data, ...nilai, indeks: "A+" };
console.log(mahasiswa);

// Rest Param

// Metode ini gabisa karena 'arguments' bukan array
// function sum() {
//     return arguments.reduce((sum, i) => sum + i);
// }

function sum(l, ...nums) {
    return l + nums.reduce((sum, i) => sum + i);
}

console.log(sum(0, ...arr));
