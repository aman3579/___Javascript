// const heading = document.querySelector('h1')
// console.log(heading.innerHTML)   //it gives the inner part that is text of the heading 
// console.log(heading.textContent)   //prints out the text part of the heading in the console


// const body = document.querySelector('body')
// console.log(body)

// console.log(body.innerHTML)
// console.log(heading.innerHTM
// heading.innerHTML = "Using heading.innerHTML we can write stuff inside the heading of the document"

// heading.innerHTML =  '<span style="color:red"> Hello </span> world!!! '

// const content = document.querySelector('p')
// content.style = ' background:olive; padding:100px; color:blueviolet '

//we can change the styles of the body using following
// body.style = ' margin:0px; padding:0px; box-sizing:border-box'



// const log = ()=>{
//     console.log('i am the log')
// }
// setInterval(log, 10)   //it will print the output of the log function severl times


// const date = new Date()
// console.log(date)


// let count =0;
// const log = () =>{
//     heading.innerHTML = count++
// }
// setInterval(log, 1000)   
//  it will print count value from 1 to .... evry second in the heading id.



// setInterval (() =>{
//     var randomColor = Math.floor(Math.random()*16777215).toString(16);
    
//     body.style =`
//     background:#${randomColor};
//     `
// },1000)

// const todos = ['task1', 'task2', 'task3', 'task4']
// const li = document.createElement('li')
// const li = document.createElement('li')

// const li = document.createElement('li')

// const li = document.createElement('li')

// li.innerHTML = 'task4'
// console.log(li)
// li.innerHTML = 'task2'
// console.log(li)

// const li = document.createElement('li')
// const textInsideli = document.createTextNode('task4')   //greates a text
// li.appendChild(textInsideli)  //will append the text task4 in the li
// console.log(textInsideli)  //will print the #text
// console.log(li)  //will print <li>task4</li>


const todos = ['task1', 'task2', 'task3', 'task4']
const list = document.querySelector('ul')

// todos.forEach((todo)=>{
// const li = document.createElement('li')
// li.innerHTML = todo
// console.log(li)
// list.appendChild(li)
// })

// const handleClick = ()=>{
// console.log('Clicked')
// }
// const input = document.querySelector('input')
// const handleClick = ()=>{
//     console.log(input.value)   //it will give the value which we will give as input
//     const li = document.createElement('li')
//     li.innerHTML = input.value
//     console.log(li)
//     list.appendChild(li)
// }

const input = document.querySelector('input')
const handleClick = ()=>{
    const data = input.value
    if(data ===''){
    return alert('Plz enter a value')}
    console.log(input.value)
    const li = document.createElement('li')
    li.innerHTML = input.value
    console.log(li)
    list.appendChild(li)
}




