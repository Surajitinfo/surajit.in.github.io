$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $('.navbar-collapse').toggleClass('position');
        $('.navbar-toggler span:nth-child(3)').toggleClass('d-none');
        $('.navbar-toggler span:nth-child(1)').toggleClass('close-top');
        $('.navbar-toggler span:nth-child(2)').toggleClass('close-bottom');
    });


    $(window).scroll(function(){
        if($(window).scrollTop() > 50){
            $('.navbar').addClass('bg-color');
            $('.navbar-brand img').addClass('invart');
            $('.top-arrow').show();
        }else{
            $('.navbar').removeClass('bg-color');
            $('.navbar-brand img').removeClass('invart');
            $('.top-arrow').hide();
        }
    });


    $('.icon-list').mouseenter(function(){
        $(this).addClass('active').siblings().removeClass("active");
    });

    // aos animation

    AOS.init({
        once: true,
    });

    // isotop

    var $grid = $('.portfolio').isotope({
        // options
    });
    // filter items on button click
    $('.list').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    $('.list li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    // counter

    $('.counter').counterUp({
            delay: 5,
            time: 1000
        });

});
    

    // preloader ;
    
    var loader = document.getElementById("preloader");

    window.addEventListener("load", function(){
        loader.style.display = 'none';
    });



    // Swiper slider

    var swiper = new Swiper(".swiper", {
        direction: 'horizontal',
        grabCursor: true,
        loop: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });

    // card hover
    VanillaTilt.init(document.querySelectorAll(".services-box"), {
    max: 25,
    speed: 500,
    glare: true,
    "max-glare": 0.1,
}); 
VanillaTilt.init(document.querySelectorAll(".self-photo"), {
    max: 10,
    speed: 500,
}); 

// typed js

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

