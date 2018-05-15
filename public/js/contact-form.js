$(function () {
  $('.js-success-message').hide()

  $('.js-lesson-form').find('button:submit').on('click', function(e){
    e.preventDefault();

    var contact = {
      name  : $('#name').val(), 
      email : $('#email').val()
    };

    var $form = $(this).parents('.js-lesson-form');
    var parsley = $form.parsley();
    var isValidated = parsley.validate();

    if (isValidated) {
      var cachedBtnText = $(this).text();
      var $self = $(this);

      $(this).prop('disabled', true);

      $(this).html('Submitting… <i class="fa fa-spinner fa-spin"></i>');

      $.ajax({
        method: 'POST',
        url: 'https://formspree.io/matt@learntogroove.com', 
        data: contact,
        dataType: 'json',
        success: function (){
          $('.free-lesson-form__div').fadeOut(300)
          $('.js-success-message').delay(300).fadeIn(500)
        },
        error: function (){
          $('.free-lesson__p--limited').replaceWith( '<p class="free-lesson__p--error">Derp! Looks like something went wrong. <br>Please refresh the page and try again. <br>Or contact us directly: matt@learntogroove.com</p>' );
        }
      });//end ajax 
    }//if valid
  });//on click
});  


