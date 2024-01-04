// class Car{
//     constructor(){
//         console.log("Constructor was called!")
//     }
// }

// const car1 = new Car()

// var car2 = new Car()

// let car3 = new Car()


// class Car{
//     constructor(brand,name){
//         this.name = name
//         this.brand = brand
//     }
// }
// const car1 = new Car('Mercedes','S600')
// console.log(car1)


class Car{
    age=30
    adult=true
    constructor(brand,name){
        this.name = name
        this.brand = brand
        this.age=22   //we can modify variable inside constructor
    }
    greet(){
        console.log("hello "  +this.name + " model is " + this.brand)
    }
}
const car1 = new Car('Mercedes','S600')
car1.greet()

