function Kucing(nama, umur) {
    return {
        nama: nama,
        umur: umur,
        mengeong: function () {
            console.log("MEOOK!");
        },
        makan: function () {
            console.log(`${nama} lagi makan nih`);
        },
    };
}

const kucingku = Kucing("Puci", 2);
kucingku.makan();
kucingku.mengeong();

const kucingjalan = Kucing("Kucing Oren", 3);
kucingjalan.makan();
