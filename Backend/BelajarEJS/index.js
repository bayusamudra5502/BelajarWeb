const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json"));

const PORT = process.env.PORT || 5000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.use(express.static(path.join(__dirname, "public")));

// Kirim nilai ke file EJS
app.get("/random", (req, res) => {
    const num = Math.floor(Math.random() * 5) + 1;
    res.render("random.ejs", { rnd: num, num });
});

app.get("/nama/:nama", (req, res) => {
    const { nama } = req.params;
    res.render("nama.ejs", { nama });
});

// Versi Detruktif
app.get("/user/:user", (req, res) => {
    const { user } = req.params;
    if (!data[user]) {
        res.send(`Gaada ${user} disini`);
    } else {
        res.render("pesan.ejs", { ...data[user] });
    }
});

app.listen(PORT, () => {
    console.log("Start listening on port", PORT);
});
