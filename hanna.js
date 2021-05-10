const $menuIcono = document.querySelector(".logo-menu"),
          $menu = document.querySelector(".menu-activo"),
          $cerrar = document.querySelector(".cerrar"),
          $nav = document.querySelector("nav"),
          $logoMenu = document.querySelector(".logo-menu"),
          $contenido = document.querySelector(".contenido-normal"),
          $titulo = document.querySelector(".titulo"),
          $anclas = document.querySelectorAll(".anclas-nav"),
          $modoNocturno = document.querySelector(".modo-nocturno"),
          $modoNocturno1 = document.querySelector(".modo-nocturno1"),
          $razones = document.querySelector("#razones"),
          $cosas = document.querySelector("#cosas");

function abrirMenu() {
  $menu.classList.toggle("display-none");
  $contenido.classList.toggle("display-none");
}

function modoNocturno(e) {
  document.body.classList.toggle("body-oscuro");
  $titulo.classList.toggle("texto-oscuro");
  $nav.classList.toggle("nav-oscura");
  $anclas.forEach(el => {
    el.classList.toggle("texto-oscuro");
  });
  $logoMenu.setAttribute("src" , "https://icones.pro/wp-content/uploads/2021/04/icone-menu-cercles-gris.png");
  if(e.srcElement.className== "menu-texto modo-nocturno1") abrirMenu();
}

$menuIcono.addEventListener("click", abrirMenu);
$cerrar.addEventListener("click", abrirMenu);

$modoNocturno.addEventListener("click" , modoNocturno);
$modoNocturno1.addEventListener("click" , modoNocturno);

$razones.addEventListener("click" , () => {
  location.href="razones.html"
});
$cosas.addEventListener("click" , () => {
  location.href="cosas.html"
});

function playlist() {
  location.href = "https://youtube.com/playlist?list=PLSag-_QEZrFifyE8K-IWndGay6eIw2Y94";
}