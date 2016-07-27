'use strict';






  $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").val("");




          const winner = function () {
            for (let i = 1; i <= 3; i++) {

              // let domId = '#R' + i + 'C1';
              // console.log(domId);



              //horizontally X
              if($("#R" + i + "C1").text() === "X" && $("#R" + i + "C1").text() === $("#R" + i + "C2").text() &&
              $("#R" + i + "C1").text() === $("#R" + i + "C3").text()){

                  // $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3, fieldset, input, footer, nav").hide();

                // $("body.container-fluid").css("background-image" , "url(http://i.imgur.com/iVfCqyp.jpg)");

                console.log("X won!");


              // horizontally O
              } else if ($("#R" + i + "C1").text() === "O" && $("#R" + i + "C1").text() === $("#R" + i + "C2").text() &&
              $("#R" + i + "C1").text() === $("#R" + i + "C3").text()) {

                console.log("O won!");


              // vertically X
            } else if ($("#R1" + "C" + i).text() === "X" && $("#R1" + "C" + i).text() === $("#R2" + "C" + i).text() &&
              $("#R1" + "C" + i).text() === $("#R3" + "C" + i).text()) {

                // $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3, fieldset, input, footer, nav").hide();

              // $("body.container-fluid").css("background-image" , "url(http://i.imgur.com/iVfCqyp.jpg)");

                console.log("X won!");

              } else if ($("#R1" + "C" + i).text() === "O" && $("#R1" + "C" + i).text() === $("#R2" + "C" + i).text() &&
                $("#R1" + "C" + i).text() === $("#R3" + "C" + i).text()) {

                  console.log("O won!");

              }

            }

            // diagonally X left to right
            if($("#R1C1").text() === "X" &&  $("#R1C1").text() === $("#R2C2").text() && $("#R1C1").text() === $("#R3C3").text()){


              // $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3, fieldset, input, footer, nav").hide();

            // $("body.container-fluid").css("background-image" , "url(http://i.imgur.com/iVfCqyp.jpg)");

              console.log("X won!");


            // diagonally O left to right
            } else if ($("#R1C1").text() === "O" &&  $("#R1C1").text() === $("#R2C2").text() && $("#R1C1").text() === $("#R3C3").text()) {

              console.log("O won!");
            }

            // diagonally X right to left
            if($("#R1C3").text() === "X" &&  $("#R1C3").text() === $("#R2C2").text() && $("#R1C3").text() === $("#R3C1").text()){

              // $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3, fieldset, input, footer, nav").hide();

            // $("body.container-fluid").css("background-image" , "url(http://i.imgur.com/iVfCqyp.jpg)");


              console.log("X won!");


            // diagonally X right to left
            } else if ($("#R1C3").text() === "O" &&  $("#R1C3").text() === $("#R2C2").text() && $("#R1C3").text() === $("#R3C1").text()) {

              console.log("O won!");
            }


          };

let game = function () {

let gameBoard = ["", "", "", "", "", "", "", "", ""];

    let checkWinner = 0;
    let counter = 0;

  //
  //   if (myWinnerFlag == 0 && myStepCounter == 9) {
  // 		if(document.all) {
  // 			document.getElementById("PLAYER").innerText = "";
  // 			document.getElementById("WINNER").innerText = "Let's call it a draw!";
  // 		}
  // 		else {
  // 			document.getElementById("PLAYER").textContent = "";
  // 			document.getElementById("WINNER").textContent = "Let's call it a draw!";
  // 		}
  // 	}
  // }

let whoWon = function () {


         if(checkWinner === 0 && counter === 9){
            alert("Nobody wins!");
         }

};






    let turn = "O";

    $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").click(function(){

      let cell = $(this);

      if(turn === "O"){

            turn = "X";

            cell.html("<span class='X'><b>X</b></span>");
            cell.val("X");

            let index = gameBoard.indexOf("");

                if (index !== -1) {
                    gameBoard[index] = "X";
                }

                console.log(gameBoard);


                 $(this).off();

                 winner();
                 counter++;
                 whoWon();
                //  alert(counter);

      } else {

            turn = "O";

            cell.html("<span class='O'><b>O</b></span>");
            cell.val("O");

            let index = gameBoard.indexOf("");

                if (index !== -1) {
                    gameBoard[index] = "O";
                }

                console.log(gameBoard);



            $(this).off();

                 winner();
                 counter++;
                //  alert(counter);
                whoWon();


          }
        }
    );

};



$(document).ready(game());


$("#reset-button").click(function () {

        $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").empty();
        $("#R1C1, #R1C2, #R1C3, #R2C1, #R2C2, #R2C3, #R3C1, #R3C2, #R3C3").val("");
        game();

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
