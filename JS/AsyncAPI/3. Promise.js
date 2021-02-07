const fungsiPromise = (url, delay = 1000) => {
    return new Promise((resolve, reject) => {
        const Angka = Math.floor(Math.random() * 3000) + 500;

        setTimeout(() => {
            if (Angka <= 1500) {
                resolve("YAAY BERHASIL", url);
            } else {
                reject("ERRROER!!!!!");
            }
        }, delay);
    });
};

fungsiPromise("kUCING")
    .then((data) => {
        console.log("WAW..");
        console.log(data);
        return fungsiPromise("Belalang");
    })
    .then((data) => {
        console.log("WAW..");
        console.log(data);
        return fungsiPromise("Susu");
    })
    .then((data) => {
        console.log("WAW..");
        console.log(data);
    })
    .catch((err) => {
        console.log("AWWW...");
        console.log(err);
    });
