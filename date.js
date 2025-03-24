let date = new Date();
console.log(date.toDateString());
console.log(date.toString());
console.log(typeof date);
console.log(date.toLocaleString());


const personOne = Math.floor(Date.now()/1000);
const personTwo = Math.floor(Date.now()/1000);

if(personOne>personTwo){
    console.log(`${personOne} perosnOne is win`);
}else{
    console.log(`${personTwo} personTwo is win`);
}


const newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());

