$(function () {
  $('.js-success-message').hide()

  $('.js-lesson-form').find('button:submit').on('click', function(e){
    e.preventDefault();

    let contact = {};
    contact.name = $('#name').val(); 
    contact.email = $('#email').val();
    if (! contact.name && ! contact.email) {
      $('.name-error-message, .email-error-message').toggleClass('hidden')
      return false
    }
    else if (! contact.name ){
      $('.name-error-message').removeClass('hidden')
      return false
    }
    else if (! contact.email) {
      $('.email-error-message').removeClass('hidden')
      return false
    }

    $.ajax({
      method: 'POST',
      url: 'https://formspree.io/matt@learntogroove.com', 
      data: contact,
      dataType: 'json',
      success: function (){
        $('.free-lesson-form__div').fadeOut(300)
        $('.js-success-message').delay(300).fadeIn(500)
        // window.location.assign('http://localhost:4000/free-lesson-thank-you.html')
      },
      error: function (rsp){
        console.log(rsp)
        $('.free-lesson__p--limited').replaceWith( '<p class="free-lesson__p--error">There was an error submitting your form. <br>Please refresh the page and try again. <br>Or contact us directly: matt@learntogroove.com</p>' );
      }
    });
  })
});