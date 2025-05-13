// Login and SignUp


  let userData = []
// let userEntireData = [
//   { name: 'Waqas', email: 'waqas@gmail.com', password: 'waqas123123' },
//   {
//     name: 'Mubashir',
//     email: 'mubahsirgmail.com',
//     password: 'mubashirs123123'
//   },
//   { name: 'Ali', email: 'ali@gmail.com', password: 'ali123123' },
//   {
//     name: 'hassan',
//     email: 'hassangmail.com',
//     password: 'hassan123123'
//   },
//   { name: 'usama', email: 'usama@gmail.com', password: 'usama123123' },
//   {
//     name: 'tayyab',
//     email: 'tayyabgmail.com',
//     password: 'tayyab123123'
//   }
// ]
function signUp (na, em,pas){
  let user = {name : na, email : em, password : pas}
  userData.push(user)
  // if(user.email === '@'){
  //   console.log('valide')
  // }
  // let check = userData[0].email
  for (let i = 0; i < userData.length; i++)
  {
  if(!userData[i].email.includes('@')){
    // console.log(userData[i].name+"email not valid")
    }
    //else {
    //   console.log(userData[i].name+"email not valid")
    // }
  }
  // console.log(userData)
  // let newuserData = userData.filter(() =>{
  //   return userData[0].email
  //   if(userData[0].email == '@'){
  //   console.log("email valid")
  //   }else {
  //     console.log("email not valid")
  //   }
  // })
}
// function checkEmail(arr){
// let a= arr.filter((ele)=>{
//     if(!ele.email.includes('@')){
//       return ele.name;
//       // return `${ele.name} email is not valid`;
//     }
//   })
//   console.log(a);
// }
// checkEmail(userEntireData);
let name = 'Waqas';
let email = 'waqas@gmail.com';
let password = 'waqas123123'
signUp(name,email,password)
let name1 = 'Mubashir';
let email1 = 'mubahsirgmail.com';
let password1 = 'mubashirs123123'
signUp(name1,email1,password1)
let name2 = 'Ali';
let email2 = 'ali@gmail.com';
let password2 = 'ali123123'
signUp(name2,email2,password2)
let name3 = 'hassan';
let email3 = 'hassangmail.com';
let password3 = 'hassan123123'
signUp(name3,email3,password3)
let name4 = 'usama';
let email4 = 'usama@gmail.com';
let password4 = 'usama123123'
signUp(name4,email4,password4)
let name5 = 'tayyab';
let email5 = 'tayyabgmail.com';
let password5 = 'tayyab123123'
signUp(name5,email5,password5)
// console.log(userData)
function logIn(logInEmail, logInPassword){
  if(!logInEmail){
      console.log("Email must be required")
    }else if(!logInPassword){
      console.log("Password must be required")
    }
  else{
    let msg = ""
    let myData = userData.filter((el)=>{
    if(el.email===logInEmail){
      if(el.password === logInPassword){
      msg = "Login Successfull"
      return el
      }
    }
  })
  console.log(msg)
  console.log(myData)
  }
}
let enterEmail = 'waqas@gmail.com'
let enterPassword  = 'waqas123123'
logIn(enterEmail, enterPassword);