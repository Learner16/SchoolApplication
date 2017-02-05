$("document").ready(function(){
    var source = $('#aboutUs-template').html();
    var template = Handlebars.compile(source);
    var data = {staff:[
        {designation:"Principal",name:"Mr Yo Yo",phone:"1234" },
        {designation:"Doctor",name:"Mr Yo Yo",phone:"1234" },
        {designation:"Security",name:"Mr Yo Yo",phone:"1234" },
        {designation:"Swimming",name:"Mr Yo Yo",phone:"1234" },
        {designation:"Transport",name:"Mr Yo Yo",phone:"1234" }
    ]};
$('#aboutUs-placeholder').html(template(data));

});