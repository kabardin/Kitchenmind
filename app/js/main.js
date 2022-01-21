$(function () {

  $('[data-fancybox]').fancybox({
    youtube: {
      controls: 0,
      showinfo: 0
    }
  });

  $('.auth__login').click(function (e) {
    e.preventDefault();
    $('.auth__konto').fadeIn(600);
  });

  $('.auth__cross').click(function () {
    $('.auth__konto').fadeOut(600);
  });

  $('.registrierung__login').click(function (e) {
    e.preventDefault();
    $('.registrierung__konto').fadeIn(600);
  });

  $('.registrierung__cross').click(function () {
    $('.registrierung__konto').fadeOut(600);
  });

  // логика открытия меню по клику на кнопку бургер
  $('.header__btn-open').click(function () {
    // находим кнопку бургер и добавляем класс для того чтобы скрыть ее
    $('.header__btn-open').addClass('header__btn-open--hidden');
    // находим список и убираем класс который скрывает его
    $('.header__menu').removeClass('header__menu--hidden');
    // находим кнопку закрыть и убираем класс который скрывал ее
    $('.header__btn-close').removeClass('header__btn-close--hidden');
  });

  // логика закрытия бургер меню по клику на кнопку-иконку крестик
  $('.header__btn-close').click(function () {
    // нахоидим кнопку закрыть и добавляем для класс который скрывает ее
    $('.header__btn-close').addClass('header__btn-close--hidden');
    // находим меню и добавляем класс который скрывает его 
    $('.header__menu').addClass('header__menu--hidden');
    // находим кнопку бургера и убираем класс который скрывает его
    $('.header__btn-open').removeClass('header__btn-open--hidden');
  });






  // $(document).ready(function() {
  //     $('.burger__btn').click(function() {
  //         $(this).toggleClass('active');
  //         $('.header__menu').slideToggle(200);
  //     })
  // });
  // 
  // 
  // $(document).ready(function() {
  //     $('.header__burger').click(function(event) {
  //         $('.header__burger,.header__menu').toggleClass('active');
  //     });
  // });

  // const burgerBtn = document.querySelector('.burger__btn')
  // const burgerMenu = document.querySelector('.menu')
  // const body = document.body

  // burgerBtn.addEventListener('click', burgerMenuHandler)

  // function burgerMenuHandler(e) {
  //     burgerBtn.classList.toggle('active')
  //     burgerMenu.classList.toggle('active')
  //     body.classList.toggle('scrollLock')
  // }

  // function closeBurgerMenu(e) {
  //     if (e.target !== burgerMenu) {
  //         burgerMenu.classList.remove('active')
  //     }
  // }

  // burgerMenu.addEventListener('click', e => {
  //     if (e.target.classList.contains('menu__link')) {
  //         burgerMenuHandler()

  //     }
  // })
});
