(function(){

    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');

    var menu = Menu({
        container: '.header_nav',
        toogleBtn: '.header__btnMenu',
        widthView: 1024
    })

    var carouselQuotes = new Carousel({
        container: '.quote_slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
})()
