class ShapeItem {
  constructor(shape, color, name) {
    this.shape = shape;
    this.color = color;
    this.name = name;
  }
}

const lessonColors = [
  {rgb: "#808080", name: "gray"},
  {rgb: "#ff0000", name: "red"},
  {rgb: "rgb(255, 146, 0)", name: "orange"},
  {rgb: "rgb(255, 255, 255)", name: "white"},
  {rgb: "rgb(0, 255, 0)", name: "green"},
  {rgb: "rgb(255, 0, 233)", name: "pink"},
  {rgb: "rgb(117, 67, 18)", name: "brown"},
  {rgb: "rgb(247, 254, 0)", name: "yellow"},
  {rgb: "rgb(181, 0, 255)", name: "purple"},
  {rgb: "rgb(0, 0, 0)", name: "black"},
  {rgb: "rgb(0, 0, 255)", name: "blue"},
];

const shapes = [
  "triangle", "trapezoid", "paralelo", "rhombus",
  "pentagon", "hexagon", "bevel", "rabbet", "star",
  "circle"
];

const initialBackground = "rgb(58, 58, 58)"; // Setted with CSS

const tableLength = lessonColors.length;
const shapesLength = shapes.length;
const itemsLength = tableLength*2;
var items = [];
var currentItems = 0;
var itemsIndex = [];
var tableContainer = document.getElementById("colorsContainer");
var drawsContainer = document.getElementById("drawsContainer");


// Interactive's variables

var colors, draws, col1, col2;
col1 = undefined;
col2 = undefined;

window.addEventListener("load", function () {
  createTable();
  createShapes();
})

function createTable () {
  let div;
  for (let i = 0; i < tableLength; i++) {
    div = document.createElement("object");
    div.setAttribute("data", "../../img/categories/colors/color.svg")
    div.setAttribute("type", "image/svg+xml")
    div.setAttribute("colorchote", lessonColors[i].rgb)

    div.classList.add("tableItem");
    div.setAttribute("colorName", lessonColors[i].name);

    div.addEventListener("load", function () {
      let divC = this.contentDocument.getElementsByTagName("svg")[0]
      let color = this.getAttribute("colorchote")
      let colorName = this.getAttribute("colorName")

      divC.setAttribute("colorName", colorName);
      divC.addEventListener("click", select);
      divC.getElementsByClassName('color')[0].setAttribute("fill", color);
      divC.getElementsByClassName('color')[1].setAttribute("fill", color);
    })

    tableContainer.appendChild(div);
  }
  colors = document.getElementsByClassName("tableItem");
}

function createShapes () {
  let div, num, text;
  for (let i = 0; i < tableLength; i++) {
    for (let k = 0; k < 2; k++) {
      num = parseInt(getRandomArbitrary(0, tableLength))
      items.push(new ShapeItem(shapes[parseInt(getRandomArbitrary(0, shapesLength))],
        lessonColors[i].rgb, lessonColors[i].name
      ));
    }
  }

  items.sort(function (a,b) {
    return 0.5 - Math.random();
  });

  for (let j = 0; j < 3; j++) {
    div = document.createElement("div");
    text = document.createElement("p");
    text.innerHTML = items[currentItems].name;
    div.classList.add("draw");
    div.classList.add(items[currentItems].shape);
    div.addEventListener("click", select);

    div.appendChild(text);

    drawsContainer.appendChild(div);
    currentItems++;
  }

  draws = document.getElementsByClassName("draw");
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function select (){
  if(this.getAttribute("id") == "Capa_1") {
    col1 = this
    // col1 = this.getAttribute("colorName");
  } else if (this.parentElement == drawsContainer) {
    col2 = this;
    // col2 = this.firstElementChild.innerHTML;
  }

  if(col1 && col2) {
    check();
  }
}

function check () {
  console.log(currentItems + " " + itemsLength);
  if (col1.getAttribute("colorName") == col2.firstElementChild.innerHTML) {
    col2.removeEventListener("click", select);
    col2.style.setProperty("background-color", col1.getElementsByClassName('color')[0].getAttribute("fill"));
    currentItems++;
    if (currentItems < itemsLength + 2) {
      if(currentItems < itemsLength) {
        setTimeout(statusRefresher, 500, col1, col2);
        col1 = undefined;
        col2 = undefined;
        return;
      } else {
        col1 = undefined;
        col2 = undefined;
        return;
      }
    } else {
      victoryMessage()
    }

  } else {
    mistake();
    col1 = undefined;
    col2 = undefined;
  }
}

function statusRefresher (prevCol1, prevCol2) {
  prevCol2.style.setProperty("opacity", "0");
  setTimeout(() => {
    prevCol2.classList.replace(prevCol2.classList[1], items[currentItems].shape);
    prevCol2.firstElementChild.innerHTML = items[currentItems].name;
    prevCol2.style.setProperty("background-color", initialBackground);
    prevCol2.addEventListener("click", select);    
    prevCol2.style.setProperty("opacity", "1");
  }, 500);
}
