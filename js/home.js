
window.addEventListener("load", function () {
  const lessons = document.getElementsByClassName('roadicon');
  var title = document.getElementById('lessonTitle');
  for (let i = 0; i < lessons.length; i++) {
    lessons[i].addEventListener("mouseenter", function () {
      title.innerHTML = this.firstElementChild.getAttribute("alt")
    })
    lessons[i].addEventListener("mouseleave", function () {
      title.innerHTML = "LESSONS"
    })
  }

  // function audioCreator (){
  //   for (let i = 0; i < lessons.length; i++) {
  //     var src = lessons[i].firstElementChild.getAttribute("alt")
  //     let soundE = document.createElement("audio")
  //     src = src.replace(/ /g, "_")
  //     src = src.replace("-", "_")
  //     src = src.toLowerCase()
  //     soundE.setAttribute("src", `../../aud/themes/${src}.mp3`)
  //
  //     lessons[i].appendChild(soundE)
  //   }
  // }
});
