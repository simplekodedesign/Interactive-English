

window.addEventListener("load", function() {
  const audio = document.getElementById('audio');
  audio.setAttribute('src', aud);
  audio.play();
  lessonsCreator();
});

function lessonsCreator () {
  let lesson, inf, title, img, p, span;
  var right = document.getElementById("right");
  var left = document.getElementById("left");

  const svg = document.getElementById('svg');
  const svgC = svg.contentDocument;
  const papa = svgC.getElementById('papa');

  const image = document.getElementById('lessonImage');

  image.setAttribute('src', imgTema);

  let l = (nLessons % 2 == 0)? nLessons/2 : parseInt(nLessons/2) + 1;

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
    if(co_orden[i] > currentLesson){
      lesson.classList.add("inactive");
    } else {
      lesson.addEventListener("click", rout);
    }
    if ((parseInt(co_orden[i])) == currentLesson) {
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
    // if(!(i >= currentLesson)){
    //   lesson.addEventListener("click", rout);
    // }

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
