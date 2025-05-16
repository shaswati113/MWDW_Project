function clearerror(id) {
  document.getElementById(id).getElementsByClassName('formerror')[0].innerHTML = '';
}

function seterror(id, error) {
    //set error inside tag of id
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}
 

 $(document).ready(function() {
  $('.btn').click(function(e) {
    e.preventDefault();

    var name = $('.name').val().trim();
    var email = $('.email').val().trim();
    var message = $('.message').val().trim();

     clearerror("name");
    clearerror("email");
    clearerror("message");



    if (name == '') {
      seterror("name", "*Please enter your name");
      return false;
    }
    
       if (email == '') {
      seterror("email", "*Please enter your email");
      return false;
    }

     var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      seterror("email", "Invalid email format");
      return false;
    }


    if (message == '') {
      seterror("message", "*Please enter your message");
      return false;
    }

    // Form submission logic here
    console.log('Form submitted successfully!');
    $('form')[0].reset();
  });

 $('.name, .email, .message').focus(function() {
  var parentId = $(this).closest('.inputBox').attr('id');
  clearerror(parentId);
});



});



  