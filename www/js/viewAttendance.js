$(document).ready(function(){
    
    var sourceViewAttendance = $('#viewAttendance-template').html();
    var templateViewAttendance = Handlebars.compile(sourceViewAttendance);

    var data = {fields:[
        {label:"Class",dropdown:true ,viewAttendance:true,feesInformation:true,examSchedule:true},
        {label:"Standard",dropdown:true,viewAttendance:true,feesInformation:true},
        {label:"Section",dropdown:true,viewAttendance:true,feesInformation:true},
        {label:"Student DRNumber",viewAttendance:true,feesInformation:true},
        {label:"Year",feesInformation:true},
        {label:"From Date",viewAttendance:true,feesInformation:true},
        {label:"To Date",viewAttendance:true,feesInformation:true} 
    ]};
    $('#viewAttendance-placeholder').html(template(data));
});