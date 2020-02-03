const forgot = document.getElementById("forgot");
const forgotForm = document.getElementById("forgotForm");
const next = document.getElementById("siguiente");
var mainSection = document.getElementById("main");
// const inputs = document.getElementsByClassName("formInput");
// const comenzar = document.getElementById("comenzar");
var co_usuario= undefined;
var errorMessage = document.getElementById('message')
var form = document.getElementById("formLogin");
var response;
var logoImg = document.getElementById("logoImg")
var firstHalf = document.getElementById("firstHalf")

window.addEventListener("load", function() {

  if (error) {
    loginHandler(error)
  }


  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      const response = JSON.parse(this.responseText);
      console.log(response)
      const {color_institucion, img_institucion} = response
      if(img_institucion === "") {
        logoImg.setAttribute("src", "img/English21.svg")
      } else {
        console.log("HI")
        logoImg.setAttribute("src", img_institucion)
        firstHalf.style.setProperty("--mainColor", color_institucion)
      }
    }
  }
  xhttp.open("GET","php/controller/subdomain.php", true);
  xhttp.send();


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
            loginHandler(4)
            document.getElementById("codigo").disabled = false;
            document.getElementById("usernamepassRec").disabled = true;
        }
      }
    };
    xhttp.open("GET", "phpmailer/index.php?nbUsuario="+document.getElementById("usernamepassRec").value+"&cod="+cod, true);
    xhttp.send();
  });

  forgot.addEventListener("click", function() {
    form.style.setProperty("display", "none");
    forgotForm.style.setProperty("display", "flex");
  });
  document.getElementById("btnAceptar").addEventListener("click",function(){
    if(document.getElementById("codigo").value == document.getElementById("codigo_generado").value){
      location="php/views/newpassword.php?cu="+co_usuario;
    }else{
      loginHandler(5);
    }
  });

  document.getElementById("close").addEventListener("click", function() {
    forgotForm.style.setProperty("display", "none");
    form.style.setProperty("display", "flex");
  })

  // comenzar.addEventListener("click", function () {
  //   document.getElementById("hi").style.setProperty("display", "none");
  //   document.getElementById("login").style.setProperty("display", "flex");
  // });

  document.getElementById('messageClose').addEventListener("click", function(){
    this.parentElement.style.transform = "translate(150%)";
  })

  form.addEventListener("submit",function(envio){
    var xhttp = new XMLHttpRequest();
    var data = new FormData(form);
    xhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        response = JSON.parse(this.responseText);
        if(response.status == 1){
          beging(response);
        }else{
          loginHandler(response.status)
        }
      }
    }
    envio.preventDefault();
    xhttp.open("POST","php/controller/login.php", true);
    xhttp.send(data);
    form.reset();
  })
});

function beging (data) {
  // alert(data.redirect);
  main.classList.add("c21English");
  setTimeout(function() {
    window.location = data.redirect;
  }, 1500);
}

function loginHandler(handle){
  switch (handle) {
    case 1 :
      errorMessage.innerHTML = 'Tu contraseña ha sido cambiada';
      break;
    case 2 :
      errorMessage.innerHTML = 'Tienes un error con el usuario o la contraseña, vuelve a intentarlo';
      break;
    case 3 :
      errorMessage.innerHTML = 'Tu usuario no se encuentra activo, contacta con el soporte';
      break;
    case 4 :
      errorMessage.innerHTML = 'Hemos enviado un código de reactivación a tu correo electrónico';
      break;
    case 5 :
      errorMessage.innerHTML = "Codigo de verificación incorrecto";
      break;
    default:
      errorMessage.innerHTML = 'Error inesperado, recarga la página y vuelve a intentarlo o contacta al soporte';
      break;
  }
  document.getElementById("messageContainer").style.transform = "translate(0)";
}

// var remeb = function() {
//   alert("bu");
//   if(this.value!="") {
//     (this.parentElement.getElementsByClassName("inputLabel"))[0].style.transform = "translate(0, -30px)";
//     (this.parentElement.getElementsByClassName("barcolor"))[0].style.transform = "scale(1,1)";
//     alert("hi");
//   }
// }
