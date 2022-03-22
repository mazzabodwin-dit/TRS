/* global $ */

/* Show company details */

$(document).ready(function() {
					
  $("#reginterest-existing-org").change(function(e) {
     hideAll();
    $(e.target.options).removeClass();
    var $selectedOption = $(e.target.options[e.target.options.selectedIndex]);
    $selectedOption.addClass('selected');
     $('#' + $selectedOption.val()).show();
  });
});

function hideAll() {
  $("#opt0").hide();
  $("#opt1").hide();
  $("#opt2").hide();
  $("#opt3").hide();
}
