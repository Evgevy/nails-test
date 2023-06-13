$(document).ready(function(){
    $(".portfolio__items").slick({
        prevArrow:".portfolio__button-prev",
        nextArrow:".portfolio__button-next",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
        responsive: [{
            breakpoint: 769,
            settings: "unslick",
            
        }]
    })
})




$(document).ready(function(){
    $(".portfolio__prev").click(function(){
        if ($(this).siblings(".portfolio__pull").hasClass("portfolio__pull--open")){
            $(this).siblings(".portfolio__pull").removeClass("portfolio__pull--open")
            $(this).removeClass("portfolio__prev--open")
            
        } else {
            $(".portfolio__pull").removeClass("portfolio__pull--open")
            $(this).siblings(".portfolio__pull").addClass("portfolio__pull--open")
            $(".portfolio__prev").removeClass("portfolio__prev--open")
            $(this).addClass("portfolio__prev--open")
           
        }
        
    })
})



