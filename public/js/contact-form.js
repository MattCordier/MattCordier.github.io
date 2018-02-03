$('.js-lesson-form').find('button:submit').on('click', function(e){
  e.preventDefault();

  let contact = {};
  contact.name = $('#name').val();
  contact.email = $('#email').val();

  $.ajax({
    method: 'POST',
    url: 'https://formsp.io/matt@learntogroove.com', 
    data: contact,
    dataType: 'json',
    success: function (){
      window.location.assign('http://localhost:4000/free-lesson-thank-you.html')
    },
    error: function (){
      $('.free-lesson__p--limited').replaceWith( '<p class="free-lesson__p--error">There was an error submitting your form. <br>Please refresh the page and try again. <br>Or contact us directly: matt@learntogroove.com</p>' );
    }
  });
})