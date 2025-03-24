const orignal = {
    name: "Ali",
    detail: {
        age: 30,
        city: "Lahore"
    },
}

const shallowCopy = Object.assign({}, orignal)
shallowCopy.detail.age = 40;

console.log(orignal);
console.log(shallowCopy);



const orignal1 = {
    name: "Ali",
    age:30,
}

const shallowCopy1 = Object.assign({},orignal1)
shallowCopy.age = 40;

console.log(orignal1);
console.log(shallowCopy1);

const original1 = {
    name: "Ali",
    age: 30,
};

const shallowCopy2 = original1
shallowCopy1.age = 40;

console.log(original1);
console.log(shallowCopy2);

const value = Object.values(original1);
const key = Object.keys(original1);
console.log(value);
console.log(key);