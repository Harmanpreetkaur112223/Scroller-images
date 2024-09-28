let rightBtn = document.querySelector(".right-btn")
let leftBtn = document.querySelector(".left-btn")

let image = document.querySelectorAll("img")
let container = document.querySelector(".img-container")
let scroller = document.querySelector(".scroller")
let images = [
    {src:"./images/thaar1.avif"},{src:"./images/thaar2.webp"}
]

rightBtn.addEventListener('click',function(){
image[0].style.left = "-100%";
image[0].style.transitionDuration = ' 4s'
image[1].style.transitionDuration = ' 4s'
image[1].style.left = "0"
scroller.style.left = "50%"
scroller.style.transition = 'all 4s'

})
leftBtn.addEventListener('click',function(){
    image[0].style.left = "0%";
image[0].style.transitionDuration = ' 4s'
image[1].style.transitionDuration = ' 4s'
image[1].style.left = "100%"
scroller.style.left = "0%"
scroller.style.transition = 'all 4s'
})
















// console.log(image)
// let previous = 0;
// let idx = 0;
// function handleImage(){
//  previous += 40
// image.style.transform = `rotateY(${previous}deg)`
// if(idx){}
// console.log(previous)
// }

// function handleDoubleClick(){
//     console.log("first")
// }
// rightBtn.addEventListener('dblclick',handleDoubleClick)
// rightBtn.addEventListener("click",()=>handleImage())

