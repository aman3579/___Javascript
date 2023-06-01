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

// console.log(this)

// const obj = {
//     name:'aman',
//     greet:function(){
//         console.log(this)
// }
// }

// obj.greet()
// const a = {
//     name:'john',
//     age:30,
//     isMarried: false,
//     greet: function(){
//         console.log("hello")
//     }
// }

// const b = {}

// const reduceFunction = function(previousValue, currentItem){
//     console.log(previousValue, currentItem)
//     previousValue[currentItem] = a[currentItem]
//     return previousValue
// }

// Object.keys(a).reduce(reduceFunction,b)
// console.log(b)






// const fibonacci = [0,1]
// for(let i=1; i<10; i++){
//     fibonacci.push(fibonacci[i] + fibonacci[i-1])
// }
// console.log(fibonacci)


//finding an item
// const arr = [{name:'john', age:30}, {name:'rohan', age:30}, {name:'akash',age:40}]

// for(let i=0; i<arr.length; i++){
//     const item = arr[i]
//     if(item.name == 'john'){
//         console.log('jane found at index ' +i)
//     break  
// }
// }

// const findin = function(item, index){
// if(item.name == 'akash'){
//     return true
// }
// }

// const ele = arr.find(findin)
// console.log(ele)
 
//filter function : returnc value when there are two or more conditions are staisfied
// const filterfn = function(item ,index){
//     if(item.age>25){
//         return true
//     }
// }

// const res  = arr.filter(filterfn)
// console.log(res)

// const arr = [22,33,55,66]

// arr.splice(1,0,100)

// arr.splice(1,0,200)

// arr.splice(1,0,300)

// arr.splice(1,0,400)
// arr.splice(1,0,900)

// console.log(arr)
// arr.splice(1,1)
// console.log(arr)

// console.log(arr.splice(1,2))
// console.log(arr)

//ES->6
// const greet = function(){
//     console.log('hello')
// }

// const arrowGreet = ()=>{
//     console.log("hello")
// }

// arrowGreet()

// const arr = [{name:'john', age:30}, {name:'rohan', age:30}, {name:'akash',age:40}]
// const newArr = arr.filter(item=>item.age>25)  //here we are using arrow function for defining a conditin
// console.log(newArr)



// const car1 = (brand,name)=>{
//     this.name = name
//     this.brand = brand
// }

// const car2 = function(brand,name){
//     this.name = name
//     this.brand = brand
// }
// // const car = new car1('porsche', '991 gt continental')
// // console.log(car)

// console.log(car1.prototype)
// console.log(car2.prototype)

// const obj = {
//     name: 'john',
//     greetNormal: function(){
//         console.log(this)    //this points to global object here
//     },
//     greetArrow :()=>{
//         console.log(this)  //points to global window object i.e chrome browser window
//     }
// }
// obj.greetNormal()
// obj.greetArrow()


const greet = function(name,age){
    console.log("Hello" +name+ "your age is " + age)
}

greet("john",30)




