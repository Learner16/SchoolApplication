$(document).ready(function(){

    var source   = $("#loginPage-template").html();
    var template = Handlebars.compile(source);
    var dataloginFormElements = {loginFormElement:[
      {formElement: "username" , dataType:"text" , label :"Username", error:"Please enter username"},
      {formElement: "password" , dataType:"password" , label:"Password", error:"Please enter password"},
      {formElement: "schoolCode" , dataType:"text" , label:"School Code", error:"Please enter school code"}      
    ]};
    $("#loginPage-placeholder").html(template(dataloginFormElements));
    $('#login .newField input').each(function(index){
      $(this).on('keyup' , function(){
        $(this).val() == '' ? $(this).next().removeClass('hideError') : $(this).next().addClass('hideError');
      });
    });
    $('#goButton').click(function(){  
       var checkRedirect = checkForm("login");
       //checkRedirect ? ($("#goButton > a").attr('href', '#home'), resetForm() ).click() : $("#goButton > a").attr('href', '#') ;
      if (checkRedirect)
      {
       
       
        var requestLogin = resetForm("login");
        // $("#goButton ").attr('href','#home').click('trigger');
        window.location.href = "#landing";
        // $.ajax
        // ({
        //     type: "POST",
        //     url: "http://localhost/test.json",
        //     dataType: 'json',
        //     async: false,
        //     //json object to sent to the authentication url
        //     data: requestLogin,
        //     //data: '{"userName": "' + userName + '", "password" : "' + password + '"}',
        //     success: function (){
        //         alert('success');
        //         window.location.href = "#home";
        //     }
        // });
        
        //alert(requestLogin.username +' Logged In Successfully ');
      }
      else
        $("#goButton ").attr('href', '#');
    });

    $('#forgotPasswordLink').click(function(){
        resetForm("login");
    });
  });