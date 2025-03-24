const myArr = [1,2,3,4,5]
myArr.push(6)
myArr.push(7)

myArr.pop()

myArr.unshift(6)
myArr.shift()

myArr.includes(9)
console.log(myArr);
console.log(myArr.includes(2));
console.log(myArr.indexOf(2));
console.log(myArr.indexOf(7));

console.log("A " + myArr);

console.log(myArr.slice(1,3));

console.log("B " + myArr);

console.log(myArr.splice(1,3));

console.log("C " + myArr);

let socre1 = 1;
let socre2 = 2;
let socre3 = 3;
let socre4 = 4;
let socre5 = 5;
let myObj = {
    name: "Ali",
    age: 24
}

console.log(Array.isArray("Arman Ali"));
console.log(Array.from("ArmanAli"));
console.log(Array.from(myObj));


console.log(Array.of(socre1, socre2, socre3, socre4, socre5))

const myArrays = [1,2,[3,4],5,[6,[7,8],9],0]
const arr1 = [1,2,3];
const arr2 = [4,5,6]

console.log(myArrays.flat(Infinity));

console.log(...arr1, ...arr2);

let newArr = [10,20,30,40];
let result = newArr.map(String);
console.log(result);

let arrs = [5,15,25,35,45,55,65];
if(arrs[arrs.length-1]>30){
    arrs.splice(arrs.length-1,1,40)
}
arrs.splice(2,4)
console.log(arrs);

