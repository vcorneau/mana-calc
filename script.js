const submit = document.querySelector("#submit");
submit.addEventListener("click", submitCalc);

function sumPips(swampPip, forestPip, islandPip, mountainPip, plainsPip) {
  let total = swampPip + forestPip + islandPip + mountainPip + plainsPip;
  return total;
}

function percentage(pipCount, pipTotal) {
  let percentage = Math.floor(pipCount/pipTotal*100);
  return percentage;
}

function displayPercentage(landPercentage, typeId) {
  const percentageDisplay = document.getElementById(typeId);
  if (landPercentage > 0) {
    percentageDisplay.innerHTML = landPercentage + "%";
  } else {
    percentageDisplay.innerHTML = " ";
  }
}

function displayCardsRequired(type, typeId, typeName) {
  const cardsRequired = document.getElementById(typeId);
  if (type > 0) {
    cardsRequired.innerHTML = type + " " + typeName;
  } else {
    cardsRequired.innerHTML = " ";
  }
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

  let swampPercentage = percentage(swampPip, total);
  let forestPercentage = percentage(forestPip, total);
  let islandPercentage = percentage(islandPip, total);
  let mountainPercentage = percentage(mountainPip, total);
  let plainsPercentage = percentage(plainsPip, total);

  displayPercentage(swampPercentage, "swampPercentage");
  displayPercentage(forestPercentage, "forestPercentage");
  displayPercentage(islandPercentage, "islandPercentage");
  displayPercentage(mountainPercentage, "mountainPercentage");
  displayPercentage(plainsPercentage, "plainsPercentage");

  let swampCards = cardsNeeded(swampPip, total, required);
  let forestCards = cardsNeeded(forestPip, total, required);
  let islandCards = cardsNeeded(islandPip, total, required);
  let mountainCards = cardsNeeded(mountainPip, total, required);
  let plainsCards = cardsNeeded(plainsPip, total, required);
  
  displayCardsRequired(swampCards, "swampRequired", "swamps");
  displayCardsRequired(forestCards, "forestRequired", "forests");
  displayCardsRequired(islandCards, "islandRequired", "islands");
  displayCardsRequired(mountainCards, "mountainRequired", "mountains");
  displayCardsRequired(plainsCards, "plainsRequired", "plains");""
}
