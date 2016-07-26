'use strict';



let myWinnerFlag = 0;
let myStepCounter = 0;
let myCurrentSymbol = "X";



function myMarkCell(myCurrentCell) {
	let myCurrentText;

	  myCurrentText = myCurrentCell.textContent;

		myCurrentCell.textContent = myCurrentSymbol;

		myCurrentCell.style.background = "lightgrey";
    myCurrentCell.style.textAlign = "center";


		if (myCurrentSymbol === "X") {
			myCurrentSymbol = "O";


		}
		else {
			myCurrentSymbol = "X";

		}

		myStepCounter++;

		myCheckWin();
	}


  function myCheckWin() {

  	}
