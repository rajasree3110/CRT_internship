audioPlayer = document.querySelector("#audio-player");
var playButton = document.querySelector("#play-btn");
var pauseButton = document.querySelector("#pause-btn");
var skipButton = document.querySelector("#skip-btn");

playButton.addEventListener("click", function() {
  audioPlayervar.play();
});

pauseButton.addEventListener("click", function() {
  audioPlayer.pause();
}); 

skipButton.addEventListener("click", function() {
  audioPlayer.currentTime += 10; // Skips 10 seconds
});
