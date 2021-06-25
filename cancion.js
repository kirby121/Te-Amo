const d = document,
$audio = d.querySelector("audio"),
$audioPauseBtn = d.querySelector(".reproductor-img"),
$lyrics = d.querySelector(".letra-cancion"),
lyricsArray = ["Don't cry, snowman, not in front of me", "Who'll catch your tears if you can't catch me", "Darling", "If you can't catch me, darling", "Don't cry, snowman, don't leave me this way", "A puddle of water can't hold me close, baby", "Can't hold me close, baby", "I want you to know that I'm never leaving", "'Cause I'm Mrs. Snow, 'til death we'll be freezing", "Yeah, you are my home, my home for all seasons", "So come on, let's go", "Let's go below zero and hide from the sun", "I love you forever where we'll have some fun", "Yes, let's hit the North Pole and live happily", "Please don't cry no tears now, it's Christmas, baby", "My snowman and me...", "My snowman and me..." , "Baby", "Don't cry, snowman, don't you fear the sun", "Who'll carry me without legs to run, honey", "Without legs to run, honey", "Don't cry, snowman, don't you shed a tear", "Who'll hear my secrets if you don't have ears", "Baby", "If you don't have ears, baby", "I want you to know that I'm never leaving", "'Cause I'm Mrs. Snow, 'til death we'll be freezing", "Yeah, you are my home, my home for all seasons", "So come on, let's go", "Let's go below zero and hide from the sun", "I love you forever where we'll have some fun", "Yes, let's hit the North Pole and live happily", "Please don't cry no tears now, it's Christmas, baby", "My snowman and me...", "My snowman and me..." , "Baby"],
$lyricsBtn = d.querySelector(".cuadro-letra-cancion-btn"),
$lyricsBtn1 = d.querySelector(".cuadro-letra-cancion-btn p"),
$lyricsBtn2 = d.querySelector(".cuadro-letra-cancion-btn img");

let isPaused = false,
i = 0;

$lyrics.textContent = lyricsArray[i];

d.addEventListener("click", e => {
  if(e.target.matches(".reproductor-img")){
    if(isPaused === false){
      isPaused = true;
      $audio.pause();
    }
    else if(isPaused){
      $audio.play();
      isPaused = false;
    }
  }
  
  if(e.target === $lyricsBtn || e.target === $lyricsBtn1 || e.target === $lyricsBtn2){
    i++;
    if(i >= lyricsArray.length){
      $lyrics.textContent = "fin :'3";
    }
    else{
      $lyrics.textContent = lyricsArray[i];
    }
  }
})