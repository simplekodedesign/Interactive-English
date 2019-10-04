const lessons = document.getElementsByClassName('roadicon');
const title = document.getElementById('lessonTitle')

window.addEventListener("load", function () {
  for (let i = 0; i < lessons.length; i++) {
    lessons[i].addEventListener("click", sound)
    lessons[i].addEventListener("mouseenter", titles)
  }
});

const sound = function () {
  this.lastElementChild.play();
}

const titles = function () {
  title.innerHTML = this.firstElementChild.getAttribute("alt");
}
