class Kucing {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    mengeong() {
        console.log("MEOKK");
    }

    makan() {
        console.log(`${this.nama} lagi makan nih`);
    }
}

const puci = new Kucing("Puci", 2);
puci.makan();
puci.mengeong();
