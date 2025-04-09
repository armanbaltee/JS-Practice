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
closureExample();  // Output: "I'm from outer!"  //{ name: 'Ali', age: 20 }



function name(){
    console.log("Hello");
}
console.log(name());
name()

let myName = "ARMAN ALI"

function country(){
    let countryName = "Pakistan";

    function Province() {
        let state = "Gilgit Baltistan";
        console.log(`my name is ${myName} and I'm from ${countryName} and state is ${state}`);
        
        function cityName() {
            let myCityName = 'Ghursay';
            console.log(`my name is ${myName} and I'm from ${countryName} and state is ${state} and city is ${myCityName}`);
        }
        cityName()
    }
    Province()
}

country()

function outerFun(a) {
    const funName1 = "Im from Outer function"

    function middleFun(b) {
        const funName2 = "Im from middle Function"
        function innerFun(c) {
            const funName3 = "Im from inner Function"
            console.log(funName1);
            console.log(a);
            console.log(funName2);
            console.log(b);
            console.log(funName3);
            console.log(c);
            return console.log("Finished inner function")
        }
        innerFun("One")
        return console.log("Finished Middle Function");
        
    }
    middleFun("Two")
    return console.log("Finished Outer Function");
    
}
outerFun("Three")
