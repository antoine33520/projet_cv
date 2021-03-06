;
(function ($) {
  'use strict'

  /* ----------------------------------------------------
                  Menu scroll js
  ---------------------------------------------------- */

  var NavOffsetTop = $('.header_area').offset().top

  function stickyHeader() {
    if ($('.header_area').length) {
      var strickyScrollPos = NavOffsetTop
      if ($(window).scrollTop() > strickyScrollPos) {
        $('.header_area').removeClass('fadeIn animated')
        $('.header_area').addClass('stricky-fixed fadeInDown animated')
      } else if ($(window).scrollTop() <= strickyScrollPos) {
        $('.header_area').removeClass('stricky-fixed fadeInDown animated')
        $('.header_area').addClass('slideIn animated')
      }
    }
  }

  // instance of fuction while Window Scroll event
  $(window).on('scroll', function () {
    stickyHeader()
  })

  /* ----------------------------------------------------
                      Skill js
  ---------------------------------------------------- */
  $('.skill_item_inner').each(function () {
    $(this).waypoint(function () {
      var progressBar = $('.progress-bar')
      progressBar.each(function (indx) {
        $(this).css('width', $(this).attr('aria-valuenow') + '%')
      })
    }, {
      triggerOnce: true,
      offset: 'bottom-in-view'

    })
  })

  /* ----------------------------------------------------
                  portfolio_isotope
  ---------------------------------------------------- */
  function OurGallery() {
    if ($('.portfolio_area').length) {
      // Activate isotope in container
      $('.portfolio_list_inner').imagesLoaded(function () {
        $('.portfolio_list_inner').isotope({
          itemSelector: '.col-md-4'
        })
      })
      // Add isotope click function
      $('.porfolio_menu ul li').on('click', function () {
        $('.porfolio_menu ul li').removeClass('active')
        $(this).addClass('active')

        var selector = $(this).attr('data-filter')
        $('.portfolio_list_inner').isotope({
          filter: selector,
          animationOptions: {
            duration: 450,
            easing: 'linear',
            queue: false
          }
        })
        return false
      })
    }
  }
  OurGallery()

  $(`.header_area .nav.navbar-nav li`).click(function (e) {
    e.preventDefault() // prevent the link from being followed
    $('.header_area .nav.navbar-nav li').removeClass('active')
    $(this).addClass('active')
  })

  $('.header_area .nav.navbar-nav li a[href^="#"]:not([href="#"])').on('click', function (event) {
    var $anchor = $(this)
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 70
    }, 1500)
    event.preventDefault()
  })

  function bodyScrollAnimation() {
    var scrollAnimate = $('body').data('scroll-animation')
    if (scrollAnimate === true) {
      new WOW({
        mobile: false
      }).init()
    }
  }
  bodyScrollAnimation()

  // preloader js
  $(window).load(function () { // makes sure the whole site is loaded
    $('#preloader_spinner').fadeOut() // will first fade out the loading animation
    $('#preloader').delay(150).fadeOut('slow') // will fade out the white DIV that covers the website.
    $('body').delay(150).css({
      'overflow': 'visible'
    })
  })
})(jQuery)
