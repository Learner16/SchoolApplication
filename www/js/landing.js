$(document).ready(function(){

    $('#nextHome').click(function(){
        window.location.href="#home";
    });
    $('table td').click(function(){
        $('table td').removeClass('selected');
        $(this).addClass('selected');
    })
});