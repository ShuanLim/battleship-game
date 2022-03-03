// declare three variables to hold the location of each cell of the ship
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
// declare a variable to hold the user's current guess
var guess;
// declare a varibale to hold the number of hits
var hits = 0;
// declare a variable to hold the number of guesses
var guesses = 0;
// declare a variable to keep track of whether the ship is sunk or not and set it to false
var isSunk = false

  while (isSunk == false) {
      guess = prompt("Ready, aim, fire! (Enter a number from 0-6:");
      if (guess < 0 || guess > 6) {
          alert("Please enter a valid cell number!");
        }   else {
            guesses = guesses + 1;
      

            if (guess == location1 || guess == location2 || guess == location3) {
            alert("Hit!");
            hits = hits + 1;
        
      
             if (hits == 3) {
              isSunk == true;
              alert("You sunk my battleship!");
            }
            else {
            alert("Miss!")
          }

    }
}
    var stats = "You took " + guesses + " guesses to sink the battleship, " + 
    "which means your shooting accuracy was " + (3/guesses);

    alert(stats);
    
     
}   