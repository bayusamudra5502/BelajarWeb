// DEKLARASI
let nama
    = "Bayu";
let kota = 'Cimahi' // Titik koma optional

// Indecies
console.log(kota[0]);
console.log("kambing"[3]);
console.log(kota[100]);  // undefined

// length
console.log();
console.log(kota.length);

// Operation
console.log(nama + " dari " + kota);
console.log(12 + " Belalang");
console.log(false + " kuda");

// Methods
console.log();
console.log(nama.toLowerCase());
console.log(nama.toUpperCase());

console.log();
console.log("     KAMBING GULING    ".trim());
console.log("     KAMBING GULING    ".trim().length);

console.log();
console.log("Kucing".indexOf("u"))
console.log("Kucing".indexOf("uci"))
console.log("Kucing".indexOf("bel"))
console.log("ayam".indexOf("a"))

console.log()
console.log("UJANGKEUN".slice(-4)) // Mirip slicing bahasa piton
console.log("UJANGKEUN".slice(-4, -1))
console.log("UJANGKEUN".slice(1, 19))

console.log()
console.log("BAANDCANANDG".replace("AND",""))
// console.log("BAANDCANANDG".replaceAll("AND",""))
console.log("GUK".repeat(10))

// Sting Literal
// Mirip kayak di piton gaes :)
console.log()
let ayam = 12
console.log(`Ini ada ayam sebanyak ${ayam * 1}`)
console.log(`Ini ada ayam sebanyak $${ayam * 1}`)