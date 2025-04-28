
// const myPrmise = new Promise((resolve, reject) => {
//     let time = 3000;
//     let speed;
//     let distance = 20000;
//     if (time && distance) {
//         speed = distance / time;
//         resolve(speed);
//     }else{
//       reject('ERROR: Data is not given');
//     }
// }).then((speed) => {
//     console.log(`The speed is ${speed} m/s`);
//     time = 6600;
//     distance = 50000;
//     speed = distance / time;
//     return speed
// }).then((speed)=>{
//   console.log(`The speed is ${speed} m/s`);
// }).catch((e)=>{
//   console.log(e)
// })

// Assignment No 2

// let myArr = [1,2,3,4,5];
// let myArr1 = [6,13,8,43,20];
// let sumOfArr = [];
// for(let i=0; i<myArr.length; i++){
//   sumOfArr[sumOfArr.length] = myArr[i]+myArr1[i]
//   // sumOfArr.push(myArr[i]+ myArr1[i])
//   for(let j = 0; j<=sumOfArr.length; j++){
//     if (sumOfArr[j]> sumOfArr[j+1]) {
//       let temp = sumOfArr[j];
//       sumOfArr[j] = sumOfArr[j+1];
//       sumOfArr[j+1] = temp
//     }
//   }
// }
// console.log(sumOfArr)

// let myArr = [1,2,3,4,5];
// let myArr1 = [6,13,8,43,20];
// let sumOfArr = [];
// for(let i=0; i<myArr.length; i++){
//   sumOfArr[sumOfArr.length] = myArr[i]+myArr1[i]
// }
// console.log(sumOfArr)

// let myArr2 = [1,2,3,4];
// let myArr3 = [30,23,34];
// sortArr = [...myArr2, ...myArr3]
// for(let i = 0; i<sortArr.length; i++){
//   for (let j = 0; j < sortArr.length; j++) {
//     if (sortArr[j]>sortArr[j+1]) {
//       let temp = sortArr[j];
//       sortArr[j] = sortArr[j+1];
//       sortArr[j+1] = temp;
//     }
    
//   }
// }
// console.log(sortArr)

// let a = [1,2,3,2,4,2,2,3]
// let b = [4,5,6,2,3,1]
// let newArr= a;
// for(let i=0;i<b.length;i++){
//   newArr[newArr.length] = b[i]
// }
// console.log(newArr)



let a = [2,3,1,5,11,20];
let b = [6,4,9,7];
let length = (a.length>b.length)? a.length:b.length
console.log(length)

let c = [];

for(let i = 0; i< length; i++){
  if(length === a.length){
  c[c.length] = a[i]+b[i];
    for(let x=b.length; x<length;x++){
      c[c.length] = a[x]
    }
  }
}



// for(let i = 0; i< a.length; i++){
//   c[c.length] = a[i]+b[i];
// }


// for(let i = 0; i<c.length; i++){
//   for(let j=0; j<c.length; j++){
//     if(c[j]>c[j+1]){
//       // [c[j], c[j+1]] = [c[j+1], c[j]]
      
//       let temp = c[j]
//       c[j]= c[j+1];
//       c[j+1] = temp
//     }
//   }
// }

console.log(c)