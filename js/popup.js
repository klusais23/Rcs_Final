function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}


var $overLay =$("<div id='overLay'></div>");

$("body").append($overLay);

var $image =$("<img id = 'bilde'>");

$overLay.append($image);

var $close = $("<img id = 'closeImage'>");

$overLay.append($close);

var $next = $("<img id = 'nextImage'>");
$overLay.append($next);

var $previous = $("<img id = 'prewiousImg'>");
$overLay.append($previous);

$("#imageGalery a").click(function(event){
    event.preventDefault();

    var imageSource =$(this).attr("href");
    $image.attr("src", imageSource);
    $close.attr("src", "images/close-file.png" );
    $next.attr("src", "images/nextImage.jpg" );
    $previous.attr("src", "images/previousPic.jpg" );

    $overLay.show();
});


$("#nextImage").click(function(){
   
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";

});

$close.click(function(){
    $($overLay).hide();
})
