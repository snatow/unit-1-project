// console.log("working");

//put in widow.onload at the end!!!!!

//cells
var $1A = $("#1A");
var $2A = $("#2A");
var $3A = $("#3A");
var $4A = $("#4A");
var $5A = $("#5A");
var $6A = $("#6A");

var $1B = $("#1B");
var $2B = $("#2B");
var $3B = $("#3B");
var $4B = $("#4B");
var $5B = $("#5B");
var $6B = $("#6B");

var $1C = $("#1C");
var $2C = $("#2C");
var $3C = $("#3C");
var $4C = $("#4C");
var $5C = $("#5C");
var $6C = $("#6C");

var $1D = $("#1D");
var $2D = $("#2D");
var $3D = $("#3D");
var $4D = $("#4D");
var $5D = $("#5D");
var $6D = $("#6D");

var $1E = $("#1E");
var $2E = $("#2E");
var $3E = $("#3E");
var $4E = $("#4E");
var $5E = $("#5E");
var $6E = $("#6E");

var $1F = $("#1F");
var $2F = $("#2F");
var $3F = $("#3F");
var $4F = $("#4F");
var $5F = $("#5F");
var $6F = $("#6F");

var $1G = $("#1G");
var $2G = $("#2G");
var $3G = $("#3G");
var $4G = $("#4G");
var $5G = $("#5G");
var $6G = $("#6G");

//columns - to use to fill in cells
var $columnA = [$1A, $2A, $3A, $4A, $5A, $6A];
var $columnB = [$1B, $2B, $3B, $4B, $5B, $6B];
var $columnC = [$1C, $2C, $3C, $4C, $5C, $6C];
var $columnD = [$1D, $2D, $3D, $4D, $5D, $6D];
var $columnE = [$1E, $2E, $3E, $4E, $5E, $6E];
var $columnF = [$1F, $2F, $3F, $4F, $5F, $6F];
var $columnG = [$1G, $2G, $3G, $4G, $5G, $6G];

