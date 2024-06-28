var imgsrc = 4;
var path;

var slideIndex = 1;
showDivs(slideIndex);
var imggg = document.getElementById("img01");

function plusDivs(n) {
    showDivs(slideIndex += n);
    imggg.src = "" + path + "" + imgsrc + ".JPG";
    imgsrc = imgsrc + 1;
}
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
function myFunction() {
    imgsrc = 4;
    plusDivs(1)
}