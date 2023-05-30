// class car{
//     constructor(){
//    console.log("Constructor was called!")}

//    move(){
//    console.log("Car is moving")}
// }

// const car1 = new car()
// const car2 = new car()
// console.log(car1)

// class car{
//     age =30
//     adult = true
//         constructor(name, model){
//        console.log(this)

//         this.model = model
//         this.name =name
//         this.age =22
//     }
//     greet(){
//     console.log("hello " +this.name+ " your age is " +this.age)}
//        move(){
//        console.log("Car is moving")}
//     }
    
//     const car1 = new car('Audi', 'S300')
//     console.log(car1)
//     car1.greet()
//     car1.move()


//creating an object using factory funtion
// function Bike(){
//     console.log(this)
// }
// const bike1 = new Bike()
// console.log(bike1)
 
// function Bike(name, model){
//     this.name = name
//     this.model = model
// }
// const bike1 = new Bike('KTM', 'DUKE450')
// console.log(bike1)

// const obj = {
//     name:'john'
//     age:'30'
// }

// const obj2 = obj
// obj.name = 'doe'
// obj.height = '23'
// console.log(obj2)

// const arr = [1,2,3,4,5,6,7,8,9,10]
// arr.push(11)
// arr.pop()
// console.log(arr)
// console.log(arr.length)

//forEch, map, filter, find, reduce, findIndex
// for(let i=0; i<10; i++){
//     console.log(arr[i])}

// const arr = ['john', 'raman', 'singh', 'ujjawal']

// const callbackFunc = function(item, index){
//     console.log(item, index)

// arr.forEach(callbackFunc)

//this can be used directly. it is other method
// arr.forEach(function(item, index){
//     console.log(item,index)
// })

// arr.forEach(function(potato, indexyyyy){
//     console.log(potato,indexyyyy)
// })

// const arr = [1,2,3,4,5,6,7,8,9,10]
const newArr = []

// for(let i=0; i<arr.length; i++){
//     newArr.push(arr[i]*9)
// }

// console.log(newArr)

// arr.forEach(function(item){
//     newArr.push(item*19)
// })
// console.log(newArr)

// const newArr2 = arr.map(function(item){
//     return item*19
// })

// console.log(newArr2)

// let res = 0
// for(let i=0; i<arr.length; i++){
//     res +=arr[i]
// }
// console.log(res)


//reduce function
// const reduceFunction = function(previousValue, currentValue){
//     return previousValue+currentValue
// }

// const res2 = arr.reduce(reduceFunction, 0)
// console.log(res2)


var arr = [1,2,3,4,5,6,7,8,9]
var total = 0

console.log(arr)

total = arr.reduce(total,num)=>{
    return total + num}
    
console.log(total)



