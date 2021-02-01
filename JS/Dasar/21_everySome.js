const score = [100, 99, 98, 75, 60, 100, 50, 50];

console.log(score.every((nilai) => nilai >= 75)); // false
console.log(score.some((nilai) => nilai >= 75)); // true

/**
 * every -> pake operator and
 * some -> pake operator or
 **/
