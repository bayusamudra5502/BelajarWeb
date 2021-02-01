const beli = [12000, 50000, 6000, 4000];

// 0 sebagai initial values, nilai awalS
let hasil = beli.reduce((total, price) => total + price, 0);
console.log(hasil);

let maksimum = beli.reduce((max, val) => (max < val ? val : max));
console.log(maksimum);

// MASALAH MDN
// SOLUSI 1
const data = [{ x: 2 }, { x: 122 }, { x: 42 }];
const fungsi = (a, b) => {
    return a.x > b.x ? a : b; // Return objeknya
};

let jawaban = data.reduce(fungsi, { x: -Infinity });
console.log(jawaban.x); // 122

// SOLUSI 2
const fungsi2 = (a, b) => {
    return { x: Math.max(a.x, b.x) }; // Bikin objek baru
};

jawaban = data.reduce(fungsi2, { x: -Infinity });
console.log(jawaban.x); // 122

// SOLUsI 3
jawaban = data.map((i) => i.x).reduce((a, b) => Math.max(a, b), -Infinity);
console.log(jawaban); // 122
