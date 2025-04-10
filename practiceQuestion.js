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