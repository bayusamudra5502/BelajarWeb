const kirimPesan = (pesan, waktu, selanjutnya = undefined) => {
    setTimeout(() => {
        console.log(pesan);
        selanjutnya && selanjutnya();
    }, waktu);
};

kirimPesan("Haii", 1000, () => {
    kirimPesan("Aku", 1000, () => {
        kirimPesan("Nyobain", 1000, () => {
            kirimPesan("Callback", 1000);
        });
    });
});
