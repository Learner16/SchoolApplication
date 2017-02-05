$("document").ready(function(){

    var source = $("#syllabus-template").html();
    var template = Handlebars.compile(source);
    var data = {fields:[
        {label:"Class",description: 'description.name'},
        {label:"Term",description: ''},
        {label:"Standard",description: ''},
        {label:"Section",description: ''},
        {label:"Subject Name",url: ''},
        {label:"Teacher Name",url: ''},
    ]};
    $('#syllabus-placeholder').html(template(data));
});