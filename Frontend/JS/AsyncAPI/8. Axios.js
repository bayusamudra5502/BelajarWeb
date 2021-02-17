const axios = require("axios").default; // Biar nyala autocompletenya

const url1 = "https://api.cryptonator.com/api/ticker/btc-usd";
axios
    .get(url1)
    .then((resp) => {
        console.log(resp.data.ticker.price);
    })
    .catch((err) => {
        console.log(err);
    });

const url2 = "https://icanhazdadjoke.com/";
axios
    .get(url2, {
        headers: {
            Accept: "application/json",
        },
    })
    .then((resp) => {
        console.log(resp.data.joke);
    })
    .catch((err) => {
        console.log(err);
    });

axios({
    method: "DELETE",
    url: "https://jsonplaceholder.typicode.com/posts/1",
})
    .then(() => {
        console.log("YAY KEHAPUS");
    })
    .catch((err) => {
        console.log("OH DARN!", err);
    });

// Versi Async
async function bercanda() {
    const url = "https://icanhazdadjoke.com/";
    try {
        const data = await axios.get(url, {
            headers: {
                Accept: "application/json",
            },
        });
        console.log("Bercanda Bapa bapa : ", data.data.joke);
    } catch (error) {
        console.error(error);
    }
}

bercanda();
