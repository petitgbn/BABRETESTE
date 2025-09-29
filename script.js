document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.link');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        // Optionnel : ajouter une classe pour animer le burger
        menuToggle.classList.toggle('is-active'); 
    });
});