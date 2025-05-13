(function(){
    var a = b = 3;
    var c = 10
  })();
  console.log(typeof a)
  console.log(b)
  console.log(typeof c)

  let arr = [1, 2, 3, 6, 18, 12, 200, 68, 92, 78];
let greaterThanFifty = [];
let lessThanFifty = [];

greaterThanFifty = arr.filter(num => num >= 50);
lessThanFifty = arr.filter(num => num < 50);
console.log(greaterThanFifty); 
console.log(lessThanFifty); 


for(let i = 0; i<arr.length; i++){
  if (arr[i]<50) {
    lessThanFifty.push(arr[i])
  }if(arr[i]>100){
    greaterThanFifty.push(arr[i])
  }
}
console.log(greaterThanFifty); 
console.log(lessThanFifty); 



let arrData = [
  {math: 90},
  {eng: 70},
  {phy: 80},
  {chem: 60}
]
let length = 0
function getValue(arr){
    if(length<arr.length){
      let data = arr[length]
      for(let key in data){
        console.log(`key is ${key} and value is ${data[key]}`)
      }
    }else{
      return
    }
    length++
    getValue(arr)
}
getValue(arrData);


let myArr = ["Hello", "World", "Parallel"];

let myString = ""
let length1 = 0;
function convertToString(arr){
  if(length1<arr.length){
    myString += arr[length1]
  }else{
    return
  }
  length1++
  convertToString(arr)
}
convertToString(myArr)
console.log(myString)


let data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let arrLength = 0;
let evenNumber = []
function getEvenNumber(arr){
  if(arrLength<arr.length){
    if(arr[arrLength]%2===0){
      evenNumber.push(arr[arrLength])
    }
    }else{
      return
    }
    arrLength++
  getEvenNumber(arr)
}
getEvenNumber(data);
console.log(evenNumber)


const emp = [
  {
    name: "Ali",
    department: "HR",
    tasks: [
      { title: "File reports", status: "done" },
      { title: "Recruit staff", status: "pending" },
      { title: "Organize event", status: "done" }
    ]
  },
  {
    name: "Sara",
    department: "IT",
    tasks: [
      { title: "Fix bugs", status: "done" },
      { title: "Deploy app", status: "done" },
      { title: "Write tests", status: "done" },
      { title: "Code review", status: "pending" }
    ]
  },
  {
    name: "John",
    department: "Marketing",
    tasks: [
      { title: "Social media post", status: "pending" },
      { title: "Client email", status: "pending" }
    ]
  }
];

let count = []
emp.map((task)=>task.tasks).map((el)=>{
  let val = 0
  el.map(data=>{
    for(let key in data){
      if(data[key]==="done"){
        val++
        
      }
    }
  })
    count.push(val)
})

console.log(count)
for(let i =0; i<count.length; i++){
  if(count[i]>count[i+1]){
    let index = count.indexOf(count[i])
    let name = emp[index].name
    let deprt = emp[index].department
    console.log(name, deprt)

  }
}



// Get object length

Object.defineProperty(Object.prototype, 'keyCount', {
  get() {
    return Object.keys(this).length;
  },
});

const myObj = {
  name: "Arman",
  age : 20,
  city: "Lahore"
};

console.log(myObj.keyCount);

