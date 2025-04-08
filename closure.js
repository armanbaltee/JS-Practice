function outer() {
    let outerVariable = "I'm from outer!";
    const myObj = {
        name: "Ali",
        age: 20
    }
    
    function inner() {
        console.log(outerVariable);  // inner function can access outerVariable
        console.log(myObj); // inner function can access myObj
        
    }

    return inner;
}

const closureExample = outer();  // outer() returns inner
// closureExample();  // Output: "I'm from outer!"  //{ name: 'Ali', age: 20 }



function name(){
    console.log("Hello");
}
console.log(name());
name()