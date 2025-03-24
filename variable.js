let a = 10;
function b(){
    let a = 20;
    console.log(a);
    
}
// b();
if(a===10){
    let a= 20;
    console.log(a);
}
console.log(a);

// var a = 20;

function b(){
    var a = 10;
    console.log(a);
}
// if(a===20){
//     var a = 10;
//     console.log(a);
// }
b();
console.log(a);



const stdData={
    name: "Ali",
    rollNo: 20,
    course: "Web Dev",
    batchId: 20
}

const stdData1 = stdData;
console.log(stdData);
console.log(stdData1);
console.log(stdData);
console.log(stdData1);
const stdData2 = Object.assign({},stdData);
stdData1.name = "Arman";
console.log(stdData);
console.log(stdData2);


const myArray = [1,2,[3,4,[5,6]],7,[8,9],0]
console.log(myArray.flat(Infinity));


let firstName = "Waqas";
let lastName = firstName;
lastName = "Jan"

console.log(firstName);
console.log(lastName);


let c = 10;
let d = c;
c = 20;
console.log(c); // Outputs: 20
console.log(d); // Outputs: 10


let typeValue = null;
console.log(typeof typeValue);

function correctType(value){
    if(value === null){
        return 'null'
    }
    return typeof value
}

console.log(correctType(null));
console.log(correctType(undefined));


