
const myPrmise = new Promise((resolve, reject) => {
    let time = 3000;
    let speed;
    let distance = 20000;
    if (time && distance) {
        speed = distance / time;
        resolve(speed);
    }else{
      reject('ERROR: Data is not given');
    }
}).then((speed) => {
    console.log(`The speed is ${speed} m/s`);
    time = 6600;
    distance = 50000;
    speed = distance / time;
    return speed
}).then((speed)=>{
  console.log(`The speed is ${speed} m/s`);
}).catch((e)=>{
  console.log(e)
})
