
window.addEventListener("load", function () {
  const lessons = document.getElementsByClassName('roadicon');
  var title = document.getElementById('lessonTitle');
  audioCreator();
  for (let i = 0; i < lessons.length; i++) {
    lessons[i].addEventListener("click", function(){
      this.lastElementChild.play()
    })
    lessons[i].addEventListener("mouseenter", function () {
      title.innerHTML = this.firstElementChild.getAttribute("alt")
    })
  }

  function audioCreator (){
    for (let i = 0; i < lessons.length; i++) {
      var src = lessons[i].firstElementChild.getAttribute("alt")
      let soundE = document.createElement("audio")
      src = src.replace(/ /g, "_")
      src = src.replace("-", "_")
      src = src.toLowerCase()
      soundE.setAttribute("src", `../../aud/themes/${src}.mp3`)

      lessons[i].appendChild(soundE)
    }
  }

  // var sound = function () {
  //   this.lastElementChild.play()
  // }

  // var titles = function () {
  //   console.log(this.firstElementChild.getAttribute("alt"));
  //   title.innerHTML = this.firstElementChild.getAttribute("alt");
  // }
});
