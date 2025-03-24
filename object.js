
const mySym = Symbol('key1')

const myObj = {
    name: "Arman",
    age: 23,
    [mySym]: "Hello",
    email: "arman@google.com",
    isLoggedIn: false,
}

console.log(myObj.name);
console.log(myObj["name"]);
console.log(myObj[mySym]);
console.log(myObj);

