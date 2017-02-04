$(document).ready(function(){

    var source   = $("#forgotPasswordPage-template").html();
    var template = Handlebars.compile(source);
    var dataForgotPasswordFormElements = {forgotPasswordFormElement:[
      {formElement: "emailId" , dataType:"text" , label :"Email Id", errorBlank:"Please enter Email Id"},
      {formElement: "oldPassword" , dataType:"password" , label:"Old Password" , errorBlank:"Please enter old password"},
      {formElement: "newPassword" , dataType:"password" , label:"New Password", errorBlank:"Please enter new password"},
      {formElement: "confirmPassword" , dataType:"password" , label:"Confirm Password", errorBlank:"Please confirm new password"},
      {formElement: "hintQuestion" , dataType:"text" , label:"Hint Question", errorBlank:"Please enter hint question"},
      {formElement: "hintAnswer" , dataType:"text" , label:"Hint Answer",errorBlank:"Please enter hint answer"},
    ]};
   var newPasswordValue="";
  $("#forgotPasswordPage-placeholder").html(template(dataForgotPasswordFormElements));
  $( "#forgotPassword .newField input " ).each(function( index ) {
      var message="";
      $(this).keyup(function(){
            var value = $(this).val();
           //console.log($(this).attr('id') +'---'+value);
            switch($(this).attr('id')){
              case 'emailId'         : var emailPattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i ;
                                       value == "" ? message = 'Please enter Email Id' :  value.match(emailPattern)? message = '': message = 'Please enter a valid Email Id';
                                       break;
              case 'oldPassword'     : value == "" ? message = 'Please enter old password' : message = '';
                                       break;
              case 'newPassword'     : var passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/ ;
                                       newPasswordValue = value;
                                       value == "" ? message = 'Please enter new password' : value.match(passwordPattern)? message = '' : message = 'Minimum 8 characters including alphabets numbers and special character';
                                       if($('#confirmPassword').val() != ''){
                                        $('#confirmPassword').val() != newPasswordValue ? $('#confirmPassword').next().removeClass('hideError').html('Passwords do not match'): $('#confirmPassword').next().addClass('hideError').html('') ;
                                       }
                                       break;
              case 'confirmPassword' : value == "" ? message = 'Please confirm new password' : value == newPasswordValue ? message = '' : message = 'Passwords do not match';
                                       break;
              case 'hintQuestion'    : value == "" ? message = 'Please enter hint question' : message = '';
                                       break;
              case 'hintAnswer'      : value == "" ? message = 'Please enter hint answer' : message = '';
                                       break;
              default                : message = "";
                                       break;
                               
            }
            $(this).next().removeClass('hideError').html(message);
        });
  });

   $('#actionReset').click(function(){
     var checkRedirect = checkForm("forgotPassword");
      // checkRedirect ? (alert('filled'), resetFormForgotPassword() ) : '' ;
      if (checkRedirect)
      {
        
         var requestPassword = resetForm("forgotPassword");
         alert("Password for email id -  "+requestPassword.emailId+" changed successfully");
      }
      else{
        //alert('unsuccessful Change Password');
      }
    });

  });