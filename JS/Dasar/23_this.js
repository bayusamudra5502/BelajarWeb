var bunny = {
    name: "Usagi",
    tasks: ["transform", "eat cake", "blow kisses"],
    showTasks() {
        console.log(this);
        this.tasks.forEach((task) => {
            console.log(this.name + " wants to " + task);
        });
    },
    showTasks2: () => {
        this.tasks.forEach((task) => {
            console.log(this.name + " wants to " + task);
        });
    },
    showTasks3() {
        this.tasks.forEach(function (task) {
            console.log(this.name + " wants to " + task);
        });
    },
};

bunny.showTasks();
bunny.showTasks2();
bunny.showTasks3();

// Klo pusing wkkwkwkw
const objek = {
    nama: "Bayu",
};

function cetakNama(x) {
    console.log(this.nama);
}

cetakNama.bind(objek)(0);
cetakNama.call(objek, 0, 1, 2); // Versi baris 95 lebih pendek
cetakNama.apply(objek, [0, 1, 2]);
