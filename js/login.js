var forgot = document.getElementById("forgot");
var forgotForm = document.getElementById("forgotForm");
var next = (document.getElementsByClassName("siguiente"))[0];
var inputs = document.getElementsByClassName("formInput");
var co_usuario=undefined;
var comenzar = document.getElementById("comenzar");

window.addEventListener("load", function() {

  next.addEventListener("click", function() {
    var character = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ2346789";
    var cod = "";
    for (i=0; i<8; i++) cod +=character.charAt(Math.floor(Math.random()*character.length));
    document.getElementById("codigo_generado").value=cod;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

      if (this.readyState == 4 && this.status == 200) {

        co_usuario = this.responseText;

        if(co_usuario!=undefined){
            alert("Hemos enviado un código de reactivación a tu dirección de correo electrónico, ingrésalo en el siguiente espacio.");
            document.getElementById("codigo").disabled = false;
            document.getElementById("usernamepassRec").disabled = true;
        }
      }
    };
    xhttp.open("GET", "phpmailer/index.php?nbUsuario="+document.getElementById("usernamepassRec").value+"&cod="+cod, true);
    xhttp.send();
  });

    

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("focusin", onfocus);
    inputs[i].addEventListener("focusout", nonfocus);
  }


  forgot.addEventListener("click", function() {
      forgotForm.style.display = "flex";
      (document.getElementsByTagName("body"))[0].style.overflow = "hidden";
  });
  document.getElementById("btnAceptar").addEventListener("click",function(){
    if(document.getElementById("codigo").value==document.getElementById("codigo_generado").value){
      location="php/views/newpassword.php?cu="+co_usuario;
    }else{
      alert("Codigo de verificación incorrecto");
    }
  });

  comenzar.addEventListener("click", function () {
    document.getElementById("hi").style.setProperty("display", "none");
    document.getElementById("login").style.setProperty("display", "flex");
  });
});


function onfocus () {
  if(this.value == ""){
    (this.parentElement.getElementsByClassName("inputLabel"))[0].style.transform = "translate(0, -30px)";
  }
  (this.parentElement.getElementsByClassName("barcolor"))[0].style.transform = "scale(1,1)";
}

var nonfocus = function () {
  if(this.value == "")(this.parentElement.getElementsByClassName("inputLabel"))[0].style.transform = "translate(0, 0px)";
  (this.parentElement.getElementsByClassName("barcolor"))[0].style.transform = "scale(0,1)";
}


// var remeb = function() {
//   alert("bu");
//   if(this.value!="") {
//     (this.parentElement.getElementsByClassName("inputLabel"))[0].style.transform = "translate(0, -30px)";
//     (this.parentElement.getElementsByClassName("barcolor"))[0].style.transform = "scale(1,1)";
//     alert("hi");
//   }
// }