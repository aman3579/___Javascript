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
const car={
    name:"audi",
    model:"5676"
}
const obj = {
    name:'aman',
    age:20,
    address:"delhi",
    greet: function greet(){
        console.log("Hello !!!")
    },
address:{
    town:"delhi",
    pin:8788,
    state:"Delhi"
},
newcar:car   //nesting one json to other
}
console.log(obj)
console.log(obj.newcar)
// obj.greet()
// console.log(obj.age)
console.log(obj["address"])


//functions
function greet(){
    console.log("hello")
}
greet()

