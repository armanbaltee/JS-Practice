const myObj = {
    name: "Ali",
    agr: 24,
    city: "Lahore",
    education: {
      matric: "XYZ",
      fsc: "XYZ",
      bs: "XYZ"
    }
  }
  
  // clone using spread operator: It will not clone the nested objects
  const myObj1 = {...myObj}
  console.log(myObj)
  myObj1.name = "Ali";
  myObj1.education.fsc = "HI"
  console.log(myObj1)
  console.log(myObj)
  

  // Clone using structuredClone it will clone all the properties of object
  const myObj2 = structuredClone(myObj)
  console.log(myObj2)
  myObj2.name = "Ali";
  myObj2.education.fsc = "HI"
  console.log(myObj2);
  console.log(myObj);

  // clone using the js stringify methods it will also clone all the properties;
  const deepCopy = JSON.parse(JSON.stringify(myObj));
  deepCopy.name = "Ali";
  deepCopy.education.matric = "HE";
  console.log(deepCopy)
  console.log(myObj)
  