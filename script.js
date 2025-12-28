const song = document.getElementById("song");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
  song.play();
  playBtn.style.display = "none";
});

// Typed text (UNCHANGED TEXT)
new Typed("#typed", {
  strings: [
    "Happy Birthday <i>fdsafgfdsfsfdsgfg</i>",
    "Have a wonderful day",
    "Filled with joy and happiness."
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});
