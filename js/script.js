
const menuButton = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .flex .navbar');


if (menuButton && navbar) {
    menuButton.addEventListener('click', () => {

        menuButton.classList.toggle('fa-times');
        navbar.classList.toggle('active');

        const isExpanded = navbar.classList.contains('active');
        menuButton.setAttribute('aria-expanded', isExpanded);
    });

    // 2. Gestion du défilement de la page
    window.addEventListener('scroll', () => {

        menuButton.classList.remove('fa-times');
        navbar.classList.remove('active');
        menuButton.setAttribute('aria-expanded', 'false');
    });

    // 3. Fermeture du menu avec la touche Escape
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navbar.classList.contains('active')) {
            menuButton.classList.remove('fa-times');
            navbar.classList.remove('active');
            menuButton.setAttribute('aria-expanded', 'false');
        }
    });

    // 4. Configuration initiale pour l'accessibilité
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Menu principal');
}

