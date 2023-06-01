// const a = {
//     name: 'aman',
//     age:30,
//     isMarried:fasle,
//     greet: function(){
// console.log("hello")
//     }
// }

// console.log(Object.keys(a))
// console.log(Object.values(a))

// console.log('hi')

const a = {
    name:'john',
    age:30,
    isMarried: false,
    greet: function(){
        console.log("hello")
    }
}

const b = {}

const reduceFunction = function(previousValue, currentItem){
    console.log(previousItem, currentItem)
    previousValue[currentItem] = a[currentItem]
    return previousValue
}

Object.keys(a).reduce(reduceFunction,a)
console.log(b)