//winning conditions
var $win01 = [$1A, $1B, $1C, $1D];
var $win02 = [$2A, $2B, $2C, $2D];
var $win03 = [$3A, $3B, $3C, $3D];
var $win04 = [$4A, $4B, $4C, $4D];
var $win05 = [$5A, $5B, $5C, $5D];
var $win06 = [$6A, $6B, $6C, $6D];
var $win07 = [$1B, $1C, $1D, $1E];
var $win08 = [$2B, $2C, $2D, $2E];
var $win09 = [$3B, $3C, $3D, $3E];
var $win10 = [$4B, $4C, $4D, $4E];
var $win11 = [$5B, $5C, $5D, $5E];
var $win12 = [$6B, $6C, $6D, $6E];
var $win13 = [$1C, $1D, $1E, $1F];
var $win14 = [$2C, $2D, $2E, $2F];
var $win15 = [$3C, $3D, $3E, $3F];
var $win16 = [$4C, $4D, $4E, $4F];
var $win17 = [$5C, $5D, $5E, $5F];
var $win18 = [$6C, $6D, $6E, $6F];
var $win19 = [$1D, $1E, $1F, $1G];
var $win20 = [$2D, $2E, $2F, $2G];
var $win21 = [$3D, $3E, $3F, $3G];
var $win22 = [$4D, $4E, $4F, $4G];
var $win23 = [$5D, $5E, $5F, $5G];
var $win24 = [$6D, $6E, $6F, $6G];
var $win25 = [$1A, $2A, $3A, $4A];
var $win26 = [$1B, $2B, $3B, $4B];
var $win27 = [$1C, $2C, $3C, $4C];
var $win28 = [$1D, $2D, $3D, $4D];
var $win29 = [$1E, $2E, $3E, $4E];
var $win30 = [$1F, $2F, $3F, $4F];
var $win31 = [$1G, $2G, $3G, $4G];
var $win32 = [$2A, $3A, $4A, $5A];
var $win33 = [$2B, $3B, $4B, $5B];
var $win34 = [$2C, $3C, $4C, $5C];
var $win35 = [$2D, $3D, $4D, $5D];
var $win36 = [$2E, $3E, $4E, $5E];
var $win37 = [$2F, $3F, $4F, $5F];
var $win38 = [$2G, $3G, $4G, $5G];
var $win39 = [$3A, $4A, $5A, $6A];
var $win40 = [$3B, $4B, $5B, $6B];
var $win41 = [$3C, $4C, $5C, $6C];
var $win42 = [$3D, $4D, $5D, $6D];
var $win43 = [$3E, $4E, $5E, $6E];
var $win44 = [$3F, $4F, $5F, $6F];
var $win45 = [$3G, $4G, $5G, $6G];
var $win46 = [$1A, $2B, $3C, $4D];
var $win47 = [$2A, $3B, $4C, $5D];
var $win48 = [$3A, $4B, $5C, $6D];
var $win49 = [$1B, $2C, $3D, $4E];
var $win50 = [$2B, $3C, $4D, $5E];
var $win51 = [$3B, $4C, $5D, $6E];
var $win52 = [$1C, $2D, $3E, $4F];
var $win53 = [$2C, $3D, $4E, $5F];
var $win54 = [$3C, $4D, $5E, $6F];
var $win55 = [$1D, $2E, $3F, $4G];
var $win56 = [$2D, $3E, $4F, $5G];
var $win57 = [$3D, $4E, $5F, $6G];
var $win58 = [$6A, $5B, $4C, $3D];
var $win59 = [$5A, $4B, $3C, $2D];
var $win60 = [$4A, $3B, $2C, $1D];
var $win61 = [$6B, $5C, $4D, $3E];
var $win62 = [$5B, $4C, $3D, $2E];
var $win63 = [$4B, $3C, $2D, $1E];
var $win64 = [$6C, $5D, $4E, $3F];
var $win65 = [$5C, $4D, $3E, $2F];
var $win66 = [$4C, $3D, $2E, $1F];
var $win67 = [$6D, $5E, $4F, $3G];
var $win68 = [$5D, $4E, $3F, $2G];
var $win69 = [$4D, $3E, $2F, $1G];

//players
var $player1;
var $player2;

//variable to see if a player has won, and therefore inactivate the board
var someoneHasWon = 0;

//click counter
var $click = 0;

//submit button on form - not currently working
$("#submit-button").click(function(event) {
  event.preventDefault()
  $player1 = $("#P1").val().toUpperCase();
  $player2 = $("#P2").val().toUpperCase();
  // console.log($player1);
  // console.log($player2);
  $("h1").html($player1 + ", it's your turn")
  return $player1;
  return $player2;
  //trying to get the form to dissappear on click, this doesn't work
  // $("#form").css("visibility", hidden);
});

//=================================================================================
//how players interact with the board

//this version is much more efficient. Not sure why .get().reverse() turns the jquery object into a javascript function . . .

$(".col").click(function() {
  //increase turn count, move from player 1 to player 2 and vice versa
  $click += 1;
  // console.log($(this));
  // console.log($(this).children("div").length);
  //if someoneHasWon is set to 1, one of the players has created a winning combination, and game play should stop
  if (someoneHasWon == 1) {
    // console.log("game is over");
  } else {
    //gets an array of all of the elements in the column clicked and then reverses their order so we can iterate over the column from the bottom up and not the top down
    var columnReverse = $(this).children("div").get().reverse();
    // console.log($columnReverse[0]);
    // puts into action moves for player 2 (all even turns)
    if ($click%2 === 0) {
      $("h1").html($player1 + ", it's your turn")
      for (var i = 0; i < columnReverse.length; i++) {
        // accounts for cells already containing player avatars
        if ($(columnReverse[i]).hasClass("player1") || $(columnReverse[i]).hasClass("player2")) {
          // console.log("no move here");
        } else {
          //assigns player 2 avatar to lowest available cell in column
          $(columnReverse[i]).addClass("player2");
          $winCheck();
          //removes click handler if 6 avatars have been added to this column
          if (i == 5) {
            $(this).unbind("click");
          }
          break;
        }
      }
    } else if ($click%2 !==0 ) {
      $("h1").html($player2 + ", it's your turn")
      for (var j = 0; j < columnReverse.length; j++) {
        // console.log($columnReverse[j]);
        // accounts for cells already containing player avatars
        if ($(columnReverse[j]).hasClass("player1") || $(columnReverse[j]).hasClass("player2")) {
          // console.log("no move here");
        } else {
          //assigns player 1 avatar to lowest available cell in column
          $(columnReverse[j]).addClass("player1");
          $winCheck();
          //removes click handler if 6 avatars have been added to this column
          if (j == 5) {
            $(this).unbind("click");
          }
          break;
        }
      }
    }
  }
});

