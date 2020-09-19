let burger = document.querySelector('.burg');
let menu = document.querySelector('.menu');
let burg = document.querySelector('.burg');


burger.addEventListener('click', ()=>{
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
        burger.style.opacity = '0.7';
    }else{
        menu.classList.add('active');
        burger.style.opacity = '1';

    }
})

