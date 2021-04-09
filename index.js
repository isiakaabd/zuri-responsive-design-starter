let menuOpen =false
const newSlide =()=>{
    const burger =document.querySelector(".burger")
    const navLinks =document.getElementsByClassName("nav-links")[0]


burger.addEventListener("click", ()=>{
if(!menuOpen){
    burger.classList.add("open")
    navLinks.classList.toggle("active") 
    menuOpen=true
}else{
    navLinks.classList.toggle("active") 
burger.classList.remove("open");
menuOpen = false
}
})



}
newSlide()