// // for this longer version of the function I have commented what is happening at each step only for the function related to column A. The code is the same for all columns

// $("#colA").click(function() {
//   //increase turn count, move from player 1 to player 2 and vice versa
//   $click += 1;
//   // console.log("click");
//   //if someoneHasWon is set to 1, one of the players has created a winning combination, and game play should stop
//   if (someoneHasWon == 1) {
//     // console.log("game is over");
//   } else {
//       // puts into action moves for player 2 (all even turns)
//     if ($click%2 === 0) {
//       $("h1").html($player1 + ", it's your turn")
//       for (var i = 0; i < $columnA.length; i++) {
//         // accounts for cells already containing player avatars
//         if ($columnA[i].hasClass("player1") || $columnA[i].hasClass("player2")) {
//           // console.log("no move here");
//         } else {
//           //assigns player 2 avatar to lowest available cell in column
//           $columnA[i].addClass("player2");
//           $winCheck();
//           //removes click handler if 6 avatars have been added to this column
//           if (i == 5) {
//             $(this).unbind("click");
//           }
//           //allows computer to leave loop without filling in the rest of the column
//           break;
//         }
//       }
//       // puts into action moves for player 1 (all odd turns)
//     } else if ($click%2 !==0 ) {
//       $("h1").html($player2 + ", it's your turn")
//       for (var j = 0; j < $columnA.length; j++) {
//         if ($columnA[j].hasClass("player1") || $columnA[j].hasClass("player2")) {
//           console.log("no move here");
//         } else {
//           //assigns player 1 avatar to lowest available cell in column
//           $columnA[j].addClass("player1");
//           $winCheck();
//           //removes click handler if 6 avatars have been added to this column
//           if (j == 5) {
//             $(this).unbind("click");
//           }
//           //allows computer to leave loop without filling in the rest of the column
//           break;
//         }
//       }
//     }
//   }
// });

// $("#colB").click(function() {
//   $click += 1;
//   // console.log("click");
//   if (someoneHasWon == 1) {
//     // console.log("game is over");
//   } else {
//     if ($click%2 === 0) {
//       $("h1").html($player1 + ", it's your turn")
//       for (var i = 0; i < $columnB.length; i++) {
//         if ($columnB[i].hasClass("player1") || $columnB[i].hasClass("player2")) {
//           // console.log("no move here");
//         } else {
//           $columnB[i].addClass("player2");
//           $winCheck();
//           if (i == 5) {
//             $(this).unbind("click");
//           }
//           break;
//         }
//       }
//     } else if ($click%2 !==0 ) {
//       $("h1").html($player2 + ", it's your turn")
//       for (var j = 0; j < $columnB.length; j++) {
//         if ($columnB[j].hasClass("player1") || $columnB[j].hasClass("player2")) {
//           // console.log("no move here");
//         } else {
//           $columnB[j].addClass("player1");
//           $winCheck();
//           if (j == 5) {
//             $(this).unbind("click");
//           }
//           break;
//         }
//       }
//     }
//   }
// });

