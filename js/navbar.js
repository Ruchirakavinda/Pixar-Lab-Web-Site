var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.transition="0.5s";
    
  } else {
    document.getElementById("navbar").style.top = "-150px";
    
    
  }
  prevScrollpos = currentScrollPos;
}



 
