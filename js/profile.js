

window.addEventListener("load", function() {
  var pictures = document.getElementsByClassName("pic");
  var l = pictures.length
  var selected = document.getElementById("selectedPic");
  for(var i = 0; i < l; i++) {
    pictures[i].addEventListener("click", selectPic);
  }
  //backgroundPic(pictures, selected);
});

function selectPic () {
  document.getElementById("selectedPic").firstElementChild.src = this.firstElementChild.src;
}

function updateProfile(){
  parameter="";
  if(document.getElementById("email").value!="")parameter+="email="+document.getElementById("email").value;
  parameter+="&ui="+document.getElementById("selectedPic").firstElementChild.src;
  if(document.getElementById("OldPassword").value!=""&&document.getElementById("NewPassword").value!=""&&document.getElementById("RepeatNewPassword").value!=""&&document.getElementById("NewPassword").value==document.getElementById("RepeatNewPassword").value)
    parameter+="&op="+document.getElementById("OldPassword").value+"&np="+document.getElementById("NewPassword").value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.responseText);
      document.getElementById("OldPassword").value="";
      document.getElementById("NewPassword").value="";
      document.getElementById("RepeatNewPassword").value="";
    }
  };
  xhttp.open("GET", "../controller/profile.php?"+parameter, true);
  xhttp.send();
}
