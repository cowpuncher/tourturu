document.addEventListener('DOMContentLoaded', function() {

    const swiper = new Swiper('.swiper', {
        slidesPerView: 4,
        spaceBetween: 20,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    });

    const swiperOne = new Swiper('.swiper-one', {
        slidesPerView: 1,
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

    });
    const swiperThree = new Swiper('.swiper-three', {
        slidesPerView: 3,
        spaceBetween: 20,
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

    });

    $( "#accordion" ).accordion({
        collapsible: true,
        heightStyle: 'content',
        header: '.accordion-header'
    });

    /* POPUPS  */
    let openPopup = (popup) => {
        document.getElementById(popup).classList.add('open');
    }
    let closePopup = () => {
        let popup = document.querySelectorAll('.popup');
        for(var i = 0; i < popup.length; i++) {
            popup[i].classList.remove('open');
        }
    }
    
    let reviewBtn = document.querySelectorAll('.reviewBtn');
    let overlayPopup = document.querySelectorAll('.overlay');
    let closeBtnPopup = document.querySelectorAll('.closePopup');
    
    if(overlayPopup) {
        for(var i = 0; i < overlayPopup.length; i++) {
            overlayPopup[i].addEventListener('click', e => {
                closePopup();
            });
        }
    }
    if(closeBtnPopup) {
        for(var i = 0; i < closeBtnPopup.length; i++) {
            closeBtnPopup[i].addEventListener('click', e => {
                closePopup();
            });
        }
    }

    if(reviewBtn) {
        for(var i = 0; i < reviewBtn.length; i++) {
            reviewBtn[i].addEventListener('click', e => {
                openPopup('popupReview');
            });
        }
    }

    let burgerMenu = document.querySelector('.burgerMenu');
    burgerMenu.addEventListener('click', e => {
        openPopup('mainPopupMenu')
    })

    let searchBth = document.querySelector('.searchBth');
    let searchClose = document.querySelector('.searchClose');
    searchBth.addEventListener('click', e =>  document.querySelector('.searchPopup').classList.add('open'));
    searchClose.addEventListener('click', e =>  document.querySelector('.searchPopup').classList.remove('open'));

    /* POPUPS END */

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });


});