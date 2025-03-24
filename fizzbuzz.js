for (let i = 1; i <= 100; i++) {
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }else if(i%3==0){
        console.log("Fizz");
    }else if(i%5==0){
        console.log("Buzz");
    }else{
        console.log(`Remaning Number is: ${i}`);
    }
}


function factorialNumer(Num){
    if(Num === 0 || Num === 1) return 1;

    factNum = 1;
    for (let i = Num; i >= 1; i--) {
        factNum *= i;
    }
    return factNum
}
console.log(factorialNumer(5));


function reverseString(str){
    let reverseStr = "";
    return reverseStr = [...str].reverse().join('');

    for (let i = str.length - 1; i >=0; i--) {
        reverseStr += str[i]
    }
    return reverseStr;
}
console.log(reverseString("Hello"));


function longestWord(str){
    let words = str.split(' ')
    let maxLength = 0

    for (let word of words) {
        if (maxLength < word.length) {
            maxLength = word.length;
        }
    }
    return maxLength;
}

console.log(longestWord("Hello My Name Is Arman"));



function plaindromeChecker(str){

}

let userInput = "NOON noon";
userInput = userInput.toLowerCase();
userInput = userInput.trim();

let reversedInput = '';
let i = userInput.length;
while (i > 0) {
    reversedInput += userInput[i-1];
    i--
    console.log(reversedInput);
    
}
if(userInput === reversedInput){
    console.log("True");
}else{
    console.log("False")
}
