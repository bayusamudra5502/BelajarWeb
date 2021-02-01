const arr = [1, 2, 3, 4];
const kuadrat = arr.map(function (x, index, arr) {
    return x * x;
});

kuadrat.forEach((x) => console.log(x)); // Cetak

// Fungsi every bakal ngecek apakah semuanya
// memenuhi persyaratan?
function cleanNames(arr) {
    if (!Array.isArray(arr)) return null;
    if (!arr.every((x) => typeof x === "string")) return null;
    return arr.map((x) => x.trim());
}

console.log(cleanNames(["aa   ", "   baa", "   xaa"]));
console.log(cleanNames(["aa", "baa", 123]));

/* 
    BEDANYA .forEach dan .map:
    Keduanya sama-sama ngetranverse tiap elemen di array
    TAPI
    bedanya itu map mah ngasilin array baru yang duperoleh
    dari hasil fungsi yang dilewatkan untuk tiap item, yang
    forEach mah ga ngasilin apa"

    initnya, foreach mah ga ngasilin apa" tapi map mah ngasilin
*/
