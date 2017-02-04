$(document).ready(function(){
    var source = $('#feesInformation-template').html();
    var template = Handlebars.compile(source);
    var data = {fields:[
        {label:"Class",dropdown:true },
        {label:"Standard",dropdown:true},
        {label:"Section",dropdown:true},
        {label:"Student DRNumber",dropdown:false},
        {label:"Year",dropdown:false}
    ]};
$('#feesInformation-placeholder').html(template(data));

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