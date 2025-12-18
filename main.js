const body = document.body;
const button = document.getElementById('modeToggleBtn');

// Initialisation du texte du bouton selon le thème actuel
function updateButtonText() {
    if(body.classList.contains('dark')) {
        button.textContent = 'Mode clair';
    } else {
        button.textContent = 'Mode sombre';
    }
}

// Met à jour le thème et le texte du bouton au clic
button.addEventListener('click', () => {
    if(body.classList.contains('dark')) {
        body.classList.remove('dark');
    } else {
        body.classList.add('dark');
    }
    updateButtonText();
});

// Initialiser le texte au chargement de la page
updateButtonText();

// les variables pour notre menu burger
var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = function(e) {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    openNav();
};

closeBtn.onclick = function(e) {
    e.preventDefault();
    closeNav();
};

function openNav() { //fonction qui ouvre la navigation
    sidenav.classList.add("active");
}

function closeNav() { //fonction qui ferme la navigation
    sidenav.classList.remove("active");
}
