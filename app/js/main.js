$(function(){

    $('.slider').slick({
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="../img/arrow-prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="../img/arrow-next.svg"></button>',
        autoplay: false,
        autoplaySpeed: 3000,
    })

    $('.burger').on('click', function () {
        $('.menu__list').slideToggle()
    })

});