// $("#colC").click(function() {
//   $click += 1;
//   // console.log("click");
//   if (someoneHasWon == 1) {
//     // console.log("game is over");
//   } else {
//     if ($click%2 === 0) {
//       $("h1").html($player1 + ", it's your turn")
//       for (var i = 0; i < $columnC.length; i++) {
//         if ($columnC[i].hasClass("player1") || $columnC[i].hasClass("player2")) {
//           // console.log("no move here");
//         } else {
//           $columnC[i].addClass("player2");
//           $winCheck();
//           if (i == 5) {
//             $(this).unbind("click");
//           }
//           break;
//         }
//       }
//     } else if ($click%2 !==0 ) {
//       $("h1").html($player2 + ", it's your turn")
//       for (var j = 0; j < $columnC.length; j++) {
//         if ($columnC[j].hasClass("player1") || $columnC[j].hasClass("player2")) {
//           // console.log("no move here");
//         } else {
//           $columnC[j].addClass("player1");
//           $winCheck();
//           if (j == 5) {
//             $(this).unbind("click");
//           }
//           break;
//         }
//       }
//     }
//   }
// });

// $("#colD").click(function() {
//   $click += 1;
//   // console.log("click");
//   if (someoneHasWon == 1) {
//     // console.log("game is over");
//   } else {
//     if ($click%2 === 0) {
//       $("h1").html($player1 + ", it's your turn")
//       for (var i = 0; i < $columnD.length; i++) {
//         if ($columnD[i].hasClass("player1") || $columnD[i].hasClass("player2")) {
//           // console.log("no move here");
//         } else {
//           $columnD[i].addClass("player2");
//           $winCheck();
//           if (i == 5) {
//             $(this).unbind("click");
//           }
//           break;
//         }
//       }
//     } else if ($click%2 !==0 ) {
//       $("h1").html($player2 + ", it's your turn")
//       for (var j = 0; j < $columnD.length; j++) {
//         if ($columnD[j].hasClass("player1") || $columnD[j].hasClass("player2")) {
//           // console.log("no move here");
//         } else {
//           $columnD[j].addClass("player1");
//           $winCheck();
//           if (j == 5) {
//             $(this).unbind("click");
//           }
//           break;
//         }
//       }
//     }
//   }
// });

// $("#colE").click(function() {
//   $click += 1;
//   // console.log("click");
//   if (someoneHasWon == 1) {
//     // console.log("game is over");
//   } else {
//       if ($click%2 === 0) {
//         $("h1").html($player1 + ", it's your turn")
//       for (var i = 0; i < $columnE.length; i++) {
//         if ($columnE[i].hasClass("player1") || $columnE[i].hasClass("player2")) {
//           // console.log("no move here");
//         } else {
//           $columnE[i].addClass("player2");
//           $winCheck();
//           if (i == 5) {
//             $(this).unbind("click");
//           }
//           break;
//         }
//       }
//     } else if ($click%2 !==0 ) {
//       $("h1").html($player2 + ", it's your turn")
//       for (var j = 0; j < $columnE.length; j++) {
//         if ($columnE[j].hasClass("player1") || $columnE[j].hasClass("player2")) {
//           // console.log("no move here");
//         } else {
//           $columnE[j].addClass("player1");
//           $winCheck();
//           if (j == 5) {
//             $(this).unbind("click");
//           }
//           break;
//         }
//       }
//     }
//   }
// });

// $("#colF").click(function() {
//   $click += 1;
//   // console.log("click");
//   if (someoneHasWon == 1) {
//     // console.log("game is over");
//   } else {
//     if ($click%2 === 0) {
//       $("h1").html($player1 + ", it's your turn")
//       for (var i = 0; i < $columnF.length; i++) {
//         if ($columnF[i].hasClass("player1") || $columnF[i].hasClass("player2")) {
//           // console.log("no move here");
//         } else {
//           $columnF[i].addClass("player2");
//           $winCheck();
//           if (i == 5) {
//             $(this).unbind("click");
//           }
//           break;
//         }
//       }
//     } else if ($click%2 !==0 ) {
//       $("h1").html($player2 + ", it's your turn")
//       for (var j = 0; j < $columnF.length; j++) {
//         if ($columnF[j].hasClass("player1") || $columnF[j].hasClass("player2")) {
//           // console.log("no move here");
//         } else {
//           $columnF[j].addClass("player1");
//           $winCheck();
//           if (j == 5) {
//             $(this).unbind("click");
//           }
//           break;
//         }
//       }
//     }
//   }
// });

