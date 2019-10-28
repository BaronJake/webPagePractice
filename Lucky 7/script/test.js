function rollDice(numSides) {
  return Math.floor(Math.random() * numSides) + 1;
}

function hideTable(){
  document.getElementById("results").style.display = "none";
}

function luckySevens(){
  var bet = document.forms["form"]["bet"].value;
  document.getElementById("starting").innerHTML = bet;
  var maxBet = bet;
  var count = 0;
  var maxCount = 0;
  if (bet == "" || isNaN(bet) || bet <= 0){
    alert("Please enter a valid bet");
    return false;
  }
  while (bet > 0) {
    dice = rollDice(6) + rollDice(6);
    count = count += 1;
    if (dice == 7){
      bet = bet + 4;
    }
    else{
      bet = bet - 1;
    }
    if (bet > maxBet){
      maxBet = bet;
      maxCount = count;
    }
  }
  document.getElementById("rolls").innerHTML= count;
  document.getElementById("amt").innerHTML = maxBet;
  document.getElementById("rollHigh").innerHTML = maxCount;
  document.getElementById("results").style.display = "block";
  return false;
}
