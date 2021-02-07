// JS code specific to the reference list page
// Author: Andi Santos Oliveira
// Date 8 Dec 2020

$( "tr td" ).on( "mouseenter", function() {
  $(this).parent().addClass("teal lighten-3");
  $(this).parent().find( "a" ).removeClass("d-none");
});
$( "tr td" ).on( "mouseleave", function() {
  $(this).parent().removeClass("teal lighten-3");
  $(this).parent().find( "a" ).addClass("d-none");
});
