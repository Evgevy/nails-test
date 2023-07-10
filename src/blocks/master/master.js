new Swiper ('.master__slider', {
    direction: getDirection(),
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        }
    }
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 768 ? 'horizontal' : 'vertical';

    return direction;
}


/*breakpoints: {
        
    320: {
        direction: "horizontal",
        slidesPerView: 1,
      
    },
    
    /*1000: {
        direction: "horizontal",
        slidesPerView: 1,
       
    },*/