'use strict';


$(document).ready(function(){

  $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").val(0);

let turn = "X";

    $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3")

    .click(

      function(){

let cell = $(this);



  if(turn === "X"){

      turn = "O";
      cell.text("O");
      cell.val("O");

  } else {
       turn = "X";
          cell.text("X");
          cell.val("X");
        }

      }




  );










});

































// let myWinnerFlag = 0;
// let myStepCounter = 0;
// let myCurrentSymbol = "X";
//
//
//
// function myMarkCell(myCurrentCell) {
// 	let myCurrentText;
//
// 	  myCurrentText = myCurrentCell.textContent;
//
// 		myCurrentCell.textContent = myCurrentSymbol;
//
// 		myCurrentCell.style.background = "lightgrey";
//     myCurrentCell.style.textAlign = "center";
//
//
// 		if (myCurrentSymbol === "X") {
// 			myCurrentSymbol = "O";
//
//
// 		}
// 		else {
// 			myCurrentSymbol = "X";
//
// 		}
//
// 		myStepCounter++;
//
// 		myCheckWin();
// 	}

  //
  // function myCheckWin() {
  //
  // 	}
