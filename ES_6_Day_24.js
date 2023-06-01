// console.log('hello')
// const stra = 'hello'
// const strb = 'world'

// console.log(stra + " " + strb)

// const newS = `${stra} ${strb}`
// console.log(newS) 
// const newS1 = `${stra} ${30+45}`
// console.log(newS1)



// const arr = ['aman', 'aksh', 'raman', 'singh']
// const[name1, name2, name3, name4] = arr
// // const name1 = arr[0]
// // const name2 = arr[1]
// // const name3 = arr[2]
// // const name4 = arr[3]

// console.log(name1, name2, name3, name4)

//structuring an array 
// const obj = {
//     name:'john',
//     cars:['SVG63', '918'],
//     address:{
//         city:'Delhi',
//         state:'New Delhi'
//     }
// }
// const{name,cars, address} = obj
// console.log(name)
// console.log(cars)
// console.log(address)

// const {cars:pizza} = obj    //changing the name of the variable
// console.log(pizza)
// console.log(cars)

// const {cars:[car1, car2]} = obj
// console.log(car1, car2)

// const {address:{city:personCity}} = obj
// console.log(personCity)

// const {address:{state:Rajya}} = obj
// console.log(Rajya)

// const {cars:PersonCar} = obj
// console.log(PersonCar[1])




// const arr = ['aman', 'aksh', 'raman', 'singh']
// console.log(...arr)

// const arr2 = [...arr,1,2,3]    //new array 1, 2,3 will be pushed
// console.log(arr2)

// const arr3 = arr
// arr[0] = 'CSK'
// console.log(arr3)



// const obj = {
//     name:'john'
// }

// const objNew = {
//     ...obj,
//     age:19
// }
// obj.name = 'Done'
// console.log(objNew)

// const obj = {
//         name:'john',
//         cars:['SVG63', '918'],
//         address:{
//             city:'Delhi',
//             state:'New Delhi',
//         }
//     }

//     const objNew = {
//         ...obj,
//         age:19
//     }

//     obj.name = 'Don'
//     obj.address.city = 'Patna'
//     obj.address.state = 'Bihar'
//     obj.cars = ['Audi', 'Q8']
//     console.log(obj)
//     console.log(objNew)



// const sum = (...rest)=>{   //name o the variable can be anything in this cas e it is rest it can be anything such as param, etc
//     console.log(rest)
// }
// sum(1,2,3,4,5)   //this will give output: an array of 1,2,3,4,5

// const sum = (...params)=>{
//     return params.reduce((prev, sum)=>prev+sum, 0)
// }
// console.log(sum(1,2,3,4,5))