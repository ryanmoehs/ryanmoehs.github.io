$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});

// Contact Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbw8G6EBTWo-irXJDwoLDVkWH505OMo-9xpAMMe3fymHswYrGjFq1OYGRX5cyuRXUPB8/exec'
  const form = document.forms['ryanmoehs-contact-form'];
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then((response) => {
        // munculin alert
        alert("Thank you! Your feedback or message has been sent.");
        // reset form
        form.reset();
        console.log('Success!', response);
      })
      .catch(error => console.error('Error!', error.message))
  })