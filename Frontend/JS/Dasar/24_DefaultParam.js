function ayam(x) {
    x = typeof x !== "undefined" ? x : 0;
    return x * x;
}

function ayamModern(x = 0) {
    return x * x;
}

console.log(ayam());
console.log(ayamModern());
