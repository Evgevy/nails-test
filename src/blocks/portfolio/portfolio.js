$(document).ready(function(){
    $(".portfolio__items").slick({
        prevArrow:".portfolio__button-prev",
        nextArrow:".portfolio__button-next",
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
    })
})

