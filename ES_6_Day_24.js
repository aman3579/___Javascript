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
const obj = {
    name:'john',
    cars:['SVG63', '918'],
    address:{
        city:'Delhi',
        state:'New Delhi'
    }
}
// const{name,cars, address} = obj
// console.log(name)
// console.log(cars)
// console.log(address)

// const {cars:pizza} = obj    //changing the name of the variable
// console.log(pizza)
// console.log(cars)

const {cars:[car1, car2]} = obj
console.log(car1, car2)

const {address:{city:personCity}} = obj
console.log(personCity)

const {address:{state:Rajya}} = obj
console.log(Rajya)
