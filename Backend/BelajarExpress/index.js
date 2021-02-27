const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("LISTENING ON PORT", port);
});

// INi bakal jalan untuk tiap" yg masuk
// Gaboleh digabung sama get/post/apalah
// app.use((req, res) => {
//     // Dijalankan klo ada yang masuk ke server
//     // console.log("ADA YG MASUK NIH");
//     // console.log(req.url);

//     if (req.originalUrl === "/") {
//         // Cara 1 : INi satu paked
//         // Vesi otomatis gaes, gausa seting" lagi
//         res.send("<h1>SELAMAT DATANG DI HOMEPAGE</h1>");
//     } else if (req.originalUrl === "/halo") {
//         // Cara 2 : HTTP Murni
//         res.writeHead(200, { "content-type": "text/html" });
//         res.write("<h1>Halo Dunia</h1>");
//         res.end();
//     }
// });

app.get("/satu", (req, res) => {
    res.send("<h1>Halaman Satu</h1>");
});

app.get("/", (req, res) => {
    res.send("<h1>Halaman Utama</h1>");
});

// URL PARAM
app.get("/u/:user", (req, res) => {
    // console.log(req.params);
    res.send(`<h1>Aku adalah user ${req.params.user} </h1>`);
});

// Query String
app.get("/hitung", (req, res) => {
    const { a = 0, b = 0, opt } = req.query;
    if (!opt) {
        res.send("OPERATOR REQUIRED!");
    } else {
        res.send(`<h1>${a} ${opt} ${b} = ${eval(a + decodeURI(opt) + b)}</h1>`);
    }
});

// Redirect
app.get("/pantul", (res, req) => {
    req.redirect("/");
});

app.get("*", (req, res) => {
    // SIMPEN PALING BAWAH, ini untuk path sisanyaa
    res.send("KAMU NYASAR!!");
});
