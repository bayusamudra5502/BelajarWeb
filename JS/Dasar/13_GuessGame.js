let maxs = parseInt(prompt("Masukkan nilai maks"));

while(!maxs){
    maxs = parseInt(prompt("[INPUT SALAH] Masukkan nilai maks"));
}
let num = Math.floor(Math.random() * maxs) + 1;

// console.log(num)

let cnt = 0;
let guess = parseInt(prompt("masukan tebakanmu"));
while(guess != num){
    if(guess > num){
        guess = parseInt(prompt("Bilangan Terlalu besar, masukan tebakanmu"))
    }else{
        guess = parseInt(prompt("Bilangan Terlalu kecil, masukan tebakanmu"))
    }
}