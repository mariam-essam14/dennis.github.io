new WOW().init();

let sectionTop = $("#home").offset().top
$(window).scroll(function(){
    let scrollTop = $(window).scrollTop()

    if(scrollTop > sectionTop){
       $(".navbar").addClass("bg-black")
    //    $(".nav-link:hover::after").css({"opacity":"0"})
    }
    else{
        $(".navbar").removeClass("bg-black")
        // $(".nav-link:hover::after").css({"opacity":"1"})
    }

})

var nav = document.querySelector(".nav-link")
nav.addEventListener("click",function(){
    nav.classList.add("active")
})


