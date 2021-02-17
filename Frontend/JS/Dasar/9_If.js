console.log("Halo");

let rand = Math.random();

if (rand < 0.3) {
    console.log("Kambing");
    console.log(rand);
} else if (rand < 0.5) {
    console.log("Kalah");
    console.log(rand);
} else {
    console.log("Menang");
    console.log(rand);
}

// Operator ternary if
let kambing = (10 > 18) ? 'yes' : 'no';

// Versi Switch
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
