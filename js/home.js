let sectionTop = $("#home").offset().top
$(window).scroll(function(){
    let scrollTop = $(window).scrollTop()

    if(scrollTop > sectionTop){
       $(".navbar").addClass("bg-white");
       $("navbar-brand").removeClass("text-black");
       $("navbar-brand").addClass("text-white");
    }
    else{
        $(".navbar").removeClass("bg-white");
        
        
    }

})

var btn =document.querySelector(".rows-btn")
var ul = document.querySelector(".grid-rows-part")
console.log(btn)
console.log(ul)

btn.addEventListener("click",function(){
    btn.classList.add("active")
    ul.classList.add("visible")
    btn1.classList.remove("active")
    ul1.classList.remove("visible")

})
var btn1 =document.querySelector(".columns-btn")
var ul1 = document.querySelector(".grid-columns-part")
btn1.addEventListener("click",function(){
    btn1.classList.add("active")
    ul1.classList.add("visible")
    btn.classList.remove("active")
    ul.classList.remove("visible")

})

var nav = document.querySelector(".nav-link")
console.log(nav)
nav.addEventListener("click",function(){
    nav.classList.add("active")
})