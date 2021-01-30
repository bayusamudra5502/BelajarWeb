// Comparison
console.log(1 > 3)
console.log(1 < 3)
console.log(1 <= 3)
console.log(3 >= 3)
console.log(3 == 3)

console.log()
console.log("A" > "a")
console.log("BSEM" > "AS")

console.log()
console.log(1 == "1")
console.log(0 == false) // true
console.log(null == undefined) // true
console.log(1 === "1")
console.log(1 != "1")
console.log(1 !== "1")

/* 
    Semua ini adalah setara false
    - false
    - 0
    - "" (Empty Sttring)
    - null
    - undefined
    - NaN (not a number)

    sisanya bernilai benar, termasuk Infinity

*/

// Cek NaN
console.log();
console.log(isNaN(0/0));
console.log(isFinite(12/0));


// AND
console.log()
console.log(true && true); // Short Circuit
console.log(true & true); // eager eval.

console.log()
console.log(true || true); // Short Circuit
console.log(true | true); // eager eval.

console.log()
console.log(!true);
console.log(! false);

// Bitwise Operator
console.log()
console.log(12 & 3);
console.log(12 | 3);
console.log(12 ^ 3);
console.log(~12); // Not