var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons event listeners
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for (var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			if(this.textContent == "Easy")
				numSquares = 3;
			else
				numSquares = 6;
			reset();

		})
	}
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++){
		// add click listeners
		squares[i].addEventListener("click", function() {
			//grab color of clicked color;
			var clickedColor = this.style.backgroundColor;
			console.log(clickedColor);
			if(clickedColor === pickedColor){
				message.textContent = "Correct!!";
				resetButton.textContent = "Play Again!!"
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else{
				message.textContent = "Try Again!!!";
				this.style.backgroundColor = "#232323";
			}
		});
	}
}


function reset(){
	colors = generateRandomColor(numSquares);
	//pick a new random colour
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	message.textContent = "";
	//change colours of squares
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.backgroundColor = colors[i];
		}
		else
			squares[i].style.display = "none";
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
	reset();
});



function changeColors(color) {
	for (var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}


function pickColor(){
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

function generateRandomColor(num){
	//make an array
	var arr = [];

	for (var i = 0; i < num; i++){
		arr.push(randomColors());	
	}

	return arr;
}

function randomColors(){
	//pick a red
	var red = Math.floor(Math.random() * 256);
	//pick a green
	var green = Math.floor(Math.random() * 256);
	//pick a blue
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}