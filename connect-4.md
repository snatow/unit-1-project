#MVP Criteria

- two player game with two avatars, black and red 

- on page load - form at the top that allows both players to submit their names and below game board with 6 rows and 7 columns
- once submit button is clicked, form dissappears 

- board must account for gravity in placing of the pieces
  I have an idea for gravity, not sure if it is viable
  - using z scores, overlay seven clear elements on top of the board that have the click events attached that activate functions that fill the columns from the bottom up with the different player avatars

- turn counter to force the game to switch off between the two players
  - need to make sure that clicks that don't result in moves don't register as turns

- a function to check for a win
  I have some thoughts on this also
  - have all of the winning combinations hard coded for reference
  - compare current board (after 7 turns have happened) every turn to see if the board contains any of the winning combinations - if a winning combination is found, an alert signals the end of the game
  - if 41 turns are played and no winning combinations found, an alert signals a tie

#Bonus Features
- on page load - form that allows both players to submit their names

- once submit button is clicked, the form dissapears and the game board is generated with 6 rows and 7 columns (numbers for rows, letters for columns)
  - if I am going to render the board once the players have submitted their names, then I can attach this code to a replay button

- scoreboard that tallies the number of wins for each player

- a one player version: I can see two different AI's to play against, one that just plays randomly and one that uses strategy

#Project Plan
(this is all in a perfect world, as I would like to be able to have the board generate itself upon button click so that the game can be replayed over and over)
Tuesday
- basic html and css to see the game board (done)
- function to capture names of players (done)
- ability to remove form from window (done)
- hard coded elements for winning conditions (done)
- start work on gravity (done)

Wednesday
- finish work on gravity - test extensively (done)
- hard code long version of win check (done) - if time start more elegant version (done)
- finish elegant win check function (done)

Thursday
- more css to style game - animate pieces being added to the board (done)
- readme.md as required by the prompt
- set up hosting on github
- tie board generation to start/reset button

#UXUI
- The initial version of this game will be for two players. Player 1 will load the page, and type his or her name into the form field labeled Player 1 and Player 2 will type his or her name into the form field labeled Player 2 and click a submit button. This information will be stored and linked to the turn counter so that the top of the screen can announce who's turn it is. Player 1 will be red, player 2 will be black
- Players will click on columns within the game board to drop pieces with their avatars onto the game board at the lowest point available on the board in that column. Players will alternate turns until either a winning condition is met, which will be signaled by an alert, or if there is a tie

- To start, the window will have a bit of a header that will contain the form for name collection as well as the h1 element to say who's turn it is, and then most of the remaining space in the window will house the game board itself. If I get to the point where I can generate the game board using a button, I can readjust the placement of the form down on the page, but will keep a header to house the score board and turn message.

#Misc.
- do you think my plan for gravity is a reasonable one? Any advice for trouble shooting it/building elements that lay over others that house the click handlers?
- Any thoughts on binding/unbinding click handlers? I have a hard time working around a removed event handler and reattaching it to restart a game
- Any strategies for working around hard coding the check win function? I think I can use some of the logic I employed for tic tac toe, but I would like to try to make this more efficient

#Images and other Assets
http://www.nonkit.com/smallbasic.files/Connect4Board.png
