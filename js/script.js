var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "<img class='video_button' src='./assests/video/pause.png' alt='Pause' />";
  } else {
    video.pause();
    btn.innerHTML = "<img class='video_button' src='./assests/video/play.png' alt='Play' />";
  }
}