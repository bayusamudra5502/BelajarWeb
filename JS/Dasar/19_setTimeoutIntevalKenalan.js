console.log("Mengembik");

setTimeout(() => {
    console.log("Haii");
}, 3000); // Tunggu dulu 3 detik, baru keluar

console.log("Mooo...");

// ####
const id = setInterval(() => {
    console.log(Math.random());
}, 2000);
// Ini bakal jalanin fungsi yg didalemnya tiap 2 detik

setTimeout(() => {
    clearInterval(id); // Berhentiin
}, 10000);
