let menu = document.querySelector("#menu-icon")
let navList = document.querySelector(".navlist")

menu.addEventListener("click", (e)=> {
    menu.classList.toggle("bx-x")  
    navList.classList.toggle("open")  
})