function getPassword(){
    
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=[]{}"
    var passwordLength = 16;
    var password = "";
    
    for (var i=0; i<passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber,randomNumber+1);
    }
    document.getElementById("password").value = password
}

$("a.skaming1").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

$("a.news1").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });