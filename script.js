function Deck(swampPip, forestPip, islandPip, mountainPip, plainsPip) {
  this.swampPip = swampPip;
  this.forestPip = forestPip;
  this.islandPip = islandPip;
  this.mountainPip = mountainPip;
  this.plainsPip = plainsPip;
}


const submit = document.querySelector("#submit");
submit.addEventListener("click", submitCalc);

function sumPips(swampPip, forestPip, islandPip, mountainPip, plainsPip) {
  let total = swampPip + forestPip + islandPip + mountainPip + plainsPip;
  return total;
}

function displayTotal(total) {
  const pipDisplay = document.getElementById("totalPip");
  pipDisplay.innerHTML = "Total Pips : " + total;
}

function submitCalc(event) {
  event.preventDefault();
  document.getElementsByClassName("pipCount");
  let swampPip = parseInt(swampPipCount.value);
  let forestPip = parseInt(forestPipCount.value);
  let islandPip = parseInt(islandPipCount.value);
  let mountainPip = parseInt(mountainPipCount.value);
  let plainsPip = parseInt(plainsPipCount.value);
  let newDeck = new Deck(swampPip, forestPip, islandPip, mountainPip, plainsPip);
  let total = sumPips(swampPip, forestPip, islandPip, mountainPip, plainsPip);
  console.log(newDeck);
  displayTotal(total);
}

