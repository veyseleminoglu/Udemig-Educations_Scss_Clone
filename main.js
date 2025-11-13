// Html'den Elemanları Javascript'e Çekme
const nav = document.querySelector("nav");
const menuBtn = document.querySelector("menu-btn");


// Menü Butonuna Tıklayınca
menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});