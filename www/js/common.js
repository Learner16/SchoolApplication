/* Shared functions for login and forgotPassword */
var checkForm = function(pageName){
    var returnRedirect = true;
        $( "#"+pageName+" .newField input").each(function( index ) {
        if($(this).val() == "") 
        { 
          $(this).next().removeClass('hideError');
          returnRedirect = false;
        }
        else
        {
            if(pageName == "forgotPassword"){
                if($(this).next().text() == ''){
                    $(this).next().addClass('hideError');
                }
                else{
                     $(this).next().removeClass('hideError');
                    returnRedirect = false;
                }
            }
            else
           $(this).next().addClass('hideError');
        }
        });
        return returnRedirect;
};

var resetForm = function(pageName){
    var tempData = {};
    $("#"+pageName+" .newField input") .each (function(index){
        tempData[$(this).attr('id')] = $(this).val();
        $(this).next().addClass('hideError');
        $(this).val("");
    });
    return tempData;
  };