// let name = true;
// let b = 0.1;
// console.log(typeof name);
// console.log(typeof b);

// console.log(true - true); //0, undefined
// console.log(true - false); //1, undefined
// console.log(false - false); //0, undefined


// if(true == 1){
//   console.log("Ali is good");
// }else{
//   console.log|("Heheheeheh")
// }


// if(true === 1){
//   console.log("Ali is good boy");
// }else{
//   console.log("Hjijijijijij")
// }


var a = 20;
{
  var a = 30;
}
let b = a;
// let b = 20;
{
  let b = -20
  console.log(b)
}
console.log(b); // 30. 20
console.log(a); // 20, 20