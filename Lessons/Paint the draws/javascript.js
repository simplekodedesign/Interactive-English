class ShapeItem {
  constructor(shape, color, name) {
    this.shape = shape;
    this.color = color;
    this.name = name;
  }
}

const lessonColors = [
  {rgb: "rgb(128, 128 ,128)", name: "gray"},
  {rgb: "rgb(255, 0, 0)", name: "red"},
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
const itemsLength = 5;
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
  for (var i = 0; i < tableLength; i++) {
    div = document.createElement("div");
    div.classList.add("tableItem");
    div.style.setProperty("background-color", lessonColors[i].rgb);
    div.setAttribute("colorName", lessonColors[i].name);
    div.addEventListener("click", select);

    tableContainer.appendChild(div);
  }
  colors = document.getElementsByClassName("tableItem");
}

function createShapes () {
  let div, num, text;
  for (let i = 0; i < itemsLength; i++) {
    num = parseInt(getRandomArbitrary(0, tableLength))
    items.push(new ShapeItem(shapes[parseInt(getRandomArbitrary(0, shapesLength))],
      lessonColors[num].rgb, lessonColors[num].name
    ));
  }

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



function select () {
  if(this.parentElement == tableContainer) {
    col1 = this;
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
  if (col1.getAttribute("colorName") == col2.firstElementChild.innerHTML) {
    col2.removeEventListener("click", select);
    col2.style.setProperty("background-color", col1.style.getPropertyValue("background-color"));
    currentItems++;
    if (currentItems < itemsLength + 2) {
      if(currentItems < itemsLength) {
        setTimeout(statusRefresher, 500);
        return;
      } else {
        col1 = undefined;
        col2 = undefined;
        return;
      }
    } else {
      alert("You Won");
    }
    
  } else {
    col1 = undefined;
    col2 = undefined;
  }
}
  
function statusRefresher () {
  col2.classList.replace(col2.classList[1], items[currentItems].shape);
  col2.firstElementChild.innerHTML = items[currentItems].name;
  col2.style.setProperty("background-color", initialBackground);
  col2.addEventListener("click", select);
  col1 = undefined;
  col2 = undefined;
}