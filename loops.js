let a = 0;
do {
  a++;
  // console.log(a);
} while (a < 10);

let b = 0;
while (b < 10) {
  // console.log(`value of b is: ${b}`);
  b++;
}
// console.log(typeof a);

const myObj = {
  name: "Arman",
  age: 24,
  education: "BSCS",
  city: "Ghursay",
  language: "Balti",
};

for (keys in myObj) {
  // console.log(`${keys}: ${myObj[keys]}`);
  // console.log(typeof myObj[keys]);
}

let myArr = [1, 2, 3, 4, 5];
for (index in myArr) {
  // console.log(typeof myArr[index]);
  // console.log(index);
  //console.log(typeof index);
}

let myName = "ARMAN ALI";
let myNameArr = ["A", "R", "M", "A", "N"];
for (char of myName) {
  //console.log(typeof char);
}
for (chars in myNameArr) {
  // console.log(typeof myNameArr);
}

myNameArr.forEach((element, index) =>{
//   console.log(`current index is ${index}: value is: ${element}`)
// console.log(typeof element)
});

let marks = [34,54,23,67,34];
let max = marks.reduce((accumulator, currentValue)=>{
    return (currentValue > accumulator)? currentValue : accumulator;
}, marks[0]);
// console.log(max);