// $("#colG").click(function() {
//   $click += 1;
//   // console.log("click");
//   if (someoneHasWon == 1) {
//     // console.log("game is over");
//   } else {
//     if ($click%2 === 0) {
//       $("h1").html($player1 + ", it's your turn")
//       for (var i = 0; i < $columnG.length; i++) {
//         if ($columnG[i].hasClass("player1") || $columnG[i].hasClass("player2")) {
//           // console.log("no move here");
//         } else {
//           $columnG[i].addClass("player2");
//           $winCheck();
//           if (i == 5) {
//             $(this).unbind("click");
//           }
//           break;
//         }
//       }
//     } else if ($click%2 !==0 ) {
//       $("h1").html($player2 + ", it's your turn")
//       for (var j = 0; j < $columnG.length; j++) {
//         if ($columnG[j].hasClass("player1") || $columnG[j].hasClass("player2")) {
//           // console.log("no move here");
//         } else {
//           $columnG[j].addClass("player1");
//           $winCheck();
//           if (j == 5) {
//             $(this).unbind("click");
//           }
//           break;
//         }
//       }
//     }
//   }
// });

//=================================================================================
//how to check for a winner

//will return array of all of the elements in a winning condition as defined above that contain the first players avatar
var $containsP1 = function(element) {
  if (element.hasClass("player1")) {
    return true;
  }
};

//will return array of all of the elements in a winning condition as defined above that contain the second players avatar
var $containsP2 = function(element) {
  if (element.hasClass("player2")) {
    return true;
  }
}

//use filter to see how long the resulting arrays are - if the array has a length of 4, all elements in the array have the player's avatar, and there is a win
//if a player wins, the function changes the value of someoneHasWon to 1 so that no more moves can be played
var $winCheck = function() {
  if ($click < 7) {
    // console.log("not enough moves");
  } else {
    // console.log("winning");
    if ($win01.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win01.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win02.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win02.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win03.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win03.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win04.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win04.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win05.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win05.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win06.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win06.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win07.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win07.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win08.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win08.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win09.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win09.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win10.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win10.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win11.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win11.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win12.filter($containsP1).length == 4) {
      a$("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win12.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win13.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win13.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win14.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win14.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win15.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win15.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win16.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win16.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win17.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win17.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win18.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win18.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win19.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win19.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win20.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win20.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win21.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win21.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win22.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win22.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win23.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win23.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win24.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win24.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win25.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win25.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win26.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win26.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win27.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win27.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win28.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win28.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win29.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win29.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win30.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win30.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win31.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win31.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win32.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win32.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win33.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win33.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win34.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win34.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win35.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win35.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win36.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win36.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win37.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win37.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win38.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win38.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win39.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win39.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win40.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win40.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win41.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win41.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win42.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win42.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win43.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win43.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win44.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win44.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win45.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win45.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win46.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win46.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win47.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win47.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win48.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win48.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win49.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win49.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win50.filter($containsP1).length == 4) {
      a$("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win50.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win51.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win51.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win52.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win52.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win53.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win53.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win54.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win54.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win55.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win55.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win56.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win56.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win57.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win57.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win58.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win58.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win59.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win59.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win60.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win60.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win61.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win61.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win62.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win62.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win63.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win63.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win64.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win64.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win65.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win65.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win66.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win66.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win67.filter($containsP1).length == 4) {
      a$("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win67.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win68.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win68.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else if ($win69.filter($containsP1).length == 4) {
      $("h1").html($player1 + " has won!");
      someoneHasWon = 1;
    } else if ($win69.filter($containsP2).length == 4) {
      $("h1").html($player2 + " has won!");
      someoneHasWon = 1;
    } else {
      //there are only 42 possible moves, so if there are no win conditions found before 42 turns, the game ends in a tie
      if ($click == 42) {
        $("h1").html("The players have tied");
      }
    }
  }
}





