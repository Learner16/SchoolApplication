$(document).ready(function(){
    var source = $('#feesInformation-template').html();
    var template = Handlebars.compile(source);

    var sourceViewAttendance = $('#viewAttendance-template').html();
    var templateViewAttendance = Handlebars.compile(sourceViewAttendance);

    var sourceExamSchedule = $('#examSchedule-template').html();
    var templateExamSchedule = Handlebars.compile(sourceExamSchedule);

    var sourceTimeTable = $('#timeTable-template').html();
    var templateTimeTable = Handlebars.compile(sourceTimeTable);
    //var templateTimeTable = Handlebars.compile(sourceTimeTable);    

     var data = {fields:[
        {label:"Class",dropdown:true ,viewAttendance:true,feesInformation:true,examSchedule:true,timeTable:true},
        {label:"Standard",dropdown:true,viewAttendance:true,feesInformation:true,examSchedule:true,timeTable:true},
        {label:"Section",dropdown:true,viewAttendance:true,feesInformation:true,examSchedule:true,timeTable:true},
        {label:"Student DRNumber",viewAttendance:true,feesInformation:true},
        {label:"Year",feesInformation:true},
        {label:"From Date",viewAttendance:true},
        {label:"To Date",viewAttendance:true} 
    ]};

    $('#feesInformation-placeholder').html(template(data));
    $('#viewAttendance-placeholder').html(templateViewAttendance(data));
    $('#examSchedule-placeholder').html(templateExamSchedule(data));
    $('#timeTable-placeholder').html(templateTimeTable(data));

    // Handlebars.registerHelper('ifCond', function(v1, options) {
    // if(v1 === true) {
    //     return options.fn(this);
    // }
    // return options.inverse(this);
    // });
    
    // <!--{{#if dropdown}}
    //         <select name="" data-role="none" id="{{label}}">
    //             <option value=""></option>
    //         </select>
    //     {{else}}
    //     <input type="text" data-role="none" id="{{label}}"></input>
    // {{#if}}-->
    //     <!--{{#ifCond dropdown}}
    //         <select name="" data-role="none" id="{{label}}">
    //             <option value=""></option>
    //         </select>
    //     {{else}}
    //         <input type="text" data-role="none" id="{{label}}"></input>
            
    //     {{/ifCond}}-->

});