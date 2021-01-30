// For lop
for (let i = 0; i <= 10; i++){
    console.log(i);
}

console.log();

// While loop
let num = 0;
while(num <= 10){
    if(num % 2 == 0){
        num += 1;
        continue;
    }
    
    if(num == 9) break;
    
    console.log(num);
    num += 1;
}

// for of -> loop through value iretable object
console.log();
const arr = [12,17,19,20,12,56];
for(let x of arr){
    console.log(`Angkamu adalah ${x}`);
}

// for in -> Ngasih key dari objek
const obj = {
    ayam : 12,
    kucing : "makan",
    belalang : true
}

// console.log("ayam" in obj);
for(let x in obj){
    console.log(x);
}

// Ini bakal ngasih index
for(let x in arr){
    console.log(x);
}
