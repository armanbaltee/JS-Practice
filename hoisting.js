console.log(name); // undefined
var name = 'Arman'; // assign
console.log(name); // Arman., console.

console.log(age); // Cannot access age before initialization
let age = 24
console.log(age);

console.log(lname); // Cannot access lname before initialization
const lname = 'Ali'
console.log(lname);

function outer() {
    let outerVar = "I'm from the outer function";
    
    function inner() {
        console.log(outerVar);  // Inner function has access to outerVar
    }
    
    return inner;
}

const closureFunc = outer();  // `outer` has been executed, but `inner` still has access to `outerVar`
closureFunc();  // "I'm from the outer function"


function outer() {
    let outerVar = "I'm from outer scope!";
    
    function inner() {
        console.log(outerVar);  // Can access outerVar because inner is lexically scoped within outer
    }
    
    inner();
}

outer();  // "I'm from outer scope!"
