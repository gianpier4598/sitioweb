(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelectorAll('.nav__close');



    openButton.addEventListener('clic', ()=>{
        menu.classList.add('nav:_link..show');
       
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

})();