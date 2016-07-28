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


// I have an array with 9 elements
// I need to replace an element on a certain index that is connected with id of a box when it is clicked

// So, each element in an array should represent an id of a box that is clicked

        // 1 element
              if ($("#R1C1").text() === "X"){


                gameBoard[0] = $("#R1C1").text();

              } else if ($("#R1C1").text() === "O") {
                gameBoard[0] = $("#R1C1").text();

              }else {
                gameBoard[0] = "";
              }



        // 2 element
              if ($("#R1C2").text() === "X"){

                gameBoard[1] = $("#R1C2").text();

              } else if ($("#R1C2").text() === "O") {
                gameBoard[1] = $("#R1C2").text();

              }else {
                gameBoard[1] = "";
              }


        // 3 element
              if ($("#R1C3").text() === "X"){

                gameBoard[2] = $("#R1C3").text();


              } else if ($("#R1C3").text() === "O") {
                gameBoard[2] = $("#R1C3").text();


              }else {
                gameBoard[2] = "";
              }


      // 4 element
            if ($("#R2C1").text() === "X"){

              gameBoard[3] = $("#R2C1").text();

            } else if ($("#R2C1").text() === "O") {
              gameBoard[3] = $("#R2C1").text();


            }else {
              gameBoard[3] = "";
            }


      // 5 element
            if ($("#R2C2").text() === "X"){

              gameBoard[4] = $("#R2C2").text();

            } else if ($("#R2C2").text() === "O") {
              gameBoard[4] = $("#R2C2").text();

            }else {
              gameBoard[4] = "";
            }


      // 6 element
            if ($("#R2C3").text() === "X"){

              gameBoard[5] = $("#R2C3").text();

            } else if ($("#R2C2").text() === "O") {
              gameBoard[5] = $("#R2C3").text();

            }else {
              gameBoard[5] = "";
            }


      // 7 element
            if ($("#R3C1").text() === "X"){

              gameBoard[6] = $("#R3C1").text();

            } else if ($("#R3C1").text() === "O") {
              gameBoard[6] = $("#R3C1").text();

            }else {
              gameBoard[6] = "";
            }


      // 8 element
            if ($("#R3C2").text() === "X"){

              gameBoard[7] = $("#R3C2").text();

            } else if ($("#R3C2").text() === "O") {
              gameBoard[7] = $("#R3C2").text();

            }else {
              gameBoard[7] = "";
            }


      // 8 element
            if ($("#R3C3").text() === "X"){

              gameBoard[8] = $("#R3C3").text();

            } else if ($("#R3C3").text() === "O") {
              gameBoard[8] = $("#R3C3").text();

            }else {
              gameBoard[8] = "";
            }




            console.log(gameBoard);













            //
            //   if($(this).val() === "X"){
            //
            //    gameBoard.splice(1,0, $(this));
            //
            //   }
            //
            //
            // console.log(gameBoard);

                        //
                        // let index = gameBoard.indexOf("");
                        //
                        //     if (index !== -1) {
                        //         gameBoard[index] = "X";
                        //     }
                        //
                        //     console.log(gameBoard);




                 $(this).off();

                 winner();
                 counter++;
                 whoWon();
                //  alert(counter);

      } else {

            turn = "O";

            cell.html("<span class='O'><b>O</b></span>");
            cell.val("O");

            // let index = gameBoard.indexOf("");
            //
            //     if (index !== -1) {
            //         gameBoard[index] = "O";
            //     }
            //
            //     console.log(gameBoard);
            //
            //

            // 1 element
                  if ($("#R1C1").text() === "X"){

                    gameBoard[0] = $("#R1C1").text();

                  } else if ($("#R1C1").text() === "O") {
                    gameBoard[0] = $("#R1C1").text();

                  }else {
                    gameBoard[0] = "";
                  }


                  // 2 element
                        if ($("#R1C2").text() === "X"){

                          gameBoard[1] = $("#R1C2").text();

                        } else if ($("#R1C2").text() === "O") {
                          gameBoard[1] = $("#R1C2").text();

                        }else {
                          gameBoard[1] = "";
                        }


                        // 3 element
                              if ($("#R1C3").text() === "X"){

                                gameBoard[2] = $("#R1C3").text();

                              } else if ($("#R1C3").text() === "O") {
                                gameBoard[2] = $("#R1C3").text();

                              }else {
                                gameBoard[2] = "";
                              }


                      // 4 element
                            if ($("#R2C1").text() === "X"){

                              gameBoard[3] = $("#R2C1").text();

                            } else if ($("#R2C1").text() === "O") {
                              gameBoard[3] = $("#R2C1").text();

                            }else {
                              gameBoard[3] = "";
                            }


                      // 5 element
                            if ($("#R2C2").text() === "X"){

                              gameBoard[4] = $("#R2C2").text();

                            } else if ($("#R2C2").text() === "O") {
                              gameBoard[4] = $("#R2C2").text();

                            }else {
                              gameBoard[4] = "";
                            }


                      // 6 element
                            if ($("#R2C3").text() === "X"){

                              gameBoard[5] = $("#R2C3").text();

                            } else if ($("#R2C2").text() === "O") {
                              gameBoard[5] = $("#R2C3").text();

                            }else {
                              gameBoard[5] = "";
                            }


                      // 7 element
                            if ($("#R3C1").text() === "X"){

                              gameBoard[6] = $("#R3C1").text();

                            } else if ($("#R3C1").text() === "O") {
                              gameBoard[6] = $("#R3C1").text();

                            }else {
                              gameBoard[6] = "";
                            }


                      // 8 element
                            if ($("#R3C2").text() === "X"){

                              gameBoard[7] = $("#R3C2").text();

                            } else if ($("#R3C2").text() === "O") {
                              gameBoard[7] = $("#R3C2").text();

                            }else {
                              gameBoard[7] = "";
                            }


                      // 8 element
                            if ($("#R3C3").text() === "X"){

                              gameBoard[8] = $("#R3C3").text();

                            } else if ($("#R3C3").text() === "O") {
                              gameBoard[8] = $("#R3C3").text();

                            }else {
                              gameBoard[8] = "";
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
