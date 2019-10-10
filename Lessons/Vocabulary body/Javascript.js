
// const side = svg[1].contentDocument
// const back = svg[2].contentDocument
var svg = document.getElementById('svg1');


window.addEventListener("load", function () {
  //console.log(svg)
  //svg.getElementById('oreja')
  // console.log(side)
  // console.log(front.getElementById('oreja'))

  createLesson();
  createLesson();
})

createLesson();

function createLesson(){
    var front = svg.contentDocument
    console.log(front);
}
