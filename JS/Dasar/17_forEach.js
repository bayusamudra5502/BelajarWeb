const arr = [1, 2, 3, 4];

arr.forEach(function (num, index, array) {
    console.log(num * index * array[index]);
});

// Edit arr jadi kuadrat,
// Tidak disarakan. Lebih baik pakai map
arr.forEach((num, i, arr) => (arr[i] = num * num));
