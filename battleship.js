// sets grid rows and columns and the size of each square
var rows = 10;
var cols = 10;
var squareSize = 50;

var hitCounter = 16;
var aFire=new Audio()
aFire.src='Gunshot.mp3';

// gets the container element
var gameBoardContainer = document.getElementById("gameboard");

// you can use this to convert your letters into numbers for use
// with the 2D array

var letterArray = ["A","B","C","D","E","F","G","H","I","J"];


var letterConversion = {
	"A": 0,
	"B": 1,
	"C": 2,
	"D": 3,
	"E": 4,
	"F": 5,
	"G": 6,
	"H": 7,
	"I": 8,
	"J": 9
}

// makes the grid columns and rows
for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {

		// creates a new div HTML element for each grid square and makes it the right size
		var square = document.createElement("div");
		gameBoardContainer.appendChild(square);

    // give each div element a unique id based on its row and column, like "s00"
		square.id = 's' + j + i;
		square.className = "boardSquare";

		// THIS IS WHERE YOU WILL ADD CODE FOR PART 1 TO ADD TEXT TO EACH SQUARE
 			square.textContent = i + 1;
			square.textContent = letterArray[j] + (i + 1);

		// set each grid square's coordinates: multiples of the current row or column number
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;

		// use CSS absolute positioning to place each grid square on the page
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';
	}
}



// Hardcoded 2D array to indicate where the ships are placed
var gameBoard = [
				[0,0,0,1,1,1,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[1,0,0,0,0,0,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0]
				]


function fireTorpedo() {
	aFire.play();
	var userInput = $("#myInputBox").val();
	var row = userInput.substring(0,1);
	var column = userInput.substring(1,3);
	var letterR = letterConversion[row];
	var letterC = column - 1;

	var combine = 's' + letterR + letterC;
	//console.log("userInput is " + userInput);
//console.log("letterR is " + letterR);
//console.log("letterC is " + letterC);

	if(gameBoard[letterR][letterC] == 1) {
		$("#" + combine).css("background-color", "purple");
		hitCounter++;
		console.log(hitCounter);

	}
	else {
		$("#" + combine).css("background-color", "gray");
	}

	if (hitCounter == 17) {
		console.log("destroyed");
		$("#your_winner").fadeIn();
		// Get the modal
		var modal = document.getElementById('your_winner');

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on the button, open the modal


		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		    modal.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		    if (event.target == modal) {
		        modal.style.display = "none";
		    }
		}

	}
}
