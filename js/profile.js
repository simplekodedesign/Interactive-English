var pics = document.getElementsByClassName('icons');
var edit = document.getElementById('');
var aux;

window.addEventListener("load", function() {
    for (let i = 0; i < pics.length; i++) {
        pics[i].addEventListener("click", function() {
            pics[i].parentElement.parentElement.firstElementChild.src = pics[i].src;
            pics[i].parentElement.parentElement.firstElementChild.alt = pics[i].alt;
            document.getElementById("userIcon").src=document.getElementById("userIconProfile").src;
            document.getElementById("userIcon").alt=document.getElementById("userIconProfile").alt;
        });
    }
});

function updateProfile(){
  parameter="";
  if(document.getElementById("email").value!="")parameter+="email="+document.getElementById("email").value;
  parameter+="&ui="+document.getElementById("userIcon").alt;
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
  xhttp.open("GET", "php/controller/profile.php?"+parameter, true);
  xhttp.send();
}
