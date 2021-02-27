const fs = require("fs");
const process = require("process");

const namaFolder = process.argv[2] || "Project";

try {
    fs.mkdirSync(namaFolder);
    fs.writeFileSync(`${namaFolder}/index.html`, "");
    fs.writeFileSync(`${namaFolder}/style.css`, "");
    fs.writeFileSync(`${namaFolder}/app.js`, "");

    console.log("Berhasil");
} catch (e) {
    console.log("OH NOO!");
    console.log(e);
}
