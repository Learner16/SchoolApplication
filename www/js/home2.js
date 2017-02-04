$("document").ready(function(){
 /*   var sourceContent = $("#homePageContent-template").html();
    var templateContent = Handlebars.compile(sourceContent);
  //  Handlebars.registerPartial("activityPanel", $("#homePage-template").html());
    var dataContent = {contentActivites:[
      {activity: "Events" , activityRedirect:"#", icon:"fa fa-camera-retro" , imageUrl:"xyz"},
      {activity: "Ciriculars" , activityRedirect:"#", icon:"fa fa-paper-plane" , imageUrl:"xyz"},
      {activity: "Time Table" , activityRedirect:"#", icon:"fa fa-exclamation" , imageUrl:"xyz"},
      {activity: "View Attendance" , activityRedirect:"#", icon:"fa fa-comments" , imageUrl:"xyz"},
      {activity: "Exam Schedule" , activityRedirect:"#", icon:"fa fa-exclamation" , imageUrl:"xyz"},
      {activity: "Fees Information" , activityRedirect:"#", icon:"fa fa-exclamation" , imageUrl:"xyz"},
      {activity: "Syllabus" , activityRedirect:"#", icon:"fa fa-bell" , imageUrl:"xyz"} ,
      {activity: "About Us" , activityRedirect:"#", icon:"fa fa-cog" , imageUrl:"xyz"},
      {activity: "Log Out" , activityRedirect:"#login", icon:"fa fa-bell" , imageUrl:"xyz"}
    ]};
  $("#homeContentPage-placeholder").html(template(dataContent));*/

    var source   = $("#homePageContent-template").html();
    var template = Handlebars.compile(source);
    
    var dataPanel = {activites:[
      {activity: "Events" , activityRedirect:"#", icon:"fa fa-camera-retro" , imageUrl:"xyz"},
      {activity: "Ciriculars" , activityRedirect:"#", icon:"fa fa-paper-plane" , imageUrl:"xyz"},
      {activity: "Time Table" , activityRedirect:"#", icon:"fa fa-exclamation" , imageUrl:"xyz"},
      {activity: "View Attendance" , activityRedirect:"#", icon:"fa fa-comments" , imageUrl:"xyz"},
      {activity: "Exam Schedule" , activityRedirect:"#", icon:"fa fa-exclamation" , imageUrl:"xyz"},
      {activity: "Fees Information" , activityRedirect:"#", icon:"fa fa-exclamation" , imageUrl:"xyz"},
      {activity: "Syllabus" , activityRedirect:"#", icon:"fa fa-bell" , imageUrl:"xyz"} ,
      {activity: "About Us" , activityRedirect:"#", icon:"fa fa-cog" , imageUrl:"xyz"},
      {activity: "Log Out" , activityRedirect:"#login", icon:"fa fa-bell"}
      
    ]};
  $("#homeContentPage-placeholder").html(template(dataPanel));
});