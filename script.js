// // // console.log(console)
// // // console.log("hello")
// // // console.warn("hello")
// // // console.error("hello")

// // console.log(window.innerHeight)
// // console.log(window.innerWidth)
// // window.alert('Hello world')

// // const name = window.prompt("What is your name?")
// // console.log(name)

// const name = ['John', 'Aman', 'Ajay'];
// console.log(name)

// const obj1 = {
//     name1: 'Aman',
//     age: 30,
//     isMarried : false,
//     greet:function(){
//         console.log('Hello!!!!!!')
//     },
//     address:{
//         city:'Delhi',
//         pin: 110067,
//         state: 'Delhi'},
//         hobbies:['football', 'Cricket'],
//         obj1: obj1,
// }
// obj1.greet()

// console.log(obj1.address)
// console.log(obj1)

//function

// function greet(){
//     console.log('Welcome')
// }
// const result = greet()
// console.log(result)

// const var1 = undefined
// console.log(var1)
// let result
// console.log(result)

// function about(name, age){
//     console.log('hello ' +name+' your age is ' +age)
// }
// // console.log(about('aman',20))
// about('aman',20)
// about() 

// function about(name, age, city){
//     console.log('hello' +name+ 'your age is ' +age+ 'your city is '+city)
// }

// about('aman',30, 'delhi')
// about('aman',20)


// const greet = function(name, age){
//     console.log('hello ' +name+' your age is ' +age)
// }


// function greet1(name, age){
//     console.log('hello ' +name+' your age is ' +age)
// }
// greet('aman',20)
// greet('rohan',30)

// greet1('greet2',30)
// function greet1(name, age){
// console.log('helo' +name 'your age is ' +age)
// }

// greet2('greet1', 44)
// const greet2 =function(name, age){
//     console.log('helo' +name 'your age is ' +age)
// }

// console.log(this)

console.log(this)

const obj = {
    name:'aman',
    greet:function(){
        console.log(this)
}
}

obj.greet()