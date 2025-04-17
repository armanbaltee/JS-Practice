// console.log(`My Type: ${getCorrectDataType("")} JS Type: ${typeof("")}`);
// console.log(`My Type: ${getCorrectDataType({})} JS Type: ${typeof({})}`);
// console.log(`My Type: ${getCorrectDataType(true)} JS Type: ${typeof(true)}`);
// console.log(`My Type: ${getCorrectDataType(12)} JS Type: ${typeof(12)}`);
// console.log(`My Type: ${getCorrectDataType('a')} JS Type: ${typeof('a')}`);
// console.log(`My Type: ${getCorrectDataType([])} JS Type: ${typeof([])}`);
// console.log(`My Type: ${getCorrectDataType(102.3)} JS Type: ${typeof(102.3)}`);
// console.log(`My Type: ${getCorrectDataType(NaN)} JS Type: ${typeof(NaN)}`);
// console.log(`My Type: ${getCorrectDataType(undefined)} JS Type: ${typeof(undefined)}`);

console.log(`My Type: ${getCorrectDataType(null)} JS Type: ${typeof(null)}`);

function getCorrectDataType(value){
    if(value===null){
     return "null"
    }
  return typeof(value)
}


function typeOf(value){
  if(value==1){
    return "Number";
  }
  if(value===null){
    return "Object";
  }
}

(function iife(){}());

iife();