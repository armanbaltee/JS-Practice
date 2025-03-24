
const myObj = {
    name: "Maza"
}

let a = 1 + '2' + NaN;
let b = 1 + 2 + '2';
let c = 1 + '1';
let d = '1' + (2+2);

console.log(a);

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));

let x = String(null)
console.log(x);
console.log(typeof x);

let y = String(false)
console.log(y);
console.log(typeof y);

let z = String(undefined)
console.log(z);
console.log(typeof z);
