const abrirMenusiño = document.getElementById('abrir-menu');
const cerrarMenusiño = document.getElementById('cerrar-menu');
const menuSiño = document.querySelector('.menu-float');
const borroso = document.getElementById('borroso');

abrirMenusiño.addEventListener("click", () => {
    menuSiño.classList.toggle('menu-float-activo');
    borroso.style.display = "block";
    setTimeout(() => {
        borroso.style.opacity = "1";
    })
});
cerrarMenusiño.addEventListener("click", () => {
    menuSiño.classList.toggle('menu-float-activo');
    borroso.style.opacity = "0";
    setTimeout(() => {
        borroso.style.display = "none";
    })
})
