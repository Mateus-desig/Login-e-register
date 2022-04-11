// Form
$(".email-signup").hide()
$(".register").click(function(){
  $(".email-login").fadeOut(100)
  $(".email-signup").delay(100).fadeIn(100)
  $(".login").removeClass("active")
  $(".register").addClass("active")
})
$(".login").click(function(){
  $(".email-login").delay(100).fadeIn(100)
  $(".email-signup").fadeOut(100)
  $(".login").addClass("active")
  $(".register").removeClass("active")
})