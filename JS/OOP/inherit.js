class Hewan {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }

    makan() {
        console.log(`${this.nama} lagi makan nih.`);
    }
}

class Kucing extends Hewan {
    mengeok() {
        console.log("MEOKK");
    }
}

class ayam extends Hewan {
    constructor(nama, umur, berat) {
        super(nama, umur);
        this.berat = berat;
    }

    makan() {
        console.log("Aku cuma suka makan beras");
    }

    bunyi() {
        console.log(`${this.nama} :`, "PETOK PETOK");
    }
}

const puci = new Kucing("Puci", 2);
puci.makan();

const ayamku = new ayam("Jago", 5, 4);
ayamku.bunyi();
