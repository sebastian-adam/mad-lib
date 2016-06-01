$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var sender = $("input#sender").val();
    var recipient = $("input#recipient").val();
    var street= $("input#recipient-street").val();
    var city = $("input#recipient-city").val();
    var state = $("input#recipient-state").val();
    var zip = $("input#recipient-zip").val();
    var date = getToday();

    $(".date").text(date);
    $(".sender").text(sender);
    $(".recipient").text(recipient);
    $(".recipient-street").text(street);
    $(".recipient-city").text(city);
    $(".recipient-state").text(state);
    $(".recipient-zip").text(zip);

    $("#letter").show();

    event.preventDefault();
  });
});

var getToday=function(){
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
if(dd<10) {
    dd='0'+dd
}
if(mm<10) {
    mm='0'+mm
}
return mm+'/'+dd+'/'+yyyy;
};
