const body = document.querySelector('body')
const textbox = document.querySelector('h1 span')
const heading = document.querySelector('h1')

// let count =0;
// body.addEventListener('click', ()=>{
//     console.log("you clicked")     
//     textbox.innerText = ++count;
// })
//whenever we will click on browser body it will record and it will 
//print the no of clicks on the console


// let count =0;
// heading.addEventListener('click', (event)=>{   //it will print value of count on every click
//     console.log(event)
//     console.log("You clicked on h1")
//     textbox.innerText = count++;
// })

// body.addEventListener('keydown', (event)=>{   //it will print every letter which we will press from keyboard
//     console.log(event.key)
// })

// body.addEventListener('mousemove',(event)=>{
// console.log({
//     x: event.clientX,
//     y: event.clientY
// })})    //it will give x and y coordinats of the mouse cliicks

const input = document.querySelector('input')

input.addEventListener('focusin', (e)=>{
    console.log('input is focused')
})

input.addEventListener('focusout', (e)=>{
    console.log('input is  out of focus')
})

// const window = document.querySelector('window')
// window.addEventListener('focus', (e)=>{
//     console.log('user changed the tab')})

// window.addEventListener('focus', (e)=>{
//     console.log('tab change detected')})    //WILL PRINT THE MESSAGE WHEN TAB IS 
    
    window.addEventListener('blur', (e)=>{
        console.log('tab change detected')})    //blur event listenenr can also detect detect change tab
