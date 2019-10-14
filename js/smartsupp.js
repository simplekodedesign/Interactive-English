var _smartsupp = _smartsupp || {};
_smartsupp.key = '934510693726559cd73bbfe8fad0045123d3a32c';

window.smartsupp || (function (d) {
    var s, c, o = smartsupp = function () { o._.push(arguments) }; o._ = [];
    s = d.getElementsByTagName('script')[0]; c = d.createElement('script');
    c.type = 'text/javascript'; c.charset = 'utf-8'; c.async = true;
    c.src = 'https://www.smartsuppchat.com/loader.js?'; s.parentNode.insertBefore(c, s);
})(document);

smartsupp('on', 'rendered', function() {
  console.log('rendered');
  smartsupp('theme:options', {
     panelWidth: 350,
     panelHeight: 550
  });
     // Set logo inside chat box, which is displayed by default when no agent is connected.
  smartsupp('chat:avatar', 'http://lorempixel.com/100/100/people');
    //Set pre-filled message in chat box (text is not sent).
  smartsupp('chat:message', 'Holaaaaa, can you help me with...');


});

smartsupp('theme:options', {
panelWidth: 350,
panelHeight: 550
});

// Set logo inside chat box, which is displayed by default when no agent is connected.
smartsupp('chat:avatar', 'http://lorempixel.com/100/100/people');
//Set pre-filled message in chat box (text is not sent).
smartsupp('chat:message', 'Holaaaaa, can you help me with...');

smartsupp('variables', {
userId: {
  label: 'CONSULTAS MENSUAL ',
  value: 2
},
role: {
  label: 'Customer status',
  value: 'VIP'
},
orderedPrice: {
  label: 'Customer spending',
  value: '100 EUR'
}
});

//smartsupp CODE

// <div class="message" id="messageContainer"> RESP Code for loginHandler
//   <p id="message">
//     ERROR
//   </p>
//   <span id="messageClose">x</span>
// </div>

//
// function loginHandler(handle){
//   switch (handle) {
//     case 1 :
//       errorMessage.innerHTML = 'Tu contraseña ha sido cambiada';
//       break;
//     case 2 :
//       errorMessage.innerHTML = 'Tienes un error con el usuario o la contraseña, vuelve a intentarlo';
//       break;
//     case 3 :
//       errorMessage.innerHTML = 'Tu usuario no se encuentra activo, contacta con el soporte';
//       break;
//     case 4 :
//       errorMessage.innerHTML = 'Hemos enviado un código de reactivación a tu correo electrónico';
//       break;
//     case 5 :
//       errorMessage.innerHTML = "Codigo de verificación incorrecto";
//       break;
//     default:
//       errorMessage.innerHTML = 'Error inesperado, recarga la página y vuelve a intentarlo o contacta al soporte';
//       break;
//   }
//   document.getElementById("messageContainer").style.transform = "translate(0)"
// }
//
// /*--------------------------------Message---------------------------------*/
//
// .message{
//   position: fixed;
//   background: url(../img/tip.svg) center/cover no-repeat;
//   display: flex;
//   font-family: 'Myriad Pro Condensed';
//   justify-content: center;
//   padding-top: 15px;
//   position: fixed;
//   top: 200px;
//   right: 0;
//   width: 200px;
//   height: 210px;
//   transform: translateX(150%);
//   transition: .5s ease;
//   /* z-index: 3; */
// }
//
// .message span{
//   color: red;
//   cursor: pointer;
//   font-family: sans-serif;
//   font-size: 20px;
//   font-weight: 900;
//   /* position: absolute; */
//   right: 16px;
//   top: 0px;
//   text-align: center;
//   width: 20px;
// }
//
// .message p{
//   color: var(--primary);
//   text-align: center;
//   width: 85%;
//   margin: 0;
//   font-size: 1.2em;
// }
