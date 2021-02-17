const url = "https://api.cryptonator.com/api/full/btc-usd";

const data = async () => {
    try {
        const respond = await fetch(url); // Ngrim Request, klo udah kekirim  lanjut
        const data = await respond.json(); // Nunggu nyampe hasilnya

        console.log("SELESAAAI...");
        return data.ticker.price;
    } catch (e) {
        console.log("OH NOOOO");

        return null;
    }
};

data().then((data) => console.log(data));
