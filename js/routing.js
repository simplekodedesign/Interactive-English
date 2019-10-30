window.addEventListener("load",function(){
  //direccionar profile
  document.getElementById("btnProfile").addEventListener("click",function(){
    location.href="?url=profile.php";
  })

  document.getElementById("awards").addEventListener("click",function(){
    location.href="?url=awards.php";
  })

  //direccionar a EXIT
  document.getElementById("btnExit").addEventListener("click",function(){
    location.href="../controller/exit.php";
  })

  //direccionamiento a lessons desde temas
  var btnTheme = document.querySelectorAll("div.roadicon");
  for(var i = 0;i < btnTheme.length; i++) {
    if(i+1 <= te_actual) {
      btnTheme[i].addEventListener("click",function(e){
        location.href="?url=lessons.php&th="+e.target.parentElement.id.substr(5,6);
      });
      if(i+1 == te_actual) {
        btnTheme[i].classList.add("current");
      }
    } else {
      btnTheme[i].classList.add("inactive");
    }
  }

})

//redireccionar a la leccion
function rout(data){
  if(!(this.firstElementChild.classList[1] === undefined) && !(this.lastElementChild.classList[1] === undefined)){
    location.href="?url=../../Lessons/"+redirect(this.firstElementChild.classList[1])+"/index.php&co="+this.lastElementChild.classList[1];
  }
}

function redirect(game){
  switch(game){
    case "1": return "Video";
    case "2": return "ABC";
    case "3": return "Click the right letters";
    case "4": return "Pronunciation2";
    case "5": return "Drag to the box";
    case "6": return "Pronunciation of Vowels";
    case "7": return "Vocabulary Body";
    case "8": return "Vocabulary";
    case "9": return "Select the correct option";
    case "10": return "Connect";
    case "11": return "Translate into spanish";
    case "12": return "Vocabulary txt";
    case "13": return "Memory Numbers";
    case "14": return "Write the correct txt";
    case "15": return "Say the correct txt";
    case "16": return "Select the right image";
    case "17": return "Write the right option";
    case "18": return "Memory";
    case "19": return "Paint the draws";
    case "20": return "Connect with image";
    case "21": return "Unscramble";
    case "22": return "Vocabulary Directions";
    case "23": return "Directions";
    default: return "";
  }
}
