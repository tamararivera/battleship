var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (!isSunk) {
  guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  }
  else {
    guesses++;
    
    if (guess == location1) {
      location1 = undefined;
      hits++;
      alert("HIT!");
      
    } else if (guess == location2){
      location2 = undefined;
      hits++;
      alert("HIT!");
      
    } else if (guess == location3){
      location3 = undefined;
      hits++;
      alert("HIT!");
    }
    else {
      alert("MISS");
    }
    
    if (hits == 3) {
      isSunk = true;
      alert("You sank my battleship!");
    }
  }
}

var stats = "You took " +  guesses + " guesses to sink the battleship, which means your shooting accuracy was " +  (3/guesses);
alert(stats);