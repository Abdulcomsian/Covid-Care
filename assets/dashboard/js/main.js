/**************************************************************************************/
/**************************************************************************************/
/************************ Desktop - Side Bar Button JS - Start ************************/
/**************************************************************************************/
/**************************************************************************************/
$("#mainDashboard .contentDiv .sideBar .sideBarBtn button").click(function () {
  if($("#mainDashboard .contentDiv .sideBar").hasClass("openSideBar") && $("#mainDashboard .contentDiv .viewDiv").hasClass("blurMe")){
    $("#mainDashboard .contentDiv .sideBar").removeClass("openSideBar")
    $("#mainDashboard .contentDiv .viewDiv").css("width", "100%");
    $("#mainDashboard .contentDiv .viewDiv").removeClass("blurMe")
  } else{
    $("#mainDashboard .contentDiv .sideBar").css("width", "5%");
    $("#mainDashboard .contentDiv .viewDiv").css("width", "95%");
    $("#mainDashboard .contentDiv .sideBar ul li").css("padding", "20px 24px");
    $("#mainDashboard .contentDiv .sideBar ul li a").css("display", "none");
    $("#mainDashboard .contentDiv .sideBar .logoDiv").css("padding", "30px 5px")
  }
});
$("#mainDashboard .contentDiv .sideBar").mouseenter(function () {
  $("#mainDashboard .contentDiv .sideBar").css("width", "20%");
  $("#mainDashboard .contentDiv .viewDiv").css("width", "80%");
  $("#mainDashboard .contentDiv .sideBar ul li").css("padding", "20px 24px");
  $("#mainDashboard .contentDiv .sideBar ul li a").css("display", "block");
});
/**************************************************************************************/
/**************************************************************************************/
/************************* Desktop - Side Bar Button JS  - End ************************/
/**************************************************************************************/
/**************************************************************************************/


/**************************************************************************************/
/**************************************************************************************/
/************************* Mobile - Top Bar Button JS  - Start ************************/
/**************************************************************************************/
/**************************************************************************************/

$(".openMenu").click(function(){
  $("#mainDashboard .contentDiv .sideBar").addClass("openSideBar");
  $("#mainDashboard .contentDiv .viewDiv").addClass("blurMe")
})

/**************************************************************************************/
/**************************************************************************************/
/************************* Mobile - Top Bar Button JS  - End ************************/
/**************************************************************************************/
/**************************************************************************************/
$("#mainDashboard .contentDiv .viewDiv .contentViewDiv .patientTable .tableBar .sortingDiv .multiSort button").on("click", function(){
  $("#mainDashboard .contentDiv .viewDiv .contentViewDiv .patientTable .tableBar .sortingDiv .multiSort button").removeClass("active")
  $(this).addClass("active");
})
$(document).ready( function () {
  $('#patientTable').DataTable();
} );
$(".previous").innerHTML="<a><i class='fa fa-angle-left' aria-hidden='true'></i></a>";