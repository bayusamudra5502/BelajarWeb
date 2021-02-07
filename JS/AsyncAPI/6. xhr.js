const req = new XMLHttpRequest();

req.onload = function () {
    console.log("SELESAII");
    const data = JSON.parse(this.responseText);
    console.log(data.ticker.price);
};

req.onerror = function () {
    console.log("ERROR!!");
    console.log(this);
};

const url = "https://api.cryptonator.com/api/full/btc-usd";
req.open("GET", url, true); // Async = true

// req.send(body)
req.send();
