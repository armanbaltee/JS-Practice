let num = -1;
if(num>0){
  console.log("+ve number", num);
}else if(num == 0){
  console.log("number is ", num);
}
else{
  console.log("-ve number", num);
}


let userData = [
  {name: "ali", age: 20, isActive: true},
  {name: "arman", age: 24, isActive: false},
  {name: "hassan", age: 17, isActive: true}
  ]
  
  for(let i = 0; i<=userData.length-1; i++){
    if(userData[i].age>18){
      if(userData[i].isActive === true){
        console.log(userData[i])
      }
    }
  }
  
  console.log(userData[0].name)
  
  
  if(false){
    console.log("ali")
  }else{
    console.log("ji")
  }


    let marks = 80;
    if (marks >= 90) {
        console.log("Grade A");
    } else if (marks >= 80) {
        console.log("Grade B");
    } else if (marks >= 70) {
        console.log("Grade C");
    } else if (marks >= 60) {
        console.log("Grade D");
    } else {
        console.log("Fail");
    }

    let year = 1900;

if (year % 400 === 0) {
    console.log("Leap year");
} else if (year % 100 === 0) {
    console.log("Not a leap year");
} else if (year % 4 === 0) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}

let amount = 99;
if(amount<100){
    console.log("Minimum withdrawal is Rs.100");
}else if(amount %100 !== 0){
    console.log("Amount must be in multiples of 100");
}else{
    console.log("Please collect your cash of Rs.", amount);
}

let password1 = "wdfvc1234d?>";

// Check length first
if (password1.length >= 8) {

    // Check for number using regex
    let hasNumber = /\d/.test(password1);

    // Check for special character using regex
    let hasSpecialChar = /[!@#\$%\^&\*]/.test(password1);

    if (hasNumber && hasSpecialChar) {
        console.log("Strong Password");
    } else {
        console.log("Not Strong Password");
    }

} else {
    console.log("Password must be 8 char");
}

let username = "Ali123";
let password = "Ali@2023";

if(username && username.length>=5){
    let hasNumber = /\d/.test(password);
    let hasSpecialChar = /[!@#\$%\^&\*]/.test(password);
    if(password.length>=8 && hasNumber && hasSpecialChar){
        console.log("Login Successful");
    }else{
        console.log("password must be 8 char")
    }
}else{
    console.log("username or password can't be empty")
}

let num1 = 10;
let num2 = 0;
let opreation = 'divide';
if(opreation === 'add'){
    console.log(num1+num2)
}else if(opreation === 'subtract'){
    console.log(num1-num2)
}else if(opreation === 'multiply'){
    console.log(num1*num2)
}else if(opreation === 'divide'){
    if (num2===0) {
        console.log("Cannot divide")

    } else {
        console.log(num1/num2)
    }
}else{
    console.log("Invalid Opreater")
}

let arr = [3, 56, 23, 89, 12];

if (arr.length === 0) {
    console.log("Array is empty");
} else {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }
    console.log("The largest number is:", max);
}

let arr2 = [1, 2, 2, 3, 4, 4, 5];
let myArr1 = new Set(arr2)
console.log(myArr1)

let arr1 = [12, 4, 8, 1, 9, 5];

// Sort the array in ascending order
let sortedArr = arr1.sort((a, b) => a - b);

console.log(sortedArr);  // Output: [1, 4, 5, 8, 9, 12]
