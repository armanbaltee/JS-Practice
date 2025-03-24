function addNumber(num1, num2){
    return num1 + num2;
}

console.log(addNumber(2,5));

function logginUserMesg(username){
    if (username === undefined) {
        return console.log("please login");
    }else{
    return `${username} just Loggin`
    }
}

console.log(logginUserMesg())


function factorialNumber(num){
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorialNumber(5));