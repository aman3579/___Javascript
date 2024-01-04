// console.log("hello")
// console.warn("this is warning")
// console.error("this is error")
// console.log(window.innerHeight)
// console.log(window.innerWidth)

// window.alert("this is alert") //use to give alerts
// const name = window.prompt("What is your name?")
// console.log(name)

// const names = ['john','aman','pawan']
// console.log(names)

//json- javascript object notation. This is like a python dictionary in javascript
// const car={
//     name:"audi",
//     model:"5676"
// }
// const obj = {
//     name:'aman',
//     age:20,
//     address:"delhi",
//     greet: function greet(){
//         console.log("Hello !!!")
//     },
// address:{
//     town:"delhi",
//     pin:8788,
//     state:"Delhi"
// },
// newcar:car   //nesting one json to other
// }
// console.log(obj)
// console.log(obj.newcar)
// // obj.greet()
// // console.log(obj.age)
// console.log(obj["address"])

//functions

// function greet(Name, age){
//     console.log("hello!! " + Name 
//     + " your age is "+age)
// }
// const result = greet('john',88)   //ptrint hello
// console.log(result)    //print undefined because function greet doesnot return something, so it will give undefined.

// function func(name,age){
//     console.log(name,age)
// }
// func(12,22)


//function overloading
// greet1('rohan',88) 
// function greet1(Name, age){
//     console.log("hello!! " + Name 
//     + " your age is "+age)
// }
// greet2('aman', 34,'delhi')
// function greet2(Name, age, city){
//     console.log("hello!! " + Name 
//     + " your age is "+age+ " and your city is "+ city)
// }

// greet1('greet2',88) 
// function greet1(Name, age){
//     console.log("hello!! " + Name 
//     + " your age is "+age)
// }
// greet2('greet1', 34)  //here it will not run because we have called a variable before its declaration
// const greet2 = function(Name, age){
//     console.log("hello!! " + Name 
//     + " your age is "+age)
// }

console.log(this)

const obj = {
    name:"aman",
    age:20,
    greet:function(){
        console.log(this)
    }
}
obj.greet()  //here the "this" in the obj json points to the obj not th whole window

  
//no overloading in the above case when two functions are called.
//js takes that function with bigger parameters in the functions


