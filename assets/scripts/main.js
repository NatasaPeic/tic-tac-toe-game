'use strict';

// let gameBoard = ['','','','','','','','',''];




  // $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").val(0);



const winner = function () {
  for (let i = 1; i <= 3; i++) {

    // let domId = '#R' + i + 'C1';
    // console.log(domId);

    if($("#R" + i + "C1").text() === "X" && $("#R" + i + "C1").text() === $("#R" + i + "C2").text() &&
    $("#R" + i + "C1").text() === $("#R" + i + "C3").text()){

      alert("X won!");

  } else if ($("#R" + i + "C1").text() === "O" && $("#R" + i + "C1").text() === $("#R" + i + "C2").text() &&
  $("#R" + i + "C1").text() === $("#R" + i + "C3").text()) {

    alert("O won!");

  }



  }


};




    let turn = "O";

    $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3")

    .click(

      function(){

  let cell = $(this);

  if(turn === "O"){

      turn = "X";

      cell.text("X");
      cell.val("X");
         $(this).off();

    winner();

    } else {
         turn = "O";
            cell.text("O");
            cell.val("O");
            $(this).off();

              winner();
          }
        }
    );
















































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
