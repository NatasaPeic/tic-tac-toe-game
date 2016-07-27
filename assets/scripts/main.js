'use strict';

// let gameBoard = ['','','','','','','','',''];




  // $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").val(0);




          const winner = function () {
            for (let i = 1; i <= 3; i++) {

              // let domId = '#R' + i + 'C1';
              // console.log(domId);



              //horizontally X
              if($("#R" + i + "C1").text() === "X" && $("#R" + i + "C1").text() === $("#R" + i + "C2").text() &&
              $("#R" + i + "C1").text() === $("#R" + i + "C3").text()){

                alert("X won!");


              // horizontally O
              } else if ($("#R" + i + "C1").text() === "O" && $("#R" + i + "C1").text() === $("#R" + i + "C2").text() &&
              $("#R" + i + "C1").text() === $("#R" + i + "C3").text()) {

                alert("O won!");


              // vertically X
            } else if ($("#R1" + "C" + i).text() === "X" && $("#R1" + "C" + i).text() === $("#R2" + "C" + i).text() &&
              $("#R1" + "C" + i).text() === $("#R3" + "C" + i).text()) {

                alert("X won!");

              } else if ($("#R1" + "C" + i).text() === "O" && $("#R1" + "C" + i).text() === $("#R2" + "C" + i).text() &&
                $("#R1" + "C" + i).text() === $("#R3" + "C" + i).text()) {

                  alert("O won!");

              }

            }

            // diagonally X left to right
            if($("#R1C1").text() === "X" &&  $("#R1C1").text() === $("#R2C2").text() && $("#R1C1").text() === $("#R3C3").text()){

              alert("X won!");


            // diagonally O left to right
            } else if ($("#R1C1").text() === "O" &&  $("#R1C1").text() === $("#R2C2").text() && $("#R1C1").text() === $("#R3C3").text()) {

              alert("O won!");
            }

            // diagonally X right to left
            if($("#R1C3").text() === "X" &&  $("#R1C3").text() === $("#R2C2").text() && $("#R1C3").text() === $("#R3C1").text()){

              alert("X won!");


            // diagonally X right to lef
            } else if ($("#R1C3").text() === "O" &&  $("#R1C3").text() === $("#R2C2").text() && $("#R1C3").text() === $("#R3C1").text()) {

              alert("O won!");
            }


          };



    let turn = "O";

    $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").click(function(){

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



$("#reset-button").click(function () {

        $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").empty();
        $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").val("");


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
