window.onscroll = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.transition = "all 0.3s";
    document.getElementById("navbar").style.backgroundColor = "#333";
    document.getElementById("head").style.display = "none";
  } else {
    document.getElementById("navbar").style.backgroundColor = "#3330";
    document.getElementById("head").style.display = "block";
  }
};

function openYear(yearNumber) {
  var i;
  var x = document.getElementsByClassName("year");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(yearNumber).style.display = "block";
}
