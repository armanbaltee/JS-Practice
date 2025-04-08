const globalVariable = "I'm global";

function outer() {
    const outerVariable = "I'm from outer";
    
    function inner() {
        const innerVariable = "I'm from inner"
        console.log(globalVariable);  // Lexical scope: can access globalVariable
        console.log(outerVariable);   // Lexical scope: can access outerVariable
        console.log(innerVariable);  // Lexical scope: can access it own variables also.
    }
    
    inner();
}

outer();
// Output:
// I'm global
// I'm from outer
// I'm from inner


let a = 10;

function outer() {
    let b = 20;

    function inner() {
        let a = 30;  // This shadows the outer a
        console.log(a);  // Output: 30, inner's a is used due to shadowing
        console.log(b);  // Output: 20, inner can access outer's b (lexical scope)
        
        function nested() {
            let c = 40;
            console.log(c);  // Output: 40, nested can access c
            console.log(b);  // Output: 20, nested can access b (lexical scope)
        }
        
        nested();
    }

    inner();
}

outer();
console.log(a);  // Output: 10, global a remains unchanged
