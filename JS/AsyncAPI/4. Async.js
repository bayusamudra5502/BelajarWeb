// CARA DEFINISI
// CARA 1
async function cekAngka() {
    const angka = Math.random();
    if (angka <= 0.9) {
        throw "KURANG ANGKANYA COY";
        // Alternatif
        // throw new Error("Error");
    } else {
        return "Yay berhasil";
    }
}

// CARA 2
const asyncFungsi = async (data) => {
    return "Yay Berhasil" + data;
};

cekAngka()
    .then((data) => console.log(data))
    .catch((err) => console.log("MELEDAKK", err));

// AWAIT : Tunggu sampe async sukses baru jalan
const bobo = (waktu) => new Promise((resolve) => setTimeout(resolve, waktu));

async function jalankan() {
    await bobo(1000);
    console.log("HAII");
    await bobo(1000);
    console.log("SALAM");
    await bobo(1000);
    console.log("KENAL");

    return await Promise.all([asyncFungsi(" DATA"), bobo(3000)]);
}

jalankan().then((data) => {
    console.log(data);
});

// Await rejected :
async function belalang() {
    console.log("MULAI");
    try {
        let data = await cekAngka();
        console.log(data);
    } catch (e) {
        console.log("ERROR!!!");
        console.log(e);
    }
}

belalang();
console.log("DONE");
