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
};

$(document).ready(function() {
  $(".business-service").mouseover(function() {
    $(".card-triangle-bottomright").css("border-bottom", "100px solid #FF4917");
  });
  $(".business-service").mouseleave(function() {
    $(".card-triangle-bottomright").css("border-bottom", "100px solid rgba(255, 73, 23, 0.2)");
  });
});