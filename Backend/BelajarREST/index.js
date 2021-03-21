const e = require("express");
const express = require("express");
const app = express();
const { v4: uuid } = require("uuid");

const comments = {};
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Biar bisa nerima JSON

// Method override
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
/* 
    <form method="POST" action="/resource?_method=DELETE">
    <button type="submit">Delete resource</button>
    </form>
*/

app.get("/", (req, res) => {
    res.send("<h1>Halo Dunia</h1>");
});

app.get("/comments", (req, res) => {
    res.send({ success: true, message: comments });
});

app.post("/comments", (req, res) => {
    const { user, text } = req.body;
    comments[uuid()] = {
        user: user,
        text: text,
        lastUpdate: Date.now(),
    };

    res.send({ success: true });
});

app.get("/comments/:id", (req, res) => {
    const { id } = req.params;

    if (id in comments) {
        res.send({
            success: true,
            message: comments[id],
        });
    } else {
        res.status(404).send({
            success: false,
            message: `ID '${id}' is not found`,
        });
    }
});

// Edit
app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    const { text } = req.body;

    if (id in comments) {
        comments[id].text = text;
        comments[id].lastUpdate = Date.now();

        res.send({
            success: true,
        });
    } else {
        res.status(404).send({
            success: false,
            message: `ID '${id}' is not found`,
        });
    }
});

app.delete("/comments/:id", (req, res) => {
    const { id } = req.params;

    if (id in comments) {
        delete comments[id];

        res.send({
            success: true,
        });
    } else {
        res.status(404).send({
            success: false,
            message: `ID '${id}' is not found`,
        });
    }
});

app.listen(8080, () => {
    console.log("Listening on port 8080");
});
