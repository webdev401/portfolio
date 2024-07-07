//navbar section start:

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//navbar section end:

//img slider start:
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

//img slider end:

//form data

function data() {
  var a = document.getElementById("n1").value;
  var b = document.getElementById("n2").value;
  var c = document.getElementById("n3").value;
  var d = document.getElementById("n4").value;

  if (a == "" || b == "" || c == "" || d == "") {
    alert("all fiels are mandatory");
    return false;
  } else if (b.length > 10 || b.length < 10) {
    alert("number should be of 10 digits : plz enter valid number");
    return false;
  } else if (isNaN(b)) {
    alert("only number are allowed");
    return false;
  } else {
    true;
  }
}
