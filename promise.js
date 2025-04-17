const myPromise = new Promise(async (res, rej) => {
 try{
    const url = "API Here";
    const response = await fetch(url);
    const data = await response.json();
    res(data)
 }catch(e){
    rej(e);
 }
}).then((data)=>{
    const name = data.name
    const count = data.count;
    console.log("result: ", data)
    return data
}).then((data)=>{
    const country = data.country;
    console.log("Country: ", country)
})
.catch((e)=>{
    console.log("Error: ",e)
})
