$("document").ready(function(){
    var source   = $("#homePage-template").html();
    var source_content   = $("#homePageContent-template").html();

    var template = Handlebars.compile(source);
    var template_content = Handlebars.compile(source_content);

    var dataPanel = {activites:[
      {activity: "Events" , activityRedirect:"#events", icon:"fa fa-archive" , imageUrl:"xyz"},
      {activity: "Ciriculars" , activityRedirect:"#circulars", icon:"fa fa-paper-plane" , imageUrl:"xyz"},
      {activity: "Time Table" , activityRedirect:"#timeTable", icon:"fa fa-exclamation-circle " , imageUrl:"xyz"},
      {activity: "View Attendance" , activityRedirect:"#viewAttendance", icon:"fa fa-comments" , imageUrl:"xyz"},
      {activity: "Exam Schedule" , activityRedirect:"#examSchedule", icon:"fa fa-exclamation-circle" , imageUrl:"xyz"},
      {activity: "Fees Information" , activityRedirect:"#feesInformation", icon:"fa fa-exclamation-circle" , imageUrl:"xyz"},
      {activity: "Syllabus" , activityRedirect:"#syllabus", icon:"fa fa-bell" , imageUrl:"xyz"} ,
      {activity: "About Us" , activityRedirect:"#aboutUs", icon:"fa fa-cog" , imageUrl:"xyz"},
      {activity: "Log Out" , activityRedirect:"#login", icon:"fa fa-bell" }
      
    ]};
  $(".homePage-placeholder").html(template(dataPanel));
  $("#homeContentPage-placeholder").html(template_content(dataPanel));
    
});