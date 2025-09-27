const video = document.querySelector("#video");
// FIX: Corrected selector from ".toggleeButton" to ".toggleButton"
const toggleButton = document.querySelector(".toggleButton");

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}

function updateToggleButton() {
  toggleButton.innerHTML = video.paused ? "Play" : "Pause";
}

// Event listeners for the button and the video itself
if (toggleButton) { // Check if the element was found before adding a listener
  toggleButton.addEventListener("click", togglePlay);
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateToggleButton);
video.addEventListener("pause", updateToggleButton);
