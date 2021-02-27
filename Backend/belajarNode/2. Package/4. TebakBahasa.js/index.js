const franc = require("franc");
const colors = require("colors");
const langs = require("langs");
const { exit, argv } = require("process");

const args = argv;
// const args = ["", "", "Aku anak sehat tubuhku kuat"];

if (args.length < 3) {
    console.error("\nSILAHKAN MASUKAN INPUT YANG BENAR\n".red);
    exit(-1);
}

const input = args.slice(2);

for (let i = 0; i < input.length; i++) {
    const bahasa = franc(input[i]);
    if (bahasa === "und") {
        console.log(i, ":", "Bahasa tidak ditemukan".yellow);
        continue;
    }

    console.log(
        `${i}`.green,
        `: ${(langs.where("3", bahasa) || { name: bahasa }).name}`
    );
}
