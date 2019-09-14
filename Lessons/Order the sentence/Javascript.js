var buttons = document.getElementsByClassName('lessonButton');
var write = document.getElementById('write');
var reset = document.getElementById('reset');


for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function () {
		this.disabled = true;
		this.style.backgroundColor = "navy";
		var text;
		var aux;
		text = this.innerHTML;
		aux = write.value;
		write.value = aux + " " + text;

	}, false);
}

 reset.addEventListener("click", function () {
	 	for (var i = 0; i < buttons.length; i++) {
	 		buttons[i].disabled = false;
			buttons[i].style.backgroundColor = "rgb(255, 0, 102)";
	 	}
		write.value ="";

 });
