function nextNum(num){
  return num + 1;
}
console.log(nextNum(4))



function areaOfTriangle(base, height){
  return (base * height) / 2;
}

console.log(areaOfTriangle(2,4))


function ageToDays(year){
  return year * 365;
}
console.log(ageToDays(25))

function cubes(a) {
	return a ** 3
}
console.log(cubes(3))


let array = [1,2,3,4,5]
function firstEle(arr){
  return arr[0];
}

console.log(firstEle(array))

function power(vol, curr){
  return vol * curr
}
console.log(power(20,10))


function hourToSecond(hr){
  return hr *60 * 60;
}
console.log(hourToSecond(2))


function edgeOftriangle(side1, side2){
    return (side1 + side2) -1;
  }
console.log(edgeOftriangle(20,20))  





// Leet code problem



let createCounter = function(n) {
    
  return function() {
    console.log(n++)
  };
};

let callFun = createCounter(10)

callFun()


let compose = function(functions) {
  
  return function(x) {
    let result = x
      for(let i=functions.length; i>0; i--){
        result = functions[i-1](result)
      }
        console.log(result)
  }
};

const fn = compose([x => 10 * x, x => 10 * x, x => 10 * x])

fn(1)

