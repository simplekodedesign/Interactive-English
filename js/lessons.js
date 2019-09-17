
var currentLesson = 10;

window.addEventListener("load", function() {
  lessonsCreator();
});

function lessonsCreator () {
  let lesson, inf, title, img, p, span;
  var right = document.getElementById("right");
  var left = document.getElementById("left");

  const svg = document.getElementById('svg');
  const svgC = svg.contentDocument;
  const papa = svgC.getElementById('papa');

  let svgcolor = numero_leccion-1;

  if (svgcolor >= 7) {
    svgcolor%= 7;
  }

  let l = (nLessons % 2 == 0)? nLessons/2 : parseInt(nLessons/2) + 1;
  let color = [
    "rgb(248, 206, 0)",
    "rgb(237, 112, 41)",
    "rgb(233, 79, 136)",
    "rgb(0, 184, 231)",
    "rgb(0, 123, 191)",
    "rgb(148, 145, 198)",
    "rgb(0, 172, 146)"
  ];
  papa.setAttribute('fill', color[svgcolor]);
  colorIndex = 0;
  for (let i = 0 ; i < nLessons; i++) {
    lesson = document.createElement("div");
    inf = document.createElement("div");
    title = document.createElement("div");
    img = document.createElement("img");
    p = document.createElement("p");
    span = document.createElement("span");

    lesson.classList.add("lesson");
    if(i >= currentLesson){
      lesson.classList.add("inactive");
    }
    if ((i+1) == currentLesson) {
      lesson.classList.add("current");
    }
    inf.classList.add("inf");
    inf.classList.add(co_juego[i]);
    title.classList.add("title");
    img.classList.add("img");
    img.classList.add(co_orden[i]);
    img.src = imagenes[i];

    span.innerHTML = (i < 9)? "0" + (i+1): i+1;
    p.innerHTML = nombre_lecciones[i];

    inf.appendChild(span);
    inf.appendChild(img);
    title.appendChild(p);

    lesson.appendChild(inf);
    lesson.appendChild(title);
    lesson.appendChild(img);

    lesson.style.setProperty("--color", color[colorIndex]);
    lesson.addEventListener("click", rout);

    if (i < l) {
      left.appendChild(lesson);
    } else {
      right.appendChild(lesson);
    }
    // if((i+1) == l)colorIndex = -1;
    if(colorIndex == 6) colorIndex = -1;
    colorIndex++;
  }
}
