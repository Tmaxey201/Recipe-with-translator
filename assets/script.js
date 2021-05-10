$(document).ready(function(){
    $('.parallax').parallax();
  });


function yourfunction(){
  console.log("hello world")
}



// jquery for switch to toggle language nav
$(document).ready(function(){
  $('select').formSelect();
});

$(document).on('change', '#check', function(e){
    if($(this).is(':checked'))
{
  $(".hidenav").show();
}
else
{
  $(".hidenav").hide(); 
}
})