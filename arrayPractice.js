let arr = ['a', 'b', 'u', 'b','c', 'o', 'd', 'd','d','f'];

let sortedArr = [];
for(let i=0; i<arr.length; i++){
  sortedArr[sortedArr.length] = arr[i]
}

for(let i =0; i<sortedArr.length; i++){
  for(let j= 0; j<sortedArr.length; j++){
  if (sortedArr[j]>sortedArr[j+1]) {
    let temp = sortedArr[j];
    sortedArr[j]=sortedArr[j+1];
    sortedArr[j+1]=temp
  }
  }
}

function checkArrSorted(arr){
  for(let i = 0; i<arr.length; i++){
    if(arr[i]<arr[i+1]){
      return false;
    }else{
      return true
    }
  }
}

console.log(checkArrSorted(sortedArr))
console.log(arr)
console.log(sortedArr)


// Map Method

let arr1 = [1,2,3,4].map((el)=>el*2)
console.log(arr1)

let arr4 = ["arman", "ali"].map((el)=>el.toUpperCase())
console.log(arr4)

let data =[{ name: 'Alice', age: 25 }].map((el)=>el.name)
console.log(data)

let arr2 = [5,6,7,8].map((el)=>el*el)
console.log(arr2)

let arr3 = ['a', 'b'].map((el,index)=>`${index}: ${el}`)
console.log(arr3)


// Filter Method

let myArr = [1,2,3,4,5,6,7,8,9,10].filter((el)=>{
  if(el%2===0){
    return el
  }
})
console.log(myArr)

let myArr1 = ["arman", "ali", "hi", "hello", "world"].filter((el)=>{
  if(el.length<=3){
    return el
  }
})
console.log(myArr1)

let myArr2 = [
  { name: 'Ali', age: 25 },
  { name: 'Hassan', age: 10 },
  { name: 'Hussain', age: 20 },
  { name: 'Zain ul Abideen', age: 30 }
  ].filter((el)=>{
    if(el.age>=18){
      return el
    }
  })
console.log(myArr2)  


let myArr3 = [0,null, undefined, false, "hello", true, 1].filter((el)=>{
  if(el) return el
})  
console.log(myArr3)

let myArr4 = ["hicat", "he","cat", "meawoocat", "maitpin"].filter((el)=>{
  if(el.includes('cat')) return el
}) 
console.log(myArr4)  
  
  
  