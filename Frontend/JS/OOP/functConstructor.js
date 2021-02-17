function Kucing(nama, umur) {
    this.nama = nama;
    this.umur = umur;
}

Kucing.prototype.mengeong = function () {
    console.log("MEOKK");
};

Kucing.prototype.makan = function () {
    console.log(`${this.nama} lagi makan nih`);
};

const kucingku = new Kucing("Puci", 2);
kucingku.mengeong();
kucingku.makan();
