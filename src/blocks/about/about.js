const prodBtn = document.querySelectorAll('.about__btn');
const tabsInfo = document.querySelectorAll('.about__info');


for (let item of prodBtn) {

    item.addEventListener('click', function() {
        

        for (let element of tabsInfo) {
            element.classList.remove('about__info--active')
        }

        

        const content = document.querySelector('#' + item.dataset.tab);
        content.classList.add('about__info--active') 
        

        
    })
}

/*for (let item of prodBtn) {

    item.addEventListener('click', function() {

        for (let element of tabsBox) {
            element.classList.remove('about__box--active')
        }

        const cont = document.querySelector('#' + item.dataset.tab);
        cont.classList.add('about__box--active')
    })
}*/

document.addEventListener('DOMContentLoaded', () => {

    let myBtns=document.querySelectorAll('.about__btn');
    myBtns.forEach(function(btn) {

        btn.addEventListener('click', () => {
          myBtns.forEach(b => b.classList.remove('about__btn--active'));
          btn.classList.add('about__btn--active');
        });
 
    });

});