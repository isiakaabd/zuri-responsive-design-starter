const newSlide =()=>{
    const burger =document.querySelector(".burger")
    const navLinks =document.getElementsByClassName("nav-links")[0]


burger.addEventListener("click",()=>{
    console.log(navLinks)
    navLinks.classList.toggle("active") 
})



}
newSlide()