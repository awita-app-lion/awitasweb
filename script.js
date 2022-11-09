const nav = document.querySelector(".nav");
const text = document.querySelector(".school")

window.addEventListener("scroll", function(){
    nav.classList.toggle("scrollingActive", scrollY>15)
})

