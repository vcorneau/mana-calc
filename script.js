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

function displayCardsRequired(type, typeId) {
  const cardsRequired = document.getElementById(typeId);
  cardsRequired.innerHTML = "Cards required : " + type;
}

function cardsNeeded(pip, total, required) {
  let numberOfCards = Math.floor(pip/total*required);

  return numberOfCards;
}

function submitCalc(event) {
  event.preventDefault();
  document.getElementsByClassName("pipCount");
  let swampPip = parseFloat(swampPipCount.value);
  let forestPip = parseFloat(forestPipCount.value);
  let islandPip = parseFloat(islandPipCount.value);
  let mountainPip = parseFloat(mountainPipCount.value);
  let plainsPip = parseFloat(plainsPipCount.value);
  let required = parseFloat(requiredCount.value);
  let total = parseFloat(sumPips(swampPip, forestPip, islandPip, mountainPip, plainsPip));

  let swampCards = cardsNeeded(swampPip, total, required);
  let forestCards = cardsNeeded(forestPip, total, required);
  let islandCards = cardsNeeded(islandPip, total, required);
  let mountainCards = cardsNeeded(mountainPip, total, required);
  let plainsCards = cardsNeeded(plainsPip, total, required);
  
  displayCardsRequired(swampCards, "swampRequired");
  displayCardsRequired(forestCards, "forestRequired");
  displayCardsRequired(islandCards, "islandRequired");
  displayCardsRequired(mountainCards, "mountainRequired");
  displayCardsRequired(plainsCards, "plainsRequired");
  displayTotal(total);
}

