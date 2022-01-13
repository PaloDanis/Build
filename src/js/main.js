$(document).ready(function(){
  
  // Napojenie knihovne wow.js - animácie
  new WOW().init();

  var button = $('#button');
    var modal = $('#modal');
    var close = $('#close');
    
    button.on('click', function(){
        modal.addClass('modal_active');

    });

    close.on('click', function(){
        modal.removeClass('modal_active');

    });
});
// Napojenie formularov
$('#brief-form').validate({
  rules:{
    username: "required",
    phone: "required",
    email:{
      required: true,
      email: true
    },
  },
  messages:{
    username: "Uveďte, prosím Vaše meno",
    phone: "Doplňte Vaše telefónne číslo",
    email: "Uveďte, prosím Váš email",
  }
});

// Napojenie slidrov
    $('.slider').slick({
        slidesToShow: 3,
        prevArrow: $('.arrows_left'),
        nextArrow: $('.arrows_right'),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            }
        ]    
    });