function togNav() {
  var bar = document.getElementById("mySidebar");
  if (bar.style.display == "none" || bar.style.display == ''){
    document.getElementById("myHeader").style.marginLeft = "150px";
    document.getElementById("myContent").style.marginLeft = "150px";
    bar.style.display = "block";
  }
  else{
    bar.style.display = "none";
    document.getElementById("myHeader").style.marginLeft = "0";
    document.getElementById("myContent").style.marginLeft = "0";
  }
}
