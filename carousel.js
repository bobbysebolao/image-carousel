let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let rightButton = document.querySelector("#rightButton");

let leftButton = document.querySelector("#leftButton");

let count = 0;

function playForwards() {

  if (count == 0) {

  img1.classList.remove("position2", "position3", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate2", "animate3", "animateRight", "animateRight2", "animateRight3");
  img1.classList.add("animate", "position1");
  img2.classList.remove("position1", "position3", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate2", "animate3", "animateRight", "animateRight2", "animateRight3");
  img2.classList.add("animate", "position2");
  img3.classList.remove("position1", "position2", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate2", "animate3", "animateRight", "animateRight2", "animateRight3");
  img3.classList.add("animate", "position3");
  count = 1;
  }

  else if (count == 1 || count == -2) {

  img1.classList.remove("position1", "position2", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate", "animate3", "animateRight", "animateRight2", "animateRight3");
  img1.classList.add("animate2", "position3");
  img2.classList.remove("position2", "position3", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate", "animate3", "animateRight", "animateRight2", "animateRight3");
  img2.classList.add("animate2", "position1");
  img3.classList.remove("position1", "position3", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate", "animate3", "animateRight", "animateRight2", "animateRight3");
  img3.classList.add("animate2", "position2");
  count = 2;
  }

  else if (count == 2 || count == -1) {

  img1.classList.remove("position1", "position3", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate", "animate2", "animateRight", "animateRight2", "animateRight3");
  img1.classList.add("animate3", "position2");
  img2.classList.remove("position1", "position2", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate", "animate2", "animateRight", "animateRight2", "animateRight3");
  img2.classList.add("animate3", "position3");
  img3.classList.remove("position2", "position3", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate", "animate2", "animateRight", "animateRight2", "animateRight3");
  img3.classList.add("animate3", "position1");
  count = 0;
  }

}

  function playBackwards() {

  if (count == 0) {

  img1.classList.remove("position1", "position2", "position3", "positionMinus1", "positionMinus1Offset", "position1DoubleOffset", "animate", "animate2", "animate3", "animateRight2", "animateRight3");
  img1.classList.add("animateRight", "position1Offset");
  img3.classList.remove("position1", "position2", "position3", "positionMinus1", "position1Offset", "position1DoubleOffset", "animate", "animate2", "animate3", "animateRight2", "animateRight3");
  img3.classList.add("animateRight", "positionMinus1Offset");
  count = -1;
  }

  else if (count == -1 || count == 2) {

  img2.classList.remove("position1", "position2", "position3", "positionMinus1", "position1Offset", "position1DoubleOffset", "animate", "animate2", "animate3", "animateRight2", "animateRight3");
  img2.classList.add("animateRight", "positionMinus1Offset");
  img3.classList.remove("position1", "position2", "position3", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate", "animate2", "animate3", "animateRight", "animateRight3");
  img3.classList.add("animateRight2", "positionMinus1Offset");
  count = -2;
  }

  else if (count == -2 || count == 1) {

  img1.classList.remove("position1", "position2", "position3", "positionMinus1", "position1Offset", "position1DoubleOffset", "animate", "animate2", "animate3", "animateRight", "animateRight2");
  img1.classList.add("animateRight3", "positionMinus1Offset");
  img2.classList.remove("position1", "position2", "position3", "positionMinus1", "positionMinus1Offset", "position1Offset", "animate", "animate2", "animate3", "animateRight", "animateRight2");
  img2.classList.add("animateRight3", "position1DoubleOffset");
  img3.classList.remove("position1", "position2", "position3", "positionMinus1", "positionMinus1Offset", "position1Offset", "position1DoubleOffset", "animate", "animate2", "animate3", "animateRight", "animateRight2");
  count = 0;
  }
  }

rightButton.addEventListener("click", function() {playForwards();})

leftButton.addEventListener("click", function() {playBackwards();})

document.addEventListener("keydown", function(event) {
  if (event.code == "ArrowRight") {
    playForwards();
  } if (event.code == "ArrowLeft") {
    playBackwards();
  }
})

let autoplay = document.querySelector("#autoplay");

let shuffleButtons = document.querySelector("#shuffleButtons");

let nIntervID;

function startSlideshow() {
  nIntervID = window.setInterval(playForwards, 5000);
  autoplay.setAttribute("value", "checked");
  shuffleButtons.classList.add("active")
  // console.log(autoplay.value);
}

function stopSlideshow() {
  window.clearInterval(nIntervID);
  autoplay.setAttribute("value", "unchecked");
  shuffleButtons.classList.remove("active")
  // console.log(autoplay.value);
}

function toggleSlideshow() {
  if (autoplay.value == "checked") {
    stopSlideshow();

} else if (autoplay.value == "unchecked") {
  startSlideshow();
}
}

autoplay.addEventListener("click", function() {toggleSlideshow();})
