## Connect Four - Zoolander Edition

[location of my project](puturlhere)

### Description
Connect Four - Zoolander Edition is a two-player game in which the fist player takes on the role of Derek Zoolander and the second player takes on the role of Hansel and then take turns dropping colored discs with their faces from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to connect four of one's own discs next to each other vertically, horizontally, or diagonally before your opponent. 

### Tech used
- HTML
- CSS
- Javascript
- jQuery

### Features
- To play the game, players need simply to click on the column in which they wish to drop their disc, and the disc will appear on screen in the lowest available cell within the selected column. 
- Once all cells in a given column are full, that column is inactivated and no more moves can be played in that column.
- On the left of the screen players can input their names into a form. Players do not need to provide their names to play the game. If players choose not to supply their names, the first player to interact with the game board will automatically be named "Player 1" and the second player "Player 2".
- The label for Player 1 is red to let the players know that Player 1's pieces will be red and Player 2's pieces will be black.
- Upon clicking "SUMBIT", the form will capture the names of the players and reveal a score board. It will also reveal a "RESET" button that when clicked will reset the board for a new round of the game. 
- The game will not allow any additional turns to be played once one of the players has won. Therefore, if the players opt not to provide their names, they will not be able to keep track of scores after multiple rounds and will need to refresh the page to play again once one player wins or if there is a tie.
- After the first round of play, the player with the lower score will be afforded the first move on the next round of play. Should the players enter a round of play with tied scores, Player 1 will have the first turn.

### Future Implementations
- A future implementation of the game will include the option to play against a computer. The form for logging your name will allow you to choose either a 1 player game or a 2 player game. 
  - Should the player opt for a 1 player game, they will automatically be assigned to Player 1 and the computer will assume the role of Player 2. The score board will display Player 1's name and Hansel for the computer, and scorekeeping and board resets will be available as in the 2 player version of the game. 
