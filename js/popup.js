var slideIndex=1;

var modal = document.getElementById('myModal');

var modalImg = document.getElementById("img01");

var imagList = document.getElementsByClassName('image')

 function popup(nr) {
    var num= parseInt(nr);
    slideIndex=num;
    ShowSlide(slideIndex);
}



var span = document.getElementsByClassName("close")[0];


span.onclick = function() { 
    modal.style.display = "none";
}


function plusSlides(n) {
    var num= parseInt(n);   
    ShowSlide(slideIndex +=num );

}

function ShowSlide(n){
    
    if (n > imagList.length) {slideIndex = 1} 
      if (n < 1) {slideIndex = imagList.length}
         

    modal.style.display = "block";
    modalImg.src = imagList[slideIndex-1].src ;
}
