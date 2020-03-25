$('#navigation').load("menu.html");


function togNav() {
  var bar = document.getElementById("mySidebar");
  if (bar.style.display == "none"){
    bar.style.display = "block";
    document.getElementById("myHeader").style.marginLeft = "177px";
    document.getElementById("myContent").style.marginLeft = "177px";
  }
  else{
    bar.style.display = "none";
    document.getElementById("myHeader").style.marginLeft = "20px";
    document.getElementById("myContent").style.marginLeft = "20px";
  }
}
