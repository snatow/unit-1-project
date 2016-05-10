// console.log("working");


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
var player1;
var player2;

//click counter
var $click = 0;

//submit button on form - not currently working
$("button").click(function() {
  player1 = $("#P1").val();
  player2 = $("#P2").val();
  return player1;
  return player2;
  console.log(player1);
  console.log(player2);
});

//how players interact with the board
$("#colA").click(function() {
  $click += 1;
  console.log("click");
  if ($click%2 === 0) {
    for (var i = 0; i < $columnA.length; i++) {
      if ($columnA[i].hasClass("player1") || $columnA[i].hasClass("player2")) {
        console.log("no move here");
      } else {
        $columnA[i].addClass("player2");
        break;
      }
    }
  } else if ($click%2 !==0 ) {
    for (var j = 0; j < $columnA.length; j++) {
      if ($columnA[j].hasClass("player1") || $columnA[j].hasClass("player2")) {
        console.log("no move here");
      } else {
        $columnA[j].addClass("player1");
        break;
      }
    }
  }
})

$("#colB").click(function() {
  $click += 1;
  console.log("click");
})

$("#colC").click(function() {
  $click += 1;
  console.log("click");
})

$("#colD").click(function() {
  $click += 1;
  console.log("click");
})

$("#colE").click(function() {
  $click += 1;
  console.log("click");
})

$("#colF").click(function() {
  $click += 1;
  console.log("click");
})

$("#colG").click(function() {
  $click += 1;
  console.log("click");
})