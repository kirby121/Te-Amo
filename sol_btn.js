const d = document,
$sunBtn = d.querySelector(".sol-btn "),
$sunTitle = d.querySelector(".sol-btn-titulo"),
$sunTitle2 = d.querySelector(".a"),
$audio = d.querySelector("audio");

$audio.pause();

$sunBtn.addEventListener("click", e => {
$sunBtn.classList.add("background-yellow");
d.documentElement.classList.add("background-day");
$sunTitle.classList.add("black");
$sunTitle.textContent = "Ponte audifonos <3";
$audio.play();

setTimeout(() => {
$sunTitle2.classList.add("visible");
}, 5000);
});