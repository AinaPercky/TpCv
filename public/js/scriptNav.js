// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar=$("#navbar");
//  var navbar = document.getElementByClassName("navbar");

// Get the offset position of the navbar
var sticky = navbar.offset();


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  console.log(window.pageYOffset);

  switch (true){
    case (window.pageYOffset<800) : // inférieur à 9
    $("#accueil").attr("class","nav-item active");
    $("#experience,#formation,#competence,#contact").attr("class","nav-item");
    // alert("aacueil");
                                 break;
    case (window.pageYOffset<1500) : 
    $("#experience").attr("class","nav-item active");
    $("#formation,#competence,#contact,#accueil").attr("class","nav-item");
    // alert("r"); // entre 10 et 19
                                 break;
    case (window.pageYOffset<2300) : 
    $("#formation").attr("class","nav-item active");
    $("#experience,#competence,#contact,#accueil").attr("class","nav-item");
    // alert("aacuei112121l"); // entre 10 et 19
    break;
    case (window.pageYOffset<2900) : 
    $("#competence").attr("class","nav-item active");
    $("#experience,#formation,#contact,#accueil").attr("class","nav-item");
    // alert("aacuerrril"); // entre 10 et 19
    break;
    case (window.pageYOffset<3314) : 
    $("#contact").attr("class","nav-item active");
    $("#experience,#formation,#competence,#accueil").attr("class","nav-item");
    
  }
    
    // alert("aarrrrcueil")};// entre 20 et 49
// ... jusqu'à 500
  if (window.pageYOffset >= sticky.top) {
    // $("#navbar").toggleClass("sticky");
    
    $("#navbar").addClass("sticky");
  } else {
    $("#navbar").removeClass("sticky");
  }

$(".nav-item").click(function(){
  $(".nav-item").attr("class","nav-item")
  console.log(this.className);
  if(this.className=="nav-item active"){
    $(this).attr("class","nav-item");
  }
  else{
    $(this).attr("class","nav-item active");
  }

}); }