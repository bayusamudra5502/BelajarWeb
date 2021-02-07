class Mobil {
    #seri;
    constructor(nama, seri) {
        this.nama = nama;
        this.#seri = seri;
    }

    cetakSeri() {
        console.log(this.#seri);
    }
}

const mobilku = new Mobil("Kijang", 12);
mobilku.cetakSeri();
