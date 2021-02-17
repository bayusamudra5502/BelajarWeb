let kambing = [1,2,3,4]
let ayam = [null, undefined, false, 1234]

// Length
console.log(kambing.length)

// Indecies
console.log()
console.log(kambing[3])
console.log(kambing[30])

/// Edit
console.log()
ayam[0] = 123
ayam[7] = 0 // Ini bisa
console.log(ayam);
console.log(ayam.length);

// Methods
let kucing = []
console.log();

// Di belakang
console.log(kucing.push("Macan", "Belalang"))
console.log(kucing)
console.log(kucing.pop())

// Di Depan
console.log(kucing.unshift("Ayam"));
console.log(kucing.shift());

// Balikin
console.log();
console.log(kucing.reverse());

//  Hapus/Edit
let warna = ["merah", "kuning", "hijau", "biru", "ungu"]
warna.splice(1,0,"belang")
console.log();
console.log(warna);

// Sort
warna.sort(); // Berdasarkan Unicodenya
console.log(warna);

// METHOD YG BIKIN ARRAY BARU (Undestructive)
console.log();
console.log(kucing.concat(kambing))

console.log();
console.log(kucing.includes("Macan"));
console.log(kucing.indexOf("Meong"));

console.log();
let kumbang = warna.slice(-3 , -1)
console.log(kumbang);

// Equality Testing
let x = [1,2,3];
let y = x; // Shallow copy
let y2 = Array.from(x); // Deep Copy

console.log();
console.log(x === y); // true
console.log(x === y2); // true