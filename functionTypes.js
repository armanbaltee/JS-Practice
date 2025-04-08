// Simple functions

function hello(val){
    console.log("Arman Ali", val);
}
const z = 10; 
hello(z);

// Function Expression

const name = function(name){
    console.log("My name is: ",name);
}
var fname = "Arman Ali"
name(fname)

// Arrow Function

let xyz = (name)=>{
    for(let i=0; i<6; i++){
        console.log("Value of i is: ", i, name);
        if (i=== 2) {
            break
        }
    }
}
xyz(fname)

// Recursive Function

function factorialNum(num){
    if (num <= 1) return 1;
    let factNum =  num * factorialNum(num - 1);
    return factNum
}
console.log(factorialNum(5))

function checkLogIn(username){
    if(username === undefined) return "Please log in"
    else{
        return `${username} login successfully`
    }
}
let username = "Arman"
console.log(checkLogIn(username));

function nyNum(num2){
    var num1 = 10;
    var result = num1 + num2
    return result
}
let num3  = 2
if (num3 == 2) {
    var num4 = 10
    var num5 = num4 + num3
    console.log(num5); 
}
console.log(nyNum(3));
console.log(num1);

// Self Invoke Function(Immediately Invoked Function Expression) IIFE

(function HelloWorld() {
    console.log("HeloWorld");
})();
(function World() {
    console.log("HeloWorld");
})()

// Callback Function

let XYZ = function(num, callback) {
    console.log(num)
    callback()
}
function callback(){
    console.log("Hello Arman!");
}

XYZ(4, callback)
