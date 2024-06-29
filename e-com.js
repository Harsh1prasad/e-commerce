const opt = document.querySelectorAll(".option")
// console.log(opt)
const english = document.querySelector("#english")
// console.log(english)
opt.forEach((value) => {
    value.addEventListener("click", () => {
        // console.log(value.value)
        english.innerText = value.value
    })
})

const searchicon = document.getElementsByClassName("search-icon")
// console.log(searchicon)

const searchbar = document.getElementsByClassName("search-bar")

// console.log(searchbar)


searchicon[0].addEventListener("click", () => {
    console.log("hello")
    searchbar[0].style.display = "block"
    // searchbar.focus();
})
let like = document.querySelectorAll(".like")
console.log(like)

like.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        ele.classList.toggle("liked")
    })
})

let timer = () => {
    const days = document.getElementsByClassName("day-container")[0]

    const hour = document.getElementsByClassName("hour-container")[0]

    const minute = document.getElementsByClassName("minute-container")[0]

    const second = document.getElementsByClassName("second-container")[0]

    const now = new Date();
    const enddate = new Date("30 July 2024 11:00 PM")

    const diff = (enddate - now) / 1000


    let nodays = Math.floor(diff / 3600 / 24);
    let nohours = Math.floor((diff % (3600 * 24)) / 3600);
    let nominutes = Math.floor((diff % 3600) / 60);
    let noseconds = Math.floor(diff % 60);


    days.innerText = nodays
    hour.innerText = nohours
    minute.innerText = nominutes
    second.innerText = noseconds

}


setInterval(() => {
    timer()
}, 1000)


const stars = document.querySelectorAll(".star")
console.log(stars)

stars.forEach((ele,ind)=>{
    ele.addEventListener("click",()=>{
        for(let i=ind;i>=0;i--){
            stars[i].style.color = "orange"
        }
    })
})
