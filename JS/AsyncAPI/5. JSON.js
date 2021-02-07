// JSON -> OBJSECT
const respond = `{"ticker":{"base":"BTC","target":"USD","price":"37651.51350260","volume":"55634.57963586","change":"-327.65616050"},"timestamp":1612410362,"success":true,"error":""}`;

const parsedData = JSON.parse(respond);
console.log(parsedData.ticker.price);

// OBJECT -> JSON
const orang = {
    namaDepan: "Fulan",
    namaAkhir: "bin Fulan",
    uang: 100000,
    sukaAyam: true,
    sukaMakan: null,
};

console.log(JSON.stringify(orang));
