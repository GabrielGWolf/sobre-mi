var blockSize = 25;
var total_row = 17; //total row number
var total_col = 17; //total column number
var board;
var context;

var carX = 0;
var carY = 0;

// Set the total number of rows and columns
var speedX = 0; //speed of car in x coordinate.
var speedY = 0; //speed of car in Y coordinate.

var car = [];

var gameOver = false;

window.onload = function () {
	// Set board height and width
	board = document.getElementById("board");
	board.height = total_row * blockSize;
	board.width = total_col * blockSize;
	context = board.getContext("2d");

	document.addEventListener("keyup", changeDirection); //for movements
	// Set car speed
	setInterval(update, 10000 / 100);
}

function update() {
	if (gameOver) {
		return;
	}

	// Background of a Game
	context.fillStyle = "lightgrey";
	context.fillRect(0, 0, board.width, board.height);
	
	//Update Position Car
	car[0] = [carX, carY];
	context.fillStyle = "black";
	carX += speedX * blockSize; //updating car position in X coordinate.
	carY += speedY * blockSize; //updating car position in Y coordinate.
	context.fillRect(carX, carY, blockSize, blockSize);
	isOUT(); 
	isCrash();
	
}

// Movement of the car - We are using addEventListener
function changeDirection(e) {
	if (e.code == "ArrowUp" && speedY != 1) {
		// If up arrow key pressed with this condition...
		// car will not move in the opposite direction
		speedX = 0;
		speedY = -1;
	}
	else if (e.code == "ArrowDown" && speedY != -1) {
		//If down arrow key pressed
		speedX = 0;
		speedY = 1;
	}
	else if (e.code == "ArrowLeft" && speedX != 1) {
		//If left arrow key pressed
		speedX = -1;
		speedY = 0;
	}
	else if (e.code == "ArrowRight" && speedX != -1) {
		//If Right arrow key pressed
		speedX = 1;
		speedY = 0;
	}
}

function isOUT() {
	if (carX < 0
		|| carX > total_col * blockSize
		|| carY < 0
		|| carY > total_row * blockSize) {
		
		// Out of bound condition
		gameOver = true;
		alert("Game Over");
	}
}
function isCrash() {
	
}