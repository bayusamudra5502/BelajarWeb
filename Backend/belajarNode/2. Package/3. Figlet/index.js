const figlet = require("figlet");
const colors = require("colors");

figlet("Halo dunia!", (err, res) => {
    if (err) {
        console.log("Ada keerorar".red);
        console.log(err);
        return;
    }

    console.log(res.rainbow);
});
