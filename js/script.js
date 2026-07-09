/* ==========================================
   BOT TUGA - script.js
========================================== */

console.log("BOT TUGA carregado com sucesso!");

// Atualiza automaticamente o ano no rodapé
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// Efeito ao fazer scroll na navbar
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        header.style.background = "rgba(11,17,32,.98)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";
    } else {
        header.style.background =
