// Todo App

let todo = [];

let command = prompt("Tuliskan Perintah").toLowerCase();
while(command !== "quit"){
    if(command === "new"){
        let perintah = prompt("Data yang ingin dimasukkan : ");
        todo.push(perintah);
        console.log(`${perintah} berhasil dimasukkan ke dalam data`);
    }else if(command === "list") {
        console.log("************")
        for(let i = 0; i < todo.length; i++){
            console.log(`${i+1}: ${todo[i]}`);
        }
        console.log("************")
    }else if(command === "delete"){
        let id = parseInt(prompt("Urutan data yang ingin dihapus : ")) - 1;
        if(0 <= id && id < todo.length){
            let str = todo[id];
            todo.splice(id,1);

            console.log(`Data ke-${id+1} dengan isi ${str} berhasil dihapus`);
        }else{
            console.log("ERROR! Masukkan id yang benar");
        }
    }

    command = prompt("Tuliskan Perintah").toLowerCase();
}