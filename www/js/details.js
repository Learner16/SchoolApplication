$(document).ready(function(){
    var description = {
        name: "Sports Annual Event",
        date: "23rd Dec 2017",
        venue: "Mumbai",
        information: "Sports Annual Event",
        attachments: "../images/avatar.png"
    };

    var source = $('#details-template').html();
    var template = Handlebars.compile(source);
    var data = {fields:[
        {label:"Name",description: description.name},
        {label:"Date",description: description.date},
        {label:"Venue",description: description.venue},
        {label:"Information",description: description.information},
        {label:"Attachments",url: description.attachments}
    ]};
    $('#details-placeholder').html(template(data));
});